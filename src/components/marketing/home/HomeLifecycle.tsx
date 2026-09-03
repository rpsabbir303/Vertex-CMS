"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const STAGES = [
  {
    id: "precon",
    label: "Preconstruction",
    modules: ["CRM", "Estimating", "Takeoff"],
  },
  {
    id: "estimate",
    label: "Estimate",
    modules: ["Quantity Takeoff", "Estimating", "Bid Leveling"],
  },
  {
    id: "bid",
    label: "Bid",
    modules: ["Bidding", "Vendor Quotes", "Award"],
  },
  {
    id: "contract",
    label: "Contract",
    modules: ["Contracts", "SOV", "Kickoff"],
  },
  {
    id: "build",
    label: "Build",
    modules: ["Projects", "Scheduling", "RFIs", "Daily Logs"],
  },
  {
    id: "control",
    label: "Control",
    modules: ["Budget", "Job Cost", "Billing", "WIP"],
  },
  {
    id: "closeout",
    label: "Closeout",
    modules: ["Punch", "Documents", "As-builts"],
  },
  {
    id: "warranty",
    label: "Warranty",
    modules: ["Warranty", "Owner Portal", "Support"],
  },
] as const;

export function HomeLifecycle() {
  const [active, setActive] = useState(0);
  const stage = STAGES[active];

  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#050d18] py-20 sm:py-24 lg:py-32">
      <div className="site-shell">
        <Reveal className="max-w-3xl">
          <p className="home-label">Lifecycle</p>
          <h2 className="home-display mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-[3.5rem]">
            From preconstruction
            <span className="block text-slate-300">to closeout.</span>
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {STAGES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(i)}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-[12px] font-semibold transition ${
                  i === active
                    ? "border-brand-orange/40 bg-brand-orange/15 text-brand-orange"
                    : "border-white/10 bg-white/[0.03] text-slate-400 hover:text-white"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="home-panel mt-6 grid gap-6 p-5 sm:p-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-blue">Active stage</p>
              <p className="mt-2 font-display text-3xl font-bold text-white">{stage.label}</p>
              <p className="mt-3 text-[14px] text-slate-400">
                Product modules that activate at this stage of the construction operating system.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {stage.modules.map((m) => (
                <div
                  key={m}
                  className="rounded-xl border border-brand-blue/20 bg-brand-blue/10 px-3 py-4 text-center text-[13px] font-semibold text-white"
                >
                  {m}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
