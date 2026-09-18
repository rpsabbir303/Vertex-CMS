import { MarketingTestimonialQuote } from "@/components/marketing/MarketingTestimonialQuote";
import type { CustomerTestimonialRecord } from "@/lib/marketing/customers/types";

type Props = {
  testimonial: CustomerTestimonialRecord;
  className?: string;
  size?: "featured" | "grid";
};

export function CustomerTestimonialQuote({ testimonial, className = "", size = "grid" }: Props) {
  return (
    <MarketingTestimonialQuote
      className={className}
      size={size}
      quote={testimonial.quote}
      name={testimonial.name}
      role={testimonial.role}
      company={testimonial.company}
    />
  );
}
