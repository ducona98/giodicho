"use client";

import { useMemo, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { AFFILIATE_DATA, findProduct, type AffiliateDeal } from "@/i18n/affiliate-data";
import { AfDealCard } from "./af-deal-card";

type FilterKey = "today" | "hot" | "limited" | "coupon" | "budget" | "gift";

const FILTER_ORDER: FilterKey[] = ["today", "hot", "limited", "coupon", "budget", "gift"];

const HOT_THRESHOLD = 30;
const BUDGET_CEILING = 300_000;

function toNumber(s: string): number {
  const n = Number(s.replace(/[^\d]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

function matches(deal: AffiliateDeal, key: FilterKey): boolean {
  switch (key) {
    case "today":
      return true;
    case "hot":
      return toNumber(deal.pct) >= HOT_THRESHOLD;
    case "limited":
      return Boolean(deal.endsAt);
    case "coupon":
      return Boolean(deal.coupon);
    case "budget":
      return toNumber(deal.now) < BUDGET_CEILING;
    case "gift": {
      const p = findProduct(deal.pid);
      return Boolean(
        p &&
          (p.badge === "gift" ||
            p.bestPickFor === "bestForGift" ||
            p.tags.en.includes("Gift") ||
            p.tags.vi.includes("Quà tặng"))
      );
    }
    default:
      return true;
  }
}

type Props = { t: Dictionary; locale: Locale };

export function AfDealsBoard({ t, locale }: Props) {
  const d = t.affiliate.dealsPage;
  const [active, setActive] = useState<FilterKey>("today");

  const visible = useMemo(
    () => AFFILIATE_DATA.deals.filter((deal) => matches(deal, active)),
    [active]
  );

  const resultCount = d.resultCount.replace("{n}", String(visible.length));

  return (
    <div className="af-deals-board">
      <div className="af-bp-tabs" role="tablist" aria-label={d.eyebrow}>
        {FILTER_ORDER.map((key) => {
          const on = active === key;
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={on}
              className={`af-bp-tab${on ? " is-active" : ""}`}
              onClick={() => setActive(key)}
            >
              {d.filters[key]}
            </button>
          );
        })}
      </div>

      <div className="af-deals-toolbar">
        <span className="count">{resultCount}</span>
        <span className="updated">{d.updatedLabel}</span>
      </div>

      {visible.length > 0 ? (
        <div className="af-grid-3">
          {visible.map((deal) => (
            <AfDealCard key={deal.pid} deal={deal} t={t} locale={locale} showMeta />
          ))}
        </div>
      ) : (
        <div className="af-coll-empty">
          <h3>{d.emptyTitle}</h3>
          <p>{d.emptyBody}</p>
          <button
            type="button"
            className="af-btn af-btn--ghost"
            onClick={() => setActive("today")}
          >
            {d.filters.today}
          </button>
        </div>
      )}
    </div>
  );
}
