import type { CustomersBackdropVariant } from "./visuals/CustomersSectionBackdrop";
import { CustomersSectionBackdrop } from "./visuals/CustomersSectionBackdrop";

type Props = {
  eyebrow: string;
  headline: string;
  supporting: string;
  backdropVariant: CustomersBackdropVariant;
};

/** Compact editorial hero for Customers sub-routes (listings). */
export function CustomersSubpageHero({ eyebrow, headline, supporting, backdropVariant }: Props) {
  return (
    <section
      className="relative overflow-hidden border-b border-brand-line bg-white py-7 sm:py-9 lg:py-10"
      data-design-layer="CustomersSubpageHero"
    >
      <CustomersSectionBackdrop variant={backdropVariant} />
      <div className="cust-shell relative z-[1] max-w-2xl">
        <p className="cust-eyebrow">{eyebrow}</p>
        <h1 className="cust-display mt-3 text-[1.85rem] leading-[1.12] sm:text-[2.25rem] lg:text-[2.45rem]">{headline}</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-brand-muted">{supporting}</p>
      </div>
    </section>
  );
}
