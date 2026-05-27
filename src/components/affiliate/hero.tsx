"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { Dictionary } from "@/i18n/dictionaries";
import { AfIcon } from "./af-icon";

type Props = { t: Dictionary };

export function AfHero({ t }: Props) {
  const reducedMotion = useReducedMotion();
  const h = t.affiliate.hero;
  const ui = t.affiliate.ui;

  const cx = useMotionValue(0);
  const cy = useMotionValue(0);
  const sx = useSpring(cx, { stiffness: 120, damping: 22, mass: 0.4 });
  const sy = useSpring(cy, { stiffness: 120, damping: 22, mass: 0.4 });

  const productX = useTransform(sx, (v) => v * 14);
  const productY = useTransform(sy, (v) => v * 12);
  const productRX = useTransform(sy, (v) => -v * 6);
  const productRY = useTransform(sx, (v) => v * 8);

  const chip1X = useTransform(sx, (v) => v * 26);
  const chip1Y = useTransform(sy, (v) => v * 20);
  const chip2X = useTransform(sx, (v) => v * -22);
  const chip2Y = useTransform(sy, (v) => v * 24);
  const chip3X = useTransform(sx, (v) => v * 18);
  const chip3Y = useTransform(sy, (v) => v * -22);

  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (reducedMotion) return;
    let rafId = 0;
    let pending = false;
    const onScroll = () => {
      if (pending) return;
      pending = true;
      rafId = window.requestAnimationFrame(() => {
        const y = window.scrollY;
        if (blob1Ref.current) blob1Ref.current.style.translate = `0px ${y * 0.12}px`;
        if (blob2Ref.current) blob2Ref.current.style.translate = `0px ${y * -0.08}px`;
        pending = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(rafId);
    };
  }, [reducedMotion]);

  return (
    <section className="af-hero" aria-labelledby="af-hero-title">
      <div className="af-hero__bg" aria-hidden="true">
        <div className="af-hero__grid" />
        <div className="af-hero__blob b1" ref={blob1Ref} />
        <div className="af-hero__blob b2" ref={blob2Ref} />
      </div>

      <div className="af-hero__inner">
        <div className="af-runner">
          <span className="live">{h.runner.live}</span>
          <span>{h.runner.curated}</span>
          <span>{h.runner.locale}</span>
        </div>

        <div className="af-hero__col-left">
          <div className="af-eyebrow">{h.eyebrow}</div>
          <h1 id="af-hero-title" className="af-h1">
            {h.titleLine1}
            <span className="small">{h.smallPill}</span>
            <br />
            {h.titleLine2}
            <br />
            <span className="af-it">{h.titleAccent}</span>
          </h1>
          <p className="af-hero__lead">{h.lead}</p>
          <div className="af-hero__cta">
            <a href="#best-picks" className="af-btn af-btn--primary">
              {ui.explorePicks}
              <span className="arrow"><AfIcon name="arrow" size={14} /></span>
            </a>
            <a href="#collections" className="af-btn af-btn--ghost">{ui.browse}</a>
            <div className="af-btn--ctameta">
              <div className="avatars" aria-hidden="true"><span /><span /><span /></div>
              {h.browsingNow}
            </div>
          </div>
        </div>

        <div className="af-hero__col-right">
          <div className="af-stage">
            <div className="af-stage__pedestal" aria-hidden="true" />
            <motion.div
              className="af-stage__product"
              style={{ x: productX, y: productY, rotateX: productRX, rotateY: productRY }}
              aria-hidden="true"
            >
              <span className="af-stage__num">07</span>
              <span className="af-stage__corner tl">{h.stageLabelTl}</span>
              <span className="af-stage__corner br">{h.stageLabelBr}</span>
            </motion.div>

            <motion.div className="af-chip c1" style={{ x: chip1X, y: chip1Y }} aria-hidden="true">
              <span className="dot" style={{ background: "var(--success)" }} />
              <div>
                <div>{h.chips.bestPick.label}</div>
                <div className="val">{h.chips.bestPick.val}</div>
              </div>
            </motion.div>
            <motion.div className="af-chip c2" style={{ x: chip2X, y: chip2Y }} aria-hidden="true">
              <span className="dot" style={{ background: "var(--danger)" }} />
              <div>
                <div>{h.chips.hotDeal.label}</div>
                <div className="val">{h.chips.hotDeal.val}</div>
              </div>
            </motion.div>
            <motion.div className="af-chip c3" style={{ x: chip3X, y: chip3Y }} aria-hidden="true">
              <span className="dot" style={{ background: "var(--accent)" }} />
              <div>
                <div>{h.chips.giftIdea.label}</div>
                <div className="val">{h.chips.giftIdea.val}</div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="af-hero__meta">
          {h.meta.map((m, i) => (
            <div className="cell" key={i}>
              <span className="k">{m.k}</span>
              <span className="v">{m.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
