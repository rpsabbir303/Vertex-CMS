"use client";

type Props = {
  step: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
  align?: "center" | "spread";
};

/** Compact timeline-integrated navigation (Financial, Field, AI). */
export function TourNavInline({ step, total, onPrev, onNext, isFirst, isLast, align = "spread" }: Props) {
  return (
    <div
      className={`flex items-center gap-3 text-[12px] font-semibold uppercase tracking-wide ${
        align === "center" ? "justify-center" : "justify-between"
      }`}
    >
      <button
        type="button"
        onClick={onPrev}
        disabled={isFirst}
        className="min-h-[40px] rounded-sm border border-brand-line px-3 py-2 text-black transition enabled:hover:border-brand-navy disabled:opacity-35"
      >
        ← Previous
      </button>
      <span className="tabular-nums text-[#111827]">
        {String(step + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
      <button
        type="button"
        onClick={onNext}
        disabled={isLast}
        className="min-h-[40px] rounded-sm bg-brand-navy px-3 py-2 text-white transition enabled:hover:bg-brand-navy/90 disabled:opacity-50"
      >
        Next →
      </button>
    </div>
  );
}
