import type { CSSProperties } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { AFFILIATE_DATA } from "@/i18n/affiliate-data";
import { AfSectionHead } from "./af-section-head";
import { AfIcon } from "./af-icon";

type Props = { t: Dictionary; locale: Locale };

export function AfGuidesSection({ t, locale }: Props) {
  const s = t.affiliate.sections.reviews;
  const ui = t.affiliate.ui;
  const articles = AFFILIATE_DATA.articles.slice(0, 3);

  return (
    <section
      className="af-section"
      id="guides"
      aria-labelledby="af-guides-title"
      style={{
        background: "var(--bg-2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="af-container">
        <AfSectionHead
          id="af-guides-title"
          eyebrow={s.eyebrow}
          title={<>{s.titlePre} <span className="af-it">{s.titleIt}</span>{s.titlePost}</>}
          action={
            <a href="#guides" className="af-btn af-btn--ghost">
              {ui.seeAll} <AfIcon name="arrow" size={14} />
            </a>
          }
        />

        <div className="af-grid-3">
          {articles.map((a) => {
            const style = { "--phx": a.ph.a, "--phy": a.ph.b } as CSSProperties;
            return (
              <article key={a.id} className="af-article" aria-label={a.title[locale]}>
                <div className="af-article__cover" style={style} />
                <div className="af-article__body">
                  <div className="af-article__meta">
                    <span className="cat">{a.cat[locale]}</span>
                    <span>{a.read} {ui.readTime}</span>
                    <span aria-hidden="true">·</span>
                    <span>{a.updated[locale]}</span>
                  </div>
                  <h3 className="af-article__title">{a.title[locale]}</h3>
                  <p className="af-article__excerpt">{a.excerpt[locale]}</p>
                  <a href="#guides" className="af-article__read">{ui.readGuide} →</a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
