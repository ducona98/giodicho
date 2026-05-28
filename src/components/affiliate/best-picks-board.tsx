"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import type { AffiliateProduct, BestPickSlot } from "@/i18n/affiliate-data";
import { AfProductCard } from "./af-product-card";
import { AfBadge } from "./af-badge";
import { AfRatingScore } from "./af-rating-score";
import { AfPriceDisplay } from "./af-price-display";
import { AfMerchant } from "./af-merchant";
import { AfIcon } from "./af-icon";

export type BestPick = {
  slot: BestPickSlot;
  label: string;
  product: AffiliateProduct;
  alternatives: AffiliateProduct[];
};

type Props = {
  picks: BestPick[];
  t: Dictionary;
  locale: Locale;
};

export function AfBestPicksBoard({ picks, t, locale }: Props) {
  const bp = t.affiliate.bestPicks;
  const ui = t.affiliate.ui;
  const [active, setActive] = useState<BestPickSlot | "all">("all");

  const activePick =
    active === "all" ? picks[0] : picks.find((p) => p.slot === active) ?? picks[0];
  if (!activePick) return null;

  const p = activePick.product;
  const prosPreview = p.pros?.[locale]?.slice(0, 3) ?? [];
  const others = picks.filter((x) => x.slot !== activePick.slot);

  const tabs: { key: BestPickSlot | "all"; label: string }[] = [
    { key: "all", label: bp.tabAll },
    ...picks.map((x) => ({ key: x.slot, label: x.label })),
  ];

  return (
    <div className="af-bp-board">
      <div className="af-bp-tabs" role="tablist" aria-label={bp.eyebrow}>
        {tabs.map((tab) => {
          const on = active === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={on}
              className={`af-bp-tab${on ? " is-active" : ""}`}
              onClick={() => setActive(tab.key)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <article className="af-bp-featured" aria-label={p.name[locale]}>
        <div
          className="af-bp-featured__media"
          style={{ "--phx": p.ph.a, "--phy": p.ph.b } as CSSProperties}
          aria-hidden="true"
        />
        <div className="af-bp-featured__body">
          <div className="af-bp-featured__head">
            <AfBadge variant="editor">{activePick.label}</AfBadge>
            <AfRatingScore
              score={p.score}
              ariaLabel={`${ui.whyWePicked} · ${p.score.toFixed(1)} / 10`}
            />
          </div>
          <div className="af-eyebrow af-bp-featured__eyebrow">{bp.featuredEyebrow}</div>
          <div className="af-product__cat">{p.cat[locale]}</div>
          <h3 className="af-h3">{p.name[locale]}</h3>
          <p className="af-bp-featured__why">{p.why[locale]}</p>

          {prosPreview.length > 0 && (
            <ul className="af-bp-featured__pros">
              {prosPreview.map((pro) => (
                <li key={pro}>{pro}</li>
              ))}
            </ul>
          )}

          <div className="af-bp-featured__priceRow">
            <AfPriceDisplay price={p.priceLow} />
            <div className="af-product__merchants" aria-hidden="true">
              {p.merchants.map((m) => (
                <AfMerchant key={m} keyId={m} />
              ))}
            </div>
          </div>

          <div className="af-bp-featured__actions">
            <a
              href={`/${locale}/p/${p.slug ?? p.id}`}
              className="af-btn af-btn--primary"
            >
              {ui.viewDeal} <AfIcon name="arrow" size={14} />
            </a>
            <button type="button" className="af-btn af-btn--ghost">
              {ui.compare}
            </button>
            <a href="#bp-guides" className="af-bp-featured__readlink">
              {ui.readGuide} →
            </a>
          </div>
        </div>
      </article>

      {active === "all" ? (
        <div className="af-bp-sub">
          <h3 className="af-bp-sub__title">{bp.otherTitle}</h3>
          <div className="af-grid-3">
            {others.map((x) => (
              <AfProductCard
                key={x.product.id}
                variant="pick"
                product={x.product}
                pickLabel={x.label}
                t={t}
                locale={locale}
              />
            ))}
          </div>
        </div>
      ) : (
        activePick.alternatives.length > 0 && (
          <div className="af-bp-sub">
            <h3 className="af-bp-sub__title">{bp.altTitle}</h3>
            <p className="af-bp-sub__lead">{bp.altLead}</p>
            <div className="af-grid-3">
              {activePick.alternatives.map((alt) => (
                <AfProductCard
                  key={alt.id}
                  variant="grid"
                  product={alt}
                  t={t}
                  locale={locale}
                />
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}
