import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "@/components/Icons";
import {
  getCaseStudyByCustomerName,
  getTestimonialAvatarSrc,
  getTestimonialContextMetadata,
  getTestimonialHeroImage,
} from "@/lib/marketing/customers/catalog";
import { CUSTOMERS_ROUTES } from "@/lib/marketing/customers/content";
import type { CustomerTestimonialRecord } from "@/lib/marketing/customers/types";

import { CaseStudyAbstractVisual } from "./visuals/CaseStudyAbstractVisual";

export type SplitTestimonialEmphasis = "featured" | "default";

type Props = {
  testimonial: CustomerTestimonialRecord;
  /** Catalog index — drives alternating layout and avatar pool. */
  catalogIndex: number;
  imageOnLeft: boolean;
  emphasis?: SplitTestimonialEmphasis;
  priorityImage?: boolean;
};

function OrangeQuoteMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="40"
      height="32"
      viewBox="0 0 44 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 26V18C10 14.5 12.5 12 16 10.5L18 14.5C16 15 15 16.5 15 18.5H18V26H10ZM28 26V18C28 14.5 30.5 12 34 10.5L36 14.5C34 15 33 16.5 33 18.5H36V26H28Z"
        fill="#FF6A00"
        fillOpacity="0.92"
      />
    </svg>
  );
}

export function SplitTestimonialStory({
  testimonial,
  catalogIndex,
  imageOnLeft,
  emphasis = "default",
  priorityImage = false,
}: Props) {
  const context = getTestimonialContextMetadata(testimonial);
  const contextLine = [context.contractorType, context.projectType].filter(Boolean).join(" · ");
  const study = getCaseStudyByCustomerName(testimonial.company);
  const hero = getTestimonialHeroImage(testimonial);
  const avatarSrc = getTestimonialAvatarSrc(testimonial, catalogIndex);
  const featured = emphasis === "featured";

  const quoteSize = featured
    ? "text-[1.35rem] sm:text-[1.55rem] lg:text-[1.85rem]"
    : "text-[1.25rem] sm:text-[1.4rem] lg:text-[1.55rem]";

  const imageMinH = featured ? "sm:min-h-[280px] lg:min-h-[420px]" : "sm:min-h-[240px] lg:min-h-[360px]";

  const contentPanel = (
    <div className="flex min-w-0 flex-col justify-center bg-[#FAFBFD] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
      <OrangeQuoteMark className="mb-4 shrink-0" />
      <blockquote className="min-w-0">
        <p className={`font-display font-medium leading-snug text-black lg:leading-snug ${quoteSize}`}>
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <div className="mt-6 h-px w-12 bg-brand-orange" aria-hidden="true" />
        <footer className="mt-6 flex items-center gap-4">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-brand-line bg-white sm:h-14 sm:w-14">
            <Image
              src={avatarSrc}
              alt={`${testimonial.name}, ${testimonial.company}`}
              fill
              className="object-cover object-center"
              sizes="56px"
            />
          </div>
          <div className="min-w-0">
            <p className="text-[14px] font-semibold text-black">{testimonial.name}</p>
            <p className="mt-0.5 text-[13px] font-medium text-brand-muted">{testimonial.role}</p>
            <p className="text-[13px] text-brand-muted">{testimonial.company}</p>
            {contextLine ? (
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-muted">
                {contextLine}
              </p>
            ) : null}
          </div>
        </footer>
      </blockquote>
      {study ? (
        <Link
          href={CUSTOMERS_ROUTES.caseStudyDetail(study.slug)}
          className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-brand-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
        >
          Read the full case study
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      ) : null}
    </div>
  );

  const imagePanel = (
    <div
      className={`relative w-full min-w-0 overflow-hidden bg-[#E8EEF4] aspect-[4/3] ${imageMinH} lg:aspect-auto lg:min-h-full lg:h-full`}
    >
      {hero ? (
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={priorityImage}
          unoptimized={hero.src.startsWith("http://") || hero.src.startsWith("https://")}
        />
      ) : (
        <CaseStudyAbstractVisual variant={catalogIndex} className="absolute inset-0 h-full w-full" />
      )}
    </div>
  );

  return (
    <article
      className={`min-w-0 overflow-hidden rounded-lg border border-brand-line bg-white ${
        featured ? "shadow-[0_2px_12px_rgba(8,35,63,0.06)]" : "shadow-[0_1px_2px_rgba(8,35,63,0.04)]"
      }`}
      data-design-layer="SplitTestimonialStory"
    >
      <div className="grid min-w-0 lg:grid-cols-2 lg:items-stretch">
        <div className={`order-1 min-w-0 ${imageOnLeft ? "lg:order-1" : "lg:order-2"}`}>{imagePanel}</div>
        <div className={`order-2 min-w-0 ${imageOnLeft ? "lg:order-2" : "lg:order-1"}`}>{contentPanel}</div>
      </div>
    </article>
  );
}
