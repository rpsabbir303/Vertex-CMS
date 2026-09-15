"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import type { CareerJob } from "@/lib/marketing/careers/content";
import { ROUTES } from "@/lib/marketing/navigation";

type Props = {
  job: CareerJob;
};

function formatMeta(job: CareerJob): string {
  const parts: string[] = [];
  if (job.employmentType) parts.push(job.employmentType);
  if (job.workArrangement) parts.push(job.workArrangement);
  else if (job.location) parts.push(job.location);
  return parts.join(" · ");
}

export function CareerDetailContent({ job }: Props) {
  const { t } = useMarketing();
  const d = t.careers.detail;
  const metaLine = formatMeta(job);

  return (
    <article className="site-shell py-12 sm:py-16 lg:py-20">
      <Reveal className="mx-auto max-w-2xl">
        <Link
          href={ROUTES.careers}
          className="text-[13px] font-semibold text-brand-blue hover:text-brand-orange hover:underline"
        >
          {d.backToCareers}
        </Link>

        {job.demoContent ? (
          <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.12em] text-brand-muted/70">{d.demoNotice}</p>
        ) : null}

        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">{d.eyebrow}</p>
        <h1 className="display-title mt-3 text-2xl sm:text-3xl lg:text-[2.25rem]">{job.title}</h1>

        <dl className="mt-5 space-y-2 text-[14px]">
          {job.team ? (
            <div className="flex flex-wrap gap-x-2">
              <dt className="font-semibold text-brand-navy">{d.team}</dt>
              <dd className="text-brand-muted">{job.team}</dd>
            </div>
          ) : null}
          {metaLine ? (
            <div className="flex flex-wrap gap-x-2">
              <dt className="font-semibold text-brand-navy">{d.details}</dt>
              <dd className="text-brand-muted">{metaLine}</dd>
            </div>
          ) : null}
        </dl>

        {job.description ? (
          <p className="mt-8 text-[15px] leading-relaxed text-brand-muted">{job.description}</p>
        ) : null}

        <p className="mt-6 text-[14px] leading-relaxed text-brand-muted">{d.placeholderBody}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href={ROUTES.contact} className="btn-primary text-center">
            {d.contactCta}
          </Link>
          <Link href={ROUTES.careers} className="btn-secondary text-center">
            {d.viewAllRoles}
          </Link>
        </div>
      </Reveal>
    </article>
  );
}
