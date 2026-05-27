import "../globals.css";
import "../affiliate.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Instrument_Serif } from "next/font/google";
import { isLocale, LOCALES, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { ThemeProvider } from "@/components/theme-provider";
import { RevealRoot } from "@/components/reveal";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const themeInit = `
try {
  var t = localStorage.getItem('gd_theme');
  if (t === 'dark' || t === 'light') {
    document.documentElement.setAttribute('data-theme', t);
  }
} catch (e) {}
`;

type LayoutParams = { params: { locale: string } };

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutParams): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const t = getDictionary(params.locale);
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${params.locale}`,
      languages: { vi: "/vi", en: "/en", "x-default": "/en" },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      locale: params.locale,
      type: "website",
    },
  };
}

export default function LocaleLayout({ children, params }: { children: ReactNode } & LayoutParams) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;

  const fontVars = [GeistSans.variable, GeistMono.variable, instrumentSerif.variable].join(" ");
  const fontVarStyle = `
    :root {
      --font-geist: ${GeistSans.style.fontFamily};
      --font-geist-mono: ${GeistMono.style.fontFamily};
      --font-instrument-serif: ${instrumentSerif.style.fontFamily};
    }
  `;

  return (
    <html lang={locale} data-theme="light" className={fontVars} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <style dangerouslySetInnerHTML={{ __html: fontVarStyle }} />
      </head>
      <body>
        <ThemeProvider>
          {children}
          <RevealRoot />
        </ThemeProvider>
      </body>
    </html>
  );
}
