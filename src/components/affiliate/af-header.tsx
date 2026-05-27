"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { AfIcon } from "./af-icon";
import { AfMobileMenu } from "./af-mobile-menu";
import { useTheme } from "../theme-provider";

type Props = {
  t: Dictionary;
  locale: Locale;
  savedCount?: number;
};

function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

function swapLocale(pathname: string, target: Locale): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return `/${target}`;
  parts[0] = target;
  return "/" + parts.join("/");
}

export function AfHeader({ t, locale, savedCount = 12 }: Props) {
  const scrolled = useScrolled();
  const pathname = usePathname() || `/${locale}`;
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const n = t.affiliate.nav;
  const ui = t.affiliate.ui;

  return (
    <>
      <a className="skip-link" href="#main">{ui.skipToContent}</a>
      <header className={`af-header${scrolled ? " is-scrolled" : ""}`} role="banner">
        <Link href={`/${locale}`} className="af-logo" aria-label="Giodicho — home">
          <span className="mark" aria-hidden="true" />
          <span>Giodicho</span>
        </Link>

        <nav className="af-nav" aria-label="Primary">
          <Link href={`/${locale}`} className="active">{n.home}</Link>
          <a href="#collections">{n.collections}</a>
          <a href="#best-picks">{n.best}</a>
          <a href="#deals">{n.deals}</a>
          <a href="#guides">{n.guides}</a>
          <a href="#compare">{n.compare}</a>
        </nav>

        <div className="af-actions">
          <button type="button" className="af-iconbtn" aria-label={ui.searchAria}>
            <AfIcon name="search" />
          </button>
          <button
            type="button"
            className="af-iconbtn"
            aria-label={theme === "dark" ? ui.themeToLight : ui.themeToDark}
            onClick={toggle}
          >
            <AfIcon name={theme === "dark" ? "sun" : "moon"} />
          </button>
          <div className="af-langpill" role="group" aria-label={ui.languageAria}>
            <Link
              href={swapLocale(pathname, "vi")}
              className={locale === "vi" ? "on" : ""}
              aria-current={locale === "vi" ? "true" : undefined}
              prefetch={false}
            >
              VI
            </Link>
            <Link
              href={swapLocale(pathname, "en")}
              className={locale === "en" ? "on" : ""}
              aria-current={locale === "en" ? "true" : undefined}
              prefetch={false}
            >
              EN
            </Link>
          </div>
          <button
            type="button"
            className="af-savebtn"
            aria-label={`${ui.savedAria} (${savedCount})`}
          >
            <AfIcon name="save" size={14} />
            <span aria-hidden="true">{savedCount}</span>
          </button>
          <button
            type="button"
            className="af-iconbtn af-hamburger"
            aria-label={ui.openMenu}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <AfIcon name="menu" />
          </button>
        </div>
      </header>
      <AfMobileMenu t={t} locale={locale} open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
