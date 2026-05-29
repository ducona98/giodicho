import Link from "next/link";

export default function LocaleNotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        textAlign: "center",
        padding: "48px 24px",
      }}
    >
      <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", marginBottom: 8 }}>
        Page Not Found — Không tìm thấy trang
      </h1>
      <p style={{ color: "var(--text-3)", maxWidth: 480, marginBottom: 24 }}>
        The page you are looking for does not exist.
      </p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        <Link
          href="/vi"
          style={{
            display: "inline-block",
            padding: "10px 24px",
            background: "var(--primary)",
            color: "#fff",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          Trang chủ tiếng Việt
        </Link>
        <Link
          href="/en"
          style={{
            display: "inline-block",
            padding: "10px 24px",
            background: "var(--primary)",
            color: "#fff",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          English Homepage
        </Link>
      </div>
    </div>
  );
}
