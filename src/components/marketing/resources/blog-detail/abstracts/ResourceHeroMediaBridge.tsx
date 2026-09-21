import { AxisLine, Eyebrow, Node } from "./primitives";

type Props = {
  className?: string;
};

/**
 * Visual spine: hero workflow → featured media.
 * Sits in whitespace between sections, never over content columns.
 */
export function ResourceHeroMediaBridge({ className = "" }: Props) {
  return (
    <div
      className={`pointer-events-none relative z-0 flex justify-center select-none ${className}`}
      data-design-layer="ResourceHeroMediaBridge"
      aria-hidden="true"
    >
      <svg className="h-14 w-8 opacity-50 sm:h-16 sm:opacity-60" viewBox="0 0 32 64" xmlns="http://www.w3.org/2000/svg" fill="none">
        <AxisLine x1={16} y1={0} x2={16} y2={28} ambient />
        <Node cx={16} cy={28} active />
        <AxisLine x1={16} y1={32} x2={16} y2={64} ambient quiet />
      </svg>
      <svg
        className="absolute top-1/2 hidden w-[min(520px,70vw)] -translate-y-1/2 opacity-30 sm:block"
        viewBox="0 0 520 40"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <AxisLine x1={40} y1={20} x2={480} y2={20} ambient quiet />
        <Node cx={100} cy={20} />
        <Node cx={260} cy={20} active />
        <Node cx={420} cy={20} />
        <Eyebrow x={72} y={12} text="FIELD ACTIVITY" />
        <Eyebrow x={210} y={12} text="SHARED RECORD" />
        <Eyebrow x={360} y={12} text="FINANCIAL VISIBILITY" />
      </svg>
    </div>
  );
}
