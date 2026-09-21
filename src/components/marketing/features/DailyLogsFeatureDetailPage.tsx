"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "@/components/Icons";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { dailyLogsFeatureDetail } from "@/lib/marketing/features/dailyLogsDetail";
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

function DailyLogsStickyNav() {
  const items = dailyLogsFeatureDetail.nav;
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
      aria-label="Daily Logs sections"
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

function VisibilityPanels() {
  const panels = dailyLogsFeatureDetail.visibility.panels;
  const [open, setOpen] = useState(0);

  return (
    <ul className="space-y-3">
      {panels.map((panel, index) => {
        const active = open === index;
        return (
          <li key={panel.title}>
            <button
              type="button"
              onClick={() => setOpen(index)}
              aria-expanded={active}
              className={
                "w-full rounded-xl border px-4 py-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 " +
                (active
                  ? "border-brand-orange/40 bg-white/[0.06]"
                  : "border-white/12 bg-white/[0.03] hover:border-white/20")
              }
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-[14px] font-semibold text-white">{panel.title}</p>
                <span className="font-mono text-[10px] font-bold text-brand-orange">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              {active ? (
                <p className="mt-2 text-[13px] leading-relaxed text-slate-300">{panel.body}</p>
              ) : null}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export function DailyLogsFeatureDetailPage() {
  const d = dailyLogsFeatureDetail;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: ROUTES.home },
          { label: "Features", href: ROUTES.features },
          { label: "Field Operations", href: `${ROUTES.features}#field-operations` },
          { label: "Daily Logs" },
        ]}
      />

      {/* 1. Hero */}
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
              <p className="mt-5 text-lg font-medium leading-snug text-brand-navy sm:text-xl">
                {d.hero.supporting}
              </p>
              <p className="body-copy mt-4 max-w-xl">{d.hero.description}</p>
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
              <PreviewStage preview={d.hero.preview} label="Daily Log · Sep 9" />
            </Reveal>
          </div>
        </div>
      </section>

      <DailyLogsStickyNav />

      {/* 3. Intro */}
      <section id="dl-overview" className="scroll-mt-28 border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.intro.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.intro.body}</p>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {d.intro.points.map((point, index) => (
              <li key={point.title} className="border border-brand-line bg-[#FAFBFD] px-5 py-5">
                <p className="font-mono text-[10px] font-bold text-brand-orange">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-[15px] font-semibold text-brand-navy">{point.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{point.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Dark showcase */}
      <section id="dl-activity" className="scroll-mt-28 border-b border-brand-line bg-brand-navy">
        <div className="site-shell section-spacing">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
            <Reveal>
              <h2 className="display-title-light text-3xl sm:text-4xl">{d.showcase.headline}</h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-300">{d.showcase.body}</p>
              <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-orange">
                Project · {d.showcase.project}
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-2">
                {d.showcase.metrics.map((m) => (
                  <li key={m.label} className="rounded-lg border border-white/12 bg-white/[0.04] px-3 py-2.5">
                    <p className="text-[10px] text-slate-400">{m.label}</p>
                    <p className="mt-1 text-[14px] font-bold text-white">{m.value}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.showcase.preview} label="Daily field activity" dark />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Daily workflow */}
      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.workflow.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.workflow.body}</p>
              <ol className="mt-8 space-y-4">
                {d.workflow.steps.map((step) => (
                  <li key={step.n} className="flex gap-3">
                    <span className="font-mono text-[11px] font-bold text-brand-orange">{step.n}</span>
                    <div>
                      <p className="text-[14px] font-semibold text-brand-navy">{step.title}</p>
                      <p className="mt-0.5 text-[13px] leading-relaxed text-brand-muted">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.workflow.preview} label="From conditions to completed work" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Capabilities */}
      <section className="border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
              {d.capabilities.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.capabilities.headline}
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {d.capabilities.items.map((item, index) => (
              <li key={item.title} className="border border-brand-line bg-white px-4 py-5">
                <p className="font-mono text-[10px] font-bold text-brand-orange">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-[14px] font-semibold text-brand-navy">{item.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Product story */}
      <section id="dl-records" className="scroll-mt-28 border-b border-brand-line bg-[#061525]">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h2 className="display-title-light text-3xl sm:text-4xl">{d.story.headline}</h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-300">{d.story.body}</p>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.story.preview} label="Daily log history" dark />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. Field record */}
      <section className="border-b border-brand-line bg-[#EEF2F7]">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal delay={80} className="lg:order-1">
              <PreviewStage preview={d.fieldRecord.preview} label="Structured daily record" />
            </Reveal>
            <Reveal className="lg:order-2">
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.fieldRecord.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.fieldRecord.body}</p>
              <ul className="mt-6 space-y-3">
                {d.fieldRecord.cards.map((card, index) => (
                  <li key={card.title} className="border border-brand-line bg-white px-4 py-4">
                    <p className="font-mono text-[10px] font-bold text-brand-orange">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 text-[14px] font-semibold text-brand-navy">{card.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-brand-muted">{card.body}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Workforce */}
      <section id="dl-workforce" className="scroll-mt-28 border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.workforce.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.workforce.body}</p>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.workforce.preview} label="Workforce on site" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Photos */}
      <section id="dl-photos" className="scroll-mt-28 border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal delay={80} className="lg:order-1">
              <PreviewStage preview={d.photos.preview} label="Log photos" />
            </Reveal>
            <Reveal className="lg:order-2">
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.photos.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.photos.body}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9. Connected workflows */}
      <section id="dl-workflows" className="scroll-mt-28 border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.connected.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.connected.body}</p>
          </Reveal>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {d.connected.cards.map((card) => (
              <li key={card.slug}>
                <Link
                  href={featureAreaPath(card.slug)}
                  className="group flex h-full flex-col border border-brand-line bg-[#FAFBFD] px-4 py-4 transition hover:border-brand-navy/25 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
                >
                  <p className="text-[15px] font-semibold text-brand-navy">{card.title}</p>
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

      {/* 10. Field visibility */}
      <section className="border-b border-brand-line bg-[#061525]">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
                {d.visibility.eyebrow}
              </p>
              <h2 className="display-title-light mt-3 text-3xl sm:text-4xl">{d.visibility.headline}</h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-300">{d.visibility.body}</p>
              <div className="mt-8">
                <VisibilityPanels />
              </div>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.visibility.preview} label="Field visibility" dark />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 11. Outcomes */}
      <section id="dl-outcomes" className="scroll-mt-28 border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell section-spacing">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.outcomes.headline}
            </h2>
          </Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {d.outcomes.cards.map((card, index) => (
              <li key={card.title} className="border border-brand-line bg-white px-5 py-5">
                <p className="font-mono text-[10px] font-bold text-brand-orange">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-[14px] font-semibold text-brand-navy">{card.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{card.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 12. Related Field Operations */}
      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="display-title text-2xl sm:text-3xl">{d.fieldOps.headline}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.fieldOps.body}</p>
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {d.fieldOps.cards.map((card) => {
              const active = card.slug === d.fieldOps.activeSlug;
              return (
                <li key={card.slug}>
                  <Link
                    href={featureAreaPath(card.slug)}
                    aria-current={active ? "page" : undefined}
                    className={
                      "group flex h-full flex-col border px-4 py-4 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 " +
                      (active
                        ? "border-brand-orange/45 bg-brand-orange/5"
                        : "border-brand-line bg-[#FAFBFD] hover:border-brand-navy/25 hover:bg-white")
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

      {/* 13. Final CTA */}
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
