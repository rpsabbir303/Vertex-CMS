import { AxisLine, Eyebrow, Node } from "./primitives";

type Props = {
  className?: string;
};

/** Ambient connectors on dark CTA — same language as hero finale. */
export function ResourceCtaAmbient({ className = "" }: Props) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
      data-design-layer="ResourceCtaAmbient"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 40% 50% at 92% 35%, rgba(59,111,154,0.22), transparent 58%)",
        }}
      />
      <svg
        className="absolute right-[12%] top-[25%] hidden h-[100px] w-[80px] opacity-25 lg:block"
        viewBox="0 0 80 100"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <AxisLine x1={40} y1={8} x2={40} y2={88} tone="dark" ambient />
        <Node cx={40} cy={24} active tone="dark" />
        <Node cx={40} cy={52} tone="dark" />
        <Node cx={40} cy={80} active tone="dark" />
        <Eyebrow x={4} y={20} text="CONNECTED" tone="dark" />
        <Eyebrow x={4} y={72} text="WORKFLOW" tone="dark" />
      </svg>
    </div>
  );
}
