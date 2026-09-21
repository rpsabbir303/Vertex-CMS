import Link from "next/link";
import { ArrowRight, CheckIcon } from "@/components/Icons";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { documentsCategory } from "@/lib/marketing/features/documentsCategory";
import type { PreviewKey } from "@/lib/marketing/features/register";
import { ROUTES } from "@/lib/marketing/navigation";
import { FeatureCategoryNav } from "./FeatureCategoryNav";
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

export function DocumentsCategoryPage() {
  const d = documentsCategory;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: ROUTES.home },
          { label: "Features", href: ROUTES.features },
          { label: "Project Management", href: `${ROUTES.features}/project-management` },
          { label: "Documents" },
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
              <PreviewStage preview={d.hero.preview} label="Document Center" />
            </Reveal>
          </div>
        </div>
      </section>

      <FeatureCategoryNav activeCategoryId={d.id} />

      {/* 1. Document Center — dark showcase */}
      <section id={d.center.id} className="scroll-mt-28 border-b border-brand-line bg-brand-navy">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
                {d.center.eyebrow}
              </p>
              <h2 className="display-title-light mt-3 text-3xl sm:text-4xl">{d.center.headline}</h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-300">{d.center.body}</p>
              <ul className="mt-6 space-y-2.5">
                {d.center.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[14px] text-slate-200">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link href={d.center.cta.href} className="btn-primary mt-8 inline-flex">
                {d.center.cta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.center.preview} label="Document Center" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Search — visual left */}
      <section id={d.search.id} className="scroll-mt-28 border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal delay={80} className="lg:order-1">
              <PreviewStage preview={d.search.preview} label="Project search" />
            </Reveal>
            <Reveal className="lg:order-2">
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.search.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.search.body}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Document detail */}
      <section id={d.detail.id} className="scroll-mt-28 border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
                {d.detail.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.detail.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.detail.body}</p>
              <ul className="mt-6 space-y-2.5">
                {d.detail.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[14px] text-brand-navy">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link href={d.detail.cta.href} className="btn-primary mt-8 inline-flex">
                {d.detail.cta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.detail.preview} label="Document detail" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Versions — dark */}
      <section id={d.versions.id} className="scroll-mt-28 border-b border-brand-line bg-[#061525]">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal delay={80} className="lg:order-1">
              <PreviewStage preview={d.versions.preview} label="Version control" dark />
            </Reveal>
            <Reveal className="lg:order-2">
              <h2 className="display-title-light text-3xl sm:text-4xl">{d.versions.headline}</h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-300">{d.versions.body}</p>
              <div className="mt-6 rounded-xl border border-brand-orange/35 bg-brand-orange/10 px-4 py-3">
                <p className="text-[13px] font-semibold text-brand-orange">{d.versions.callout}</p>
              </div>
              <ul className="mt-6 space-y-2.5">
                {d.versions.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[14px] text-slate-200">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Drawings register */}
      <section id={d.drawings.id} className="scroll-mt-28 border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell section-spacing">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
              {d.drawings.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              {d.drawings.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{d.drawings.body}</p>
            <Link href={d.drawings.cta.href} className="btn-primary mt-8 inline-flex">
              {d.drawings.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={80} className="mt-8 overflow-hidden">
            <PreviewStage
              preview={d.drawings.preview}
              label="Drawing register"
              dark
              className="!p-3 sm:!p-4"
            />
          </Reveal>
        </div>
      </section>

      {/* 6. Drawing viewer */}
      <section id={d.viewer.id} className="scroll-mt-28 border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.viewer.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.viewer.body}</p>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.viewer.preview} label="Drawing viewer" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. Markup */}
      <section id={d.markup.id} className="scroll-mt-28 border-b border-brand-line bg-[#EEF2F7]">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal delay={80} className="lg:order-1">
              <PreviewStage preview={d.markup.preview} label="Drawing markup" />
            </Reveal>
            <Reveal className="lg:order-2">
              <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
                {d.markup.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.markup.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.markup.body}</p>
              <div className="mt-5 rounded-xl border border-brand-line bg-white px-4 py-3">
                <p className="text-[13px] font-semibold text-brand-navy">{d.markup.callout}</p>
              </div>
              <Link href={d.markup.cta.href} className="btn-primary mt-8 inline-flex">
                {d.markup.cta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. Transmittals — dark */}
      <section id={d.transmittals.id} className="scroll-mt-28 border-b border-brand-line bg-brand-navy">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h2 className="display-title-light text-3xl sm:text-4xl">{d.transmittals.headline}</h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-300">{d.transmittals.body}</p>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.transmittals.preview} label="Transmittal record" dark />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9. Connected workflows */}
      <section id={d.connected.id} className="scroll-mt-28 border-b border-brand-line bg-white">
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
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {d.connected.cards.map((card) => (
              <li key={card.title}>
                <Link
                  href={card.href}
                  className="group flex h-full flex-col border border-brand-line bg-[#FAFBFD] px-4 py-4 transition hover:border-brand-navy/25 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
                >
                  <p className="text-[15px] font-semibold text-brand-navy">{card.title}</p>
                  <p className="mt-2 flex-1 text-[12px] leading-relaxed text-brand-muted">{card.body}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-orange group-hover:text-brand-navy">
                    {card.cta}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 10. How it works */}
      <section id={d.howItWorks.id} className="scroll-mt-28 border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.howItWorks.headline}
              </h2>
              <ol className="mt-8 space-y-5">
                {d.howItWorks.steps.map((step) => (
                  <li key={step.n} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-navy text-[12px] font-bold text-white">
                      {step.n}
                    </span>
                    <div>
                      <p className="text-[15px] font-semibold text-brand-navy">{step.title}</p>
                      <p className="mt-1 text-[13px] leading-relaxed text-brand-muted">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.howItWorks.preview} label="Upload & organize" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 11. Outcomes */}
      <section id={d.outcomes.id} className="scroll-mt-28 border-b border-brand-line bg-[#061525]">
        <div className="site-shell section-spacing">
          <Reveal>
            <h2 className="display-title-light text-3xl sm:text-4xl">{d.outcomes.headline}</h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {d.outcomes.cards.map((card, index) => (
              <li key={card.title} className="rounded-xl border border-white/12 bg-white/[0.04] px-5 py-5">
                <p className="font-mono text-[10px] font-bold text-brand-orange">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-[14px] font-semibold uppercase tracking-wide text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-300">{card.body}</p>
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
