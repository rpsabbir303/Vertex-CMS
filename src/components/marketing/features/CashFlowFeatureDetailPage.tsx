"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "@/components/Icons";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { cashFlowFeatureDetail } from "@/lib/marketing/features/cashFlowDetail";
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

function CashStickyNav() {
  const items = cashFlowFeatureDetail.nav;
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
      aria-label="Cash Flow sections"
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

export function CashFlowFeatureDetailPage() {
  const d = cashFlowFeatureDetail;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: ROUTES.home },
          { label: "Features", href: ROUTES.features },
          { label: "Financial Management", href: `${ROUTES.features}#financial-management` },
          { label: "Cash Flow" },
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
              <PreviewStage preview={d.hero.preview} label="Cash Flow Forecast" dark />
            </Reveal>
          </div>
        </div>
      </section>

      <CashStickyNav />

      {/* 2. Intro */}
      <section id="cash-overview" className="scroll-mt-28 border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
              {d.intro.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
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

      {/* 3. Showcase */}
      <section id="cash-workspace" className="scroll-mt-28 border-b border-brand-line bg-brand-navy">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="display-title-light text-3xl sm:text-4xl">{d.showcase.headline}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-300">{d.showcase.body}</p>
          </Reveal>
          <ul className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {d.showcase.metrics.map((m) => (
              <li key={m.label} className="rounded-lg border border-white/12 bg-white/[0.04] px-3 py-2.5">
                <p className="text-[10px] text-slate-400">{m.label}</p>
                <p
                  className={
                    "mt-1 text-[14px] font-bold " +
                    (m.label === "Net Expected Movement" ? "text-brand-orange" : "text-white")
                  }
                >
                  {m.value}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[11px] text-slate-500">{d.showcase.disclaimer}</p>
          <Reveal delay={80} className="mt-8">
            <PreviewStage preview={d.showcase.preview} label="Forecast workspace" dark />
          </Reveal>
        </div>
      </section>

      {/* 4. Timeline chart */}
      <section id="cash-timeline" className="scroll-mt-28 border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.timeline.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.timeline.body}</p>
              <ol className="mt-6 flex flex-wrap gap-2">
                {["IN", "OUT", "NET"].map((label) => (
                  <li
                    key={label}
                    className="rounded-md border border-brand-line bg-white px-3 py-1.5 text-[11px] font-semibold text-brand-navy"
                  >
                    {label}
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.timeline.preview} label="In vs Out" dark />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Inflows */}
      <section id="cash-inflows" className="scroll-mt-28 border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
              {d.inflows.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.inflows.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.inflows.body}</p>
          </Reveal>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-brand-line bg-white shadow-soft">
            <table className="min-w-[720px] w-full text-left text-[12px]">
              <thead>
                <tr className="border-b border-brand-line bg-[#FAFBFD] text-[10px] uppercase tracking-wide text-brand-muted">
                  {d.inflows.columns.map((h) => (
                    <th key={h} className="whitespace-nowrap px-4 py-3 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {d.inflows.rows.map((r, i) => (
                  <tr
                    key={r.invoice}
                    className={
                      "border-b border-brand-line/70 last:border-0 " +
                      (i === 0 ? "bg-brand-orange/[0.04]" : "bg-white")
                    }
                  >
                    <td className="whitespace-nowrap px-4 py-3.5 font-semibold text-brand-navy">{r.customer}</td>
                    <td className="whitespace-nowrap px-4 py-3.5 text-brand-muted">{r.project}</td>
                    <td className="px-4 py-3.5 text-brand-muted">{r.invoice}</td>
                    <td className="px-4 py-3.5 text-brand-muted">{r.date}</td>
                    <td className="px-4 py-3.5 font-semibold text-brand-orange">{r.amount}</td>
                    <td className="px-4 py-3.5 text-brand-muted">{r.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Reveal delay={80} className="mt-8 overflow-hidden">
            <PreviewStage preview={d.inflows.preview} label="Expected inflows" dark className="!p-3 sm:!p-4" />
          </Reveal>
        </div>
      </section>

      {/* 6. Outflows */}
      <section id="cash-outflows" className="scroll-mt-28 border-b border-brand-line bg-[#EEF2F7]">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
              {d.outflows.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.outflows.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.outflows.body}</p>
          </Reveal>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-brand-line bg-white shadow-soft">
            <table className="min-w-[720px] w-full text-left text-[12px]">
              <thead>
                <tr className="border-b border-brand-line bg-[#FAFBFD] text-[10px] uppercase tracking-wide text-brand-muted">
                  {d.outflows.columns.map((h) => (
                    <th key={h} className="whitespace-nowrap px-4 py-3 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {d.outflows.rows.map((r, i) => (
                  <tr
                    key={r.vendor + r.date}
                    className={
                      "border-b border-brand-line/70 last:border-0 " +
                      (i === 0 ? "bg-brand-orange/[0.04]" : "bg-white")
                    }
                  >
                    <td className="whitespace-nowrap px-4 py-3.5 font-semibold text-brand-navy">{r.vendor}</td>
                    <td className="whitespace-nowrap px-4 py-3.5 text-brand-muted">{r.project}</td>
                    <td className="px-4 py-3.5 text-brand-muted">{r.type}</td>
                    <td className="px-4 py-3.5 text-brand-muted">{r.date}</td>
                    <td className="px-4 py-3.5 font-semibold text-brand-orange">{r.amount}</td>
                    <td className="px-4 py-3.5 text-brand-muted">{r.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Reveal delay={80} className="mt-8 overflow-hidden">
            <PreviewStage preview={d.outflows.preview} label="Expected outflows" dark className="!p-3 sm:!p-4" />
          </Reveal>
        </div>
      </section>

      {/* 7. AR / AP */}
      <section id="cash-arap" className="scroll-mt-28 border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
                {d.arap.left.headline}
              </h2>
              <div className="mt-5 border border-brand-line bg-[#FAFBFD] px-5 py-5">
                <p className="text-[11px] text-brand-muted">{d.arap.left.totalLabel}</p>
                <p className="mt-1 text-3xl font-bold text-brand-navy">{d.arap.left.totalValue}</p>
                <ul className="mt-5 space-y-3">
                  {d.arap.left.items.map((item) => (
                    <li key={item.label} className="flex items-center justify-between border-b border-brand-line/70 pb-2 last:border-0">
                      <span className="text-[13px] text-brand-muted">{item.label}</span>
                      <span className="text-[14px] font-semibold text-brand-navy">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
                {d.arap.right.headline}
              </h2>
              <div className="mt-5 border border-brand-line bg-[#FAFBFD] px-5 py-5">
                <p className="text-[11px] text-brand-muted">{d.arap.right.totalLabel}</p>
                <p className="mt-1 text-3xl font-bold text-brand-navy">{d.arap.right.totalValue}</p>
                <ul className="mt-5 space-y-3">
                  {d.arap.right.items.map((item) => (
                    <li key={item.label} className="flex items-center justify-between border-b border-brand-line/70 pb-2 last:border-0">
                      <span className="text-[13px] text-brand-muted">{item.label}</span>
                      <span className="text-[14px] font-semibold text-brand-navy">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          <Reveal delay={100} className="mt-8">
            <PreviewStage preview={d.arap.preview} label="AR and AP visibility" dark />
          </Reveal>
        </div>
      </section>

      {/* 8. Project summary — no invented cash-position formula */}
      <section id="cash-project" className="scroll-mt-28 border-b border-brand-line bg-[#061525]">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h2 className="display-title-light text-3xl sm:text-4xl">{d.project.headline}</h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-300">{d.project.body}</p>
              <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-orange">
                Project · {d.project.projectName}
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {d.project.metrics.map((m) => (
                  <li key={m.label} className="rounded-lg border border-white/12 bg-white/[0.04] px-3 py-2.5">
                    <p className="text-[10px] text-slate-400">{m.label}</p>
                    <p
                      className={
                        "mt-1 text-[14px] font-bold " +
                        (m.label === "Collected" ? "text-brand-orange" : "text-white")
                      }
                    >
                      {m.value}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[11px] leading-relaxed text-slate-500">{d.project.note}</p>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.project.preview} label="Project forecast context" dark />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9. Workflow — alerts omitted (not in CASH register) */}
      <section id="cash-workflow" className="scroll-mt-28 border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.workflow.headline}
              </h2>
              <ol className="mt-5 flex flex-wrap items-center gap-2">
                {d.workflow.story.map((step, index) => (
                  <li key={step} className="flex items-center gap-2">
                    <span className="rounded-md border border-brand-line bg-white px-2.5 py-1.5 text-[11px] font-semibold text-brand-navy">
                      {step}
                    </span>
                    {index < d.workflow.story.length - 1 ? (
                      <span className="text-brand-muted" aria-hidden="true">
                        →
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
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
              <PreviewStage preview={d.workflow.preview} label="Collect to plan" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 10. Benefits */}
      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.benefits.headline}
            </h2>
          </Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {d.benefits.cards.map((card, index) => (
              <li key={card.title} className="border border-brand-line bg-[#FAFBFD] px-5 py-5">
                <p className="font-mono text-[10px] font-bold text-brand-orange">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-[14px] font-semibold uppercase tracking-wide text-brand-navy">
                  {card.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{card.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 11. Related */}
      <section className="border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell section-spacing">
          <Reveal>
            <h2 className="display-title text-2xl sm:text-3xl">{d.related.headline}</h2>
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {d.related.cards.map((card) => {
              const active = card.slug === d.related.activeSlug;
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
                    <p className="text-[15px] font-semibold text-brand-navy">{card.title}</p>
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

      {/* 12. Financial Management overview — final FM sub-page */}
      <section className="border-b border-brand-line bg-[#EEF2F7]">
        <div className="site-shell section-spacing">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
              {d.fmOverview.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.fmOverview.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-brand-muted">
              {d.fmOverview.supporting}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={d.fmOverview.primary.href} className="btn-primary w-full sm:w-auto">
                {d.fmOverview.primary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={d.fmOverview.secondary.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-brand-line bg-white px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-brand-navy transition hover:border-brand-navy/25 sm:w-auto"
              >
                {d.fmOverview.secondary.label}
              </Link>
            </div>
          </Reveal>
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
