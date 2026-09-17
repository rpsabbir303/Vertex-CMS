import { WORKFLOW_OUTPUTS } from "@/lib/marketing/integrations/data";

const LAYERS = [
  { id: "external", label: "EXTERNAL SYSTEMS", sub: "Accounting · E-sign · Productivity · Payments" },
  { id: "layer", label: "INTEGRATION LAYER", sub: "API · Webhooks · Approved connections" },
  { id: "vertex", label: "VERTEX CMS", sub: "Shared operating record" },
  { id: "workflows", label: "BUSINESS WORKFLOWS", sub: "Project · Financial · Field · Growth" },
] as const;

/** Exploded blueprint stack — emphasis via CSS hover on .int-arch-layer */
export function IntegrationDataExchangeVisual() {
  const labelStyle = { fontFamily: "var(--font-integrations-sans), sans-serif" } as const;

  return (
    <div
      className="relative w-full"
      role="img"
      aria-label="Layered flow from external systems through integration layer and Vertex CMS to business workflows."
    >
      <svg viewBox="0 0 380 420" className="h-auto w-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <pattern id="int-stack-grid" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(8,35,63,0.04)" strokeWidth="0.5" />
          </pattern>
          <marker id="int-stack-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="rgba(8,35,63,0.25)" />
          </marker>
        </defs>
        <rect width="380" height="420" fill="url(#int-stack-grid)" />

        {LAYERS.map((layer, index) => {
          const y = 28 + index * 88;
          const w = layer.id === "vertex" ? 220 : 300;
          const x = (380 - w) / 2;

          return (
            <g key={layer.id} className="int-arch-layer">
              <rect
                x={x}
                y={y}
                width={w}
                height={58}
                fill="#ffffff"
                stroke="rgba(8,35,63,0.16)"
                strokeWidth="1"
                className="int-layer-box"
              />
              <line x1={x + 8} y1={y + 58} x2={x + w - 8} y2={y + 58} stroke="rgba(8,35,63,0.08)" strokeWidth="1" strokeDasharray="2 4" />
              <text x={190} y={y + 24} textAnchor="middle" className="fill-brand-navy text-[10px] font-semibold tracking-[0.08em]" style={labelStyle}>
                {layer.label}
              </text>
              <text x={190} y={y + 40} textAnchor="middle" className="fill-brand-muted text-[7px]" style={labelStyle}>
                {layer.sub}
              </text>
              {index < LAYERS.length - 1 && (
                <line
                  x1={190}
                  y1={y + 58}
                  x2={190}
                  y2={y + 88}
                  stroke="rgba(8,35,63,0.2)"
                  strokeWidth="1"
                  markerEnd="url(#int-stack-arrow)"
                />
              )}
            </g>
          );
        })}

        <text x="190" y="378" textAnchor="middle" className="fill-brand-muted text-[7px] tracking-[0.12em]" style={labelStyle}>
          PROJECT / FINANCIAL / FIELD / GROWTH
        </text>
        {WORKFLOW_OUTPUTS.map((label, i) => {
          const bx = 58 + i * 66;
          return (
            <g key={label}>
              <rect x={bx} y="386" width="54" height="18" fill="#f7f9fc" stroke="rgba(8,35,63,0.12)" strokeWidth="1" />
              <text x={bx + 27} y="398" textAnchor="middle" className="fill-brand-navy/80 text-[6px] font-medium" style={labelStyle}>
                {label.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
