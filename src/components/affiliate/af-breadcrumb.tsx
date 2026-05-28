import { Fragment } from "react";

export type BreadcrumbItem = { label: string; href?: string };

type Props = {
  items: BreadcrumbItem[];
  ariaLabel: string;
  className?: string;
};

export function AfBreadcrumb({ items, ariaLabel, className = "af-pd-breadcrumb" }: Props) {
  return (
    <nav className={className} aria-label={ariaLabel}>
      <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "inline" }}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <Fragment key={`${item.label}-${i}`}>
              <li style={{ display: "inline" }}>
                {item.href && !isLast ? (
                  <a href={item.href}>{item.label}</a>
                ) : (
                  <span aria-current={isLast ? "page" : undefined}>{item.label}</span>
                )}
              </li>
              {!isLast && <span className="sep" aria-hidden="true">/</span>}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
