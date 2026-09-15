"use client";

import { Reveal } from "@/components/Reveal";

type Props = {
  eyebrow: string;
  headline: string;
  supporting?: React.ReactNode;
  visual: React.ReactNode;
};

/** Shared Company-section hero: editorial copy + Figma-safe abstract visual. */
export function CompanyHero({ eyebrow, headline, supporting, visual }: Props) {
  return (
    <section className="relative z-[2] border-b border-brand-navy/[0.1]">
      <div className="site-shell relative grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8 lg:py-16 xl:py-20">
        <Reveal>
          <div className="careers-safe-zone">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">{eyebrow}</p>
            <h1 className="display-title mt-5 max-w-xl text-[2.05rem] leading-[1.06] sm:text-[2.75rem] lg:text-[3.1rem] xl:text-[3.25rem]">
              {headline}
            </h1>
            {supporting ? (
              <div className="mt-6 max-w-[28rem] text-[16px] leading-[1.75] text-brand-muted sm:text-[17px]">{supporting}</div>
            ) : null}
            <span className="mt-8 hidden h-px w-16 bg-brand-orange/70 lg:block" aria-hidden="true" />
          </div>
        </Reveal>

        <div className="relative z-[1] min-w-0">{visual}</div>
      </div>
    </section>
  );
}
