"use client";

import {
  AI_CONTEXT_SOURCES,
  AI_INSIGHT_ROWS,
  AI_REVIEW_PROPOSAL,
  AI_TOUR_STEPS,
} from "@/lib/marketing/product-tour/content";

import { AxisLine, AxisPath, Node } from "@/components/marketing/resources/blog-detail/abstracts/primitives";

type Props = { stage: number };

function ContextNetwork({ stage }: { stage: number }) {
  const activeSources =
    stage === 0 ? AI_CONTEXT_SOURCES.map((s) => s.id) : stage >= 1 ? AI_CONTEXT_SOURCES.map((s) => s.id) : [];

  return (
    <div className="relative mx-auto w-full max-w-[720px]" data-abstract="ai-context-network">
      <svg
        className="pointer-events-none absolute inset-0 mx-auto h-full w-full max-w-[520px]"
        viewBox="0 0 520 200"
        aria-hidden="true"
      >
        <AxisPath d="M130 48 L260 100 M390 48 L260 100 M160 160 L260 100 M360 160 L260 100 M260 100 L260 130" ambient />
        <Node cx={260} cy={100} active={stage >= 1} />
        <Node cx={130} cy={48} active={stage >= 0} />
        <Node cx={390} cy={48} active={stage >= 0} />
        <Node cx={160} cy={160} active={stage >= 0} />
        <Node cx={360} cy={160} active={stage >= 0} />
        <circle cx={260} cy={130} r="3" fill="#FF6A00" opacity={stage >= 1 ? 0.9 : 0.35} />
      </svg>

      <p className="text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-black/70">Context from your project</p>

      <div className="relative mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-5">
        {AI_CONTEXT_SOURCES.map((source, i) => {
          const lit = activeSources.includes(source.id);
          const positions = [
            "lg:col-start-1 lg:row-start-1",
            "lg:col-start-5 lg:row-start-1",
            "lg:col-start-2 lg:row-start-2",
            "lg:col-start-4 lg:row-start-2",
            "lg:col-start-3 lg:row-start-1 lg:justify-self-center",
          ];
          return (
            <div
              key={source.id}
              className={`flex justify-center ${positions[i] ?? ""}`}
            >
              <span
                className={`rounded-sm border px-3 py-2 text-center text-[10px] font-bold uppercase tracking-[0.08em] transition ${
                  lit && stage >= 0
                    ? "border-brand-blue/35 bg-white text-black shadow-sm"
                    : "border-brand-line/60 bg-white/70 text-[#111827]"
                } ${stage >= 1 && lit ? "ring-1 ring-brand-orange/30" : ""}`}
              >
                {source.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AIWorkspacePanel({ stage }: { stage: number }) {
  const showAnswer = stage >= 1;
  const showFullInsight = stage >= 2;

  return (
    <div
      className="mx-auto mt-8 w-full max-w-2xl overflow-hidden rounded-sm border border-brand-navy/25 bg-brand-navy shadow-[0_20px_50px_-28px_rgba(10,39,68,0.65)]"
      data-design-layer="AIWorkspacePanel"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-4 py-3 sm:px-5">
        <div>
          <p className="text-[13px] font-semibold text-white">Vertex AI Assistant</p>
          <p className="text-[11px] text-slate-400">Grounded in project context</p>
        </div>
        {stage >= 3 ? (
          <span className="rounded-sm border border-brand-orange/50 bg-brand-orange/15 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-brand-orange">
            Review required
          </span>
        ) : null}
      </div>

      <div className="space-y-4 p-4 sm:p-5">
        {stage === 0 ? (
          <p className="text-[13px] leading-relaxed text-slate-300">
            Project, document, field, financial, and RFI data available for analysis — select a stage to walk through the workflow.
          </p>
        ) : null}

        {showAnswer ? (
          <>
            <div className="max-w-[92%] rounded-sm rounded-tl-md border border-white/10 bg-white/10 px-3 py-2.5 text-[13px] text-slate-100">
              What&apos;s putting the Riverside project at risk?
            </div>
            <div className="ml-auto max-w-[95%] rounded-sm rounded-tr-md border border-brand-orange/25 bg-[#0A2744]/80 px-3 py-3 text-[13px] text-slate-100">
              {stage === 1 ? (
                <p className="text-slate-300">Analyzing project context…</p>
              ) : (
                <>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-orange">Based on current project data</p>
                  <p className="mt-2 text-slate-100">Three areas need attention.</p>
                  {showFullInsight ? (
                    <ol className="mt-3 space-y-1.5 text-[12px]">
                      <li>
                        <span className="font-semibold text-white">01 Budget pressure</span>
                      </li>
                      <li>
                        <span className="font-semibold text-white">02 Schedule delay</span>
                      </li>
                      <li>
                        <span className="font-semibold text-white">03 Outstanding RFI</span>
                      </li>
                    </ol>
                  ) : null}
                </>
              )}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

function InsightStrip({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <div className="mx-auto mt-6 w-full max-w-2xl" data-design-layer="content">
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-black">AI insight</p>
      <ul className="mt-3 divide-y divide-brand-line border border-brand-line/80 bg-white">
        {AI_INSIGHT_ROWS.map((row, i) => (
          <li key={row.category} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 px-4 py-3 sm:px-5">
            <span className="text-[10px] font-bold tabular-nums text-brand-orange">{String(i + 1).padStart(2, "0")}</span>
            <span className="min-w-[5rem] text-[11px] font-bold uppercase tracking-[0.06em] text-black">{row.category}</span>
            <span className="flex-1 text-[13px] text-black">{row.insight}</span>
            <span className="text-[11px] text-[#111827]">{row.context}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange/80" aria-hidden="true" />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ReviewStage({ visible, stage }: { visible: boolean; stage: number }) {
  if (!visible) return null;

  const confirmed = stage >= 4;

  return (
    <div className="mx-auto mt-6 w-full max-w-2xl space-y-4">
      {!confirmed ? (
        <div className="border border-brand-line/80 bg-white p-4 sm:p-5" data-design-layer="content">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-orange">Review required</p>
          <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-wide text-black/70">
            <span>AI proposes</span>
            <span aria-hidden="true">→</span>
            <span>Human reviews</span>
            <span aria-hidden="true">→</span>
            <span className="text-black">Human confirms</span>
          </div>

          <div className="mt-4 border-t border-brand-line/70 pt-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-black/70">AI proposal</p>
            <p className="mt-2 font-display text-[1.05rem] font-bold text-black">{AI_REVIEW_PROPOSAL.title}</p>
            <p className="mt-2 text-[12px] text-[#111827]">
              Supporting information: {AI_REVIEW_PROPOSAL.supports.join(" · ")}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {(["Review", "Confirm", "Dismiss"] as const).map((action) => (
                <span
                  key={action}
                  className={`rounded-sm border px-3 py-2 text-[11px] font-semibold uppercase tracking-wide ${
                    action === "Confirm"
                      ? "border-brand-orange bg-brand-orange/10 text-black"
                      : "border-brand-line text-[#111827]"
                  }`}
                >
                  {action}
                </span>
              ))}
            </div>
            <p className="mt-3 text-[11px] leading-relaxed text-[#111827]">
              A team member must review and explicitly confirm before any write action is recorded.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex items-start gap-3 border border-brand-blue/30 bg-[#EEF4FA] px-4 py-4 sm:px-5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-orange text-[11px] font-bold text-white">
            ✓
          </span>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-black">Human confirmed</p>
            <p className="mt-1 text-[14px] font-semibold text-black">Action recorded</p>
            <p className="mt-1 text-[12px] text-[#111827]">
              AI suggested → human reviewed → human explicitly confirmed → system recorded the action.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function StageCaption({ stage }: { stage: number }) {
  const captions = [
    AI_TOUR_STEPS[0]?.description,
    AI_TOUR_STEPS[0]?.description,
    AI_TOUR_STEPS[2]?.description,
    "Review the AI proposal before confirming any action.",
    "Confirmed actions are recorded; AI does not commit changes independently.",
  ];
  const text = captions[stage] ?? "";
  return (
    <p className="mx-auto mt-6 max-w-xl text-center text-[13px] leading-relaxed text-[#111827]" data-design-layer="content">
      {text}
    </p>
  );
}

export function AIWorkflowExperience({ stage }: Props) {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#3B6F9A 1px, transparent 1px), linear-gradient(90deg, #3B6F9A 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-[1] flex flex-col items-center">
        <svg className="mb-2 h-8 w-px sm:hidden" aria-hidden="true">
          <AxisLine x1={1} y1={0} x2={1} y2={32} ambient quiet />
        </svg>

        <ContextNetwork stage={stage} />

        <svg className="my-3 hidden h-10 w-px sm:block" aria-hidden="true">
          <AxisLine x1={1} y1={0} x2={1} y2={40} ambient quiet />
          <Node cx={1} cy={20} active={stage >= 1} />
        </svg>
        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-black/70 sm:hidden">↓</span>

        <AIWorkspacePanel stage={stage} />

        <InsightStrip visible={stage >= 2} />

        <ReviewStage visible={stage >= 3} stage={stage} />

        <StageCaption stage={stage} />
      </div>
    </div>
  );
}
