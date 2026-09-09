import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { preconstructionCategory } from "@/lib/marketing/features/categories";

export function PreconstructionFinalCTA() {
  const { finalCta } = preconstructionCategory;

  return (
    <section className="bg-brand-navy">
      <div className="site-shell section-spacing">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="display-title-light text-3xl sm:text-4xl lg:text-[2.75rem]">{finalCta.headline}</h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300">
            {finalCta.supporting}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
