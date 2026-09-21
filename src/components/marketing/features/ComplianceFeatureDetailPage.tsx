"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "@/components/Icons";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { complianceFeatureDetail } from "@/lib/marketing/features/complianceDetail";
import { featureAreaPath } from "@/lib/marketing/features/featureAreas";
import type { PreviewKey } from "@/lib/marketing/features/register";
import { ROUTES } from "@/lib/marketing/navigation";
import { FeatureProductPreview } from "./FeatureProductPreview";

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
        VertexBuild · {label}
      </p>
      <FeatureProductPreview
        preview={preview}
        dark={dark}
        framed
        className="min-h-[240px] sm:min-h-[300px] lg:min-h-[340px]"
      />
    </div>
  );
}

function OutcomeIcon({ index }: { index: number }) {
  const paths = [
    "M12 3v18M5 10l7-7 7 7",
    "M4 12h16M12 4v16",
    "M7 7h10v10H7z",
    "M4 6h16M4 12h10M4 18h16",
  ];
  return (
    <span
      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-brand-line bg-white text-brand-navy"
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d={paths[index] ?? paths[0]} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function ComplianceStickyNav() {
  const items = complianceFeatureDetail.nav;
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
      aria-label="Compliance sections"
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

export function ComplianceFeatureDetailPage() {
  const d = complianceFeatureDetail;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: ROUTES.home },
          { label: "Features", href: ROUTES.features },
          { label: "Compliance & Workforce", href: `${ROUTES.features}#compliance` },
          { label: "Compliance" },
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
              <PreviewStage preview={d.hero.preview} label="Compliance overview" />
            </Reveal>
          </div>
        </div>
      </section>

      <ComplianceStickyNav />

      {/* Compliance at a glance */}
      <section id="comp-health" className="scroll-mt-28 border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
              {d.health.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.health.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.health.body}</p>
          </Reveal>
          <Reveal delay={80} className="mt-10">
            <PreviewStage preview={d.health.preview} label="Compliance health" />
          </Reveal>
        </div>
      </section>

      {/* Requirements */}
      <section id="comp-requirements" className="scroll-mt-28 border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.requirements.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">
                {d.requirements.body}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.requirements.preview} label="Project requirements" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Subcontractor compliance */}
      <section id="comp-subs" className="scroll-mt-28 border-b border-brand-line bg-[#F4F7FB]">
        <div className="site-shell section-spacing">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.subs.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.subs.body}</p>
              <ul className="mt-8 space-y-3">
                {d.subs.points.map((point) => (
                  <li key={point.title} className="border border-brand-line bg-white px-4 py-4">
                    <p className="font-mono text-[10px] font-bold text-brand-orange">{point.n}</p>
                    <p className="mt-1 text-[14px] font-semibold text-brand-navy">{point.title}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-brand-muted">{point.body}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.subs.preview} label="Subcontractor compliance" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Insurance & COI */}
      <section id="comp-insurance" className="scroll-mt-28 border-b border-brand-line bg-[#061525]">
        <div className="site-shell section-spacing">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
            <Reveal>
              <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
                {d.insurance.eyebrow}
              </p>
              <h2 className="display-title-light mt-3 text-3xl sm:text-4xl">{d.insurance.headline}</h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-300">{d.insurance.body}</p>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.insurance.preview} label="Insurance certificates" dark />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Lien waivers */}
      <section id="comp-liens" className="scroll-mt-28 border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal delay={80} className="lg:order-1">
              <PreviewStage preview={d.liens.preview} label="Lien waiver register" />
            </Reveal>
            <Reveal className="lg:order-2">
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.liens.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.liens.body}</p>
              <p className="mt-4 max-w-lg rounded-xl border border-brand-line bg-[#FAFBFD] px-4 py-3 text-[13px] leading-relaxed text-brand-muted">
                {d.liens.note}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Alerts */}
      <section id="comp-alerts" className="scroll-mt-28 border-b border-brand-line bg-[#EEF2F7]">
        <div className="site-shell section-spacing">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
                {d.alerts.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.alerts.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.alerts.body}</p>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.alerts.preview} label="Compliance alerts" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Approval & readiness */}
      <section id="comp-controls" className="scroll-mt-28 border-b border-brand-line bg-[#061525]">
        <div className="site-shell section-spacing">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
            <Reveal>
              <h2 className="display-title-light text-3xl sm:text-4xl">{d.controls.headline}</h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-300">{d.controls.body}</p>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.controls.preview} label="Approval workflow" dark />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.docs.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.docs.body}</p>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.docs.preview} label="Compliance documents" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Workflow story */}
      <section className="border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell section-spacing">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.workflow.headline}
            </h2>
            <p className="mt-3 text-[15px] text-brand-muted">{d.workflow.subtitle}</p>
          </Reveal>
          <ol className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div
              className="pointer-events-none absolute left-[12%] right-[12%] top-8 hidden h-px bg-brand-line lg:block"
              aria-hidden="true"
            />
            {d.workflow.steps.map((step) => (
              <li key={step.n} className="relative border border-brand-line bg-white px-5 py-5">
                <p className="font-mono text-[11px] font-bold text-brand-orange">{step.n}</p>
                <h3 className="mt-2 text-[15px] font-semibold text-brand-navy">{step.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.outcomes.headline}
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {d.outcomes.cards.map((card, index) => (
              <li key={card.title} className="border border-brand-line bg-[#FAFBFD] px-5 py-5">
                <div className="flex items-center gap-3">
                  <OutcomeIcon index={index} />
                  <p className="font-mono text-[10px] font-bold text-brand-orange">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                <h3 className="mt-3 text-[14px] font-semibold text-brand-navy">{card.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{card.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Connected workflows */}
      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
              {d.connected.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.connected.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.connected.body}</p>
          </Reveal>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {d.connected.cards.map((card) => (
              <li key={`${card.title}-${card.slug}`}>
                <Link
                  href={featureAreaPath(card.slug)}
                  className="group flex h-full flex-col border border-brand-line bg-[#FAFBFD] px-4 py-4 transition hover:border-brand-navy/25 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
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

      {/* Explore CW */}
      <section id="comp-explore" className="scroll-mt-28 border-b border-brand-line bg-[#FAFBFD]">
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
                        : "border-brand-line bg-white hover:border-brand-navy/25")
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
