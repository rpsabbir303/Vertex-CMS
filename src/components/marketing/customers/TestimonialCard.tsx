import Link from "next/link";

import { ArrowRight } from "@/components/Icons";
import { getCaseStudyByCustomerName, getTestimonialContextMetadata } from "@/lib/marketing/customers/catalog";
import { CUSTOMERS_ROUTES } from "@/lib/marketing/customers/content";
import type { CustomerTestimonialRecord } from "@/lib/marketing/customers/types";

type Props = {
  testimonial: CustomerTestimonialRecord;
  className?: string;
};

export function TestimonialCard({ testimonial, className = "" }: Props) {
  const context = getTestimonialContextMetadata(testimonial);
  const contextLine = [context.contractorType, context.projectType].filter(Boolean).join(" · ");
  const study = getCaseStudyByCustomerName(testimonial.company);

  return (
    <article
      className={`flex h-full min-h-0 flex-col rounded-lg border border-brand-line bg-white p-5 sm:p-6 ${className}`}
      data-design-layer="TestimonialCard"
    >
      <blockquote className="flex flex-1 flex-col">
        <p className="font-display text-[1.05rem] font-medium leading-snug text-brand-navy sm:text-[1.1rem]">
          <span className="text-brand-orange" aria-hidden="true">
            &ldquo;
          </span>
          {testimonial.quote}
          <span className="text-brand-orange" aria-hidden="true">
            &rdquo;
          </span>
        </p>
        <div className="mt-5 h-px w-10 bg-brand-orange/80" aria-hidden="true" />
        <div className="mt-4 border-t border-brand-line pt-4">
          <p className="text-[13px] font-semibold text-brand-navy">{testimonial.name}</p>
          <p className="mt-1 text-[12px] font-medium text-brand-muted">{testimonial.role}</p>
          <p className="mt-0.5 text-[13px] text-brand-muted">{testimonial.company}</p>
          {contextLine ? (
            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-muted">{contextLine}</p>
          ) : null}
        </div>
      </blockquote>
      {study ? (
        <Link
          href={CUSTOMERS_ROUTES.caseStudyDetail(study.slug)}
          className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
        >
          Read the full case study
          <ArrowRight className="h-3 w-3" aria-hidden />
        </Link>
      ) : null}
    </article>
  );
}
