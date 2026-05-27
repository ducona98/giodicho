import type { Dictionary } from "@/i18n/dictionaries";

type Props = { t: Dictionary; compact?: boolean };

export function AfDisclosure({ t, compact }: Props) {
  return (
    <div className="af-disclosure" style={compact ? { fontSize: 12 } : undefined}>
      <span className="af-disclosure__ico" aria-hidden="true">i</span>
      <div>{t.affiliate.disclosure.full}</div>
    </div>
  );
}
