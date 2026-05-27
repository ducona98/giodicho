import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { AFFILIATE_DATA } from "@/i18n/affiliate-data";
import { AfSectionHead } from "./af-section-head";
import { AfDealCard } from "./af-deal-card";

type Props = { t: Dictionary; locale: Locale };

export function AfDealsSection({ t, locale }: Props) {
  const s = t.affiliate.sections.deals;
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
          {deals.map((deal) => (
            <AfDealCard key={deal.pid} deal={deal} t={t} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
