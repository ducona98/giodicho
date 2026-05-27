"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import { Icon } from "./icon";

type FormState = "idle" | "ok" | "err";

export function Newsletter({ t }: { t: Dictionary }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setState(ok ? "ok" : "err");
    if (ok) setEmail("");
  };

  const msgColor = state === "ok" ? "var(--success)" : state === "err" ? "var(--danger)" : "transparent";

  return (
    <section className="section-pad" id="newsletter">
      <div className="container">
        <div className="news reveal">
          <div className="news__floater f1">{t.news.tags[0]}</div>
          <div className="news__floater f2">{t.news.tags[1]}</div>
          <div className="news__inner">
            <span className="eyebrow">{t.news.tags[0]} · {t.news.tags[1]}</span>
            <h2 style={{ marginTop: 12 }}>{t.news.title}</h2>
            <p>{t.news.desc}</p>
            <form className="news__form" onSubmit={submit} noValidate aria-describedby="news-msg">
              <label htmlFor="news-input" className="sr">Email</label>
              <input
                id="news-input"
                type="email"
                placeholder={t.news.placeholder}
                value={email}
                onChange={(e) => { setEmail(e.target.value); setState("idle"); }}
                aria-invalid={state === "err"}
                required
              />
              <button type="submit" className="btn btn-primary">
                {t.news.cta}
                <span className="btn-arrow"><Icon name="arrow" size={16} /></span>
              </button>
            </form>
            <div
              id="news-msg"
              role="status"
              style={{ minHeight: 24, marginTop: 12, fontSize: 14, color: msgColor }}
            >
              {state === "ok" ? t.news.ok : state === "err" ? t.news.err : "—"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
