import type { CSSProperties } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { AFFILIATE_DATA, type AffiliateProduct } from "@/i18n/affiliate-data";
import { AfSectionHead } from "./af-section-head";

type Props = { t: Dictionary; locale: Locale };

// Mirror the curated picks per band from page-home.jsx
const BAND_INDICES: ReadonlyArray<readonly number[]> = [
  [7, 9, 3],
  [1, 5, 10],
  [10, 1, 3],
  [0, 4, 8],
];

export function AfGiftBudgetSection({ t, locale }: Props) {
  const s = t.affiliate.sections.gifts;
  const ui = t.affiliate.ui;
  const bands = [s.bands.under300k, s.bands.mid, s.bands.high, s.bands.over15M];

  return (
    <section className="af-section af-section--tight" aria-labelledby="af-gifts-title">
      <div className="af-container">
        <AfSectionHead
          id="af-gifts-title"
          eyebrow={s.eyebrow}
          title={<>{s.titlePre} <span className="af-it">{s.titleIt}</span>{s.titlePost}</>}
        />

        <div className="af-gift-cols">
          {bands.map((label, i) => {
            const products = BAND_INDICES[i]
              .map((idx) => AFFILIATE_DATA.products[idx])
              .filter(Boolean) as AffiliateProduct[];
            return (
              <div key={i} className="af-gift-col">
                <div className="af-gift-col__h">
                  <div>
                    <div className="af-eyebrow" style={{ marginBottom: 8 }}>{label}</div>
                  </div>
                </div>
                <div className="af-gift-col__list">
                  {products.map((pp, j) => (
                    <div key={j} className="af-gift-item">
                      <div
                        className="af-gift-item__ph"
                        style={{ "--phx": pp.ph.a } as CSSProperties}
                        aria-hidden="true"
                      />
                      <div>
                        <div className="af-gift-item__name">{pp.name[locale]}</div>
                        <div className="af-gift-item__price">{pp.priceLow}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="#guides"
                  style={{
                    marginTop: "auto",
                    fontSize: 13,
                    color: "var(--text)",
                    borderBottom: "1px solid var(--border-strong)",
                    paddingBottom: 2,
                    alignSelf: "flex-start",
                  }}
                >
                  {ui.seeAll} →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
