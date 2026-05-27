import type { Dictionary } from "@/i18n/dictionaries";
import { Icon, type IconName } from "./icon";

const ICONS: IconName[] = ["shield", "box", "truck", "users"];

export function Why({ t }: { t: Dictionary }) {
  return (
    <section
      className="section-pad"
      id="why"
      style={{
        background: "var(--bg-2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container">
        <div className="section-head reveal">
          <div className="section-head__title">
            <span className="eyebrow">{t.why.eyebrow}</span>
            <h2>{t.why.title}</h2>
          </div>
        </div>
        <div className="why-grid reveal-stagger">
          {t.why.items.map((w, i) => (
            <div className="why" key={i}>
              <span className="num">/ 0{i + 1}</span>
              <div className="why__icon"><Icon name={ICONS[i]} size={22} /></div>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
