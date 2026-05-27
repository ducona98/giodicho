import type { Dictionary } from "@/i18n/dictionaries";

type Props = { t: Dictionary };

export function AfEditorNote({ t }: Props) {
  return (
    <div className="af-editor">
      <div className="af-editor__avatar" aria-hidden="true">{t.affiliate.editor.avatar}</div>
      <div>
        <blockquote className="af-editor__quote">
          {t.affiliate.editor.quote}
        </blockquote>
        <div className="af-editor__sig">{t.affiliate.editor.signature}</div>
      </div>
    </div>
  );
}
