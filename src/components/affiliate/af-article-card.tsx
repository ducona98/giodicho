import type { CSSProperties } from "react";
import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import type { AffiliateArticle } from "@/i18n/affiliate-data";

type Props = {
  article: AffiliateArticle;
  t: Dictionary;
  locale: Locale;
  href?: string;
  className?: string;
};

export function AfArticleCard({ article: a, t, locale, href = "#guides", className }: Props) {
  const ui = t.affiliate.ui;
  const style = { "--phx": a.ph.a, "--phy": a.ph.b } as CSSProperties;
  return (
    <article
      className={`af-article${className ? " " + className : ""}`}
      aria-label={a.title[locale]}
    >
      <div className="af-article__cover" style={style} />
      <div className="af-article__body">
        <div className="af-article__meta">
          <span className="cat">{a.cat[locale]}</span>
          <span>{a.read} {ui.readTime}</span>
          <span aria-hidden="true">·</span>
          <span>{a.updated[locale]}</span>
        </div>
        <h3 className="af-article__title">{a.title[locale]}</h3>
        <p className="af-article__excerpt">{a.excerpt[locale]}</p>
        <Link href={href} className="af-article__read">{ui.readGuide} →</Link>
      </div>
    </article>
  );
}
