import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, LOCALES, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import {
  AFFILIATE_DATA,
  findProduct,
  type AffiliateProduct,
} from "@/i18n/affiliate-data";
import { BADGE_LABELS, CTA_LABELS, MERCHANT_CTA } from "@/i18n/affiliate-constants";
import { AfHeader } from "@/components/affiliate/af-header";
import { AfFooter } from "@/components/affiliate/af-footer";
import { AfBreadcrumb } from "@/components/affiliate/af-breadcrumb";
import { AfProductGallery } from "@/components/affiliate/af-product-gallery";
import { AfStickyCta, AfMobileBuybar } from "@/components/affiliate/af-sticky-cta";
import { AfProsCons } from "@/components/affiliate/af-pros-cons";
import { AfSpecTable } from "@/components/affiliate/af-spec-table";
import { AfMerchantOffersTable } from "@/components/affiliate/af-merchant-offers-table";
import { AfFaq } from "@/components/affiliate/af-faq";
import { AfDisclosure } from "@/components/affiliate/af-disclosure";
import { AfBadge } from "@/components/affiliate/af-badge";
import { AfRatingScore } from "@/components/affiliate/af-rating-score";
import { AfProductCard } from "@/components/affiliate/af-product-card";
import { AfIcon } from "@/components/affiliate/af-icon";

type RouteParams = { locale: string; slug: string };

export function generateStaticParams() {
  const slugs = AFFILIATE_DATA.products
    .map((p) => p.slug ?? p.id)
    .filter((s): s is string => Boolean(s));
  return LOCALES.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: RouteParams;
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale as Locale;
  const product = findProduct(params.slug);
  if (!product) return {};
  const t = getDictionary(locale);
  const name = product.name[locale];
  const category = product.cat[locale];
  const description = product.description?.[locale] ?? product.why[locale];
  const slug = product.slug ?? product.id;
  return {
    title: `${name} — ${category} | Giodicho`,
    description,
    alternates: {
      canonical: `/${locale}/p/${slug}`,
      languages: {
        vi: `/vi/p/${slug}`,
        en: `/en/p/${slug}`,
        "x-default": `/en/p/${slug}`,
      },
    },
    openGraph: {
      title: `${name} — ${category}`,
      description,
      locale,
      type: "article",
      siteName: t.meta.title,
    },
  };
}

function findRelated(product: AffiliateProduct): AffiliateProduct[] {
  const explicit: AffiliateProduct[] = [];
  for (const id of product.relatedIds ?? []) {
    const found = findProduct(id);
    if (found) explicit.push(found);
  }
  if (explicit.length >= 3) return explicit.slice(0, 3);
  const merged: AffiliateProduct[] = [...explicit];
  for (const candidate of AFFILIATE_DATA.products as readonly AffiliateProduct[]) {
    if (merged.length >= 3) break;
    if (candidate.catSlug !== product.catSlug) continue;
    if (candidate.id === product.id) continue;
    if (merged.find((m) => m.id === candidate.id)) continue;
    merged.push(candidate);
  }
  return merged.slice(0, 3);
}

