"use client";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ reset }: Props) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: '"DM Sans"', background: "#fff", color: "#0b1220" }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontFamily: '"DM Serif Display"', fontSize: "1.5rem", fontWeight: 400 }}>
            Something went wrong.
          </h2>
          <p style={{ marginTop: "0.75rem", color: "#64748b", fontFamily: '"DM Sans"' }}>
            The application encountered an unexpected error.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{ marginTop: "2rem", padding: "0.75rem 1.5rem", cursor: "pointer", fontFamily: '"DM Sans"' }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
