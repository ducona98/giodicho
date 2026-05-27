import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { Icon } from "./icon";

type Props = { t: Dictionary; locale: Locale };

export function Footer({ t, locale }: Props) {
  const columns: Array<[string, { title: string; items: string[] }]> = [
    ["shop", t.footer.cols.shop],
    ["coll", t.footer.cols.coll],
    ["sup", t.footer.cols.sup],
    ["pol", t.footer.cols.pol],
  ];

  return (
    <footer className="footer" id="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link href={`/${locale}`} className="logo">
              <span className="logo__mark" aria-hidden="true" />
              <span>Giodicho</span>
            </Link>
            <p>{t.footer.tag}</p>
            <div className="lang-switch" style={{ marginTop: 24 }} role="group" aria-label="Language">
              <Link href="/vi" className={locale === "vi" ? "active" : ""} prefetch={false}>VI</Link>
              <Link href="/en" className={locale === "en" ? "active" : ""} prefetch={false}>EN</Link>
            </div>
          </div>
          {columns.map(([key, c]) => (
            <div key={key} className="footer__col">
              <h4>{c.title}</h4>
              <ul>
                {c.items.map((it, i) => (
                  <li key={i}><a href="#">{it}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__word" aria-hidden="true">GIODICHO</div>

        <div className="footer__bottom">
          <span>{t.footer.copy}</span>
          <div className="footer__pay" aria-label="Payment methods">
            <span>VISA</span><span>MC</span><span>MOMO</span><span>VNPAY</span><span>COD</span>
          </div>
          <div className="footer__social">
            <a href="#" aria-label="Instagram"><Icon name="ig" size={16} /></a>
            <a href="#" aria-label="TikTok"><Icon name="tk" size={16} /></a>
            <a href="#" aria-label="Twitter"><Icon name="tw" size={16} /></a>
            <a href="#" aria-label="Facebook"><Icon name="fb" size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
