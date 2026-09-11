"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "@/components/Icons";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { predictiveInsightsFeatureDetail } from "@/lib/marketing/features/predictiveInsightsDetail";
import { featureAreaPath } from "@/lib/marketing/features/featureAreas";
import type { PreviewKey } from "@/lib/marketing/features/register";
import { ROUTES } from "@/lib/marketing/navigation";
import { FeatureProductPreview } from "./FeatureProductPreview";

const UNFRAMED: PreviewKey[] = ["predRisk"];

function PreviewStage({
  preview,
  label,
  dark = false,
  className = "",
}: {
  preview: PreviewKey;
  label: string;
  dark?: boolean;
  className?: string;
}) {
  const framed = !UNFRAMED.includes(preview);
  return (
    <div
      className={
        "relative overflow-hidden rounded-2xl border p-4 sm:p-5 " +
        (dark
          ? "border-white/10 bg-gradient-to-br from-[#061525] via-[#0A1F35] to-[#08233F] "
          : "border-brand-line bg-gradient-to-br from-[#E8EEF5] via-[#F0F4F9] to-[#E4EBF4] ") +
        className
      }
    >
      <p
        className={
          "mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] " +
          (dark ? "text-slate-400" : "text-brand-muted")
        }
      >
        Vertex CMS · {label}
      </p>
      <FeatureProductPreview
        preview={preview}
        dark={dark}
        framed={framed}
        className="min-h-[240px] sm:min-h-[300px] lg:min-h-[340px]"
      />
    </div>
  );
}

function SeverityBadge({ level }: { level: "HIGH" | "MEDIUM" | "LOW" }) {
  const styles = {
    HIGH: "border-brand-orange/40 bg-brand-orange/10 text-brand-orange",
    MEDIUM: "border-amber-500/30 bg-amber-500/10 text-amber-700",
    LOW: "border-brand-line bg-[#FAFBFD] text-brand-muted",
  };
  return (
    <span className={"inline-block rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide " + styles[level]}>
      {level}
    </span>
  );
}

