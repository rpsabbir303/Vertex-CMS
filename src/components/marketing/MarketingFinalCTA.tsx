"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { CTAS } from "@/lib/marketing/navigation";
import { useMarketing } from "./MarketingProviders";

export function MarketingFinalCTA() {
  const { t } = useMarketing();

  return (
    <section id="demo" className="relative overflow-hidden bg-brand-navy">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(20,110,245,0.15),transparent_55%)]" aria-hidden="true" />
      <div className="site-shell relative py-20 sm:py-28 lg:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="display-title-light text-3xl sm:text-4xl lg:text-5xl">{t.finalCta.headline}</h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {t.finalCta.supporting}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={CTAS.demo.href} className="btn-primary w-full sm:w-auto">
              {t.header.bookDemo}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={CTAS.trial.href}
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/25 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 sm:w-auto"
            >
              {t.header.startTrial}
            </Link>
          </div>
          <Link href={CTAS.quote.href} className="btn-ghost-light mt-6 inline-flex">
            {CTAS.quote.label}
          </Link>
        </Reveal>
      </div>

      <div id="trial" className="sr-only">
        Start Free Trial
      </div>
      <div id="quote" className="sr-only">
        Request Quote
      </div>
      <div id="sales" className="sr-only">
        Contact Sales
      </div>
      <div id="pricing" className="sr-only">
        Pricing
      </div>
      <div id="resources" className="sr-only">
        Resources
      </div>
      <div id="company" className="sr-only">
        Company
      </div>
    </section>
  );
}
