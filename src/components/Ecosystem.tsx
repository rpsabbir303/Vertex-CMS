import { BrowserFrame, AppTopBar, Kpi } from "./mockups/ProductMockups";
import { BlueprintTexture } from "./Photo";
import { Reveal } from "./Reveal";

const MODULES = [
  "Projects",
  "Preconstruction",
  "Financials",
  "Accounting",
  "Procurement",
  "Scheduling",
  "Field Operations",
  "Safety",
  "Documents",
  "Workforce",
  "AI",
  "Reports",
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative overflow-hidden bg-brand-dark py-20 sm:py-28">
      <BlueprintTexture />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-blue/20 blur-3xl" aria-hidden="true" />

      <div className="container-wide relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.85rem]">
              One Platform.
              <br />
              Every Part of the Job.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-300">
              VertexBuild sits at the center — connecting modules around a shared company and project
              record.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mx-auto mt-14 max-w-5xl">
            <div className="absolute inset-0 hidden lg:block" aria-hidden="true">
              <svg className="h-full w-full text-brand-blue/25" viewBox="0 0 100 100" preserveAspectRatio="none">
                {MODULES.map((_, i) => {
                  const a = (i / MODULES.length) * Math.PI * 2 - Math.PI / 2;
                  return (
                    <line
                      key={i}
                      x1="50"
                      y1="50"
                      x2={50 + Math.cos(a) * 42}
                      y2={50 + Math.sin(a) * 38}
                      stroke="currentColor"
                      strokeWidth="0.3"
                      strokeDasharray="1.5 1.5"
                    />
                  );
                })}
              </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-3xl">
              <BrowserFrame url="app.vertexcms.com / platform" dark={false} className="shadow-lift">
                <AppTopBar project="VertexBuild Platform" />
                <div className="grid grid-cols-3 gap-2 bg-brand-soft/40 p-4 sm:grid-cols-4">
                  {MODULES.map((m) => (
                    <div key={m} className="rounded-xl border border-slate-200 bg-white px-2 py-3 text-center text-[10px] font-semibold text-brand-navy sm:text-[11px]">
                      {m}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2 border-t border-slate-100 p-4">
                  <Kpi label="Modules connected" value="12+" tone="blue" />
                  <Kpi label="Shared record" value="Live" tone="green" />
                  <Kpi label="Operating layer" value="One" />
                </div>
              </BrowserFrame>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2 lg:hidden">
              {MODULES.map((m) => (
                <span key={m} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] text-slate-200">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
