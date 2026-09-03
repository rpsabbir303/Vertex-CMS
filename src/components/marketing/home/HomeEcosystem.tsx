"use client";

import { Reveal } from "@/components/Reveal";

const GROUPS = [
  {
    title: "Preconstruction",
    accent: "text-brand-cyan border-brand-cyan/30",
    items: ["CRM", "Estimating", "Takeoff", "Bidding"],
    pos: "lg:col-start-1 lg:row-start-1",
  },
  {
    title: "Project Management",
    accent: "text-brand-blue border-brand-blue/30",
    items: ["Projects", "Scheduling", "Documents", "RFIs", "Submittals"],
    pos: "lg:col-start-3 lg:row-start-1",
  },
  {
    title: "Financial Management",
    accent: "text-brand-orange border-brand-orange/30",
    items: ["Budget", "Job Cost", "Accounting", "Billing", "WIP", "Cash Flow"],
    pos: "lg:col-start-1 lg:row-start-3",
  },
  {
    title: "Field Operations",
    accent: "text-brand-teal border-brand-teal/30",
    items: ["Daily Logs", "Photos", "Punch", "T&M"],
    pos: "lg:col-start-3 lg:row-start-3",
  },
  {
    title: "Compliance & Safety",
    accent: "text-emerald-300 border-emerald-400/30",
    items: ["Safety", "Inspections", "Permits", "Compliance"],
    pos: "lg:col-start-1 lg:row-start-2",
  },
  {
    title: "AI & Intelligence",
    accent: "text-brand-violet border-brand-violet/30",
    items: ["AI Assistant", "Insights", "Automation", "Predictive Risk"],
    pos: "lg:col-start-3 lg:row-start-2",
  },
] as const;

export function HomeEcosystem() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 py-20 sm:py-24 lg:py-32">
      <div className="home-grid pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="site-shell relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="home-label">Platform</p>
          <h2 className="home-display mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-[3.5rem]">
            Everything connects.
            <span className="block text-slate-300">Nothing gets lost.</span>
          </h2>
        </Reveal>

        <Reveal delay={100} className="relative mt-14">
          <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
            <svg className="h-full w-full">
              <line x1="50%" y1="50%" x2="18%" y2="18%" className="home-pulse-line stroke-brand-blue/35" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="82%" y2="18%" className="home-pulse-line stroke-brand-blue/35" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="18%" y2="50%" className="home-pulse-line stroke-brand-blue/35" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="82%" y2="50%" className="home-pulse-line stroke-brand-blue/35" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="18%" y2="82%" className="home-pulse-line stroke-brand-orange/30" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="82%" y2="82%" className="home-pulse-line stroke-brand-orange/30" strokeWidth="1" />
            </svg>
          </div>

          <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-3 lg:gap-5">
            {GROUPS.map((g) => (
              <div key={g.title} className={`home-panel p-4 sm:p-5 ${g.pos}`}>
                <p className={`text-[11px] font-bold uppercase tracking-[0.14em] ${g.accent.split(" ")[0]}`}>{g.title}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-md border bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-300 ${g.accent.split(" ").slice(1).join(" ")}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className="home-panel relative z-10 flex flex-col items-center justify-center p-6 text-center lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-3 rounded-xl border border-brand-blue/20 bg-brand-blue/5" aria-hidden="true" />
              <p className="relative font-display text-2xl font-bold text-white sm:text-3xl">Vertex CMS</p>
              <p className="relative mt-2 text-[12px] uppercase tracking-[0.16em] text-slate-400">Operating system</p>
              <div className="relative mt-4 h-1.5 w-24 overflow-hidden rounded-full bg-white/10">
                <div className="home-sync-bar h-full w-full bg-gradient-to-r from-brand-blue to-brand-orange" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
