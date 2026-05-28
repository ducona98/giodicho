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
  showMeta?: boolean;
};

const MONTHS_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatEnds(iso: string, locale: Locale): string {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  if (locale === "vi") return `${String(d).padStart(2, "0")}.${String(m).padStart(2, "0")}`;
  return `${MONTHS_EN[m - 1]} ${d}`;
}

export function AfDealCard({ deal, t, locale, href, className, showMeta = false }: Props) {
  const p = findProduct(deal.pid);
  if (!p) return null;

  const offerUrl = p.merchantOffers?.[deal.merchant]?.url;
  const link = href ?? offerUrl ?? `/${locale}/p/${p.slug ?? p.id}`;
  const dp = t.affiliate.dealsPage;

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
        {showMeta && (deal.coupon || deal.endsAt) && (
          <div className="af-deal__meta">
            {deal.coupon && (
              <span className="af-deal__coupon">
                {dp.couponPrefix} <b>{deal.coupon}</b>
              </span>
            )}
            {deal.endsAt && (
              <span className="af-deal__ends">
                {dp.endsPrefix} {formatEnds(deal.endsAt, locale)}
              </span>
            )}
          </div>
        )}
        <div className="af-deal__foot">
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <AfMerchant keyId={deal.merchant} />
            <span className="at">{deal.at}</span>
          </span>
          <a
            href={link}
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
