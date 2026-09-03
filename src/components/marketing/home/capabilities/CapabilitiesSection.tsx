"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import { CapabilityNav } from "./CapabilityNav";
import {
  AIIntelligencePreview,
  CloseoutPreview,
  FieldOperationsPreview,
  FinancialPreview,
  PreconstructionPreview,
  ProjectManagementPreview,
} from "./CapabilityPreviews";
import { AUTOPLAY_MS, CAPABILITIES, RESUME_MS, type CapabilityId } from "./data";

const PREVIEWS: Record<CapabilityId, React.ReactNode> = {
  preconstruction: <PreconstructionPreview />,
  "project-management": <ProjectManagementPreview />,
  "financial-control": <FinancialPreview />,
  "field-operations": <FieldOperationsPreview />,
  "ai-intelligence": <AIIntelligencePreview />,
  closeout: <CloseoutPreview />,
};

export function CapabilitiesSection() {
  const [activeId, setActiveId] = useState<CapabilityId>("preconstruction");
  const [visible, setVisible] = useState(true);
  const userPausedUntil = useRef(0);
  const offscreenPaused = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);

  const select = useCallback((id: CapabilityId, fromUser = true) => {
    setVisible(false);
    window.setTimeout(() => {
      setActiveId(id);
      setVisible(true);
    }, 180);
    if (fromUser) {
      userPausedUntil.current = Date.now() + RESUME_MS;
    }
  }, []);

  // Autoplay
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const id = window.setInterval(() => {
      if (offscreenPaused.current) return;
      if (Date.now() < userPausedUntil.current) return;
      const idx = CAPABILITIES.findIndex((c) => c.id === activeId);
      const next = CAPABILITIES[(idx + 1) % CAPABILITIES.length];
      select(next.id, false);
    }, AUTOPLAY_MS);

    return () => clearInterval(id);
  }, [activeId, select]);

  // Pause when section off-screen
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        offscreenPaused.current = !entry.isIntersecting;
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const active = CAPABILITIES.find((c) => c.id === activeId) ?? CAPABILITIES[0];
  const activeIndex = CAPABILITIES.findIndex((c) => c.id === activeId);

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="relative overflow-hidden border-b border-white/5 py-20 sm:py-24 lg:py-32"
      aria-labelledby="capabilities-heading"
    >
      <div className="home-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-20 top-24 h-[360px] w-[360px] rounded-full bg-brand-blue/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="site-shell relative">
        <Reveal className="max-w-2xl">
          <p className="home-label">Capabilities</p>
          <h2 id="capabilities-heading" className="home-display mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-[3.25rem]">
            One platform.
            <span className="block text-slate-300">Every part of construction.</span>
          </h2>
          <p className="home-body mt-5 max-w-xl">
            From preconstruction to field operations and financial control, Vertex CMS connects the workflows that keep
            your business moving.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-12 lg:mt-16">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)] lg:gap-10 xl:gap-12">
            {/* Left nav */}
            <div>
              <CapabilityNav activeId={activeId} onSelect={(id) => select(id, true)} />

              {/* Mobile selector chips */}
              <div className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {CAPABILITIES.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => select(c.id, true)}
                    className={`shrink-0 rounded-full border px-3 py-2 text-[11px] font-semibold ${
                      c.id === activeId
                        ? "border-brand-orange/40 bg-brand-orange/15 text-brand-orange"
                        : "border-white/10 text-slate-500"
                    }`}
                  >
                    {c.number} {c.title}
                  </button>
                ))}
              </div>

              <div className="mt-8 hidden lg:block">
                <Link href={ROUTES.features} className="btn-home-primary">
                  Explore All Features
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="mt-3 text-[12px] text-slate-500">{active.navHint}</p>
              </div>
            </div>

            {/* Right product preview */}
            <div className="relative min-w-0">
              {/* Subtle connection line from nav to product */}
              <svg
                className="pointer-events-none absolute -left-8 top-0 hidden h-full w-8 lg:block"
                aria-hidden="true"
              >
                <path
                  d={`M 32 ${40 + activeIndex * 58} C 16 ${40 + activeIndex * 58}, 16 120, 0 160`}
                  fill="none"
                  stroke="rgba(255,106,0,0.35)"
                  strokeWidth="1.5"
                  className="transition-all duration-500 ease-out"
                />
              </svg>

              <div
                id={`capability-preview-${activeId}`}
                role="tabpanel"
                aria-labelledby={`capability-tab-${activeId}`}
                className={`transition-all duration-500 ease-out ${
                  visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
              >
                <div className="relative">
                  <div
                    className="pointer-events-none absolute -inset-3 rounded-[1.75rem] bg-brand-blue/10 blur-2xl"
                    aria-hidden="true"
                  />
                  <div className="relative">{PREVIEWS[activeId]}</div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {active.story} · {active.title}
                </p>
                <div className="flex gap-1.5" aria-hidden="true">
                  {CAPABILITIES.map((c) => (
                    <span
                      key={c.id}
                      className={`h-1.5 w-1.5 rounded-full transition ${
                        c.id === activeId ? "bg-brand-orange" : "bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-6 lg:hidden">
                <Link href={CTAS.exploreFeatures.href} className="btn-home-primary w-full sm:w-auto">
                  Explore All Features
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
