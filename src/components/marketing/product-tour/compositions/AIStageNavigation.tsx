"use client";

import { AI_WORKFLOW_STAGES } from "@/lib/marketing/product-tour/content";

type Props = {
  activeStage: number;
  completedThrough: number;
  onSelect: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
};

export function AIStageNavigation({ activeStage, completedThrough, onSelect, onPrev, onNext, isFirst, isLast }: Props) {
  return (
    <div className="mt-8 space-y-4" data-design-layer="AIStageNavigation">
      <div
        className="flex gap-1 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="tablist"
        aria-label="AI workflow stages"
      >
        {AI_WORKFLOW_STAGES.map((stage) => {
          const active = stage.index === activeStage;
          const done = stage.index < activeStage || stage.index <= completedThrough;
          return (
            <button
              key={stage.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onSelect(stage.index)}
              className={`flex shrink-0 flex-col items-start rounded-sm border px-3 py-2.5 text-left transition motion-reduce:transition-none sm:min-w-[5.5rem] ${
                active
                  ? "border-brand-blue bg-[#EEF4FA] text-black"
                  : done
                    ? "border-brand-line/70 bg-white text-black"
                    : "border-brand-line/60 bg-white/80 text-[#111827] hover:border-brand-line"
              }`}
            >
              <span className="text-[10px] font-bold tabular-nums text-brand-orange">{String(stage.index + 1).padStart(2, "0")}</span>
              <span className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.08em]">{stage.short}</span>
              {done && !active ? <span className="mt-1 text-[9px] font-semibold text-[#111827]">✓</span> : null}
            </button>
          );
        })}
      </div>
      <div className="flex justify-end gap-3 text-[11px] font-semibold uppercase tracking-wide">
        <button type="button" disabled={isFirst} onClick={onPrev} className="text-[#111827] enabled:text-black">
          ← Previous
        </button>
        <button type="button" disabled={isLast} onClick={onNext} className="text-brand-blue enabled:hover:underline">
          Next →
        </button>
      </div>
    </div>
  );
}
