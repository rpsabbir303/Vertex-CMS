import type { SecurityPageId } from "@/lib/marketing/security/pages";
import { SECURITY_VISUAL_EMPHASIS } from "@/lib/marketing/security/pages";

const NAVY = "#08233F";
const BLUE = "#146EF5";
const ORANGE = "#FF6A00";

type Emphasis = { label: string; cx: number; cy: number };

type Props = {
  /** Hero panel vs page-wide ambient layers */
  density: "hero" | "hero-wide" | "ambient";
  pageId?: SecurityPageId;
  className?: string;
};

/** Shared trust-core geometry — hero coordinates (560×400). */
const TRUST_CORE = { cx: 318, cy: 198 };

const LAYERS = {
  outer: { x: 168, y: 36, w: 368, h: 328, rx: 2 },
  control: { x: 212, y: 72, w: 280, h: 256, rx: 1 },
  verify: { x: 262, y: 118, w: 180, h: 160, rx: 1 },
  core: { x: 296, y: 162, w: 92, h: 76, rx: 1 },
};

const ROUTES = [
  { id: "data-in", d: "M 8 132 H 92 V 176 H 262", dash: false },
  { id: "access-in", d: "M 552 168 H 468 V 176 H 388", dash: false },
  { id: "verify-up", d: "M 318 162 V 118", dash: true },
  { id: "resilience-out", d: "M 318 238 V 308 C 318 340, 400 352, 448 368", dash: true },
] as const;

const CHECKPOINTS = [
  { id: "entry-a", x: 92, y: 132, shape: "square" as const },
  { id: "gate-data", x: 92, y: 176, shape: "circle" as const },
  { id: "entry-b", x: 468, y: 168, shape: "square" as const },
  { id: "verify-n", x: 318, y: 118, shape: "circle" as const },
  { id: "module-a", x: 428, y: 68, shape: "square" as const },
  { id: "module-b", x: 228, y: 312, shape: "square" as const },
];

function nearestCheckpoint(emphasis: Emphasis) {
  let best = CHECKPOINTS[0];
  let bestDist = Infinity;
  for (const cp of CHECKPOINTS) {
    const d = (cp.x - emphasis.cx) ** 2 + (cp.y - emphasis.cy) ** 2;
    if (d < bestDist) {
      bestDist = d;
      best = cp;
    }
  }
  return best;
}

function SubtleGrid({ opacity }: { opacity: number }) {
  const lines = [
    { x1: 136, y1: 16, x2: 136, y2: 384 },
    { x1: 280, y1: 16, x2: 280, y2: 384 },
    { x1: 424, y1: 16, x2: 424, y2: 384 },
    { x1: 24, y1: 96, x2: 536, y2: 96 },
    { x1: 24, y1: 248, x2: 536, y2: 248 },
  ];
  return (
    <g opacity={opacity}>
      {lines.map((l, i) => (
        <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke={NAVY} strokeWidth="1" />
      ))}
    </g>
  );
}

function LayerFrames({ strokeScale }: { strokeScale: number }) {
  const { outer, control, verify, core } = LAYERS;
  return (
    <g fill="none">
      <rect
        x={outer.x}
        y={outer.y}
        width={outer.w}
        height={outer.h}
        rx={outer.rx}
        stroke={NAVY}
        strokeOpacity={0.1 * strokeScale}
        strokeWidth="1"
      />
      <rect
        x={control.x}
        y={control.y}
        width={control.w}
        height={control.h}
        rx={control.rx}
        stroke={BLUE}
        strokeOpacity={0.16 * strokeScale}
        strokeWidth="1"
      />
      <rect
        x={verify.x}
        y={verify.y}
        width={verify.w}
        height={verify.h}
        rx={verify.rx}
        stroke={NAVY}
        strokeOpacity={0.14 * strokeScale}
        strokeWidth="1"
        strokeDasharray="4 7"
      />
      <rect
        x={core.x}
        y={core.y}
        width={core.w}
        height={core.h}
        rx={core.rx}
        fill={NAVY}
        fillOpacity={0.025}
        stroke={BLUE}
        strokeOpacity={0.22 * strokeScale}
        strokeWidth="1"
      />
    </g>
  );
}

