import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { AFFILIATE_DATA } from "@/i18n/affiliate-data";
import { AfHeader } from "@/components/affiliate/af-header";
import { AfFooter } from "@/components/affiliate/af-footer";
import { AfBreadcrumb } from "@/components/affiliate/af-breadcrumb";
import { AfCompareBoard } from "@/components/affiliate/compare-board";
import { AfDisclosure } from "@/components/affiliate/af-disclosure";

type RouteParams = { locale: string };

export async function generateMetadata({
  params,
}: {
  params: RouteParams;
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale as Locale;
  const t = getDictionary(locale);
  const cp = t.affiliate.comparePage;
  const title = `${cp.title} ${cp.titleAccent} — Giodicho`;
  const description = cp.lead;
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/compare`,
      languages: {
        vi: "/vi/compare",
        en: "/en/compare",
        "x-default": "/en/compare",
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

export default function ComparePage({ params }: { params: RouteParams }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;

  const t = getDictionary(locale);
  const cp = t.affiliate.comparePage;
  const products = [...AFFILIATE_DATA.products];
  const articles = [...AFFILIATE_DATA.articles];

  const coverStyle = {
    "--ph": "var(--primary)",
    "--ph2": "var(--accent-2)",
  } as CSSProperties;

  return (
    <div className="af-page af-page--compare">
      <AfHeader t={t} locale={locale} />
      <main id="main">
        <section className="af-coll-hero" aria-labelledby="cmp-h1">
          <div>
            <AfBreadcrumb
              className="af-coll-hero__breadcrumb"
              ariaLabel={cp.breadcrumbAria}
              items={[
                { label: cp.breadcrumbHome, href: `/${locale}` },
                { label: t.affiliate.nav.compare },
              ]}
            />
            <div className="af-eyebrow">{cp.eyebrow}</div>
            <h1 id="cmp-h1">
              {cp.title} <span className="af-it">{cp.titleAccent}</span>
            </h1>
            <p>{cp.lead}</p>
          </div>
          <div className="af-coll-hero__cover" style={coverStyle} aria-hidden="true" />
        </section>

        <section className="af-section" aria-labelledby="cmp-board-h">
          <div className="af-container">
            <h2 id="cmp-board-h" className="sr-only">
              {cp.title} {cp.titleAccent}
            </h2>
            <AfCompareBoard
              products={products}
              articles={articles}
              t={t}
              locale={locale}
            />
          </div>
        </section>

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
