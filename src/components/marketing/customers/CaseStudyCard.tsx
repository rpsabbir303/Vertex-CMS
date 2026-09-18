import Link from "next/link";

import { ArrowRight } from "@/components/Icons";

import type { CaseStudyRecord } from "@/lib/marketing/customers/types";

import { CUSTOMERS_ROUTES } from "@/lib/marketing/customers/content";

import { CaseStudyCoverImage } from "./CaseStudyCoverImage";



type Props = {

  study: CaseStudyRecord;

  className?: string;

  variant?: "row" | "tile";

  visualIndex?: number;

};



export function CaseStudyCard({ study, className = "", variant = "row", visualIndex = 0 }: Props) {

  const segment = [study.contractorType, study.projectType].filter(Boolean).join(" · ");

  const href = CUSTOMERS_ROUTES.caseStudyDetail(study.slug);



  if (variant === "tile") {

    return (

      <article

        className={`group flex h-full flex-col overflow-hidden rounded-lg border border-brand-line bg-white transition hover:border-brand-blue/35 active:border-brand-blue/45 focus-within:border-brand-blue/35 focus-within:ring-2 focus-within:ring-brand-orange/30 ${className}`}

      >

        <CaseStudyCoverImage
          study={study}
          visualIndex={visualIndex}
          className="rounded-none border-0 border-b border-brand-line"
        />

        <div className="flex flex-1 flex-col p-4 sm:p-5">

          <h3 className="text-[16px] font-semibold text-brand-navy">{study.customerName}</h3>

          <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-brand-muted">{segment}</p>

          <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{study.summary}</p>

          {study.outcome ? (

            <p className="mt-3 text-[12px] font-medium leading-relaxed text-brand-navy">{study.outcome}</p>

          ) : null}

          <Link

            href={href}

            className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-brand-blue group-hover:underline group-active:text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"

          >

            Read Case Study

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

        Read Case Study

        <ArrowRight className="h-3.5 w-3.5" />

      </Link>

    </article>

  );

}