function PredStickyNav() {
  const items = predictiveInsightsFeatureDetail.nav;
  const [active, setActive] = useState<string>(items[0].id);

  useEffect(() => {
    const els = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.35, 0.6] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Predictive Insights sections"
      className="sticky top-[4.5rem] z-30 border-b border-brand-line/80 bg-white/95 backdrop-blur-md"
    >
      <div className="site-shell">
        <ul className="-mx-1 flex gap-1.5 overflow-x-auto py-3 [scrollbar-width:thin]">
          {items.map((item) => {
            const selected = item.id === active;
            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  className={
                    "inline-flex items-center rounded-lg border px-3.5 py-2 text-[12px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/35 " +
                    (selected
                      ? "border-brand-orange/45 bg-brand-orange/5 text-brand-navy shadow-soft"
                      : "border-transparent text-brand-muted hover:border-brand-line hover:bg-[#FAFBFD] hover:text-brand-navy")
                  }
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export function PredictiveInsightsFeatureDetailPage() {
  const d = predictiveInsightsFeatureDetail;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: ROUTES.home },
          { label: "Features", href: ROUTES.features },
          { label: "AI & Intelligence", href: `${ROUTES.features}#ai` },
          { label: "Predictive Insights" },
        ]}
      />

      {/* Hero */}
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
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
            <Reveal>
              <p className="eyebrow">{d.hero.eyebrow}</p>
              <h1 className="display-title mt-4 text-4xl leading-[1.08] sm:text-5xl lg:text-[3.15rem]">
                {d.hero.headline}
              </h1>
              <p className="mt-5 max-w-xl text-lg font-medium leading-snug text-brand-navy sm:text-xl">
                {d.hero.supporting}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={d.hero.primary.href} className="btn-primary w-full sm:w-auto">
                  {d.hero.primary.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={d.hero.secondary.href}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-brand-line bg-white px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-brand-navy transition hover:border-brand-navy/25 sm:w-auto"
                >
                  {d.hero.secondary.label}
                </Link>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <PreviewStage preview={d.hero.preview} label="Project intelligence" dark />
            </Reveal>
          </div>
        </div>
      </section>

      <PredStickyNav />

      {/* What Predictive Insights does */}
      <section id="pred-intro" className="scroll-mt-28 border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.intro.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.intro.body}</p>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {d.intro.cards.map((card) => (
              <li key={card.title} className="border border-brand-line bg-[#FAFBFD] px-5 py-5">
                <p className="font-mono text-[10px] font-bold text-brand-orange">{card.n}</p>
                <h3 className="mt-2 text-[15px] font-semibold text-brand-navy">{card.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{card.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section id="pred-how-it-works" className="scroll-mt-28 border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.howItWorks.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.howItWorks.body}</p>
              <ol className="mt-8 grid gap-3 sm:grid-cols-2">
                {d.howItWorks.steps.map((step) => (
                  <li key={step.n} className="border border-brand-line bg-white px-4 py-4">
                    <p className="font-mono text-[10px] font-bold text-brand-orange">{step.n}</p>
                    <h3 className="mt-1.5 text-[14px] font-semibold text-brand-navy">{step.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-brand-muted">{step.body}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.howItWorks.preview} label="Signal analysis" dark />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Project health */}
      <section id="pred-health" className="scroll-mt-28 border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.projectHealth.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.projectHealth.body}</p>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.projectHealth.preview} label="Project health" dark />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Forecasting */}
      <section id="pred-forecast" className="scroll-mt-28 border-b border-brand-line bg-[#F4F7FB]">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal delay={80} className="order-2 lg:order-1">
              <PreviewStage preview={d.forecasting.preview} label="Cost & schedule forecast" dark />
            </Reveal>
            <Reveal className="order-1 lg:order-2">
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.forecasting.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.forecasting.body}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="border border-brand-line bg-white px-4 py-4">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-brand-orange">Cost forecast</p>
                  <ul className="mt-3 space-y-2 text-[13px]">
                    {[
                      ["Original Budget", d.forecasting.cost.originalBudget],
                      ["Current Cost", d.forecasting.cost.currentCost],
                      ["Forecast Cost", d.forecasting.cost.forecastCost],
                      ["Projected Variance", d.forecasting.cost.projectedVariance],
                    ].map(([label, value]) => (
                      <li key={label} className="flex justify-between border-b border-brand-line/60 pb-1.5 last:border-0">
                        <span className="text-brand-muted">{label}</span>
                        <span className={"font-semibold " + (label === "Projected Variance" ? "text-brand-orange" : "text-brand-navy")}>
                          {value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-brand-line bg-white px-4 py-4">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-brand-orange">Schedule forecast</p>
                  <ul className="mt-3 space-y-2 text-[13px]">
                    {[
                      ["Baseline", d.forecasting.schedule.baseline],
                      ["Current Forecast", d.forecasting.schedule.currentForecast],
                      ["Projected Delay", d.forecasting.schedule.projectedDelay],
                    ].map(([label, value]) => (
                      <li key={label} className="flex justify-between border-b border-brand-line/60 pb-1.5 last:border-0">
                        <span className="text-brand-muted">{label}</span>
                        <span className={"font-semibold " + (label === "Projected Delay" ? "text-brand-orange" : "text-brand-navy")}>
                          {value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Early warning — dark */}
      <section id="pred-early-warning" className="scroll-mt-28 border-b border-brand-line bg-[#061525]">
        <div className="site-shell section-spacing">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
            <Reveal>
              <h2 className="display-title-light text-3xl sm:text-4xl">{d.earlyWarning.headline}</h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-300">{d.earlyWarning.body}</p>
              <ul className="mt-8 space-y-3 lg:hidden">
                {d.earlyWarning.cards.map((card) => (
                  <li key={card.title} className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-4">
                    <SeverityBadge level={card.severity} />
                    <h3 className="mt-2 text-[14px] font-semibold text-white">{card.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-slate-400">{card.body}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80} className="hidden lg:block">
              <PreviewStage preview={d.earlyWarning.preview} label="Early warning signals" dark />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Signal to action */}
      <section id="pred-signal-action" className="scroll-mt-28 border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.signalToAction.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.signalToAction.body}</p>
              <div className="mt-8 border border-brand-line bg-[#FAFBFD] px-5 py-5 lg:hidden">
                <p className="text-[10px] font-bold uppercase tracking-wide text-brand-orange">Example</p>
                <dl className="mt-3 space-y-3 text-[13px]">
                  <div>
                    <dt className="font-semibold text-brand-navy">Signal</dt>
                    <dd className="text-brand-muted">{d.signalToAction.example.signal}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-brand-navy">Insight</dt>
                    <dd className="text-brand-muted">{d.signalToAction.example.insight}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-brand-navy">Source Records</dt>
                    <dd className="text-brand-muted">{d.signalToAction.example.sources.join(" · ")}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-brand-navy">Action</dt>
                    <dd className="text-brand-muted">{d.signalToAction.example.action}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.signalToAction.preview} label="Signal to action" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Connected project data */}
      <section className="border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.connectedData.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.connectedData.body}</p>
          </Reveal>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {d.connectedData.cards.map((card) => (
              <li key={card.slug}>
                <Link
                  href={featureAreaPath(card.slug)}
                  className="group flex h-full flex-col border border-brand-line bg-white px-4 py-4 transition hover:border-brand-navy/25 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                    {card.category}
                  </p>
                  <p className="mt-2 text-[15px] font-semibold text-brand-navy">{card.title}</p>
                  <p className="mt-2 flex-1 text-[12px] leading-relaxed text-brand-muted">{card.body}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-orange group-hover:text-brand-navy">
                    Explore
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Construction use cases */}
      <section id="pred-use-cases" className="scroll-mt-28 border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.useCases.headline}
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {d.useCases.cards.map((card) => (
              <li key={card.title} className="border border-brand-line bg-[#FAFBFD] px-5 py-5">
                <p className="font-mono text-[10px] font-bold text-brand-orange">{card.n}</p>
                <h3 className="mt-2 text-[15px] font-semibold text-brand-navy">{card.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{card.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Risk priorities */}
      <section className="border-b border-brand-line bg-[#F4F7FB]">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal delay={80} className="order-2 lg:order-1">
              <PreviewStage preview={d.riskPriorities.preview} label="Risk priorities" dark />
            </Reveal>
            <Reveal className="order-1 lg:order-2">
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.riskPriorities.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.riskPriorities.body}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Project trend */}
      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.projectTrend.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.projectTrend.body}</p>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.projectTrend.preview} label="Project trends" dark />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Predictive Insights vs AI Assistant */}
      <section className="border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.aiCompare.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.aiCompare.body}</p>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {d.aiCompare.cards.map((card) => (
              <li
                key={card.title}
                className={
                  "border px-5 py-5 " +
                  ("current" in card && card.current
                    ? "border-brand-orange/45 bg-brand-orange/5"
                    : "border-brand-line bg-white")
                }
              >
                <h3 className="text-[16px] font-semibold text-brand-navy">{card.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{card.body}</p>
                {"current" in card && card.current ? (
                  <span className="mt-4 inline-block text-[12px] font-semibold text-brand-orange">Current feature</span>
                ) : "href" in card && card.href && "label" in card ? (
                  <Link
                    href={card.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-orange transition hover:text-brand-navy"
                  >
                    {card.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Connected AI workflows */}
      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.connectedAi.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.connectedAi.body}</p>
          </Reveal>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {d.connectedAi.cards.map((card) => (
              <li key={card.slug}>
                <Link
                  href={featureAreaPath(card.slug)}
                  className="group flex h-full flex-col border border-brand-line bg-[#FAFBFD] px-4 py-4 transition hover:border-brand-navy/25 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                    {card.category}
                  </p>
                  <p className="mt-2 text-[15px] font-semibold text-brand-navy">{card.title}</p>
                  <p className="mt-2 flex-1 text-[12px] leading-relaxed text-brand-muted">{card.body}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-orange group-hover:text-brand-navy">
                    Explore
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-b border-brand-line bg-[#F4F7FB]">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.outcomes.headline}
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {d.outcomes.cards.map((card, index) => (
              <li key={card.title} className="border border-brand-line bg-white px-5 py-5">
                <p className="font-mono text-[10px] font-bold text-brand-orange">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-[15px] font-semibold text-brand-navy">{card.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{card.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Explore AI & Intelligence */}
      <section id="pred-explore" className="scroll-mt-28 border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
              {d.explore.eyebrow}
            </p>
            <h2 className="mt-3 display-title text-2xl sm:text-3xl">{d.explore.headline}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.explore.body}</p>
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {d.explore.cards.map((card) => {
              const active = card.slug === d.explore.activeSlug;
              return (
                <li key={card.slug}>
                  <Link
                    href={featureAreaPath(card.slug)}
                    aria-current={active ? "page" : undefined}
                    className={
                      "group flex h-full flex-col border px-4 py-4 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 " +
                      (active
                        ? "border-brand-orange/45 bg-brand-orange/5"
                        : "border-brand-line bg-[#FAFBFD] hover:border-brand-navy/25")
                    }
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                      {card.category}
                    </p>
                    <p className="mt-2 text-[15px] font-semibold text-brand-navy">{card.title}</p>
                    <p className="mt-2 flex-1 text-[12px] leading-relaxed text-brand-muted">{card.body}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-orange group-hover:text-brand-navy">
                      {active ? "Current feature" : "Explore"}
                      {!active ? <ArrowRight className="h-3.5 w-3.5" /> : null}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-navy">
        <div className="site-shell section-spacing">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="display-title-light text-3xl sm:text-4xl lg:text-[2.75rem]">
              {d.finalCta.headline}
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300">
              {d.finalCta.supporting}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={d.finalCta.primary.href} className="btn-primary w-full sm:w-auto">
                {d.finalCta.primary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={d.finalCta.secondary.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/25 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 sm:w-auto"
              >
                {d.finalCta.secondary.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
