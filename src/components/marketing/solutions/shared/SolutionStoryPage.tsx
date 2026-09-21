"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { ArrowRight } from "@/components/Icons";
import { ProductPreviewClip } from "@/components/marketing/features/ProductPreviewClip";
import { PhoneUI } from "@/components/mockups/ProductMockups";
import { Reveal } from "@/components/Reveal";
import type { PreviewKey } from "@/lib/marketing/features/register";
import type { SolutionStoryModel, StoryMoment, StorySplit } from "@/lib/marketing/solutions/storyTypes";

function ProductStage({
  preview,
  dark,
  label,
  className = "",
  size = "lg",
  scale = "lg",
}: {
  preview: PreviewKey;
  dark?: boolean;
  label?: string;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  scale?: "sm" | "md" | "lg";
}) {
  return (
    <ProductPreviewClip
      preview={preview}
      dark={dark}
      label={label}
      size={size}
      scale={scale}
      chrome
      className={className}
    />
  );
}

function LearnMore({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-brand-navy">
      {label}
      <ArrowRight className="h-3.5 w-3.5 text-brand-orange" />
    </Link>
  );
}

function MomentList({
  moments,
  active,
  onSelect,
}: {
  moments: StoryMoment[];
  active: number;
  onSelect: (index: number) => void;
}) {
  return (
    <ol className="mt-8 space-y-1">
      {moments.map((item, i) => (
        <li key={item.id}>
          <button
            type="button"
            onClick={() => onSelect(i)}
            aria-pressed={i === active}
            className={
              "flex w-full items-start gap-4 rounded-2xl px-3 py-3 text-left transition " +
              (i === active ? "bg-white shadow-[0_10px_30px_-18px_rgba(8,35,63,0.35)]" : "hover:bg-white/60")
            }
          >
            <span className="font-display text-[1.35rem] font-bold leading-none text-brand-orange/80">
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
  );
}

function SplitSection({ split, index }: { split: StorySplit; index: number }) {
  const [active, setActive] = useState(0);
  const cream = index % 2 === 0 ? "bg-[#F3F6FA]" : "bg-white";

  if (split.kind === "pair") {
    const copy = (
      <Reveal className="lg:pt-4">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
          {split.eyebrow}
        </p>
        <h2 className="font-display mt-3 max-w-lg text-3xl font-bold tracking-tight text-brand-navy sm:text-[2.35rem]">
          {split.headline}
        </h2>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-brand-muted">{split.supporting}</p>
        {split.href && split.linkLabel ? <LearnMore href={split.href} label={split.linkLabel} /> : null}
      </Reveal>
    );
    const visual = (
      <Reveal delay={80} className="overflow-hidden rounded-[2rem] border border-brand-line/70">
        <div className="grid sm:grid-cols-2">
          <div className="bg-white p-4 sm:p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">{split.left.label}</p>
            <p className="mt-2 mb-4 text-[13px] leading-relaxed text-brand-muted">{split.left.body}</p>
            <ProductStage preview={split.left.preview} dark={split.left.dark} size="md" scale="md" />
          </div>
          <div className="relative border-t border-brand-line/70 bg-brand-navy p-4 sm:p-5 sm:border-l sm:border-t-0">
            <p className="absolute left-1/2 top-0 z-[1] hidden -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white sm:block">
              {split.bridge}
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">{split.right.label}</p>
            <p className="mt-2 mb-4 text-[13px] leading-relaxed text-slate-300">{split.right.body}</p>
            <ProductStage preview={split.right.preview} dark={split.right.dark ?? true} size="md" scale="md" />
          </div>
        </div>
      </Reveal>
    );

    return (
      <section className={`border-b border-brand-line/70 ${cream}`}>
        <div className="site-shell section-spacing grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {split.reverse ? (
            <>
              {visual}
              {copy}
            </>
          ) : (
            <>
              {copy}
              {visual}
            </>
          )}
        </div>
      </section>
    );
  }

  const moment = split.moments[active] ?? split.moments[0];
  const copy = (
    <Reveal className="lg:pt-2">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">{split.eyebrow}</p>
      <h2 className="font-display mt-3 max-w-lg text-3xl font-bold tracking-tight text-brand-navy sm:text-[2.35rem]">
        {split.headline}
      </h2>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-brand-muted">{split.supporting}</p>
      <MomentList moments={split.moments} active={active} onSelect={setActive} />
      {split.href && split.linkLabel ? <LearnMore href={split.href} label={split.linkLabel} /> : null}
    </Reveal>
  );
  const visual = (
    <Reveal delay={80} className="relative min-w-0">
      <div className="overflow-hidden rounded-[2rem] bg-[#DCE7F3] p-3 sm:p-5">
        <ProductStage preview={moment.preview} dark={moment.dark} label={moment.label} size="lg" />
      </div>
      {moment.phone ? (
        <div className="mt-4 flex justify-center lg:absolute lg:-bottom-6 lg:-right-3 lg:mt-0">
          <div className="overflow-hidden rounded-[1.6rem] border border-brand-line bg-white shadow-[0_24px_50px_-24px_rgba(8,37,66,0.5)]">
            <PhoneUI variant="log" raised />
          </div>
        </div>
      ) : null}
    </Reveal>
  );

  return (
    <section className={`border-b border-brand-line/70 ${cream}`}>
      <div className="site-shell section-spacing grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {split.reverse ? (
          <>
            {visual}
            {copy}
          </>
        ) : (
          <>
            {copy}
            {visual}
          </>
        )}
      </div>
    </section>
  );
}

