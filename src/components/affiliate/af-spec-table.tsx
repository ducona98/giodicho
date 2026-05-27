import type { AffiliateSpec } from "@/i18n/affiliate-data";
import type { Dictionary } from "@/i18n/dictionaries";

type Props = {
  specs: AffiliateSpec;
  t: Dictionary;
};

type SpecKey = keyof AffiliateSpec;

const SPEC_ORDER: SpecKey[] = ["scale", "material", "size", "weight", "origin", "power"];

export function AfSpecTable({ specs, t }: Props) {
  const labels = t.affiliate.productDetail.specLabels;
  const rows = SPEC_ORDER
    .map((key) => ({ key, value: specs[key] }))
    .filter((row): row is { key: SpecKey; value: string } => Boolean(row.value));

  if (rows.length === 0) return null;

  return (
    <dl className="af-specs">
      {rows.map(({ key, value }) => (
        <div key={key} className="af-specs__row">
          <dt className="k">{labels[key]}</dt>
          <dd className="v" style={{ margin: 0 }}>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
