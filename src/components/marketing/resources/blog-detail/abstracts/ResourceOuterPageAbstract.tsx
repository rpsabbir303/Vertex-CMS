import { AxisLine, AxisPath, Eyebrow, Node } from "./primitives";

type Props = {
  className?: string;
};

/**
 * Viewport-margin workflow fragments — intentional, not full-edge spaghetti.
 * Desktop only; reduced on tablet; hidden on mobile.
 */
export function ResourceOuterPageAbstract({ className = "" }: Props) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 hidden overflow-hidden select-none md:block ${className}`}
      data-design-layer="ResourceOuterPageAbstract"
      aria-hidden="true"
    >
      {/* Left margin fragment */}
      <svg
        className="absolute left-[max(0px,calc(50%-720px))] top-[18%] h-[280px] w-[88px] opacity-[0.22] lg:opacity-[0.28]"
        viewBox="0 0 88 280"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <Node cx={14} cy={24} active />
        <AxisLine x1={14} y1={24} x2={14} y2={88} ambient />
        <AxisPath d="M14 52 H52" ambient />
        <Eyebrow x={4} y={48} text="FIELD" />
        <Node cx={14} cy={88} />
        <AxisLine x1={14} y1={88} x2={14} y2={160} ambient quiet />
        <AxisPath d="M14 120 H48" ambient quiet />
        <Eyebrow x={4} y={116} text="PROJECT" />
        <Node cx={14} cy={160} active />
        <AxisLine x1={14} y1={160} x2={14} y2={220} ambient quiet />
        <Eyebrow x={4} y={228} text="RECORD" />
      </svg>

      {/* Right margin fragment */}
      <svg
        className="absolute right-[max(0px,calc(50%-720px))] top-[32%] h-[300px] w-[92px] opacity-[0.2] lg:opacity-[0.26]"
        viewBox="0 0 92 300"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <AxisPath d="M78 32 H32" ambient />
        <Node cx={78} cy={32} active />
        <Eyebrow x={36} y={28} text="FINANCIAL" />
        <AxisLine x1={78} y1={32} x2={78} y2={100} ambient />
        <Node cx={78} cy={100} />
        <AxisPath d="M78 100 H36" ambient quiet />
        <Eyebrow x={8} y={96} text="REPORTING" />
        <AxisLine x1={78} y1={100} x2={78} y2={180} ambient quiet />
        <Node cx={78} cy={180} active />
        <AxisPath d="M78 180 H40" ambient quiet />
        <Eyebrow x={12} y={176} text="INTELLIGENCE" />
      </svg>

      {/* Mid-page connector stub (visual spine hint) */}
      <svg
        className="absolute left-1/2 top-[42%] hidden h-[120px] w-[2px] -translate-x-1/2 opacity-[0.12] xl:block"
        viewBox="0 0 2 120"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <AxisLine x1={1} y1={0} x2={1} y2={120} ambient quiet />
      </svg>
    </div>
  );
}
