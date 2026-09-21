"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { customerPortalsFeatureDetail } from "@/lib/marketing/features/customerPortalsDetail";
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

function PortalEcosystemTabs({
  tabs,
}: {
  tabs: ReadonlyArray<{ id: string; label: string; preview: PreviewKey }>;
}) {
  const [active, setActive] = useState(tabs[0]?.id ?? "owner");
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-brand-line pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={
              "rounded-sm border px-4 py-2 text-[12px] font-semibold uppercase tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 " +
              (active === tab.id
                ? "border-brand-orange/40 bg-brand-orange/10 text-brand-navy"
                : "border-brand-line bg-white text-brand-muted hover:border-brand-navy/20 hover:text-brand-navy")
            }
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-6">
        <PreviewStage preview={current.preview} label={`${current.label} portal`} />
      </div>
    </div>
  );
}

function AccessLevelBadge({ level }: { level: string }) {
  const tone =
    level === "Full Access"
      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
      : level === "Restricted"
        ? "border-amber-200 bg-amber-50 text-amber-800"
        : "border-brand-line bg-[#FAFBFD] text-brand-muted";
  return (
    <span className={"inline-block rounded-sm border px-2 py-0.5 text-[10px] font-semibold " + tone}>
      {level}
    </span>
  );
}

