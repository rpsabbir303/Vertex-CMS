"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { processSteps } from "@/lib/website/tenantData";
import { useLanguage } from "./LanguageProvider";

export function Process() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(processSteps[0]?.id ?? "");

  return (
    <section className="section-spacing border-t border-brand-line bg-white">
      <div className="site-shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{t.process.eyebrow}</p>
          <h2 className="display-title mt-5 text-3xl sm:text-4xl lg:text-[3.5rem] lg:leading-[1.08]">
            {t.process.headline}
          </h2>
        </Reveal>

        <div className="mt-16 hidden lg:block lg:mt-20">
          <div className="relative">
            <div className="absolute left-0 right-0 top-10 h-px bg-brand-line" aria-hidden="true" />
            <ol className="grid grid-cols-5 gap-8">
              {processSteps.map((step, i) => {
                const data = t.process.steps[step.id];
                if (!data) return null;
                const isActive = activeStep === step.id;
                return (
                  <Reveal key={step.id} delay={i * 50}>
                    <li
                      className="group relative cursor-default pt-20"
                      onMouseEnter={() => setActiveStep(step.id)}
                    >
                      <span
                        className={`absolute left-0 top-5 flex h-10 w-10 items-center justify-center rounded-full border-2 font-display text-sm font-bold transition-all duration-300 ${
                          isActive
                            ? "border-brand-orange bg-brand-orange text-white"
                            : "border-brand-line bg-white text-brand-navy group-hover:border-brand-orange"
                        }`}
                      >
                        {step.number}
                      </span>
                      <h3 className="font-display text-lg font-bold text-brand-navy">{data.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-brand-muted">{data.description}</p>
                    </li>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </div>

        <ol className="mt-12 space-y-0 lg:hidden">
          {processSteps.map((step, i) => {
            const data = t.process.steps[step.id];
            if (!data) return null;
            const isLast = i === processSteps.length - 1;
            return (
              <Reveal key={step.id} delay={i * 50}>
                <li className="relative flex gap-6 pb-12">
                  {!isLast && (
                    <span className="absolute left-5 top-12 h-[calc(100%-1rem)] w-px bg-brand-line" aria-hidden="true" />
                  )}
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand-orange bg-white font-display text-sm font-bold text-brand-navy">
                    {step.number}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-display text-lg font-bold text-brand-navy">{data.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-muted">{data.description}</p>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
