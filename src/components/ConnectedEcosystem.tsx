import {
  DocsUI,
  FinanceUI,
  HeroPortfolioDashboard,
  PhoneUI,
  ScheduleUI,
} from "./mockups/ProductMockups";
import { Reveal } from "./Reveal";

export function ConnectedEcosystem() {
  return (
    <section id="ecosystem" className="overflow-hidden bg-brand-soft py-20 sm:py-28">
      <div className="container-wide">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">One System</p>
            <h2 className="headline mt-3">Every part of the job. Connected.</h2>
            <p className="copy mx-auto mt-4 text-center">
              Projects, financials, field, safety, documents, scheduling, workforce, and AI share one
              product language.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="relative mx-auto mt-14 max-w-6xl">
            <div className="relative hidden min-h-[640px] lg:block">
              <div className="absolute left-1/2 top-1/2 z-20 w-[min(100%,560px)] -translate-x-1/2 -translate-y-1/2 [&_.absolute]:!hidden">
                <div className="rounded-2xl shadow-lift ring-4 ring-white">
                  <HeroPortfolioDashboard />
                </div>
                <p className="mt-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-blue">
                  Vertex CMS · Command Center
                </p>
              </div>

              <div className="absolute left-0 top-8 w-[42%] opacity-90 shadow-soft [&_.absolute]:!hidden">
                <div className="origin-top-left scale-[0.72]">
                  <ScheduleUI />
                </div>
                <span className="mt-2 inline-block rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-brand-navy shadow-sm">
                  Scheduling
                </span>
              </div>

              <div className="absolute right-0 top-6 w-[40%] opacity-90 shadow-soft">
                <div className="origin-top-right scale-[0.7]">
                  <FinanceUI />
                </div>
                <span className="mt-2 ml-auto block w-fit rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-brand-navy shadow-sm">
                  Financials
                </span>
              </div>

              <div className="absolute bottom-6 left-2 flex items-end gap-2">
                <PhoneUI variant="home" />
                <span className="mb-4 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-brand-navy shadow-sm">
                  Field
                </span>
              </div>

              <div className="absolute bottom-4 right-0 w-[38%] opacity-90 shadow-soft">
                <div className="origin-bottom-right scale-[0.68]">
                  <DocsUI />
                </div>
                <span className="mt-2 ml-auto block w-fit rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-brand-navy shadow-sm">
                  Documents
                </span>
              </div>

              <div className="absolute left-[28%] top-[8%] rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-brand-orange shadow-soft">
                AI
              </div>
              <div className="absolute right-[30%] bottom-[18%] rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-brand-blue shadow-soft">
                Safety
              </div>
              <div className="absolute left-[22%] bottom-[22%] rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-brand-navy shadow-soft">
                Workforce
              </div>
            </div>

            <div className="space-y-4 lg:hidden">
              <div className="overflow-x-auto [&_.absolute]:!hidden">
                <div className="min-w-[520px]">
                  <HeroPortfolioDashboard />
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {["Projects", "Financials", "Field", "Safety", "Documents", "Scheduling", "Workforce", "AI"].map(
                  (l) => (
                    <span
                      key={l}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-brand-navy"
                    >
                      {l}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
