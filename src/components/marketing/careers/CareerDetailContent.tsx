"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CompanyCanvas, CompanyNav } from "@/components/marketing/company/CompanyCanvas";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import type { CareerJob } from "@/lib/marketing/careers/content";
import { careerDetailPath, getAdjacentJobs } from "@/lib/marketing/careers/content";
import { ROUTES } from "@/lib/marketing/navigation";
import { CareerDetailApply, type CareerApplyState } from "./CareerDetailApply";
import { CareerDetailFlowMark, CareerDetailVisual } from "./CareerDetailVisual";

type Props = {
  job: CareerJob | null;
};

function padIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

function jobOverviewFields(
  job: CareerJob,
  labels: { department: string; employmentType: string; workArrangement: string; location: string },
) {
  const fields: { label: string; value: string }[] = [];
  if (job.team) fields.push({ label: labels.department, value: job.team });
  if (job.employmentType) fields.push({ label: labels.employmentType, value: job.employmentType });
  if (job.workArrangement) fields.push({ label: labels.workArrangement, value: job.workArrangement });
  if (job.location) fields.push({ label: labels.location, value: job.location });
  return fields;
}

function BackToCareers({ label }: { label: string }) {
  return (
    <Link
      href={ROUTES.careers}
      className="text-[13px] font-semibold text-brand-navy hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
    >
      {label}
    </Link>
  );
}

