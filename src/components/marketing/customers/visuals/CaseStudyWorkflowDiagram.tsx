import type { CaseStudyWorkflowStep } from "@/lib/marketing/customers/types";

type Props = {
  steps: CaseStudyWorkflowStep[];
  className?: string;
  size?: "compact" | "standard" | "large";
};

/** Inline SVG workflow path — Figma / html.to.design safe. */
export function CaseStudyWorkflowDiagram({ steps, className = "", size = "standard" }: Props) {
  if (steps.length === 0) return null;

  const stepGap = size === "large" ? 58 : size === "compact" ? 46 : 52;
  const maxW = size === "large" ? "max-w-md lg:max-w-lg" : size === "compact" ? "max-w-[240px]" : "max-w-[280px]";
  const pad = size === "large" ? "px-4 py-5 sm:px-6 sm:py-6" : "px-3 py-4 sm:px-4 sm:py-5";
  const fontCore = size === "large" ? 11 : 10;
  const fontStep = size === "large" ? 10 : 9;
  const viewH = steps.length * stepGap + 8;

  return (
    <div
      className={`rounded-lg border border-brand-line bg-[#FAFBFD] ${pad} ${className}`}
      data-design-layer="CaseStudyWorkflowDiagram"
    >
      <svg
        className={`mx-auto block w-full ${maxW}`}
        width="100%"
        height={viewH}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 280 ${viewH}`}
        aria-hidden="true"
      >
        {steps.map((step, index) => {
          const y = 20 + index * stepGap;
          const isCore = step.label.toLowerCase().includes("vertex");
          const maxChars = size === "large" ? 34 : 28;
          const label =
            step.label.length > maxChars ? `${step.label.slice(0, maxChars - 1)}…` : step.label;
          return (
            <g key={`${step.label}-${index}`}>
              {index > 0 ? (
                <line x1={140} y1={y - stepGap + 20} x2={140} y2={y - 12} stroke="#B7C8D8" strokeWidth={1} />
              ) : null}
              {index > 0 ? <circle cx={140} cy={y - 12} r={2} fill="#FF6A00" opacity={0.65} /> : null}
              <rect
                x={isCore ? 88 : 40}
                y={y - 10}
                width={isCore ? 104 : 200}
                height={size === "large" ? 32 : 28}
                rx={4}
                fill={isCore ? "#08233F" : "#FFFFFF"}
                stroke={isCore ? "#08233F" : "#E6ECF3"}
                strokeWidth={1}
              />
              <text
                x={140}
                y={y + (size === "large" ? 8 : 6)}
                textAnchor="middle"
                fill={isCore ? "#FFFFFF" : "#1E3A5F"}
                fontSize={isCore ? fontCore : fontStep}
                fontFamily="var(--font-sans)"
                fontWeight={600}
              >
                {label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
