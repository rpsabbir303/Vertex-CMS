"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "@/components/Icons";
import { ProductPreviewClip } from "@/components/marketing/features/ProductPreviewClip";
import { PhoneUI } from "@/components/mockups/ProductMockups";
import { Reveal } from "@/components/Reveal";
import type { PreviewKey } from "@/lib/marketing/features/register";
import {
  civilAi,
  civilChange,
  civilConnected,
  civilCta,
  civilDocuments,
  civilField,
  civilFinancials,
  civilHero,
  civilOwner,
  civilPlan,
  civilPlatform,
  civilWorkforce,
} from "@/lib/marketing/solutions/civilInfrastructure";

function ProductStage({
  preview,
  dark,
  label,
  className = "",
  size = "lg",
  scale = "lg",
}: {
  preview: PreviewKey;
  dark?: boolean;
  label?: string;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  scale?: "sm" | "md" | "lg";
}) {
  return (
    <ProductPreviewClip
      preview={preview}
      dark={dark}
      label={label}
      size={size}
      scale={scale}
      chrome
      className={className}
    />
  );
}

function fieldPhoneVariant(id: string): "home" | "log" | "capture" {
  if (id === "capture") return "capture";
  if (id === "sync") return "home";
  return "log";
}

type FinNode = {
  id: string;
  label: string;
  preview: PreviewKey;
  previewDark?: boolean;
};

