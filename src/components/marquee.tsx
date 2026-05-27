export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {doubled.map((it, i) => (
          <span key={i}>{it}</span>
        ))}
      </div>
    </div>
  );
}
