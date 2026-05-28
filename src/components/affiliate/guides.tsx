import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { AFFILIATE_DATA } from "@/i18n/affiliate-data";
import { AfSectionHead } from "./af-section-head";
import { AfIcon } from "./af-icon";
import { AfArticleCard } from "./af-article-card";

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
            <a href={`/${locale}/guides`} className="af-btn af-btn--ghost">
              {ui.seeAll} <AfIcon name="arrow" size={14} />
            </a>
          }
        />

        <div className="af-grid-3">
          {articles.map((a) => (
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
  );
}
