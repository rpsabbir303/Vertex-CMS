"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import {
  AIConsole,
  FinanceUI,
  PhoneUI,
  PortfolioAnalytics,
  ProjectWorkspace,
  SafetyUI,
  ScheduleUI,
} from "@/components/mockups/ProductMockups";

const TABS = [
  { id: "projects", label: "Projects", node: <ProjectWorkspace /> },
  { id: "financials", label: "Financials", node: <FinanceUI /> },
  { id: "field", label: "Field", node: <ScheduleUI /> },
  { id: "safety", label: "Safety", node: <SafetyUI /> },
  { id: "ai", label: "AI Assistant", node: <div className="bg-brand-navy p-2"><AIConsole /></div> },
  { id: "reports", label: "Reports", node: <PortfolioAnalytics /> },
  { id: "mobile", label: "Mobile", node: <div className="flex justify-center bg-brand-soft/40 py-8"><PhoneUI variant="home" /></div> },
] as const;

export function HomeProductTour() {
  const [tab, setTab] = useState(0);

  return (
    <section id="platform" className="relative overflow-hidden border-b border-white/5 bg-[#050d18] py-20 sm:py-24 lg:py-32">
      <div className="site-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="home-label">Product Tour</p>
          <h2 className="home-display mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-[3.5rem]">
            See Vertex CMS in action.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div
            className="flex gap-1 overflow-x-auto rounded-xl border border-white/10 bg-white/[0.03] p-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Product tour"
          >
            {TABS.map((t, i) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={i === tab}
                onClick={() => setTab(i)}
                className={`shrink-0 rounded-lg px-3.5 py-2.5 text-[12px] font-semibold transition ${
                  i === tab ? "bg-white text-brand-navy" : "text-slate-400 hover:text-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_40px_80px_-36px_rgba(0,0,0,0.85)]"
          >
            {TABS[tab].node}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
