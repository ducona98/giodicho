"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

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
  const s = t.affiliate.search;
  const ui = t.affiliate.ui;

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
        aria-label={ui.closeMenu}
        style={{ position: "absolute", top: 20, right: 20 }}
      >
        <AfIcon name="x" />
      </button>

      <form
        className="af-mmenu-search"
        role="search"
        aria-label={ui.searchAria}
        onSubmit={(e) => {
          e.preventDefault();
          const q = (e.currentTarget.elements.namedItem("q") as HTMLInputElement).value.trim();
          onClose();
          router.push(`/${locale}/search${q ? `?q=${encodeURIComponent(q)}` : ""}`);
        }}
      >
        <div className="af-search-input-wrap">
          <AfIcon name="search" size={16} />
          <input
            name="q"
            type="search"
            className="af-search-input"
            placeholder={s.placeholder}
            aria-label={ui.searchAria}
          />
        </div>
      </form>

      <nav aria-label={ui.mobileNavAria}>
        <Link href={`/${locale}`} onClick={onClose}>{n.home}</Link>
        <a href="#collections" onClick={onClose}>{n.collections}</a>
        <Link href={`/${locale}/best-picks`} onClick={onClose}>{n.best}</Link>
        <Link href={`/${locale}/deals`} onClick={onClose}>{n.deals}</Link>
        <Link href={`/${locale}/guides`} onClick={onClose}>{n.guides}</Link>
        <Link href={`/${locale}/compare`} onClick={onClose}>{n.compare}</Link>
      </nav>
    </div>
  );
}
