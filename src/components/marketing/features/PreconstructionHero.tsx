import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { preconstructionCategory } from "@/lib/marketing/features/categories";
import { FeatureProductPreview } from "./FeatureProductPreview";

export function PreconstructionHero() {
  const { eyebrow, headline, supporting, primaryCta, secondaryCta } = preconstructionCategory;

  return (
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
      <div
        className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-brand-orange/[0.08] blur-3xl"
        aria-hidden="true"
      />

      <div className="site-shell relative py-14 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
          <Reveal>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="display-title mt-4 text-4xl leading-[1.08] sm:text-5xl lg:text-[3.15rem]">
              {headline}
            </h1>
            <p className="body-copy mt-5 max-w-xl">{supporting}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={primaryCta.href} className="btn-primary w-full sm:w-auto">
                {primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={secondaryCta.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-brand-line bg-white px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-brand-navy transition hover:border-brand-navy/25 sm:w-auto"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="relative overflow-hidden rounded-2xl border border-brand-line bg-gradient-to-br from-[#E8EEF5] via-[#F0F4F9] to-[#E4EBF4] p-3 sm:p-5">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                Vertex CMS · Preconstruction workspace
              </p>
              <FeatureProductPreview
                preview="precon"
                framed
                className="min-h-[260px] sm:min-h-[320px] lg:min-h-[360px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
