import type { SecurityPageId } from "@/lib/marketing/security/pages";

type NodeKind = "dot" | "card" | "hub";

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  kind: NodeKind;
};

const NODES: Node[] = [
  { id: "tls", label: "TLS 1.3", x: 78, y: 42, kind: "dot" },
  { id: "aes", label: "AES-256", x: 300, y: 28, kind: "dot" },
  { id: "data", label: "DATA", x: 188, y: 108, kind: "card" },
  { id: "mfa", label: "MFA", x: 430, y: 78, kind: "dot" },
  { id: "access", label: "ACCESS", x: 64, y: 198, kind: "card" },
  { id: "trust", label: "TRUST", x: 268, y: 214, kind: "hub" },
  { id: "rbac", label: "RBAC", x: 456, y: 176, kind: "dot" },
  { id: "govern", label: "GOVERN", x: 392, y: 278, kind: "card" },
  { id: "sso", label: "SSO", x: 148, y: 302, kind: "dot" },
  { id: "ai", label: "AI", x: 292, y: 338, kind: "card" },
  { id: "uptime", label: "99.9%", x: 70, y: 392, kind: "dot" },
  { id: "recover", label: "RECOVER", x: 210, y: 430, kind: "card" },
  { id: "rpo", label: "RPO", x: 392, y: 412, kind: "dot" },
  { id: "rto", label: "RTO", x: 486, y: 348, kind: "dot" },
];

const LINKS: [string, string][] = [
  ["tls", "data"],
  ["aes", "data"],
  ["data", "trust"],
  ["mfa", "access"],
  ["access", "trust"],
  ["rbac", "govern"],
  ["govern", "trust"],
  ["sso", "access"],
  ["ai", "trust"],
  ["ai", "govern"],
  ["uptime", "recover"],
  ["recover", "trust"],
  ["rpo", "recover"],
  ["rto", "govern"],
];

const FOCUS: Record<SecurityPageId, string> = {
  hub: "trust",
  "data-protection": "data",
  "access-security": "access",
  compliance: "govern",
  "ai-governance": "ai",
  reliability: "recover",
  contact: "trust",
};

function nodeById(id: string) {
  return NODES.find((n) => n.id === id)!;
}

function curve(a: Node, b: Node) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.y - a.y;
  const dy = a.x - b.x;
  const len = Math.hypot(dx, dy) || 1;
  const bend = 28;
  const cx = mx + (dx / len) * bend;
  const cy = my + (dy / len) * bend;
  return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;
}

function nodeRadius(kind: NodeKind) {
  if (kind === "hub") return 5.5;
  if (kind === "card") return 4;
  return 2.5;
}

export function SecurityConstellation({ pageId }: { pageId: SecurityPageId }) {
  const focus = FOCUS[pageId];

  return (
    <div
      className="relative h-full min-h-[380px] w-full sm:min-h-[440px] lg:min-h-full"
      data-figma-layer="hero-abstract"
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 560 480"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        data-figma-layer="hero-abstract-svg"
      >
        <g data-figma-layer="abstract-links">
          {LINKS.map(([from, to], i) => {
            const a = nodeById(from);
            const b = nodeById(to);
            const hot = from === focus || to === focus;
            return (
              <path
                key={`${from}-${to}`}
                d={curve(a, b)}
                stroke={hot ? "#3FE844" : "#2F7A3A"}
                strokeOpacity={hot ? 0.85 : 0.28}
                strokeWidth={hot ? 1.4 : 1}
                strokeDasharray={i % 3 === 0 ? "4 6" : undefined}
                className={hot ? "security-line-flow" : undefined}
              />
            );
          })}
        </g>

        <g data-figma-layer="abstract-nodes">
          {NODES.map((node) => {
            const active = node.id === focus;
            const r = nodeRadius(node.kind);
            const labelFill = active ? "#0D0D0D" : "#163326";
            const labelOpacity = active ? 1 : 0.7;
            const dotFill = active ? "#3FE844" : "#2F7A3A";
            const dotOpacity = active ? 1 : 0.7;

            if (node.kind === "card" || node.kind === "hub") {
              const padX = 8;
              const padY = 5;
              const textW = node.label.length * 5.8 + padX * 2;
              const textH = 18;
              const rx = 4;
              const rectX = node.x + r + 4;
              const rectY = node.y - textH / 2;

              return (
                <g key={node.id} data-figma-node={node.id}>
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={r}
                    fill={dotFill}
                    fillOpacity={dotOpacity}
                    className={active ? "security-lime-dot" : undefined}
                  />
                  <rect
                    x={rectX}
                    y={rectY}
                    width={textW}
                    height={textH}
                    rx={rx}
                    fill="rgba(255,255,255,0.8)"
                    stroke="rgba(22,51,38,0.1)"
                    strokeWidth={1}
                  />
                  <text
                    x={rectX + padX}
                    y={node.y + 4}
                    fill={labelFill}
                    fillOpacity={labelOpacity}
                    fontSize={10}
                    fontWeight={600}
                    letterSpacing="0.08em"
                  >
                    {node.label}
                  </text>
                </g>
              );
            }

            return (
              <g key={node.id} data-figma-node={node.id}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={r}
                  fill={dotFill}
                  fillOpacity={dotOpacity}
                  className={active ? "security-lime-dot" : undefined}
                />
                <text
                  x={node.x + r + 6}
                  y={node.y + 3.5}
                  fill={labelFill}
                  fillOpacity={labelOpacity}
                  fontSize={10}
                  fontWeight={600}
                  letterSpacing="0.08em"
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
