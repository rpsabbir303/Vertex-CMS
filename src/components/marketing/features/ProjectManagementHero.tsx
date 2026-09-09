import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { projectManagementCategory } from "@/lib/marketing/features/categories";
import { FeatureProductPreview } from "./FeatureProductPreview";

export function ProjectManagementHero() {
  const { eyebrow, headline, supporting, primaryCta, secondaryCta, heroPreview } =
    projectManagementCategory;

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

      <div className="site-shell relative py-12 sm:py-14 lg:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
          <Reveal>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="display-title mt-3 text-3xl leading-[1.1] sm:text-4xl lg:text-[2.75rem]">
              {headline}
            </h1>
            <p className="body-copy mt-4 max-w-xl text-[15px]">{supporting}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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

          <Reveal delay={80}>
            <div className="relative overflow-hidden rounded-2xl border border-brand-line bg-gradient-to-br from-[#E8EEF5] via-[#F0F4F9] to-[#E4EBF4] p-3 sm:p-4">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                Vertex CMS · Connected project operations
              </p>
              <FeatureProductPreview
                preview={heroPreview}
                framed
                className="min-h-[220px] sm:min-h-[280px] lg:min-h-[320px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
