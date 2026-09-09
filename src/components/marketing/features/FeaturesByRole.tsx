"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { TENANT_MODULES } from "@/lib/marketing/features/content";
import { featuresLandingRoles } from "@/lib/marketing/features/landing";
import { FeatureProductPreview } from "./FeatureProductPreview";

export function FeaturesByRole() {
  const [activeId, setActiveId] = useState(featuresLandingRoles.roles[0].id);
  const active = featuresLandingRoles.roles.find((r) => r.id === activeId) ?? featuresLandingRoles.roles[0];
  const modules = TENANT_MODULES.filter((m) => active.relevantModules.includes(m.code));

  return (
    <section id="features-roles" className="scroll-mt-28 border-b border-brand-line bg-[#FAFBFD]">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{featuresLandingRoles.eyebrow}</p>
          <h2 className="display-title mt-3 text-3xl sm:text-4xl">{featuresLandingRoles.headline}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{featuresLandingRoles.supporting}</p>
          <p className="mt-2 text-[12px] text-brand-muted">
            Relevant workflows by role — not exclusive permissions.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuresLandingRoles.roles.map((role) => {
            const selected = role.id === active.id;
            return (
              <button
                key={role.id}
                type="button"
                onClick={() => setActiveId(role.id)}
                aria-pressed={selected}
                className={
                  "rounded-xl border px-4 py-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/35 " +
                  (selected
                    ? "border-brand-orange/40 bg-white shadow-soft ring-1 ring-brand-orange/15"
                    : "border-brand-line bg-white/80 hover:border-brand-navy/20 hover:bg-white")
                }
              >
                <p className="text-[15px] font-semibold text-brand-navy">{role.label}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{role.needs}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.9fr)] lg:items-start">
          <div className="rounded-2xl border border-brand-line bg-white p-6 shadow-soft sm:p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-orange">{active.label}</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-brand-navy">What this role needs</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-brand-muted">{active.needs}</p>
            <p className="mt-2 text-[13px] text-brand-muted">Pain addressed: {active.pain}</p>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
              Relevant capabilities
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {modules.map((m) => (
                <li
                  key={m.code}
                  className="rounded-md border border-brand-line bg-[#FAFBFD] px-2.5 py-1.5 text-[12px] font-medium text-brand-navy"
                >
                  {m.name}
                </li>
              ))}
            </ul>
            <Link
              href="#features-library"
              className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange hover:text-brand-navy"
            >
              Browse full capability library
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <FeatureProductPreview
            preview={active.preview}
            dark={active.dark}
            framed
            className="min-h-[260px] sm:min-h-[300px]"
          />
        </div>
      </div>
    </section>
  );
}
