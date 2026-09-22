"use client";

type Stage = { index: number; short: string };

type Props = {
  stages: Stage[];
  activeStep: number;
  onSelect: (index: number) => void;
};

export function FinancialFlowTimeline({ stages, activeStep, onSelect }: Props) {
  return (
    <div className="overflow-x-auto" data-design-layer="FinancialFlowTimeline">
      <div className="flex min-w-[min(100%,720px)] items-center gap-1 sm:min-w-0 sm:justify-between">
        {stages.map((stage, i) => {
          const active = stage.index === activeStep;
          const done = stage.index < activeStep;
          return (
            <div key={stage.index} className="flex flex-1 items-center">
              <button
                type="button"
                onClick={() => onSelect(stage.index)}
                aria-current={active ? "step" : undefined}
                className={`flex min-w-[4.5rem] flex-1 flex-col items-center px-1 py-2 transition ${
                  active ? "opacity-100" : "opacity-75 hover:opacity-100"
                }`}
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full border text-[10px] font-bold tabular-nums ${
                    active
                      ? "border-brand-orange bg-brand-orange text-white shadow-[0_0_0_3px_rgba(255,106,0,0.2)]"
                      : done
                        ? "border-brand-blue/40 bg-[#EEF4FA] text-black"
                        : "border-brand-line bg-white text-[#111827]"
                  }`}
                >
                  {String(stage.index + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 text-center text-[9px] font-bold uppercase leading-tight tracking-[0.05em] text-black">
                  {stage.short}
                </span>
              </button>
              {i < stages.length - 1 ? (
                <span className="hidden shrink-0 px-0.5 text-brand-line sm:inline" aria-hidden="true">
                  →
                </span>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
