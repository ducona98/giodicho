import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, LOCALES, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import {
  AFFILIATE_DATA,
  findCategory,
  productsForCollection,
} from "@/i18n/affiliate-data";
import { AfHeader } from "@/components/affiliate/af-header";
import { AfFooter } from "@/components/affiliate/af-footer";
import { AfBreadcrumb } from "@/components/affiliate/af-breadcrumb";
import { AfCollectionBrowser } from "@/components/affiliate/collection-browser";
import { AfSectionHead } from "@/components/affiliate/af-section-head";
import { AfEditorNote } from "@/components/affiliate/af-editor-note";
import { AfArticleCard } from "@/components/affiliate/af-article-card";
import { AfCollectionCard } from "@/components/affiliate/af-collection-card";
import { AfFaq } from "@/components/affiliate/af-faq";
import { AfDisclosure } from "@/components/affiliate/af-disclosure";

type RouteParams = { locale: string; slug: string };

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    AFFILIATE_DATA.categories.map((cat) => ({ locale, slug: cat.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: RouteParams;
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale as Locale;
  const category = findCategory(params.slug);
  if (!category) return {};
  const t = getDictionary(locale);
  const name = category[locale];
  const description = category.desc[locale];
  return {
    title: `${name} — Giodicho`,
    description,
    alternates: {
      canonical: `/${locale}/c/${category.slug}`,
      languages: {
        vi: `/vi/c/${category.slug}`,
        en: `/en/c/${category.slug}`,
        "x-default": `/en/c/${category.slug}`,
      },
    },
    openGraph: {
      title: `${name} — Giodicho`,
      description,
      locale,
      type: "website",
      siteName: t.meta.title,
    },
  };
}

export default function CollectionPage({ params }: { params: RouteParams }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const category = findCategory(params.slug);
  if (!category) notFound();

  const t = getDictionary(locale);
  const c = t.affiliate.collection;
  const name = category[locale];
  const products = productsForCollection(category.slug);
  const dealPids = Array.from(new Set(AFFILIATE_DATA.deals.map((d) => d.pid)));

  const avgScore =
    products.length > 0
      ? (products.reduce((sum, p) => sum + p.score, 0) / products.length).toFixed(1)
      : "—";

  const productIds = new Set(products.map((p) => p.id));
  let guides = AFFILIATE_DATA.articles.filter((a) =>
    (a.relatedProductIds ?? []).some((id) => productIds.has(id))
  );
  if (guides.length === 0) guides = [...AFFILIATE_DATA.articles].slice(0, 3);
  guides = guides.slice(0, 3);

  const related = AFFILIATE_DATA.categories.filter((cat) => cat.slug !== category.slug);
  const coverStyle = { "--ph": category.ph.a, "--ph2": category.ph.b } as CSSProperties;

  return (
    <div className="af-page af-page--coll">
      <AfHeader t={t} locale={locale} />
      <main id="main">
        <section className="af-coll-hero" aria-labelledby="coll-h1">
          <div>
            <AfBreadcrumb
              className="af-coll-hero__breadcrumb"
              ariaLabel={c.breadcrumbAria}
              items={[
                { label: c.breadcrumbHome, href: `/${locale}` },
                { label: name },
              ]}
            />
            <div className="af-eyebrow">{t.affiliate.sections.categories.eyebrow}</div>
            <h1 id="coll-h1">{name}</h1>
            <p>{category.desc[locale]} {c.introSuffix}</p>
            <div className="af-coll-hero__stats">
              <div className="cell">
                <span className="k">{products.length}</span>
                <span className="v">{c.stats.products}</span>
              </div>
              <div className="cell">
                <span className="k">{avgScore}</span>
                <span className="v">{c.stats.avgScore}</span>
              </div>
              <div className="cell">
                <span className="k">{c.priceRefreshValue}</span>
                <span className="v">{c.stats.priceRefresh}</span>
              </div>
            </div>
          </div>
          <div className="af-coll-hero__cover" style={coverStyle} aria-hidden="true" />
        </section>

        <AfCollectionBrowser
          products={products}
          dealPids={dealPids}
          t={t}
          locale={locale}
        />

        <section className="af-section af-section--tight" aria-label={t.affiliate.editor.signature}>
          <div className="af-container">
            <AfEditorNote t={t} />
          </div>
        </section>

        {guides.length > 0 && (
          <section
            className="af-section"
            aria-labelledby="coll-guides"
            style={{
              background: "var(--bg-2)",
              borderTop: "1px solid var(--border)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div className="af-container">
              <AfSectionHead
                id="coll-guides"
                eyebrow={t.affiliate.sections.reviews.eyebrow}
                title={c.guidesTitle}
                lead={c.guidesLead}
              />
              <div className="af-grid-3">
                {guides.map((a) => (
                  <AfArticleCard key={a.id} article={a} t={t} locale={locale} />
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="af-section" aria-labelledby="coll-faq">
          <div className="af-container">
            <AfSectionHead id="coll-faq" title={c.faqTitle} />
            <AfFaq
              faqs={c.faqs.map((f) => ({
                q: { vi: f.q, en: f.q },
                a: { vi: f.a, en: f.a },
              }))}
              locale={locale}
            />
          </div>
        </section>

        {related.length > 0 && (
          <section className="af-section" aria-labelledby="coll-related">
            <div className="af-container">
              <AfSectionHead
                id="coll-related"
                eyebrow={t.affiliate.sections.categories.eyebrow}
                title={c.relatedTitle}
                lead={c.relatedLead}
              />
              <div className="af-cat-grid">
                {related.map((cat, i) => (
                  <AfCollectionCard
                    key={cat.slug}
                    category={cat}
                    t={t}
                    locale={locale}
                    featured={i === 0}
                    href={`/${locale}/c/${cat.slug}`}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="af-section af-section--tight" aria-label={t.affiliate.disclosure.full}>
          <div className="af-container">
            <AfDisclosure t={t} />
          </div>
        </section>
      </main>
      <AfFooter t={t} locale={locale} />
    </div>
  );
}
