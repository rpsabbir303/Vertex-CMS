import { AxisLine, AxisPath, Node } from "../../resources/blog-detail/abstracts/primitives";

type Props = {
  pillars: { index: string; label: string }[];
  flow: readonly string[];
  className?: string;
};

function splitFlowLabel(step: string): [string, string] {
  const words = step.trim().split(/\s+/);
  if (words.length <= 1) return [step.toUpperCase(), ""];
  return [words[0]!.toUpperCase(), words.slice(1).join(" ").toUpperCase()];
}

function pillarLabel(index: string, label: string) {
  return `${index} ${label}`.toUpperCase();
}

export function ComparisonFrameworkDiagram({ pillars, flow, className = "" }: Props) {
  return (
    <div
      className={`border border-brand-line/80 bg-white px-4 py-8 sm:px-6 sm:py-9 md:px-8 md:py-10 ${className}`}
      data-design-layer="ComparisonFrameworkDiagram"
      aria-hidden="true"
    >
      <div className="mx-auto flex w-full max-w-[520px] flex-col items-center">
        <div className="rounded-sm border border-[#08233F] bg-[#08233F] px-5 py-2.5 text-center">
          <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-white sm:text-[10px]">VertexBuild</span>
        </div>

        <svg className="mt-1 block h-10 w-16 shrink-0 sm:h-12" viewBox="0 0 64 48" xmlns="http://www.w3.org/2000/svg" fill="none">
          <AxisLine x1={32} y1={4} x2={32} y2={40} ambient />
          <Node cx={32} cy={8} active />
        </svg>

        <div className="relative w-full">
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full min-[480px]:block"
            viewBox="0 0 520 200"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            aria-hidden="true"
          >
            <AxisPath d="M260 0 V24" ambient quiet />
            <AxisPath d="M260 24 H130" ambient quiet />
            <AxisPath d="M260 24 H390" ambient quiet />
            <AxisPath d="M260 24 V100" ambient quiet />
            <Node cx={260} cy={24} active />
            <Node cx={130} cy={24} />
            <Node cx={390} cy={24} />
            <Node cx={260} cy={100} active />
          </svg>

          <div className="grid w-full grid-cols-1 gap-3 min-[480px]:grid-cols-2 min-[480px]:gap-x-4 min-[480px]:gap-y-4 md:gap-x-5 md:gap-y-5">
            {pillars.map((p, i) => {
              const emphasis = i === 0;
              return (
                <div
                  key={p.index}
                  className={`relative z-[1] flex min-h-[2.75rem] min-w-0 items-center justify-center rounded-sm border px-3 py-2.5 text-center sm:min-w-[8.75rem] md:min-w-[9.25rem] ${
                    emphasis
                      ? "border-[#08233F] bg-[#08233F] text-white"
                      : "border-brand-line/90 bg-white text-[#000000]"
                  }`}
                >
                  <span className="text-[9px] font-semibold uppercase leading-snug tracking-[0.06em] sm:text-[10px]">
                    {pillarLabel(p.index, p.label)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <svg className="my-3 block h-6 w-full max-w-md" viewBox="0 0 400 8" xmlns="http://www.w3.org/2000/svg" fill="none">
          <AxisLine x1={8} y1={4} x2={392} y2={4} ambient quiet />
        </svg>

        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {flow.map((step, i) => {
            const [line1, line2] = splitFlowLabel(step);
            const emphasis = i === 1;
            return (
              <div
                key={step}
                className={`flex min-w-0 flex-col items-center justify-center rounded-sm border px-3 py-3 text-center sm:px-4 sm:py-3.5 ${
                  emphasis
                    ? "border-[#08233F] bg-[#08233F] text-white"
                    : "border-brand-line/90 bg-[#FAFBFD] text-[#000000]"
                }`}
              >
                <span className="text-[9px] font-semibold uppercase leading-snug tracking-[0.06em] sm:text-[10px]">{line1}</span>
                {line2 ? (
                  <span className="mt-0.5 text-[9px] font-semibold uppercase leading-snug tracking-[0.06em] sm:text-[10px]">
                    {line2}
                  </span>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
