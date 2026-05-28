import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { AFFILIATE_DATA, type AffiliateProduct } from "@/i18n/affiliate-data";
import { AfSectionHead } from "./af-section-head";
import { AfIcon } from "./af-icon";
import { AfProductCard } from "./af-product-card";

type Props = { t: Dictionary; locale: Locale };

// Mirror the design's curated lineup (page-home.jsx)
const PICK_INDICES = [0, 1, 3, 7, 2, 9] as const;

export function AfBestPicksSection({ t, locale }: Props) {
  const s = t.affiliate.sections.bestPicks;
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
            <a href={`/${locale}/best-picks`} className="af-btn af-btn--primary">
              {s.viewAll} <AfIcon name="arrow" size={14} />
            </a>
          }
        />

        <div className="af-grid-3">
          {rows.map((row) => (
            <AfProductCard
              key={row.p.id}
              variant="pick"
              product={row.p}
              pickLabel={row.label}
              t={t}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
