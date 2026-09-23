import { CustomersSectionBackdrop } from "./visuals/CustomersSectionBackdrop";

type Props = {
  headline: string;
  supporting: string;
};

export function TestimonialsContextSection({ headline, supporting }: Props) {
  return (
    <section
      className="relative overflow-hidden border-b border-brand-line bg-[#F5F8FC] py-10 sm:py-12"
      data-design-layer="TestimonialsContext"
      aria-labelledby="testimonials-context-heading"
    >
      <CustomersSectionBackdrop variant="results" />
      <div className="cust-shell relative z-[1]">
        <div className="grid gap-6 border border-brand-line bg-white p-6 sm:p-8 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,1fr)] lg:items-start lg:gap-10">
          <div className="min-w-0 border-b border-brand-line pb-5 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
            <p className="cust-eyebrow">Context</p>
            <h2 id="testimonials-context-heading" className="cust-display mt-2 text-xl sm:text-[1.65rem]">
              {headline}
            </h2>
          </div>
          <p className="min-w-0 text-[15px] leading-relaxed text-brand-muted">{supporting}</p>
        </div>
      </div>
    </section>
  );
}
