import type { CSSProperties } from "react";

/** Static architectural hub — cross layout; hover via CSS (.int-arch-node). */
export function IntegrationHeroNetworkVisual({ className = "" }: { className?: string }) {
  const labelStyle: CSSProperties = { fontFamily: "var(--font-integrations-sans), sans-serif" };

  return (
    <div className={"relative " + className} role="img" aria-label="Vertex CMS connected to accounting, e-sign, API, webhooks, and payments.">
      <svg viewBox="0 0 440 400" className="h-auto w-full max-w-[440px]" preserveAspectRatio="xMidYMid meet">
        <defs>
          <pattern id="int-hero-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(8,35,63,0.05)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="440" height="400" fill="url(#int-hero-grid)" />
        {/* Corner brackets */}
        <path d="M 32 48 L 32 32 L 48 32" fill="none" stroke="rgba(8,35,63,0.12)" strokeWidth="1" />
        <path d="M 408 48 L 408 32 L 392 32" fill="none" stroke="rgba(8,35,63,0.12)" strokeWidth="1" />
        <path d="M 32 352 L 32 368 L 48 368" fill="none" stroke="rgba(8,35,63,0.12)" strokeWidth="1" />
        <path d="M 408 352 L 408 368 L 392 368" fill="none" stroke="rgba(8,35,63,0.12)" strokeWidth="1" />

        <g stroke="rgba(8,35,63,0.14)" strokeWidth="1">
          <line x1="220" y1="72" x2="220" y2="128" />
          <line x1="220" y1="272" x2="220" y2="328" />
          <line x1="72" y1="200" x2="148" y2="200" />
          <line x1="292" y1="200" x2="368" y2="200" />
          <line x1="220" y1="328" x2="220" y2="348" strokeDasharray="3 5" />
        </g>

        {/* Center */}
        <rect x="168" y="168" width="104" height="64" fill="#ffffff" stroke="rgba(8,35,63,0.22)" strokeWidth="1.25" />
        <circle cx="220" cy="200" r="4" fill="#ff6a00" className="int-arch-pulse" opacity="0.5" />
        <text x="220" y="194" textAnchor="middle" className="fill-brand-navy text-[11px] font-bold" style={labelStyle}>
          VERTEX CMS
        </text>
        <text x="220" y="210" textAnchor="middle" className="fill-brand-muted text-[7px] font-medium tracking-[0.14em]" style={labelStyle}>
          SYSTEM CORE
        </text>

        <Node x={220} y={56} label="ACCOUNTING" labelStyle={labelStyle} />
        <Node x={56} y={200} label="E-SIGN" labelStyle={labelStyle} wide />
        <Node x={384} y={200} label="API" labelStyle={labelStyle} />
        <Node x={220} y={300} label="WEBHOOKS" labelStyle={labelStyle} wide />
        <Node x={220} y={364} label="PAYMENTS" labelStyle={labelStyle} wide />

        <text x="380" y="388" className="fill-brand-muted text-[6px]" style={labelStyle}>
          FIG. 01 — ECOSYSTEM
        </text>
      </svg>
    </div>
  );
}

function Node({
  x,
  y,
  label,
  labelStyle,
  wide,
}: {
  x: number;
  y: number;
  label: string;
  labelStyle: CSSProperties;
  wide?: boolean;
}) {
  const w = wide ? 72 : 88;
  const h = 36;
  return (
    <g className="int-arch-node" tabIndex={-1}>
      <rect
        x={x - w / 2}
        y={y - h / 2}
        width={w}
        height={h}
        rx="2"
        fill="#ffffff"
        stroke="rgba(8,35,63,0.18)"
        strokeWidth="1"
        className="int-node-ring"
      />
      <text x={x} y={y + 3} textAnchor="middle" className="fill-brand-navy text-[7px] font-semibold tracking-[0.06em]" style={labelStyle}>
        {label}
      </text>
    </g>
  );
}
