"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import type { AffiliateCategory, AffiliateProduct, MerchantKey } from "@/i18n/affiliate-data";
import { AFFILIATE_DATA } from "@/i18n/affiliate-data";
import { MERCHANT_LABELS } from "@/i18n/affiliate-constants";
import { AfProductCard } from "./af-product-card";
import { AfIcon } from "./af-icon";

type SortKey = "relevance" | "priceAsc" | "priceDesc" | "rated";
type PriceBucket = "any" | "u300" | "u800" | "u1500" | "o1500";

const MERCHANT_ORDER: MerchantKey[] = ["shopee", "tiktok", "lazada", "official"];

const PRICE_LIMITS: Record<Exclude<PriceBucket, "any">, { min?: number; max?: number }> = {
  u300:  { max: 299999 },
  u800:  { max: 799999 },
  u1500: { max: 1499999 },
  o1500: { min: 1500000 },
};

const RATING_LEVELS = [
  { key: "any", value: 0 },
  { key: "r90", value: 9.0 },
  { key: "r85", value: 8.5 },
  { key: "r80", value: 8.0 },
] as const;

function strip(s: string): string {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

function parseVnd(s: string): number {
  return Number(s.replace(/[^\d]/g, "")) || 0;
}

type FilterState = {
  cat: string;
  merchants: Set<MerchantKey>;
  priceBucket: PriceBucket;
  minScore: number;
  onSale: boolean;
  sort: SortKey;
};

function buildUrl(locale: string, q: string, f: FilterState): string {
  const sp = new URLSearchParams();
  if (q) sp.set("q", q);
  if (f.cat) sp.set("cat", f.cat);
  if (f.merchants.size) sp.set("m", [...f.merchants].join(","));
  if (f.priceBucket !== "any") sp.set("price", f.priceBucket);
  if (f.minScore) sp.set("rating", String(f.minScore));
  if (f.onSale) sp.set("sale", "1");
  if (f.sort !== "relevance") sp.set("sort", f.sort);
  const qs = sp.toString();
  return `/${locale}/search${qs ? `?${qs}` : ""}`;
}

function filterAndSort(
  products: AffiliateProduct[],
  q: string,
  f: FilterState,
  locale: Locale,
  dealPids: Set<string>
): AffiliateProduct[] {
  const needle = strip(q);

  let list = products.filter((p) => {
    if (needle) {
      const hay = strip(
        [p.name[locale], p.why[locale], p.cat[locale], ...p.tags[locale]].join(" ")
      );
      if (!hay.includes(needle)) return false;
    }
    if (f.cat && p.catSlug !== f.cat) return false;
    if (f.merchants.size && !p.merchants.some((m) => f.merchants.has(m))) return false;
    if (f.priceBucket !== "any") {
      const price = parseVnd(p.priceLow);
      const limits = PRICE_LIMITS[f.priceBucket];
      if (limits.max !== undefined && price > limits.max) return false;
      if (limits.min !== undefined && price < limits.min) return false;
    }
    if (f.minScore && p.score < f.minScore) return false;
    if (f.onSale && !dealPids.has(p.id)) return false;
    return true;
  });

  switch (f.sort) {
    case "priceAsc":
      list = [...list].sort((a, b) => parseVnd(a.priceLow) - parseVnd(b.priceLow));
      break;
    case "priceDesc":
      list = [...list].sort((a, b) => parseVnd(b.priceLow) - parseVnd(a.priceLow));
      break;
    case "rated":
      list = [...list].sort((a, b) => b.score - a.score);
      break;
    default:
      if (needle) {
        list = [...list].sort((a, b) => {
          const an = strip(a.name[locale]).includes(needle) ? 1 : 0;
          const bn = strip(b.name[locale]).includes(needle) ? 1 : 0;
          if (bn !== an) return bn - an;
          return b.score - a.score;
        });
      } else {
        list = [...list].sort((a, b) => b.score - a.score);
      }
  }
  return list;
}

type Props = {
  locale: Locale;
  t: Dictionary;
  products: AffiliateProduct[];
  categories: AffiliateCategory[];
};

export function AfSearch({ locale, t, products, categories }: Props) {
  const router = useRouter();
  const sp = useSearchParams();
  const s = t.affiliate.search;
  const ui = t.affiliate.ui;

  const [q, setQ] = useState(sp.get("q") ?? "");
  const [filters, setFilters] = useState<FilterState>(() => ({
    cat: sp.get("cat") ?? "",
    merchants: new Set(
      (sp.get("m") ?? "").split(",").filter(Boolean) as MerchantKey[]
    ),
    priceBucket: (sp.get("price") as PriceBucket) ?? "any",
    minScore: Number(sp.get("rating") ?? 0),
    onSale: sp.get("sale") === "1",
    sort: (sp.get("sort") as SortKey) ?? "relevance",
  }));

  const dealPids = useMemo(
    () => new Set(AFFILIATE_DATA.deals.map((d) => d.pid)),
    []
  );

  // Debounce URL sync for text query only
  const didMount = useRef(false);
  const filtersRef = useRef(filters);
  filtersRef.current = filters;

  useEffect(() => {
    if (!didMount.current) { didMount.current = true; return; }
    const id = setTimeout(() => {
      router.replace(buildUrl(locale, q, filtersRef.current), { scroll: false });
    }, 280);
    return () => clearTimeout(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  // Immediate URL sync for filter chips
  function applyFilter(patch: Partial<FilterState>) {
    const next = { ...filters, ...patch };
    setFilters(next);
    router.replace(buildUrl(locale, q, next), { scroll: false });
  }

  function toggleMerchant(m: MerchantKey) {
    const merchants = new Set(filters.merchants);
    if (merchants.has(m)) merchants.delete(m); else merchants.add(m);
    applyFilter({ merchants });
  }

  function clearAll() {
    const empty: FilterState = {
      cat: "",
      merchants: new Set(),
      priceBucket: "any",
      minScore: 0,
      onSale: false,
      sort: "relevance",
    };
    setQ("");
    setFilters(empty);
    router.replace(`/${locale}/search`, { scroll: false });
  }

  const visible = useMemo(
    () => filterAndSort(products, q, filters, locale, dealPids),
    [products, q, filters, locale, dealPids]
  );

  const hasFilters =
    !!filters.cat ||
    filters.merchants.size > 0 ||
    filters.priceBucket !== "any" ||
    filters.minScore > 0 ||
    filters.onSale;

  const resultLabel = s.resultsLabel.replace("{n}", String(visible.length));

  const availableMerchants = useMemo(
    () => MERCHANT_ORDER.filter((m) => products.some((p) => p.merchants.includes(m))),
    [products]
  );

  return (
    <div className="af-search-wrap">
      {/* Search bar */}
      <div className="af-search-bar">
        <div className="af-search-input-wrap">
          <AfIcon name="search" size={18} />
          <input
            type="search"
            className="af-search-input"
            placeholder={s.placeholder}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label={ui.searchAria}
          />
          {q && (
            <button
              type="button"
              className="af-search-clear"
              aria-label={ui.clearSearchAria}
              onClick={() => {
                setQ("");
                router.replace(buildUrl(locale, "", filters), { scroll: false });
              }}
            >
              <AfIcon name="x" size={14} />
            </button>
          )}
        </div>
      </div>

      <div className="af-search-body">
        {/* Filter sidebar */}
        <aside className="af-search-filters" aria-label={s.filtersLabel}>
          {/* Category */}
          <div className="af-search-group">
            <h3 className="af-search-group__label">{s.categoryLabel}</h3>
            <div className="af-search-chips">
              <button
                type="button"
                className={`af-fc${!filters.cat ? " is-active" : ""}`}
                onClick={() => applyFilter({ cat: "" })}
              >
                {s.allLabel}
              </button>
              {categories.map((c) => (
                <button
                  key={c.slug}
                  type="button"
                  className={`af-fc${filters.cat === c.slug ? " is-active" : ""}`}
                  onClick={() => applyFilter({ cat: c.slug })}
                >
                  {c[locale]}
                </button>
              ))}
            </div>
          </div>

          {/* Merchant */}
          <div className="af-search-group">
            <h3 className="af-search-group__label">{s.merchantLabel}</h3>
            <div className="af-search-chips">
              {availableMerchants.map((m) => (
                <button
                  key={m}
                  type="button"
                  className={`af-fc${filters.merchants.has(m) ? " is-active" : ""}`}
                  onClick={() => toggleMerchant(m)}
                >
                  {MERCHANT_LABELS[m][locale]}
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="af-search-group">
            <h3 className="af-search-group__label">{s.priceLabel}</h3>
            <div className="af-search-chips">
              {(["any", "u300", "u800", "u1500", "o1500"] as PriceBucket[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  className={`af-fc${filters.priceBucket === key ? " is-active" : ""}`}
                  onClick={() => applyFilter({ priceBucket: key })}
                >
                  {s.priceBuckets[key]}
                </button>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div className="af-search-group">
            <h3 className="af-search-group__label">{s.ratingLabel}</h3>
            <div className="af-search-chips">
              {RATING_LEVELS.map(({ key, value }) => (
                <button
                  key={key}
                  type="button"
                  className={`af-fc${filters.minScore === value ? " is-active" : ""}`}
                  onClick={() => applyFilter({ minScore: value })}
                >
                  {s.ratingOptions[key]}
                </button>
              ))}
            </div>
          </div>

          {/* On sale toggle */}
          <div className="af-search-group">
            <h3 className="af-search-group__label">{s.onSaleLabel}</h3>
            <div className="af-search-chips">
              <button
                type="button"
                className={`af-fc af-fc--toggle${filters.onSale ? " is-active" : ""}`}
                aria-pressed={filters.onSale}
                onClick={() => applyFilter({ onSale: !filters.onSale })}
              >
                {s.onSaleLabel}
              </button>
            </div>
          </div>

          {(hasFilters || q) && (
            <button type="button" className="af-filter-clear" onClick={clearAll}>
              {s.clearAll}
            </button>
          )}
        </aside>

        {/* Results */}
        <div className="af-search-main">
          <div className="af-search-toolbar">
            <span className="count">{resultLabel}</span>
            <label className="af-sort-wrap">
              <span className="sr-label">{s.sortLabel}</span>
              <select
                className="af-sort-select"
                value={filters.sort}
                onChange={(e) => applyFilter({ sort: e.target.value as SortKey })}
                aria-label={s.sortLabel}
              >
                {(["relevance", "priceAsc", "priceDesc", "rated"] as SortKey[]).map((key) => (
                  <option key={key} value={key}>{s.sortOptions[key]}</option>
                ))}
              </select>
            </label>
          </div>

          {visible.length > 0 ? (
            <div className="af-coll-grid">
              {visible.map((p) => (
                <AfProductCard key={p.id} variant="grid" product={p} t={t} locale={locale} />
              ))}
            </div>
          ) : (
            <div className="af-coll-empty">
              <h3>{s.noResultsTitle}</h3>
              <p>{s.noResultsBody}</p>
              {(hasFilters || q) && (
                <button type="button" className="af-btn af-btn--ghost" onClick={clearAll}>
                  {s.clearAll}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
