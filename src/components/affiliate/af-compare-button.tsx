"use client";

import type { Dictionary } from "@/i18n/dictionaries";
import { AfIcon } from "./af-icon";

type Props = {
  productId: string;
  t: Dictionary;
  className?: string;
};

export function AfCompareButton({ productId, t, className }: Props) {
  const cls = `af-iconbtn${className ? " " + className : ""}`;
  return (
    <button
      type="button"
      className={cls}
      aria-label={`${t.affiliate.ui.addToCompare} · ${productId}`}
      onClick={() => {
        // TODO(phase-10): persist to localStorage gd_compare (max 4)
      }}
    >
      <AfIcon name="plus" size={16} />
    </button>
  );
}
