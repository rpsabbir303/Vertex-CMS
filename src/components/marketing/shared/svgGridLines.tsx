/**
 * Explicit SVG grid lines for HTML-to-Figma — avoids <pattern> / fill="url(#…)".
 */
export function svgGridLines({
  width,
  height,
  step,
  stroke,
  strokeWidth = 0.5,
}: {
  width: number;
  height: number;
  step: number;
  stroke: string;
  strokeWidth?: number;
}) {
  const lines: { key: string; x1: number; y1: number; x2: number; y2: number }[] = [];
  for (let x = step; x < width; x += step) {
    lines.push({ key: `v-${x}`, x1: x, y1: 0, x2: x, y2: height });
  }
  for (let y = step; y < height; y += step) {
    lines.push({ key: `h-${y}`, x1: 0, y1: y, x2: width, y2: y });
  }
  return lines.map((l) => (
    <line
      key={l.key}
      x1={l.x1}
      y1={l.y1}
      x2={l.x2}
      y2={l.y2}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  ));
}
