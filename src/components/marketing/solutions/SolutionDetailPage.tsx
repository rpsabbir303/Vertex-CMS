"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { FeatureProductPreview } from "@/components/marketing/features/FeatureProductPreview";
import { Reveal } from "@/components/Reveal";
import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import { SOLUTION_DETAILS, SOLUTION_SLUGS, type SolutionSlug } from "@/lib/marketing/solutions/data";

export function SolutionDetailPage({ slug }: { slug: SolutionSlug }) {
  const d = SOLUTION_DETAILS[slug];
  const others = SOLUTION_SLUGS.filter((s) => s !== slug).map((s) => SOLUTION_DETAILS[s]);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: ROUTES.home },
          { label: "Solutions", href: ROUTES.solutions },
          { label: d.label },
        ]}
      />

      <section className="relative overflow-hidden border-b border-brand-line/70 bg-[#F7F9FC]">
        <div className="site-shell relative py-14 sm:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
            <Reveal>
              <p className="eyebrow">{d.eyebrow}</p>
              <h1 className="display-title mt-4 text-4xl leading-[1.08] sm:text-5xl">{d.label}</h1>
              <p className="mt-5 max-w-xl text-lg font-medium leading-snug text-brand-navy sm:text-xl">
                {d.headline}
              </p>
              <p className="body-copy mt-4 max-w-xl">{d.body}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={ROUTES.solutions} className="btn-primary w-full sm:w-auto">
                  Explore Solutions
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={CTAS.demo.href}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-brand-line bg-white px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-brand-navy transition hover:border-brand-navy/25 sm:w-auto"
                >
                  Book a Demo
                </Link>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div
                className={
                  "relative overflow-hidden rounded-2xl border p-4 sm:p-5 " +
                  (d.previewDark
                    ? "border-white/10 bg-gradient-to-br from-[#061525] via-[#0A1F35] to-[#08233F]"
                    : "border-brand-line bg-gradient-to-br from-[#E8EEF5] via-[#F0F4F9] to-[#E4EBF4]")
                }
              >
                <p
                  className={
                    "mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] " +
                    (d.previewDark ? "text-slate-400" : "text-brand-muted")
                  }
                >
                  VertexBuild · {d.previewLabel}
                </p>
                <FeatureProductPreview
                  preview={d.preview}
                  dark={d.previewDark}
                  framed
                  className="min-h-[240px] sm:min-h-[300px] lg:min-h-[340px]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              What this solution emphasizes
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.supporting}</p>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {d.emphasis.map((item, i) => (
              <li key={item} className="border border-brand-line bg-[#FAFBFD] px-5 py-5">
                <p className="font-mono text-[10px] font-bold text-brand-orange">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-[15px] font-semibold text-brand-navy">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Connected VertexBuild workflows
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">
              Relevant platform capabilities that support this solution — without exposing every internal record to
              every audience.
            </p>
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {d.modules.map((mod) => (
              <li key={mod.label}>
                <Link
                  href={mod.href}
                  className="group flex h-full items-center justify-between border border-brand-line bg-white px-4 py-4 transition hover:border-brand-navy/25"
                >
                  <span className="text-[14px] font-semibold text-brand-navy">{mod.label}</span>
                  <ArrowRight className="h-4 w-4 text-brand-orange" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Other VertexBuild solutions
            </h2>
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col border border-brand-line bg-[#FAFBFD] px-4 py-4 transition hover:border-brand-navy/25"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                    {item.eyebrow}
                  </p>
                  <p className="mt-2 text-[15px] font-semibold text-brand-navy">{item.label}</p>
                  <p className="mt-2 flex-1 text-[12px] leading-relaxed text-brand-muted">{item.supporting}</p>
                  <span className="mt-3 text-[12px] font-semibold text-brand-orange">Explore →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-brand-navy">
        <div className="site-shell section-spacing">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="display-title-light text-3xl sm:text-4xl">See how this solution fits your work.</h2>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300">
              Explore the connected VertexBuild platform or book a demo for your team.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={ROUTES.solutions} className="btn-primary w-full sm:w-auto">
                Explore Solutions
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={CTAS.demo.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/25 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 sm:w-auto"
              >
                Book a Demo
              </Link>
              <Link
                href={CTAS.trial.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/25 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 sm:w-auto"
              >
                Start Free Trial
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
