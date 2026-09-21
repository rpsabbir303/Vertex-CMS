import { AxisLine, ArrowDown, Node, UiBlock } from "./primitives";

type Props = {
  className?: string;
};

/**
 * ResourceCTAAbstract — final state of the page workflow system.
 * PROJECT → FIELD → FINANCIAL → INTELLIGENCE
 */
export function ResourceCTAAbstract({ className = "" }: Props) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      data-design-layer="ResourceCtaAbstract"
      data-axis-stage="cta"
      aria-hidden="true"
    >
      <svg className="mx-auto block h-auto w-full max-w-[168px]" viewBox="0 0 168 188" xmlns="http://www.w3.org/2000/svg" fill="none">
        <UiBlock x={36} y={4} w={96} h={24} label="PROJECT" tone="dark" />
        <AxisLine x1={84} y1={28} x2={84} y2={40} tone="dark" ambient />
        <Node cx={84} cy={40} active tone="dark" />
        <ArrowDown x={84} y={52} tone="dark" />
        <UiBlock x={40} y={56} w={88} h={24} label="FIELD" tone="dark" />
        <AxisLine x1={84} y1={80} x2={84} y2={92} tone="dark" ambient />
        <Node cx={84} cy={92} active tone="dark" />
        <ArrowDown x={84} y={104} tone="dark" />
        <UiBlock x={32} y={108} w={104} h={24} label="FINANCIAL" tone="dark" />
        <AxisLine x1={84} y1={132} x2={84} y2={144} tone="dark" ambient />
        <Node cx={84} cy={144} active tone="dark" />
        <ArrowDown x={84} y={156} tone="dark" />
        <UiBlock x={28} y={160} w={112} h={24} label="INTELLIGENCE" tone="dark" emphasis />
      </svg>
    </div>
  );
}
