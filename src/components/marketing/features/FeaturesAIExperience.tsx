"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { AI_CAPABILITIES } from "@/lib/marketing/features/content";
import { FeatureProductPreview } from "./FeatureProductPreview";

const FLOW = ["User question", "Vertex AI", "Project context", "Answer / action"] as const;

export function FeaturesAIExperience() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setStep(FLOW.length - 1);
      return;
    }
    const id = window.setInterval(() => setStep((p) => (p + 1) % FLOW.length), 1700);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="features-ai" className="scroll-mt-28 border-b border-brand-line bg-brand-navy text-white">
      <div className="site-shell section-spacing">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
              Features by AI capability
            </p>
            <h2 className="display-title-light mt-3 max-w-md text-3xl sm:text-4xl">
              Construction-business intelligence with human control
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-slate-300">
              The Master Feature Register distinguishes AI Assistant and AI Intelligence (predictive). Write
              actions require confirmation. AI cannot delete records. Tool calls are logged. Answers stay within
              the user&apos;s permission scope.
            </p>

            <ol className="mt-8 space-y-3">
              {FLOW.map((label, index) => {
                const active = index === step;
                return (
                  <li key={label} className="flex items-center gap-3">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-bold ${
                        active
                          ? "border-brand-orange bg-brand-orange text-white"
                          : index < step
                            ? "border-white/30 bg-white/10 text-white"
                            : "border-white/15 text-slate-500"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span className={`text-[14px] ${active ? "font-semibold text-white" : "text-slate-400"}`}>
                      {label}
                    </span>
                  </li>
                );
              })}
            </ol>

            <ul className="mt-8 space-y-3">
              {AI_CAPABILITIES.map((cap) => (
                <li key={cap.id} className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                  <p className="text-[13px] font-semibold text-white">{cap.name}</p>
                  <p className="mt-1 text-[12px] leading-relaxed text-slate-400">{cap.description}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#061525]">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
                <div>
                  <p className="text-[12px] font-semibold text-white">Vertex AI · Project workspace</p>
                  <p className="text-[11px] text-slate-500">Grounded in live project data</p>
                </div>
                <span className="rounded-sm border border-brand-orange/30 bg-brand-orange/10 px-2 py-1 text-[10px] font-semibold text-brand-orange">
                  Confirmation required
                </span>
              </div>
              <div className="space-y-3 border-b border-white/10 p-4 sm:p-5">
                <div className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-[13px] text-slate-200">
                  Which projects show elevated schedule or cost risk?
                </div>
                <div className="rounded-lg border border-brand-orange/20 bg-brand-orange/5 px-3 py-2.5 text-[13px] text-slate-100">
                  Review recommended insights from live project data — confirm before any write.
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <FeatureProductPreview preview="ai" dark className="min-h-[240px] border-white/10 bg-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
