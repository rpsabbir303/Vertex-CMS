"use client";

type Props = {
  step: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
  completeLabel?: string;
};

export function TourStepControls({ step, total, onPrev, onNext, isFirst, isLast, completeLabel = "Step complete" }: Props) {
  return (
    <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between" data-design-layer="content">
      <div className="flex items-center gap-2" aria-label={`Step ${step + 1} of ${total}`}>
        {Array.from({ length: total }, (_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all motion-reduce:transition-none ${
              i === step ? "w-8 bg-brand-orange" : i < step ? "w-3 bg-brand-blue/50" : "w-3 bg-brand-line"
            }`}
            aria-hidden="true"
          />
        ))}
        <span className="ml-2 text-[12px] font-medium tabular-nums text-[#111827]">
          {String(step + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={onPrev}
          disabled={isFirst}
          className="inline-flex min-h-[44px] items-center justify-center rounded-sm border border-brand-line px-4 py-2.5 text-[12px] font-semibold uppercase tracking-wide text-black transition enabled:hover:border-brand-navy disabled:cursor-not-allowed disabled:opacity-40"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={isLast}
          className="inline-flex min-h-[44px] items-center justify-center rounded-sm bg-brand-navy px-4 py-2.5 text-[12px] font-semibold uppercase tracking-wide text-white transition enabled:hover:bg-brand-navy/90 disabled:cursor-default disabled:bg-brand-muted/80"
        >
          {isLast ? completeLabel : "Next"}
        </button>
      </div>
    </div>
  );
}
