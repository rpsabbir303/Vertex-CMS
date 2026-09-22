"use client";

import { FIELD_SYNC_FLOW } from "@/lib/marketing/product-tour/content";

type Props = {
  activeStep: number;
  stepTitle: string;
  stepDescription: string;
  onStepSelect: (index: number) => void;
};

type StreamProps = Props & { streamLabels: string[] };

export function FieldActivityStream({ activeStep, stepTitle, stepDescription, onStepSelect, streamLabels }: StreamProps) {
  return (
    <div className="space-y-6" data-design-layer="content">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-orange">Field activity</p>
        <h3 className="mt-2 font-display text-[1.2rem] font-bold text-black">{stepTitle}</h3>
        <p className="mt-2 text-[14px] leading-relaxed text-[#111827]">{stepDescription}</p>
      </div>

      <div className="border-l border-brand-line/80 pl-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-black/70">Activity stream</p>
        <ol className="mt-3 space-y-3">
          {streamLabels.map((label, i) => (
            <li key={label}>
              <button
                type="button"
                onClick={() => onStepSelect(i)}
                className={`flex w-full gap-2 text-left text-[13px] leading-snug transition ${
                  i === activeStep ? "font-semibold text-black" : "text-[#111827] hover:text-black"
                }`}
              >
                <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${i === activeStep ? "bg-brand-orange" : "bg-brand-line"}`} />
                {label}
              </button>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-black">Connected path</p>
        <div className="mt-2 flex flex-col gap-1 text-[12px] font-medium text-[#111827] sm:flex-row sm:flex-wrap sm:items-center">
          {FIELD_SYNC_FLOW.map((label, i) => (
            <span key={label} className="flex items-center gap-1">
              <span className="rounded border border-brand-line/70 bg-white px-2 py-0.5 text-black">{label}</span>
              {i < FIELD_SYNC_FLOW.length - 1 ? <span aria-hidden="true">↓</span> : null}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
