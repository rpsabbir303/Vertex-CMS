import type { Testimonial } from "@/lib/website/tenantData";

type Props = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: Props) {
  return (
    <blockquote className="flex h-full flex-col border border-brand-line bg-white p-6 sm:p-8">
      <p className="flex-1 text-base leading-relaxed text-brand-navy">&ldquo;{testimonial.quote}&rdquo;</p>
      <footer className="mt-6 border-t border-brand-line pt-5">
        <p className="font-display font-semibold text-brand-navy">{testimonial.name}</p>
        <p className="mt-1 text-sm text-brand-muted">{testimonial.company}</p>
        {testimonial.project && (
          <p className="mt-1 text-xs text-brand-muted">{testimonial.project}</p>
        )}
      </footer>
    </blockquote>
  );
}
