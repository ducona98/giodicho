"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

type Props = { t: Dictionary };

type Status = "idle" | "ok" | "err";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function AfNewsletter({ t }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const n = t.affiliate.newsletter;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (EMAIL_RE.test(email.trim())) {
      setStatus("ok");
      setEmail("");
    } else {
      setStatus("err");
    }
  }

  return (
    <div className="af-news">
      <div className="af-news__floater f1" aria-hidden="true">{n.floaters.f1}</div>
      <div className="af-news__floater f2" aria-hidden="true">{n.floaters.f2}</div>
      <div className="af-news__inner">
        <div className="af-eyebrow" style={{ justifyContent: "center" }}>{n.eyebrow}</div>
        <h2 className="af-h2">
          {n.title1}<br />
          <span className="af-it">{n.title2It}</span>
        </h2>
        <p className="af-lead" style={{ margin: "16px auto 0" }}>{n.lead}</p>
        <form className="af-news__form" onSubmit={onSubmit} noValidate>
          <label htmlFor="af-news-email" className="sr-only" style={{ position: "absolute", clip: "rect(0 0 0 0)", width: 1, height: 1, overflow: "hidden" }}>
            {n.placeholder}
          </label>
          <input
            id="af-news-email"
            type="email"
            placeholder={n.placeholder}
            value={email}
            onChange={(e) => { setEmail(e.target.value); if (status !== "idle") setStatus("idle"); }}
            aria-invalid={status === "err"}
            aria-describedby={status === "err" ? "af-news-msg" : status === "ok" ? "af-news-msg" : undefined}
          />
          <button type="submit" className="af-btn af-btn--primary">{n.cta}</button>
        </form>
        {status !== "idle" && (
          <p
            id="af-news-msg"
            role={status === "err" ? "alert" : "status"}
            style={{
              marginTop: 14,
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: 12,
              letterSpacing: "0.06em",
              color: status === "err" ? "var(--danger)" : "var(--success)",
            }}
          >
            {status === "err" ? n.err : n.ok}
          </p>
        )}
      </div>
    </div>
  );
}
