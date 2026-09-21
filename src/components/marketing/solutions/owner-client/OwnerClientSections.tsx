"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "@/components/Icons";
import { FeatureProductPreview } from "@/components/marketing/features/FeatureProductPreview";
import { Reveal } from "@/components/Reveal";
import type { PreviewKey } from "@/lib/marketing/features/register";
import {
  ownerAccess,
  ownerAi,
  ownerApprovals,
  ownerCollaboration,
  ownerCta,
  ownerDecisions,
  ownerExperience,
  ownerFinancials,
  ownerHero,
  ownerVisibility,
  ownerWarranty,
} from "@/lib/marketing/solutions/ownerClient";

function ProductStage({
  preview,
  dark,
  label,
  className = "",
  minClass = "min-h-[220px] sm:min-h-[280px] lg:min-h-[340px]",
}: {
  preview: PreviewKey;
  dark?: boolean;
  label?: string;
  className?: string;
  minClass?: string;
}) {
  return (
    <div
      className={
        "overflow-hidden rounded-2xl border " +
        (dark ? "border-white/10 bg-[#061525]" : "border-brand-line/80 bg-white") +
        " " +
        className
      }
    >
      {label ? (
        <p
          className={
            "border-b px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] " +
            (dark ? "border-white/10 text-slate-400" : "border-brand-line/70 text-brand-muted")
          }
        >
          {label}
        </p>
      ) : null}
      <FeatureProductPreview preview={preview} dark={dark} framed className={minClass} />
    </div>
  );
}

