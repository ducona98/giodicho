"use client";

import Link from "next/link";
import { useEffect } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { Icon } from "./icon";

type Props = {
  open: boolean;
  onClose: () => void;
  t: Dictionary;
  locale: Locale;
};

export function MobileMenu({ open, onClose, t, locale }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className={`mobile-menu${open ? " is-open" : ""}`} aria-hidden={!open}>
      <button
        type="button"
        className="btn-icon"
        onClick={onClose}
        aria-label="Close menu"
        style={{ position: "absolute", top: 20, right: 20 }}
      >
        <Icon name="close" />
      </button>
      <nav>
        <Link href={`/${locale}`} onClick={onClose}>{t.nav.home}</Link>
        <a href="#collections" onClick={onClose}>{t.nav.collections}</a>
        <a href="#products" onClick={onClose}>{t.nav.products}</a>
        <a href="#drop" onClick={onClose}>{t.nav.new}</a>
        <a href="#why" onClick={onClose}>{t.nav.about}</a>
        <a href="#footer" onClick={onClose}>{t.nav.contact}</a>
      </nav>
    </div>
  );
}
