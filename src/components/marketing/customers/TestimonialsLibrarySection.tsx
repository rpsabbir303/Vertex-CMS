import { CUSTOMERS_LIMITED_NOTES } from "@/lib/marketing/customers/content";
import type { CustomerTestimonialRecord } from "@/lib/marketing/customers/types";

import { CustomersProofCompactNote } from "./CustomersProofCompactNote";
import { TestimonialsSplitLibrary } from "./TestimonialsSplitLibrary";
import { CustomersSectionBackdrop } from "./visuals/CustomersSectionBackdrop";

type Props = {
  testimonials: CustomerTestimonialRecord[];
  headline: string;
  supporting: string;
  featuredEyebrow: string;
};

export function TestimonialsLibrarySection({
  testimonials,
  headline,
  supporting,
  featuredEyebrow,
}: Props) {
  return (
    <section
      className="relative overflow-hidden border-b border-brand-line bg-[#F5F8FC] py-10 sm:py-12 lg:py-14"
      data-design-layer="TestimonialsLibrary"
      aria-labelledby="testimonials-library-heading"
    >
      <CustomersSectionBackdrop variant="testimonials" />
      <div className="cust-shell relative z-[1]">
        <header className="max-w-2xl">
          <h2 id="testimonials-library-heading" className="cust-display text-xl text-black sm:text-[1.75rem]">
            {headline}
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-brand-muted">{supporting}</p>
        </header>

        {testimonials.length === 0 ? (
          <div className="mt-6 rounded-lg border border-brand-line bg-[#FAFBFD] px-4 py-4 sm:px-5">
            <CustomersProofCompactNote message={CUSTOMERS_LIMITED_NOTES.testimonials} />
          </div>
        ) : (
          <TestimonialsSplitLibrary testimonials={testimonials} featuredEyebrow={featuredEyebrow} />
        )}
      </div>
    </section>
  );
}
