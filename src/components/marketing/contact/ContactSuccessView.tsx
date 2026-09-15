"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CompanyCanvas, CompanyNav } from "@/components/marketing/company/CompanyCanvas";
import { CompanyHero } from "@/components/marketing/company/CompanyHero";
import { ContactConfirmVisual } from "@/components/marketing/company/CompanyVisuals";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import type { ContactSuccessPayload } from "@/lib/conversion/contactSession";
import { getContactSuccess } from "@/lib/conversion/contactSession";
import { ROUTES } from "@/lib/marketing/navigation";

type ViewState = "loading" | "success" | "invalid";

export function ContactSuccessView() {
  const { t } = useMarketing();
  const c = t.contact;
  const [state, setState] = useState<ViewState>("loading");
  const [submission, setSubmission] = useState<ContactSuccessPayload | null>(null);

  useEffect(() => {
    const payload = getContactSuccess();
    if (payload) {
      setSubmission(payload);
      setState("success");
    } else {
      setState("invalid");
    }
  }, []);

  if (state === "loading") {
    return (
      <CompanyCanvas>
        <div className="site-shell py-16 sm:py-20 lg:py-24" aria-busy="true" aria-label="Loading" />
        <CompanyNav current="contact" />
      </CompanyCanvas>
    );
  }

  if (state === "invalid") {
    return (
      <CompanyCanvas>
        <section className="relative z-[2] border-b border-brand-navy/[0.1]">
          <div className="site-shell py-16 sm:py-20 lg:py-24">
            <div className="careers-safe-zone">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">{c.successInvalidEyebrow}</p>
              <h1 className="display-title mt-5 text-[2.05rem] leading-[1.06] sm:text-[2.75rem]">{c.successInvalidTitle}</h1>
              <p className="mt-6 max-w-[28rem] text-[16px] leading-[1.75] text-brand-muted">{c.successInvalidBody}</p>
              <div className="mt-8">
                <Link href={ROUTES.contact} className="btn-primary inline-flex min-w-[180px] justify-center">
                  {c.successInvalidCta}
                </Link>
              </div>
            </div>
          </div>
        </section>
        <CompanyNav current="contact" />
      </CompanyCanvas>
    );
  }

  const inquiryLabel = c.inquiryTypes[submission!.inquiryType];

  return (
    <CompanyCanvas>
      <CompanyHero
        eyebrow={c.successEyebrow}
        headline={c.successTitle}
        supporting={
          <>
            <p>{c.successBody}</p>
            <p className="mt-4">{c.successNextSteps}</p>
          </>
        }
        visual={
          <ContactConfirmVisual labels={[c.successFlow.input, c.successFlow.received, c.successFlow.system]} />
        }
      />

      <section className="relative z-[2] border-b border-brand-navy/[0.1]" aria-labelledby="contact-success-summary">
        <div className="site-shell relative py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="careers-safe-zone" role="status" aria-live="polite">
              <h2 id="contact-success-summary" className="text-[15px] font-semibold text-brand-navy">
                {c.successSummaryTitle}
              </h2>
              {submission ? (
                <dl className="mt-6 space-y-3 border-t border-brand-navy/10 pt-6 text-[13px]">
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <dt className="font-semibold text-brand-navy">{c.successSummaryInquiry}</dt>
                    <dd className="text-brand-muted">{inquiryLabel}</dd>
                  </div>
                  {submission.company ? (
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <dt className="font-semibold text-brand-navy">{c.successSummaryCompany}</dt>
                      <dd className="text-brand-muted">{submission.company}</dd>
                    </div>
                  ) : null}
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <dt className="font-semibold text-brand-navy">{c.successSummaryEmail}</dt>
                    <dd className="break-all text-brand-muted">{submission.email}</dd>
                  </div>
                </dl>
              ) : null}
            </div>

            <nav aria-label="Optional next steps" className="flex flex-col gap-4">
              <Link href={ROUTES.home} className="btn-primary inline-flex w-full max-w-xs justify-center sm:w-auto sm:min-w-[200px]">
                {c.backHome}
              </Link>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] font-semibold">
                <Link href={ROUTES.features} className="text-brand-blue hover:text-brand-orange hover:underline">
                  {c.exploreFeatures}
                </Link>
                <span className="text-brand-navy/20" aria-hidden="true">
                  ·
                </span>
                <Link href={ROUTES.demo} className="text-brand-blue hover:text-brand-orange hover:underline">
                  {c.bookDemo}
                </Link>
                <span className="text-brand-navy/20" aria-hidden="true">
                  ·
                </span>
                <Link href={ROUTES.requestQuote} className="text-brand-blue hover:text-brand-orange hover:underline">
                  {c.requestQuote}
                </Link>
                <span className="text-brand-navy/20" aria-hidden="true">
                  ·
                </span>
                <Link href={ROUTES.company} className="text-brand-blue hover:text-brand-orange hover:underline">
                  {c.backToCompany}
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </section>

      <CompanyNav current="contact" />
    </CompanyCanvas>
  );
}
