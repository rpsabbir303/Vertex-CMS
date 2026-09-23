import Link from "next/link";

import { ArrowRight } from "@/components/Icons";

import type { CaseStudyRecord } from "@/lib/marketing/customers/types";

import { CUSTOMERS_ROUTES } from "@/lib/marketing/customers/content";

import { CaseStudyCoverImage } from "./CaseStudyCoverImage";



type Props = {

  study: CaseStudyRecord;

  className?: string;

  variant?: "row" | "tile" | "featured";

  visualIndex?: number;

  /** Listing page: headline as title, customer name as metadata. */
  libraryLayout?: boolean;

  showCapabilities?: boolean;

};



export function CaseStudyCard({
  study,
  className = "",
  variant = "row",
  visualIndex = 0,
  libraryLayout = false,
  showCapabilities = false,
}: Props) {

  const segment = [study.contractorType, study.projectType].filter(Boolean).join(" · ");

  const href = CUSTOMERS_ROUTES.caseStudyDetail(study.slug);

  if (variant === "featured") {
    return (
      <article
        className={`group grid gap-6 lg:grid-cols-2 lg:items-stretch lg:gap-8 ${className}`}
        data-design-layer="CaseStudyFeaturedCard"
      >
        <CaseStudyCoverImage
          study={study}
          priority
          aspectClassName="aspect-video min-h-[240px] lg:aspect-auto lg:min-h-[300px] lg:h-full"
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="rounded-lg border border-brand-line"
        />
        <div className="flex min-w-0 flex-col justify-center rounded-lg border border-brand-line bg-[#FAFBFD] p-5 sm:p-6 lg:p-7">
          <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-brand-muted">{study.customerName}</p>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-orange">{segment}</p>
          <h3 className="cust-display mt-3 text-xl leading-snug sm:text-[1.65rem]">{study.headline}</h3>
          <p className="mt-3 text-[14px] leading-relaxed text-brand-muted">{study.summary}</p>
          {showCapabilities && study.capabilities?.length ? (
            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Capabilities">
              {study.capabilities.slice(0, 5).map((cap) => (
                <li
                  key={cap.name}
                  className="rounded border border-brand-line bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-brand-muted"
                >
                  {cap.name}
                </li>
              ))}
            </ul>
          ) : null}
          {study.outcome ? (
            <p className="mt-4 border-l-2 border-brand-orange pl-3 text-[13px] font-medium leading-snug text-brand-navy">
              {study.outcome}
            </p>
          ) : null}
          <Link
            href={href}
            className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-brand-blue group-hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
          >
            Read case study
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </article>
    );
  }

  if (variant === "tile") {

    return (

      <article

        className={`group flex h-full min-h-0 w-full flex-col overflow-hidden rounded-lg border border-brand-line bg-white transition hover:border-brand-blue/35 active:border-brand-blue/45 focus-within:border-brand-blue/35 focus-within:ring-2 focus-within:ring-brand-orange/30 ${className}`}

      >

        <CaseStudyCoverImage
          study={study}
          visualIndex={visualIndex}
          className="rounded-none border-0 border-b border-brand-line"
        />

        <div className="flex flex-1 flex-col p-4 sm:p-5">

          {libraryLayout ? (
            <>
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-brand-muted">{study.customerName}</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-brand-muted/90">{segment}</p>
              <h3 className="mt-2 text-[16px] font-semibold leading-snug text-brand-navy">{study.headline}</h3>
            </>
          ) : (
            <>
              <h3 className="text-[16px] font-semibold text-brand-navy">{study.customerName}</h3>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-brand-muted">{segment}</p>
            </>
          )}

          <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{study.summary}</p>

          {showCapabilities && study.capabilities?.length ? (
            <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Capabilities">
              {study.capabilities.slice(0, 4).map((cap) => (
                <li
                  key={cap.name}
                  className="rounded border border-brand-line bg-[#FAFBFD] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-brand-muted"
                >
                  {cap.name}
                </li>
              ))}
            </ul>
          ) : null}

          {study.outcome ? (

            <p className="mt-3 text-[12px] font-medium leading-relaxed text-brand-navy">{study.outcome}</p>

          ) : null}

          <Link

            href={href}

            className="mt-auto inline-flex items-center gap-2 pt-4 text-[13px] font-semibold text-brand-blue group-hover:underline group-active:text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"

          >

            Read case study

            <ArrowRight className="h-3.5 w-3.5" />

          </Link>

        </div>

      </article>

    );

  }



  return (

    <article

      className={`group grid gap-4 border-b border-brand-line py-5 transition last:border-b-0 hover:bg-[#FAFBFD]/80 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-8 ${className}`}

    >

      <div className="min-w-0">

        <h3 className="text-[17px] font-semibold text-brand-navy">{study.customerName}</h3>

        <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-brand-muted">{segment}</p>

        <p className="mt-2 text-[14px] leading-relaxed text-brand-muted">{study.summary}</p>

        {study.outcome ? <p className="mt-2 text-[13px] font-medium text-brand-navy">{study.outcome}</p> : null}

      </div>

      <Link

        href={href}

        className="inline-flex shrink-0 items-center gap-2 text-[13px] font-semibold text-brand-blue transition group-hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"

      >

        Read case study

        <ArrowRight className="h-3.5 w-3.5" />

      </Link>

    </article>

  );

}


