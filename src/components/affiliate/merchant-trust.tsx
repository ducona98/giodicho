import type { Dictionary } from "@/i18n/dictionaries";
import { MERCHANTS, type MerchantKey } from "@/i18n/affiliate-data";
import { AfSectionHead } from "./af-section-head";

type Props = { t: Dictionary };

const ORDER: MerchantKey[] = ["shopee", "tiktok", "lazada", "official"];

export function AfMerchantTrustSection({ t }: Props) {
  const s = t.affiliate.sections.merchants;

  return (
    <section
      className="af-section af-section--tight"
      aria-labelledby="af-merch-title"
      style={{
        background: "var(--bg-2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="af-container">
        <AfSectionHead
          id="af-merch-title"
          eyebrow={s.eyebrow}
          title={<>{s.titlePre} <span className="af-it">{s.titleIt}</span>{s.titlePost}</>}
          lead={s.lead}
        />
        <div className="af-merch-strip">
          {ORDER.map((k) => (
            <div key={k} className="af-merch-card">
              <div className="logo">
                <span className={`pill ${k}`}>{MERCHANTS[k].label}</span>
              </div>
              <div className="desc">{s.descriptions[k]}</div>
              <div className="n">{s.trackedCounts[k]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
