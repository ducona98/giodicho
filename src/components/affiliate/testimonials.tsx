import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { AFFILIATE_DATA } from "@/i18n/affiliate-data";
import { AfSectionHead } from "./af-section-head";

type Props = { t: Dictionary; locale: Locale };

export function AfTestimonialsSection({ t, locale }: Props) {
  const s = t.affiliate.sections.testimonials;
  const items = AFFILIATE_DATA.testimonials;

  return (
    <section className="af-section" aria-labelledby="af-testi-title">
      <div className="af-container">
        <AfSectionHead
          id="af-testi-title"
          eyebrow={s.eyebrow}
          title={<>{s.titlePre} <span className="af-it">{s.titleIt}</span>{s.titlePost}</>}
        />
        <div
          className="af-testi-rail"
          role="region"
          aria-label={s.eyebrow}
          tabIndex={0}
        >
          {items.map((t2, i) => (
            <figure key={i} className="af-testi">
              <div className="af-testi__head">
                <div className="af-testi__avatar" aria-hidden="true">{t2.name[0]}</div>
                <div>
                  <div className="af-testi__name">{t2.name}</div>
                  <div className="af-testi__loc">{t2.loc}</div>
                </div>
                <div
                  className="af-testi__stars"
                  style={{ marginLeft: "auto" }}
                  aria-label={`${t2.stars.length} / 5`}
                >
                  <span aria-hidden="true">{t2.stars}</span>
                </div>
              </div>
              <blockquote className="af-testi__quote">&ldquo;{t2.quote[locale]}&rdquo;</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
