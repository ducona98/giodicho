import type { Dictionary } from "@/i18n/dictionaries";

export function Testimonials({ t }: { t: Dictionary }) {
  return (
    <section className="section-pad" aria-labelledby="testi-title">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-head__title">
            <span className="eyebrow">{t.testi.eyebrow}</span>
            <h2 id="testi-title">{t.testi.title}</h2>
          </div>
        </div>
        <div className="testi-rail reveal">
          {t.testi.items.map((r, i) => (
            <article className="testi" key={i}>
              <div className="testi__head">
                <div className="testi__avatar" aria-hidden="true">{r.name[0]}</div>
                <div>
                  <div className="testi__name">{r.name}</div>
                  <div className="testi__loc">{r.loc}</div>
                </div>
                <div className="testi__stars" style={{ marginLeft: "auto" }} aria-label={`${r.stars} stars`}>
                  {"★".repeat(r.stars)}
                </div>
              </div>
              <p className="testi__quote">{r.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
