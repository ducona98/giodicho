"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { Icon } from "./icon";
import type { Dictionary } from "@/i18n/dictionaries";

type Props = { t: Dictionary };

export function Hero({ t }: Props) {
  const reducedMotion = useReducedMotion();

  // raw cursor offset (-1 → 1)
  const cx = useMotionValue(0);
  const cy = useMotionValue(0);
  const sx = useSpring(cx, { stiffness: 120, damping: 20, mass: 0.4 });
  const sy = useSpring(cy, { stiffness: 120, damping: 20, mass: 0.4 });

  const productX = useTransform(sx, (v) => v * 14);
  const productY = useTransform(sy, (v) => v * 12);
  const productRX = useTransform(sy, (v) => -v * 3);
  const productRY = useTransform(sx, (v) => v * 4);

  const chip1X = useTransform(sx, (v) => v * 28);
  const chip1Y = useTransform(sy, (v) => v * 20);
  const chip2X = useTransform(sx, (v) => v * -22);
  const chip2Y = useTransform(sy, (v) => v * 24);
  const chip3X = useTransform(sx, (v) => v * 18);
  const chip3Y = useTransform(sy, (v) => v * -22);

  useEffect(() => {
    if (reducedMotion) return;
    const onMove = (e: MouseEvent) => {
      const cw = window.innerWidth;
      const ch = window.innerHeight;
      cx.set((e.clientX - cw / 2) / (cw / 2));
      cy.set((e.clientY - ch / 2) / (ch / 2));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [cx, cy, reducedMotion]);

  // scroll parallax (vanilla, since framer-motion useScroll requires a ref tree we don't need here)
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const stageWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion) return;
    const onScroll = () => {
      const y = window.scrollY;
      if (wordmarkRef.current) wordmarkRef.current.style.transform = `translateX(-50%) translateY(${y * 0.18}px)`;
      if (blob1Ref.current) blob1Ref.current.style.translate = `0px ${y * 0.12}px`;
      if (blob2Ref.current) blob2Ref.current.style.translate = `0px ${y * -0.08}px`;
      if (stageWrapRef.current) stageWrapRef.current.style.transform = `translateY(${y * 0.05}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reducedMotion]);

  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid-bg" />
        <div className="hero__blob b1" ref={blob1Ref} />
        <div className="hero__blob b2" ref={blob2Ref} />
        <div className="hero__blob b3" />
        <div className="hero__wordmark" ref={wordmarkRef}>GIODICHO</div>
      </div>

      <div className="container hero__inner">
        <div className="hero__runner reveal">
          <span className="live">{t.hero.tagPill} · {t.hero.tag}</span>
          <span>{t.hero.runnerAtelier}</span>
          <span>{t.hero.meta[2].k} → {t.hero.meta[2].v}</span>
        </div>

        <div className="hero__col-left">
          <div className="hero__index reveal">{t.hero.indexLine}</div>
          <h1>
            <span className="line reveal" style={{ transitionDelay: "60ms" }}>
              {t.hero.title1.replace(/[,.]\s*$/, "")}
              <span className="small">{t.hero.smallPill}</span>
            </span>
            <span className="line reveal" style={{ transitionDelay: "180ms" }}>
              <span className="accent">{t.hero.title2}</span>
            </span>
          </h1>
          <p className="hero__lead reveal" style={{ transitionDelay: "300ms" }}>{t.hero.lead}</p>
          <div className="hero__cta reveal" style={{ transitionDelay: "420ms" }}>
            <a href="#collections" className="btn btn-primary">
              {t.hero.cta1}
              <span className="btn-arrow"><Icon name="arrow" size={16} /></span>
            </a>
            <a href="#products" className="btn btn-ghost">{t.hero.cta2}</a>
            <span className="hero__cta-meta">
              <span className="avatars" aria-hidden="true"><span /><span /><span /></span>
              {t.hero.reviewsLine}
            </span>
          </div>
        </div>

        <div className="hero__col-right" ref={stageWrapRef}>
          <div className="hero__stage">
            <div className="hero__pedestal" aria-hidden="true" />
            <motion.div
              className="hero__product"
              style={{ x: productX, y: productY, rotateX: productRX, rotateY: productRY }}
            >
              <span className="hero__product__num" aria-hidden="true">07</span>
              <span className="hero__product__corner tl">{t.hero.tagPill}</span>
              <span className="hero__product__corner br">{t.hero.stage.split(" — ").pop()}</span>
            </motion.div>

            <div className="hero__chips" aria-hidden="true">
              <motion.div className="hero__chip c1" style={{ x: chip1X, y: chip1Y }}>
                <span className="dot" style={{ background: "var(--success)" }} />
                <span>{t.hero.chips.auth}</span>
                <span className="hero__chip__val">100%</span>
              </motion.div>
              <motion.div className="hero__chip c2" style={{ x: chip2X, y: chip2Y }}>
                <span className="dot" style={{ background: "var(--danger)" }} />
                <span>{t.hero.chips.limited}</span>
                <span className="hero__chip__val">1/200</span>
              </motion.div>
              <motion.div className="hero__chip c3" style={{ x: chip3X, y: chip3Y }}>
                <span className="dot" style={{ background: "var(--primary)" }} />
                <span>{t.hero.chips.ship}</span>
                <span className="hero__chip__val">48H</span>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="hero__meta reveal" style={{ transitionDelay: "540ms" }}>
          {t.hero.meta.map((m, i) => (
            <div className="hero__meta__cell" key={i}>
              <span className="k">{m.k}</span>
              <span className="v">{m.v}</span>
            </div>
          ))}
          <div className="hero__meta__cell">
            <span className="k">4.9★</span>
            <span className="v">{t.testi.eyebrow}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
