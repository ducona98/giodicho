import type { CSSProperties } from "react";
import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import type { AffiliateCategory } from "@/i18n/affiliate-data";
import { AfBadge } from "./af-badge";

type Props = {
  category: AffiliateCategory;
  t: Dictionary;
  locale: Locale;
  featured?: boolean;
  href?: string;
  className?: string;
};

export function AfCollectionCard({ category: c, t, locale, featured, href = "#collections", className }: Props) {
  const s = t.affiliate.sections.categories;
  const style = { "--ph": c.ph.a, "--ph2": c.ph.b } as CSSProperties;
  const badgeLabel =
    c.badge === "best" ? s.badgeLabels.best
    : c.badge === "limited" ? s.badgeLabels.limited
    : c.badge === "new" ? s.badgeLabels.new
    : null;
  const cls = `af-cat${featured ? " featured" : ""}${className ? " " + className : ""}`;
  return (
    <Link href={href} className={cls} aria-label={c[locale]}>
      <div className="af-cat__ph" style={style} />
      {c.badge && badgeLabel && (
        <span className="af-cat__badge">
          <AfBadge variant={c.badge}>{badgeLabel}</AfBadge>
        </span>
      )}
      <span className="af-cat__count">{c.count} {t.affiliate.ui.productsCount}</span>
      <div className="af-cat__overlay">
        <h3>{c[locale]}</h3>
        <p>{c.desc[locale]}</p>
      </div>
    </Link>
  );
}
