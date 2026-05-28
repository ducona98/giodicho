"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import type { AffiliateArticle, ArticleTopic } from "@/i18n/affiliate-data";
import { ARTICLE_TOPIC_LABELS } from "@/i18n/affiliate-constants";
import { AfArticleCard } from "./af-article-card";
import { AfIcon } from "./af-icon";

type Props = {
  articles: AffiliateArticle[];
  t: Dictionary;
  locale: Locale;
};

export function AfGuidesBoard({ articles, t, locale }: Props) {
  const g = t.affiliate.guidesPage;
  const ui = t.affiliate.ui;
  const [active, setActive] = useState<ArticleTopic | "all">("all");

  const presentTopics: ArticleTopic[] = [];
  for (const a of articles) {
    if (a.topic && !presentTopics.includes(a.topic)) presentTopics.push(a.topic);
  }

  const tabs: { key: ArticleTopic | "all"; label: string }[] = [
    { key: "all", label: g.tabAll },
    ...presentTopics.map((topic) => ({
      key: topic,
      label: ARTICLE_TOPIC_LABELS[topic][locale],
    })),
  ];

  const filtered =
    active === "all" ? articles : articles.filter((a) => a.topic === active);
  const featured = filtered[0];
  const rest = filtered.slice(1);

  const href = (a: AffiliateArticle) => `/${locale}/guides/${a.slug ?? a.id}`;

  return (
    <div className="af-guides-board">
      <div className="af-bp-tabs" role="tablist" aria-label={g.eyebrow}>
        {tabs.map((tab) => {
          const on = active === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={on}
              className={`af-bp-tab${on ? " is-active" : ""}`}
              onClick={() => setActive(tab.key)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {!featured ? (
        <div className="af-coll-empty">
          <h3>{g.emptyTitle}</h3>
          <p>{g.emptyBody}</p>
        </div>
      ) : (
        <>
          <article
            className="af-guide-featured"
            aria-label={featured.title[locale]}
          >
            <a
              className="af-guide-featured__media"
              href={href(featured)}
              style={{ "--phx": featured.ph.a, "--phy": featured.ph.b } as CSSProperties}
              aria-hidden="true"
              tabIndex={-1}
            />
            <div className="af-guide-featured__body">
              <div className="af-eyebrow">{g.featuredEyebrow}</div>
              <div className="af-guide-featured__meta">
                {featured.topic && (
                  <span className="cat">
                    {ARTICLE_TOPIC_LABELS[featured.topic][locale]}
                  </span>
                )}
                <span>{featured.read} {ui.readTime}</span>
                <span aria-hidden="true">·</span>
                <span>{featured.updated[locale]}</span>
              </div>
              <h3 className="af-guide-featured__title">
                <a href={href(featured)}>{featured.title[locale]}</a>
              </h3>
              <p className="af-guide-featured__excerpt">{featured.excerpt[locale]}</p>
              <a href={href(featured)} className="af-btn af-btn--primary">
                {ui.readGuide} <AfIcon name="arrow" size={14} />
              </a>
            </div>
          </article>

          {rest.length > 0 && (
            <div className="af-guides-board__all">
              <h3 className="af-bp-sub__title">{g.allTitle}</h3>
              <p className="af-bp-sub__lead">{g.allLead}</p>
              <div className="af-grid-3">
                {rest.map((a) => (
                  <AfArticleCard
                    key={a.id}
                    article={a}
                    t={t}
                    locale={locale}
                    href={href(a)}
                  />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
