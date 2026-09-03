"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CheckIcon } from "./Icons";
import {
  AIConsole,
  DocsUI,
  FinanceUI,
  HeroPortfolioDashboard,
  PhoneUI,
  SafetyUI,
} from "./mockups/ProductMockups";
import { Reveal } from "./Reveal";

type CapId = "projects" | "financials" | "field" | "safety" | "documents" | "ai";

const CAPABILITIES: {
  id: CapId;
  label: string;
  title: string;
  copy: string;
  points: string[];
  href: string;
  linkLabel: string;
}[] = [
  {
    id: "projects",
    label: "Projects",
    title: "Project Management",
    copy: "Manage every project from one connected workspace.",
    points: ["Project portfolio", "Project dashboard", "Tasks & workflows", "Cost visibility"],
    href: "/features/project-management",
    linkLabel: "Explore Project Management",
  },
  {
    id: "financials",
    label: "Financials",
    title: "Financial Control",
    copy: "Keep budgets, contracts, costs, and cash flow connected.",
    points: ["Contracts & SOV", "Change orders", "Pay applications", "Budget vs actual"],
    href: "/features/contracts-financials",
    linkLabel: "Explore Financials",
  },
  {
    id: "field",
    label: "Field",
    title: "Field Operations",
    copy: "Keep the field connected with real-time project information.",
    points: ["Daily logs", "GPS photos", "Tasks & RFIs", "Workforce updates"],
    href: "/features/field-operations",
    linkLabel: "Explore Field Operations",
  },
  {
    id: "safety",
    label: "Safety",
    title: "Safety & Compliance",
    copy: "Make safety and compliance visible across every project.",
    points: ["Safety score", "Inspections", "Incidents", "JHA / JSA"],
    href: "/features/safety-compliance",
    linkLabel: "Explore Safety & Compliance",
  },
  {
    id: "documents",
    label: "Documents",
    title: "Documents & Drawings",
    copy: "Keep every drawing, document, and project record organized.",
    points: ["Drawings & revisions", "Markup", "Search", "Version history"],
    href: "/features/documents-project-information",
    linkLabel: "Explore Documents",
  },
  {
    id: "ai",
    label: "AI",
    title: "AI Intelligence",
    copy: "Turn construction data into faster, smarter decisions.",
    points: ["AI Assistant", "Project insights", "Risk alerts", "Document intelligence"],
    href: "/features/ai-intelligence",
    linkLabel: "Explore AI Intelligence",
  },
];

function CapabilityMockup({ id }: { id: CapId }) {
  switch (id) {
    case "projects":
      return (
        <div className="overflow-hidden [&_.absolute]:hidden">
          <HeroPortfolioDashboard />
        </div>
      );
    case "financials":
      return <FinanceUI />;
    case "field":
      return (
        <div className="flex flex-wrap items-end justify-center gap-4 rounded-2xl border border-slate-200 bg-gradient-to-b from-[#F5F8FC] to-white p-6 sm:p-8 shadow-card">
          <PhoneUI variant="home" />
          <PhoneUI variant="log" raised />
          <PhoneUI variant="capture" />
        </div>
      );
    case "safety":
      return <SafetyUI />;
    case "documents":
      return <DocsUI />;
    case "ai":
      return (
        <div className="overflow-hidden rounded-2xl bg-[#061A30] shadow-card">
          <AIConsole />
        </div>
      );
    default:
      return <HeroPortfolioDashboard />;
  }
}

export function ProductProof() {
  const [active, setActive] = useState<CapId>("projects");
  const current = CAPABILITIES.find((c) => c.id === active) ?? CAPABILITIES[0];

  return (
    <section id="proof" className="relative overflow-hidden border-y border-white/5 bg-brand-charcoal py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,110,245,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(20,110,245,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-blue/15 blur-3xl" aria-hidden="true" />

      <div className="container-wide relative">
        {/* Intro */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-orange">
              One Connected Platform
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Every part of the job.
              <br />
              Connected in one system.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg">
              From preconstruction and project management to financials, field operations, safety,
              documents, and AI intelligence — everything works together.
            </p>
          </div>
        </Reveal>

        {/* Capability nav */}
        <Reveal delay={60}>
          <div
            className="mx-auto mt-10 flex max-w-3xl gap-1 overflow-x-auto rounded-2xl border border-white/10 bg-brand-panel/80 p-1.5 backdrop-blur"
            role="tablist"
            aria-label="Platform capabilities"
          >
            {CAPABILITIES.map((cap) => {
              const isActive = cap.id === active;
              return (
                <button
                  key={cap.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(cap.id)}
                  className={`relative shrink-0 flex-1 rounded-xl px-3 py-2.5 text-sm font-semibold transition sm:px-4 ${
                    isActive
                      ? "bg-brand-orange text-white shadow-orange"
                      : "text-brand-muted hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {cap.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-0.5 mx-auto hidden h-0.5 rounded-full bg-white/40 sm:block" />
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Main showcase */}
        <Reveal delay={100}>
          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10">
            {/* Product mockup */}
            <div className="relative min-h-[320px]">
              <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-brand-blue/10 blur-2xl" aria-hidden="true" />
              <div
                key={active}
                className="relative animate-fade-up overflow-hidden rounded-2xl"
              >
                <CapabilityMockup id={active} />
              </div>
            </div>

            {/* Context panel */}
            <aside className="rounded-3xl border border-white/10 bg-brand-panel p-6 sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
                {current.label}
              </p>
              <h3 className="font-display mt-2 text-2xl font-bold tracking-tight text-white">
                {current.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">{current.copy}</p>

              <ul className="mt-6 space-y-3">
                {current.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-white">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue/15 text-brand-blue">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <Link
                href={current.href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange transition hover:gap-3"
              >
                {current.linkLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </aside>
          </div>
        </Reveal>

        {/* Supporting line under mockup on mobile already in panel; desktop hint */}
        <p className="mt-8 text-center text-xs text-brand-muted">
          Switch modules to see how Projects, Financials, Field, Safety, Documents, and AI share one
          product language.
        </p>
      </div>
    </section>
  );
}
