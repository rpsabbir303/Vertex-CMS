"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "@/components/Icons";
import { FeatureProductPreview } from "@/components/marketing/features/FeatureProductPreview";
import { PhoneUI } from "@/components/mockups/ProductMockups";
import { Reveal } from "@/components/Reveal";
import type { PreviewKey } from "@/lib/marketing/features/register";
import {
  scAi,
  scCta,
  scField,
  scFinancials,
  scHero,
  scOperating,
  scPlatform,
  scProject,
  scSubs,
  scWorkforce,
} from "@/lib/marketing/solutions/specialtyContractor";

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

function fieldPhoneVariant(id: string): "home" | "log" | "capture" {
  if (id === "captured") return "capture";
  if (id === "connected") return "home";
  return "log";
}

export function ScHeroSection() {
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
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] lg:gap-10">
          <Reveal className="relative order-2 lg:order-1 lg:pb-16">
            <div className="overflow-hidden rounded-2xl border border-brand-line bg-gradient-to-br from-[#E8EEF5] via-[#F0F4F9] to-[#E4EBF4] p-3 sm:p-5">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                Vertex CMS · {scHero.previewLabel}
              </p>
              <FeatureProductPreview
                preview={scHero.preview}
                framed
                className="min-h-[240px] sm:min-h-[300px] lg:min-h-[380px]"
              />
            </div>
            <div className="mt-4 overflow-hidden rounded-2xl border border-brand-line bg-white shadow-lg lg:absolute lg:-bottom-2 lg:-right-4 lg:mt-0 lg:w-[46%]">
              <p className="border-b border-brand-line/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                {scHero.overlayLabel}
              </p>
              <FeatureProductPreview
                preview={scHero.overlayPreview}
                framed
                scale="sm"
                className="min-h-[140px] sm:min-h-[160px]"
              />
            </div>
          </Reveal>

          <Reveal delay={80} className="order-1 lg:order-2 lg:pl-4">
            <p className="eyebrow">{scHero.eyebrow}</p>
            <h1 className="display-title mt-4 text-[2.35rem] leading-[1.04] sm:text-5xl lg:text-[3.05rem]">
              {scHero.headline}
            </h1>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-brand-muted">{scHero.supporting}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={scHero.primary.href} className="btn-primary w-full sm:w-auto">
                {scHero.primary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={scHero.secondary.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-brand-line bg-white px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-brand-navy transition hover:border-brand-navy/25 sm:w-auto"
              >
                {scHero.secondary.label}
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2">
              {scHero.chips.map((chip, i) => (
                <span key={chip.label} className="inline-flex items-center gap-2">
                  <Link
                    href={chip.href}
                    className="rounded-full border border-brand-line/80 bg-white px-3 py-1.5 text-[11px] font-semibold text-brand-navy transition hover:border-brand-orange/40"
                  >
                    {chip.label}
                  </Link>
                  {i < scHero.chips.length - 1 ? (
                    <span className="hidden text-[11px] text-brand-muted sm:inline" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ScOperatingSection() {
  const [active, setActive] = useState(2);
  const node = scOperating.nodes[active] ?? scOperating.nodes[0];
  const next = scOperating.nodes[(active + 1) % scOperating.nodes.length];

  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {scOperating.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {scOperating.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{scOperating.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10 overflow-hidden rounded-3xl border border-brand-line/80 bg-[#FAFBFD]">
          <div className="flex gap-1 overflow-x-auto border-b border-brand-line/70 px-3 py-3 [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden">
            {scOperating.nodes.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                className={
                  "inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-semibold " +
                  (i === active ? "bg-brand-navy text-white" : "border border-brand-line bg-white text-brand-navy")
                }
              >
                {item.label}
                {i < scOperating.nodes.length - 1 ? <span className="opacity-50">→</span> : null}
              </button>
            ))}
          </div>

          <div className="grid items-stretch lg:grid-cols-[minmax(13rem,0.3fr)_minmax(0,0.7fr)]">
            <ol className="relative hidden border-r border-brand-line/70 p-4 lg:block">
              <span
                className="pointer-events-none absolute bottom-6 left-[31px] top-6 w-px bg-brand-line"
                aria-hidden="true"
              />
              {scOperating.nodes.map((item, i) => {
                const selected = i === active;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className="grid w-full grid-cols-[32px_1fr] items-start gap-3 py-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
                    >
                      <span className="relative z-[1] flex justify-center">
                        <span
                          className={
                            "flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold " +
                            (selected ? "bg-brand-orange text-white" : "bg-white text-brand-muted ring-1 ring-brand-line")
                          }
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </span>
                      <span>
                        <span className={"block text-[13px] font-semibold " + (selected ? "text-brand-navy" : "text-brand-navy/80")}>
                          {item.label}
                        </span>
                        <span className="block text-[11px] text-brand-muted">{item.detail}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>

            <div className="relative p-4 sm:p-5">
              <div key={node.id}>
                <ProductStage
                  preview={node.preview}
                  dark={"previewDark" in node ? node.previewDark : undefined}
                  label={`Vertex CMS · ${node.label}`}
                />
              </div>
              <button
                type="button"
                onClick={() => setActive((active + 1) % scOperating.nodes.length)}
                className="mt-4 w-full overflow-hidden rounded-2xl border border-brand-line bg-white text-left shadow-md lg:absolute lg:bottom-8 lg:right-8 lg:mt-0 lg:w-[42%]"
              >
                <p className="border-b border-brand-line/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                  Next · {next.label}
                </p>
                <FeatureProductPreview
                  preview={next.preview}
                  dark={"previewDark" in next ? next.previewDark : undefined}
                  framed
                  scale="sm"
                  className="min-h-[120px]"
                />
              </button>
              <Link
                href={node.href}
                className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange lg:mt-20"
              >
                Open {node.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ScFieldSection() {
  const [active, setActive] = useState(0);
  const [sync, setSync] = useState(0);
  const stage = scField.stages[active] ?? scField.stages[0];

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setSync(scField.sync.length - 1);
      return;
    }
    const id = window.setInterval(() => setSync((s) => (s + 1) % scField.sync.length), 1600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="border-b border-brand-line bg-brand-navy">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {scField.eyebrow}
          </p>
          <h2 className="display-title-light mt-3 text-3xl sm:text-4xl">{scField.headline}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-300">{scField.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10">
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {scField.stages.map((item, i) => (
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
                {i < scField.stages.length - 1 ? (
                  <span className="text-slate-500" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </span>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
            <div className="flex flex-col gap-3 border-b border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-[14px] leading-relaxed text-slate-300">{stage.body}</p>
              <div className="flex flex-wrap gap-2">
                {scField.sync.map((state, i) => (
                  <span
                    key={state}
                    className={
                      "rounded-full px-2.5 py-1 text-[11px] font-semibold " +
                      (i === sync ? "bg-brand-orange text-white" : "border border-white/15 text-slate-400")
                    }
                  >
                    {state}
                  </span>
                ))}
              </div>
            </div>

            <div key={stage.id} className="relative p-4 sm:p-5">
              <ProductStage preview={stage.preview} label={stage.label} />
              <div className="mt-4 flex justify-center lg:absolute lg:bottom-6 lg:right-6 lg:mt-0">
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-white shadow-[0_20px_50px_-24px_rgba(0,0,0,0.55)]">
                  <PhoneUI variant={fieldPhoneVariant(stage.id)} raised />
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 lg:mt-16 lg:max-w-[70%]">
                {scField.workflows.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-full border border-white/15 px-3 py-1.5 text-[12px] font-semibold text-white hover:border-brand-orange/50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ScWorkforceSection() {
  const [active, setActive] = useState(0);
  const view = scWorkforce.views[active] ?? scWorkforce.views[0];
  const related = scWorkforce.views.filter((_, i) => i !== active);

  return (
    <section className="border-b border-brand-line bg-[#F7F8FA]">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {scWorkforce.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {scWorkforce.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{scWorkforce.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-8 flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {scWorkforce.views.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(i)}
              className={
                "shrink-0 rounded-xl border px-4 py-3 text-left transition " +
                (active === i
                  ? "border-brand-navy bg-brand-navy text-white"
                  : "border-brand-line bg-white text-brand-navy hover:border-brand-navy/25")
              }
            >
              <span className="block text-[13px] font-semibold">{item.label}</span>
              <span className={"mt-1 block max-w-[16rem] text-[12px] " + (active === i ? "text-slate-300" : "text-brand-muted")}>
                {item.body}
              </span>
            </button>
          ))}
        </Reveal>

        <Reveal delay={90} className="mt-6">
          <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,0.32fr)]">
            <div key={view.id}>
              <ProductStage preview={view.preview} label={view.label} />
              <Link href={view.href} className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange">
                Explore {view.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="hidden space-y-4 lg:block">
              {related.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(scWorkforce.views.findIndex((v) => v.id === item.id))}
                  className="w-full overflow-hidden rounded-2xl border border-brand-line bg-white text-left"
                >
                  <p className="border-b border-brand-line/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                    Also on the record · {item.label}
                  </p>
                  <FeatureProductPreview preview={item.preview} framed scale="sm" className="min-h-[140px]" />
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ScProjectSection() {
  const [active, setActive] = useState(0);
  const view = scProject.views[active] ?? scProject.views[0];

  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {scProject.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {scProject.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{scProject.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10 overflow-hidden rounded-3xl border border-brand-line/80">
          <div className="flex items-center justify-between gap-3 border-b border-brand-line/70 bg-[#FAFBFD] px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
              Vertex CMS · Project workspace
            </p>
            <span className="hidden text-[11px] text-brand-muted sm:inline">One record · connected modules</span>
          </div>
          <div className="grid lg:grid-cols-[minmax(11.5rem,0.26fr)_minmax(0,0.74fr)]">
            <div className="flex gap-1 overflow-x-auto border-b border-brand-line/70 bg-[#FAFBFD] p-2 [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:border-b-0 lg:border-r [&::-webkit-scrollbar]:hidden">
              {scProject.views.map((item, i) => (
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
              <ProductStage preview={view.preview} label={view.label} />
              <Link href={view.href} className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange">
                Open {view.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ScFinancialsSection() {
  const [active, setActive] = useState(0);
  const step = scFinancials.path[active] ?? scFinancials.path[0];

  return (
    <section className="border-b border-brand-line bg-[#F4F7FB]">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {scFinancials.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {scFinancials.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{scFinancials.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10 overflow-hidden rounded-3xl border border-brand-line/80 bg-white">
          <div className="flex gap-2 overflow-x-auto border-b border-brand-line/70 px-4 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {scFinancials.path.map((item, i) => (
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
                {i < scFinancials.path.length - 1 ? <span className="text-brand-muted">→</span> : null}
              </span>
            ))}
          </div>

          <div key={step.id} className="p-4 sm:p-5">
            <ProductStage preview={step.preview} dark={"previewDark" in step ? step.previewDark : undefined} label={step.label} />
          </div>

          <div className="grid gap-px border-t border-brand-line/70 bg-brand-line/70 sm:grid-cols-2">
            <p className="bg-white px-5 py-4 text-[12px] leading-relaxed text-brand-muted">
              <span className="font-semibold text-brand-navy">Contract path · </span>
              {scFinancials.contract.join(" → ")}
            </p>
            <p className="bg-white px-5 py-4 text-[12px] leading-relaxed text-brand-muted">
              <span className="font-semibold text-brand-navy">Cost path · </span>
              {scFinancials.costFlow.join(" → ")}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 border-t border-brand-line/70 bg-[#FAFBFD] px-5 py-4">
            {scFinancials.modules.map((mod) => (
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

export function ScSubsSection() {
  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] lg:gap-14">
          <Reveal delay={80} className="relative order-2 lg:order-1 lg:pb-10">
            <div className="overflow-hidden rounded-[28px] border border-brand-line/80 bg-gradient-to-br from-[#E8EEF5] via-[#F3F6FA] to-[#E4EBF3] p-4 sm:p-6">
              <FeatureProductPreview
                preview={scSubs.preview}
                framed
                className="min-h-[240px] sm:min-h-[300px] lg:min-h-[340px]"
              />
              <div className="mt-4 overflow-hidden rounded-2xl border border-white/80 bg-white/95 shadow-lg lg:absolute lg:bottom-0 lg:right-6 lg:mt-0 lg:w-[48%]">
                <p className="border-b border-brand-line/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                  {scSubs.overlayLabel}
                </p>
                <FeatureProductPreview
                  preview={scSubs.overlayPreview}
                  scale="sm"
                  framed
                  className="min-h-[140px] sm:min-h-[160px]"
                />
              </div>
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
              {scSubs.eyebrow}
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {scSubs.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{scSubs.supporting}</p>
            <ul className="mt-8 divide-y divide-brand-line/70 border-y border-brand-line/70">
              {scSubs.points.map((point) => (
                <li key={point.title} className="py-4">
                  <Link href={point.href} className="group flex items-start justify-between gap-4">
                    <span>
                      <span className="block text-[15px] font-semibold text-brand-navy group-hover:text-brand-orange">
                        {point.title}
                      </span>
                      <span className="mt-1 block text-[13px] text-brand-muted">{point.body}</span>
                    </span>
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-brand-orange" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ScAiSection() {
  const [active, setActive] = useState(0);
  const stage = scAi.stages[active] ?? scAi.stages[0];

  return (
    <section className="border-b border-brand-line bg-[#F7F8FA]">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {scAi.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {scAi.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{scAi.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10 overflow-hidden rounded-3xl border border-brand-line/80 bg-white">
          <div className="grid lg:grid-cols-[minmax(14rem,0.32fr)_minmax(0,0.68fr)]">
            <div className="border-b border-brand-line/70 lg:border-b-0 lg:border-r">
              {scAi.stages.map((item, i) => {
                const selected = i === active;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActive(i)}
                    className={
                      "flex w-full items-start gap-3 border-b border-brand-line/70 px-5 py-5 text-left last:border-b-0 " +
                      (selected ? "bg-[#FAFBFD] shadow-[inset_3px_0_0_0_rgba(232,93,4,1)]" : "hover:bg-[#FAFBFD]/70")
                    }
                  >
                    <span className="font-mono text-[11px] font-bold text-brand-orange">
                      {item.label}
                      {i < scAi.stages.length - 1 ? <span className="mt-2 block text-brand-muted">↓</span> : null}
                    </span>
                    <span className="text-[13px] leading-snug text-brand-navy">{item.body}</span>
                  </button>
                );
              })}
            </div>
            <div key={stage.id} className="p-4 sm:p-5">
              <ProductStage preview={stage.preview} label={stage.label} />
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {scAi.modules.map((mod) => (
                  <Link key={mod.label} href={mod.href} className="text-[13px] font-semibold text-brand-navy hover:text-brand-orange">
                    {mod.label}
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-[12px] text-brand-muted">{scAi.note}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ScPlatformSection() {
  const [active, setActive] = useState(0);
  const area = scPlatform.areas[active];
  const theater = area ? scPlatform.previews[area.title] : undefined;

  if (!area || !theater) return null;

  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {scPlatform.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {scPlatform.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{scPlatform.supporting}</p>
        </Reveal>

        <Reveal delay={80} className="mt-10 overflow-hidden rounded-3xl border border-brand-line/80">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 bg-brand-navy px-4 py-4">
            {scPlatform.areas.map((item, i) => (
              <span key={item.title} className="inline-flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={
                    "rounded-full px-3.5 py-2 text-[12px] font-semibold transition " +
                    (active === i ? "bg-brand-orange text-white" : "text-slate-300 hover:text-white")
                  }
                >
                  {item.title}
                </button>
                {i < scPlatform.areas.length - 1 ? (
                  <span className="text-[12px] font-semibold text-white/35" aria-hidden="true">
                    +
                  </span>
                ) : null}
              </span>
            ))}
          </div>
          <div key={area.title} className="bg-[#FAFBFD] p-4 sm:p-5">
            <ProductStage preview={theater.preview} dark={theater.dark} label={area.title} />
            <div className="mt-4 flex flex-wrap gap-2">
              {area.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full border border-brand-line bg-white px-3 py-1.5 text-[12px] font-medium text-brand-navy hover:border-brand-orange/35"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ScCtaSection() {
  return (
    <section className="bg-brand-navy">
      <div className="site-shell section-spacing">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="display-title-light text-3xl sm:text-4xl lg:text-[2.75rem]">{scCta.headline}</h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300">{scCta.supporting}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={scCta.primary.href} className="btn-primary w-full sm:w-auto">
              {scCta.primary.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={scCta.secondary.href}
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/25 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 sm:w-auto"
            >
              {scCta.secondary.label}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
