import { Fragment } from "react";
import Link from "next/link";
import { JsonLd, breadcrumbLd } from "@/lib/jsonld";

export type BreadcrumbItem = { label: string; href?: string };

type Props = {
  items: BreadcrumbItem[];
  ariaLabel: string;
  className?: string;
  jsonld?: boolean;
};

export function AfBreadcrumb({ items, ariaLabel, className = "af-pd-breadcrumb", jsonld }: Props) {
  return (
    <>
      <nav className={className} aria-label={ariaLabel}>
        <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "inline" }}>
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <Fragment key={`${item.label}-${i}`}>
                <li style={{ display: "inline" }}>
                  {item.href && !isLast ? (
                    <Link href={item.href}>{item.label}</Link>
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
      {jsonld && (
        <JsonLd data={breadcrumbLd(
          items.map((item) => ({ name: item.label, item: item.href }))
        )} />
      )}
    </>
  );
}
