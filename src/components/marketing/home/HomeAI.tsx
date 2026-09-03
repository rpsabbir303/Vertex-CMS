"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";

const RISKS = [
  { name: "Waterfront Tower", delta: "+8.4%", reason: "Forecast variance" },
  { name: "Bridgeway Plaza", delta: "+5.7%", reason: "Pending change orders" },
  { name: "Riverside Schools", delta: "+3.1%", reason: "Material cost acceleration" },
] as const;

export function HomeAI() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setStep(3);
      return;
    }
    const timers = [400, 1100, 1800].map((ms, i) => window.setTimeout(() => setStep(i + 1), ms));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-white/5 py-20 sm:py-24 lg:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[520px] -translate-x-1/2 rounded-full bg-brand-violet/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="site-shell relative grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <Reveal>
          <p className="home-label">AI & Intelligence</p>
          <h2 className="home-display mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-[3.25rem]">
            Your construction data
            <span className="block text-slate-300">finally talks back.</span>
          </h2>
          <p className="home-body mt-5 max-w-md">
            Ask questions, get insights, draft documents, and detect risks — with human confirmation before action.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="home-panel overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
              <div>
                <p className="text-[12px] font-semibold text-white">Vertex AI · Project Workspace</p>
                <p className="text-[11px] text-slate-500">Grounded in live project data</p>
              </div>
              <span className="rounded-full border border-brand-orange/30 bg-brand-orange/10 px-2.5 py-1 text-[10px] font-semibold text-brand-orange">
                Human confirmation required
              </span>
            </div>

            <div className="space-y-4 p-4 sm:p-5">
              <div className="max-w-[92%] rounded-2xl rounded-tl-md bg-white/10 px-4 py-3 text-[13px] text-slate-100">
                Which projects are at risk of exceeding budget?
              </div>

              {step >= 1 && (
                <div className="ml-auto max-w-[96%] rounded-2xl rounded-tr-md border border-brand-orange/25 bg-[#06111f] px-4 py-4">
                  <p className="text-[13px] text-slate-100">I found 3 projects with elevated cost-overrun risk.</p>
                  {step >= 2 && (
                    <div className="mt-4 space-y-2">
                      {RISKS.map((r) => (
                        <div
                          key={r.name}
                          className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5"
                        >
                          <div>
                            <p className="text-[12px] font-semibold text-white">{r.name}</p>
                            <p className="text-[11px] text-slate-500">{r.reason}</p>
                          </div>
                          <span className="text-[12px] font-bold text-brand-orange">{r.delta}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {step >= 3 && (
                    <div className="mt-4 rounded-xl border border-brand-blue/25 bg-brand-blue/10 p-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-blue">
                        AI Recommendation
                      </p>
                      <p className="mt-1 text-[13px] text-slate-100">Review change order #18 before approval.</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <button type="button" className="rounded-md bg-white/10 px-3 py-2 text-[11px] font-semibold text-white">
                          View Details
                        </button>
                        <button type="button" className="rounded-md bg-brand-orange px-3 py-2 text-[11px] font-semibold text-white">
                          Confirm
                        </button>
                        <button
                          type="button"
                          className="rounded-md border border-white/15 px-3 py-2 text-[11px] font-semibold text-slate-300"
                        >
                          Request Changes
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
