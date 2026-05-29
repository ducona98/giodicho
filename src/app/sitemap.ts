import type { MetadataRoute } from "next";
import { AFFILIATE_DATA } from "@/i18n/affiliate-data";
import { LOCALES } from "@/i18n/config";

const BASE_URL = "https://giodicho.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  for (const locale of LOCALES) {
    const prefix = `/${locale}`;

    // Static pages
    entries.push(
      { url: `${BASE_URL}${prefix}`, lastModified: now, changeFrequency: "daily", priority: 1.0 },
      { url: `${BASE_URL}${prefix}/best-picks`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
      { url: `${BASE_URL}${prefix}/deals`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
      { url: `${BASE_URL}${prefix}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
      { url: `${BASE_URL}${prefix}/compare`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
      { url: `${BASE_URL}${prefix}/search`, lastModified: now, changeFrequency: "weekly", priority: 0.5 },
    );
  }

  // Product pages
  for (const locale of LOCALES) {
    for (const p of AFFILIATE_DATA.products as readonly { slug?: string; id: string }[]) {
      const slug = p.slug ?? p.id;
      entries.push({
        url: `${BASE_URL}/${locale}/p/${slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  // Collection pages
  for (const locale of LOCALES) {
    for (const c of AFFILIATE_DATA.categories as readonly { slug: string }[]) {
      entries.push({
        url: `${BASE_URL}/${locale}/c/${c.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  // Article pages
  for (const locale of LOCALES) {
    for (const a of AFFILIATE_DATA.articles as readonly { slug?: string; id: string }[]) {
      const slug = a.slug ?? a.id;
      entries.push({
        url: `${BASE_URL}/${locale}/guides/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
