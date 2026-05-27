import type { ReactNode } from "react";
import type { BadgeKey } from "@/i18n/affiliate-data";

export type AfBadgeVariant = BadgeKey | "editor";

type Props = {
  variant: AfBadgeVariant;
  children: ReactNode;
  className?: string;
};

const VARIANT_CLASS: Record<AfBadgeVariant, string> = {
  best: "af-badge--best",
  value: "af-badge--value",
  limited: "af-badge--limited",
  gift: "af-badge--gift",
  deal: "af-badge--deal",
  new: "af-badge--new",
  editor: "af-badge--editor",
};

export function AfBadge({ variant, children, className }: Props) {
  const cls = `af-badge ${VARIANT_CLASS[variant]}${className ? " " + className : ""}`;
  return <span className={cls}>{children}</span>;
}
