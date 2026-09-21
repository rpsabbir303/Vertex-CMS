/** Shared design tokens for the Blog Detail / Resource abstract system. */

export const ABSTRACT = {
  navy: "#08233F",
  navySoft: "#1E3A5F",
  blue: "#3B6F9A",
  blueSoft: "#8BA8C4",
  bluePale: "#C5D5E4",
  line: "#D4DEE8",
  lineSoft: "#E6ECF3",
  orange: "#FF6A00",
  white: "#FFFFFF",
  surface: "#FAFBFD",
  surfaceCool: "#F4F7FB",
  pageBg: "#F5F8FB",
  /** Stroke weight — all connectors use this. */
  stroke: 1,
  /** Active / transition node radius. */
  nodeR: 3,
  /** Quiet node radius. */
  nodeQuietR: 2.25,
  /** UI block corner radius. */
  blockRx: 3,
  /** Label tracking. */
  tracking: "0.08em",
  font: "var(--font-sans)",
  labelSize: 7,
  blockLabelSize: 8,
  titleSize: 9,
} as const;

export type AbstractTone = "light" | "dark";

export function strokeColor(tone: AbstractTone = "light") {
  return tone === "dark" ? "rgba(147,184,214,0.42)" : ABSTRACT.bluePale;
}

export function quietStroke(tone: AbstractTone = "light") {
  return tone === "dark" ? "rgba(147,184,214,0.28)" : ABSTRACT.line;
}

export function labelColor(tone: AbstractTone = "light") {
  return tone === "dark" ? "rgba(210,226,240,0.78)" : ABSTRACT.navySoft;
}

export function eyebrowColor(tone: AbstractTone = "light") {
  return tone === "dark" ? "rgba(186,210,230,0.72)" : ABSTRACT.blue;
}

export function blockFill(tone: AbstractTone = "light") {
  return tone === "dark" ? "rgba(255,255,255,0.05)" : ABSTRACT.white;
}

export function blockStroke(tone: AbstractTone = "light") {
  return tone === "dark" ? "rgba(147,184,214,0.38)" : ABSTRACT.line;
}
