type Props = { items: string[] };

export function AfMarquee({ items }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className="af-marquee" aria-hidden="true">
      <div className="af-marquee__track">
        {doubled.map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
    </div>
  );
}
