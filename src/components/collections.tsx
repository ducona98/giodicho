import type { Dictionary } from "@/i18n/dictionaries";
import { Icon } from "./icon";
import { Placeholder } from "./placeholder";

function badgeKindFor(badge: string): "limited" | "new" | "best" {
  const b = badge.toLowerCase();
  if (b.includes("limit")) return "limited";
  if (b.includes("new") || b.includes("hàng mới")) return "new";
  return "best";
}

export function Collections({ t }: { t: Dictionary }) {
  const items = t.collections.items;
  return (
    <section className="section-pad" id="collections">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-head__title">
            <span className="eyebrow">{t.collections.eyebrow}</span>
            <h2>{t.collections.title}</h2>
          </div>
          <p>{t.collections.lead}</p>
        </div>

        <div className="collections-grid reveal-stagger">
          {items.map((c, i) => (
            <a key={i} className={`collection${i === 0 ? " featured" : ""}`} href="#" aria-label={c.name}>
              <Placeholder label={`${c.code} · COLLECTION`} seed={i} />
              {c.badge && (
                <span className={`badge collection__badge ${badgeKindFor(c.badge)}`}>{c.badge}</span>
              )}
              <span className="collection__arrow" aria-hidden="true">
                <Icon name="arrow-ne" size={18} />
              </span>
              <div className="collection__overlay">
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
