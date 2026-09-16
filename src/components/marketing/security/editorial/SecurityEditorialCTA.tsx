"use client";

import Link from "next/link";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import { securityCta } from "@/lib/marketing/security/content";
import type { ComponentType } from "react";
import { DataProtectionAbstract } from "./DataProtectionAbstract";
import { SecurityEditorialDivider } from "./SecurityEditorialFrame";

type AbstractProps = { className?: string };

type Props = {
  abstract?: ComponentType<AbstractProps>;
  title?: string;
  supporting?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryHref?: string;
  showTertiary?: boolean;
};

export function SecurityEditorialCTA({
  abstract: Abstract = DataProtectionAbstract,
  title,
  supporting,
  primaryLabel,
  secondaryLabel,
  primaryHref,
  showTertiary = true,
}: Props) {
  const { t } = useMarketing();
  const c = t.security.cta;

  return (
    <section className="min-w-0 border-t border-brand-line bg-white" aria-labelledby="editorial-cta-heading">
      <div className="relative min-w-0 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[min(42%,100%)] max-w-full opacity-[0.07] lg:block"
          aria-hidden="true"
        >
          <Abstract className="h-full max-h-full w-full" />
        </div>
        <div className="relative grid min-w-0 grid-cols-1 gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-2 lg:[grid-template-columns:minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-0">
          <div className="min-w-0 lg:border-r lg:border-brand-line lg:pr-10 lg:py-2">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
              {t.security.hero.eyebrow}
            </p>
            <h2
              id="editorial-cta-heading"
              className="mt-4 max-w-full break-words font-display text-[1.75rem] font-bold leading-[1.15] tracking-[-0.03em] text-brand-navy sm:text-[2.25rem]"
            >
              {title ?? c.title}
            </h2>
            <p className="mt-4 max-w-full text-[15px] leading-[1.75] text-brand-muted">{supporting ?? c.supporting}</p>
            <p className="mt-3 max-w-full text-[13px] leading-relaxed text-brand-muted/90">{c.note}</p>
          </div>
          <div className="flex min-w-0 flex-col gap-4 lg:pl-10">
            <div className="flex flex-wrap gap-3">
              <Link href={primaryHref ?? securityCta.primaryHref} className="btn-primary inline-flex items-center justify-center px-5 py-2.5 text-[13px]">
                {primaryLabel ?? c.primary}
              </Link>
              <Link href={securityCta.secondaryHref} className="btn-secondary inline-flex items-center justify-center px-5 py-2.5 text-[13px]">
                {secondaryLabel ?? c.secondary}
              </Link>
              {showTertiary ? (
                <Link
                  href={securityCta.tertiaryHref}
                  className="inline-flex items-center justify-center rounded-md border border-brand-line px-5 py-2.5 text-[13px] font-semibold text-brand-navy transition hover:border-brand-navy hover:bg-brand-soft"
                >
                  {c.tertiary}
                </Link>
              ) : null}
            </div>
            <SecurityEditorialDivider />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-orange">{c.legalHeading}</p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[13px]">
                <Link href={securityCta.privacyHref} className="font-medium text-brand-muted hover:text-brand-navy">
                  {c.privacy}
                </Link>
                <Link href={securityCta.termsHref} className="font-medium text-brand-muted hover:text-brand-navy">
                  {c.terms}
                </Link>
                <Link href={securityCta.dpaHref} className="font-medium text-brand-muted hover:text-brand-navy">
                  {c.dpa}
                </Link>
                <Link href={securityCta.cookiesHref} className="font-medium text-brand-muted hover:text-brand-navy">
                  {c.cookies}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
