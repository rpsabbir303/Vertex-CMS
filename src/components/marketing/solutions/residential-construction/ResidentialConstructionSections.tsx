"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "@/components/Icons";
import { FeatureProductPreview } from "@/components/marketing/features/FeatureProductPreview";
import { PhoneUI } from "@/components/mockups/ProductMockups";
import { Reveal } from "@/components/Reveal";
import type { PreviewKey } from "@/lib/marketing/features/register";
import {
  residentialAi,
  residentialChange,
  residentialConnected,
  residentialCta,
  residentialField,
  residentialFinancials,
  residentialHero,
  residentialOwner,
  residentialPlan,
  residentialPlatform,
  residentialWorkforce,
} from "@/lib/marketing/solutions/residentialConstruction";

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

export function ResidentialHeroSection() {
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
                VertexBuild · {residentialHero.previewLabel}
              </p>
              <FeatureProductPreview
                preview={residentialHero.preview}
                framed
                className="min-h-[240px] sm:min-h-[300px] lg:min-h-[380px]"
              />
            </div>
            <div className="mt-4 overflow-hidden rounded-2xl border border-brand-line bg-white shadow-lg lg:absolute lg:-bottom-2 lg:-right-4 lg:mt-0 lg:w-[48%]">
              <p className="border-b border-brand-line/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                {residentialHero.overlayLabel}
              </p>
              <FeatureProductPreview
                preview={residentialHero.overlayPreview}
                framed
                scale="sm"
                className="min-h-[140px] sm:min-h-[160px]"
              />
            </div>
          </Reveal>

          <Reveal delay={80} className="order-1 lg:order-2 lg:pl-4">
            <p className="eyebrow">{residentialHero.eyebrow}</p>
            <h1 className="display-title mt-4 text-[2.35rem] leading-[1.04] sm:text-5xl lg:text-[3.05rem]">
              {residentialHero.headline}
            </h1>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-brand-muted">{residentialHero.supporting}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={residentialHero.primary.href} className="btn-primary w-full sm:w-auto">
                {residentialHero.primary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={residentialHero.secondary.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-brand-line bg-white px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-brand-navy transition hover:border-brand-navy/25 sm:w-auto"
              >
                {residentialHero.secondary.label}
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2">
              {residentialHero.chips.map((chip, i) => (
                <span key={chip.label} className="inline-flex items-center gap-2">
                  <Link
                    href={chip.href}
                    className="rounded-full border border-brand-line/80 bg-white px-3 py-1.5 text-[11px] font-semibold text-brand-navy transition hover:border-brand-orange/40"
                  >
                    {chip.label}
                  </Link>
                  {i < residentialHero.chips.length - 1 ? (
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

export function ResidentialConnectedSection() {
  const [active, setActive] = useState(7);
  const node = residentialConnected.nodes[active] ?? residentialConnected.nodes[0];

  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {residentialConnected.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {residentialConnected.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{residentialConnected.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10 overflow-hidden rounded-3xl border border-brand-line/80">
          <div className="grid lg:grid-cols-[minmax(0,0.72fr)_minmax(13rem,0.28fr)]">
            <div key={node.id} className="bg-[#F4F7FB] p-4 sm:p-5">
              <ProductStage
                preview={node.preview}
                dark={"previewDark" in node ? node.previewDark : undefined}
                label={`VertexBuild · ${node.label}`}
              />
            </div>
            <div className="flex gap-1 overflow-x-auto border-t border-brand-line/70 bg-white p-3 [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:border-l lg:border-t-0 [&::-webkit-scrollbar]:hidden">
              {residentialConnected.nodes.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={
                    "shrink-0 rounded-xl px-3 py-2.5 text-left transition " +
                    (i === active ? "bg-[#FAFBFD] shadow-sm" : "hover:bg-[#FAFBFD]/80")
                  }
                >
                  <span className="font-mono text-[10px] font-bold text-brand-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-0.5 block text-[13px] font-semibold text-brand-navy">{item.label}</span>
                  <span className="hidden text-[11px] text-brand-muted lg:block">{item.detail}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 border-t border-brand-line/70 bg-[#FAFBFD] px-4 py-3">
            <p className="text-[12px] text-brand-muted">{node.detail}</p>
            <Link href={node.href} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange">
              Open {node.label}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ResidentialPlanSection() {
  const [active, setActive] = useState(0);
  const stage = residentialPlan.stages[active] ?? residentialPlan.stages[0];

  return (
    <section className="border-b border-brand-line bg-[#F7F8FA]">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {residentialPlan.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {residentialPlan.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{residentialPlan.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10 overflow-hidden rounded-3xl border border-brand-line/80 bg-white">
          <div className="grid lg:grid-cols-[minmax(0,0.7fr)_minmax(14rem,0.3fr)]">
            <div key={stage.id} className="p-4 sm:p-5">
              <ProductStage
                preview={stage.preview}
                dark={"previewDark" in stage ? stage.previewDark : undefined}
                label={stage.label}
              />
            </div>
            <div className="border-t border-brand-line/70 lg:border-l lg:border-t-0">
              {residentialPlan.stages.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={
                    "flex w-full items-start gap-3 border-b border-brand-line/70 px-5 py-5 text-left last:border-b-0 " +
                    (i === active ? "bg-[#FAFBFD] shadow-[inset_-3px_0_0_0_rgba(232,93,4,1)]" : "hover:bg-[#FAFBFD]/70")
                  }
                >
                  <span className="font-mono text-[11px] font-bold text-brand-orange">
                    {item.label}
                    {i < residentialPlan.stages.length - 1 ? <span className="mt-2 block text-brand-muted">↓</span> : null}
                  </span>
                  <span className="text-[13px] leading-snug text-brand-navy">{item.body}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 border-t border-brand-line/70 bg-[#FAFBFD] px-5 py-4">
            {residentialPlan.modules.map((mod) => (
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

export function ResidentialFieldSection() {
  const [active, setActive] = useState(0);
  const [sync, setSync] = useState(0);
  const stage = residentialField.stages[active] ?? residentialField.stages[0];

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setSync(residentialField.sync.length - 1);
      return;
    }
    const id = window.setInterval(() => setSync((s) => (s + 1) % residentialField.sync.length), 1600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="border-b border-brand-line bg-brand-navy">
      <div className="site-shell section-spacing">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)] lg:gap-12">
          <Reveal className="relative order-2 lg:order-1">
            <div key={stage.id} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
              <ProductStage preview={stage.preview} label={stage.label} />
              <div className="mt-4 flex justify-center lg:absolute lg:bottom-6 lg:left-6 lg:mt-0">
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-white shadow-[0_20px_50px_-24px_rgba(0,0,0,0.55)]">
                  <PhoneUI variant={fieldPhoneVariant(stage.id)} raised />
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 lg:mt-16 lg:ml-[11.5rem]">
                {residentialField.workflows.map((item) => (
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
          </Reveal>

          <Reveal delay={80} className="order-1 lg:order-2">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
              {residentialField.eyebrow}
            </p>
            <h2 className="display-title-light mt-3 text-3xl sm:text-4xl">{residentialField.headline}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-300">{residentialField.supporting}</p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {residentialField.stages.map((item, i) => (
                <span key={item.id} className="inline-flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={
                      "rounded-full px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] " +
                      (active === i ? "bg-brand-orange text-white" : "border border-white/15 text-slate-300 hover:bg-white/5")
                    }
                  >
                    {item.label}
                  </button>
                  {i < residentialField.stages.length - 1 ? (
                    <span className="hidden text-slate-500 sm:inline" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </span>
              ))}
            </div>
            <p className="mt-4 text-[14px] leading-relaxed text-slate-300">{stage.body}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {residentialField.sync.map((state, i) => (
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ResidentialFinancialsSection() {
  const pictureNode: FinNode = {
    id: "picture",
    label: residentialFinancials.picture.label,
    preview: residentialFinancials.picture.preview,
    previewDark: residentialFinancials.picture.previewDark,
  };
  const allNodes: FinNode[] = [
    ...residentialFinancials.revenue.steps,
    ...residentialFinancials.cost.steps,
    pictureNode,
  ];
  const [activeId, setActiveId] = useState("picture");
  const active = allNodes.find((n) => n.id === activeId) ?? pictureNode;

  return (
    <section className="border-b border-brand-line bg-[#F4F7FB]">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {residentialFinancials.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {residentialFinancials.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{residentialFinancials.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10 grid items-start gap-5 lg:grid-cols-[minmax(16rem,0.34fr)_minmax(0,0.66fr)]">
          <div className="space-y-4">
            <div className="rounded-2xl border border-brand-line bg-white p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                {residentialFinancials.revenue.label}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-1.5">
                {residentialFinancials.revenue.steps.map((step, i) => (
                  <span key={step.id} className="inline-flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setActiveId(step.id)}
                      className={
                        "rounded-lg px-2.5 py-1.5 text-[12px] font-semibold " +
                        (activeId === step.id ? "bg-brand-navy text-white" : "border border-brand-line text-brand-navy")
                      }
                    >
                      {step.label}
                    </button>
                    {i < residentialFinancials.revenue.steps.length - 1 ? (
                      <span className="text-brand-muted">→</span>
                    ) : null}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-brand-line bg-white p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                {residentialFinancials.cost.label}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-1.5">
                {residentialFinancials.cost.steps.map((step, i) => (
                  <span key={step.id} className="inline-flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setActiveId(step.id)}
                      className={
                        "rounded-lg px-2.5 py-1.5 text-[12px] font-semibold " +
                        (activeId === step.id ? "bg-brand-navy text-white" : "border border-brand-line text-brand-navy")
                      }
                    >
                      {step.label}
                    </button>
                    {i < residentialFinancials.cost.steps.length - 1 ? (
                      <span className="text-brand-muted">→</span>
                    ) : null}
                  </span>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setActiveId("picture")}
              className={
                "w-full rounded-2xl px-4 py-3 text-left text-[12px] font-semibold uppercase tracking-[0.14em] " +
                (activeId === "picture" ? "bg-brand-navy text-white" : "border border-brand-line bg-white text-brand-navy")
              }
            >
              {residentialFinancials.picture.label}
            </button>
            <div className="flex flex-wrap gap-2">
              {residentialFinancials.modules.map((mod) => (
                <Link
                  key={mod.label}
                  href={mod.href}
                  className="rounded-full border border-brand-line bg-white px-3 py-1.5 text-[12px] font-medium text-brand-navy hover:border-brand-orange/35"
                >
                  {mod.label}
                </Link>
              ))}
            </div>
          </div>
          <div key={active.id}>
            <ProductStage
              preview={active.preview}
              dark={"previewDark" in active ? active.previewDark : undefined}
              label={active.label}
              minClass="min-h-[260px] sm:min-h-[320px] lg:min-h-[420px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ResidentialChangeSection() {
  const [active, setActive] = useState(0);
  const stage = residentialChange.stages[active] ?? residentialChange.stages[0];

  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {residentialChange.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {residentialChange.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{residentialChange.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10">
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {residentialChange.stages.map((item, i) => (
              <span key={item.id} className="inline-flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={
                    "rounded-full px-4 py-2 text-[13px] font-semibold " +
                    (active === i ? "bg-brand-navy text-white" : "border border-brand-line bg-[#FAFBFD] text-brand-navy")
                  }
                >
                  {item.label}
                </button>
                {i < residentialChange.stages.length - 1 ? <span className="text-brand-muted">→</span> : null}
              </span>
            ))}
          </div>
          <div key={stage.id} className="mt-6 overflow-hidden rounded-3xl border border-brand-line/80 bg-[#FAFBFD] p-4 sm:p-5">
            <p className="mb-4 max-w-xl text-[14px] text-brand-muted">{stage.body}</p>
            <ProductStage
              preview={stage.preview}
              dark={"previewDark" in stage ? stage.previewDark : undefined}
              label={stage.label}
            />
            <div className="mt-4 flex flex-wrap gap-2">
              {residentialChange.modules.map((mod) => (
                <Link
                  key={mod.label}
                  href={mod.href}
                  className="rounded-full border border-brand-line bg-white px-3 py-1.5 text-[12px] font-medium text-brand-navy hover:border-brand-orange/35"
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

export function ResidentialWorkforceSection() {
  const [active, setActive] = useState(0);
  const view = residentialWorkforce.views[active] ?? residentialWorkforce.views[0];
  const related = residentialWorkforce.views.filter((_, i) => i !== active);

  return (
    <section className="border-b border-brand-line bg-[#F7F8FA]">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {residentialWorkforce.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {residentialWorkforce.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{residentialWorkforce.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-8 flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {residentialWorkforce.views.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(i)}
              className={
                "shrink-0 rounded-xl border px-4 py-3 text-left " +
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
              {related.slice(0, 2).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(residentialWorkforce.views.findIndex((v) => v.id === item.id))}
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

export function ResidentialOwnerSection() {
  const [active, setActive] = useState(2);
  const stage = residentialOwner.stages[active] ?? residentialOwner.stages[0];
  const highlightPortal = active >= 2;

  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {residentialOwner.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {residentialOwner.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{residentialOwner.supporting}</p>
        </Reveal>

        <Reveal delay={70} className="mt-10">
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {residentialOwner.stages.map((item, i) => (
              <span key={item.id} className="inline-flex shrink-0 items-center gap-2">
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
                {i < residentialOwner.stages.length - 1 ? (
                  <span className="text-brand-muted" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </span>
            ))}
          </div>
          <p className="mt-4 max-w-xl text-[14px] text-brand-muted">{stage.body}</p>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div className={highlightPortal ? "opacity-60" : ""}>
              <ProductStage preview={residentialOwner.teamPreview} label="Project team" />
            </div>
            <div className={highlightPortal ? "" : "opacity-60"}>
              <ProductStage preview={residentialOwner.portalPreview} label="Owner / Client portal" />
            </div>
          </div>
          <Link
            href={residentialOwner.href}
            className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange"
          >
            Explore Customer Portals
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function ResidentialAiSection() {
  const [active, setActive] = useState(0);
  const stage = residentialAi.stages[active] ?? residentialAi.stages[0];

  return (
    <section className="border-b border-brand-line bg-[#F7F8FA]">
      <div className="site-shell section-spacing">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)]">
          <Reveal>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
              {residentialAi.eyebrow}
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {residentialAi.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{residentialAi.supporting}</p>
            <div className="mt-8 space-y-2">
              {residentialAi.stages.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={
                    "flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left " +
                    (i === active
                      ? "border-brand-orange/35 bg-white"
                      : "border-transparent hover:border-brand-line hover:bg-white/70")
                  }
                >
                  <span className="font-mono text-[11px] font-bold text-brand-orange">
                    {item.label}
                    {i < residentialAi.stages.length - 1 ? <span className="mt-2 block text-brand-muted">↓</span> : null}
                  </span>
                  <span className="text-[13px] leading-snug text-brand-navy">{item.body}</span>
                </button>
              ))}
            </div>
            <p className="mt-5 text-[12px] text-brand-muted">{residentialAi.note}</p>
          </Reveal>
          <Reveal delay={80}>
            <div key={stage.id}>
              <ProductStage preview={stage.preview} label={stage.label} />
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {residentialAi.modules.map((mod) => (
                  <Link key={mod.label} href={mod.href} className="text-[13px] font-semibold text-brand-navy hover:text-brand-orange">
                    {mod.label}
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

export function ResidentialPlatformSection() {
  const [active, setActive] = useState(0);
  const area = residentialPlatform.areas[active];
  const theater = area ? residentialPlatform.previews[area.title] : undefined;

  if (!area || !theater) return null;

  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {residentialPlatform.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {residentialPlatform.headline}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{residentialPlatform.supporting}</p>
        </Reveal>

        <Reveal delay={80} className="mt-10 overflow-hidden rounded-3xl border border-brand-line/80">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 bg-brand-navy px-4 py-4">
            {residentialPlatform.areas.map((item, i) => (
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
                {i < residentialPlatform.areas.length - 1 ? (
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

export function ResidentialCtaSection() {
  return (
    <section className="bg-brand-navy">
      <div className="site-shell section-spacing">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="display-title-light text-3xl sm:text-4xl lg:text-[2.75rem]">{residentialCta.headline}</h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300">{residentialCta.supporting}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={residentialCta.primary.href} className="btn-primary w-full sm:w-auto">
              {residentialCta.primary.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={residentialCta.secondary.href}
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/25 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 sm:w-auto"
            >
              {residentialCta.secondary.label}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
