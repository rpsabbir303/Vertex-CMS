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

  /** Matches the editorial featured block — label only, same story data. */
  featuredInLibrary?: boolean;

};

function libraryContextLine(study: CaseStudyRecord): string | null {
  const context = study.customerContext?.trim();
  if (!context) return null;
  if (context === study.summary.trim()) return null;
  return context;
}



export function CaseStudyCard({
  study,
  className = "",
  variant = "row",
  visualIndex = 0,
  libraryLayout = false,
  showCapabilities = false,
  featuredInLibrary = false,
}: Props) {

  const segment = [study.contractorType, study.projectType].filter(Boolean).join(" · ");

  const href = CUSTOMERS_ROUTES.caseStudyDetail(study.slug);
  const supplementaryContext = libraryContextLine(study);

  if (variant === "featured") {
    return (
      <article
        className={`group cust-featured-case-study grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:gap-10 xl:gap-12 ${className}`}
        data-design-layer="CaseStudyFeaturedCard"
      >
        <CaseStudyCoverImage
          study={study}
          priority
          imageTreatment="featured"
          aspectClassName="aspect-[4/3] min-h-[260px] sm:min-h-[300px] lg:aspect-[5/4] lg:min-h-[380px] xl:min-h-[420px]"
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="rounded-sm border border-brand-navy/10"
          objectPositionClassName="object-[center_32%]"
        />
        <div className="flex min-w-0 flex-col justify-center border-brand-line py-1 lg:border-l lg:pl-10 xl:pl-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">{study.customerName}</p>
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-orange">{segment}</p>
          <h3 className="cust-display mt-4 text-[1.45rem] leading-[1.15] text-brand-navy sm:text-[1.75rem] lg:text-[1.95rem]">
            {study.headline}
          </h3>
          <p className="mt-4 text-[15px] leading-[1.65] text-brand-muted">{study.summary}</p>
          {supplementaryContext ? (
            <p className="mt-3 text-[14px] leading-[1.6] text-brand-muted/95">{supplementaryContext}</p>
          ) : null}
          {showCapabilities && study.capabilities?.length ? (
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Capabilities">
              {study.capabilities.map((cap) => (
                <li
                  key={cap.name}
                  className="rounded-sm border border-brand-line/90 bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.07em] text-brand-muted"
                >
                  {cap.name}
                </li>
              ))}
            </ul>
          ) : null}
          {study.outcome ? (
            <p className="mt-5 border-l-2 border-brand-orange/90 pl-3.5 text-[14px] font-medium leading-snug text-brand-navy/95">
              {study.outcome}
            </p>
          ) : null}
          <Link
            href={href}
            className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-brand-blue transition group-hover:text-brand-navy group-hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
          >
            Read case study
            <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
          </Link>
        </div>
      </article>
    );
  }

  if (variant === "tile") {

    return (

      <article
        className={`group cust-case-study-tile flex h-full min-h-0 w-full flex-col overflow-hidden rounded-sm border border-brand-navy/10 bg-white transition-colors hover:border-brand-navy/20 focus-within:border-brand-blue/30 focus-within:ring-1 focus-within:ring-brand-orange/25 ${className}`}
      >
        <CaseStudyCoverImage
          study={study}
          visualIndex={visualIndex}
          aspectClassName="aspect-[3/2]"
          className="rounded-none border-0 border-b border-brand-line/80"
        />

        <div className="flex flex-1 flex-col px-4 py-5 sm:px-5 sm:py-6">
          {libraryLayout ? (
            <>
              {featuredInLibrary ? (
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Featured story</p>
              ) : null}
              <p className={`text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted ${featuredInLibrary ? "mt-2" : ""}`}>
                {study.customerName}
              </p>
              <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-muted/85">{segment}</p>
              <h3 className="cust-display mt-3 text-[1.15rem] leading-snug text-brand-navy sm:text-[1.25rem]">{study.headline}</h3>
            </>
          ) : (
            <>
              <h3 className="text-[16px] font-semibold text-brand-navy">{study.customerName}</h3>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-muted">{segment}</p>
            </>
          )}

          <p className="mt-3 text-[14px] leading-[1.6] text-brand-muted">{study.summary}</p>
          {libraryLayout && supplementaryContext ? (
            <p className="mt-2 text-[13px] leading-[1.55] text-brand-muted/95">{supplementaryContext}</p>
          ) : null}

          {showCapabilities && study.capabilities?.length ? (
            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Capabilities">
              {study.capabilities.map((cap) => (
                <li
                  key={cap.name}
                  className="rounded-sm border border-brand-line/90 bg-[#FAFBFD] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-brand-muted"
                >
                  {cap.name}
                </li>
              ))}
            </ul>
          ) : null}

          {study.outcome ? (
            <p className="mt-4 text-[13px] font-medium leading-snug text-brand-navy/90">{study.outcome}</p>
          ) : null}

          <Link
            href={href}
            className="mt-auto inline-flex items-center gap-2 pt-5 text-[13px] font-semibold text-brand-blue group-hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
          >
            Read case study
            <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
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


