export type MarketingTestimonialQuoteProps = {
  quote: string;
  name: string;
  role: string;
  company: string;
  note?: string;
  /** Home uses large editorial quote; Customers grid uses a compact variant. */
  size?: "featured" | "grid";
  className?: string;
};

/** Shared testimonial block — same visual system on Home, Customers, and case study detail. */
export function MarketingTestimonialQuote({
  quote,
  name,
  role,
  company,
  note,
  size = "featured",
  className = "",
}: MarketingTestimonialQuoteProps) {
  const quoteClassName =
    size === "featured"
      ? "font-display text-2xl font-medium leading-snug text-brand-navy sm:text-3xl lg:text-4xl lg:leading-[1.2]"
      : "font-display text-xl font-medium leading-snug text-brand-navy sm:text-[22px]";

  const footerMt = size === "featured" ? "mt-10" : "mt-6";

  return (
    <blockquote className={className}>
      <p className={quoteClassName}>&ldquo;{quote}&rdquo;</p>
      <footer className={`${footerMt} border-l-2 border-brand-orange pl-6`}>
        <p className="font-display text-lg font-bold text-brand-navy">{name}</p>
        <p className="mt-1 text-sm font-semibold text-brand-orange">{role}</p>
        <p className="text-sm text-brand-muted">{company}</p>
        {note ? <p className="mt-3 text-xs text-brand-muted">{note}</p> : null}
      </footer>
    </blockquote>
  );
}
