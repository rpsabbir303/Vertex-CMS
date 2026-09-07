"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { aiGovernance } from "@/lib/marketing/security/content";

export function SecurityAIGovernance() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setStep(aiGovernance.flow.length - 1);
      return;
    }
    const id = window.setInterval(() => {
      setStep((prev) => (prev + 1) % aiGovernance.flow.length);
    }, 1600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">AI governance</p>
            <h2 className="display-title mt-3 max-w-md text-3xl sm:text-4xl">{aiGovernance.title}</h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-brand-muted sm:text-base">
              {aiGovernance.supporting}
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {aiGovernance.points.map((point) => (
                <li key={point.label} className="rounded-lg border border-brand-line bg-[#FAFBFD] p-4">
                  <p className="text-[13px] font-semibold text-brand-navy">{point.label}</p>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-brand-muted">{point.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={90}>
            <div className="rounded-xl border border-brand-line bg-[#FAFBFD] p-5 sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                Controlled AI action flow
              </p>
              <ol className="mt-6 space-y-3">
                {aiGovernance.flow.map((item, index) => {
                  const active = index === step;
                  return (
                    <li key={item.label} className="flex items-stretch gap-3">
                      <div className="flex w-6 flex-col items-center">
                        <span
                          className={`mt-3 h-2.5 w-2.5 rounded-full ${
                            active ? "bg-brand-orange" : index < step ? "bg-brand-navy" : "bg-brand-line"
                          }`}
                          aria-hidden="true"
                        />
                        {index < aiGovernance.flow.length - 1 && (
                          <span className="mt-1 w-px flex-1 bg-brand-line" aria-hidden="true" />
                        )}
                      </div>
                      <div
                        className={`flex-1 rounded-lg border px-4 py-3 transition ${
                          active
                            ? "border-brand-orange/35 bg-white shadow-soft"
                            : "border-brand-line bg-white/80"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-[14px] font-semibold text-brand-navy">{item.label}</p>
                          {index < aiGovernance.flow.length - 1 && (
                            <span className="hidden text-[11px] text-brand-muted sm:inline">→</span>
                          )}
                        </div>
                        <p className="mt-1 text-[12px] text-brand-muted">{item.detail}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
