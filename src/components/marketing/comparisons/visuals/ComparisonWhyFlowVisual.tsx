import { AxisPath, Node, UiBlock } from "../../resources/blog-detail/abstracts/primitives";

type Props = { className?: string };

export function ComparisonWhyFlowVisual({ className = "" }: Props) {
  const steps = [
    { x: 8, label: "CAPABILITIES" },
    { x: 92, label: "WORKFLOWS" },
    { x: 176, label: "OPERATING" },
    { x: 260, label: "TEAM FIT" },
  ];

  return (
    <div
      className={`overflow-x-auto border border-brand-line/80 bg-white px-4 py-6 sm:px-6 ${className}`}
      data-design-layer="ComparisonWhyFlowVisual"
      aria-hidden="true"
    >
      <svg className="mx-auto block min-w-[320px] max-w-full" viewBox="0 0 340 56" xmlns="http://www.w3.org/2000/svg" fill="none">
        {steps.map((step, i) => (
          <g key={step.label}>
            <UiBlock x={step.x} y={16} w={i === 2 ? 72 : 76} h={22} label={step.label} emphasis={i === 0} />
            {i < steps.length - 1 ? (
              <>
                <AxisPath d={`M${step.x + 76} 27 H${steps[i + 1]!.x - 4}`} ambient quiet />
                <Node cx={step.x + 80} cy={27} active={i === 1} />
              </>
            ) : null}
          </g>
        ))}
      </svg>
    </div>
  );
}
