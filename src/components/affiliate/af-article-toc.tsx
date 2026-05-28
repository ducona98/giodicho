import type { AffiliateArticleSection } from "@/i18n/affiliate-data";
import type { Locale } from "@/i18n/config";

type Props = {
  sections: AffiliateArticleSection[];
  locale: Locale;
  title: string;
};

// Index-based anchors (#sec-1…) avoid non-ASCII slug issues with Vietnamese
// headings; the article page assigns the matching ids.
export function AfArticleToc({ sections, locale, title }: Props) {
  if (sections.length === 0) return null;
  return (
    <nav className="af-toc" aria-label={title}>
      <div className="af-toc__title">{title}</div>
      <ol className="af-toc__list">
        {sections.map((section, i) => (
          <li key={i}>
            <a href={`#sec-${i + 1}`}>{section.heading[locale]}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
