import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { AFFILIATE_DATA } from "@/i18n/affiliate-data";
import { AfHeader } from "@/components/affiliate/af-header";
import { AfFooter } from "@/components/affiliate/af-footer";
import { AfBreadcrumb } from "@/components/affiliate/af-breadcrumb";
import { AfSectionHead } from "@/components/affiliate/af-section-head";
import { AfArticleCard } from "@/components/affiliate/af-article-card";
import { AfProductCard } from "@/components/affiliate/af-product-card";
import { AfDisclosure } from "@/components/affiliate/af-disclosure";
import { AfDealsBoard } from "@/components/affiliate/deals-board";

type RouteParams = { locale: string };

export async function generateMetadata({
  params,
}: {
  params: RouteParams;
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale as Locale;
  const t = getDictionary(locale);
  const d = t.affiliate.dealsPage;
  const title = `${d.title} ${d.titleAccent} — Giodicho`;
  const description = d.lead;
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/deals`,
      languages: {
        vi: "/vi/deals",
        en: "/en/deals",
        "x-default": "/en/deals",
      },
    },
    openGraph: {
      title,
      description,
      locale,
      type: "website",
      siteName: t.meta.title,
    },
  };
}

export default function DealsPage({ params }: { params: RouteParams }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;

  const t = getDictionary(locale);
  const d = t.affiliate.dealsPage;
  const c = t.affiliate.collection;

  const dealPids = new Set(AFFILIATE_DATA.deals.map((deal) => deal.pid));
  const guides = AFFILIATE_DATA.articles.slice(0, 3);
  const related = [...AFFILIATE_DATA.products]
    .filter((p) => !dealPids.has(p.id))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const coverStyle = {
    "--ph": "var(--danger)",
    "--ph2": "var(--accent)",
  } as CSSProperties;

  return (
    <div className="af-page af-page--deals">
      <AfHeader t={t} locale={locale} />
      <main id="main">
        <section className="af-coll-hero" aria-labelledby="deals-h1">
          <div>
            <AfBreadcrumb
              className="af-coll-hero__breadcrumb"
              ariaLabel={d.breadcrumbAria}
              items={[
                { label: d.breadcrumbHome, href: `/${locale}` },
                { label: t.affiliate.nav.deals },
              ]}
            />
            <div className="af-eyebrow">{d.eyebrow}</div>
            <h1 id="deals-h1">
              {d.title} <span className="af-it">{d.titleAccent}</span>
            </h1>
            <p>{d.lead}</p>
            <div className="af-coll-hero__stats">
              {d.stats.map((s) => (
                <div className="cell" key={s.v}>
                  <span className="k">{s.k}</span>
                  <span className="v">{s.v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="af-coll-hero__cover" style={coverStyle} aria-hidden="true" />
        </section>

        <section className="af-section" aria-labelledby="deals-board-h">
          <div className="af-container">
            <h2 id="deals-board-h" className="sr-only">
              {d.title} {d.titleAccent}
            </h2>
            <AfDealsBoard t={t} locale={locale} />
          </div>
        </section>

        <section
          className="af-section af-section--tight"
          aria-labelledby="deals-trust-h"
        >
          <div className="af-container">
            <div className="af-deals-trust">
              <h2 id="deals-trust-h" className="af-deals-trust__t">
                {d.trustTitle}
              </h2>
              <ul className="af-deals-trust__list">
                {d.trustPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section
            className="af-section"
            aria-labelledby="deals-related"
            style={{
              background: "var(--bg-2)",
              borderTop: "1px solid var(--border)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div className="af-container">
              <AfSectionHead
                id="deals-related"
                eyebrow={t.affiliate.sections.bestPicks.eyebrow}
                title={d.relatedTitle}
                lead={d.relatedLead}
              />
              <div className="af-grid-3">
                {related.map((p) => (
                  <AfProductCard
                    key={p.id}
                    variant="grid"
                    product={p}
                    t={t}
                    locale={locale}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {guides.length > 0 && (
          <section className="af-section" aria-labelledby="deals-guides">
            <div className="af-container">
              <AfSectionHead
                id="deals-guides"
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

        <section
          className="af-section af-section--tight"
          aria-label={t.affiliate.disclosure.full}
        >
          <div className="af-container">
            <AfDisclosure t={t} />
          </div>
        </section>
      </main>
      <AfFooter t={t} locale={locale} />
    </div>
  );
}
