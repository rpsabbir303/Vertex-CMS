type Tone = "light" | "navy";

type Props = {
  tone?: Tone;
  showDots?: boolean;
  showPaths?: boolean;
  className?: string;
};

const W = 1440;
const H = 3600;
const STEP = 72;

function columnStroke(x: number, navy: boolean) {
  const t = x / W;
  const fromEdge = Math.min(t, 1 - t);
  let alpha = 0.018;
  if (fromEdge < 0.05) alpha = 0.055;
  else if (fromEdge < 0.16) alpha = 0.022;
  if (navy) alpha *= 1.45;
  return navy ? `rgba(255,255,255,${alpha})` : `rgba(8,35,63,${alpha})`;
}

/** Figma-safe decorative field: real SVG lines, dots, and paths. No CSS backgrounds or masks. */
export function CareersSvgField({ tone = "light", showDots = true, showPaths = true, className }: Props) {
  const navy = tone === "navy";
  const stroke = navy ? "#FFFFFF" : "#08233F";
  const accent = navy ? "rgba(255,255,255,0.14)" : "rgba(20,110,245,0.1)";
  const hStroke = navy ? "rgba(255,255,255,0.03)" : "rgba(8,35,63,0.021)";
  const colCount = Math.floor(W / STEP);
  const rowCount = Math.floor(H / STEP);

  const verticals = Array.from({ length: colCount + 1 }, (_, i) => i);
  const horizontals = Array.from({ length: rowCount + 1 }, (_, i) => i);

  const dots: { cx: number; cy: number }[] = [];
  if (showDots) {
    for (let i = 0; i < 8; i += 1) {
      for (let j = 0; j < 5; j += 1) {
        dots.push({ cx: 1148 + i * 34, cy: 28 + j * 30 });
      }
    }
  }

  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className ?? ""}`}
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      height="100%"
      fill="none"
      preserveAspectRatio="xMinYMin slice"
      aria-hidden="true"
    >
      {verticals.map((i) => (
        <line
          key={`v-${i}`}
          x1={i * STEP}
          y1="0"
          x2={i * STEP}
          y2={H}
          stroke={columnStroke(i * STEP, navy)}
          strokeWidth="1"
        />
      ))}
      {horizontals.map((i) => (
        <line
          key={`h-${i}`}
          x1="0"
          y1={i * STEP}
          x2={W}
          y2={i * STEP}
          stroke={hStroke}
          strokeWidth="1"
        />
      ))}

      {dots.map((dot, i) => (
        <circle key={`d-${i}`} cx={dot.cx} cy={dot.cy} r="1.15" fill={stroke} fillOpacity={navy ? 0.16 : 0.11} />
      ))}

      {showPaths ? (
        <>
          <path
            d="M -40 90 C 80 40, 140 160, 220 110"
            stroke={accent}
            strokeWidth="1"
            strokeDasharray="5 14"
          />
          <circle cx="220" cy="110" r="2.5" fill="#FF6A00" fillOpacity="0.35" />
          <path
            d="M 1480 70 C 1340 20, 1280 140, 1220 90"
            stroke={accent}
            strokeWidth="1"
            strokeDasharray="5 14"
          />
          <circle cx="1220" cy="90" r="2.5" fill={navy ? "#FFFFFF" : "#146EF5"} fillOpacity="0.28" />
          <path
            d="M 40 980 C 180 940, 260 1080, 400 1020"
            stroke={accent}
            strokeWidth="1"
            strokeDasharray="5 14"
          />
          <circle cx="400" cy="1020" r="2.2" fill="#FF6A00" fillOpacity="0.28" />
          <path
            d="M 1320 1680 C 1180 1620, 1080 1760, 980 1700"
            stroke={accent}
            strokeWidth="1"
            strokeDasharray="5 14"
          />
          <circle cx="980" cy="1700" r="2.2" fill={navy ? "#FFFFFF" : "#146EF5"} fillOpacity="0.22" />
        </>
      ) : null}
    </svg>
  );
}
