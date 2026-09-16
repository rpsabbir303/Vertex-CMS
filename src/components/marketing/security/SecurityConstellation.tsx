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

export function SecurityConstellation({ pageId }: { pageId: SecurityPageId }) {
  const focus = FOCUS[pageId];

  return (
    <div className="relative h-full min-h-[380px] w-full overflow-hidden sm:min-h-[440px] lg:min-h-full" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 480" fill="none" preserveAspectRatio="xMidYMid slice">
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
      </svg>

      {NODES.map((node) => {
        const active = node.id === focus;
        const size = node.kind === "hub" ? 11 : node.kind === "card" ? 8 : 5;
        return (
          <span
            key={node.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${(node.x / 560) * 100}%`, top: `${(node.y / 480) * 100}%` }}
          >
            <span className="flex items-center gap-2">
              <span
                className={`block rounded-full ${active ? "bg-[#3FE844] security-lime-dot" : "bg-[#2F7A3A]/70"}`}
                style={{ width: size, height: size }}
              />
              <span
                className={`whitespace-nowrap font-semibold tracking-[0.08em] ${
                  node.kind === "hub" || node.kind === "card"
                    ? "rounded-md border border-[#163326]/10 bg-white/80 px-2 py-1 text-[10px] uppercase"
                    : "text-[10px]"
                } ${active ? "text-[#0D0D0D]" : "text-[#163326]/70"}`}
              >
                {node.label}
              </span>
            </span>
          </span>
        );
      })}
    </div>
  );
}
