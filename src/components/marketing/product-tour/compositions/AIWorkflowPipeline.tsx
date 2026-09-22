"use client";

import { AI_ACTION_FLOW } from "@/lib/marketing/product-tour/content";

const CONTEXT_SOURCES = ["Project", "Documents", "Daily logs", "Financial data", "RFIs"] as const;

const PIPELINE = ["Project context", "AI analysis", "Answer / insight", "Human review", "Confirmation"] as const;

type Props = {
  activeStep: number;
};

export function AIWorkflowPipeline({ activeStep }: Props) {
  const pipelineIndex = Math.min(activeStep + 2, PIPELINE.length - 1);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,11rem)_minmax(0,1fr)]" data-design-layer="AIWorkflowPipeline">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-black/70">Context sources</p>
        <ul className="mt-2 space-y-1.5">
          {CONTEXT_SOURCES.map((source, i) => (
            <li
              key={source}
              className={`rounded-sm border px-2 py-1.5 text-[11px] font-medium ${
                i <= activeStep + 1 ? "border-brand-blue/30 bg-[#EEF4FA] text-black" : "border-brand-line/60 text-[#111827]"
              }`}
            >
              {source}
            </li>
          ))}
        </ul>

        <div className="mt-6 hidden lg:block">
          <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-black/70">Pipeline</p>
          <ol className="mt-2 space-y-2 border-l border-brand-line/70 pl-3">
            {PIPELINE.map((stage, i) => (
              <li
                key={stage}
                className={`text-[11px] leading-snug ${i === pipelineIndex ? "font-semibold text-black" : "text-[#111827]"}`}
              >
                {stage}
                {i < PIPELINE.length - 1 ? <span className="mt-1 block text-brand-line" aria-hidden="true">↓</span> : null}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="rounded-sm border border-brand-orange/40 bg-[#FFF8F3] p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-orange">Review required</p>
        <ol className="mt-3 space-y-2.5">
          {AI_ACTION_FLOW.map((item, i) => (
            <li key={item.label} className="flex gap-2">
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] font-bold ${
                  i >= 2 ? "bg-brand-orange text-white" : "border border-brand-navy/20 bg-white text-black"
                }`}
              >
                {i + 1}
              </span>
              <div>
                <p className="text-[12px] font-semibold text-black">{item.label}</p>
                <p className="text-[11px] text-[#111827]">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
