"use client";

import { WorldMapSilhouette } from "./WorldMapSilhouette";

/** Decorative connection nodes — conceptual only, not customer/office locations. */
const NODES = [
  { id: "na", cx: 198, cy: 192, accent: false },
  { id: "sa", cx: 282, cy: 398, accent: false },
  { id: "eu", cx: 492, cy: 172, accent: true },
  { id: "as", cx: 718, cy: 208, accent: false },
  { id: "au", cx: 828, cy: 432, accent: false },
] as const;

/** Sparse connection arcs suggesting connected cloud work — not a data network. */
const CONNECTIONS: [number, number][] = [
  [0, 2],
  [2, 3],
  [3, 4],
  [0, 1],
];

function arcPath(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = Math.min(y1, y2) - Math.abs(x2 - x1) * 0.12 - 18;
  return `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;
}

type Props = {
  label: string;
};

export function ContactGlobalReachMap({ label }: Props) {
  return (
    <div className="relative w-full overflow-hidden">
      <svg
        viewBox="0 0 950 620"
        className="h-auto w-full min-h-[200px] sm:min-h-[280px] lg:min-h-[380px]"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={label}
      >
        <defs>
          <pattern id="contact-map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#08233F"
              strokeOpacity="0.045"
              strokeWidth="0.75"
            />
          </pattern>
        </defs>

        <rect width="950" height="620" fill="#FFFFFF" />
        <rect width="950" height="620" fill="url(#contact-map-grid)" />

        <WorldMapSilhouette />

        {/* Subtle connection arcs */}
        <g fill="none" stroke="#146EF5" strokeOpacity="0.16" strokeWidth="0.85" strokeLinecap="round">
          {CONNECTIONS.map(([from, to]) => {
            const a = NODES[from];
            const b = NODES[to];
            return <path key={`${a.id}-${b.id}`} d={arcPath(a.cx, a.cy, b.cx, b.cy)} />;
          })}
        </g>

        {/* Connection nodes */}
        {NODES.map((node, i) => (
          <g key={node.id}>
            <circle
              cx={node.cx}
              cy={node.cy}
              r="3"
              fill={node.accent ? "#FF6A00" : "#146EF5"}
              fillOpacity={node.accent ? 0.85 : 0.55}
              className="motion-safe:animate-contact-map-pulse motion-reduce:animate-none"
              style={{ animationDelay: `${i * 0.7}s` }}
            />
            <circle
              cx={node.cx}
              cy={node.cy}
              r="6"
              fill="none"
              stroke={node.accent ? "#FF6A00" : "#146EF5"}
              strokeOpacity="0.2"
              strokeWidth="0.75"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
