"use client";

import { IntegrationsSectionBackdrop } from "./backgrounds/IntegrationsSectionBackdrop";
import { IntegrationsSection } from "./IntegrationsSection";
import { INTEGRATIONS_PAGE } from "@/lib/marketing/integrations/data";

export function IntegrationsHowItWorksSection() {
  const { howItWorks } = INTEGRATIONS_PAGE;
  const steps = howItWorks.steps;

  return (
    <section className="int-section-shell int-bg-flow border-b border-brand-line">
      <IntegrationsSectionBackdrop variant="flow" />
      <div className="int-section-content site-shell section-spacing">
        <IntegrationsSection>
          <p className="int-eyebrow text-brand-orange">{howItWorks.eyebrow}</p>
          <h2 className="int-display-title mt-3 text-3xl text-brand-navy">{howItWorks.headline}</h2>
        </IntegrationsSection>

        <ol className="relative mt-12 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="absolute left-[27px] top-0 hidden h-full w-px bg-brand-line lg:hidden" aria-hidden="true" />
          <div
            className="absolute left-[calc(16.666%+28px)] right-[calc(16.666%+28px)] top-7 hidden h-px bg-gradient-to-r from-brand-line via-brand-blue/30 to-brand-line lg:block"
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <li
              key={step.step}
              className="relative list-none border-l border-brand-line pl-10 pb-10 last:pb-0 lg:border-l-0 lg:pl-0 lg:pb-0"
            >
              <IntegrationsSection delayMs={index * 50}>
                <span className="absolute left-0 top-0 flex h-14 w-14 -translate-x-1/2 items-center justify-center border border-brand-navy/15 bg-white font-sans text-[13px] font-semibold text-brand-navy lg:relative lg:translate-x-0">
                  {step.step}
                </span>
                {index < steps.length - 1 && (
                  <span
                    className="absolute left-0 top-14 hidden h-[calc(100%-3.5rem)] border-l border-dashed border-brand-line lg:hidden"
                    aria-hidden="true"
                  />
                )}
                <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-brand-navy lg:mt-5">{step.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-brand-muted">{step.body}</p>
              </IntegrationsSection>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
