"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CheckIcon } from "@/components/Icons";
import { FeatureProductPreview } from "@/components/marketing/features/FeatureProductPreview";
import type { PreviewKey } from "@/lib/marketing/features/register";
import { Reveal } from "@/components/Reveal";
import {
  DISCOVERY_BUSINESS_OPTIONS,
  DISCOVERY_PROJECT_TYPE_OPTIONS,
  PROJECT_TYPE_PROFILES,
  SOLUTION_BUSINESS_SECTION,
  SOLUTION_DETAILS,
  SOLUTION_DISCOVERY_SECTION,
  SOLUTION_PROJECT_TYPE_SECTION,
  SOLUTION_ROLE_SECTION,
  SOLUTION_ROLES,
  type DiscoveryBusinessId,
  type DiscoveryProjectTypeId,
  type RoleId,
} from "@/lib/marketing/solutions/data";

function ClippedProductPreview({
  preview,
  dark,
  label,
  className = "",
}: {
  preview: PreviewKey;
  dark?: boolean;
  label: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">{label}</p>
      <div className="relative h-[240px] overflow-hidden rounded-xl border border-brand-line/70 bg-[#FAFBFD] sm:h-[280px] lg:h-[320px]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <FeatureProductPreview
            preview={preview}
            dark={dark}
            scale="md"
            className="rounded-none border-0 bg-transparent shadow-none"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FAFBFD] to-transparent"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

/* ─── 1. By Business — editorial + vertical selector ─── */

export function SolutionsByBusinessSection() {
  const [active, setActive] = useState<DiscoveryBusinessId>("general-contractors");
  const detail = SOLUTION_DETAILS[active];

  return (
    <section id="finder" className="scroll-mt-28 border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="mx-auto max-w-3xl text-center lg:max-w-4xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
            {SOLUTION_DISCOVERY_SECTION.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-[2rem] font-bold leading-[1.08] tracking-tight text-brand-navy sm:text-4xl lg:text-[2.75rem]">
            {SOLUTION_DISCOVERY_SECTION.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-brand-muted">
            {SOLUTION_DISCOVERY_SECTION.supporting}
          </p>
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:mt-16 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-14">
          <Reveal>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
              {SOLUTION_BUSINESS_SECTION.eyebrow}
            </p>
            <h3 className="font-display mt-3 text-2xl font-bold text-brand-navy sm:text-3xl">
              {SOLUTION_BUSINESS_SECTION.headline}
            </h3>
            <p className="mt-4 text-[14px] leading-relaxed text-brand-muted">{SOLUTION_BUSINESS_SECTION.supporting}</p>

            <ul className="mt-8 space-y-3">
              {DISCOVERY_BUSINESS_OPTIONS.map((opt, i) => {
                const selected = active === opt.id;
                const item = SOLUTION_DETAILS[opt.id];
                return (
                  <li key={opt.id}>
                    <button
                      type="button"
                      id={opt.id}
                      onClick={() => setActive(opt.id)}
                      className={
                        "group flex w-full items-stretch overflow-hidden rounded-2xl border text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 " +
                        (selected
                          ? "border-brand-navy bg-brand-navy shadow-[0_20px_50px_-24px_rgba(8,37,66,0.45)]"
                          : "border-brand-line bg-[#FAFBFD] hover:border-brand-navy/20 hover:bg-white hover:shadow-sm")
                      }
                    >
                      <span
                        className={
                          "flex w-14 shrink-0 items-center justify-center font-mono text-sm font-bold " +
                          (selected ? "bg-brand-orange text-white" : "bg-white text-brand-orange")
                        }
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1 px-4 py-4">
                        <span className={"block text-[15px] font-semibold " + (selected ? "text-white" : "text-brand-navy")}>
                          {opt.label}
                        </span>
                        <span className={"mt-1 block text-[12px] leading-snug " + (selected ? "text-slate-300" : "text-brand-muted")}>
                          {item.supporting}
                        </span>
                      </span>
                      <ArrowRight
                        className={
                          "my-auto mr-4 h-4 w-4 shrink-0 " +
                          (selected ? "text-brand-orange" : "text-brand-muted/40 group-hover:text-brand-orange")
                        }
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={80} className="relative">
            <div key={active} className="overflow-hidden rounded-3xl border border-brand-line bg-[#FAFBFD] p-5 shadow-[0_40px_100px_-48px_rgba(8,37,66,0.35)] sm:p-6">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Business workspace</p>
                  <p className="mt-1 font-display text-xl font-bold text-brand-navy">{detail.label}</p>
                </div>
                <Link href={detail.href} className="btn-primary shrink-0">
                  {detail.cta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <ClippedProductPreview preview={detail.preview} dark={detail.previewDark} label={detail.previewLabel} />
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {detail.emphasis.slice(0, 4).map((line) => (
                  <li key={line} className="flex items-start gap-2 rounded-lg border border-brand-line/70 bg-white px-3 py-2 text-[12px] text-brand-navy">
                    <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-orange" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <span id="subcontractors" className="sr-only">Specialty contractors</span>
            <span id="general-contractors" className="sr-only">General contractors</span>
            <span id="specialty-contractors" className="sr-only">Specialty contractors</span>
            <span id="owners" className="sr-only">Owners and clients</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── 2. By Project Type — unified interactive product lab ─── */

const PROJECT_TYPE_LAB_URL: Record<DiscoveryProjectTypeId, string> = {
  commercial: "app.vertexcms.com / schedule",
  residential: "app.vertexcms.com / projects",
  civil: "app.vertexcms.com / look-ahead",
};

const PROJECT_TYPE_KPIS: Record<DiscoveryProjectTypeId, { label: string; value: string }[]> = {
  commercial: [
    { label: "Contract value", value: "$24.6M" },
    { label: "Schedule", value: "-3 days" },
    { label: "Open RFIs", value: "7" },
  ],
  residential: [
    { label: "Active lots", value: "14" },
    { label: "Client updates", value: "12 posted" },
    { label: "Daily logs", value: "22" },
  ],
  civil: [
    { label: "Look-ahead", value: "4 weeks" },
    { label: "Crew on site", value: "38" },
    { label: "Safety", value: "Clear" },
  ],
};

export function SolutionsByProjectTypeSection() {
  const [active, setActive] = useState<DiscoveryProjectTypeId>("commercial");
  const item = SOLUTION_DETAILS[active];
  const profile = PROJECT_TYPE_PROFILES.find((p) => p.slug === active)!;
  const kpis = PROJECT_TYPE_KPIS[active];

  return (
    <section
      id="project-types"
      className="relative scroll-mt-28 overflow-hidden border-b border-brand-line bg-gradient-to-b from-[#F8FAFD] via-white to-[#F0F4FA]"
    >
      <div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-brand-blue/[0.05] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-brand-orange/[0.06] blur-3xl"
        aria-hidden="true"
      />

      <div className="site-shell relative section-spacing">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {SOLUTION_PROJECT_TYPE_SECTION.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl lg:text-[2.65rem]">
            {SOLUTION_PROJECT_TYPE_SECTION.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-brand-muted">
            {SOLUTION_PROJECT_TYPE_SECTION.supporting}
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-12 lg:mt-14">
          <div className="overflow-hidden rounded-3xl border border-brand-line/80 bg-white shadow-[0_48px_120px_-48px_rgba(8,37,66,0.35)]">
            <div className="grid border-b border-brand-line/70 sm:grid-cols-3">
              {DISCOVERY_PROJECT_TYPE_OPTIONS.map((opt, index) => {
                const selected = active === opt.id;
                const typeProfile = PROJECT_TYPE_PROFILES.find((p) => p.slug === opt.id)!;
                return (
                  <button
                    key={opt.id}
                    id={opt.id}
                    type="button"
                    onClick={() => setActive(opt.id)}
                    className={
                      "scroll-mt-28 border-b border-brand-line/70 px-5 py-5 text-left transition last:border-b-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-orange/40 sm:border-b-0 sm:border-r sm:last:border-r-0 " +
                      (selected
                        ? "bg-[#FAFBFD] shadow-[inset_0_3px_0_0_rgba(232,93,4,1)]"
                        : "bg-white hover:bg-[#FAFBFD]/80")
                    }
                  >
                    <span className="font-mono text-[10px] font-bold text-brand-orange">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-2 block text-[15px] font-semibold text-brand-navy">{opt.label}</span>
                    <span className="mt-1 block text-[11px] text-brand-muted">{typeProfile.kicker}</span>
                  </button>
                );
              })}
            </div>

            <div key={active} className="border-b border-brand-line/70 bg-white px-5 py-5 sm:px-8 sm:py-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">
                    {profile.kicker}
                  </p>
                  <h3 className="font-display mt-2 text-xl font-bold leading-snug text-brand-navy sm:text-2xl">
                    {item.headline}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-brand-muted">{item.supporting}</p>
                </div>
                <Link href={item.href} className="btn-primary shrink-0 self-start lg:self-auto">
                  {item.cta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-6 grid grid-cols-3 divide-x divide-brand-line/70 overflow-hidden rounded-xl border border-brand-line/70">
                {kpis.map((kpi) => (
                  <div key={kpi.label} className="bg-[#FAFBFD] px-3 py-3 text-center sm:px-4">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-muted">{kpi.label}</p>
                    <p className="mt-1 font-display text-lg font-bold text-brand-navy">{kpi.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)]">
              <aside className="border-b border-brand-line/70 p-5 sm:p-6 lg:border-b-0 lg:border-r lg:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Workflow emphasis</p>
                <ul className="mt-4 space-y-2.5">
                  {profile.characteristics.map((line) => (
                    <li key={line} className="flex items-start gap-2 text-[13px] leading-snug text-brand-navy">
                      <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-orange" aria-hidden="true" />
                      {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Connected modules</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.modules.map((mod) => (
                    <Link
                      key={mod.label}
                      href={mod.href}
                      className="rounded-lg border border-brand-line bg-[#FAFBFD] px-2.5 py-1.5 text-[11px] font-medium text-brand-navy transition hover:border-brand-orange/35 hover:text-brand-orange"
                    >
                      {mod.label}
                    </Link>
                  ))}
                </div>
              </aside>

              <div className="relative bg-gradient-to-br from-[#EEF2F8] via-[#F5F7FA] to-[#E8EDF4] p-5 sm:p-6 lg:p-8">
                <div className="overflow-hidden rounded-2xl border border-brand-line/80 bg-white shadow-[0_32px_80px_-40px_rgba(8,37,66,0.4)]">
                  <div className="flex items-center gap-2 border-b border-brand-line/70 bg-[#F7F9FC] px-4 py-2.5">
                    <span className="flex shrink-0 gap-1" aria-hidden="true">
                      <span className="h-2 w-2 rounded-full bg-[#FF5F57]/90" />
                      <span className="h-2 w-2 rounded-full bg-[#FEBC2E]/90" />
                      <span className="h-2 w-2 rounded-full bg-[#28C840]/90" />
                    </span>
                    <span className="min-w-0 flex-1 truncate text-[10px] text-brand-muted">
                      {PROJECT_TYPE_LAB_URL[active]}
                    </span>
                    <span className="rounded-full border border-emerald-400/30 bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-700">
                      Live
                    </span>
                  </div>
                  <p className="border-b border-brand-line/50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                    {item.previewLabel}
                  </p>
                  <div className="relative h-[260px] overflow-hidden sm:h-[300px] lg:h-[360px]">
                    <div className="absolute left-1/2 top-0 -translate-x-1/2">
                      <FeatureProductPreview
                        preview={item.preview}
                        dark={Boolean(item.previewDark)}
                        scale="md"
                        className="rounded-none border-0 bg-transparent shadow-none"
                      />
                    </div>
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div className="absolute bottom-10 left-10 hidden rounded-xl border border-brand-line bg-white/95 px-3 py-2 shadow-lg backdrop-blur-sm lg:block">
                  <p className="text-[8px] font-semibold uppercase tracking-wide text-brand-muted">Delivery model</p>
                  <p className="text-[11px] font-bold text-brand-navy">{item.label}</p>
                </div>
                <div className="absolute right-10 top-10 hidden rounded-xl border border-brand-orange/25 bg-white/95 px-3 py-2 shadow-lg backdrop-blur-sm lg:block">
                  <p className="text-[8px] font-semibold uppercase tracking-wide text-brand-orange">One record</p>
                  <p className="text-[11px] font-bold text-brand-navy">Same platform</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-brand-line/70 bg-brand-navy px-5 py-3.5 text-center">
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">
                One project record
              </span>
              <span className="text-[11px] text-slate-300">
                Commercial · Residential · Civil — different emphasis, connected workflows
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── 3. By Role — coverflow desk deck ─── */

export function SolutionsByRoleSection() {
  const [activeId, setActiveId] = useState<RoleId>("project-manager");
  const index = SOLUTION_ROLES.findIndex((r) => r.id === activeId);
  const role = SOLUTION_ROLES[index] ?? SOLUTION_ROLES[0];
  const prev = SOLUTION_ROLES[(index - 1 + SOLUTION_ROLES.length) % SOLUTION_ROLES.length];
  const next = SOLUTION_ROLES[(index + 1) % SOLUTION_ROLES.length];

  return (
    <section id="roles" className="scroll-mt-28 overflow-hidden border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="relative z-20 mx-auto max-w-2xl text-center">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {SOLUTION_ROLE_SECTION.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {SOLUTION_ROLE_SECTION.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{SOLUTION_ROLE_SECTION.supporting}</p>
        </Reveal>

        <Reveal delay={80} className="mt-12 lg:mt-16">
          <div className="relative">
            <p
              className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 truncate text-center font-display text-[11vw] font-bold leading-none text-brand-navy/[0.04] lg:block"
              aria-hidden="true"
            >
              {role.label}
            </p>

            <div className="relative z-10 flex items-center justify-center lg:min-h-[400px]">
              <button
                type="button"
                aria-label={`View as ${prev.label}`}
                onClick={() => setActiveId(prev.id)}
                className="absolute left-0 top-1/2 hidden w-[28%] -translate-y-1/2 -rotate-6 opacity-35 transition hover:opacity-60 lg:block"
              >
                <span className="mb-2 block text-center text-[12px] font-semibold text-brand-navy">{prev.label}</span>
                <FeatureProductPreview
                  preview={prev.preview}
                  dark={Boolean(prev.previewDark)}
                  framed
                  scale="sm"
                  className="pointer-events-none min-h-[200px] shadow-md"
                />
              </button>

              <div key={role.id} className="relative z-20 w-full lg:w-[50%]">
                <FeatureProductPreview
                  preview={role.preview}
                  dark={Boolean(role.previewDark)}
                  framed
                  scale="md"
                  className="min-h-[280px] shadow-[0_40px_90px_-40px_rgba(8,37,66,0.45)] sm:min-h-[320px] lg:min-h-[360px]"
                />
              </div>

              <button
                type="button"
                aria-label={`View as ${next.label}`}
                onClick={() => setActiveId(next.id)}
                className="absolute right-0 top-1/2 hidden w-[28%] -translate-y-1/2 rotate-6 opacity-35 transition hover:opacity-60 lg:block"
              >
                <span className="mb-2 block text-center text-[12px] font-semibold text-brand-navy">{next.label}</span>
                <FeatureProductPreview
                  preview={next.preview}
                  dark={Boolean(next.previewDark)}
                  framed
                  scale="sm"
                  className="pointer-events-none min-h-[200px] shadow-md"
                />
              </button>
            </div>
          </div>

          <div className="relative z-20 mx-auto mt-12 max-w-2xl text-center lg:mt-16">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-orange">{role.label}</p>
            <h3 className="font-display mt-2 text-2xl font-bold text-brand-navy sm:text-[1.75rem]">{role.headline}</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-brand-muted">{role.body}</p>
            <Link href={role.cta.href} className="btn-primary mt-6 inline-flex">
              {role.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative z-20 mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {SOLUTION_ROLES.map((r) => (
              <button
                key={r.id}
                id={r.hash}
                type="button"
                onClick={() => setActiveId(r.id)}
                className={
                  "text-[13px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 " +
                  (activeId === r.id
                    ? "text-brand-navy underline decoration-brand-orange decoration-2 underline-offset-8"
                    : "text-brand-muted hover:text-brand-navy")
                }
              >
                {r.label.replace(" / Accountant", "")}
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
