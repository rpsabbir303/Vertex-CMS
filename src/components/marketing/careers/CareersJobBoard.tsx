import Link from "next/link";
import type { CareerJob } from "@/lib/marketing/careers/content";
import { careersEmptyState } from "@/lib/marketing/careers/content";

type Props = {
  job: CareerJob;
};

export function CareersJobRow({ job }: Props) {
  const href = job.applicationUrl;
  const locationLine = [job.location, job.employmentType].filter(Boolean).join(" · ");

  const body = (
    <>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-display text-xl font-bold tracking-tight text-brand-navy">{job.title}</h3>
          {job.department ? (
            <span className="text-[12px] font-medium text-brand-muted">{job.department}</span>
          ) : null}
        </div>
        {locationLine ? <p className="mt-2 text-[13px] text-brand-muted">{locationLine}</p> : null}
        {job.description ? (
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-brand-navy/80">{job.description}</p>
        ) : null}
      </div>
      {href ? (
        <span className="mt-4 inline-flex shrink-0 items-center gap-1.5 text-[13px] font-semibold text-brand-orange transition group-hover:gap-2.5 sm:mt-0">
          View role
          <span aria-hidden="true">→</span>
        </span>
      ) : null}
    </>
  );

  const className =
    "group flex flex-col border-b border-brand-line px-1 py-7 transition hover:bg-[#FAFBFD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:px-3 sm:py-8";

  if (href) {
    return (
      <li>
        <Link href={href} className={className}>
          {body}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <div className={className} role="article" aria-label={job.title}>
        {body}
      </div>
    </li>
  );
}

export function CareersEmptyState() {
  return (
    <div className="rounded-xl border border-dashed border-brand-line bg-[#FAFBFD] px-6 py-14 text-center sm:px-10">
      <p className="font-display text-xl font-bold tracking-tight text-brand-navy sm:text-2xl">
        {careersEmptyState.title}
      </p>
      <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-brand-muted">
        {careersEmptyState.body}
      </p>
      <p className="mx-auto mt-6 max-w-sm rounded-lg border border-dashed border-brand-line bg-white px-4 py-3 text-[12px] italic text-brand-muted">
        {careersEmptyState.placeholderNote}
      </p>
    </div>
  );
}
