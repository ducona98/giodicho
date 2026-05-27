import type { AffiliateFaq } from "@/i18n/affiliate-data";
import type { Locale } from "@/i18n/config";

type Props = {
  faqs: AffiliateFaq[];
  locale: Locale;
};

export function AfFaq({ faqs, locale }: Props) {
  return (
    <div className="af-faq-list">
      {faqs.map((faq, i) => (
        <details key={i} className="af-faq-item">
          <summary className="af-faq-item__q">
            <span>{faq.q[locale]}</span>
            <span className="sym" aria-hidden="true">+</span>
          </summary>
          <p className="af-faq-item__a">{faq.a[locale]}</p>
        </details>
      ))}
    </div>
  );
}
