import type { CSSProperties } from "react";

const SEEDS = [
  { c: "#5B7CFA", c2: "#FFB86B" },
  { c: "#7DD3FC", c2: "#A78BFA" },
  { c: "#FFB86B", c2: "#F472B6" },
  { c: "#34D399", c2: "#FBBF24" },
  { c: "#A78BFA", c2: "#67E8F9" },
  { c: "#F472B6", c2: "#FCD34D" },
  { c: "#FBBF24", c2: "#60A5FA" },
  { c: "#60A5FA", c2: "#FB7185" },
];

type Props = {
  label: string;
  seed?: number;
  style?: CSSProperties;
};

type PlaceholderVars = CSSProperties & {
  "--ph-color"?: string;
  "--ph-color2"?: string;
};

export function Placeholder({ label, seed = 0, style }: Props) {
  const s = SEEDS[seed % SEEDS.length];
  const phStyle: PlaceholderVars = { "--ph-color": s.c, "--ph-color2": s.c2, ...style };
  return (
    <div className="ph" style={phStyle} role="img" aria-label={label}>
      <span className="ph__label">{label}</span>
    </div>
  );
}
