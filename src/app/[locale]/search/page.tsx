import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, LOCALES, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { AFFILIATE_DATA } from "@/i18n/affiliate-data";
import { AfHeader } from "@/components/affiliate/af-header";
import { AfFooter } from "@/components/affiliate/af-footer";
import { AfBreadcrumb } from "@/components/affiliate/af-breadcrumb";
import { AfSearch } from "@/components/affiliate/af-search";

type RouteParams = { locale: string };

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: RouteParams;
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale as Locale;
  const t = getDictionary(locale);
  const s = t.affiliate.search;
  const title = `${s.label} — Giodicho`;
  return {
    title,
    description: t.meta.description,
    alternates: {
      canonical: `/${locale}/search`,
      languages: {
        vi: "/vi/search",
        en: "/en/search",
        "x-default": "/en/search",
      },
    },
    openGraph: {
      title,
      description: t.meta.description,
      locale,
      type: "website",
      siteName: t.meta.title,
    },
  };
}

export default function SearchPage({ params }: { params: RouteParams }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const t = getDictionary(locale);
  const s = t.affiliate.search;

  const products = [...AFFILIATE_DATA.products].sort((a, b) => b.score - a.score);
  const categories = [...AFFILIATE_DATA.categories];

  return (
    <div className="af-page af-page--search">
      <AfHeader t={t} locale={locale} />
      <main id="main">
        <div className="af-container" style={{ paddingTop: 32, paddingBottom: 80 }}>
          <AfBreadcrumb
            ariaLabel={s.breadcrumbAria}
            items={[
              { label: s.breadcrumbHome, href: `/${locale}` },
              { label: s.label },
            ]}
          />
          <h1 className="af-h1" style={{ marginTop: 20, marginBottom: 32 }}>
            {s.label}
          </h1>
          <Suspense>
            <AfSearch
              locale={locale}
              t={t}
              products={products}
              categories={categories}
            />
          </Suspense>
        </div>
      </main>
      <AfFooter t={t} locale={locale} />
    </div>
  );
}
