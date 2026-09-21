import {
  ABSTRACT,
  type AbstractTone,
  blockFill,
  blockStroke,
  eyebrowColor,
  labelColor,
  strokeColor,
} from "./tokens";

/** Shared SVG primitives — every abstract composition must use these. */

function resolveStroke(tone: AbstractTone, quiet: boolean, ambient: boolean) {
  if (ambient) {
    return tone === "dark" ? "rgba(147,184,214,0.32)" : ABSTRACT.blue;
  }
  if (quiet) {
    return tone === "dark" ? "rgba(147,184,214,0.28)" : ABSTRACT.line;
  }
  return strokeColor(tone);
}

function strokeOpacity(quiet: boolean, ambient: boolean) {
  if (ambient) return quiet ? 0.18 : 0.28;
  if (quiet) return 0.35;
  return 1;
}

export function AxisLine({
  x1,
  y1,
  x2,
  y2,
  tone = "light",
  quiet = false,
  ambient = false,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  tone?: AbstractTone;
  quiet?: boolean;
  ambient?: boolean;
}) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={resolveStroke(tone, quiet, ambient)}
      strokeWidth={ABSTRACT.stroke}
      opacity={strokeOpacity(quiet, ambient)}
    />
  );
}

export function AxisPath({
  d,
  tone = "light",
  quiet = false,
  ambient = false,
}: {
  d: string;
  tone?: AbstractTone;
  quiet?: boolean;
  ambient?: boolean;
}) {
  return (
    <path
      d={d}
      stroke={resolveStroke(tone, quiet, ambient)}
      strokeWidth={ABSTRACT.stroke}
      fill="none"
      opacity={strokeOpacity(quiet, ambient)}
    />
  );
}

/** Tiny floating micro-label — tertiary ambient layer. */
export function MicroFragment({
  x,
  y,
  label,
  w = 72,
}: {
  x: number;
  y: number;
  label: string;
  w?: number;
}) {
  return (
    <g opacity={0.35}>
      <rect x={x} y={y} width={w} height={14} rx={2} fill={ABSTRACT.white} stroke={ABSTRACT.lineSoft} strokeWidth={1} />
      <text
        x={x + 6}
        y={y + 10}
        fill={ABSTRACT.navySoft}
        fontSize={6}
        fontFamily={ABSTRACT.font}
        fontWeight={600}
        letterSpacing="0.06em"
      >
        {label}
      </text>
    </g>
  );
}

export function Node({
  cx,
  cy,
  active = false,
  tone = "light",
}: {
  cx: number;
  cy: number;
  active?: boolean;
  tone?: AbstractTone;
}) {
  if (active) {
    return <circle cx={cx} cy={cy} r={ABSTRACT.nodeR} fill={ABSTRACT.orange} opacity={0.88} />;
  }
  return (
    <circle
      cx={cx}
      cy={cy}
      r={ABSTRACT.nodeQuietR}
      fill={tone === "dark" ? "rgba(147,184,214,0.75)" : ABSTRACT.blue}
      opacity={0.65}
    />
  );
}

export function UiBlock({
  x,
  y,
  w,
  h,
  label,
  sublabel,
  tone = "light",
  emphasis = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sublabel?: string;
  tone?: AbstractTone;
  emphasis?: boolean;
}) {
  const fill = emphasis
    ? tone === "dark"
      ? "rgba(59,111,154,0.28)"
      : ABSTRACT.navy
    : blockFill(tone);
  const stroke = emphasis && tone === "light" ? ABSTRACT.navy : blockStroke(tone);
  const textFill = emphasis
    ? tone === "dark"
      ? "rgba(230,240,248,0.95)"
      : ABSTRACT.white
    : labelColor(tone);
  const midY = sublabel ? y + h * 0.42 : y + h * 0.62;

  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={ABSTRACT.blockRx} fill={fill} stroke={stroke} strokeWidth={ABSTRACT.stroke} />
      <text
        x={x + w / 2}
        y={midY}
        textAnchor="middle"
        fill={textFill}
        fontSize={sublabel ? ABSTRACT.labelSize : ABSTRACT.blockLabelSize}
        fontFamily={ABSTRACT.font}
        fontWeight={600}
        letterSpacing={sublabel ? ABSTRACT.tracking : "0.02em"}
      >
        {label}
      </text>
      {sublabel ? (
        <text
          x={x + w / 2}
          y={y + h * 0.78}
          textAnchor="middle"
          fill={tone === "dark" ? "rgba(186,210,230,0.8)" : ABSTRACT.navySoft}
          fontSize={ABSTRACT.blockLabelSize}
          fontFamily={ABSTRACT.font}
          fontWeight={600}
        >
          {sublabel}
        </text>
      ) : null}
    </g>
  );
}

export function Eyebrow({
  x,
  y,
  text,
  tone = "light",
  anchor = "start",
}: {
  x: number;
  y: number;
  text: string;
  tone?: AbstractTone;
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fill={eyebrowColor(tone)}
      fontSize={ABSTRACT.labelSize}
      fontFamily={ABSTRACT.font}
      fontWeight={600}
      letterSpacing={ABSTRACT.tracking}
    >
      {text}
    </text>
  );
}

export function ArrowDown({
  x,
  y,
  tone = "light",
}: {
  x: number;
  y: number;
  tone?: AbstractTone;
}) {
  return (
    <path
      d={`M${x - 3.5} ${y - 4} L${x} ${y} L${x + 3.5} ${y - 4}`}
      stroke={strokeColor(tone)}
      strokeWidth={ABSTRACT.stroke}
      fill="none"
    />
  );
}

/** Compact axis continuation marker — used between page sections. */
export function AxisContinuationMark({
  className = "",
  stage,
  tone = "light",
}: {
  className?: string;
  stage: string;
  tone?: AbstractTone;
}) {
  return (
    <div
      className={`pointer-events-none flex justify-center select-none ${className}`}
      data-design-layer="AxisContinuation"
      data-axis-stage={stage}
      aria-hidden="true"
    >
      <svg width={24} height={36} viewBox="0 0 24 36" xmlns="http://www.w3.org/2000/svg" fill="none">
        <AxisLine x1={12} y1={0} x2={12} y2={14} tone={tone} quiet />
        <Node cx={12} cy={18} active tone={tone} />
        <AxisLine x1={12} y1={22} x2={12} y2={36} tone={tone} quiet />
      </svg>
    </div>
  );
}
