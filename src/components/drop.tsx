"use client";

import { useEffect, useMemo, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import { Icon } from "./icon";

function useCountdown(targetMs: number) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, targetMs - Date.now());
      setTime({
        d: Math.floor(diff / 86_400_000),
        h: Math.floor(diff / 3_600_000) % 24,
        m: Math.floor(diff / 60_000) % 60,
        s: Math.floor(diff / 1000) % 60,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetMs]);
  return time;
}

const pad = (n: number) => String(n).padStart(2, "0");

export function Drop({ t }: { t: Dictionary }) {
  const target = useMemo(
    () => Date.now() + 6 * 86_400_000 + 12 * 3_600_000 + 34 * 60_000,
    [],
  );
  const { d, h, m, s } = useCountdown(target);

  return (
    <section className="section-pad" id="drop">
      <div className="container">
        <div className="drop reveal">
          <div className="drop__media">
            <div className="drop__visual">
              <span className="drop__visual__label">{t.drop.stageLabel}</span>
            </div>
          </div>
          <div className="drop__content">
            <span className="badge limited"><span className="dot" />{t.drop.eyebrow}</span>
            <h2 style={{ marginTop: 16 }}>{t.drop.title}</h2>
            <p style={{ marginTop: 16, fontSize: "var(--fs-lead)", maxWidth: "44ch" }}>{t.drop.desc}</p>
            <div className="drop__price">
              <span className="now">{t.products.items[0].price}</span>
              <span className="was">{t.detail.was}</span>
            </div>
            <div className="countdown" aria-live="polite" aria-label="Countdown">
              <div className="countdown__cell"><div className="num">{pad(d)}</div><div className="lbl">{t.drop.labels.days}</div></div>
              <div className="countdown__cell"><div className="num">{pad(h)}</div><div className="lbl">{t.drop.labels.hours}</div></div>
              <div className="countdown__cell"><div className="num">{pad(m)}</div><div className="lbl">{t.drop.labels.mins}</div></div>
              <div className="countdown__cell"><div className="num">{pad(s)}</div><div className="lbl">{t.drop.labels.secs}</div></div>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
              <button type="button" className="btn btn-primary">
                {t.drop.cta}
                <span className="btn-arrow"><Icon name="arrow" size={16} /></span>
              </button>
              <button type="button" className="btn btn-ghost">{t.drop.cta2}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
