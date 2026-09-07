"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { auditAccountability } from "@/lib/marketing/security/content";

export function SecurityAudit() {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(auditAccountability.sampleEntries.length);
      return;
    }
    const timers = auditAccountability.sampleEntries.map((_, i) =>
      window.setTimeout(() => setVisible(i + 1), 500 + i * 450)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="border-b border-brand-line bg-brand-navy text-white">
      <div className="site-shell section-spacing">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
              Accountability
            </p>
            <h2 className="display-title-light mt-3 max-w-md text-3xl sm:text-4xl">
              {auditAccountability.title}
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-slate-300 sm:text-base">
              {auditAccountability.supporting}
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <FieldList title="Platform audit" fields={auditAccountability.platformFields} />
              <FieldList title="Data-access log" fields={auditAccountability.dataAccessFields} />
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#061525] shadow-product">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
                <div>
                  <p className="text-[12px] font-semibold text-white">Audit trail</p>
                  <p className="text-[11px] text-slate-500">Abstract schema · no customer data</p>
                </div>
                <span className="rounded-sm border border-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-400">
                  Immutable log
                </span>
              </div>
              <ul className="divide-y divide-white/5 p-2">
                {auditAccountability.sampleEntries.map((entry, index) => (
                  <li
                    key={`${entry.kind}-${index}`}
                    className={`grid grid-cols-[10px_1fr_auto] items-start gap-3 rounded-lg px-3 py-3.5 transition ${
                      index < visible ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span
                      className={`mt-1.5 h-2 w-2 rounded-full ${
                        entry.method === "impersonation" ? "bg-brand-orange" : "bg-slate-400"
                      }`}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-[13px] font-semibold text-white">{entry.kind}</p>
                      <p className="mt-1 font-mono text-[11px] text-slate-400">{entry.meta}</p>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-slate-500">
                      {entry.method}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FieldList({ title, fields }: { title: string; fields: string[] }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">{title}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {fields.map((field) => (
          <li
            key={field}
            className="rounded-sm border border-white/10 bg-white/[0.03] px-2.5 py-1.5 font-mono text-[11px] text-slate-300"
          >
            {field}
          </li>
        ))}
      </ul>
    </div>
  );
}
