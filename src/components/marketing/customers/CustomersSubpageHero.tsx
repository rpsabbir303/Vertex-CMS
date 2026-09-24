import type { CustomersBackdropVariant } from "./visuals/CustomersSectionBackdrop";
import { CaseStudiesHeroDiagram } from "./visuals/CaseStudiesHeroDiagram";
import { CustomersSectionBackdrop } from "./visuals/CustomersSectionBackdrop";

type Props = {
  eyebrow: string;
  headline: string;
  supporting: string;
  backdropVariant: CustomersBackdropVariant;
  /** Split editorial hero with workflow diagram (case studies listing). */
  layout?: "default" | "split";
};

/** Compact editorial hero for Customers sub-routes (listings). */
export function CustomersSubpageHero({
  eyebrow,
  headline,
  supporting,
  backdropVariant,
  layout = "default",
}: Props) {
  const isSplit = layout === "split";

  return (
    <section
      className={`relative overflow-hidden border-b border-brand-line bg-white ${
        isSplit ? "py-10 sm:py-12 lg:py-16" : "py-7 sm:py-9 lg:py-10"
      }`}
      data-design-layer="CustomersSubpageHero"
    >
      <CustomersSectionBackdrop variant={backdropVariant} />
      <div
        className={`cust-shell relative z-[1] ${isSplit ? "grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(260px,400px)] lg:items-center lg:gap-14 xl:gap-16" : "max-w-2xl"}`}
      >
        <div className="min-w-0 max-w-2xl">
          <p className="cust-eyebrow">{eyebrow}</p>
          <h1
            className={`cust-display mt-3 leading-[1.1] text-brand-navy ${
              isSplit
                ? "text-[2rem] sm:text-[2.35rem] lg:text-[2.65rem] xl:text-[2.85rem]"
                : "text-[1.85rem] sm:text-[2.25rem] lg:text-[2.45rem]"
            }`}
          >
            {headline}
          </h1>
          <p className={`mt-4 max-w-xl leading-relaxed text-brand-muted ${isSplit ? "text-[16px] sm:text-[17px]" : "mt-3 text-[15px]"}`}>
            {supporting}
          </p>
        </div>
        {isSplit ? <CaseStudiesHeroDiagram className="hidden sm:block lg:max-w-none" /> : null}
      </div>
    </section>
  );
}
