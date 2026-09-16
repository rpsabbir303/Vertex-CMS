"use client";

import Link from "next/link";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import { securityCta } from "@/lib/marketing/security/content";
import { SecurityGhostButton, SecurityLimeButton, SecurityMeasure, SecurityPaper } from "./SecuritySurface";

type Props = {
  compact?: boolean;
  embedded?: boolean;
};

export function SecurityContactCTA({ compact, embedded }: Props) {
  const { t } = useMarketing();
  const c = t.security.cta;

  const actions = (
    <div className={`flex flex-wrap gap-3 ${embedded ? "mt-6 justify-center" : "mt-8"}`}>
      <SecurityLimeButton href={securityCta.primaryHref}>{c.primary}</SecurityLimeButton>
      <SecurityGhostButton href={securityCta.secondaryHref} onDark={!embedded}>
        {c.secondary}
      </SecurityGhostButton>
      {!compact && !embedded ? (
        <SecurityGhostButton href={securityCta.tertiaryHref} onDark>
          {c.tertiary}
        </SecurityGhostButton>
      ) : null}
    </div>
  );

  if (embedded) {
    return (
      <div className="text-center">
        <p className="text-[13px] leading-relaxed text-[#5C6560]">{c.note}</p>
        {actions}
      </div>
    );
  }

  return (
    <section aria-labelledby="security-cta-heading">
      <SecurityPaper dark>
        <SecurityMeasure className="py-16 text-center sm:py-20">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#3FE844]">{t.security.hero.eyebrow}</p>
          <h2
            id="security-cta-heading"
            className="mx-auto mt-4 max-w-[16em] font-display text-[1.9rem] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-[2.5rem]"
          >
            {c.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.75] text-white/70">{c.supporting}</p>
          <p className="mx-auto mt-3 max-w-2xl text-[13px] leading-relaxed text-white/55">{c.note}</p>
          <div className="flex justify-center">{actions}</div>
          <div className="mt-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#3FE844]">{c.legalHeading}</p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px]">
              <Link href={securityCta.privacyHref} className="font-medium text-white/80 hover:text-white">
                {c.privacy}
              </Link>
              <Link href={securityCta.termsHref} className="font-medium text-white/80 hover:text-white">
                {c.terms}
              </Link>
              <Link href={securityCta.dpaHref} className="font-medium text-white/80 hover:text-white">
                {c.dpa}
              </Link>
              <Link href={securityCta.cookiesHref} className="font-medium text-white/80 hover:text-white">
                {c.cookies}
              </Link>
            </div>
          </div>
        </SecurityMeasure>
      </SecurityPaper>
    </section>
  );
}

export const SecurityCTA = SecurityContactCTA;