export default function ProductDetailPage({ params }: { params: RouteParams }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const product = findProduct(params.slug);
  if (!product) notFound();

  const t = getDictionary(locale);
  const pd = t.affiliate.productDetail;
  const name = product.name[locale];
  const category = product.cat[locale];
  const description = product.description?.[locale] ?? product.why[locale];
  const badgeLabel = product.badge ? BADGE_LABELS[product.badge][locale] : null;
  const pros = product.pros?.[locale] ?? [];
  const cons = product.cons?.[locale] ?? [];
  const bestFor = product.bestFor?.[locale] ?? [];
  const specs = product.specs?.[locale];
  const faqs = product.faqs ?? [];
  const related = findRelated(product);
  const reviewsLabel = pd.reviewsCount.replace("{n}", String(product.reviews));
  const featuredOffer = product.merchants
    .map((m) => product.merchantOffers?.[m])
    .find((o) => Boolean(o));
  const featuredMerchant = product.merchants.find(
    (m) => product.merchantOffers?.[m]
  );

  return (
    <div className="af-page af-page--pdp">
      <AfHeader t={t} locale={locale} />
      <main id="main">
        <AfBreadcrumb
          ariaLabel={pd.breadcrumbAria}
          items={[
            { label: pd.breadcrumbHome, href: `/${locale}` },
            { label: category, href: `/${locale}#categories` },
            { label: name },
          ]}
        />

        <section className="af-pd-top" aria-labelledby="pdp-h1">
          <AfProductGallery
            product={product}
            locale={locale}
            galleryAria={pd.galleryAria}
            thumbAria={pd.thumbAria}
          />
          <div className="af-pd-info">
            <div className="af-eyebrow" style={{ display: "inline-block" }}>
              {category}
            </div>
            <h1 id="pdp-h1">{name}</h1>
            <div className="af-pd-info__badges">
              {badgeLabel && product.badge && (
                <AfBadge variant={product.badge}>{badgeLabel}</AfBadge>
              )}
              {product.bestPickFor && (
                <AfBadge variant="editor">{pd.pickedForPrefix}</AfBadge>
              )}
            </div>
            <div className="scoreRow">
              <span className="pill" aria-label={pd.editorScoreAria}>
                {product.score.toFixed(1)} <span aria-hidden="true">/ 10</span>
              </span>
              <AfRatingScore
                score={product.score}
                ariaLabel={`${pd.editorScoreAria} ${product.score.toFixed(1)} / 10`}
              />
              <span>
                <span className="star" aria-hidden="true">★</span>{" "}
                {product.stars.toFixed(1)}
                <span style={{ color: "var(--text-3)", marginLeft: 8 }}>
                  · {reviewsLabel}
                </span>
              </span>
            </div>
            <p className="summary">{description}</p>
            {featuredOffer && featuredMerchant && (
              <div className="af-pd-info__cta">
                <span className="af-pd-info__price">
                  <span className="from">{pd.priceFromLabel}</span>{" "}
                  <span className="amt">{product.priceLow}</span>
                </span>
                <a
                  className="af-btn af-btn--primary"
                  href={featuredOffer.url}
                  rel="sponsored nofollow noopener"
                  target="_blank"
                >
                  {CTA_LABELS[MERCHANT_CTA[featuredMerchant]][locale]}{" "}
                  <AfIcon name="arrow" size={14} />
                </a>
                <a href="#where-to-buy" className="af-btn">
                  {pd.seeAllSellers}
                </a>
              </div>
            )}
            <AfStickyCta product={product} t={t} locale={locale} />
            <AfDisclosure t={t} compact />
          </div>
        </section>

        <section className="af-pd-section" aria-labelledby="pdp-about">
          <h2 id="pdp-about">{pd.aboutTitle}</h2>
          <p className="af-pd-section__body">{description}</p>
          {product.tags[locale].length > 0 && (
            <div className="af-pd-bestfor" style={{ marginTop: 24 }}>
              {product.tags[locale].map((tag) => (
                <span key={tag} className="af-pd-bestfor__chip">{tag}</span>
              ))}
            </div>
          )}
        </section>

        {(pros.length > 0 || cons.length > 0) && (
          <section className="af-pd-section" aria-labelledby="pdp-proscons">
            <h2 id="pdp-proscons">
              {pd.prosTitle} <span style={{ color: "var(--text-3)" }}>·</span>{" "}
              {pd.consTitle}
            </h2>
            <AfProsCons
              pros={pros}
              cons={cons}
              prosTitle={pd.prosTitle}
              consTitle={pd.consTitle}
            />
          </section>
        )}

        {bestFor.length > 0 && (
          <section className="af-pd-section" aria-labelledby="pdp-bestfor">
            <h2 id="pdp-bestfor">{pd.bestForTitle}</h2>
            <div className="af-pd-bestfor">
              {bestFor.map((item) => (
                <span key={item} className="af-pd-bestfor__chip">{item}</span>
              ))}
            </div>
          </section>
        )}

        {specs && (
          <section className="af-pd-section" aria-labelledby="pdp-specs">
            <h2 id="pdp-specs">{pd.specsTitle}</h2>
            <AfSpecTable specs={specs} t={t} />
          </section>
        )}

        <section
          className="af-pd-section"
          id="where-to-buy"
          aria-labelledby="pdp-wtb"
        >
          <h2 id="pdp-wtb">{pd.whereToBuyTitle}</h2>
          <p className="af-lead" style={{ marginTop: -12, marginBottom: 24 }}>
            {pd.whereToBuyLead}
          </p>
          <AfMerchantOffersTable product={product} t={t} locale={locale} />
          <p className="af-pd-trust">
            <AfIcon name="shield" size={14} /> {pd.pricesMayChange}
          </p>
        </section>

        {faqs.length > 0 && (
          <section className="af-pd-section" aria-labelledby="pdp-faq">
            <h2 id="pdp-faq">{pd.faqTitle}</h2>
            <AfFaq faqs={faqs} locale={locale} />
          </section>
        )}

        {related.length > 0 && (
          <section className="af-pd-section" aria-labelledby="pdp-related">
            <h2 id="pdp-related">{pd.relatedTitle}</h2>
            <p className="af-lead" style={{ marginTop: -12, marginBottom: 28 }}>
              {pd.relatedLead}
            </p>
            <div className="af-grid-3">
              {related.map((p) => (
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

        <section className="af-pd-section" aria-label={t.affiliate.disclosure.full}>
          <AfDisclosure t={t} />
        </section>
      </main>
      <AfMobileBuybar product={product} t={t} locale={locale} />
      <AfFooter t={t} locale={locale} />
    </div>
  );
}
