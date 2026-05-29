import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import {
  AFFILIATE_DATA,
  productsByBestPick,
  productsByCategory,
} from "@/i18n/affiliate-data";
import { BEST_PICK_SLOTS } from "@/i18n/affiliate-constants";
import { AfHeader } from "@/components/affiliate/af-header";
import { AfFooter } from "@/components/affiliate/af-footer";
import { AfBreadcrumb } from "@/components/affiliate/af-breadcrumb";
import { AfSectionHead } from "@/components/affiliate/af-section-head";
import { AfEditorNote } from "@/components/affiliate/af-editor-note";
import { AfArticleCard } from "@/components/affiliate/af-article-card";
import { AfDisclosure } from "@/components/affiliate/af-disclosure";
import { AfBestPicksBoard, type BestPick } from "@/components/affiliate/best-picks-board";
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
  const bp = t.affiliate.bestPicks;
  const title = `${bp.title} ${bp.titleAccent} — Giodicho`;
  const description = bp.lead;
  const ogLoc = locale === "vi" ? "vi_VN" : "en_US";
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/best-picks`,
      languages: {
        vi: "/vi/best-picks",
        en: "/en/best-picks",
        "x-default": "/en/best-picks",
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

export default function BestPicksPage({ params }: { params: RouteParams }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;

  const t = getDictionary(locale);
  const bp = t.affiliate.bestPicks;
  const c = t.affiliate.collection;

  const picks: BestPick[] = BEST_PICK_SLOTS.map((slot) => {
    const product = productsByBestPick(slot)[0];
    if (!product) return null;
    const alternatives = productsByCategory(product.catSlug).filter(
      (alt) => alt.id !== product.id
    );
    return { slot, label: bp.tabLabels[slot], product, alternatives };
  }).filter((x): x is BestPick => x !== null);

  const guides = AFFILIATE_DATA.articles.slice(0, 3);
  const coverStyle = {
    "--ph": "var(--primary)",
    "--ph2": "var(--accent)",
  } as CSSProperties;

  return (
    <div className="af-page af-page--bp">
      <AfHeader t={t} locale={locale} />
      <main id="main">
        <section className="af-coll-hero" aria-labelledby="bp-h1">
          <div>
            <AfBreadcrumb
              className="af-coll-hero__breadcrumb"
              jsonld
              ariaLabel={bp.breadcrumbAria}
              items={[
                { label: bp.breadcrumbHome, href: `/${locale}` },
                { label: t.affiliate.nav.best },
              ]}
            />
            <div className="af-eyebrow">{bp.eyebrow}</div>
            <h1 id="bp-h1">
              {bp.title} <span className="af-it">{bp.titleAccent}</span>
            </h1>
            <p>{bp.lead}</p>
            <div className="af-coll-hero__stats">
              {bp.stats.map((s) => (
                <div className="cell" key={s.v}>
                  <span className="k">{s.k}</span>
                  <span className="v">{s.v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="af-coll-hero__cover" style={coverStyle} aria-hidden="true" />
        </section>

        <section className="af-section" aria-labelledby="bp-board-h">
          <div className="af-container">
            <h2 id="bp-board-h" className="sr-only">
              {bp.title} {bp.titleAccent}
            </h2>
            <AfBestPicksBoard picks={picks} t={t} locale={locale} />
          </div>
        </section>

        <section
          className="af-section af-section--tight"
          aria-labelledby="bp-why"
        >
          <div className="af-container">
            <AfSectionHead
              id="bp-why"
              eyebrow={bp.eyebrow}
              title={bp.whyTitle}
              lead={bp.whyLead}
            />
            <div className="af-bp-why">
              <AfEditorNote t={t} />
              <ul className="af-bp-why__list">
                {bp.whyPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          className="af-section"
          aria-labelledby="bp-criteria"
          style={{
            background: "var(--bg-2)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="af-container">
            <AfSectionHead
              id="bp-criteria"
              title={bp.criteriaTitle}
              lead={bp.criteriaLead}
            />
            <div className="af-bp-crit-grid">
              {bp.criteria.map((crit, i) => (
                <div className="af-bp-crit" key={crit.title}>
                  <span className="af-bp-crit__n" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="af-bp-crit__t">{crit.title}</h3>
                  <p className="af-bp-crit__d">{crit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {guides.length > 0 && (
          <section className="af-section" aria-labelledby="bp-guides">
            <div className="af-container">
              <AfSectionHead
                id="bp-guides"
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
        <JsonLd data={itemListLd(
          picks.map((pick) => ({
            name: pick.product.name[locale],
            url: `/${locale}/p/${pick.product.slug ?? pick.product.id}`,
          })),
          `${bp.title} ${bp.titleAccent}`
        )} />
      </main>
      <AfFooter t={t} locale={locale} />
    </div>
  );
}
