import type { CSSProperties } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { AFFILIATE_DATA, type AffiliateProduct } from "@/i18n/affiliate-data";
import { AfSectionHead } from "./af-section-head";
import { AfBadge } from "./af-badge";
import { AfIcon } from "./af-icon";

type Props = { t: Dictionary; locale: Locale };

// Mirror the design's curated lineup (page-home.jsx)
const PICK_INDICES = [0, 1, 3, 7, 2, 9] as const;

export function AfBestPicksSection({ t, locale }: Props) {
  const s = t.affiliate.sections.bestPicks;
  const ui = t.affiliate.ui;
  const labels = [
    s.labels.bestOverall,
    s.labels.bestBudget,
    s.labels.bestForGift,
    s.labels.bestForDesk,
    s.labels.bestLimited,
    s.labels.bestCute,
  ];
  const rows: { label: string; p: AffiliateProduct }[] = PICK_INDICES.map((idx, i) => ({
    label: labels[i],
    p: AFFILIATE_DATA.products[idx],
  }));

  return (
    <section
      className="af-section"
      id="best-picks"
      aria-labelledby="af-picks-title"
      style={{
        background: "var(--bg-2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="af-container">
        <AfSectionHead
          id="af-picks-title"
          eyebrow={s.eyebrow}
          title={<>{s.titlePre} <span className="af-it">{s.titleIt}</span>{s.titlePost}</>}
          lead={s.lead}
          action={
            <a href="#best-picks" className="af-btn af-btn--primary">
              {s.viewAll} <AfIcon name="arrow" size={14} />
            </a>
          }
        />

        <div className="af-grid-3">
          {rows.map((row, i) => {
            const phStyle = {
              "--phx": row.p.ph.a,
              "--phy": row.p.ph.b,
              position: "absolute",
              inset: 0,
            } as CSSProperties;
            return (
              <article key={i} className="af-pick" aria-label={row.p.name[locale]}>
                <div className="af-pick__head">
                  <AfBadge variant="editor">{row.label}</AfBadge>
                  <meter
                    className="af-pick__score"
                    value={row.p.score}
                    min={0}
                    max={10}
                    aria-label={`${ui.whyWePicked} · ${row.p.score.toFixed(1)} / 10`}
                  >
                    {row.p.score.toFixed(1)}
                  </meter>
                </div>
                <div className="af-pick__media">
                  <div className="af-product__ph" style={phStyle} />
                </div>
                <div>
                  <div className="af-product__cat">{row.p.cat[locale]}</div>
                  <h3 className="af-h3" style={{ marginTop: 4 }}>{row.p.name[locale]}</h3>
                </div>
                <p className="af-pick__why">{row.p.why[locale]}</p>
                <div className="af-pick__bottom">
                  <span className="af-product__price">{row.p.priceLow}</span>
                  <a
                    href="#"
                    className="af-deal__cta"
                    rel="sponsored nofollow noopener"
                  >
                    {ui.viewDeal} <AfIcon name="arrow" size={12} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
