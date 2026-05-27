"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { Header } from "./header";
import { MobileMenu } from "./mobile-menu";

export function SiteChrome({ t, locale }: { t: Dictionary; locale: Locale }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header t={t} locale={locale} cartCount={2} onMenu={() => setMenuOpen(true)} />
      <MobileMenu t={t} locale={locale} open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