function SystemRoutes({ animated, fade }: { animated: boolean; fade: number }) {
  return (
    <g opacity={fade}>
      {ROUTES.map((route) => (
        <path
          key={route.id}
          d={route.d}
          stroke={route.dash ? NAVY : BLUE}
          strokeOpacity={route.dash ? 0.11 : 0.2}
          strokeWidth="1"
          fill="none"
          strokeDasharray={route.dash ? "3 8" : undefined}
          className={animated && !route.dash ? "security-line-flow" : animated && route.dash ? "security-line-flow-slow" : undefined}
        />
      ))}
    </g>
  );
}

function Checkpoints({
  emphasis,
  highlightId,
  showLabels,
}: {
  emphasis: Emphasis;
  highlightId: string;
  showLabels: boolean;
}) {
  return (
    <g>
      {CHECKPOINTS.map((cp) => {
        const active = cp.id === highlightId;
        const size = active ? 4 : 2.5;
        if (cp.shape === "square") {
          return (
            <rect
              key={cp.id}
              x={cp.x - size}
              y={cp.y - size}
              width={size * 2}
              height={size * 2}
              fill={active ? ORANGE : NAVY}
              fillOpacity={active ? 0.55 : 0.14}
              className={active ? "security-node-pulse" : undefined}
            />
          );
        }
        return (
          <g key={cp.id}>
            {active ? (
              <circle cx={cp.x} cy={cp.y} r="10" stroke={BLUE} strokeOpacity="0.2" strokeWidth="1" fill="none" />
            ) : null}
            <circle
              cx={cp.x}
              cy={cp.y}
              r={size}
              fill={active ? ORANGE : NAVY}
              fillOpacity={active ? 0.5 : 0.12}
              className={active ? "security-node-pulse" : undefined}
            />
          </g>
        );
      })}

      <circle cx={TRUST_CORE.cx} cy={TRUST_CORE.cy} r="22" stroke={BLUE} strokeOpacity="0.18" strokeWidth="1" fill="none" />
      <circle cx={TRUST_CORE.cx} cy={TRUST_CORE.cy} r="34" stroke={NAVY} strokeOpacity="0.07" strokeWidth="1" fill="none" />
      <circle
        cx={TRUST_CORE.cx}
        cy={TRUST_CORE.cy}
        r="5"
        fill={ORANGE}
        fillOpacity="0.62"
        className="security-node-pulse"
      />

      {showLabels ? (
        <text
          x={emphasis.cx + 42}
          y={emphasis.cy + 4}
          fill={NAVY}
          fillOpacity="0.32"
          fontSize="9"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
          letterSpacing="1.5"
        >
          {emphasis.label}
        </text>
      ) : null}
    </g>
  );
}

