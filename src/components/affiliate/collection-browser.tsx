"use client";

import { useEffect, useMemo, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import type { AffiliateProduct, BadgeKey, MerchantKey } from "@/i18n/affiliate-data";
import { BADGE_LABELS, MERCHANT_LABELS } from "@/i18n/affiliate-constants";
import { AfProductCard } from "./af-product-card";
import { AfIcon } from "./af-icon";

type Props = {
  products: AffiliateProduct[];
  dealPids: string[];
  t: Dictionary;
  locale: Locale;
};

type SortKey = "recommended" | "priceAsc" | "priceDesc" | "rated" | "deals";

const MERCHANT_ORDER: MerchantKey[] = ["shopee", "tiktok", "lazada", "official"];
const BADGE_ORDER: BadgeKey[] = ["best", "value", "limited", "gift", "deal", "new"];
const RATING_LEVELS = [
  { key: "any", value: 0 },
  { key: "r90", value: 9.0 },
  { key: "r85", value: 8.5 },
  { key: "r80", value: 8.0 },
] as const;

function parsePrice(s: string): number {
  const n = Number(s.replace(/[^\d]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

export function AfCollectionBrowser({ products, dealPids, t, locale }: Props) {
  const c = t.affiliate.collection;
  const ui = t.affiliate.ui;

  const [merchants, setMerchants] = useState<Set<MerchantKey>>(new Set());
  const [badges, setBadges] = useState<Set<BadgeKey>>(new Set());
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [minScore, setMinScore] = useState(0);
  const [sort, setSort] = useState<SortKey>("recommended");
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Facets computed from the full collection set, not the filtered view.
  const merchantFacets = useMemo(
    () =>
      MERCHANT_ORDER.filter((m) =>
        products.some((p) => p.merchants.includes(m))
      ).map((m) => ({
        key: m,
        count: products.filter((p) => p.merchants.includes(m)).length,
      })),
    [products]
  );
  const badgeFacets = useMemo(
    () =>
      BADGE_ORDER.filter((b) => products.some((p) => p.badge === b)).map((b) => ({
        key: b,
        count: products.filter((p) => p.badge === b).length,
      })),
    [products]
  );

  const dealSet = useMemo(() => new Set(dealPids), [dealPids]);

  const visible = useMemo(() => {
    const min = priceMin ? parsePrice(priceMin) : null;
    const max = priceMax ? parsePrice(priceMax) : null;
    let list = products.filter((p) => {
      if (merchants.size && !p.merchants.some((m) => merchants.has(m))) return false;
      if (badges.size && !(p.badge && badges.has(p.badge))) return false;
      if (minScore && p.score < minScore) return false;
      const price = parsePrice(p.priceLow);
      if (min !== null && price < min) return false;
      if (max !== null && price > max) return false;
      return true;
    });
    const by = [...list];
    switch (sort) {
      case "priceAsc":
        by.sort((a, b) => parsePrice(a.priceLow) - parsePrice(b.priceLow));
        break;
      case "priceDesc":
        by.sort((a, b) => parsePrice(b.priceLow) - parsePrice(a.priceLow));
        break;
      case "rated":
        by.sort((a, b) => b.score - a.score);
        break;
      case "deals":
        by.sort((a, b) => Number(dealSet.has(b.id)) - Number(dealSet.has(a.id)));
        break;
      default:
        break; // recommended = original order
    }
    list = by;
    return list;
  }, [products, merchants, badges, minScore, priceMin, priceMax, sort, dealSet]);

  const hasFilters =
    merchants.size > 0 ||
    badges.size > 0 ||
    minScore > 0 ||
    priceMin !== "" ||
    priceMax !== "";

  function toggle<T>(set: Set<T>, value: T): Set<T> {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    return next;
  }

  function clearFilters() {
    setMerchants(new Set());
    setBadges(new Set());
    setPriceMin("");
    setPriceMax("");
    setMinScore(0);
  }

  // Mobile drawer: lock body scroll + close on Escape.
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const resultCount = c.resultCount.replace("{n}", String(visible.length));

  return (
    <div className="af-coll-body">
      <div
        className={`af-filter-backdrop${drawerOpen ? " is-open" : ""}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`af-filter-panel${drawerOpen ? " is-open" : ""}`}
        aria-label={c.filtersTitle}
      >
        <div className="af-filter-head">
          <h2 className="af-filter-title">{c.filtersTitle}</h2>
          <button
            type="button"
            className="af-iconbtn af-filter-close"
            aria-label={c.filterCloseAria}
            onClick={() => setDrawerOpen(false)}
          >
            <AfIcon name="x" />
          </button>
        </div>

        {merchantFacets.length > 0 && (
          <div className="af-filter-group">
            <h5>{c.groups.merchant}</h5>
            {merchantFacets.map(({ key, count }) => {
              const on = merchants.has(key);
              return (
                <button
                  key={key}
                  type="button"
                  className="af-filter-row"
                  aria-pressed={on}
                  onClick={() => setMerchants((s) => toggle(s, key))}
                >
                  <span>
                    <span className={`chk${on ? " on" : ""}`} aria-hidden="true" />
                    {MERCHANT_LABELS[key][locale]}
                  </span>
                  <span className="count">{count}</span>
                </button>
              );
            })}
          </div>
        )}

        {badgeFacets.length > 0 && (
          <div className="af-filter-group">
            <h5>{c.groups.badge}</h5>
            {badgeFacets.map(({ key, count }) => {
              const on = badges.has(key);
              return (
                <button
                  key={key}
                  type="button"
                  className="af-filter-row"
                  aria-pressed={on}
                  onClick={() => setBadges((s) => toggle(s, key))}
                >
                  <span>
                    <span className={`chk${on ? " on" : ""}`} aria-hidden="true" />
                    {BADGE_LABELS[key][locale]}
                  </span>
                  <span className="count">{count}</span>
                </button>
              );
            })}
          </div>
        )}

        <div className="af-filter-group">
          <h5>{c.groups.price}</h5>
          <div className="af-filter-range">
            <input
              type="text"
              inputMode="numeric"
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
              placeholder={c.priceMin}
              aria-label={`${c.groups.price} — ${c.priceMin}`}
            />
            <input
              type="text"
              inputMode="numeric"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
              placeholder={c.priceMax}
              aria-label={`${c.groups.price} — ${c.priceMax}`}
            />
          </div>
        </div>

        <div className="af-filter-group">
          <h5>{c.groups.rating}</h5>
          {RATING_LEVELS.map(({ key, value }) => {
            const on = minScore === value;
            return (
              <button
                key={key}
                type="button"
                className="af-filter-row"
                aria-pressed={on}
                onClick={() => setMinScore(value)}
              >
                <span>
                  <span className={`chk${on ? " on" : ""}`} aria-hidden="true" />
                  {c.ratingOptions[key]}
                </span>
              </button>
            );
          })}
        </div>

        {hasFilters && (
          <button type="button" className="af-filter-clear" onClick={clearFilters}>
            {c.clearFilters}
          </button>
        )}
      </aside>

      <div className="af-coll-main">
        <div className="af-coll-toolbar">
          <div className="af-coll-toolbar__left">
            <button
              type="button"
              className="af-filter-toggle"
              onClick={() => setDrawerOpen(true)}
              aria-expanded={drawerOpen}
            >
              <AfIcon name="filter" size={14} /> {c.filterToggle}
            </button>
            <span className="count">{resultCount}</span>
          </div>
          <label className="af-sort-wrap">
            <span className="sr-label">{c.sortLabel}</span>
            <select
              className="af-sort-select"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              aria-label={c.sortLabel}
            >
              <option value="recommended">{c.sortOptions.recommended}</option>
              <option value="priceAsc">{c.sortOptions.priceAsc}</option>
              <option value="priceDesc">{c.sortOptions.priceDesc}</option>
              <option value="rated">{c.sortOptions.rated}</option>
              <option value="deals">{c.sortOptions.deals}</option>
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
            <h3>{c.emptyTitle}</h3>
            <p>{c.emptyBody}</p>
            <button type="button" className="af-btn af-btn--ghost" onClick={clearFilters}>
              {c.clearFilters}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
