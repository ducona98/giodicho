import { MERCHANTS, type MerchantKey } from "@/i18n/affiliate-data";

type Props = { keyId: MerchantKey; className?: string };

export function AfMerchant({ keyId, className }: Props) {
  const m = MERCHANTS[keyId];
  if (!m) return null;
  const cls = `af-merchant-chip ${keyId}${className ? " " + className : ""}`;
  return (
    <span className={cls} title={m.label} aria-label={m.label}>
      {m.short}
    </span>
  );
}
