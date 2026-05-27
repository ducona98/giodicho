import type { Dictionary } from "@/i18n/dictionaries";
import { Icon } from "./icon";
import { Placeholder } from "./placeholder";

type Product = Dictionary["products"]["items"][number];

function ProductCard({ p, seed, t }: { p: Product; seed: number; t: Dictionary }) {
  return (
    <article className="product" aria-label={p.name}>
      <div className="product__media">
        {p.badge && (
          <span className={`badge ${p.badge}`}>
            {t.products.badgeLabels[p.badge]}
          </span>
        )}
        <Placeholder label={p.code} seed={seed} />
        <div className="product__media__quick">
          <button type="button" className="product__quick" aria-label={t.products.quickView}>
            <Icon name="eye" size={14} />
            {t.products.quickView}
          </button>
          <button type="button" className="product__quick primary" aria-label={t.products.addToCart}>
            <Icon name="cart" size={14} />
            {t.products.addToCart}
          </button>
        </div>
      </div>
      <div className="product__cat">{p.cat}</div>
      <div className="product__name">{p.name}</div>
      <div className="product__row">
        <div className="product__price">{p.price}</div>
        <div className="product__rating">
          <Icon name="star" size={12} />
          <span>{p.rating}</span>
        </div>
      </div>
    </article>
  );
}

export function Products({ t }: { t: Dictionary }) {
  return (
    <section className="section-pad" id="products" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-head reveal">
          <div className="section-head__title">
            <span className="eyebrow">{t.products.eyebrow}</span>
            <h2>{t.products.title}</h2>
          </div>
          <div>
            <p style={{ marginBottom: 16 }}>{t.products.lead}</p>
            <a href="#" className="btn-link">{t.products.viewAll} →</a>
          </div>
        </div>
        <div className="products-grid reveal-stagger">
          {t.products.items.map((p, i) => (
            <ProductCard key={i} p={p} seed={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
