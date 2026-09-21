import { AxisLine, AxisPath, ArrowDown, Eyebrow, MicroFragment, Node, UiBlock } from "./primitives";

type Props = {
  className?: string;
};

/**
 * HeroWorkflowAbstract — establishes the page visual language.
 * Field Log → Project Record → Job Cost / Financial View
 */
export function HeroWorkflowAbstract({ className = "" }: Props) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      data-design-layer="HeroWorkflowAbstract"
      data-axis-stage="hero"
      aria-hidden="true"
    >
      <svg
        className="mx-auto block h-auto w-full max-w-[300px]"
        viewBox="0 0 288 252"
        width={300}
        height={252}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <circle cx="218" cy={98} r={66} fill="#E8F0F8" opacity={0.45} />

        <MicroFragment x={4} y={8} label="FIELD ACTIVITY" w={78} />
        <MicroFragment x={196} y={52} label="PROJECT CONTEXT" w={82} />
        <MicroFragment x={8} y={188} label="COST SIGNAL" w={70} />

        <AxisLine x1={78} y1={22} x2={78} y2={218} />
        <Node cx={78} cy={46} active />
        <Node cx={78} cy={102} active />
        <Node cx={78} cy={158} active />
        <ArrowDown x={78} y={74} />
        <ArrowDown x={78} y={130} />

        <Eyebrow x={98} y={28} text="FIELD LOG" />
        <UiBlock x={98} y={34} w={124} h={26} label="Daily field log" />

        <Eyebrow x={98} y={84} text="PROJECT RECORD" />
        <UiBlock x={98} y={90} w={132} h={26} label="Shared job context" />

        <AxisPath d="M230 102 H258" />
        <Node cx={258} cy={102} />
        <UiBlock x={198} y={114} w={76} h={22} label="Financial view" />

        <AxisPath d="M78 102 H118" />
        <Node cx={118} cy={102} active />
        <UiBlock x={122} y={114} w={64} h={22} label="Job cost" />

        <Eyebrow x={98} y={138} text="FINANCIAL VIEW" />
        <UiBlock x={98} y={144} w={116} h={26} label="Cost visibility" />

        <AxisLine x1={78} y1={218} x2={78} y2={248} ambient quiet />
        <Node cx={78} cy={232} active />
      </svg>
    </div>
  );
}

/** Compact mobile hero strip — same grammar. */
export function HeroWorkflowAbstractMobile({ className = "" }: Props) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      data-design-layer="HeroWorkflowAbstract"
      data-axis-stage="hero-mobile"
      aria-hidden="true"
    >
      <svg className="block h-8 w-full max-w-sm" viewBox="0 0 320 32" xmlns="http://www.w3.org/2000/svg" fill="none">
        <AxisLine x1={8} y1={20} x2={312} y2={20} quiet />
        <Node cx={40} cy={20} active />
        <Node cx={120} cy={20} />
        <Node cx={200} cy={20} active />
        <Node cx={280} cy={20} />
        <Eyebrow x={16} y={12} text="FIELD" />
        <Eyebrow x={92} y={12} text="PROJECT" />
        <Eyebrow x={168} y={12} text="FINANCIAL" />
        <Eyebrow x={248} y={12} text="INTEL" />
      </svg>
    </div>
  );
}
