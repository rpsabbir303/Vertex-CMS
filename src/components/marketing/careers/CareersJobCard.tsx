import Link from "next/link";
import type { CareerJob } from "@/lib/marketing/careers/content";
import { careerDetailPath } from "@/lib/marketing/careers/content";

type Props = {
  job: CareerJob;
  ctaLabel: string;
};

export function formatJobPlacement(job: CareerJob): string | null {
  const parts: string[] = [];
  if (job.workArrangement) parts.push(job.workArrangement);
  if (job.location) parts.push(job.location);
  if (!parts.length) return null;
  return `(${parts.join(" - ")})`;
}

export function CareersJobCard({ job, ctaLabel }: Props) {
  const href = careerDetailPath(job.slug);
  const placement = formatJobPlacement(job);
  const pills = [job.team, job.employmentType].filter(Boolean) as string[];
  const ariaLabel = placement ? `${job.title} ${placement}` : job.title;

  return (
    <li className="h-full">
      <article className="group flex h-full flex-col rounded-lg border border-brand-navy/12 bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-brand-navy/25 hover:shadow-[0_8px_24px_-18px_rgba(8,35,63,0.35)] sm:p-6">
        <div className="min-w-0">
          <h3 className="text-[16px] font-semibold leading-snug text-brand-navy sm:text-[17px]">
            {job.title}
            {placement ? (
              <span className="font-normal text-brand-muted"> {placement}</span>
            ) : null}
          </h3>

          {pills.length ? (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {pills.map((pill) => (
                <span
                  key={pill}
                  className="inline-flex rounded-full border border-brand-navy/12 bg-[#F5F8FC] px-2.5 py-0.5 text-[11px] font-medium text-brand-navy/75"
                >
                  {pill}
                </span>
              ))}
            </div>
          ) : null}

          {job.description ? (
            <p className="mt-3 line-clamp-2 text-[13px] leading-relaxed text-brand-muted">{job.description}</p>
          ) : null}
        </div>

        <div className="mt-auto pt-5">
          <Link
            href={href}
            aria-label={`${ctaLabel}: ${ariaLabel}`}
            className="inline-flex items-center justify-center rounded-full bg-brand-navy px-4 py-2 text-[12px] font-semibold text-white transition duration-200 hover:bg-[#0c2d4d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 focus-visible:ring-offset-2"
          >
            {ctaLabel}
          </Link>
        </div>
      </article>
    </li>
  );
}
