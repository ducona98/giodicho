import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, LOCALES, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import {
  AFFILIATE_DATA,
  articleBySlug,
  findProduct,
  relatedArticles,
  type AffiliateProduct,
} from "@/i18n/affiliate-data";
import { ARTICLE_TOPIC_LABELS } from "@/i18n/affiliate-constants";
import { AfHeader } from "@/components/affiliate/af-header";
import { AfFooter } from "@/components/affiliate/af-footer";
import { AfBreadcrumb } from "@/components/affiliate/af-breadcrumb";
import { AfArticleToc } from "@/components/affiliate/af-article-toc";
import { AfProductCard } from "@/components/affiliate/af-product-card";
import { AfArticleCard } from "@/components/affiliate/af-article-card";
import { AfFaq } from "@/components/affiliate/af-faq";
import { AfDisclosure } from "@/components/affiliate/af-disclosure";
import { JsonLd, articleLd } from "@/lib/jsonld";

type RouteParams = { locale: string; slug: string };

export function generateStaticParams() {
  const slugs = AFFILIATE_DATA.articles
    .map((a) => a.slug ?? a.id)
    .filter((s): s is string => Boolean(s));
  return LOCALES.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: RouteParams;
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale as Locale;
  const article = articleBySlug(params.slug);
  if (!article) return {};
  const t = getDictionary(locale);
  const title = article.title[locale];
  const description = article.excerpt[locale];
  const slug = article.slug ?? article.id;
  const ogLoc = locale === "vi" ? "vi_VN" : "en_US";
  return {
    title: `${title} | Giodicho`,
    description,
    alternates: {
      canonical: `/${locale}/guides/${slug}`,
      languages: {
        vi: `/vi/guides/${slug}`,
        en: `/en/guides/${slug}`,
        "x-default": `/en/guides/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      locale: ogLoc,
      type: "article",
      siteName: "Giodicho",
      images: [{ url: "/og-default.svg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function ArticlePage({ params }: { params: RouteParams }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const article = articleBySlug(params.slug);
  if (!article) notFound();

  const t = getDictionary(locale);
  const ad = t.affiliate.articleDetail;
  const ui = t.affiliate.ui;
  const body = article.body ?? [];
  const faqs = article.faqs ?? [];
  const topicLabel = article.topic
    ? ARTICLE_TOPIC_LABELS[article.topic][locale]
    : article.cat[locale];

  const recommended: AffiliateProduct[] = (article.relatedProductIds ?? [])
    .map((id) => findProduct(id))
    .filter((p): p is AffiliateProduct => Boolean(p));
  const related = relatedArticles(article, 3);

  const coverStyle = { "--phx": article.ph.a, "--phy": article.ph.b } as CSSProperties;

  return (
    <div className="af-page af-page--article">
      <AfHeader t={t} locale={locale} />
      <main id="main">
        <AfBreadcrumb
          jsonld
          ariaLabel={ad.breadcrumbAria}
          items={[
            { label: ad.breadcrumbHome, href: `/${locale}` },
            { label: ad.breadcrumbGuides, href: `/${locale}/guides` },
            { label: article.title[locale] },
          ]}
        />

        <header className="af-art-hero" aria-labelledby="art-h1">
          <div className="af-eyebrow">{topicLabel}</div>
          <h1 id="art-h1">{article.title[locale]}</h1>
          <p className="af-art-hero__excerpt">{article.excerpt[locale]}</p>
          <div className="af-art-hero__meta">
            {article.author && (
              <span>{ad.byPrefix} {article.author.name}</span>
            )}
            {article.author && <span aria-hidden="true">·</span>}
            <span>{article.updated[locale]}</span>
            <span aria-hidden="true">·</span>
            <span>{article.read} {ui.readTime}</span>
          </div>
          <div className="af-art-hero__cover" style={coverStyle} aria-hidden="true" />
          <AfDisclosure t={t} compact />
        </header>

        {body.length > 0 ? (
          <div className="af-art-layout">
            <article className="af-prose">
              {body.map((section, i) => (
                <section key={i} aria-labelledby={`sec-${i + 1}`}>
                  <h2 id={`sec-${i + 1}`}>{section.heading[locale]}</h2>
                  <p>{section.content[locale]}</p>
                </section>
              ))}
            </article>
            <aside className="af-art-aside">
              <AfArticleToc sections={body} locale={locale} title={ad.tocTitle} />
            </aside>
          </div>
        ) : (
          <div className="af-art-layout af-art-layout--single">
            <article className="af-prose">
              <p>{article.excerpt[locale]}</p>
            </article>
          </div>
        )}

        {recommended.length > 0 && (
          <section className="af-pd-section" aria-labelledby="art-recommended">
            <h2 id="art-recommended">{ad.recommendedTitle}</h2>
            <p className="af-lead" style={{ marginTop: -12, marginBottom: 28 }}>
              {ad.recommendedLead}
            </p>
            <div className="af-grid-3">
              {recommended.map((p) => (
                <AfProductCard
                  key={p.id}
                  variant="grid"
                  product={p}
                  t={t}
                  locale={locale}
                  href={`/${locale}/p/${p.slug ?? p.id}`}
                />
              ))}
            </div>
          </section>
        )}

        {faqs.length > 0 && (
          <section className="af-pd-section" aria-labelledby="art-faq">
            <h2 id="art-faq">{ad.faqTitle}</h2>
            <AfFaq faqs={faqs} locale={locale} jsonld />
          </section>
        )}

        {related.length > 0 && (
          <section className="af-pd-section" aria-labelledby="art-related">
            <h2 id="art-related">{ad.relatedTitle}</h2>
            <p className="af-lead" style={{ marginTop: -12, marginBottom: 28 }}>
              {ad.relatedLead}
            </p>
            <div className="af-grid-3">
              {related.map((a) => (
                <AfArticleCard
                  key={a.id}
                  article={a}
                  t={t}
                  locale={locale}
                  href={`/${locale}/guides/${a.slug ?? a.id}`}
                />
              ))}
            </div>
          </section>
        )}

        <section className="af-pd-section" aria-label={t.affiliate.disclosure.full}>
          <AfDisclosure t={t} />
        </section>
        <JsonLd data={articleLd(article, locale, "https://giodicho.com")} />
      </main>
      <AfFooter t={t} locale={locale} />
    </div>
  );
}
