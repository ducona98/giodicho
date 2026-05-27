import type { CSSProperties } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { AFFILIATE_DATA, findProduct } from "@/i18n/affiliate-data";
import { AfSectionHead } from "./af-section-head";
import { AfMerchant } from "./af-merchant";
import { AfIcon } from "./af-icon";

type Props = { t: Dictionary; locale: Locale };

export function AfDealsSection({ t, locale }: Props) {
  const s = t.affiliate.sections.deals;
  const ui = t.affiliate.ui;
  const deals = AFFILIATE_DATA.deals.slice(0, 6);

  return (
    <section
      className="af-section af-section--tight"
      id="deals"
      aria-labelledby="af-deals-title"
      style={{
        background: "var(--bg-2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="af-container">
        <AfSectionHead
          id="af-deals-title"
          eyebrow={s.eyebrow}
          title={<>{s.titlePre} <span className="af-it">{s.titleIt}</span>{s.titlePost}</>}
          lead={s.lead}
        />

        <div className="af-grid-3">
          {deals.map((deal, i) => {
            const p = findProduct(deal.pid);
            if (!p) return null;
            const phStyle = {
              "--phx": p.ph.a,
              "--phy": p.ph.b,
              position: "absolute",
              inset: 0,
            } as CSSProperties;
            return (
              <article key={i} className="af-deal" aria-label={p.name[locale]}>
                <div className="af-deal__media">
                  <div className="af-product__ph" style={phStyle} />
                </div>
                <div className="af-deal__body">
                  <div className="af-deal__cat">{p.cat[locale]}</div>
                  <div className="af-deal__name">{p.name[locale]}</div>
                  <div className="af-deal__price">
                    <span className="now">{deal.now}</span>
                    <span className="was">{deal.old}</span>
                    <span className="pct">{deal.pct}</span>
                  </div>
                  <div className="af-deal__foot">
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                      <AfMerchant keyId={deal.merchant} />
                      <span className="at">{deal.at}</span>
                    </span>
                    <a
                      href="#"
                      className="af-deal__cta"
                      rel="sponsored nofollow noopener"
                    >
                      {ui.viewDeal} <AfIcon name="arrow" size={12} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
