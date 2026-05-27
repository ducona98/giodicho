import type { CSSProperties } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import type { AffiliateProduct } from "@/i18n/affiliate-data";
import { BADGE_LABELS } from "@/i18n/affiliate-constants";
import { AfBadge } from "./af-badge";
import { AfIcon } from "./af-icon";
import { AfMerchant } from "./af-merchant";
import { AfRatingScore } from "./af-rating-score";
import { AfPriceDisplay } from "./af-price-display";

type CommonProps = {
  product: AffiliateProduct;
  t: Dictionary;
  locale: Locale;
  href?: string;
  className?: string;
};

type PickProps = CommonProps & {
  variant: "pick";
  pickLabel: string;
};

type GridProps = CommonProps & {
  variant?: "grid";
};

type Props = PickProps | GridProps;

function phStyle(p: AffiliateProduct): CSSProperties {
  return {
    "--phx": p.ph.a,
    "--phy": p.ph.b,
    position: "absolute",
    inset: 0,
  } as CSSProperties;
}

export function AfProductCard(props: Props) {
  const { product: p, t, locale } = props;
  const defaultHref = `/${locale}/p/${p.slug ?? p.id}`;
  const href = props.href ?? defaultHref;
  const isExternal = /^https?:\/\//i.test(href);
  const linkRel = isExternal ? "sponsored nofollow noopener" : undefined;
  const ui = t.affiliate.ui;

  if (props.variant === "pick") {
    return (
      <article
        className={`af-pick${props.className ? " " + props.className : ""}`}
        aria-label={p.name[locale]}
      >
        <div className="af-pick__head">
          <AfBadge variant="editor">{props.pickLabel}</AfBadge>
          <AfRatingScore
            score={p.score}
            ariaLabel={`${ui.whyWePicked} · ${p.score.toFixed(1)} / 10`}
          />
        </div>
        <div className="af-pick__media">
          <div className="af-product__ph" style={phStyle(p)} />
        </div>
        <div>
          <div className="af-product__cat">{p.cat[locale]}</div>
          <h3 className="af-h3" style={{ marginTop: 4 }}>{p.name[locale]}</h3>
        </div>
        <p className="af-pick__why">{p.why[locale]}</p>
        <div className="af-pick__bottom">
          <AfPriceDisplay price={p.priceLow} />
          <a
            href={href}
            className="af-deal__cta"
            rel={linkRel}
          >
            {ui.viewDeal} <AfIcon name="arrow" size={12} />
          </a>
        </div>
      </article>
    );
  }

  // grid variant (for Collection, Best Picks list, Related products)
  const badgeLabel = p.badge ? BADGE_LABELS[p.badge][locale] : null;
  return (
    <article
      className={`af-product${props.className ? " " + props.className : ""}`}
      aria-label={p.name[locale]}
    >
      <div className="af-product__media">
        {p.badge && badgeLabel && (
          <span className="af-product__badge">
            <AfBadge variant={p.badge}>{badgeLabel}</AfBadge>
          </span>
        )}
        <span className="af-product__score" aria-label={`${ui.whyWePicked} · ${p.score.toFixed(1)} / 10`}>
          {p.score.toFixed(1)}
        </span>
        <div className="af-product__ph" style={phStyle(p)} />
      </div>
      <div className="af-product__cat">{p.cat[locale]}</div>
      <h3 className="af-product__name">{p.name[locale]}</h3>
      {p.tags[locale].length > 0 && (
        <div className="af-product__tags">
          {p.tags[locale].slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}
      <div className="af-product__priceRow">
        <AfPriceDisplay price={p.priceLow} />
        <div className="af-product__merchants" aria-hidden="true">
          {p.merchants.map((m) => (
            <AfMerchant key={m} keyId={m} />
          ))}
        </div>
      </div>
      <div className="af-product__cta">
        <a
          href={href}
          className="primary"
          rel={linkRel}
        >
          {ui.viewDeal} <AfIcon name="arrow" size={12} />
        </a>
        <button type="button" className="ghost">
          {ui.compare}
        </button>
      </div>
    </article>
  );
}
