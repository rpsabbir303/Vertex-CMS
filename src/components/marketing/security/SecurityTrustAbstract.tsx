import type { SecurityPageId } from "@/lib/marketing/security/pages";

export type TrustNodeId = "TRUST" | "DATA" | "ACCESS" | "GOVERN" | "AI" | "RECOVER";

export const SECURITY_ABSTRACT_FOCUS: Record<SecurityPageId, TrustNodeId> = {
  hub: "TRUST",
  "data-protection": "DATA",
  "access-security": "ACCESS",
  compliance: "GOVERN",
  "ai-governance": "AI",
  reliability: "RECOVER",
  contact: "TRUST",
};

const NAVY = "#0B2948";
const BLUE = "#8DB7F5";
const ORANGE = "#FF6A00";

type NodeSpec = {
  id: TrustNodeId;
  x: string;
  y: string;
  label: string;
  align?: "left" | "right" | "top" | "bottom";
};

const NODES: NodeSpec[] = [
  { id: "GOVERN", x: "70%", y: "12%", label: "GOVERN", align: "right" },
  { id: "DATA", x: "32%", y: "28%", label: "DATA", align: "left" },
  { id: "TRUST", x: "70%", y: "42%", label: "TRUST", align: "bottom" },
  { id: "ACCESS", x: "32%", y: "56%", label: "ACCESS", align: "left" },
  { id: "AI", x: "88%", y: "56%", label: "AI", align: "top" },
  { id: "RECOVER", x: "32%", y: "84%", label: "RECOVER", align: "left" },
];

function stroke(active: boolean, faint = false) {
  if (active) return { color: ORANGE, opacity: 0.45 };
  if (faint) return { color: NAVY, opacity: 0.1 };
  return { color: NAVY, opacity: 0.18 };
}

/** Architectural line system filling the hero cell and meeting its borders. */
export function SecurityTrustAbstract({ pageId }: { pageId: SecurityPageId; className?: string }) {
  const focus = SECURITY_ABSTRACT_FOCUS[pageId];
  const on = (id: TrustNodeId) => focus === id;
  const data = stroke(on("DATA"));
  const access = stroke(on("ACCESS"));
  const trust = stroke(on("TRUST"));
  const govern = stroke(on("GOVERN"));
  const recover = stroke(on("RECOVER"));
  const ai = stroke(on("AI"), true);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
        {/* Spine from top edge → bottom edge */}
        <line x1="32" y1="0" x2="32" y2="100" stroke={data.color} strokeOpacity={data.opacity} strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="70" y1="0" x2="70" y2="100" stroke={trust.color} strokeOpacity={on("TRUST") || on("GOVERN") ? trust.opacity : 0.12} strokeWidth="1" vectorEffect="non-scaling-stroke" />

        {/* Horizontals that enter from the left divider and/or exit the right frame */}
        <line x1="0" y1="28" x2="70" y2="28" stroke={data.color} strokeOpacity={data.opacity} strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="32" y1="42" x2="100" y2="42" stroke={trust.color} strokeOpacity={trust.opacity} strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="0" y1="56" x2="88" y2="56" stroke={access.color} strokeOpacity={access.opacity} strokeWidth="1" strokeDasharray="2 3" vectorEffect="non-scaling-stroke" />
        <line x1="32" y1="84" x2="100" y2="84" stroke={recover.color} strokeOpacity={recover.opacity} strokeWidth="1" vectorEffect="non-scaling-stroke" />

        {/* GOVERN drop from top edge into TRUST */}
        <line x1="70" y1="0" x2="70" y2="42" stroke={govern.color} strokeOpacity={govern.opacity} strokeWidth="1" vectorEffect="non-scaling-stroke" />

        {/* ACCESS → TRUST elbow */}
        <path d="M 32 56 H 70" stroke={access.color} strokeOpacity={access.opacity} strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <path d="M 70 56 V 42" stroke={on("ACCESS") || on("TRUST") ? ORANGE : BLUE} strokeOpacity={on("ACCESS") || on("TRUST") ? 0.4 : 0.28} strokeWidth="1" vectorEffect="non-scaling-stroke" />

        {/* Partial TRUST frame — open on the left so it joins the incoming paths */}
        <path d="M 54 26 H 90 V 58 H 70" stroke={trust.color} strokeOpacity={on("TRUST") ? 0.4 : 0.16} strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <path d="M 54 26 V 42" stroke={trust.color} strokeOpacity={on("TRUST") ? 0.4 : 0.16} strokeWidth="1" vectorEffect="non-scaling-stroke" />

        {/* RECOVER partial frame on the spine */}
        <path d="M 18 74 H 46 V 94" stroke={recover.color} strokeOpacity={on("RECOVER") ? 0.4 : 0.14} strokeWidth="1" vectorEffect="non-scaling-stroke" />

        {/* DATA partial frame */}
        <path d="M 18 16 H 46 V 28" stroke={data.color} strokeOpacity={on("DATA") ? 0.4 : 0.14} strokeWidth="1" vectorEffect="non-scaling-stroke" />

        {/* Subtle arc around TRUST */}
        <circle cx="70" cy="42" r="11" stroke={BLUE} strokeOpacity={on("TRUST") ? 0.35 : 0.16} strokeWidth="1" vectorEffect="non-scaling-stroke" />

        {/* AI tick from the ACCESS run */}
        <line x1="88" y1="56" x2="88" y2="72" stroke={ai.color} strokeOpacity={on("AI") ? 0.45 : 0.12} strokeWidth="1" strokeDasharray="2 3" vectorEffect="non-scaling-stroke" />
      </svg>

      {NODES.map((node) => {
        const active = node.id === focus;
        return (
          <span key={node.id} className="absolute" style={{ left: node.x, top: node.y }}>
            <span
              className={`absolute left-0 top-0 block h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 ${
                active ? "bg-brand-orange" : "bg-[#8DB7F5]"
              }`}
            />
            <span
              className={`absolute whitespace-nowrap font-mono text-[8px] font-semibold tracking-[0.16em] ${
                active ? "text-brand-orange/85" : "text-[#0B2948]/38"
              } ${
                node.align === "left"
                  ? "right-[8px] top-1/2 -translate-y-1/2"
                  : node.align === "right"
                    ? "left-[8px] top-1/2 -translate-y-1/2"
                    : node.align === "bottom"
                      ? "left-1/2 top-[8px] -translate-x-1/2"
                      : "bottom-[8px] left-1/2 -translate-x-1/2"
              }`}
            >
              {node.label}
            </span>
          </span>
        );
      })}

      <span className="absolute left-0 top-[28%] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 bg-[#8DB7F5]/70" />
      <span className="absolute left-0 top-[56%] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 bg-[#8DB7F5]/70" />
      <span className="absolute right-0 top-[42%] h-1.5 w-1.5 translate-x-1/2 -translate-y-1/2 bg-[#8DB7F5]/70" />
      <span className="absolute right-0 top-[84%] h-1.5 w-1.5 translate-x-1/2 -translate-y-1/2 bg-[#8DB7F5]/70" />
    </div>
  );
}
