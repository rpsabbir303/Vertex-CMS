/** Graph-paper grid as individual SVG lines (HTML-to-Figma friendly). */
const STEP = 28;
const VIEW_W = 1400;
const VIEW_H = 2400;

type Props = {
  dark?: boolean;
};

export function SecurityPaperGrid({ dark = false }: Props) {
  const stroke = dark ? "rgba(63, 232, 68, 0.08)" : "rgba(62, 110, 62, 0.14)";
  const verticals: number[] = [];
  for (let x = 0; x <= VIEW_W; x += STEP) verticals.push(x);
  const horizontals: number[] = [];
  for (let y = 0; y <= VIEW_H; y += STEP) horizontals.push(y);

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
      preserveAspectRatio="none"
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      data-figma-layer="paper-grid"
    >
      {verticals.map((x) => (
        <line key={`v-${x}`} x1={x} y1={0} x2={x} y2={VIEW_H} stroke={stroke} strokeWidth={1} vectorEffect="non-scaling-stroke" />
      ))}
      {horizontals.map((y) => (
        <line key={`h-${y}`} x1={0} y1={y} x2={VIEW_W} y2={y} stroke={stroke} strokeWidth={1} vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  );
}
