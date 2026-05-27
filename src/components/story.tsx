"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

const VISUAL_BG = [
  "linear-gradient(180deg, color-mix(in oklch, #5B7CFA 22%, var(--surface)), var(--surface))",
  "linear-gradient(180deg, color-mix(in oklch, #FFB86B 22%, var(--surface)), var(--surface))",
  "linear-gradient(180deg, color-mix(in oklch, #7DD3FC 22%, var(--surface)), var(--surface))",
  "linear-gradient(180deg, color-mix(in oklch, #A78BFA 22%, var(--surface)), var(--surface))",
];

export function Story({ t }: { t: Dictionary }) {
  const [active, setActive] = useState(0);
  const stepsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      let best = 0;
      let bestDist = Infinity;
      stepsRef.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2;
        const dist = Math.abs(center - vh / 2);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setActive(best);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="story section-pad" aria-labelledby="story-title">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-head__title">
            <span className="eyebrow">{t.story.eyebrow}</span>
            <h2 id="story-title">{t.story.title}</h2>
          </div>
          <p>{t.story.lead}</p>
        </div>

        <div className="story__track">
          <div className="story__sticky">
            <div className="story__visual" style={{ background: VISUAL_BG[active] }}>
              <div className="story__visual__inner">
                {t.story.steps[active].icon}
              </div>
            </div>
          </div>

          <div className="story__steps">
            {t.story.steps.map((s, i) => (
              <div
                key={i}
                ref={(el) => { stepsRef.current[i] = el; }}
                className={`story__step${active === i ? " is-active" : ""}`}
              >
                <span className="num">{t.story.stepWord} / 0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
