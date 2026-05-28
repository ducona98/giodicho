"use client";

import Link from "next/link";
import { useEffect } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { AfIcon } from "./af-icon";

type Props = {
  open: boolean;
  onClose: () => void;
  t: Dictionary;
  locale: Locale;
};

export function AfMobileMenu({ open, onClose, t, locale }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const n = t.affiliate.nav;

  return (
    <div
      className={`mobile-menu${open ? " is-open" : ""}`}
      aria-hidden={!open}
      role="dialog"
      aria-modal={open || undefined}
      aria-label={n.home}
    >
      <button
        type="button"
        className="af-iconbtn"
        onClick={onClose}
        aria-label={t.affiliate.ui.closeMenu}
        style={{ position: "absolute", top: 20, right: 20 }}
      >
        <AfIcon name="x" />
      </button>
      <nav aria-label="Mobile">
        <Link href={`/${locale}`} onClick={onClose}>{n.home}</Link>
        <a href="#collections" onClick={onClose}>{n.collections}</a>
        <Link href={`/${locale}/best-picks`} onClick={onClose}>{n.best}</Link>
        <Link href={`/${locale}/deals`} onClick={onClose}>{n.deals}</Link>
        <Link href={`/${locale}/guides`} onClick={onClose}>{n.guides}</Link>
        <a href="#compare" onClick={onClose}>{n.compare}</a>
      </nav>
    </div>
  );
}
