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

export function AfStickyCta({ product: p, t, locale }: Props) {
  const pd = t.affiliate.productDetail;
  const rows = buildRows(p, locale);
  const featured = rows[0];

  return (
    <aside className="af-pd-cta" aria-label={pd.whereToBuyTitle}>
      <div className="af-pd-cta__title">
        <h4>{pd.whereToBuyTitle}</h4>
        <span className="af-pd-cta__price">{p.priceLow}</span>
      </div>
      <div className="af-pd-cta__list">
        {rows.map((row, idx) => {
          const isFeatured = featured && row.key === featured.key;
          const ctaLabel = CTA_LABELS[MERCHANT_CTA[row.key]][locale];
          return (
            <div
              key={row.key}
              className={`af-pd-cta__row${isFeatured ? " featured" : ""}`}
            >
              <span className={`merchant ${row.key}`} aria-hidden="true">
                {MERCHANTS[row.key].short}
              </span>
              <div style={{ minWidth: 0 }}>
                <div className="merchant-name">{MERCHANTS[row.key].label}</div>
                <div className="merchant-meta">
                  {row.couponNote ?? row.shippingNote ?? (idx === 0 ? pd.bestSeller : "")}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                {row.price && <span className="price">{row.price}</span>}
                <a
                  className="gotobtn"
                  href={row.url}
                  rel="sponsored nofollow noopener"
                  target="_blank"
                  aria-label={`${ctaLabel} — ${MERCHANTS[row.key].label}`}
                >
                  {ctaLabel} <AfIcon name="arrow" size={12} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

type BuybarProps = {
  product: AffiliateProduct;
  t: Dictionary;
  locale: Locale;
};

export function AfMobileBuybar({ product: p, t, locale }: BuybarProps) {
  const pd = t.affiliate.productDetail;
  const rows = buildRows(p, locale);
  const featured = rows[0];
  if (!featured) return null;
  const ctaLabel = CTA_LABELS[MERCHANT_CTA[featured.key]][locale];

  return (
    <div className="af-pd-buybar" role="region" aria-label={pd.whereToBuyTitle}>
      <div className="af-pd-buybar__price">
        <span className="af-pd-buybar__from">{pd.priceFromLabel}</span>
        <span className="af-pd-buybar__amount">{p.priceLow}</span>
      </div>
      <a
        className="af-pd-buybar__cta"
        href={featured.url}
        rel="sponsored nofollow noopener"
        target="_blank"
      >
        {ctaLabel} <AfIcon name="arrow" size={14} />
      </a>
    </div>
  );
}
