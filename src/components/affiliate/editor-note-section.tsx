import type { Dictionary } from "@/i18n/dictionaries";
import { AfEditorNote } from "./af-editor-note";

export function AfEditorNoteSection({ t }: { t: Dictionary }) {
  return (
    <section className="af-section af-section--tight" aria-label={t.affiliate.editor.signature}>
      <div className="af-container">
        <AfEditorNote t={t} />
      </div>
    </section>
  );
}
