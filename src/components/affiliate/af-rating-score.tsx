type Props = {
  score: number;
  max?: number;
  ariaLabel?: string;
  className?: string;
};

export function AfRatingScore({ score, max = 10, ariaLabel, className }: Props) {
  const cls = `af-pick__score${className ? " " + className : ""}`;
  return (
    <meter
      className={cls}
      value={score}
      min={0}
      max={max}
      aria-label={ariaLabel ?? `${score.toFixed(1)} / ${max}`}
    >
      {score.toFixed(1)}
    </meter>
  );
}
