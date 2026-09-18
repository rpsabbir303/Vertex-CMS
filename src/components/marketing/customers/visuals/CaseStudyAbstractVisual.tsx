import type { ReactNode } from "react";

type Props = {
  variant?: number;
  className?: string;
};

const VIEW_W = 320;
const VIEW_H = 200;
const CELL = 16;
const GRID_STROKE = "#E6ECF3";

function caseStudyGridLines() {
  const lines: ReactNode[] = [];
  let key = 0;
  for (let x = CELL; x <= VIEW_W; x += CELL) {
    lines.push(
      <line key={`v-${key++}`} x1={x} y1={0} x2={x} y2={VIEW_H} stroke={GRID_STROKE} strokeWidth={0.5} />,
    );
  }
  for (let y = CELL; y <= VIEW_H; y += CELL) {
    lines.push(
      <line key={`h-${key++}`} x1={0} y1={y} x2={VIEW_W} y2={y} stroke={GRID_STROKE} strokeWidth={0.5} />,
    );
  }
  return lines;
}

/** Abstract story visual — not customer photography. */
export function CaseStudyAbstractVisual({ variant = 0, className = "" }: Props) {
  const palette = ["#146EF5", "#08233F", "#FF6A00", "#5B6B7C"];
  const accent = palette[variant % palette.length];

  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-brand-line bg-[#FAFBFD] ${className}`}
      aria-hidden="true"
      data-design-layer="CaseStudyAbstractVisual"
    >
      <svg
        className="h-full w-full min-h-[180px]"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {caseStudyGridLines()}
        <rect x="24" y="32" width="120" height="80" fill="none" stroke={accent} strokeWidth="1.5" strokeOpacity="0.5" />
        <rect x="160" y="48" width="136" height="56" fill="none" stroke="#B7C8D8" strokeWidth="1" />
        <line x1="24" y1="140" x2="296" y2="140" stroke="#DCE5EE" strokeWidth="1" />
        <circle cx="80" cy="140" r="4" fill={accent} fillOpacity="0.7" />
        <circle cx="160" cy="140" r="3" fill="#08233F" fillOpacity="0.35" />
        <circle cx="240" cy="140" r="3" fill="#146EF5" fillOpacity="0.45" />
        <path d="M80 140 L160 100 L240 140" stroke="#B7C8D8" fill="none" strokeDasharray="3 4" />
      </svg>
    </div>
  );
}
