"use client";

import { Reveal } from "@/components/Reveal";
import { useMarketing } from "./MarketingProviders";

const PLACEHOLDER_LOGOS = 5;

export function LogoWall() {
  const { t } = useMarketing();

  return (
    <section id="customers" className="border-y border-brand-line bg-[#FAFAF8] py-16 sm:py-20">
      <div className="site-shell">
        <Reveal className="text-center">
          <p className="eyebrow">{t.socialProof.eyebrow}</p>
          <h2 className="display-title mt-3 text-2xl sm:text-3xl">{t.socialProof.headline}</h2>
          <p className="mt-2 text-sm text-brand-muted">{t.socialProof.placeholder}</p>
        </Reveal>

        <Reveal delay={60} className="mt-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {Array.from({ length: PLACEHOLDER_LOGOS }).map((_, i) => (
              <div
                key={i}
                className="flex h-16 items-center justify-center rounded-lg border border-dashed border-brand-line bg-white text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted"
              >
                Logo
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
