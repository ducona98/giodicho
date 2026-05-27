import type { CSSProperties } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { AFFILIATE_DATA } from "@/i18n/affiliate-data";
import { AfSectionHead } from "./af-section-head";
import { AfBadge } from "./af-badge";
import { AfIcon } from "./af-icon";

type Props = { t: Dictionary; locale: Locale };

export function AfCategoriesSection({ t, locale }: Props) {
  const s = t.affiliate.sections.categories;
  const cats = AFFILIATE_DATA.categories;

  return (
    <section className="af-section" id="collections" aria-labelledby="af-cats-title">
      <div className="af-container">
        <AfSectionHead
          id="af-cats-title"
          eyebrow={s.eyebrow}
          title={<>{s.titlePre} <span className="af-it">{s.titleIt}</span>{s.titlePost}</>}
          lead={s.lead}
          action={
            <button type="button" className="af-btn af-btn--ghost">
              {t.affiliate.ui.seeAll} <AfIcon name="arrow" size={14} />
            </button>
          }
        />

        <div className="af-cat-grid">
          {cats.map((c, i) => {
            const style = { "--ph": c.ph.a, "--ph2": c.ph.b } as CSSProperties;
            const badgeLabel =
              c.badge === "best" ? s.badgeLabels.best
              : c.badge === "limited" ? s.badgeLabels.limited
              : c.badge === "new" ? s.badgeLabels.new
              : null;
            return (
              <a
                key={c.slug}
                href={`#collections`}
                className={`af-cat ${i === 0 ? "featured" : ""}`}
                aria-label={c[locale]}
              >
                <div className="af-cat__ph" style={style} />
                {c.badge && badgeLabel && (
                  <span className="af-cat__badge">
                    <AfBadge variant={c.badge === "best" ? "best" : c.badge === "limited" ? "limited" : "new"}>
                      {badgeLabel}
                    </AfBadge>
                  </span>
                )}
                <span className="af-cat__count">{c.count} {t.affiliate.ui.productsCount}</span>
                <div className="af-cat__overlay">
                  <h3>{c[locale]}</h3>
                  <p>{c.desc[locale]}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
