"use client";

import Link from "next/link";
import type { CareerJob } from "@/lib/marketing/careers/content";
import { careerApplicationPath } from "@/lib/marketing/careers/content";

type Props = {
  job: CareerJob;
  label: string;
  pendingLabel: string;
  demoSupporting?: string;
  fullWidth?: boolean;
  compact?: boolean;
};

const buttonClass =
  "inline-flex items-center justify-center rounded-full bg-brand-navy px-6 py-3 text-[13px] font-semibold text-white transition duration-200 hover:bg-[#0c2d4d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 focus-visible:ring-offset-2";

function isExternal(url: string) {
  return /^https?:\/\//i.test(url);
}

export function CareerDetailApply({
  job,
  label,
  pendingLabel,
  demoSupporting,
  fullWidth,
  compact,
}: Props) {
  const widthClass = fullWidth ? "w-full sm:w-auto" : "";
  const ariaLabel = `${label}: ${job.title}`;

  if (job.applicationUrl) {
    const external = isExternal(job.applicationUrl);
    return (
      <a
        href={job.applicationUrl}
        aria-label={ariaLabel}
        className={`${buttonClass} ${widthClass}`}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {label}
      </a>
    );
  }

  if (job.status !== "open") {
    return (
      <p className="max-w-md text-[14px] leading-[1.8] text-brand-muted" role="status">
        {pendingLabel}
      </p>
    );
  }

  return (
    <div>
      {!compact && job.demoContent && demoSupporting ? (
        <p className="mb-4 max-w-md text-[14px] leading-[1.8] text-brand-muted">{demoSupporting}</p>
      ) : null}
      <Link href={careerApplicationPath(job.slug)} aria-label={ariaLabel} className={`${buttonClass} ${widthClass}`}>
        {label}
      </Link>
    </div>
  );
}
