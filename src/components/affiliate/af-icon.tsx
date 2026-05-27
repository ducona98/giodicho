export type AfIconName =
  | "search" | "moon" | "sun" | "menu" | "save"
  | "arrow" | "chev" | "filter" | "x" | "plus" | "shield" | "star"
  | "ig" | "yt" | "tt" | "rss";

type Props = {
  name: AfIconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

export function AfIcon({ name, size = 18, strokeWidth = 1.6, className }: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
    className,
  };

  switch (name) {
    case "search":
      return <svg {...common}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>;
    case "moon":
      return <svg {...common}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></svg>;
    case "sun":
      return <svg {...common}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>;
    case "menu":
      return <svg {...common}><path d="M3 6h18M3 12h18M3 18h18" /></svg>;
    case "save":
      return <svg {...common}><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>;
    case "arrow":
      return <svg {...common}><path d="M5 12h14M13 5l7 7-7 7" /></svg>;
    case "chev":
      return <svg {...common}><path d="m9 6 6 6-6 6" /></svg>;
    case "filter":
      return <svg {...common}><path d="M3 4h18l-7 9v6l-4-2v-4z" /></svg>;
    case "x":
      return <svg {...common}><path d="M6 6l12 12M18 6 6 18" /></svg>;
    case "plus":
      return <svg {...common}><path d="M12 5v14M5 12h14" /></svg>;
    case "shield":
      return <svg {...common}><path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6z" /></svg>;
    case "star":
      return <svg {...common} fill="currentColor" stroke="none"><path d="m12 17.3-6.18 3.7 1.64-7.03L2 9.24l7.19-.62L12 2l2.81 6.62 7.19.62-5.46 4.73 1.64 7.03z" /></svg>;
    case "ig":
      return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" /></svg>;
    case "yt":
      return <svg {...common}><rect x="2.5" y="6" width="19" height="12" rx="3" /><path d="m10.5 9.5 5 2.5-5 2.5z" fill="currentColor" stroke="none" /></svg>;
    case "tt":
      return <svg {...common}><path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5h.5" /><path d="M14 3c.5 3 2.5 5 5.5 5" /></svg>;
    case "rss":
      return <svg {...common}><path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16" /><circle cx="5" cy="19" r="1.4" fill="currentColor" stroke="none" /></svg>;
    default:
      return null;
  }
}
