"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import type {
  AffiliateArticle,
  AffiliateProduct,
  AffiliateSpec,
} from "@/i18n/affiliate-data";
import { COMPARE_SPECS } from "@/i18n/affiliate-data";
import { BADGE_LABELS } from "@/i18n/affiliate-constants";
import { AfBadge } from "./af-badge";
import { AfRatingScore } from "./af-rating-score";
import { AfMerchant } from "./af-merchant";
import { AfProsCons } from "./af-pros-cons";
import { AfProductCard } from "./af-product-card";
import { AfArticleCard } from "./af-article-card";
import { AfSectionHead } from "./af-section-head";
import { AfIcon } from "./af-icon";

type Props = {
  products: AffiliateProduct[];
  articles: AffiliateArticle[];
  t: Dictionary;
  locale: Locale;
};

const DEFAULT_IDS = ["astro-pilot", "neon-ronin", "mecha-drifter"];
const MIN = 2;
const MAX = 4;

export function AfCompareBoard({ products, articles, t, locale }: Props) {
  const cp = t.affiliate.comparePage;
  const pd = t.affiliate.productDetail;
  const ui = t.affiliate.ui;

  const byId = useMemo(() => {
    const map = new Map<string, AffiliateProduct>();
    for (const p of products) map.set(p.id, p);
    return map;
  }, [products]);

  const sanitize = (ids: string[]) =>
    ids.filter((id, i) => byId.has(id) && ids.indexOf(id) === i).slice(0, MAX);

  const [selected, setSelected] = useState<string[]>(() =>
    sanitize(DEFAULT_IDS)
  );
  const [pickerOpen, setPickerOpen] = useState(false);

  // Deep-link support: ?ids=a,b,c overrides the default on mount.
  useEffect(() => {
    const raw = new URLSearchParams(window.location.search).get("ids");
    if (!raw) return;
    const parsed = sanitize(raw.split(",").map((s) => s.trim()));
    if (parsed.length >= MIN) setSelected(parsed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const items = selected
    .map((id) => byId.get(id))
    .filter((p): p is AffiliateProduct => Boolean(p));

  const remaining = products.filter((p) => !selected.includes(p.id));
  const canAdd = selected.length < MAX;
  const canRemove = selected.length > MIN;

  const addProduct = (id: string) => {
    setSelected((prev) => (prev.includes(id) || prev.length >= MAX ? prev : [...prev, id]));
    if (selected.length + 1 >= MAX) setPickerOpen(false);
  };
  const removeProduct = (id: string) => {
    setSelected((prev) => (prev.length <= MIN ? prev : prev.filter((x) => x !== id)));
  };

  const bestScore = items.reduce((max, p) => Math.max(max, p.score), 0);

  // Same-category products not currently selected.
  const selectedCats = new Set(items.map((p) => p.catSlug));
  const alternatives = products
    .filter((p) => !selected.includes(p.id) && selectedCats.has(p.catSlug))
    .slice(0, 3);

  // Guides that reference any selected product, else the first few.
  const selectedSet = new Set(selected);
  let guides = articles.filter((a) =>
    (a.relatedProductIds ?? []).some((id) => selectedSet.has(id))
  );
  if (guides.length === 0) guides = articles.slice(0, 3);
  guides = guides.slice(0, 3);

  const valueOrDash = (v: string | undefined) => (v && v.length > 0 ? v : "—");

  const matrixStyle = { "--cols": items.length } as CSSProperties;

  return (
    <div className="af-cmp-board">
      <div className="af-cmp-selector">
        <div className="af-cmp-selector__bar">
          <span className="af-cmp-selector__title">
            {cp.selectorTitle} · {items.length}/{MAX}
          </span>
          {canAdd && (
            <button
              type="button"
              className="af-btn af-btn--ghost"
              aria-expanded={pickerOpen}
              onClick={() => setPickerOpen((o) => !o)}
            >
              <AfIcon name="plus" size={14} /> {cp.addProduct}
            </button>
          )}
        </div>
        {pickerOpen && canAdd && (
          <div className="af-cmp-picker" role="group" aria-label={cp.pickerTitle}>
            <div className="af-cmp-picker__title">{cp.pickerTitle}</div>
            {remaining.length === 0 ? (
              <p className="af-cmp-picker__empty">{cp.pickerEmpty}</p>
            ) : (
              <div className="af-cmp-picker__chips">
                {remaining.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    className="af-bp-tab"
                    onClick={() => addProduct(p.id)}
                  >
                    {p.name[locale]}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        <p className="af-cmp-selector__note">{cp.maxNote}</p>
      </div>

      {items.length < MIN ? (
        <div className="af-coll-empty">
          <h3>{cp.emptyTitle}</h3>
          <p>{cp.emptyBody}</p>
        </div>
      ) : (
        <>
          <div className="af-cmp-matrix" style={matrixStyle}>
            {items.map((p) => {
              const isRec = p.score === bestScore;
              const badgeLabel = p.badge ? BADGE_LABELS[p.badge][locale] : null;
              const specs = p.specs?.[locale];
              const bestFor = p.bestFor?.[locale]?.slice(0, 3).join(", ");
              const style = p.tags[locale].slice(0, 3).join(", ");
              return (
                <article
                  key={p.id}
                  className={`af-cmp-col${isRec ? " is-rec" : ""}`}
                  aria-label={p.name[locale]}
                >
                  {isRec && (
                    <div className="af-cmp-col__ribbon">{cp.recommendedLabel}</div>
                  )}
                  <div className="af-cmp-col__head">
                    {canRemove && (
                      <button
                        type="button"
                        className="af-cmp-col__remove"
                        aria-label={`${cp.removeAria} — ${p.name[locale]}`}
                        onClick={() => removeProduct(p.id)}
                      >
                        <AfIcon name="x" size={14} />
                      </button>
                    )}
                    <div
                      className="af-cmp-col__media"
                      style={{ "--phx": p.ph.a, "--phy": p.ph.b } as CSSProperties}
                      aria-hidden="true"
                    />
                    <div className="af-product__cat">{p.cat[locale]}</div>
                    <h3 className="af-cmp-col__name">
                      <a href={`/${locale}/p/${p.slug ?? p.id}`}>{p.name[locale]}</a>
                    </h3>
                    {badgeLabel && p.badge && (
                      <div className="af-cmp-col__badge">
                        <AfBadge variant={p.badge}>{badgeLabel}</AfBadge>
                      </div>
                    )}
                  </div>

                  <div className="af-cmp-col__rows">
                    <div className="af-cmp-row">
                      <span className="k">{cp.rowLabels.score}</span>
                      <span className="v">
                        <span className="af-cmp-score">{p.score.toFixed(1)}</span>
                        <span className="af-cmp-score__max" aria-hidden="true"> / 10</span>
                      </span>
                    </div>
                    <div className="af-cmp-row">
                      <span className="k">{cp.rowLabels.rating}</span>
                      <span className="v">
                        <span className="star" aria-hidden="true">★</span> {p.stars.toFixed(1)}
                        <span className="af-cmp-reviews">
                          {" · "}{pd.reviewsCount.replace("{n}", String(p.reviews))}
                        </span>
                      </span>
                    </div>
                    <div className="af-cmp-row">
                      <span className="k">{cp.rowLabels.price}</span>
                      <span className="v price">{p.price}</span>
                    </div>
                    <div className="af-cmp-row">
                      <span className="k">{cp.rowLabels.bestFor}</span>
                      <span className="v">{valueOrDash(bestFor)}</span>
                    </div>
                    {COMPARE_SPECS.map((spec) => (
                      <div className="af-cmp-row" key={spec.key}>
                        <span className="k">{spec.label[locale]}</span>
                        <span className="v">
                          {valueOrDash(specs?.[spec.key as keyof AffiliateSpec])}
                        </span>
                      </div>
                    ))}
                    <div className="af-cmp-row">
                      <span className="k">{cp.rowLabels.style}</span>
                      <span className="v">{valueOrDash(style)}</span>
                    </div>
                    <div className="af-cmp-row">
                      <span className="k">{cp.rowLabels.merchants}</span>
                      <span className="v">
                        <span className="af-product__merchants" aria-hidden="true">
                          {p.merchants.map((m) => (
                            <AfMerchant key={m} keyId={m} />
                          ))}
                        </span>
                      </span>
                    </div>
                  </div>

                  <a
                    href={`/${locale}/p/${p.slug ?? p.id}`}
                    className="af-btn af-btn--primary af-cmp-cta"
                  >
                    {ui.viewDeal} <AfIcon name="arrow" size={14} />
                  </a>
                </article>
              );
            })}
          </div>

          <section className="af-section af-section--tight" aria-labelledby="cmp-proscons">
            <div className="af-container">
              <AfSectionHead id="cmp-proscons" title={cp.prosConsTitle} />
              <div className="af-cmp-proscons" style={matrixStyle}>
                {items.map((p) => (
                  <div className="af-cmp-proscons__col" key={p.id}>
                    <div className="af-cmp-proscons__name">{p.name[locale]}</div>
                    <AfProsCons
                      pros={p.pros?.[locale] ?? []}
                      cons={p.cons?.[locale] ?? []}
                      prosTitle={pd.prosTitle}
                      consTitle={pd.consTitle}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {alternatives.length > 0 && (
            <section
              className="af-section"
              aria-labelledby="cmp-alts"
              style={{
                background: "var(--bg-2)",
                borderTop: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div className="af-container">
                <AfSectionHead
                  id="cmp-alts"
                  eyebrow={t.affiliate.sections.bestPicks.eyebrow}
                  title={cp.alternativesTitle}
                  lead={cp.alternativesLead}
                />
                <div className="af-grid-3">
                  {alternatives.map((p) => (
                    <AfProductCard
                      key={p.id}
                      variant="grid"
                      product={p}
                      t={t}
                      locale={locale}
                      href={`/${locale}/p/${p.slug ?? p.id}`}
                    />
                  ))}
                </div>
              </div>
            </section>
          )}

          {guides.length > 0 && (
            <section className="af-section" aria-labelledby="cmp-guides">
              <div className="af-container">
                <AfSectionHead
                  id="cmp-guides"
                  eyebrow={t.affiliate.sections.reviews.eyebrow}
                  title={t.affiliate.collection.guidesTitle}
                  lead={t.affiliate.collection.guidesLead}
                />
                <div className="af-grid-3">
                  {guides.map((a) => (
                    <AfArticleCard
                      key={a.id}
                      article={a}
                      t={t}
                      locale={locale}
                      href={`/${locale}/guides/${a.slug ?? a.id}`}
                    />
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}
