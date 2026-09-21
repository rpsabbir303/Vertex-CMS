"use client";

import { useState } from "react";
import { ChevronDown, VertexLogo } from "./Icons";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Plan", href: "#plan" },
      { label: "Control", href: "#control" },
      { label: "Build", href: "#build" },
      { label: "Protect", href: "#protect" },
      { label: "Connect", href: "#connect" },
      { label: "Understand", href: "#understand" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "All Features", href: "/features" },
      { label: "Project Management", href: "/features/project-management" },
      { label: "Financials", href: "/features/contracts-financials" },
      { label: "Field Operations", href: "/features/field-operations" },
      { label: "AI Intelligence", href: "/features/ai-intelligence" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#footer" },
      { label: "Contact", href: "#demo" },
      { label: "Careers", href: "#footer" },
    ],
  },
];

export function Footer() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <footer id="footer" className="bg-[#061525] text-slate-400">
      <div className="site-shell py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_3fr]">
          <div>
            <VertexLogo light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Construction management software for planning, financials, field operations, compliance,
              collaboration, and intelligence.
            </p>
          </div>

          <div className="hidden gap-8 sm:grid sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white">{col.title}</p>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm transition hover:text-brand-orange">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-1 sm:hidden">
            {COLUMNS.map((col) => {
              const isOpen = open === col.title;
              return (
                <div key={col.title} className="border-b border-white/10">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 text-sm font-semibold text-white"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : col.title)}
                  >
                    {col.title}
                    <ChevronDown className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <ul className="space-y-2 pb-3">
                      {col.links.map((link) => (
                        <li key={link.label}>
                          <a href={link.href} className="block text-sm hover:text-brand-orange">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div id="pricing" className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-white">Pricing</h2>
              <p className="mt-1 max-w-xl text-sm">
                Starter, Pro, Premium, and Enterprise. Contact us for packaging and free trial details.
              </p>
            </div>
            <a href="#demo" className="btn-primary shrink-0 self-start">
              Book a Demo
            </a>
          </div>
        </div>

        <div id="demo" className="sr-only">
          Book a Demo
        </div>
        <div id="login" className="sr-only">
          Login
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs">© Vertex Software · VertexBuild</p>
          <div className="flex gap-4 text-xs">
            <a href="#footer" className="hover:text-brand-orange">
              Privacy
            </a>
            <a href="#footer" className="hover:text-brand-orange">
              Terms
            </a>
            <a href="#footer" className="hover:text-brand-orange">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
