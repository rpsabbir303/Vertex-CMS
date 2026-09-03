"use client";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ reset }: Props) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#fff", color: "#0b1220" }}>
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Something went wrong.</h2>
          <p style={{ marginTop: "0.75rem", color: "#64748b" }}>The application encountered an unexpected error.</p>
          <button
            type="button"
            onClick={() => reset()}
            style={{ marginTop: "2rem", padding: "0.75rem 1.5rem", cursor: "pointer" }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
