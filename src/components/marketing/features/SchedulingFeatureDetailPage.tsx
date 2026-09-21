"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, CheckIcon } from "@/components/Icons";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { featureCategoryPath } from "@/lib/marketing/features/categories";
import { featureAreaPath, getFeatureAreaBySlug } from "@/lib/marketing/features/featureAreas";
import { schedulingFeatureDetail } from "@/lib/marketing/features/schedulingDetail";
import type { PreviewKey } from "@/lib/marketing/features/register";
import { ROUTES } from "@/lib/marketing/navigation";
import { FeatureProductPreview } from "./FeatureProductPreview";

function PreviewStage({
  preview,
  label,
  dark,
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
          ? "border-white/10 bg-gradient-to-br from-[#061525] via-[#0A1F35] to-[#08233F]"
          : "border-brand-line bg-gradient-to-br from-[#E8EEF5] via-[#F0F4F9] to-[#E4EBF4]") +
        " " +
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

function SchedulingStickyNav() {
  const items = schedulingFeatureDetail.nav;
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
      aria-label="Scheduling sections"
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

export function SchedulingFeatureDetailPage() {
  const d = schedulingFeatureDetail;
  const related = d.related.slugs
    .map((slug) => getFeatureAreaBySlug(slug))
    .filter((item): item is NonNullable<typeof item> => !!item);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: ROUTES.home },
          { label: "Features", href: ROUTES.features },
          { label: "Project Management", href: featureCategoryPath("project-management") },
          { label: "Scheduling" },
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
              <p className="body-copy mt-5 max-w-xl">{d.hero.supporting}</p>
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
              <PreviewStage preview={d.hero.preview} label="Scheduling · Gantt" />
            </Reveal>
          </div>
        </div>
      </section>

      <SchedulingStickyNav />

      {/* Overview */}
      <section id="sched-overview" className="scroll-mt-36 border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Overview</p>
            <h2 className="display-title mt-3 text-3xl sm:text-4xl">{d.overview.headline}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.overview.body}</p>
          </Reveal>
        </div>
      </section>

      {/* CPM */}
      <section id="sched-cpm" className="scroll-mt-36 border-b border-brand-line bg-[#F7F8FA]">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
                {d.cpm.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.cpm.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.cpm.body}</p>
              <ul className="mt-6 space-y-2.5">
                {d.cpm.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[14px] text-brand-navy">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.cpm.preview} label="CPM scheduling" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Dependencies */}
      <section id="sched-dependencies" className="scroll-mt-36 border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 lg:[&>*:first-child]:order-2">
            <Reveal>
              <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
                02 / Dependencies
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.dependencies.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">
                {d.dependencies.body}
              </p>
              <div className="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-7">
                {d.dependencies.labels.map((label) => (
                  <div
                    key={label}
                    className="rounded-md border border-brand-line bg-[#FAFBFD] px-2 py-2.5 text-center font-mono text-[10px] font-bold text-brand-navy"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.dependencies.preview} label="Dependencies & float" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Look-ahead */}
      <section id="sched-lookahead" className="scroll-mt-36 border-b border-brand-line bg-[#EEF2F7]">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <Reveal>
              <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
                {d.lookahead.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.lookahead.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">
                {d.lookahead.body}
              </p>
              <ul className="mt-6 space-y-2.5">
                {d.lookahead.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[14px] text-brand-navy">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.lookahead.preview} label="3-week look-ahead" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* AI Risk */}
      <section id="sched-risk" className="scroll-mt-36 border-b border-brand-line bg-brand-navy">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
                {d.risk.eyebrow}
              </p>
              <h2 className="display-title-light mt-3 text-3xl sm:text-4xl">{d.risk.headline}</h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-300">{d.risk.body}</p>
              <p className="mt-4 text-[12px] text-slate-400">
                Illustrative product UI — schedule-risk prediction based on manpower, productivity, and weather
                trends.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.risk.preview} label="AI schedule risk" dark />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gantt + reporting */}
      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 lg:[&>*:first-child]:order-2">
            <Reveal>
              <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
                Gantt & reporting
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.reporting.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.reporting.body}</p>
              <Link href={d.reporting.cta.href} className="btn-primary mt-8 inline-flex">
                {d.reporting.cta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.reporting.preview} label="Gantt export" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Value */}
      <section className="border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-2xl">
            <h2 className="display-title whitespace-pre-line text-3xl sm:text-4xl">{d.value.headline}</h2>
          </Reveal>
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {d.value.blocks.map((block, index) => (
              <li key={block.title} className="border-t border-brand-line pt-5">
                <p className="font-mono text-[11px] font-bold text-brand-orange">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-brand-navy">{block.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-brand-muted">{block.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related */}
      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal>
            <p className="eyebrow">Project Management</p>
            <h2 className="display-title mt-3 text-2xl sm:text-3xl">{d.related.headline}</h2>
            <Link
              href={d.related.categoryHref}
              className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange hover:text-brand-navy"
            >
              Back to Project Management
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={featureAreaPath(item.slug)}
                  className="group flex h-full flex-col border border-brand-line bg-[#FAFBFD] px-4 py-4 transition hover:border-brand-navy/25 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
                >
                  <p className="text-[15px] font-semibold text-brand-navy">{item.label}</p>
                  <p className="mt-2 flex-1 text-[12px] leading-relaxed text-brand-muted line-clamp-2">
                    {item.description}
                  </p>
                  <span className="mt-3 text-[12px] font-semibold text-brand-orange group-hover:text-brand-navy">
                    Explore →
                  </span>
                </Link>
              </li>
            ))}
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