export function CivilHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-brand-line/70 bg-[#F4F7FB]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(8,35,63,0.03), transparent 42%), linear-gradient(to right, rgba(8,35,63,0.045) 1px, transparent 1px)",
          backgroundSize: "auto, 72px 100%",
        }}
        aria-hidden="true"
      />
      <div className="site-shell relative py-14 sm:py-16 lg:py-20">
        <div className="grid items-start gap-10 xl:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] xl:gap-8">
          <Reveal className="xl:pt-6">
            <p className="eyebrow">{civilHero.eyebrow}</p>
            <h1 className="display-title mt-4 text-[2.35rem] leading-[1.04] sm:text-5xl lg:text-[3.15rem]">
              {civilHero.headline}
            </h1>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-brand-muted">{civilHero.supporting}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={civilHero.primary.href} className="btn-primary w-full sm:w-auto">
                {civilHero.primary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={civilHero.secondary.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-brand-line bg-white px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-brand-navy transition hover:border-brand-navy/25 sm:w-auto"
              >
                {civilHero.secondary.label}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={80} className="min-w-0">
            <div className="overflow-hidden rounded-[28px] border border-brand-line/80 bg-brand-navy">
              <div className="grid lg:grid-cols-[minmax(9.5rem,0.22fr)_minmax(0,0.78fr)]">
                <div className="relative border-b border-white/10 px-4 py-5 lg:border-b-0 lg:border-r lg:px-5 lg:py-6">
                  <div
                    className="pointer-events-none absolute bottom-6 left-[27px] top-10 hidden w-px bg-white/15 lg:block"
                    aria-hidden="true"
                  />
                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Connected control
                  </p>
                  <ol className="flex gap-2 overflow-x-auto [scrollbar-width:none] lg:flex-col lg:gap-0 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
                    {civilHero.chips.map((chip, i) => (
                      <li key={chip.label} className="relative z-[1] flex shrink-0 items-center gap-3 lg:py-2.5">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-brand-orange">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <Link
                          href={chip.href}
                          className="whitespace-nowrap text-[12px] font-semibold text-white hover:text-brand-orange"
                        >
                          {chip.label}
                        </Link>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="relative bg-[#0B2238] p-3 sm:p-4 lg:p-5">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    VertexBuild · {civilHero.previewLabel}
                  </p>
                  <ProductPreviewClip preview={civilHero.preview} size="xl" scale="lg" />
                  <div className="mt-3 overflow-hidden rounded-2xl border border-white/15 bg-[#061525] shadow-lg lg:absolute lg:bottom-5 lg:right-5 lg:mt-0 lg:w-[42%]">
                    <p className="border-b border-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                      {civilHero.overlayLabel}
                    </p>
                    <ProductPreviewClip preview={civilHero.overlayPreview} size="xs" scale="sm" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function CivilConnectedSection() {
  const [active, setActive] = useState(1);
  const node = civilConnected.nodes[active] ?? civilConnected.nodes[0];
  const next = civilConnected.nodes[(active + 1) % civilConnected.nodes.length];

  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {civilConnected.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {civilConnected.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{civilConnected.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10 overflow-hidden rounded-3xl border border-brand-line/80 bg-brand-navy">
          <div className="relative border-b border-white/10 px-4 py-5 sm:px-6">
            <div className="pointer-events-none absolute left-8 right-8 top-[38px] hidden h-px bg-white/15 lg:block" aria-hidden="true" />
            <div className="flex gap-2 overflow-x-auto [scrollbar-width:none] lg:justify-between [&::-webkit-scrollbar]:hidden">
              {civilConnected.nodes.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  className="relative z-[1] flex min-w-[5.5rem] flex-col items-center gap-2"
                >
                  <span
                    className={
                      "flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold " +
                      (i === active ? "bg-brand-orange text-white" : "bg-white/10 text-slate-300")
                    }
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={"text-[11px] font-semibold " + (i === active ? "text-white" : "text-slate-400")}>
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div key={node.id} className="grid gap-4 p-4 sm:p-5 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,0.32fr)]">
            <ProductStage
              preview={node.preview}
              dark={"previewDark" in node ? node.previewDark : undefined}
              label={`VertexBuild · ${node.label}`}
              size="lg"
            />
            <div className="flex min-w-0 flex-col justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">Connected next</p>
                <p className="mt-2 text-[15px] font-semibold text-white">
                  {node.label} → {next.label}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-300">{node.detail}</p>
              </div>
              <ProductStage
                preview={next.preview}
                dark={"previewDark" in next ? next.previewDark : undefined}
                label={next.label}
                size="sm"
                scale="sm"
              />
              <Link href={node.href} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange">
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

export function CivilPlanSection() {
  const [active, setActive] = useState(0);
  const stage = civilPlan.stages[active] ?? civilPlan.stages[0];

  return (
    <section className="border-b border-brand-line bg-[#F7F8FA]">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {civilPlan.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {civilPlan.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{civilPlan.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10">
          <div className="relative mb-6">
            <div className="pointer-events-none absolute left-4 right-4 top-4 hidden h-px bg-brand-line sm:block" aria-hidden="true" />
            <div className="flex gap-2 overflow-x-auto [scrollbar-width:none] sm:justify-between [&::-webkit-scrollbar]:hidden">
              {civilPlan.stages.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className="relative z-[1] flex min-w-[7.5rem] flex-col items-start gap-2 sm:items-center"
                >
                  <span
                    className={
                      "flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold " +
                      (i === active ? "bg-brand-navy text-white" : "bg-white text-brand-muted ring-1 ring-brand-line")
                    }
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[13px] font-semibold text-brand-navy">
                    {item.label}
                    {i < civilPlan.stages.length - 1 ? " →" : ""}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div key={stage.id} className="overflow-hidden rounded-3xl border border-brand-line/80 bg-white p-4 sm:p-5">
            <p className="mb-4 text-[14px] text-brand-muted">{stage.body}</p>
            <ProductStage
              preview={stage.preview}
              dark={"previewDark" in stage ? stage.previewDark : undefined}
              label={stage.label}
            />
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <Link href={stage.href} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange">
                Open {stage.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <div className="flex flex-wrap gap-2">
                {civilPlan.modules.map((mod) => (
                  <Link
                    key={mod.label}
                    href={mod.href}
                    className="rounded-full border border-brand-line bg-[#FAFBFD] px-3 py-1.5 text-[11px] font-medium text-brand-navy hover:border-brand-orange/35"
                  >
                    {mod.label}
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

export function CivilFieldSection() {
  const [active, setActive] = useState(0);
  const [sync, setSync] = useState(0);
  const stage = civilField.stages[active] ?? civilField.stages[0];

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setSync(civilField.sync.length - 1);
      return;
    }
    const id = window.setInterval(() => setSync((s) => (s + 1) % civilField.sync.length), 1600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-14">
          <Reveal>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
              {civilField.eyebrow}
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {civilField.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{civilField.supporting}</p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {civilField.stages.map((item, i) => (
                <span key={item.id} className="inline-flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={
                      "rounded-full px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] " +
                      (active === i ? "bg-brand-navy text-white" : "border border-brand-line bg-[#FAFBFD] text-brand-navy")
                    }
                  >
                    {item.label}
                  </button>
                  {i < civilField.stages.length - 1 ? (
                    <span className="hidden text-brand-muted sm:inline" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </span>
              ))}
            </div>
            <p className="mt-4 text-[14px] text-brand-muted">{stage.body}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {civilField.sync.map((state, i) => (
                <span
                  key={state}
                  className={
                    "rounded-full px-2.5 py-1 text-[11px] font-semibold " +
                    (i === sync ? "bg-brand-orange text-white" : "border border-brand-line bg-[#FAFBFD] text-brand-muted")
                  }
                >
                  {state}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80} className="relative">
            <div key={stage.id} className="overflow-hidden rounded-3xl border border-brand-line/80 bg-gradient-to-br from-[#E8EEF5] via-[#F0F4F9] to-[#E4EBF4] p-4 sm:p-5">
              <ProductStage preview={stage.preview} label={stage.label} />
              <div className="mt-4 flex justify-center lg:absolute lg:bottom-6 lg:right-6 lg:mt-0">
                <div className="overflow-hidden rounded-2xl border border-brand-line bg-white shadow-[0_20px_50px_-24px_rgba(8,37,66,0.45)]">
                  <PhoneUI variant={fieldPhoneVariant(stage.id)} raised />
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 lg:mt-16 lg:max-w-[68%]">
                {civilField.workflows.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-full border border-brand-line bg-white px-3 py-1.5 text-[12px] font-semibold text-brand-navy hover:border-brand-orange/35"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function CivilDocumentsSection() {
  const [active, setActive] = useState(0);
  const stage = civilDocuments.stages[active] ?? civilDocuments.stages[0];

  return (
    <section className="border-b border-brand-line bg-[#F4F7FB]">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {civilDocuments.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {civilDocuments.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{civilDocuments.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10 overflow-hidden rounded-3xl border border-brand-line/80">
          <div className="flex gap-1 overflow-x-auto bg-brand-navy px-3 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {civilDocuments.stages.map((item, i) => (
              <span key={item.id} className="inline-flex shrink-0 items-center">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={
                    "rounded-full px-3.5 py-1.5 text-[12px] font-semibold " +
                    (i === active ? "bg-brand-orange text-white" : "text-slate-300 hover:text-white")
                  }
                >
                  {item.label}
                </button>
                {i < civilDocuments.stages.length - 1 ? (
                  <span className="px-1.5 text-[11px] text-white/35" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </span>
            ))}
          </div>
          <div key={stage.id} className="bg-white p-4 sm:p-5">
            <p className="mb-4 text-[14px] text-brand-muted">{stage.body}</p>
            <ProductStage preview={stage.preview} label={stage.label} />
            <Link href={stage.href} className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange">
              Open {stage.label}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CivilChangeSection() {
  const [active, setActive] = useState(0);
  const stage = civilChange.stages[active] ?? civilChange.stages[0];

  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {civilChange.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {civilChange.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{civilChange.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10 overflow-hidden rounded-3xl border border-brand-line/80 bg-[#FAFBFD]">
          <div className="grid sm:grid-cols-4">
            {civilChange.stages.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                className={
                  "border-b border-brand-line/70 px-4 py-5 text-left last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 " +
                  (i === active ? "bg-white shadow-[inset_0_3px_0_0_rgba(232,93,4,1)]" : "hover:bg-white/70")
                }
              >
                <span className="font-mono text-[10px] font-bold text-brand-orange">
                  {item.label}
                  {i < civilChange.stages.length - 1 ? " →" : ""}
                </span>
                <span className="mt-2 hidden text-[13px] leading-snug text-brand-muted lg:block">{item.body}</span>
              </button>
            ))}
          </div>
          <div key={stage.id} className="border-t border-brand-line/70 bg-white p-4 sm:p-5">
            <p className="mb-4 text-[14px] text-brand-muted lg:hidden">{stage.body}</p>
            <ProductStage
              preview={stage.preview}
              dark={"previewDark" in stage ? stage.previewDark : undefined}
              label={stage.label}
            />
            <div className="mt-4 flex flex-wrap gap-2">
              {civilChange.modules.map((mod) => (
                <Link
                  key={mod.label}
                  href={mod.href}
                  className="rounded-full border border-brand-line bg-[#FAFBFD] px-3 py-1.5 text-[12px] font-medium text-brand-navy hover:border-brand-orange/35"
                >
                  {mod.label}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CivilFinancialsSection() {
  const pictureNode: FinNode = {
    id: "picture",
    label: civilFinancials.picture.label,
    preview: civilFinancials.picture.preview,
    previewDark: civilFinancials.picture.previewDark,
  };
  const allNodes: FinNode[] = [...civilFinancials.revenue.steps, ...civilFinancials.cost.steps, pictureNode];
  const [activeId, setActiveId] = useState("picture");
  const active = allNodes.find((n) => n.id === activeId) ?? pictureNode;

  return (
    <section className="border-b border-brand-line bg-brand-navy">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {civilFinancials.eyebrow}
          </p>
          <h2 className="display-title-light mt-3 text-3xl sm:text-4xl">{civilFinancials.headline}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-300">{civilFinancials.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
          <button
            type="button"
            onClick={() => setActiveId("picture")}
            className={
              "flex w-full items-center justify-center px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.14em] " +
              (activeId === "picture" ? "bg-brand-orange text-white" : "text-slate-300 hover:bg-white/5")
            }
          >
            {civilFinancials.picture.label}
          </button>
          <div key={active.id} className="p-4 sm:p-5">
            <ProductStage
              preview={active.preview}
              dark={"previewDark" in active ? active.previewDark : undefined}
              label={active.label}
            />
          </div>
          <div className="grid gap-px border-t border-white/10 bg-white/10 lg:grid-cols-2">
            <div className="bg-[#061525] px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                {civilFinancials.revenue.label}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-1.5">
                {civilFinancials.revenue.steps.map((step, i) => (
                  <span key={step.id} className="inline-flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setActiveId(step.id)}
                      className={
                        "rounded-lg px-2.5 py-1.5 text-[12px] font-semibold " +
                        (activeId === step.id ? "bg-white text-brand-navy" : "border border-white/15 text-slate-200")
                      }
                    >
                      {step.label}
                    </button>
                    {i < civilFinancials.revenue.steps.length - 1 ? <span className="text-slate-500">→</span> : null}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-[#061525] px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">{civilFinancials.cost.label}</p>
              <div className="mt-3 flex flex-wrap items-center gap-1.5">
                {civilFinancials.cost.steps.map((step, i) => (
                  <span key={step.id} className="inline-flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setActiveId(step.id)}
                      className={
                        "rounded-lg px-2.5 py-1.5 text-[12px] font-semibold " +
                        (activeId === step.id ? "bg-white text-brand-navy" : "border border-white/15 text-slate-200")
                      }
                    >
                      {step.label}
                    </button>
                    {i < civilFinancials.cost.steps.length - 1 ? <span className="text-slate-500">→</span> : null}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 border-t border-white/10 px-5 py-4">
            {civilFinancials.modules.map((mod) => (
              <Link
                key={mod.label}
                href={mod.href}
                className="rounded-full border border-white/15 px-3 py-1.5 text-[12px] font-medium text-white hover:border-brand-orange/50"
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

export function CivilWorkforceSection() {
  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:gap-14">
          <Reveal delay={80} className="relative order-2 lg:order-1 lg:pb-10">
            <div className="overflow-hidden rounded-[28px] border border-brand-line/80 bg-gradient-to-br from-[#E8EEF5] via-[#F3F6FA] to-[#E4EBF3] p-4 sm:p-6">
              <ProductPreviewClip preview={civilWorkforce.preview} size="lg" scale="lg" />
              <div className="mt-4 overflow-hidden rounded-2xl border border-white/80 bg-white/95 shadow-lg lg:absolute lg:bottom-0 lg:right-6 lg:mt-0 lg:w-[48%]">
                <p className="border-b border-brand-line/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                  {civilWorkforce.overlayLabel}
                </p>
                <ProductPreviewClip preview={civilWorkforce.overlayPreview} size="sm" scale="sm" />
              </div>
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
              {civilWorkforce.eyebrow}
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {civilWorkforce.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{civilWorkforce.supporting}</p>
            <ul className="mt-8 divide-y divide-brand-line/70 border-y border-brand-line/70">
              {civilWorkforce.points.map((point) => (
                <li key={point.title} className="py-3">
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

export function CivilOwnerSection() {
  const [active, setActive] = useState(0);
  const stage = civilOwner.stages[active] ?? civilOwner.stages[0];

  return (
    <section className="border-b border-brand-line bg-[#F7F8FA]">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {civilOwner.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {civilOwner.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{civilOwner.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10">
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {civilOwner.stages.map((item, i) => (
              <span key={item.id} className="inline-flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={
                    "rounded-full px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] " +
                    (active === i ? "bg-brand-navy text-white" : "border border-brand-line bg-white text-brand-navy")
                  }
                >
                  {item.label}
                </button>
                {i < civilOwner.stages.length - 1 ? (
                  <span className="text-brand-muted" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </span>
            ))}
          </div>
          <div key={stage.id} className="relative mt-6 overflow-hidden rounded-3xl border border-brand-line/80 bg-white p-4 sm:p-5 lg:pb-8">
            <p className="mb-4 max-w-xl text-[14px] text-brand-muted">{stage.body}</p>
            <ProductStage preview={stage.preview} label={stage.label} />
            <div className="mt-4 overflow-hidden rounded-2xl border border-brand-line bg-[#FAFBFD] lg:absolute lg:bottom-5 lg:right-5 lg:mt-0 lg:w-[38%]">
              <p className="border-b border-brand-line/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                {civilOwner.warranty.label}
              </p>
              <ProductPreviewClip preview={civilOwner.warranty.preview} size="xs" scale="sm" />
            </div>
            <Link
              href={civilOwner.href}
              className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange lg:mt-6"
            >
              Explore Customer Portals
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CivilAiSection() {
  const [active, setActive] = useState(0);
  const stage = civilAi.stages[active] ?? civilAi.stages[0];

  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {civilAi.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {civilAi.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{civilAi.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10 overflow-hidden rounded-3xl border border-brand-line/80">
          <div className="grid lg:grid-cols-[minmax(13rem,0.3fr)_minmax(0,0.7fr)]">
            <div className="bg-brand-navy">
              {civilAi.stages.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={
                    "flex w-full items-start gap-3 border-b border-white/10 px-5 py-5 text-left last:border-b-0 " +
                    (i === active ? "bg-white/10" : "hover:bg-white/5")
                  }
                >
                  <span className="font-mono text-[11px] font-bold text-brand-orange">
                    {item.label}
                    {i < civilAi.stages.length - 1 ? <span className="mt-2 block text-slate-500">↓</span> : null}
                  </span>
                  <span className="text-[13px] leading-snug text-slate-200">{item.body}</span>
                </button>
              ))}
            </div>
            <div key={stage.id} className="bg-[#FAFBFD] p-4 sm:p-5">
              <ProductStage preview={stage.preview} label={stage.label} />
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {civilAi.modules.map((mod) => (
                  <Link key={mod.label} href={mod.href} className="text-[13px] font-semibold text-brand-navy hover:text-brand-orange">
                    {mod.label}
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-[12px] text-brand-muted">{civilAi.note}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CivilPlatformSection() {
  const [active, setActive] = useState(0);
  const area = civilPlatform.areas[active];
  const theater = area ? civilPlatform.previews[area.title] : undefined;

  if (!area || !theater) return null;

  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {civilPlatform.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {civilPlatform.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{civilPlatform.supporting}</p>
        </Reveal>

        <Reveal delay={80} className="mt-10 overflow-hidden rounded-3xl border border-brand-line/80">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 bg-brand-navy px-4 py-4">
            {civilPlatform.areas.map((item, i) => (
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
                {i < civilPlatform.areas.length - 1 ? (
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

export function CivilCtaSection() {
  return (
    <section className="bg-brand-navy">
      <div className="site-shell section-spacing">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="display-title-light text-3xl sm:text-4xl lg:text-[2.75rem]">{civilCta.headline}</h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300">{civilCta.supporting}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={civilCta.primary.href} className="btn-primary w-full sm:w-auto">
              {civilCta.primary.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={civilCta.secondary.href}
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/25 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 sm:w-auto"
            >
              {civilCta.secondary.label}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
