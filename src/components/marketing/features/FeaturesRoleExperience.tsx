"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { FEATURE_ROLES, TENANT_MODULES } from "@/lib/marketing/features/content";
import { FeatureProductPreview } from "./FeatureProductPreview";

export function FeaturesRoleExperience() {
  const [activeId, setActiveId] = useState(FEATURE_ROLES[0].id);
  const active = FEATURE_ROLES.find((r) => r.id === activeId) ?? FEATURE_ROLES[0];
  const modules = TENANT_MODULES.filter((m) => active.relevantModules.includes(m.code));

  return (
    <section id="features-roles" className="scroll-mt-28 border-b border-brand-line bg-[#FAFBFD]">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Features by role</p>
          <h2 className="display-title mt-3 text-3xl sm:text-4xl">See Vertex CMS for your role.</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">
            Role needs from the BRD. Module lists show relevant workflows — not exclusive permissions.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[200px_minmax(0,1fr)] xl:grid-cols-[200px_minmax(0,1.15fr)_240px] lg:gap-10">
          <div>
            <div
              role="tablist"
              aria-label="Roles"
              className="-mx-1 mb-6 flex gap-2 overflow-x-auto pb-1 lg:hidden [scrollbar-width:thin]"
            >
              {FEATURE_ROLES.map((role) => {
                const selected = role.id === active.id;
                return (
                  <button
                    key={role.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls="role-workspace"
                    className={`shrink-0 rounded-md border px-3.5 py-2 text-[12px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 ${
                      selected
                        ? "border-brand-navy bg-brand-navy text-white"
                        : "border-brand-line bg-white text-brand-muted"
                    }`}
                    onClick={() => setActiveId(role.id)}
                  >
                    {role.label}
                  </button>
                );
              })}
            </div>

            <nav aria-label="Roles" className="hidden lg:sticky lg:top-36 lg:block">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Roles</p>
              <ul className="mt-4 space-y-1 border-l border-brand-line" role="tablist" aria-orientation="vertical">
                {FEATURE_ROLES.map((role) => {
                  const selected = role.id === active.id;
                  return (
                    <li key={role.id}>
                      <button
                        type="button"
                        role="tab"
                        aria-selected={selected}
                        aria-controls="role-workspace"
                        className={`-ml-px block w-full border-l-2 py-2.5 pl-4 text-left text-[14px] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 ${
                          selected
                            ? "border-brand-orange font-semibold text-brand-navy"
                            : "border-transparent text-brand-muted hover:text-brand-navy"
                        }`}
                        onClick={() => setActiveId(role.id)}
                      >
                        {role.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div id="role-workspace" role="tabpanel" className="min-w-0">
            <div className="rounded-xl border border-brand-line bg-white p-5 sm:p-7">
              <h3 className="font-display text-2xl font-bold tracking-tight text-brand-navy">{active.label}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-brand-navy/85">
                <span className="font-semibold">Needs:</span> {active.needs}
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-brand-muted">
                <span className="font-semibold text-brand-navy/80">Pain addressed:</span> {active.pain}
              </p>
              <div className="mt-6">
                <FeatureProductPreview
                  preview={active.preview}
                  dark={active.dark}
                  className="min-h-[260px] sm:min-h-[320px]"
                />
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-36 lg:self-start">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
              Relevant modules
            </p>
            <ul className="mt-4 space-y-2">
              {modules.map((mod) => (
                <li
                  key={mod.code}
                  className="rounded-lg border border-brand-line bg-white px-3 py-2.5 text-[13px] font-medium text-brand-navy"
                >
                  <span className="font-mono text-[10px] text-brand-orange">{mod.code}</span>
                  <span className="mt-0.5 block">{mod.name}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
