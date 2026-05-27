import type { CSSProperties } from "react";
import type { AffiliateProduct } from "@/i18n/affiliate-data";
import { BADGE_LABELS } from "@/i18n/affiliate-constants";
import type { Locale } from "@/i18n/config";
import { AfBadge } from "./af-badge";

type Props = {
  product: AffiliateProduct;
  locale: Locale;
  galleryAria: string;
  thumbAria: string;
};

function thumbStyle(p: AffiliateProduct): CSSProperties {
  return { "--phx": p.ph.a, "--phy": p.ph.b } as CSSProperties;
}

export function AfProductGallery({ product: p, locale, galleryAria, thumbAria }: Props) {
  const badgeLabel = p.badge ? BADGE_LABELS[p.badge][locale] : null;
  // Four thumbnail placeholders that all derive from the product's --phx/--phy palette
  const thumbs = [0, 1, 2, 3];

  return (
    <div className="af-pd-gallery" role="group" aria-label={galleryAria}>
      <div className="af-pd-thumbs" role="list">
        {thumbs.map((i) => (
          <button
            key={i}
            type="button"
            role="listitem"
            className={`af-pd-thumb${i === 0 ? " active" : ""}`}
            style={thumbStyle(p)}
            aria-label={`${thumbAria} ${i + 1}`}
            aria-pressed={i === 0}
          />
        ))}
      </div>
      <div className="af-pd-main">
        {p.badge && badgeLabel && (
          <span className="af-pd-main__badge">
            <AfBadge variant={p.badge}>{badgeLabel}</AfBadge>
          </span>
        )}
        <div className="af-pd-main__ph" style={thumbStyle(p)} />
      </div>
    </div>
  );
}
