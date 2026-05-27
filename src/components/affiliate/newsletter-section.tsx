import type { Dictionary } from "@/i18n/dictionaries";
import { AfNewsletter } from "./af-newsletter";

export function AfNewsletterSection({ t }: { t: Dictionary }) {
  return (
    <section className="af-section af-section--tight" aria-label={t.affiliate.newsletter.eyebrow}>
      <div className="af-container">
        <AfNewsletter t={t} />
      </div>
    </section>
  );
}
