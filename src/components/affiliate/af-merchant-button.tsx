import type { Locale } from "@/i18n/config";
import type { MerchantKey } from "@/i18n/affiliate-data";
import { CTA_LABELS, MERCHANT_CTA } from "@/i18n/affiliate-constants";
import { AfIcon } from "./af-icon";

type Props = {
  merchant: MerchantKey;
  href: string;
  locale: Locale;
  size?: "sm" | "md";
  className?: string;
};

export function AfMerchantButton({ merchant, href, locale, size = "md", className }: Props) {
  const label = CTA_LABELS[MERCHANT_CTA[merchant]][locale];
  const base = size === "sm" ? "af-deal__cta" : "af-btn af-btn--primary";
  const cls = `${base}${className ? " " + className : ""}`;
  return (
    <a
      href={href}
      className={cls}
      rel="sponsored nofollow noopener"
      target="_blank"
    >
      {label} <AfIcon name="arrow" size={size === "sm" ? 12 : 14} />
    </a>
  );
}
