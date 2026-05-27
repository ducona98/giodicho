import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { AfHeader } from "@/components/affiliate/af-header";
import { AfFooter } from "@/components/affiliate/af-footer";
import { AfHero } from "@/components/affiliate/hero";
import { AfMarquee } from "@/components/affiliate/af-marquee";
import { AfCategoriesSection } from "@/components/affiliate/categories";
import { AfBestPicksSection } from "@/components/affiliate/best-picks";
import { AfEditorNoteSection } from "@/components/affiliate/editor-note-section";
import { AfDealsSection } from "@/components/affiliate/deals";
import { AfCompareTeaser } from "@/components/affiliate/compare-teaser";
import { AfGuidesSection } from "@/components/affiliate/guides";
import { AfGiftBudgetSection } from "@/components/affiliate/gift-budget";
import { AfMerchantTrustSection } from "@/components/affiliate/merchant-trust";
import { AfTestimonialsSection } from "@/components/affiliate/testimonials";
import { AfNewsletterSection } from "@/components/affiliate/newsletter-section";

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const t = getDictionary(locale);

  return (
    <div className="af-page">
      <AfHeader t={t} locale={locale} />
      <main id="main">
        <AfHero t={t} />
        <AfMarquee items={t.affiliate.marquee} />
        <AfCategoriesSection t={t} locale={locale} />
        <AfBestPicksSection t={t} locale={locale} />
        <AfEditorNoteSection t={t} />
        <AfDealsSection t={t} locale={locale} />
        <AfCompareTeaser t={t} locale={locale} />
        <AfGuidesSection t={t} locale={locale} />
        <AfGiftBudgetSection t={t} locale={locale} />
        <AfMerchantTrustSection t={t} />
        <AfTestimonialsSection t={t} locale={locale} />
        <AfNewsletterSection t={t} />
      </main>
      <AfFooter t={t} locale={locale} />
    </div>
  );
}