export function SolutionStoryPage({
  breadcrumbs,
  story,
}: {
  breadcrumbs: ReactNode;
  story: SolutionStoryModel;
}) {
  const [bento, setBento] = useState(0);
  const [process, setProcess] = useState(0);
  const featured = story.bento.items[bento] ?? story.bento.items[0];
  const stage = story.process.stages[process] ?? story.process.stages[0];

  return (
    <div className="min-w-0 overflow-x-hidden">
      {breadcrumbs}

      <section className="overflow-hidden bg-[#F3F6FA] pb-6 sm:pb-10">
        <div className="site-shell pt-4 sm:pt-6">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] bg-brand-navy lg:rounded-[2.35rem]">
              <div className="grid items-stretch lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)]">
                <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-12 lg:py-16">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
                    {story.hero.eyebrow}
                  </p>
                  <h1 className="display-title-light mt-4 text-[2.35rem] leading-[1.05] sm:text-5xl lg:text-[3.15rem]">
                    {story.hero.headline}
                  </h1>
                  {story.hero.answer ? (
                    <p className="mt-5 max-w-md text-[16px] leading-relaxed text-slate-200">{story.hero.answer}</p>
                  ) : null}
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-slate-400">{story.hero.supporting}</p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link href={story.hero.primary.href} className="btn-primary w-full sm:w-auto">
                      {story.hero.primary.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href={story.hero.secondary.href}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/20 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 sm:w-auto"
                    >
                      {story.hero.secondary.label}
                    </Link>
                  </div>
                </div>
                <div className="relative bg-[#0B2238] p-4 sm:p-6 lg:p-8">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    VertexBuild · {story.hero.previewLabel}
                  </p>
                  <ProductPreviewClip preview={story.hero.preview} size="xl" scale="lg" />
                  {story.hero.overlayPreview ? (
                    <div className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-[#061525] lg:absolute lg:bottom-8 lg:right-8 lg:mt-0 lg:w-[44%]">
                      <p className="border-b border-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        {story.hero.overlayLabel}
                      </p>
                      <ProductPreviewClip
                        preview={story.hero.overlayPreview}
                        dark={story.hero.overlayDark}
                        size="xs"
                        scale="sm"
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className="mx-auto mt-4 flex max-w-5xl flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-[1.6rem] bg-white px-5 py-4 shadow-[0_18px_40px_-28px_rgba(8,35,63,0.35)] sm:mt-5">
              {story.hero.manages.map((item, i) => (
                <span key={item.label} className="inline-flex items-center gap-3">
                  <Link href={item.href} className="text-[13px] font-semibold text-brand-navy hover:text-brand-orange">
                    {item.label}
                  </Link>
                  {i < story.hero.manages.length - 1 ? (
                    <span className="text-brand-muted" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-brand-line/70 bg-white">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
              {story.bento.eyebrow}
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-[2.35rem]">
              {story.bento.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{story.bento.supporting}</p>
          </Reveal>

          <Reveal delay={70} className="mt-10 grid gap-4 lg:grid-cols-5">
            <div className="overflow-hidden rounded-[2rem] bg-[#DCE7F3] p-4 sm:p-5 lg:col-span-3">
              <ProductStage preview={featured.preview} dark={featured.dark} label={featured.label} size="xl" />
              <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-brand-navy/80">{featured.story}</p>
              <Link
                href={featured.href}
                className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-navy"
              >
                Learn more
                <ArrowRight className="h-3.5 w-3.5 text-brand-orange" />
              </Link>
            </div>
            <div className="grid gap-4 lg:col-span-2">
              {story.bento.items.map((item, i) =>
                i === bento ? null : (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setBento(i)}
                  className="overflow-hidden rounded-[1.6rem] border border-brand-line/70 bg-[#F3F6FA] text-left transition hover:border-brand-navy/25"
                >
                  <div className="flex items-center justify-between gap-3 px-4 py-3">
                    <span className="text-[13px] font-semibold text-brand-navy">{item.label}</span>
                    <span className="font-mono text-[10px] text-brand-muted">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <ProductPreviewClip preview={item.preview} dark={item.dark} size="xs" scale="sm" />
                </button>
                ),
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {story.splits.map((split, i) => (
        <SplitSection key={split.eyebrow + split.headline} split={split} index={i} />
      ))}

      <section className="border-b border-brand-line/70 bg-[#EAF0F6]">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
              {story.process.eyebrow}
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-[2.35rem]">
              {story.process.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{story.process.supporting}</p>
          </Reveal>

          <Reveal delay={70} className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(14rem,0.3fr)_minmax(0,0.7fr)]">
            <ol>
              {story.process.stages.map((item, i) => (
                <li key={item.id} className="relative">
                  {i < story.process.stages.length - 1 ? (
                    <span
                      className="pointer-events-none absolute bottom-0 left-[15px] top-10 hidden w-px bg-brand-line lg:block"
                      aria-hidden="true"
                    />
                  ) : null}
                  <button
                    type="button"
                    onClick={() => setProcess(i)}
                    aria-pressed={i === process}
                    className="relative flex w-full items-start gap-3 py-3 text-left"
                  >
                    <span
                      className={
                        "relative z-[1] mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold " +
                        (i === process ? "bg-brand-navy text-white" : "bg-white text-brand-muted ring-1 ring-brand-line")
                      }
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span
                        className={
                          "block text-[13px] font-semibold uppercase tracking-[0.08em] " +
                          (i === process ? "text-brand-navy" : "text-brand-muted")
                        }
                      >
                        {item.label}
                      </span>
                      {i === process ? (
                        <span className="mt-1 block text-[13px] leading-relaxed text-brand-muted">{item.body}</span>
                      ) : null}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
            <div className="relative overflow-hidden rounded-[2rem] bg-white p-4 sm:p-5">
              <ProductStage preview={stage.preview} dark={stage.dark} label={stage.label} size="lg" />
              {stage.phone ? (
                <div className="mt-4 flex justify-center lg:absolute lg:bottom-6 lg:right-6 lg:mt-0">
                  <div className="overflow-hidden rounded-[1.6rem] border border-brand-line bg-white shadow-[0_20px_50px_-24px_rgba(8,37,66,0.45)]">
                    <PhoneUI variant="log" raised />
                  </div>
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-brand-line/70 bg-white">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
              {story.showcase.eyebrow}
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-[2.35rem]">
              {story.showcase.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{story.showcase.supporting}</p>
          </Reveal>
          <Reveal delay={80} className="mt-10 overflow-hidden rounded-[2rem] bg-[#DCE7F3] p-3 sm:p-5">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
              VertexBuild · {story.showcase.previewLabel}
            </p>
            <ProductPreviewClip preview={story.showcase.preview} size="xl" scale="lg" />
            <div className="mt-4 flex gap-px overflow-x-auto rounded-2xl border border-white/80 bg-white/80 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {story.showcase.satellites.map((item) => (
                <div key={item.label} className="min-w-[15rem] flex-1 bg-white">
                  <p className="border-b border-brand-line/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                    {item.label}
                  </p>
                  <ProductPreviewClip preview={item.preview} dark={item.dark} size="xs" scale="sm" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-navy">
        <div className="site-shell section-spacing">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="display-title-light text-3xl sm:text-4xl lg:text-[2.75rem]">{story.cta.headline}</h2>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300">{story.cta.supporting}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={story.cta.primary.href} className="btn-primary w-full sm:w-auto">
                {story.cta.primary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={story.cta.secondary.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/25 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 sm:w-auto"
              >
                {story.cta.secondary.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
