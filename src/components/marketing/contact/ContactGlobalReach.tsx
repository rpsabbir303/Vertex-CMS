"use client";

import { Reveal } from "@/components/Reveal";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import { ContactGlobalReachMap } from "./ContactGlobalReachMap";

export function ContactGlobalReach() {
  const { t } = useMarketing();
  const g = t.contact.globalReach;

  const flowSteps = [g.flow.project, g.flow.field, g.flow.financial, g.flow.team];

  return (
    <section
      className="border-t border-brand-line/60 bg-[#FAFBFD]"
      aria-labelledby="contact-global-reach-heading"
    >
      <div className="site-shell py-14 sm:py-16 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center lg:max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">{g.eyebrow}</p>
          <h2
            id="contact-global-reach-heading"
            className="display-title mt-4 text-2xl sm:text-3xl lg:text-[2.25rem]"
          >
            {g.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-brand-muted sm:text-base">
            {g.supporting}
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-10 sm:mt-12 lg:mt-14">
          <div className="relative">
            <ContactGlobalReachMap label={g.mapLabel} />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FAFBFD] to-transparent sm:h-20" />

            <div
              className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 px-2 text-[11px] font-medium uppercase tracking-[0.1em] text-brand-muted sm:mt-8 sm:gap-x-3 sm:text-[12px]"
              aria-hidden="true"
            >
              {flowSteps.map((step, i) => (
                <span key={step} className="flex items-center gap-x-2 sm:gap-x-3">
                  <span className="text-brand-navy/70">{step}</span>
                  {i < flowSteps.length - 1 ? (
                    <svg
                      viewBox="0 0 12 12"
                      className="hidden h-3 w-3 text-brand-blue/40 sm:block"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path d="M4 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : null}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
