"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { Icon } from "./icon";
import { useTheme } from "./theme-provider";

type Props = {
  t: Dictionary;
  locale: Locale;
  cartCount: number;
  onMenu: () => void;
};

function useScrolled(threshold = 24) {
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

export function Header({ t, locale, cartCount, onMenu }: Props) {
  const scrolled = useScrolled();
  const pathname = usePathname() || `/${locale}`;
  const { theme, toggle } = useTheme();

  return (
    <header className={`header${scrolled ? " is-scrolled" : ""}`} role="banner">
      <div className="container header__inner">
        <Link href={`/${locale}`} className="logo" aria-label="Giodicho — home">
          <span className="logo__mark" aria-hidden="true" />
          <span>Giodicho</span>
        </Link>

        <nav className="nav" aria-label="Primary">
          <Link href={`/${locale}`} className="active">{t.nav.home}</Link>
          <a href="#collections">{t.nav.collections}</a>
          <a href="#products">{t.nav.products}</a>
          <a href="#drop">{t.nav.new}</a>
          <a href="#why">{t.nav.about}</a>
          <a href="#footer">{t.nav.contact}</a>
        </nav>

        <div className="header__actions">
          <button type="button" className="btn-icon" aria-label="Search">
            <Icon name="search" />
          </button>
          <button
            type="button"
            className="btn-icon"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggle}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} />
          </button>
          <div className="lang-switch" role="group" aria-label="Language">
            <Link
              href={swapLocale(pathname, "vi")}
              className={locale === "vi" ? "active" : ""}
              aria-current={locale === "vi" ? "true" : undefined}
              prefetch={false}
            >
              VI
            </Link>
            <Link
              href={swapLocale(pathname, "en")}
              className={locale === "en" ? "active" : ""}
              aria-current={locale === "en" ? "true" : undefined}
              prefetch={false}
            >
              EN
            </Link>
          </div>
          <button type="button" className="cart-pill" aria-label={`${t.cart} (${cartCount})`}>
            <Icon name="cart" size={16} />
            <span className="label">{t.cart}</span>
            <span className="count">{cartCount}</span>
          </button>
          <button type="button" className="hamburger" aria-label="Menu" onClick={onMenu}>
            <Icon name="menu" />
          </button>
        </div>
      </div>
    </header>
  );
}