export function CareerDetailContent({ job }: Props) {
  const { t } = useMarketing();
  const d = t.careers.detail;
  const applyLabel = t.careers.openPositions.applyNow;
  const [applyState, setApplyState] = useState<CareerApplyState>("idle");

  async function runDemoApply() {
    if (applyState === "applying" || applyState === "success") return;
    setApplyState("applying");
    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setApplyState("success");
    } catch {
      setApplyState("error");
    }
  }

  const applyProps = {
    label: applyLabel,
    applyingLabel: d.applying,
    demoSuccessLabel: d.applyDemoSuccess,
    errorLabel: d.applyError,
    pendingLabel: d.applyPending,
    demoSupporting: d.applyDemoSupporting,
    state: applyState,
    onApply: () => void runDemoApply(),
    onRetry: () => setApplyState("idle"),
  };

  if (!job) {
    return (
      <CompanyCanvas>
        <section className="relative z-[2] border-b border-brand-navy/[0.1]" aria-labelledby="career-not-found-heading">
          <div className="site-shell relative py-16 sm:py-20 lg:py-24">
            <div className="careers-safe-zone max-w-xl">
              <BackToCareers label={d.backToCareers} />
              <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">{d.eyebrow}</p>
              <h1 id="career-not-found-heading" className="display-title mt-4 text-[2.05rem] leading-[1.06] sm:text-[2.75rem] lg:text-[3.1rem]">
                {d.notFoundTitle}
              </h1>
              <p className="mt-5 max-w-md text-[16px] leading-[1.75] text-brand-muted">{d.notFoundBody}</p>
              <div className="mt-8">
                <Link
                  href={ROUTES.careers}
                  className="inline-flex items-center justify-center rounded-full bg-brand-navy px-6 py-3 text-[13px] font-semibold text-white transition duration-200 hover:bg-[#0c2d4d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 focus-visible:ring-offset-2"
                >
                  {d.backCta}
                </Link>
              </div>
            </div>
          </div>
        </section>
        <CompanyNav current="careers" />
      </CompanyCanvas>
    );
  }

  const fields = jobOverviewFields(job, d);
  const heroMeta = [job.team, job.employmentType, job.workArrangement].filter(Boolean) as string[];
  const aboutCopy = job.about || job.description;
  const lookingFor = job.qualifications?.length ? job.qualifications : job.requirements;
  const { previous, next } = getAdjacentJobs(job.slug);

  return (
    <CompanyCanvas>
      <section className="relative z-[2] border-b border-brand-navy/[0.1]" aria-labelledby="career-detail-heading">
        <div className="site-shell relative grid items-center gap-8 py-14 sm:py-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-8 lg:py-16 xl:py-20">
          <Reveal>
            <div className="careers-safe-zone">
              <BackToCareers label={d.backToCareers} />
              {job.demoContent ? (
                <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.14em] text-brand-muted/70">{d.demoNotice}</p>
              ) : null}
              <p className={`${job.demoContent ? "mt-4" : "mt-8"} text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange`}>
                {d.eyebrow}
              </p>
              <h1
                id="career-detail-heading"
                className="display-title mt-5 max-w-full text-[1.85rem] leading-[1.08] sm:text-[2.75rem] lg:text-[3.1rem] xl:text-[3.25rem]"
              >
                {job.title}
              </h1>
              {heroMeta.length ? (
                <ul className="mt-6 space-y-1" aria-label={d.details}>
                  {heroMeta.map((item) => (
                    <li key={item} className="text-[15px] leading-snug text-brand-navy/80 sm:text-[16px]">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="mt-8">
                <CareerDetailApply job={job} {...applyProps} compact fullWidth />
              </div>
              <span className="mt-8 hidden h-px w-16 bg-brand-orange/70 lg:block" aria-hidden="true" />
            </div>
          </Reveal>
          <div className="relative z-[1] hidden min-w-0 lg:block">
            <CareerDetailVisual />
          </div>
        </div>
      </section>

      {fields.length ? (
        <section className="relative z-[2] border-b border-brand-navy/[0.1]" aria-label={d.details}>
          <div className="site-shell relative py-10 sm:py-12">
            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {fields.map((field) => (
                <div key={field.label} className="border-t border-brand-navy/10 py-5 sm:pr-8">
                  <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-orange">{field.label}</dt>
                  <dd className="mt-2 text-[15px] font-medium text-brand-navy">{field.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ) : null}

      <section className="relative z-[2] border-b border-brand-navy/[0.1]" aria-labelledby="career-about-heading">
        <div className="site-shell relative py-12 sm:py-14 lg:py-16">
          <Reveal>
            <div className="careers-safe-zone">
              <h2 id="career-about-heading" className="display-title text-[1.85rem] leading-[1.1] sm:text-[2.2rem]">
                {d.aboutRole}
              </h2>
              {aboutCopy ? (
                <p className="mt-5 max-w-[38rem] text-[16px] leading-[1.8] text-brand-navy/85 sm:text-[17px]">{aboutCopy}</p>
              ) : (
                <div className="mt-5 max-w-xl rounded-lg border border-brand-navy/12 bg-white px-5 py-6" role="status">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">{d.contentPending}</p>
                  <p className="mt-3 text-[14px] leading-[1.8] text-brand-muted">{d.placeholderBody}</p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {job.responsibilities?.length ? (
        <section className="relative z-[2] border-b border-brand-navy/[0.1] bg-brand-navy/[0.02]" aria-labelledby="career-work-heading">
          <div className="site-shell relative py-12 sm:py-14 lg:py-16">
            <Reveal>
              <div className="careers-safe-zone">
                <h2 id="career-work-heading" className="display-title text-[1.85rem] leading-[1.1] sm:text-[2.2rem]">
                  {d.responsibilities}
                </h2>
                <ol className="mt-8">
                  {job.responsibilities.map((item, index) => (
                    <li key={item} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 border-t border-brand-navy/10 py-4 sm:gap-5">
                      <span className="font-mono text-[12px] font-semibold tracking-[0.08em] text-brand-orange">{padIndex(index)}</span>
                      <p className="text-[15px] leading-[1.8] text-brand-navy/85 sm:text-[16px]">{item}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {lookingFor?.length ? (
        <section className="relative z-[2] border-b border-brand-navy/[0.1]" aria-labelledby="career-looking-heading">
          <div className="site-shell relative py-12 sm:py-14 lg:py-16">
            <Reveal>
              <div className="careers-safe-zone">
                <h2 id="career-looking-heading" className="display-title text-[1.85rem] leading-[1.1] sm:text-[2.2rem]">
                  {d.lookingFor}
                </h2>
                <ul className="mt-8">
                  {lookingFor.map((item) => (
                    <li key={item} className="border-t border-brand-navy/10 py-4 text-[15px] leading-[1.8] text-brand-navy/85 sm:text-[16px]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {job.whyThisRole ? (
        <section className="relative z-[2] border-b border-brand-navy/[0.1] bg-brand-navy/[0.02]" aria-labelledby="career-why-heading">
          <div className="site-shell relative grid items-center gap-10 py-12 sm:py-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.7fr)] lg:gap-16 lg:py-16">
            <Reveal>
              <div className="careers-safe-zone">
                <h2 id="career-why-heading" className="display-title text-[1.85rem] leading-[1.1] sm:text-[2.2rem]">
                  {d.whyRole}
                </h2>
                <p className="mt-5 max-w-[38rem] text-[16px] leading-[1.8] text-brand-navy/85 sm:text-[17px]">{job.whyThisRole}</p>
              </div>
            </Reveal>
            <CareerDetailFlowMark />
          </div>
        </section>
      ) : null}

      <section className="relative z-[2] border-b border-brand-navy/[0.1]" aria-labelledby="career-apply-heading">
        <div className="site-shell relative py-12 sm:py-14 lg:py-16">
          <Reveal>
            <div className="careers-safe-zone max-w-xl">
              <h2 id="career-apply-heading" className="display-title text-[1.85rem] leading-[1.1] sm:text-[2.2rem]">
                {d.applyHeadline}
              </h2>
              <div className="mt-6">
                <CareerDetailApply job={job} {...applyProps} fullWidth />
              </div>
              <div className="mt-10">
                <BackToCareers label={d.backToCareers} />
              </div>
            </div>
          </Reveal>

          {previous || next ? (
            <nav className="mt-12 border-t border-brand-navy/10 pt-8" aria-label={d.adjacentNav}>
              <div className="grid gap-6 sm:grid-cols-2">
                {previous ? (
                  <Link
                    href={careerDetailPath(previous.slug)}
                    className="group min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">{d.previousPosition}</p>
                    <p className="mt-2 text-[15px] font-medium text-brand-navy group-hover:text-brand-orange">{previous.title}</p>
                  </Link>
                ) : (
                  <span />
                )}
                {next ? (
                  <Link
                    href={careerDetailPath(next.slug)}
                    className="group min-w-0 sm:text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">{d.nextPosition}</p>
                    <p className="mt-2 text-[15px] font-medium text-brand-navy group-hover:text-brand-orange">{next.title}</p>
                  </Link>
                ) : null}
              </div>
            </nav>
          ) : null}
        </div>
      </section>

      <CompanyNav current="careers" />
    </CompanyCanvas>
  );
}
