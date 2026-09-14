"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "@/components/Icons";
import { ProductPreviewClip } from "@/components/marketing/features/ProductPreviewClip";
import { PhoneUI } from "@/components/mockups/ProductMockups";
import { Reveal } from "@/components/Reveal";
import { GcSectionBackdrop } from "@/components/marketing/solutions/general-contractor/GcSectionBackdrop";
import {
  gcCta,
  gcExperience,
  gcFieldOffice,
  gcFinancials,
  gcHero,
  gcOperating,
  gcProjects,
  gcSubs,
  gcWorkflow,
} from "@/lib/marketing/solutions/generalContractor";

function SectionIntro({
  eyebrow,
  headline,
  supporting,
  className = "",
}: {
  eyebrow: string;
  headline: string;
  supporting: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">{eyebrow}</p>
      <h2 className="font-display mt-3 max-w-2xl text-[1.85rem] font-bold leading-[1.1] tracking-tight text-brand-navy sm:text-4xl lg:text-[2.65rem]">
        {headline}
      </h2>
      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-brand-muted">{supporting}</p>
    </div>
  );
}

function LearnMore({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-brand-navy">
      {label}
      <ArrowRight className="h-3.5 w-3.5 text-brand-orange" />
    </Link>
  );
}

/** 1. Hero */
export function GcHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-brand-line/70">
      <GcSectionBackdrop variant="hero" />
      <div className="site-shell relative py-14 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] lg:gap-14">
          <Reveal>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
              {gcHero.eyebrow}
            </p>
            <h1 className="display-title mt-5 text-[2.35rem] leading-[1.04] sm:text-5xl lg:text-[3.2rem]">
              {gcHero.headline}
            </h1>
            <p className="mt-5 max-w-md text-[16px] font-medium leading-relaxed text-brand-navy">{gcHero.answer}</p>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-brand-muted">{gcHero.supporting}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={gcHero.primary.href} className="btn-primary w-full sm:w-auto">
                {gcHero.primary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={gcHero.secondary.href} className="btn-secondary w-full sm:w-auto">
                {gcHero.secondary.label}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={80} className="relative mx-auto min-w-0 max-w-[540px] lg:mx-0 lg:max-w-none">
            <div className="overflow-hidden rounded-2xl border border-brand-line/80 bg-white shadow-[0_48px_100px_-44px_rgba(8,37,66,0.45)]">
              <div className="flex items-center gap-2 border-b border-brand-line bg-[#F7F9FC] px-4 py-2">
                <span className="flex gap-1" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-[#FF5F57]/90" />
                  <span className="h-2 w-2 rounded-full bg-[#FEBC2E]/90" />
                  <span className="h-2 w-2 rounded-full bg-[#28C840]/90" />
                </span>
                <span className="truncate text-[10px] text-brand-muted">app.vertexcms.com · {gcHero.previewLabel}</span>
              </div>
              <ProductPreviewClip preview={gcHero.preview} size="lg" scale="md" maxWidth="w-full" />
            </div>
            {gcHero.overlayPreview ? (
              <div className="mt-4 overflow-hidden rounded-2xl border border-brand-line/80 bg-white shadow-lg lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:w-[44%]">
                <p className="border-b border-brand-line/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                  {gcHero.overlayLabel}
                </p>
                <ProductPreviewClip preview={gcHero.overlayPreview} size="thumb" scale="sm" maxWidth="w-full" />
              </div>
            ) : null}
          </Reveal>
        </div>

        <Reveal delay={60} className="mt-10 border-t border-brand-line/70 pt-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
            What Vertex CMS helps a General Contractor manage
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {gcHero.manages.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[14px] font-semibold text-brand-navy transition hover:text-brand-orange"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** 2. GC operating model — connected system, not four cards */
export function GcOperatingModelSection() {
  const [active, setActive] = useState(0);
  const area = gcOperating.areas[active] ?? gcOperating.areas[0];

  return (
    <section className="relative overflow-hidden border-b border-brand-line/70">
      <GcSectionBackdrop variant="white" />
      <div className="site-shell relative section-spacing">
        <Reveal>
          <SectionIntro
            eyebrow={gcOperating.eyebrow}
            headline={gcOperating.headline}
            supporting={gcOperating.supporting}
          />
        </Reveal>

        <Reveal delay={50} className="mt-8 flex flex-wrap items-center gap-2">
          {gcOperating.flow.map((step, i) => (
            <span key={step} className="inline-flex items-center gap-2">
              <span className="rounded-full border border-brand-line bg-[#F7F9FC] px-3 py-1 text-[11px] font-semibold capitalize text-brand-navy">
                {step}
              </span>
              {i < gcOperating.flow.length - 1 ? (
                <span className="text-brand-muted/60" aria-hidden="true">
                  →
                </span>
              ) : null}
            </span>
          ))}
        </Reveal>

        <Reveal delay={80} className="mt-12">
          <div className="grid min-w-0 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(260px,380px)_minmax(0,1fr)] lg:items-start lg:gap-6">
            <div className="flex flex-col gap-3">
              {gcOperating.areas.slice(0, 2).map((item, i) => (
                <OperatingAreaButton
                  key={item.id}
                  item={item}
                  index={i}
                  active={active === i}
                  onSelect={() => setActive(i)}
                />
              ))}
            </div>

            <div className="mx-auto min-w-0 max-w-[400px] overflow-hidden rounded-[1.75rem] border border-brand-line/70 bg-[#EAF0F6] p-3 sm:p-4 lg:mx-0 lg:max-w-none">
              <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
                Vertex CMS · Project record
              </p>
              <ProductPreviewClip preview={area.preview} size="md" scale="sm" maxWidth="w-full" />
            </div>

            <div className="flex flex-col gap-3">
              {gcOperating.areas.slice(2).map((item, i) => (
                <OperatingAreaButton
                  key={item.id}
                  item={item}
                  index={i + 2}
                  active={active === i + 2}
                  onSelect={() => setActive(i + 2)}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function OperatingAreaButton({
  item,
  index,
  active,
  onSelect,
}: {
  item: (typeof gcOperating.areas)[number];
  index: number;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={
        "min-w-0 rounded-2xl border p-4 text-left transition " +
        (active
          ? "border-brand-navy/25 bg-brand-navy/[0.04] shadow-[0_12px_32px_-20px_rgba(8,35,63,0.35)]"
          : "border-brand-line/70 bg-[#F7F9FC] hover:border-brand-navy/15")
      }
    >
      <span className="font-mono text-[10px] font-bold text-brand-orange">{String(index + 1).padStart(2, "0")}</span>
      <p className="mt-1 text-[14px] font-semibold text-brand-navy">{item.label}</p>
      <p className="mt-1 text-[12px] leading-relaxed text-brand-muted">{item.story}</p>
      <div className="mt-3 overflow-hidden rounded-xl border border-brand-line/60 bg-white">
        <ProductPreviewClip preview={item.preview} size="thumb" scale="sm" maxWidth="w-full" />
      </div>
    </button>
  );
}

/** 3. Connected project management */
export function GcProjectsSection() {
  const [active, setActive] = useState(0);
  const moment = gcProjects.moments[active] ?? gcProjects.moments[0];

  return (
    <section className="relative overflow-hidden border-b border-brand-line/70">
      <GcSectionBackdrop variant="soft" />
      <div className="site-shell relative section-spacing grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionIntro
            eyebrow={gcProjects.eyebrow}
            headline={gcProjects.headline}
            supporting={gcProjects.supporting}
          />
          <ol className="mt-8 space-y-1">
            {gcProjects.moments.map((item, i) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  className={
                    "flex w-full items-start gap-4 rounded-2xl px-3 py-3 text-left transition " +
                    (i === active ? "bg-white shadow-[0_10px_30px_-18px_rgba(8,35,63,0.35)]" : "hover:bg-white/60")
                  }
                >
                  <span className="font-display text-[1.25rem] font-bold leading-none text-brand-orange/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block text-[15px] font-semibold text-brand-navy">{item.label}</span>
                    {i === active ? (
                      <span className="mt-1 block text-[13px] leading-relaxed text-brand-muted">{item.body}</span>
                    ) : null}
                  </span>
                </button>
              </li>
            ))}
          </ol>
          <LearnMore href={gcProjects.href} label="Explore project management" />
        </Reveal>

        <Reveal delay={80} className="mx-auto min-w-0 max-w-[520px] lg:mx-0 lg:max-w-none">
          <ProductPreviewClip preview={moment.preview} label={moment.label} size="lg" scale="md" chrome />
        </Reveal>
      </div>
    </section>
  );
}

/** 4. Connected financial management — activity ↔ visibility */
export function GcFinancialsSection() {
  return (
    <section className="relative overflow-hidden border-b border-brand-line/70">
      <GcSectionBackdrop variant="white" />
      <div className="site-shell relative section-spacing">
        <Reveal className="max-w-2xl">
          <SectionIntro
            eyebrow={gcFinancials.eyebrow}
            headline={gcFinancials.headline}
            supporting={gcFinancials.supporting}
          />
        </Reveal>

        <Reveal delay={70} className="mt-10 overflow-hidden rounded-[2rem] border border-brand-line/70">
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-brand-line/70 bg-white p-5 sm:p-6 lg:border-b-0 lg:border-r">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
                {gcFinancials.activity.label}
              </p>
              <p className="mt-2 mb-4 text-[13px] leading-relaxed text-brand-muted">{gcFinancials.activity.body}</p>
              <ProductPreviewClip preview={gcFinancials.activity.preview} size="md" scale="sm" maxWidth="mx-auto max-w-[420px]" />
            </div>
            <div className="relative min-w-0 bg-brand-navy p-5 sm:p-6">
              <p
                className="absolute left-1/2 top-0 z-[1] hidden -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white lg:block"
              >
                One project record
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                {gcFinancials.visibility.label}
              </p>
              <p className="mt-2 mb-4 text-[13px] leading-relaxed text-slate-300">{gcFinancials.visibility.body}</p>
              <ProductPreviewClip preview={gcFinancials.visibility.preview} dark size="md" scale="sm" maxWidth="mx-auto max-w-[420px]" />
            </div>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <LearnMore href={gcFinancials.href} label="Explore financial management" />
        </Reveal>
      </div>
    </section>
  );
}

/** 5. Subcontractor operations — workflow rail */
export function GcSubsSection() {
  const [active, setActive] = useState(2);
  const stage = gcSubs.flow[active] ?? gcSubs.flow[0];

  return (
    <section className="relative overflow-hidden border-b border-brand-line/70">
      <GcSectionBackdrop variant="soft" />
      <div className="site-shell relative section-spacing">
        <Reveal>
          <SectionIntro eyebrow={gcSubs.eyebrow} headline={gcSubs.headline} supporting={gcSubs.supporting} />
        </Reveal>

        <Reveal delay={60} className="mt-10">
          <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {gcSubs.flow.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={
                  "flex min-w-[8.5rem] shrink-0 flex-col rounded-xl border px-4 py-3 text-left transition sm:min-w-[10rem] " +
                  (i === active
                    ? "border-brand-navy bg-brand-navy text-white"
                    : "border-brand-line/70 bg-white text-brand-navy hover:border-brand-navy/20")
                }
              >
                <span className="font-mono text-[10px] font-bold text-brand-orange">{String(i + 1).padStart(2, "0")}</span>
                <span className="mt-1 text-[13px] font-semibold">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="mt-6 grid min-w-0 items-center gap-8 overflow-hidden rounded-[2rem] border border-brand-line/70 bg-white p-5 sm:p-6 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)]">
            <div>
              <p className="text-[15px] font-semibold text-brand-navy">{stage.label}</p>
              <p className="mt-3 text-[14px] leading-relaxed text-brand-muted">{stage.body}</p>
              <LearnMore href={gcSubs.href} label="Explore subcontractor management" />
            </div>
            <ProductPreviewClip
              preview={stage.preview}
              label={`Vertex CMS · ${stage.label}`}
              size="lg"
              scale="md"
              maxWidth="mx-auto max-w-[520px] lg:mx-0 lg:max-w-none"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** 6. Field → office connection */
export function GcFieldOfficeSection() {
  const [active, setActive] = useState(0);
  const stage = gcFieldOffice.stages[active] ?? gcFieldOffice.stages[0];

  return (
    <section className="relative overflow-hidden border-b border-brand-line/70">
      <GcSectionBackdrop variant="white" />
      <div className="site-shell relative section-spacing grid items-start gap-10 lg:grid-cols-[minmax(14rem,0.32fr)_minmax(0,0.68fr)] lg:gap-14">
        <Reveal>
          <SectionIntro
            eyebrow={gcFieldOffice.eyebrow}
            headline={gcFieldOffice.headline}
            supporting={gcFieldOffice.supporting}
          />
          <ol className="mt-8">
            {gcFieldOffice.stages.map((item, i) => (
              <li key={item.id} className="relative">
                {i < gcFieldOffice.stages.length - 1 ? (
                  <span
                    className="pointer-events-none absolute bottom-0 left-[15px] top-10 w-px bg-brand-line"
                    aria-hidden="true"
                  />
                ) : null}
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  className="relative flex w-full items-start gap-3 py-3 text-left"
                >
                  <span
                    className={
                      "relative z-[1] mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold " +
                      (i === active ? "bg-brand-navy text-white" : "bg-[#F3F6FA] text-brand-muted ring-1 ring-brand-line")
                    }
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span
                      className={
                        "block text-[13px] font-semibold uppercase tracking-[0.06em] " +
                        (i === active ? "text-brand-navy" : "text-brand-muted")
                      }
                    >
                      {item.label}
                    </span>
                    {i === active ? (
                      <span className="mt-1 block text-[13px] leading-relaxed text-brand-muted">{item.body}</span>
                    ) : null}
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={80} className="relative mx-auto min-w-0 max-w-[560px] lg:mx-0 lg:max-w-none">
          <div className="overflow-hidden rounded-[2rem] border border-brand-line/70 bg-[#EAF0F6] p-4 sm:p-5">
            <ProductPreviewClip preview={stage.preview} label={stage.label} size="lg" scale="md" chrome />
          </div>
          {stage.phone ? (
            <div className="mt-4 flex justify-center lg:absolute lg:-bottom-4 lg:-right-2 lg:mt-0">
              <div className="overflow-hidden rounded-[1.6rem] border border-brand-line bg-white shadow-[0_24px_50px_-24px_rgba(8,37,66,0.5)]">
                <PhoneUI variant="log" raised />
              </div>
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}

/** 7. One connected GC workflow */
export function GcWorkflowSection() {
  const [active, setActive] = useState(0);
  const step = gcWorkflow.steps[active] ?? gcWorkflow.steps[0];

  return (
    <section className="relative overflow-hidden border-b border-brand-line/70">
      <GcSectionBackdrop variant="mist" />
      <div className="site-shell relative section-spacing">
        <Reveal className="max-w-2xl">
          <SectionIntro eyebrow={gcWorkflow.eyebrow} headline={gcWorkflow.headline} supporting={gcWorkflow.supporting} />
        </Reveal>

        <Reveal delay={60} className="mt-10">
          <div className="flex flex-wrap gap-2">
            {gcWorkflow.steps.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={
                  "rounded-full px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.06em] transition " +
                  (i === active
                    ? "bg-brand-navy text-white"
                    : "border border-brand-line/70 bg-white text-brand-navy hover:border-brand-navy/20")
                }
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-[2rem] border border-brand-line/70 bg-white">
            <div className="border-b border-brand-line/70 px-5 py-4 sm:px-6">
              <p className="text-[15px] font-semibold text-brand-navy">{step.label}</p>
              <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-brand-muted">{step.body}</p>
            </div>
            <div className="p-3 sm:p-5">
              <ProductPreviewClip
                preview={step.preview}
                label={`Vertex CMS · ${step.label}`}
                size="lg"
                scale="md"
                maxWidth="mx-auto max-w-3xl"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** 8. Product experience */
export function GcExperienceSection() {
  return (
    <section className="relative overflow-hidden border-b border-brand-line/70">
      <GcSectionBackdrop variant="white" />
      <div className="site-shell relative section-spacing">
        <Reveal className="max-w-2xl">
          <SectionIntro
            eyebrow={gcExperience.eyebrow}
            headline={gcExperience.headline}
            supporting={gcExperience.supporting}
          />
        </Reveal>

        <Reveal delay={70} className="mt-10 overflow-hidden rounded-[2rem] bg-[#DCE7F3] p-4 sm:p-5">
          <ProductPreviewClip
            preview={gcExperience.preview}
            label={`Vertex CMS · ${gcExperience.previewLabel}`}
            size="lg"
            scale="md"
            maxWidth="mx-auto max-w-3xl"
          />
          <div className="mx-auto mt-4 grid max-w-3xl gap-3 sm:grid-cols-3">
            {gcExperience.satellites.map((item) => (
              <div key={item.label} className="min-w-0 overflow-hidden rounded-xl border border-white/80 bg-white">
                <p className="border-b border-brand-line/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                  {item.label}
                </p>
                <ProductPreviewClip preview={item.preview} size="thumb" scale="sm" maxWidth="w-full" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** 9. Final CTA */
export function GcCtaSection() {
  return (
    <section className="relative overflow-hidden">
      <GcSectionBackdrop variant="navy" />
      <div className="site-shell relative section-spacing">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="display-title-light text-3xl sm:text-4xl lg:text-[2.75rem]">{gcCta.headline}</h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300">{gcCta.supporting}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={gcCta.primary.href} className="btn-primary w-full sm:w-auto">
              {gcCta.primary.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={gcCta.secondary.href}
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/25 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 sm:w-auto"
            >
              {gcCta.secondary.label}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