function HeroInfrastructure({ pageId, wide }: { pageId: SecurityPageId; wide?: boolean }) {
  const emphasis = SECURITY_VISUAL_EMPHASIS[pageId];
  const highlight = nearestCheckpoint(emphasis);

  if (wide) {
    return (
      <svg viewBox="0 0 1280 400" className="h-full w-full" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g transform="translate(420, 8) scale(1.08)">
          <SubtleGrid opacity={0.035} />
          <LayerFrames strokeScale={1} />
          <SystemRoutes animated fade={1} />
          <rect x="404" y="44" width="76" height="44" rx="1" stroke={NAVY} strokeOpacity="0.09" strokeWidth="1" />
          <rect x="188" y="296" width="68" height="40" rx="1" stroke={NAVY} strokeOpacity="0.08" strokeWidth="1" />
          <Checkpoints emphasis={emphasis} highlightId={highlight.id} showLabels />
        </g>
        <path d="M -40 320 H 200" stroke={NAVY} strokeOpacity="0.06" strokeWidth="1" />
        <path d="M 1320 120 H 980" stroke={BLUE} strokeOpacity="0.1" strokeWidth="1" strokeDasharray="5 10" className="security-line-flow-slow" />
        <rect x="1080" y="48" width="120" height="72" rx="1" stroke={NAVY} strokeOpacity="0.06" strokeWidth="1" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 560 400" className="h-auto w-full max-w-none" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <SubtleGrid opacity={0.025} />
      <LayerFrames strokeScale={1} />
      <SystemRoutes animated fade={1} />
      <rect x="404" y="44" width="76" height="44" rx="1" stroke={NAVY} strokeOpacity="0.09" strokeWidth="1" />
      <rect x="188" y="296" width="68" height="40" rx="1" stroke={NAVY} strokeOpacity="0.08" strokeWidth="1" />
      <Checkpoints emphasis={emphasis} highlightId={highlight.id} showLabels />
    </svg>
  );
}

function AmbientInfrastructure({ pageId }: { pageId: SecurityPageId }) {
  const emphasis = SECURITY_VISUAL_EMPHASIS[pageId];
  const highlight = nearestCheckpoint(emphasis);

  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg
          viewBox="0 0 1280 900"
          className="absolute -right-[12%] top-0 h-[min(72vh,820px)] w-[min(118%,920px)] max-w-none opacity-[0.72] sm:-right-[8%] sm:opacity-80 lg:-right-[4%] lg:h-[780px] lg:w-[980px] lg:opacity-90"
          preserveAspectRatio="xMaxYMin meet"
          fill="none"
        >
          <g transform="translate(520, 40) scale(1.05)">
            <SubtleGrid opacity={0.028} />
            <LayerFrames strokeScale={0.85} />
            <SystemRoutes animated={false} fade={0.75} />
            <Checkpoints emphasis={emphasis} highlightId={highlight.id} showLabels={false} />
          </g>
        </svg>
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1280 1200" className="absolute inset-0 h-full w-full" preserveAspectRatio="none" fill="none">
          <g opacity="0.35">
            <line x1="1280" y1="420" x2="920" y2="420" stroke={NAVY} strokeOpacity="0.06" strokeWidth="1" />
            <line x1="1280" y1="680" x2="980" y2="680" stroke={NAVY} strokeOpacity="0.05" strokeWidth="1" />
            <path d="M 1280 880 H 1080 V 960 H 880" stroke={BLUE} strokeOpacity="0.08" strokeWidth="1" strokeDasharray="4 9" />
            <rect x="1180" y="820" width="56" height="36" rx="1" stroke={NAVY} strokeOpacity="0.07" strokeWidth="1" />
          </g>
          <g opacity="0.28">
            <line x1="0" y1="520" x2="220" y2="520" stroke={NAVY} strokeOpacity="0.05" strokeWidth="1" />
            <path d="M 0 760 L 120 760 L 120 840 L 240 840" stroke={NAVY} strokeOpacity="0.06" strokeWidth="1" strokeDasharray="3 8" />
            <circle cx="120" cy="760" r="2.5" fill={NAVY} fillOpacity="0.12" />
          </g>
        </svg>
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[min(100%,640px)] bg-gradient-to-r from-[#f5f8fc] via-[#f5f8fc]/92 to-transparent sm:w-[58%] lg:w-[52%]"
        aria-hidden="true"
      />
    </>
  );
}

/** Master Security & Trust abstract infrastructure — hero + ambient instances. */
export function SecurityTrustInfrastructure({ density, pageId = "hub", className }: Props) {
  if (density === "hero" || density === "hero-wide") {
    const wide = density === "hero-wide";
    return (
      <div className={className ?? (wide ? "relative h-full w-full" : "relative min-h-[220px] w-full sm:min-h-[260px] lg:min-h-[320px]")}>
        <HeroInfrastructure pageId={pageId} wide={wide} />
      </div>
    );
  }

  return (
    <div className={className ?? "pointer-events-none absolute inset-0 z-0 overflow-hidden"}>
      <AmbientInfrastructure pageId={pageId} />
    </div>
  );
}
