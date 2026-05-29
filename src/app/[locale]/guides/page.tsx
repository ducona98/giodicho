import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { AFFILIATE_DATA, articleTopics } from "@/i18n/affiliate-data";
import { ARTICLE_TOPIC_LABELS } from "@/i18n/affiliate-constants";
import { AfHeader } from "@/components/affiliate/af-header";
import { AfFooter } from "@/components/affiliate/af-footer";
import { AfBreadcrumb } from "@/components/affiliate/af-breadcrumb";
import { AfSectionHead } from "@/components/affiliate/af-section-head";
import { AfGuidesBoard } from "@/components/affiliate/guides-board";
import { AfNewsletterSection } from "@/components/affiliate/newsletter-section";
import { JsonLd, itemListLd } from "@/lib/jsonld";

type RouteParams = { locale: string };

export async function generateMetadata({
  params,
}: {
  params: RouteParams;
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale as Locale;
  const t = getDictionary(locale);
  const g = t.affiliate.guidesPage;
  const title = `${g.title} ${g.titleAccent} — Giodicho`;
  const description = g.lead;
  const ogLoc = locale === "vi" ? "vi_VN" : "en_US";
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/guides`,
      languages: {
        vi: "/vi/guides",
        en: "/en/guides",
        "x-default": "/en/guides",
      },
    },
    openGraph: {
      title,
      description,
      locale: ogLoc,
      type: "website",
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

export default function GuidesPage({ params }: { params: RouteParams }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;

  const t = getDictionary(locale);
  const g = t.affiliate.guidesPage;
  const articles = [...AFFILIATE_DATA.articles];
  const topics = articleTopics();

  const coverStyle = {
    "--ph": "var(--accent-2)",
    "--ph2": "var(--accent)",
  } as CSSProperties;

  return (
    <div className="af-page af-page--guides">
      <AfHeader t={t} locale={locale} />
      <main id="main">
        <section className="af-coll-hero" aria-labelledby="guides-h1">
          <div>
            <AfBreadcrumb
              className="af-coll-hero__breadcrumb"
              jsonld
              ariaLabel={g.breadcrumbAria}
              items={[
                { label: g.breadcrumbHome, href: `/${locale}` },
                { label: t.affiliate.nav.guides },
              ]}
            />
            <div className="af-eyebrow">{g.eyebrow}</div>
            <h1 id="guides-h1">
              {g.title} <span className="af-it">{g.titleAccent}</span>
            </h1>
            <p>{g.lead}</p>
            <div className="af-coll-hero__stats">
              {g.stats.map((s) => (
                <div className="cell" key={s.v}>
                  <span className="k">{s.k}</span>
                  <span className="v">{s.v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="af-coll-hero__cover" style={coverStyle} aria-hidden="true" />
        </section>

        <section className="af-section" aria-labelledby="guides-board-h">
          <div className="af-container">
            <h2 id="guides-board-h" className="sr-only">
              {g.title} {g.titleAccent}
            </h2>
            <AfGuidesBoard articles={articles} t={t} locale={locale} />
          </div>
        </section>

        {topics.length > 0 && (
          <section
            className="af-section af-section--tight"
            aria-labelledby="guides-topics"
            style={{
              background: "var(--bg-2)",
              borderTop: "1px solid var(--border)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div className="af-container">
              <AfSectionHead
                id="guides-topics"
                eyebrow={t.affiliate.sections.reviews.eyebrow}
                title={g.popularTitle}
                lead={g.popularLead}
              />
              <div className="af-guides-topics">
                {topics.map((topic) => (
                  <span key={topic} className="af-guides-topics__chip">
                    {ARTICLE_TOPIC_LABELS[topic][locale]}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        <JsonLd data={itemListLd(
          articles.map((a) => ({
            name: a.title[locale],
            url: `/${locale}/guides/${a.slug ?? a.id}`,
          })),
          `${g.title} ${g.titleAccent}`
        )} />
        <AfNewsletterSection t={t} />
      </main>
      <AfFooter t={t} locale={locale} />
    </div>
  );
}
