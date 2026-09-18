import { getFeaturedTestimonial, getTestimonialsCatalog, hasTestimonials } from "@/lib/marketing/customers/catalog";
import { CUSTOMERS_LIMITED_NOTES, CUSTOMERS_PAGE, CUSTOMERS_SECTIONS } from "@/lib/marketing/customers/content";

import { CustomerTestimonialQuote } from "./CustomerTestimonialQuote";
import { CustomersProofCompactNote } from "./CustomersProofCompactNote";

import { CustomersSectionBackdrop } from "./visuals/CustomersSectionBackdrop";

export function TestimonialPreview() {
  const { testimonials: copy } = CUSTOMERS_PAGE;
  const all = hasTestimonials() ? getTestimonialsCatalog() : [];
  const featured = getFeaturedTestimonial();
  const rest = featured ? all.filter((t) => t.id !== featured.id) : [];
  const items = featured ? [featured, ...rest.slice(0, 2)] : [];

  return (
    <section
      id={CUSTOMERS_SECTIONS.testimonials}
      className="cust-scroll-target relative overflow-hidden border-b border-brand-line bg-white py-10 sm:py-12"
      data-design-layer="CustomerVoice"
    >
      <CustomersSectionBackdrop variant="testimonials" />
      <div className="cust-shell relative z-[1]">
        <div className="max-w-xl">
          <p className="cust-eyebrow">{copy.eyebrow}</p>
          <h2 className="cust-display mt-2 text-xl sm:text-[1.75rem]">{copy.headline}</h2>
          <p className="mt-2 text-[14px] leading-relaxed text-brand-muted">{copy.supporting}</p>
        </div>

        {items.length > 0 ? (
          <ul className="mt-8 grid list-none gap-8 lg:grid-cols-3 lg:gap-6">
            {items.map((t) => (
              <li
                key={t.id}
                className="min-w-0 border-t border-brand-line pt-6 lg:border-t-0 lg:border-l lg:border-brand-line lg:pt-0 lg:pl-6 lg:first:border-l-0 lg:first:pl-0"
              >
                <CustomerTestimonialQuote testimonial={t} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-5 rounded-lg border border-brand-line bg-[#FAFBFD] px-4 py-4 sm:px-5">
            <CustomersProofCompactNote message={CUSTOMERS_LIMITED_NOTES.testimonials} />
          </div>
        )}
      </div>
    </section>
  );
}