export function OwnerHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-brand-line/70 bg-[#F7F9FC]">
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(8,35,63,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(8,35,63,0.04) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
        aria-hidden="true"
      />
      <div className="site-shell relative py-14 sm:py-16 lg:py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{ownerHero.eyebrow}</p>
          <h1 className="display-title mt-4 text-[2.35rem] leading-[1.04] sm:text-5xl lg:text-[3.25rem]">
            {ownerHero.headline}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-brand-muted">
            {ownerHero.supporting}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={ownerHero.primary.href} className="btn-primary w-full sm:w-auto">
              {ownerHero.primary.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={ownerHero.secondary.href}
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-brand-line bg-white px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-brand-navy transition hover:border-brand-navy/25 sm:w-auto"
            >
              {ownerHero.secondary.label}
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
            {ownerHero.chips.map((chip, i) => (
              <span key={chip.label} className="inline-flex items-center gap-2">
                <Link
                  href={chip.href}
                  className="rounded-full border border-brand-line/80 bg-white px-3 py-1.5 text-[11px] font-semibold text-brand-navy transition hover:border-brand-orange/40"
                >
                  {chip.label}
                </Link>
                {i < ownerHero.chips.length - 1 ? (
                  <span className="hidden text-[11px] text-brand-muted sm:inline" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={90} className="relative mx-auto mt-12 max-w-6xl lg:pb-10">
          <div className="overflow-hidden rounded-2xl border border-brand-line bg-gradient-to-br from-[#E8EEF5] via-[#F0F4F9] to-[#E4EBF4] p-3 sm:p-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                VertexBuild · {ownerHero.previewLabel}
              </p>
              <span className="rounded-full border border-brand-line bg-white px-2.5 py-1 text-[10px] font-semibold text-brand-navy">
                Assigned project · controlled access
              </span>
            </div>
            <FeatureProductPreview
              preview={ownerHero.preview}
              framed
              className="min-h-[240px] sm:min-h-[320px] lg:min-h-[400px]"
            />
          </div>
          <div className="mt-4 overflow-hidden rounded-2xl border border-brand-line bg-white shadow-lg lg:absolute lg:-bottom-2 lg:right-8 lg:mt-0 lg:w-[38%]">
            <p className="border-b border-brand-line/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
              {ownerHero.overlayLabel}
            </p>
            <FeatureProductPreview
              preview={ownerHero.overlayPreview}
              framed
              scale="sm"
              className="min-h-[140px] sm:min-h-[160px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function OwnerVisibilitySection() {
  const [active, setActive] = useState(0);
  const view = ownerVisibility.views[active] ?? ownerVisibility.views[0];

  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {ownerVisibility.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {ownerVisibility.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{ownerVisibility.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10 overflow-hidden rounded-3xl border border-brand-line/80 bg-[#FAFBFD]">
          <div className="flex items-center justify-between gap-3 border-b border-brand-line/70 px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
              VertexBuild · Owner Portal
            </p>
            <span className="hidden text-[11px] text-brand-muted sm:inline">See what matters · without losing control</span>
          </div>
          <div className="grid lg:grid-cols-[minmax(12rem,0.28fr)_minmax(0,0.72fr)]">
            <div className="flex gap-1 overflow-x-auto border-b border-brand-line/70 p-2 [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:border-b-0 lg:border-r [&::-webkit-scrollbar]:hidden">
              {ownerVisibility.views.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={
                    "shrink-0 rounded-xl px-3 py-3 text-left transition " +
                    (active === i ? "bg-white shadow-sm" : "hover:bg-white/70")
                  }
                >
                  <span className="block text-[13px] font-semibold text-brand-navy">{item.label}</span>
                  <span className="mt-0.5 hidden text-[11px] text-brand-muted lg:block">{item.body}</span>
                </button>
              ))}
            </div>
            <div key={view.id} className="p-4 sm:p-5">
              <ProductStage preview={view.preview} label={view.label} />
              <p className="mt-3 text-[13px] text-brand-muted lg:hidden">{view.body}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function OwnerAccessSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-brand-line bg-brand-navy">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {ownerAccess.eyebrow}
          </p>
          <h2 className="display-title-light mt-3 text-3xl sm:text-4xl">{ownerAccess.headline}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-300">{ownerAccess.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10">
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {ownerAccess.stages.map((item, i) => (
              <span key={item.id} className="inline-flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={
                    "rounded-full px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] transition " +
                    (active === i ? "bg-brand-orange text-white" : "border border-white/15 text-slate-300 hover:bg-white/5")
                  }
                >
                  {item.label}
                </button>
                {i < ownerAccess.stages.length - 1 ? (
                  <span className="text-slate-500" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </span>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
            <div className="flex flex-col gap-3 border-b border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-[14px] leading-relaxed text-slate-300">
                {ownerAccess.stages[active]?.body}
              </p>
              <span className="rounded-full border border-white/15 px-3 py-1 text-[11px] font-semibold text-white">
                {ownerAccess.note}
              </span>
            </div>
            <div className="p-4 sm:p-5">
              <ProductStage preview={ownerAccess.preview} label="Portal access" />
              <Link
                href={ownerAccess.href}
                className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange"
              >
                Explore Customer Portals
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function OwnerFinancialsSection() {
  const [active, setActive] = useState(0);
  const step = ownerFinancials.path[active] ?? ownerFinancials.path[0];

  return (
    <section className="border-b border-brand-line bg-[#F4F7FB]">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {ownerFinancials.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {ownerFinancials.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{ownerFinancials.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10 overflow-hidden rounded-3xl border border-brand-line/80 bg-white">
          <div className="flex gap-2 overflow-x-auto border-b border-brand-line/70 px-4 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {ownerFinancials.path.map((item, i) => (
              <span key={item.id} className="inline-flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={
                    "rounded-full px-4 py-2 text-[13px] font-semibold transition " +
                    (active === i ? "bg-brand-navy text-white" : "border border-brand-line bg-[#FAFBFD] text-brand-navy")
                  }
                >
                  {item.label}
                </button>
                {i < ownerFinancials.path.length - 1 ? <span className="text-brand-muted">→</span> : null}
              </span>
            ))}
          </div>
          <div key={step.id} className="p-4 sm:p-5">
            <ProductStage
              preview={step.preview}
              dark={"previewDark" in step ? step.previewDark : undefined}
              label={step.label}
            />
          </div>
          <div className="flex flex-wrap gap-2 border-t border-brand-line/70 bg-[#FAFBFD] px-5 py-4">
            {ownerFinancials.modules.map((mod) => (
              <Link
                key={mod.label}
                href={mod.href}
                className="rounded-full border border-brand-line bg-white px-3 py-1.5 text-[12px] font-medium text-brand-navy hover:border-brand-orange/35"
              >
                {mod.label}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function OwnerApprovalsSection() {
  const [state, setState] = useState(0);

  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)]">
          <Reveal>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
              {ownerApprovals.eyebrow}
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {ownerApprovals.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{ownerApprovals.supporting}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {ownerApprovals.states.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setState(i)}
                  className={
                    "rounded-full px-4 py-2 text-[13px] font-semibold transition " +
                    (state === i ? "bg-brand-navy text-white" : "border border-brand-line bg-[#FAFBFD] text-brand-navy")
                  }
                >
                  {item.label}
                </button>
              ))}
            </div>
            <p className="mt-4 text-[12px] text-brand-muted">{ownerApprovals.actions.join(" · ")}</p>
          </Reveal>
          <Reveal delay={80}>
            <div className="overflow-hidden rounded-3xl border border-brand-line/80 bg-[#FAFBFD] p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                  Pay application review
                </p>
                <span
                  className={
                    "rounded-full px-2.5 py-1 text-[11px] font-semibold " +
                    (state === 1
                      ? "bg-emerald-50 text-emerald-700"
                      : state === 2
                        ? "border border-brand-line bg-white text-brand-navy"
                        : "bg-amber-50 text-amber-800")
                  }
                >
                  {ownerApprovals.states[state]?.label}
                </span>
              </div>
              <ProductStage
                preview={state === 0 ? ownerApprovals.preview : ownerApprovals.listPreview}
                label="Owner Portal"
              />
              <Link
                href={ownerApprovals.href}
                className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange"
              >
                Explore AIA Pay Applications
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function OwnerDecisionsSection() {
  const [active, setActive] = useState(0);
  const stage = ownerDecisions.stages[active] ?? ownerDecisions.stages[0];

  return (
    <section className="border-b border-brand-line bg-[#F7F8FA]">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {ownerDecisions.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {ownerDecisions.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{ownerDecisions.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10 overflow-hidden rounded-3xl border border-brand-line/80 bg-white">
          <div className="grid lg:grid-cols-[minmax(14rem,0.32fr)_minmax(0,0.68fr)]">
            <div className="border-b border-brand-line/70 lg:border-b-0 lg:border-r">
              {ownerDecisions.stages.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={
                    "flex w-full items-start gap-3 border-b border-brand-line/70 px-5 py-5 text-left last:border-b-0 " +
                    (i === active ? "bg-[#FAFBFD] shadow-[inset_3px_0_0_0_rgba(232,93,4,1)]" : "hover:bg-[#FAFBFD]/70")
                  }
                >
                  <span className="font-mono text-[11px] font-bold text-brand-orange">
                    {item.label}
                    {i < ownerDecisions.stages.length - 1 ? <span className="mt-2 block text-brand-muted">↓</span> : null}
                  </span>
                  <span className="text-[13px] leading-snug text-brand-navy">{item.body}</span>
                </button>
              ))}
            </div>
            <div key={stage.id} className="p-4 sm:p-5">
              <ProductStage
                preview={stage.preview}
                dark={"previewDark" in stage ? stage.previewDark : undefined}
                label={stage.label}
              />
              <Link
                href={ownerDecisions.href}
                className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange"
              >
                Explore Change Orders
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function OwnerCollaborationSection() {
  const [active, setActive] = useState(0);
  const view = ownerCollaboration.views[active] ?? ownerCollaboration.views[0];

  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {ownerCollaboration.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {ownerCollaboration.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{ownerCollaboration.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10 overflow-hidden rounded-3xl border border-brand-line/80">
          <div className="flex items-center justify-between gap-3 border-b border-brand-line/70 bg-[#FAFBFD] px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
              VertexBuild · Project workspace
            </p>
            <span className="hidden text-[11px] text-brand-muted sm:inline">One connected owner view</span>
          </div>
          <div className="grid lg:grid-cols-[minmax(11.5rem,0.24fr)_minmax(0,0.76fr)]">
            <div className="flex gap-1 overflow-x-auto border-b border-brand-line/70 bg-[#FAFBFD] p-2 [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:border-b-0 lg:border-r [&::-webkit-scrollbar]:hidden">
              {ownerCollaboration.views.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={
                    "shrink-0 rounded-lg px-3 py-2.5 text-left text-[12px] font-semibold transition " +
                    (active === i ? "bg-white text-brand-navy shadow-sm" : "text-brand-muted hover:text-brand-navy")
                  }
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div key={view.id} className="bg-[#F4F7FB] p-4 sm:p-5">
              <ProductStage
                preview={view.preview}
                dark={"previewDark" in view ? view.previewDark : undefined}
                label={view.label}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function OwnerWarrantySection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-b border-brand-line bg-[#F7F8FA]">
      <div className="site-shell section-spacing">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-14">
          <Reveal>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
              {ownerWarranty.eyebrow}
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {ownerWarranty.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{ownerWarranty.supporting}</p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {ownerWarranty.steps.map((step, i) => (
                <span key={step} className="inline-flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={
                      "rounded-full px-3.5 py-1.5 text-[12px] font-semibold " +
                      (active === i ? "bg-brand-navy text-white" : "border border-brand-line bg-white text-brand-navy")
                    }
                  >
                    {step}
                  </button>
                  {i < ownerWarranty.steps.length - 1 ? <span className="text-brand-muted">→</span> : null}
                </span>
              ))}
            </div>
            <Link
              href={ownerWarranty.href}
              className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange"
            >
              Explore Customer Portals
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <ProductStage preview={ownerWarranty.preview} label={ownerWarranty.steps[active]} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function OwnerAiSection() {
  const [active, setActive] = useState(0);
  const stage = ownerAi.stages[active] ?? ownerAi.stages[0];

  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {ownerAi.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {ownerAi.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{ownerAi.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10 overflow-hidden rounded-3xl border border-brand-line/80 bg-[#FAFBFD]">
          <div className="grid lg:grid-cols-[minmax(14rem,0.32fr)_minmax(0,0.68fr)]">
            <div className="border-b border-brand-line/70 bg-white lg:border-b-0 lg:border-r">
              {ownerAi.stages.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={
                    "flex w-full items-start gap-3 border-b border-brand-line/70 px-5 py-5 text-left last:border-b-0 " +
                    (i === active ? "bg-[#FAFBFD] shadow-[inset_3px_0_0_0_rgba(232,93,4,1)]" : "hover:bg-[#FAFBFD]/70")
                  }
                >
                  <span className="font-mono text-[11px] font-bold text-brand-orange">
                    {item.label}
                    {i < ownerAi.stages.length - 1 ? <span className="mt-2 block text-brand-muted">↓</span> : null}
                  </span>
                  <span className="text-[13px] leading-snug text-brand-navy">{item.body}</span>
                </button>
              ))}
            </div>
            <div key={stage.id} className="p-4 sm:p-5">
              <ProductStage preview={stage.preview} label={stage.label} />
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {ownerAi.modules.map((mod) => (
                  <Link key={mod.label} href={mod.href} className="text-[13px] font-semibold text-brand-navy hover:text-brand-orange">
                    {mod.label}
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-[12px] text-brand-muted">{ownerAi.note}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function OwnerExperienceSection() {
  const [active, setActive] = useState(0);
  const area = ownerExperience.areas[active] ?? ownerExperience.areas[0];

  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {ownerExperience.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {ownerExperience.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{ownerExperience.supporting}</p>
        </Reveal>

        <Reveal delay={80} className="mt-10 overflow-hidden rounded-3xl border border-brand-line/80">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 bg-brand-navy px-4 py-4">
            {ownerExperience.areas.map((item, i) => (
              <span key={item.id} className="inline-flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={
                    "rounded-full px-3.5 py-2 text-[12px] font-semibold transition " +
                    (active === i ? "bg-brand-orange text-white" : "text-slate-300 hover:text-white")
                  }
                >
                  {item.label}
                </button>
                {i < ownerExperience.areas.length - 1 ? (
                  <span className="text-[12px] font-semibold text-white/35" aria-hidden="true">
                    +
                  </span>
                ) : null}
              </span>
            ))}
          </div>
          <div key={area.id} className="bg-[#FAFBFD] p-4 sm:p-5">
            <ProductStage
              preview={area.preview}
              dark={"previewDark" in area ? area.previewDark : undefined}
              label={area.label}
            />
            <div className="mt-4 flex flex-wrap gap-2">
              {area.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-brand-line bg-white px-3 py-1.5 text-[12px] font-medium text-brand-navy"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function OwnerCtaSection() {
  return (
    <section className="bg-brand-navy">
      <div className="site-shell section-spacing">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="display-title-light text-3xl sm:text-4xl lg:text-[2.75rem]">{ownerCta.headline}</h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300">{ownerCta.supporting}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={ownerCta.primary.href} className="btn-primary w-full sm:w-auto">
              {ownerCta.primary.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={ownerCta.secondary.href}
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/25 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 sm:w-auto"
            >
              {ownerCta.secondary.label}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
