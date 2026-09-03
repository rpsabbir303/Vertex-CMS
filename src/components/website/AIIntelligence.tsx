import { Reveal } from "@/components/Reveal";
import { AIChatMockup } from "./mockups/MarketingMockups";

export function AIIntelligence() {
  return (
    <section className="relative overflow-hidden bg-[#061525] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute left-1/4 top-10 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-brand-orange/10 blur-3xl" aria-hidden="true" />

      <div className="site-shell relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow text-brand-orange">AI Intelligence</p>
          <h2 className="display-title mt-4 text-3xl text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            Turn Project Data Into Better Decisions
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
            Use construction-specific AI to understand project status, process documents, surface
            risks, and help your team act before problems become expensive.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <AIChatMockup />
        </Reveal>
      </div>
    </section>
  );
}
