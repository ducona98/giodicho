"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import { Icon } from "./icon";
import { Placeholder } from "./placeholder";

export function Detail({ t }: { t: Dictionary }) {
  const [thumbIdx, setThumbIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="section-pad" style={{ paddingTop: 0 }} id="detail">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-head__title">
            <span className="eyebrow">{t.detail.eyebrow}</span>
            <h2>{t.detail.title}</h2>
          </div>
          <p>{t.detail.lead}</p>
        </div>

        <div className="detail reveal">
          <div className="detail__gallery">
            <div className="detail__thumbs">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  type="button"
                  className={`detail__thumb${i === thumbIdx ? " active" : ""}`}
                  onClick={() => setThumbIdx(i)}
                  aria-label={`View ${i + 1}`}
                  aria-pressed={i === thumbIdx}
                >
                  <Placeholder label={`0${i + 1}`} seed={i} />
                </button>
              ))}
            </div>
            <div className="detail__main">
              <Placeholder label={`ASTRO PILOT · VIEW 0${thumbIdx + 1}`} seed={thumbIdx} />
            </div>
          </div>

          <div>
            <nav className="detail__breadcrumb" aria-label="Breadcrumb">
              {t.detail.breadcrumb.map((b, i, arr) => (
                <span key={i}>
                  {i < arr.length - 1 ? <a href="#">{b}</a> : <span>{b}</span>}
                  {i < arr.length - 1 && <span className="sep">/</span>}
                </span>
              ))}
            </nav>
            <h2 className="detail__title">{t.detail.productName}</h2>
            <div className="detail__rating">
              <span style={{ color: "var(--accent)" }}>★★★★★</span>&nbsp;{t.detail.rating}
            </div>
            <div className="detail__price-row">
              <span className="detail__price">{t.detail.price}</span>
              <span className="detail__was">{t.detail.was}</span>
              <span className="badge new">−14%</span>
            </div>
            <p className="detail__desc">{t.detail.desc}</p>

            <div className="detail__actions" style={{ marginTop: 32 }}>
              <div className="detail__qty" role="group" aria-label={t.detail.qty}>
                <button type="button" onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease quantity">
                  <Icon name="minus" size={14} />
                </button>
                <span className="val">{qty}</span>
                <button type="button" onClick={() => setQty(qty + 1)} aria-label="Increase quantity">
                  <Icon name="plus" size={14} />
                </button>
              </div>
              <button type="button" className="btn btn-primary">
                {t.detail.addToCart}
                <span className="btn-arrow"><Icon name="cart" size={16} /></span>
              </button>
              <button type="button" className="btn btn-ghost" aria-label={t.detail.wishlist}>
                <Icon name="heart" size={16} />
                {t.detail.wishlist}
              </button>
            </div>

            <div className="detail__ship">
              <Icon name="truck" size={18} />
              <span>{t.detail.ship}</span>
            </div>

            <div className="detail__accordion">
              {t.detail.acc.map((a, i) => (
                <div key={i} className={`acc__item${i === openIdx ? " open" : ""}`}>
                  <button
                    type="button"
                    className="acc__head"
                    onClick={() => setOpenIdx(i === openIdx ? -1 : i)}
                    aria-expanded={i === openIdx}
                  >
                    {a.title}
                    <span className="sym">+</span>
                  </button>
                  <div className="acc__body">{a.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
