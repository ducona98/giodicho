import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { AFFILIATE_DATA } from "@/i18n/affiliate-data";
import { AfSectionHead } from "./af-section-head";
import { AfIcon } from "./af-icon";
import { AfCollectionCard } from "./af-collection-card";

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
          {cats.map((c, i) => (
            <AfCollectionCard
              key={c.slug}
              category={c}
              t={t}
              locale={locale}
              featured={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
