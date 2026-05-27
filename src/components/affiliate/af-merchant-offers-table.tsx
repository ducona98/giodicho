import type { AffiliateProduct, MerchantKey } from "@/i18n/affiliate-data";
import { MERCHANTS } from "@/i18n/affiliate-data";
import { CTA_LABELS, MERCHANT_CTA } from "@/i18n/affiliate-constants";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { AfIcon } from "./af-icon";

type Props = {
  product: AffiliateProduct;
  t: Dictionary;
  locale: Locale;
};

type Row = {
  key: MerchantKey;
  url: string;
  price?: string;
  couponNote?: string;
  shippingNote?: string;
};

function buildRows(p: AffiliateProduct, locale: Locale): Row[] {
  return p.merchants
    .map<Row | null>((m) => {
      const offer = p.merchantOffers?.[m];
      if (!offer) return null;
      return {
        key: m,
        url: offer.url,
        price: offer.price,
        couponNote: offer.couponNote?.[locale],
        shippingNote: offer.shippingNote?.[locale],
      };
    })
    .filter((r): r is Row => r !== null);
}

export function AfMerchantOffersTable({ product: p, t, locale }: Props) {
  const pd = t.affiliate.productDetail;
  const heads = pd.whereToBuyHeads;
  const rows = buildRows(p, locale);
  const cheapestKey = rows[0]?.key;

  return (
    <div className="af-wtb" role="table" aria-label={pd.whereToBuyTitle}>
      <div className="af-wtb__head" role="row">
        <span role="columnheader">{heads.merchant}</span>
        <span role="columnheader">{heads.price}</span>
        <span role="columnheader">{heads.coupon}</span>
        <span role="columnheader">{heads.shipping}</span>
        <span role="columnheader" style={{ textAlign: "right" }}>{heads.cta}</span>
      </div>
      {rows.map((row) => {
        const isRecommended = row.key === cheapestKey;
        const ctaLabel = CTA_LABELS[MERCHANT_CTA[row.key]][locale];
        return (
          <div
            key={row.key}
            role="row"
            className={`af-wtb__row${isRecommended ? " recommended" : ""}`}
          >
            <span role="cell" className="merch">
              <span className={`af-merchant-chip ${row.key}`} aria-hidden="true">
                {MERCHANTS[row.key].short}
              </span>
              {MERCHANTS[row.key].label}
            </span>
            <span role="cell" className="price">{row.price ?? pd.noShipping}</span>
            <span role="cell">
              {row.couponNote ? (
                <span className="coupon">{row.couponNote}</span>
              ) : (
                <span style={{ color: "var(--text-3)" }}>{pd.noCoupon}</span>
              )}
            </span>
            <span role="cell" className="ship">
              {row.shippingNote ?? <span style={{ color: "var(--text-3)" }}>{pd.noShipping}</span>}
            </span>
            <span role="cell" style={{ textAlign: "right" }}>
              <a
                className="af-deal__cta"
                href={row.url}
                rel="sponsored nofollow noopener"
                target="_blank"
                aria-label={`${ctaLabel} — ${MERCHANTS[row.key].label}`}
              >
                {ctaLabel} <AfIcon name="arrow" size={12} />
              </a>
            </span>
          </div>
        );
      })}
    </div>
  );
}
