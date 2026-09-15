"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import { ContactSuccessVisual } from "./ContactSuccessVisual";
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
    return <div className="mx-auto max-w-lg py-16 sm:py-20 lg:py-24" aria-busy="true" aria-label="Loading" />;
  }

  if (state === "invalid") {
    return (
      <div className="mx-auto max-w-lg py-12 text-center sm:py-16 lg:py-20">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">{c.successInvalidEyebrow}</p>
        <h1 className="display-title mt-4 text-2xl sm:text-3xl">{c.successInvalidTitle}</h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-brand-muted">{c.successInvalidBody}</p>
        <div className="mt-8">
          <Link href={ROUTES.contact} className="btn-primary inline-flex min-w-[180px] justify-center">
            {c.successInvalidCta}
          </Link>
        </div>
      </div>
    );
  }

  const inquiryLabel = c.inquiryTypes[submission!.inquiryType];

  return (
    <div className="mx-auto max-w-lg py-12 text-center sm:py-16 lg:py-20">
      <ContactSuccessVisual className="mb-6 sm:mb-8" />

      <div role="status" aria-live="polite">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">{c.successEyebrow}</p>
        <h1 className="display-title mt-4 text-2xl sm:text-3xl lg:text-[2rem]">{c.successTitle}</h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-brand-muted sm:text-base">{c.successBody}</p>
        <p className="mx-auto mt-4 max-w-md text-[14px] leading-relaxed text-brand-muted/90">{c.successNextSteps}</p>
      </div>

      {submission ? (
        <dl className="mx-auto mt-8 max-w-sm border-t border-brand-line/70 pt-6 text-left text-[13px]">
          <dt className="sr-only">{c.successSummaryTitle}</dt>
          <div className="space-y-3">
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
          </div>
        </dl>
      ) : null}

      <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10">
        <Link href={ROUTES.home} className="btn-primary w-full max-w-xs justify-center sm:w-auto sm:min-w-[200px]">
          {c.backHome}
        </Link>
        <nav aria-label="Optional next steps" className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[13px] font-semibold">
          <Link href={ROUTES.features} className="text-brand-blue hover:text-brand-orange hover:underline">
            {c.exploreFeatures}
          </Link>
          <span className="text-brand-line" aria-hidden="true">
            ·
          </span>
          <Link href={ROUTES.demo} className="text-brand-blue hover:text-brand-orange hover:underline">
            {c.bookDemo}
          </Link>
          <span className="text-brand-line" aria-hidden="true">
            ·
          </span>
          <Link href={ROUTES.requestQuote} className="text-brand-blue hover:text-brand-orange hover:underline">
            {c.requestQuote}
          </Link>
        </nav>
      </div>
    </div>
  );
}