function AccessMatrix({
  roles,
  matrix,
}: {
  roles: readonly string[];
  matrix: ReadonlyArray<{ permission: string; levels: readonly string[] }>;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse text-left">
        <thead>
          <tr className="border-b border-brand-line">
            <th className="px-3 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
              Permission
            </th>
            {roles.map((role) => (
              <th
                key={role}
                className="px-3 py-3 text-[11px] font-semibold uppercase tracking-wide text-brand-navy"
              >
                {role}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {matrix.map((row) => (
            <tr key={row.permission} className="border-b border-brand-line/80">
              <td className="px-3 py-3 text-[13px] font-medium text-brand-navy">{row.permission}</td>
              {row.levels.map((level, i) => (
                <td key={`${row.permission}-${roles[i]}`} className="px-3 py-3">
                  <AccessLevelBadge level={level} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CustomerPortalsFeatureDetailPage() {
  const d = customerPortalsFeatureDetail;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: ROUTES.home },
          { label: "Features", href: ROUTES.features },
          { label: "Business Growth", href: `${ROUTES.features}#growth` },
          { label: "Customer Portals" },
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
              <PreviewStage preview={d.hero.preview} label="Customer portal" dark />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Key capabilities + How it works */}
      <section className="border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell section-spacing">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.capabilities.headline}
              </h2>
              <ul className="mt-8 space-y-3">
                {d.capabilities.items.map((item) => (
                  <li key={item.title} className="border border-brand-line bg-white px-4 py-4">
                    <p className="text-[14px] font-semibold text-brand-navy">{item.title}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-brand-muted">{item.body}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.howItWorks.headline}
              </h2>
              <ol className="mt-8 space-y-3">
                {d.howItWorks.steps.map((step) => (
                  <li key={step.n} className="border border-brand-line bg-white px-4 py-4">
                    <p className="font-mono text-[10px] font-bold text-brand-orange">{step.n}</p>
                    <h3 className="mt-1.5 text-[14px] font-semibold text-brand-navy">{step.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-brand-muted">{step.body}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Controlled access */}
      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.controlledAccess.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.controlledAccess.body}</p>
          </Reveal>
          <Reveal delay={80} className="mt-10">
            <PreviewStage preview={d.controlledAccess.preview} label="Access controls" />
          </Reveal>
          <Reveal delay={120} className="mt-8 rounded-xl border border-brand-line bg-[#FAFBFD] p-4 sm:p-6">
            <AccessMatrix roles={d.controlledAccess.roles} matrix={d.controlledAccess.matrix} />
          </Reveal>
        </div>
      </section>

      {/* Project visibility */}
      <section className="border-b border-brand-line bg-[#F4F7FB]">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.projectVisibility.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.projectVisibility.body}</p>
          </Reveal>
          <Reveal delay={80} className="mt-10">
            <PreviewStage preview={d.projectVisibility.preview} label="Project overview" className="lg:min-h-[380px]" />
          </Reveal>
        </div>
      </section>

      {/* Project activity */}
      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.activity.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.activity.body}</p>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.activity.preview} label="Project activity" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Dark showcase — controlled access */}
      <section className="border-b border-brand-line bg-[#061525]">
        <div className="site-shell section-spacing">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
            <Reveal>
              <h2 className="display-title-light text-3xl sm:text-4xl">{d.darkShowcase.headline}</h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-300">{d.darkShowcase.body}</p>
              <ul className="mt-8 space-y-2">
                {d.darkShowcase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] text-slate-300">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-orange" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.darkShowcase.preview} label="Client portal" dark />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Approvals */}
      <section className="border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal delay={80} className="order-2 lg:order-1">
              <PreviewStage preview={d.approvals.preview} label="Pending approvals" />
            </Reveal>
            <Reveal className="order-1 lg:order-2">
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.approvals.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.approvals.body}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.documents.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.documents.body}</p>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.documents.preview} label="Shared documents" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Client experience */}
      <section className="border-b border-brand-line bg-[#F4F7FB]">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.clientExperience.headline}
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {d.clientExperience.cards.map((card) => (
              <li key={card.title} className="border border-brand-line bg-white px-5 py-5">
                <p className="font-mono text-[10px] font-bold text-brand-orange">{card.n}</p>
                <h3 className="mt-2 text-[14px] font-semibold text-brand-navy">{card.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{card.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stakeholder portals */}
      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.stakeholderPortals.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.stakeholderPortals.body}</p>
          </Reveal>
          <Reveal delay={80} className="mt-10">
            <PortalEcosystemTabs tabs={d.stakeholderPortals.tabs} />
          </Reveal>
        </div>
      </section>

      {/* Connected workflows */}
      <section className="border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.connectedWorkflows.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.connectedWorkflows.body}</p>
          </Reveal>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {d.connectedWorkflows.cards.map((card) => (
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

      {/* Product workflow */}
      <section className="border-b border-brand-line bg-brand-navy">
        <div className="site-shell section-spacing">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
              Customer Portal workflow
            </p>
            <h2 className="display-title-light mt-3 text-3xl sm:text-4xl">{d.productWorkflow.headline}</h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-300">
              {d.productWorkflow.supporting}
            </p>
          </Reveal>
          <Reveal delay={80} className="mt-12">
            <ol className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2 lg:max-w-none lg:grid-cols-6">
              {d.productWorkflow.steps.map((step, index) => (
                <li key={step}>
                  <div className="flex h-full flex-col rounded-xl border border-white/15 bg-[#061525] px-3.5 py-4">
                    <span className="font-mono text-[10px] font-bold text-brand-orange">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-2 text-[13px] font-semibold leading-snug text-white">{step}</span>
                    {index < d.productWorkflow.steps.length - 1 ? (
                      <span className="mt-3 text-[11px] text-brand-orange/70 lg:hidden" aria-hidden="true">
                        ↓ next
                      </span>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Full portal showcase */}
      <section className="border-b border-brand-line bg-[#061525]">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="display-title-light text-3xl sm:text-4xl">{d.fullPortalShowcase.headline}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-300">{d.fullPortalShowcase.body}</p>
          </Reveal>
          <Reveal delay={80} className="mt-10">
            <PreviewStage preview={d.fullPortalShowcase.preview} label="Full portal experience" dark className="lg:min-h-[420px]" />
          </Reveal>
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.outcomes.headline}
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {d.outcomes.cards.map((card) => (
              <li key={card.title} className="border border-brand-line bg-[#FAFBFD] px-5 py-5">
                <p className="font-mono text-[10px] font-bold text-brand-orange">{card.n}</p>
                <h3 className="mt-2 text-[14px] font-semibold text-brand-navy">{card.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{card.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Explore Business Growth */}
      <section className="border-b border-brand-line bg-[#F4F7FB]">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
              {d.explore.eyebrow}
            </p>
            <h2 className="mt-3 display-title text-2xl sm:text-3xl">{d.explore.headline}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.explore.body}</p>
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
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
