"use client";

import { useId, useState } from "react";
import { Reveal } from "@/components/Reveal";

const FAQS = [
  {
    q: "What is VertexBuild?",
    a: "VertexBuild is a unified construction management platform that connects projects, financials, field operations, compliance, workforce, and AI intelligence in one system.",
  },
  {
    q: "Who is VertexBuild for?",
    a: "VertexBuild is built for construction operators — including general contractors and subcontractors — across commercial, residential, and civil project types.",
  },
  {
    q: "Does VertexBuild include financial management?",
    a: "Yes. Native financial capabilities include budget and job cost, billing, AIA pay applications, WIP, cash flow, and connected accounting workflows.",
  },
  {
    q: "Does VertexBuild support mobile field operations?",
    a: "Yes. Field teams can capture daily logs, photos, RFIs, punch, safety, and time from mobile workflows designed for the jobsite.",
  },
  {
    q: "Does VertexBuild work offline?",
    a: "Yes. Field capture can continue offline, queue work, and sync automatically when connectivity returns.",
  },
  {
    q: "How does Vertex AI work?",
    a: "Vertex AI is grounded in live project data to answer questions, surface risks, summarize documents, and recommend actions inside the operating system.",
  },
  {
    q: "Does AI require human confirmation?",
    a: "Yes. AI recommendations that write or take action require human confirmation before execution.",
  },
  {
    q: "What integrations are available?",
    a: "Integrations are documented on the Integrations page. Explore available connections there as the catalog expands.",
  },
  {
    q: "How does pricing work?",
    a: "Pricing details are available on the Pricing page, including options to book a demo or start a free trial.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. You can start a free trial from the website, or book a demo with the Vertex team.",
  },
] as const;

export function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className="relative overflow-hidden border-b border-white/5 py-20 sm:py-24 lg:py-28">
      <div className="site-shell max-w-3xl">
        <Reveal>
          <p className="home-label">FAQ</p>
          <h2 className="home-display mt-4 text-4xl sm:text-5xl">Questions, answered.</h2>
        </Reveal>

        <Reveal delay={80} className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="text-[15px] font-semibold text-white sm:text-base">{item.q}</span>
                  <span className="text-brand-orange" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p id={panelId} className="pb-5 text-[15px] leading-relaxed text-slate-400">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
