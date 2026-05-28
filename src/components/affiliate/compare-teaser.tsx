import type { CSSProperties } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { AFFILIATE_DATA } from "@/i18n/affiliate-data";
import { AfSectionHead } from "./af-section-head";
import { AfIcon } from "./af-icon";

type Props = { t: Dictionary; locale: Locale };

export function AfCompareTeaser({ t, locale }: Props) {
  const s = t.affiliate.sections.compare;
  const ui = t.affiliate.ui;
  const a = AFFILIATE_DATA.products[0];
  const b = AFFILIATE_DATA.products[4];

  return (
    <section className="af-section" id="compare" aria-labelledby="af-compare-title">
      <div className="af-container">
        <AfSectionHead
          id="af-compare-title"
          eyebrow={s.eyebrow}
          title={<>{s.titlePre} <span className="af-it">{s.titleIt}</span>{s.titlePost}</>}
          lead={s.lead}
        />

        <div className="af-compare-builder">
          <div className="af-compare-slot filled">
            <div
              style={{ aspectRatio: "4 / 3", borderRadius: 10, position: "relative", overflow: "hidden", marginBottom: 12 }}
            >
              <div
                className="af-product__ph"
                style={{
                  "--phx": a.ph.a,
                  "--phy": a.ph.b,
                  position: "absolute",
                  inset: 0,
                } as CSSProperties}
              />
            </div>
            <div className="af-product__cat">{a.cat[locale]}</div>
            <div className="af-product__name">{a.name[locale]}</div>
          </div>
          <div className="af-compare-vs" aria-hidden="true">{s.vsLabel}</div>
          <div className="af-compare-slot filled">
            <div
              style={{ aspectRatio: "4 / 3", borderRadius: 10, position: "relative", overflow: "hidden", marginBottom: 12 }}
            >
              <div
                className="af-product__ph"
                style={{
                  "--phx": b.ph.a,
                  "--phy": b.ph.b,
                  position: "absolute",
                  inset: 0,
                } as CSSProperties}
              />
            </div>
            <div className="af-product__cat">{b.cat[locale]}</div>
            <div className="af-product__name">{b.name[locale]}</div>
          </div>
          <div className="af-compare-vs" aria-hidden="true">{s.plusLabel}</div>
          <a
            href={`/${locale}/compare`}
            className="af-compare-slot"
            aria-label={ui.addProduct}
          >
            <AfIcon name="plus" size={24} />
            {ui.addProduct}
          </a>
        </div>

        <div className="af-row af-mt-24" style={{ justifyContent: "center" }}>
          <a href={`/${locale}/compare`} className="af-btn af-btn--accent">
            {ui.compareNow} <AfIcon name="arrow" size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
