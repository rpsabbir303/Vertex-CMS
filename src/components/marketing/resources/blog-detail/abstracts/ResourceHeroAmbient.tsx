import { AxisLine, Eyebrow, MicroFragment, Node } from "./primitives";

type Props = {
  className?: string;
};

/** Subtle hero background fragments — ties workflow panel to page atmosphere. */
export function ResourceHeroAmbient({ className = "" }: Props) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
      data-design-layer="ResourceHeroAmbient"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 45% 55% at 78% 45%, rgba(200,220,238,0.32), transparent 62%)",
        }}
      />
      <svg
        className="absolute right-[8%] top-[20%] hidden h-[100px] w-[120px] opacity-40 lg:block"
        viewBox="0 0 120 100"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <MicroFragment x={8} y={12} label="FIELD ACTIVITY" w={76} />
        <MicroFragment x={32} y={44} label="PROJECT CONTEXT" w={80} />
        <MicroFragment x={16} y={76} label="COST SIGNAL" w={68} />
      </svg>
      <svg
        className="absolute left-[4%] top-[55%] hidden h-[80px] w-[64px] opacity-25 xl:block"
        viewBox="0 0 64 80"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <Eyebrow x={4} y={12} text="CONNECTED" />
        <AxisLine x1={8} y1={20} x2={8} y2={64} ambient />
        <Node cx={8} cy={36} />
        <Eyebrow x={4} y={72} text="WORKFLOW" />
      </svg>
    </div>
  );
}
