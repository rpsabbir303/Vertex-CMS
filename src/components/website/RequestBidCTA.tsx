"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { photos } from "@/lib/images";
import { REQUEST_BID_HREF } from "@/lib/website/navigation";
import { useLanguage } from "./LanguageProvider";

export function RequestBidCTA() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative min-h-[420px] sm:min-h-[480px] lg:min-h-[540px]">
        <Image
          src={photos.siteOverview}
          alt="Active commercial construction site"
          fill
          className="hero-image-zoom object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-navy/92 via-brand-navy/85 to-brand-navy/75"
          aria-hidden="true"
        />

        <div className="site-shell relative flex min-h-[420px] items-center py-20 sm:min-h-[480px] sm:py-24 lg:min-h-[540px] lg:py-28">
          <Reveal className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[3.25rem]">
              {t.cta.headline}
            </h2>
            <p className="prose-width mt-6 text-base leading-[1.75] text-slate-200 sm:text-lg">
              {t.cta.supporting}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href={REQUEST_BID_HREF} className="btn-primary w-full sm:w-auto">
                {t.cta.primary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-sm border border-white/35 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10 sm:w-auto"
              >
                {t.cta.secondary}
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
