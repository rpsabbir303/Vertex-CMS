"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { CompanyCanvas, CompanyNav } from "@/components/marketing/company/CompanyCanvas";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import {
  clearApplicationConfirmation,
  getApplicationConfirmation,
} from "@/lib/marketing/careers/application/applicationSession";
import type { ApplicationConfirmationPayload } from "@/lib/marketing/careers/application/types";
import { careerDetailPath } from "@/lib/marketing/careers/content";
import { ROUTES } from "@/lib/marketing/navigation";

type ViewState = "loading" | "success" | "invalid";

type Props = {
  jobSlug: string;
};

export function JobApplicationConfirmationView({ jobSlug }: Props) {
  const { t } = useMarketing();
  const a = t.careers.application;
  const [state, setState] = useState<ViewState>("loading");
  const [payload, setPayload] = useState<ApplicationConfirmationPayload | null>(null);

  useEffect(() => {
    const data = getApplicationConfirmation();
    if (data && data.jobSlug === jobSlug) {
      setPayload(data);
      setState("success");
      clearApplicationConfirmation();
    } else {
      setState("invalid");
    }
  }, [jobSlug]);

  if (state === "loading") {
    return (
      <CompanyCanvas>
        <div className="site-shell py-16 sm:py-20" aria-busy="true" aria-label="Loading" />
        <CompanyNav current="careers" />
      </CompanyCanvas>
    );
  }

  if (state === "invalid") {
    return (
      <CompanyCanvas>
        <section className="relative z-[2] border-b border-brand-navy/[0.1]">
          <div className="site-shell py-16 sm:py-20 lg:py-24">
            <div className="careers-safe-zone max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">{a.confirmationInvalidEyebrow}</p>
              <h1 className="display-title mt-5 text-[2rem] leading-[1.06] sm:text-[2.5rem]">{a.confirmationInvalidTitle}</h1>
              <p className="mt-6 max-w-md text-[16px] leading-[1.75] text-brand-muted">{a.confirmationInvalidBody}</p>
              <Link
                href={ROUTES.careers}
                className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-full bg-brand-navy px-6 text-[13px] font-semibold text-white"
              >
                {a.confirmationInvalidCta}
              </Link>
            </div>
          </div>
        </section>
        <CompanyNav current="careers" />
      </CompanyCanvas>
    );
  }

  return (
    <CompanyCanvas>
      <section className="relative z-[2] border-b border-brand-navy/[0.1]">
        <div className="site-shell py-14 sm:py-16 lg:py-20">
          <div className="careers-safe-zone max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">{a.confirmationEyebrow}</p>
            <h1 className="display-title mt-4 text-[2rem] leading-[1.06] sm:text-[2.75rem]">{a.confirmationTitle}</h1>
            <p className="mt-5 text-[16px] leading-[1.75] text-brand-muted">{a.confirmationBody}</p>
            <p className="mt-4 text-[16px] leading-[1.75] text-brand-muted">{a.confirmationNext}</p>

            <dl className="mt-8 rounded-lg border border-brand-line bg-[#FAFBFD] px-4 py-5 sm:px-5">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-orange">{a.reviewVacancy}</dt>
                <dd className="mt-2 text-[15px] font-medium text-brand-navy">{payload!.jobTitle}</dd>
                {payload!.jobLocation ? (
                  <dd className="mt-1 text-[14px] text-brand-muted">{payload!.jobLocation}</dd>
                ) : null}
              </div>
              <div className="mt-5 border-t border-brand-line pt-5">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-orange">{a.confirmationReference}</dt>
                <dd className="mt-2 font-mono text-[14px] text-brand-navy">{payload!.referenceId}</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={ROUTES.careers}
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-brand-navy px-6 text-[13px] font-semibold text-white hover:bg-[#0c2d4d]"
              >
                {a.confirmationBackToCareers}
              </Link>
              <Link
                href={careerDetailPath(payload!.jobSlug)}
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-brand-navy/20 px-6 text-[13px] font-semibold text-brand-navy hover:border-brand-orange"
              >
                {a.confirmationViewRole}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CompanyNav current="careers" />
    </CompanyCanvas>
  );
}
