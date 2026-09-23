import { ArrowDown, AxisLine, Node, UiBlock } from "../../resources/blog-detail/abstracts/primitives";

type Props = { stages: readonly string[]; closingLabel: string; className?: string };

export function ComparisonOperatingModelVisual({ stages, closingLabel, className = "" }: Props) {
  const ys = [28, 58, 88, 118, 148];

  return (
    <div
      className={`border border-brand-line/80 bg-white px-6 py-8 sm:px-10 sm:py-12 ${className}`}
      data-design-layer="ComparisonOperatingModelVisual"
      aria-hidden="true"
    >
      <svg className="mx-auto block h-auto w-full max-w-[220px]" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" fill="none">
        <AxisLine x1={110} y1={16} x2={110} y2={188} ambient />
        {stages.map((stage, i) => {
          const y = ys[i] ?? 28 + i * 30;
          const short = stage.length > 12 ? stage.slice(0, 11).toUpperCase() : stage.toUpperCase();
          return (
            <g key={stage}>
              <Node cx={110} cy={y} active={i === 0 || i === stages.length - 1} />
              <UiBlock x={48} y={y + 4} w={124} h={20} label={short} emphasis={i === 0} />
              {i < stages.length - 1 ? <ArrowDown x={110} y={y + 24} /> : null}
            </g>
          );
        })}
        <UiBlock x={52} y={188} w={116} h={24} label={closingLabel.toUpperCase()} emphasis />
      </svg>
    </div>
  );
}
