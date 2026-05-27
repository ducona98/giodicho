type SingleProps = {
  variant?: "single";
  price: string;
  className?: string;
};

type DealProps = {
  variant: "deal";
  now: string;
  old?: string;
  pct?: string;
  className?: string;
};

type Props = SingleProps | DealProps;

export function AfPriceDisplay(props: Props) {
  if (props.variant === "deal") {
    const cls = `af-deal__price${props.className ? " " + props.className : ""}`;
    return (
      <div className={cls}>
        <span className="now">{props.now}</span>
        {props.old && <span className="was">{props.old}</span>}
        {props.pct && <span className="pct">{props.pct}</span>}
      </div>
    );
  }
  const cls = `af-product__price${props.className ? " " + props.className : ""}`;
  return <span className={cls}>{props.price}</span>;
}
