import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { rfiCategory } from "@/lib/marketing/features/rfiCategory";
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

export function RfiCategoryPage() {
  const d = rfiCategory;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: ROUTES.home },
          { label: "Features", href: ROUTES.features },
          { label: "RFIs" },
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
              <PreviewStage preview={d.hero.preview} label="RFI Register" />
            </Reveal>
          </div>
        </div>
      </section>

      <FeatureCategoryNav activeCategoryId={d.id} />

      {/* 2. Problem / intro */}
      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
                {d.problem.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.problem.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.problem.body}</p>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.problem.preview} label="Question to resolved" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. RFI Register — dark */}
      <section id="rfi-register" className="scroll-mt-28 border-b border-brand-line bg-brand-navy">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
                {d.register.eyebrow}
              </p>
              <h2 className="display-title-light mt-3 text-3xl sm:text-4xl">{d.register.headline}</h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-300">{d.register.body}</p>
              <Link href={d.register.cta.href} className="btn-primary mt-8 inline-flex">
                {d.register.cta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.register.preview} label="Register overview" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Create RFI */}
      <section id="rfi-create" className="scroll-mt-28 border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal delay={80} className="lg:order-1">
              <PreviewStage preview={d.create.preview} label="Create RFI" />
            </Reveal>
            <Reveal className="lg:order-2">
              <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
                {d.create.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.create.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.create.body}</p>
              <Link href={d.create.cta.href} className="btn-primary mt-8 inline-flex">
                {d.create.cta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. RFI Detail — dark */}
      <section className="border-b border-brand-line bg-[#061525]">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
                {d.detail.eyebrow}
              </p>
              <h2 className="display-title-light mt-3 text-3xl sm:text-4xl">{d.detail.headline}</h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-300">{d.detail.body}</p>
              <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-orange">
                {d.detail.label}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.detail.preview} label="RFI detail" dark />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Response workflow */}
      <section id="rfi-workflow" className="scroll-mt-28 border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.response.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">
                {d.response.supporting}
              </p>
              <ol className="mt-6 flex flex-wrap items-center gap-2">
                {d.response.steps.map((step, index) => (
                  <li key={step} className="flex items-center gap-2">
                    <span className="rounded-md border border-brand-line bg-[#FAFBFD] px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-brand-navy">
                      {step}
                    </span>
                    {index < d.response.steps.length - 1 ? (
                      <span className="text-brand-muted" aria-hidden="true">
                        →
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
              <Link href={d.response.cta.href} className="btn-primary mt-8 inline-flex">
                {d.response.cta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.response.preview} label="Response workflow" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. Status & priority */}
      <section className="border-b border-brand-line bg-[#EEF2F7]">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal delay={80} className="lg:order-1">
              <PreviewStage preview={d.status.preview} label="Status & priority" />
            </Reveal>
            <Reveal className="lg:order-2">
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.status.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.status.body}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {d.status.statuses.map((status) => (
                  <span
                    key={status}
                    className="rounded-md border border-brand-line bg-white px-2.5 py-1.5 text-[11px] font-semibold text-brand-navy"
                  >
                    {status}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {d.status.priorities.map((priority) => (
                  <span
                    key={priority}
                    className="rounded-md border border-brand-orange/25 bg-brand-orange/5 px-2.5 py-1.5 text-[11px] font-semibold text-brand-orange"
                  >
                    {priority}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. Project context */}
      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
                {d.context.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.context.headline}
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{d.context.body}</p>
            </Reveal>
            <Reveal delay={80}>
              <PreviewStage preview={d.context.preview} label="Project context" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9. Field / mobile */}
      <section className="border-b border-brand-line bg-[#F7F8FA]">
        <div className="site-shell section-spacing">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(240px,0.7fr)] lg:gap-14">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {d.field.headline}
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-brand-muted">{d.field.body}</p>
            </Reveal>
            <Reveal delay={80} className="flex justify-center lg:justify-end">
              <FeatureProductPreview preview={d.field.preview} className="min-h-[320px] border-0 bg-transparent" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 10. Benefits */}
      <section className="border-b border-brand-line bg-[#061525]">
        <div className="site-shell py-14 sm:py-16">
          <ul className="grid gap-4 sm:grid-cols-3">
            {d.benefits.map((card, index) => (
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

      {/* 11. Related */}
      <section className="border-b border-brand-line bg-white">
        <div className="site-shell section-spacing">
          <Reveal>
            <h2 className="display-title text-2xl sm:text-3xl">{d.related.headline}</h2>
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {d.related.cards.map((card) => (
              <li key={card.title}>
                <Link
                  href={card.href}
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

      {/* 12. Final CTA */}
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
