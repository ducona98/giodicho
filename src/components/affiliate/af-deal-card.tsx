import type { CSSProperties } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { findProduct, type AffiliateDeal } from "@/i18n/affiliate-data";
import { AfIcon } from "./af-icon";
import { AfMerchant } from "./af-merchant";
import { AfPriceDisplay } from "./af-price-display";

type Props = {
  deal: AffiliateDeal;
  t: Dictionary;
  locale: Locale;
  href?: string;
  className?: string;
};

export function AfDealCard({ deal, t, locale, href = "#", className }: Props) {
  const p = findProduct(deal.pid);
  if (!p) return null;

  const phStyle = {
    "--phx": p.ph.a,
    "--phy": p.ph.b,
    position: "absolute",
    inset: 0,
  } as CSSProperties;

  return (
    <article
      className={`af-deal${className ? " " + className : ""}`}
      aria-label={p.name[locale]}
    >
      <div className="af-deal__media">
        <div className="af-product__ph" style={phStyle} />
      </div>
      <div className="af-deal__body">
        <div className="af-deal__cat">{p.cat[locale]}</div>
        <div className="af-deal__name">{p.name[locale]}</div>
        <AfPriceDisplay variant="deal" now={deal.now} old={deal.old} pct={deal.pct} />
        <div className="af-deal__foot">
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <AfMerchant keyId={deal.merchant} />
            <span className="at">{deal.at}</span>
          </span>
          <a
            href={href}
            className="af-deal__cta"
            rel="sponsored nofollow noopener"
          >
            {t.affiliate.ui.viewDeal} <AfIcon name="arrow" size={12} />
          </a>
        </div>
      </div>
    </article>
  );
}
