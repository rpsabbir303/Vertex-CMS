import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { projectManagementCategory } from "@/lib/marketing/features/categories";

export function ProjectManagementFinalCTA() {
  const { finalCta } = projectManagementCategory;

  return (
    <section className="bg-brand-navy">
      <div className="site-shell py-14 sm:py-16">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="display-title-light text-2xl sm:text-3xl lg:text-[2.35rem]">
            {finalCta.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[14px] leading-relaxed text-slate-300">
            {finalCta.supporting}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={finalCta.primary.href} className="btn-primary w-full sm:w-auto">
              {finalCta.primary.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={finalCta.secondary.href}
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/25 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 sm:w-auto"
            >
              {finalCta.secondary.label}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
