import type { Locale } from "@/i18n/config";
import type {
  AffiliateProduct,
  AffiliateArticle,
  AffiliateFaq,
  MerchantKey,
} from "@/i18n/affiliate-data";

/* ------------------------------------------------------------------ */
/*  JSON-LD Renderer                                                    */
/* ------------------------------------------------------------------ */

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const json = JSON.stringify(data, null, 0);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Shared helpers                                                      */
/* ------------------------------------------------------------------ */

type Graph = { "@type": string; [k: string]: unknown };

function ld<T extends Graph>(obj: T): T {
  return { "@context": "https://schema.org", ...obj };
}

function ogLocale(locale: Locale): string {
  return locale === "vi" ? "vi_VN" : "en_US";
}

/* ------------------------------------------------------------------ */
/*  Organization                                                        */
/* ------------------------------------------------------------------ */

export function organizationLd() {
  return ld({
    "@type": "Organization",
    name: "Giodicho",
    url: "https://giodicho.com",
    description: "Curated affiliate discovery for miniatures, figures, collectibles & desk decor.",
    sameAs: [],
  });
}

/* ------------------------------------------------------------------ */
/*  WebSite + SearchAction                                              */
/* ------------------------------------------------------------------ */

export function webSiteLd(locale: Locale) {
  return ld({
    "@type": "WebSite",
    name: "Giodicho",
    url: `https://giodicho.com/${locale}`,
    inLanguage: locale === "vi" ? "vi" : "en",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `https://giodicho.com/${locale}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  });
}

/* ------------------------------------------------------------------ */
/*  BreadcrumbList                                                      */
/* ------------------------------------------------------------------ */

export function breadcrumbLd(items: { name: string; item?: string }[], baseUrl = "https://giodicho.com") {
  return ld({
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem" as const,
      position: i + 1,
      name: item.name,
      ...(item.item ? { item: item.item.startsWith("/") ? `${baseUrl}${item.item}` : item.item } : {}),
    })),
  });
}

/* ------------------------------------------------------------------ */
/*  FAQPage                                                             */
/* ------------------------------------------------------------------ */

export function faqLd(faqs: AffiliateFaq[], locale: Locale) {
  return ld({
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q[locale],
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a[locale],
      },
    })),
  });
}

/* ------------------------------------------------------------------ */
/*  Product (detail page)                                               */
/* ------------------------------------------------------------------ */

const MERCHANT_SELLERS: Record<MerchantKey, { name: string; url: string }> = {
  shopee: { name: "Shopee", url: "https://shopee.vn" },
  tiktok: { name: "TikTok Shop", url: "https://shop.tiktok.com" },
  lazada: { name: "Lazada", url: "https://lazada.vn" },
  official: { name: "Official Store", url: "https://giodicho.com" },
};

export function productLd(product: AffiliateProduct, locale: Locale, baseUrl: string) {
  const slug = product.slug ?? product.id;
  const url = `${baseUrl}/${locale}/p/${slug}`;
  const offers = product.merchants
    .map((m) => {
      const offer = product.merchantOffers?.[m];
      if (!offer) return null;
      const priceStr = (offer.price ?? product.priceLow).replace(/[^\d]/g, "");
      const price = Number(priceStr);
      return {
        "@type": "Offer" as const,
        price: isNaN(price) ? undefined : String(price),
        priceCurrency: "VND",
        availability: "https://schema.org/InStock",
        url: offer.url,
        seller: {
          "@type": "Organization" as const,
          name: MERCHANT_SELLERS[m]?.name ?? m,
        },
      };
    })
    .filter(Boolean);

  return ld({
    "@type": "Product",
    name: product.name[locale],
    description: product.description?.[locale] ?? product.why[locale],
    sku: product.id,
    url,
    ...(offers.length > 0 ? { offers: offers.length === 1 ? offers[0] : offers } : {}),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.stars,
      bestRating: "5",
      ratingCount: product.reviews,
      reviewCount: product.reviews,
      itemReviewed: product.name[locale],
    },
    brand: {
      "@type": "Brand",
      name: "Giodicho Curated",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Editorial Score",
        value: product.score.toFixed(1),
        unitText: "/10",
      },
    ],
  });
}

/* ------------------------------------------------------------------ */
/*  Article (guide detail page)                                         */
/* ------------------------------------------------------------------ */

export function articleLd(article: AffiliateArticle, locale: Locale, baseUrl: string) {
  const slug = article.slug ?? article.id;
  const url = `${baseUrl}/${locale}/guides/${slug}`;
  const bodySections = article.body ?? [];
  const articleBody = bodySections.map((s) => s.content[locale]).join("\n\n");

  return ld({
    "@type": "Article",
    headline: article.title[locale],
    description: article.excerpt[locale],
    url,
    ...(article.author ? { author: { "@type": "Person" as const, name: article.author.name } } : {}),
    dateModified: article.updated[locale],
    datePublished: article.updated[locale],
    wordCount: articleBody.split(/\s+/).filter(Boolean).length,
    inLanguage: locale === "vi" ? "vi" : "en",
    about: article.cat[locale],
    articleBody: articleBody || undefined,
  });
}

/* ------------------------------------------------------------------ */
/*  ItemList (collection / listing pages)                               */
/* ------------------------------------------------------------------ */

export function itemListLd(
  items: { name: string; url: string }[],
  listName: string,
  baseUrl = "https://giodicho.com",
) {
  return ld({
    "@type": "ItemList",
    name: listName,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem" as const,
      position: i + 1,
      item: {
        "@type": "Thing" as const,
        name: item.name,
        url: item.url.startsWith("/") ? `${baseUrl}${item.url}` : item.url,
      },
    })),
  });
}

/* ------------------------------------------------------------------ */
/*  Re-export ogLocale helper for metadata pages                        */
/* ------------------------------------------------------------------ */

export { ogLocale };
