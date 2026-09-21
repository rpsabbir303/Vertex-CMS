import { AxisLine, Eyebrow, Node } from "./primitives";

type Props = {
  className?: string;
};

/** Subtle ambient beside related resources list — desktop only. */
export function ResourceRelatedAmbient({ className = "" }: Props) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 hidden select-none lg:block ${className}`}
      data-design-layer="ResourceRelatedAmbient"
      aria-hidden="true"
    >
      <svg
        className="absolute left-[max(0px,calc(50%-680px))] top-[28%] h-[140px] w-[56px] opacity-[0.18]"
        viewBox="0 0 56 140"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <Node cx={12} cy={20} active />
        <AxisLine x1={12} y1={20} x2={12} y2={100} ambient />
        <AxisLine x1={12} y1={52} x2={44} y2={52} ambient quiet />
        <Eyebrow x={4} y={48} text="KNOWLEDGE" />
        <Node cx={12} cy={100} />
      </svg>
    </div>
  );
}
