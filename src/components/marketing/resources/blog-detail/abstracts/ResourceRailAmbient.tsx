import { AxisLine, AxisPath, Eyebrow, Node } from "./primitives";

type Props = {
  className?: string;
};

/** Ambient product context beside the resource map rail — desktop only. */
export function ResourceRailAmbient({ className = "" }: Props) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 hidden select-none lg:block ${className}`}
      data-design-layer="ResourceRailAmbient"
      aria-hidden="true"
    >
      <svg
        className="absolute right-[max(1rem,calc(50%-660px))] top-[12%] h-[200px] w-[72px] opacity-[0.2]"
        viewBox="0 0 72 200"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <Eyebrow x={4} y={14} text="PROJECT DATA" />
        <AxisLine x1={36} y1={22} x2={36} y2={90} ambient />
        <Node cx={36} cy={44} active />
        <AxisPath d="M36 44 H8" ambient quiet />
        <Node cx={36} cy={90} />
        <AxisLine x1={36} y1={90} x2={36} y2={160} ambient quiet />
        <Node cx={36} cy={130} active />
        <Eyebrow x={4} y={178} text="VISIBILITY" />
      </svg>
    </div>
  );
}
