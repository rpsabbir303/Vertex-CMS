import { WORKFLOW_OUTPUTS } from "@/lib/marketing/integrations/data";
import { svgGridLines } from "@/components/marketing/shared/svgGridLines";

const LAYERS = [
  { id: "external", label: "EXTERNAL SYSTEMS", sub: "Accounting · E-sign · Productivity · Payments" },
  { id: "layer", label: "INTEGRATION LAYER", sub: "API · Webhooks · Approved connections" },
  { id: "vertex", label: "VertexBuild", sub: "Shared operating record" },
  { id: "workflows", label: "BUSINESS WORKFLOWS", sub: "Project · Financial · Field · Growth" },
] as const;

/** Exploded blueprint stack — emphasis via CSS hover on .int-arch-layer */
export function IntegrationDataExchangeVisual() {
  const labelStyle = { fontFamily: "var(--font-sans)" } as const;

  return (
    <div
      className="relative w-full"
      role="img"
      aria-label="Layered flow from external systems through integration layer and VertexBuild to business workflows."
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 380 420"
        className="h-auto w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <rect width="380" height="420" fill="#ffffff" />
        <g aria-hidden="true">{svgGridLines({ width: 380, height: 420, step: 16, stroke: "rgba(8,35,63,0.04)" })}</g>

        {LAYERS.map((layer, index) => {
          const y = 28 + index * 88;
          const w = layer.id === "vertex" ? 220 : 300;
          const x = (380 - w) / 2;
          const connectorBottom = y + 88;

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
              {index < LAYERS.length - 1 ? (
                <g stroke="rgba(8,35,63,0.2)" strokeWidth="1" fill="none">
                  <line x1={190} y1={y + 58} x2={190} y2={connectorBottom - 4} />
                  <path d={`M186 ${connectorBottom - 8} L190 ${connectorBottom - 2} L194 ${connectorBottom - 8}`} />
                </g>
              ) : null}
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
