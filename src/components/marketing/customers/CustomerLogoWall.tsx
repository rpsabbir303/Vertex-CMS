import { hasApprovedLogos } from "@/lib/marketing/customers/catalog";

import { CUSTOMERS_LIMITED_NOTES, CUSTOMERS_PAGE, CUSTOMERS_SECTIONS } from "@/lib/marketing/customers/content";

import { CustomersProofCompactNote } from "./CustomersProofCompactNote";

import { CustomerLogoWallGrid } from "./visuals/CustomerLogoWallGrid";

import { CustomersSectionBackdrop } from "./visuals/CustomersSectionBackdrop";

type Props = {
  asSection?: boolean;
};

export function CustomerLogoWall({ asSection = true }: Props) {
  const { logos } = CUSTOMERS_PAGE;
  const approved = hasApprovedLogos();

  const body = (
    <>
      <div className="max-w-2xl">
        <p className="cust-eyebrow">{logos.eyebrow}</p>
        <h2 className="cust-display mt-2 text-xl sm:text-[1.85rem] lg:text-[2rem]">{logos.headline}</h2>
        <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-brand-muted sm:text-[15px]">{logos.supporting}</p>
      </div>

      {approved ? (
        <CustomerLogoWallGrid />
      ) : (
        <div className="mt-8 rounded-lg border border-brand-line bg-white px-4 py-5 sm:px-6 sm:py-6">
          <CustomersProofCompactNote message={CUSTOMERS_LIMITED_NOTES.logos} />
        </div>
      )}
    </>
  );

  if (!asSection) {
    return <div data-design-layer="LogoWall">{body}</div>;
  }

  return (
    <section
      id={CUSTOMERS_SECTIONS.ecosystem}
      className="cust-scroll-target relative overflow-hidden border-b border-brand-line bg-white py-10 sm:py-12 lg:py-14"
      data-design-layer="LogoWall"
    >
      <CustomersSectionBackdrop variant="logoWall" />
      <div className="cust-shell relative z-[1]">{body}</div>
    </section>
  );
}
