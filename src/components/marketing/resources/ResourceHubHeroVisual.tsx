"use client";

import { CustomerAbstractGrid } from "@/components/marketing/customers/visuals/CustomerAbstractGrid";

const HUB = { x: 50, y: 50 };
const NODES = [
  { id: "blog", label: "Blog", x: 18, y: 22 },
  { id: "guides", label: "Guides", x: 82, y: 14 },
  { id: "templates", label: "Templates", x: 88, y: 58 },
  { id: "webinars", label: "Webinars", x: 22, y: 72 },
  { id: "docs", label: "Docs", x: 78, y: 82 },
] as const;

/** Central resource hub — nodes connect to VertexBuild Resources document. */
export function ResourceHubHeroVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[420px] justify-self-end overflow-hidden border border-brand-line/80 bg-white lg:max-w-none">
      <CustomerAbstractGrid className="absolute inset-0 h-full w-full" cellSize={24} strength={0.7} heightRatio={1} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {NODES.map((node) => (
          <line
            key={node.id}
            x1={HUB.x}
            y1={HUB.y}
            x2={node.x}
            y2={node.y}
            stroke="rgba(20,110,245,0.28)"
            strokeWidth="0.35"
            strokeDasharray="1.2 1.2"
          />
        ))}
        <rect x={HUB.x - 11} y={HUB.y - 8} width="22" height="16" rx="0.8" fill="white" stroke="rgba(8,35,63,0.18)" strokeWidth="0.35" />
        <path
          d={`M${HUB.x - 7} ${HUB.y - 3}h14M${HUB.x - 7} ${HUB.y + 1}h10M${HUB.x - 7} ${HUB.y + 5}h12`}
          stroke="rgba(8,35,63,0.2)"
          strokeWidth="0.35"
          strokeLinecap="round"
        />
        {NODES.map((node) => (
          <circle key={node.id} cx={node.x} cy={node.y} r="1.8" fill="rgba(255,106,0,0.35)" stroke="rgba(255,106,0,0.7)" strokeWidth="0.35" />
        ))}
      </svg>
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <p
          className="absolute left-1/2 top-1/2 w-[7.5rem] -translate-x-1/2 -translate-y-[calc(50%+0.15rem)] text-center text-[9px] font-semibold uppercase leading-tight tracking-[0.14em] text-brand-navy/75"
          style={{ marginTop: "-0.5rem" }}
        >
          VertexBuild
          <span className="mt-0.5 block text-[8px] font-medium normal-case tracking-normal text-brand-muted">Resources</span>
        </p>
        {NODES.map((node) => (
          <span
            key={node.id}
            className="absolute text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-navy/80"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: "translate(-50%, -50%)",
              marginTop: node.y > 50 ? "1.1rem" : "-1.35rem",
            }}
          >
            {node.label}
          </span>
        ))}
      </div>
    </div>
  );
}
