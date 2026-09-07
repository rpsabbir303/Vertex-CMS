"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { accessSecurity } from "@/lib/marketing/security/content";
import { StatusPill } from "./StatusPill";

export function SecurityAccess() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setActive(accessSecurity.steps.length - 1);
      return;
    }
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % accessSecurity.steps.length);
    }, 1800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Access</p>
            <h2 className="display-title mt-3 max-w-md text-3xl sm:text-4xl">{accessSecurity.title}</h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-brand-muted sm:text-base">
              {accessSecurity.supporting}
            </p>
            <ul className="mt-8 space-y-4">
              {accessSecurity.callouts.map((item) => (
                <li key={item.label} className="border-l-2 border-brand-orange/70 pl-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-[14px] font-semibold text-brand-navy">{item.label}</p>
                    <StatusPill status={item.status} />
                  </div>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-brand-muted">{item.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={90}>
            <div className="rounded-xl border border-brand-line bg-[#FAFBFD] p-5 sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                Access flow
              </p>
              <ol className="mt-6 space-y-0">
                {accessSecurity.steps.map((step, index) => {
                  const isActive = index === active;
                  const isPast = index < active;
                  return (
                    <li key={step.id} className="relative flex gap-4">
                      <div className="flex w-8 flex-col items-center">
                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-full border text-[11px] font-bold transition ${
                            isActive
                              ? "border-brand-orange bg-brand-orange text-white"
                              : isPast
                                ? "border-brand-navy/30 bg-brand-navy text-white"
                                : "border-brand-line bg-white text-brand-muted"
                          }`}
                        >
                          {index + 1}
                        </span>
                        {index < accessSecurity.steps.length - 1 && (
                          <span
                            className={`my-1 w-px flex-1 min-h-[28px] ${isPast || isActive ? "bg-brand-navy/30" : "bg-brand-line"}`}
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <div
                        className={`mb-4 flex-1 rounded-lg border px-4 py-3 transition ${
                          isActive
                            ? "border-brand-orange/40 bg-white shadow-soft"
                            : "border-brand-line/80 bg-white/70"
                        }`}
                      >
                        <p className="text-[14px] font-semibold text-brand-navy">{step.label}</p>
                        <p className="mt-1 text-[12px] text-brand-muted">{step.detail}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
              <p className="mt-2 text-[11px] text-brand-muted">
                Identity providers are not listed here — SSO appears only when enabled for the organization.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
