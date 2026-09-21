import { ABSTRACT } from "./tokens";

type Props = {
  className?: string;
};

/**
 * CSS-only atmospheric depth — no repeating grid (not a blueprint).
 */
export function ResourcePageAtmosphere({ className = "" }: Props) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
      data-design-layer="ResourcePageAtmosphere"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 55% 38% at 88% 6%, rgba(200,220,238,0.38), transparent 58%),
            radial-gradient(ellipse 48% 32% at 6% 42%, rgba(210,226,240,0.26), transparent 54%),
            radial-gradient(ellipse 42% 28% at 92% 72%, rgba(197,213,228,0.2), transparent 52%),
            radial-gradient(ellipse 35% 25% at 50% 88%, rgba(210,226,240,0.14), transparent 50%),
            ${ABSTRACT.pageBg}
          `,
        }}
      />
    </div>
  );
}
