"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "@/components/Icons";
import { FeatureProductPreview } from "@/components/marketing/features/FeatureProductPreview";
import { PhoneUI } from "@/components/mockups/ProductMockups";
import { Reveal } from "@/components/Reveal";
import type { PreviewKey } from "@/lib/marketing/features/register";
import {
  commercialAi,
  commercialConnected,
  commercialCoordination,
  commercialCta,
  commercialDocuments,
  commercialField,
  commercialFinancials,
  commercialHero,
  commercialOwner,
  commercialPlatform,
  commercialSubs,
} from "@/lib/marketing/solutions/commercialConstruction";

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

export function CommercialHeroSection() {
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
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{commercialHero.eyebrow}</p>
          <h1 className="display-title mt-4 text-[2.35rem] leading-[1.04] sm:text-5xl lg:text-[3.2rem]">
            {commercialHero.headline}
          </h1>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-brand-muted">{commercialHero.supporting}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={commercialHero.primary.href} className="btn-primary w-full sm:w-auto">
              {commercialHero.primary.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={commercialHero.secondary.href}
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-brand-line bg-white px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-brand-navy transition hover:border-brand-navy/25 sm:w-auto"
            >
              {commercialHero.secondary.label}
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2">
            {commercialHero.chips.map((chip, i) => (
              <span key={chip.label} className="inline-flex items-center gap-2">
                <Link
                  href={chip.href}
                  className="rounded-full border border-brand-line/80 bg-white px-3 py-1.5 text-[11px] font-semibold text-brand-navy transition hover:border-brand-orange/40"
                >
                  {chip.label}
                </Link>
                {i < commercialHero.chips.length - 1 ? (
                  <span className="hidden text-[11px] text-brand-muted sm:inline" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={90} className="relative mt-12 lg:pb-12">
          <div className="overflow-hidden rounded-2xl border border-brand-line bg-gradient-to-br from-[#E8EEF5] via-[#F0F4F9] to-[#E4EBF4] p-3 sm:p-5">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
              VertexBuild · {commercialHero.previewLabel}
            </p>
            <FeatureProductPreview
              preview={commercialHero.preview}
              framed
              className="min-h-[240px] sm:min-h-[320px] lg:min-h-[420px]"
            />
          </div>
          <div className="mt-4 overflow-hidden rounded-2xl border border-brand-line bg-white shadow-lg lg:absolute lg:bottom-0 lg:right-8 lg:mt-0 lg:w-[40%]">
            <p className="border-b border-brand-line/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
              {commercialHero.overlayLabel}
            </p>
            <FeatureProductPreview
              preview={commercialHero.overlayPreview}
              framed
              scale="sm"
              className="min-h-[140px] sm:min-h-[170px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CommercialConnectedSection() {
  const [active, setActive] = useState(2);
  const node = commercialConnected.nodes[active] ?? commercialConnected.nodes[0];
  const next = commercialConnected.nodes[(active + 1) % commercialConnected.nodes.length];

  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {commercialConnected.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {commercialConnected.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{commercialConnected.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10 overflow-hidden rounded-3xl border border-brand-line/80 bg-[#FAFBFD]">
          <div className="border-b border-brand-line/70 px-3 py-3 sm:px-5">
            <div className="flex gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {commercialConnected.nodes.map((item, i) => (
                <span key={item.id} className="inline-flex shrink-0 items-center">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={
                      "rounded-full px-3 py-1.5 text-[12px] font-semibold " +
                      (i === active ? "bg-brand-navy text-white" : "text-brand-navy hover:bg-white")
                    }
                  >
                    {item.label}
                  </button>
                  {i < commercialConnected.nodes.length - 1 ? (
                    <span className="px-1 text-[11px] text-brand-muted" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </span>
              ))}
            </div>
          </div>

          <div className="relative p-4 sm:p-5">
            <div key={node.id}>
              <ProductStage
                preview={node.preview}
                dark={"previewDark" in node ? node.previewDark : undefined}
                label={`VertexBuild · ${node.label}`}
              />
            </div>
            <button
              type="button"
              onClick={() => setActive((active + 1) % commercialConnected.nodes.length)}
              className="mt-4 w-full overflow-hidden rounded-2xl border border-brand-line bg-white text-left shadow-md lg:absolute lg:bottom-8 lg:right-8 lg:mt-0 lg:w-[40%]"
            >
              <p className="border-b border-brand-line/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                Connected · {next.label}
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
        </Reveal>
      </div>
    </section>
  );
}

export function CommercialCoordinationSection() {
  const [active, setActive] = useState(0);
  const stage = commercialCoordination.stages[active] ?? commercialCoordination.stages[0];

  return (
    <section className="border-b border-brand-line bg-[#F7F8FA]">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {commercialCoordination.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {commercialCoordination.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{commercialCoordination.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10 overflow-hidden rounded-3xl border border-brand-line/80 bg-white">
          <div className="grid sm:grid-cols-4">
            {commercialCoordination.stages.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                className={
                  "border-b border-brand-line/70 px-4 py-5 text-left last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 " +
                  (i === active ? "bg-[#FAFBFD] shadow-[inset_0_3px_0_0_rgba(232,93,4,1)]" : "hover:bg-[#FAFBFD]/70")
                }
              >
                <span className="font-mono text-[10px] font-bold text-brand-orange">
                  {item.label}
                  {i < commercialCoordination.stages.length - 1 ? " →" : ""}
                </span>
                <span className="mt-2 hidden text-[13px] leading-snug text-brand-muted lg:block">{item.body}</span>
              </button>
            ))}
          </div>
          <div key={stage.id} className="border-t border-brand-line/70 bg-[#F4F7FB] p-4 sm:p-5">
            <p className="mb-4 text-[14px] text-brand-muted lg:hidden">{stage.body}</p>
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
                {commercialCoordination.modules.map((mod) => (
                  <Link
                    key={mod.label}
                    href={mod.href}
                    className="rounded-full border border-brand-line bg-white px-3 py-1.5 text-[11px] font-medium text-brand-navy hover:border-brand-orange/35"
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

export function CommercialFieldSection() {
  const [active, setActive] = useState(0);
  const [sync, setSync] = useState(0);
  const stage = commercialField.stages[active] ?? commercialField.stages[0];

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setSync(commercialField.sync.length - 1);
      return;
    }
    const id = window.setInterval(() => setSync((s) => (s + 1) % commercialField.sync.length), 1600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:gap-14">
          <Reveal>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
              {commercialField.eyebrow}
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {commercialField.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{commercialField.supporting}</p>
            <div className="mt-6 space-y-2">
              {commercialField.stages.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={
                    "flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left transition " +
                    (active === i
                      ? "border-brand-navy bg-brand-navy text-white"
                      : "border-brand-line bg-[#FAFBFD] hover:bg-white")
                  }
                >
                  <span className={"font-mono text-[10px] font-bold " + (active === i ? "text-brand-orange" : "text-brand-orange")}>
                    {item.label}
                  </span>
                  <span className={"text-[13px] leading-snug " + (active === i ? "text-slate-200" : "text-brand-muted")}>
                    {item.body}
                  </span>
                </button>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {commercialField.sync.map((state, i) => (
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
                {commercialField.workflows.map((item) => (
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

export function CommercialFinancialsSection() {
  const pictureNode: FinNode = {
    id: "picture",
    label: commercialFinancials.picture.label,
    preview: commercialFinancials.picture.preview,
    previewDark: commercialFinancials.picture.previewDark,
  };
  const allNodes: FinNode[] = [
    pictureNode,
    ...commercialFinancials.revenue.steps,
    ...commercialFinancials.cost.steps,
  ];
  const [activeId, setActiveId] = useState("picture");
  const active = allNodes.find((n) => n.id === activeId) ?? pictureNode;

  return (
    <section className="border-b border-brand-line bg-[#F4F7FB]">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {commercialFinancials.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {commercialFinancials.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{commercialFinancials.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10 overflow-hidden rounded-3xl border border-brand-line/80 bg-white">
          <button
            type="button"
            onClick={() => setActiveId("picture")}
            className={
              "flex w-full items-center justify-center gap-2 px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.14em] transition " +
              (activeId === "picture" ? "bg-brand-navy text-white" : "bg-[#FAFBFD] text-brand-navy hover:bg-white")
            }
          >
            {commercialFinancials.picture.label}
          </button>

          <div key={active.id} className="p-4 sm:p-5">
            <ProductStage
              preview={active.preview}
              dark={"previewDark" in active ? active.previewDark : undefined}
              label={active.label}
            />
          </div>

          <div className="grid gap-px border-t border-brand-line/70 bg-brand-line/70 lg:grid-cols-2">
            <FlowRail
              label={commercialFinancials.revenue.label}
              steps={commercialFinancials.revenue.steps}
              activeId={activeId}
              onSelect={setActiveId}
            />
            <FlowRail
              label={commercialFinancials.cost.label}
              steps={commercialFinancials.cost.steps}
              activeId={activeId}
              onSelect={setActiveId}
            />
          </div>
          <div className="flex flex-wrap gap-2 border-t border-brand-line/70 bg-[#FAFBFD] px-5 py-4">
            {commercialFinancials.modules.map((mod) => (
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

function FlowRail({
  label,
  steps,
  activeId,
  onSelect,
}: {
  label: string;
  steps: readonly FinNode[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="bg-white px-5 py-4">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">{label}</p>
      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        {steps.map((step, i) => (
          <span key={step.id} className="inline-flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => onSelect(step.id)}
              className={
                "rounded-lg px-2.5 py-1.5 text-[12px] font-semibold transition " +
                (activeId === step.id
                  ? "bg-brand-navy text-white"
                  : "border border-brand-line bg-[#FAFBFD] text-brand-navy hover:border-brand-orange/40")
              }
            >
              {step.label}
            </button>
            {i < steps.length - 1 ? <span className="text-brand-muted">→</span> : null}
          </span>
        ))}
      </div>
    </div>
  );
}

export function CommercialSubsSection() {
  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-14">
          <Reveal>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
              {commercialSubs.eyebrow}
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {commercialSubs.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{commercialSubs.supporting}</p>
            <ul className="mt-8 divide-y divide-brand-line/70 border-y border-brand-line/70">
              {commercialSubs.points.map((point) => (
                <li key={point.title} className="py-3.5">
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
          <Reveal delay={80} className="relative lg:pb-10">
            <div className="overflow-hidden rounded-[28px] border border-brand-line/80 bg-gradient-to-br from-[#E8EEF5] via-[#F3F6FA] to-[#E4EBF3] p-4 sm:p-6">
              <FeatureProductPreview
                preview={commercialSubs.preview}
                framed
                className="min-h-[240px] sm:min-h-[300px] lg:min-h-[340px]"
              />
              <div className="mt-4 overflow-hidden rounded-2xl border border-white/80 bg-white/95 shadow-lg lg:absolute lg:bottom-0 lg:right-6 lg:mt-0 lg:w-[48%]">
                <p className="border-b border-brand-line/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                  {commercialSubs.overlayLabel}
                </p>
                <FeatureProductPreview
                  preview={commercialSubs.overlayPreview}
                  scale="sm"
                  framed
                  className="min-h-[140px] sm:min-h-[160px]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function CommercialDocumentsSection() {
  const [active, setActive] = useState(0);
  const view = commercialDocuments.views[active] ?? commercialDocuments.views[0];

  return (
    <section className="border-b border-brand-line bg-[#F4F7FB]">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {commercialDocuments.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {commercialDocuments.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{commercialDocuments.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10 overflow-hidden rounded-3xl border border-brand-line/80 bg-white">
          <div className="flex items-center justify-between gap-3 border-b border-brand-line/70 bg-brand-navy px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-300">
              VertexBuild · Project information
            </p>
            <span className="hidden text-[11px] text-slate-400 sm:inline">Current revision · connected records</span>
          </div>
          <div className="grid lg:grid-cols-[minmax(12rem,0.26fr)_minmax(0,0.74fr)]">
            <div className="flex gap-1 overflow-x-auto border-b border-brand-line/70 bg-[#FAFBFD] p-2 [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:border-b-0 lg:border-r [&::-webkit-scrollbar]:hidden">
              {commercialDocuments.views.map((item, i) => (
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
            <div key={view.id} className="p-4 sm:p-5">
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

export function CommercialOwnerSection() {
  const [active, setActive] = useState(0);
  const stage = commercialOwner.stages[active] ?? commercialOwner.stages[0];

  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {commercialOwner.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {commercialOwner.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{commercialOwner.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10">
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {commercialOwner.stages.map((item, i) => (
              <span key={item.id} className="inline-flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={
                    "rounded-full px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] transition " +
                    (active === i ? "bg-brand-navy text-white" : "border border-brand-line bg-[#FAFBFD] text-brand-navy")
                  }
                >
                  {item.label}
                </button>
                {i < commercialOwner.stages.length - 1 ? (
                  <span className="text-brand-muted" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </span>
            ))}
          </div>
          <div key={stage.id} className="mt-6 overflow-hidden rounded-3xl border border-brand-line/80 bg-[#FAFBFD] p-4 sm:p-5">
            <p className="mb-4 max-w-xl text-[14px] text-brand-muted">{stage.body}</p>
            <ProductStage preview={stage.preview} label={stage.label} />
            <Link
              href={commercialOwner.href}
              className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange"
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

export function CommercialAiSection() {
  const [active, setActive] = useState(0);
  const stage = commercialAi.stages[active] ?? commercialAi.stages[0];

  return (
    <section className="border-b border-brand-line bg-[#F7F8FA]">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {commercialAi.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {commercialAi.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{commercialAi.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10 overflow-hidden rounded-3xl border border-brand-line/80 bg-white">
          <div className="flex gap-0 overflow-x-auto border-b border-brand-line/70 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {commercialAi.stages.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                className={
                  "min-w-[11rem] flex-1 border-r border-brand-line/70 px-5 py-5 text-left last:border-r-0 " +
                  (i === active ? "bg-[#FAFBFD] shadow-[inset_0_3px_0_0_rgba(232,93,4,1)]" : "hover:bg-[#FAFBFD]/70")
                }
              >
                <span className="font-mono text-[10px] font-bold text-brand-orange">
                  {item.label}
                  {i < commercialAi.stages.length - 1 ? " →" : ""}
                </span>
                <span className="mt-2 block text-[13px] leading-snug text-brand-navy">{item.body}</span>
              </button>
            ))}
          </div>
          <div key={stage.id} className="p-4 sm:p-5">
            <ProductStage preview={stage.preview} label={stage.label} />
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {commercialAi.modules.map((mod) => (
                <Link key={mod.label} href={mod.href} className="text-[13px] font-semibold text-brand-navy hover:text-brand-orange">
                  {mod.label}
                </Link>
              ))}
            </div>
            <p className="mt-4 text-[12px] text-brand-muted">{commercialAi.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CommercialPlatformSection() {
  const [active, setActive] = useState(0);
  const area = commercialPlatform.areas[active];
  const theater = area ? commercialPlatform.previews[area.title] : undefined;

  if (!area || !theater) return null;

  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {commercialPlatform.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {commercialPlatform.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{commercialPlatform.supporting}</p>
        </Reveal>

        <Reveal delay={80} className="mt-10 overflow-hidden rounded-3xl border border-brand-line/80">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 bg-brand-navy px-4 py-4">
            {commercialPlatform.areas.map((item, i) => (
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
                {i < commercialPlatform.areas.length - 1 ? (
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

export function CommercialCtaSection() {
  return (
    <section className="bg-brand-navy">
      <div className="site-shell section-spacing">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="display-title-light text-3xl sm:text-4xl lg:text-[2.75rem]">{commercialCta.headline}</h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300">{commercialCta.supporting}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={commercialCta.primary.href} className="btn-primary w-full sm:w-auto">
              {commercialCta.primary.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={commercialCta.secondary.href}
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/25 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 sm:w-auto"
            >
              {commercialCta.secondary.label}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
