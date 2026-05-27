export type IconName =
  | "search" | "cart" | "sun" | "moon" | "menu" | "close"
  | "arrow" | "arrow-ne" | "heart" | "eye" | "plus" | "minus"
  | "check" | "shield" | "box" | "truck" | "users" | "star"
  | "ig" | "tw" | "fb" | "tk";

type Props = {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

export function Icon({ name, size = 18, strokeWidth = 1.6, className }: Props) {
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
    className,
  };

  switch (name) {
    case "search":
      return <svg {...common}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>;
    case "cart":
      return <svg {...common}><path d="M3 4h2l2.4 11.4a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.5L21.5 8H6" /><circle cx="9" cy="20" r="1.4" /><circle cx="18" cy="20" r="1.4" /></svg>;
    case "sun":
      return <svg {...common}><circle cx="12" cy="12" r="4" /><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" /></svg>;
    case "moon":
      return <svg {...common}><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" /></svg>;
    case "menu":
      return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
    case "close":
      return <svg {...common}><path d="M6 6 18 18M6 18 18 6" /></svg>;
    case "arrow":
      return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
    case "arrow-ne":
      return <svg {...common}><path d="M7 17 17 7M9 7h8v8" /></svg>;
    case "heart":
      return <svg {...common}><path d="M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10z" /></svg>;
    case "eye":
      return <svg {...common}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></svg>;
    case "plus":
      return <svg {...common}><path d="M12 5v14M5 12h14" /></svg>;
    case "minus":
      return <svg {...common}><path d="M5 12h14" /></svg>;
    case "check":
      return <svg {...common}><path d="m5 12 5 5L20 7" /></svg>;
    case "shield":
      return <svg {...common}><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3z" /><path d="m9 12 2 2 4-4" /></svg>;
    case "box":
      return <svg {...common}><path d="M21 8 12 3 3 8v8l9 5 9-5V8z" /><path d="M3 8l9 5 9-5M12 13v8" /></svg>;
    case "truck":
      return <svg {...common}><path d="M3 7h11v10H3z" /><path d="M14 10h4l3 3v4h-7" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></svg>;
    case "users":
      return <svg {...common}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><circle cx="17" cy="9" r="2.5" /><path d="M21.5 18a4.5 4.5 0 0 0-4-4.5" /></svg>;
    case "star":
      return <svg {...common} fill="currentColor" stroke="none"><path d="m12 2 3 7 7.5.5-5.7 4.9 1.8 7.3L12 17.8 5.4 21.7l1.8-7.3L1.5 9.5 9 9z" /></svg>;
    case "ig":
      return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" /></svg>;
    case "tw":
      return <svg {...common}><path d="M4 4l7.5 9.5L4.5 20h2.5l5.5-5.5L17 20h3l-7.5-10L19.5 4H17l-5 5.5L7 4z" fill="currentColor" stroke="none" /></svg>;
    case "fb":
      return <svg {...common}><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v9h4v-9h3l1-4h-4V8z" /></svg>;
    case "tk":
      return <svg {...common}><path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5h.5" /><path d="M14 3c.5 3 2.5 5 5.5 5" /></svg>;
    default:
      return null;
  }
}
