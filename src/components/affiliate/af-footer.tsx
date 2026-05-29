import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { AfIcon } from "./af-icon";
import { AfDisclosure } from "./af-disclosure";

type Props = { t: Dictionary; locale: Locale };

export function AfFooter({ t, locale }: Props) {
  const f = t.affiliate.footer;

  const columns: [string, string, string[]][] = [
    ["discover", f.colTitles.discover, f.cols.discover],
    ["read",     f.colTitles.read,     f.cols.read],
    ["about",    f.colTitles.about,    f.cols.about],
    ["legal",    f.colTitles.legal,    f.cols.legal],
  ];

  return (
    <footer className="af-footer" id="footer" role="contentinfo">
      <div className="af-footer__grid">
        <div className="af-footer__brand">
          <Link href={`/${locale}`} className="af-logo">
            <span className="mark" aria-hidden="true" />
            <span>Giodicho</span>
          </Link>
          <p>{f.brandDesc}</p>
          <div style={{ marginTop: 20 }}>
            <div className="af-langpill" role="group" aria-label={t.affiliate.ui.languageAria}>
              <Link href="/vi" className={locale === "vi" ? "on" : ""} prefetch={false}>VI</Link>
              <Link href="/en" className={locale === "en" ? "on" : ""} prefetch={false}>EN</Link>
            </div>
          </div>
        </div>

        {columns.map(([key, title, items]) => (
          <div key={key} className="af-footer__col">
            <h4>{title}</h4>
            <ul>
              {items.map((it, i) => (
                <li key={i}><a href="#">{it}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: 1280, margin: "48px auto 0", padding: "0 56px" }}>
        <AfDisclosure t={t} />
      </div>

      <div className="af-footer__bottom">
        <span>{f.copy}</span>
        <div className="social" aria-label={f.socialAria}>
          <a href="#" aria-label={f.socialIg}><AfIcon name="ig" size={14} /></a>
          <a href="#" aria-label={f.socialYt}><AfIcon name="yt" size={14} /></a>
          <a href="#" aria-label={f.socialTt}><AfIcon name="tt" size={14} /></a>
          <a href="#" aria-label={f.socialRss}><AfIcon name="rss" size={14} /></a>
        </div>
      </div>
    </footer>
  );
}
