import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { CUSTOMERS_LIMITED_NOTES, CUSTOMERS_PAGE, CUSTOMERS_ROUTES } from "@/lib/marketing/customers/content";
import { ROUTES } from "@/lib/marketing/navigation";

type Props = {
  title: string;
  description: string;
  breadcrumbLabel: string;
};

/** Customer sub-routes until dedicated CMS tasks ship full listings. */
export function CustomersSubpagePreLaunch({ title, description, breadcrumbLabel }: Props) {
  const { finalCta } = CUSTOMERS_PAGE;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: ROUTES.home },
          { label: "Customers", href: CUSTOMERS_ROUTES.landing },
          { label: breadcrumbLabel },
        ]}
      />
      <section className="border-b border-brand-line bg-white py-14 sm:py-16">
        <div className="cust-shell max-w-2xl">
          <p className="cust-eyebrow">Customers</p>
          <h1 className="cust-display mt-4 text-3xl sm:text-4xl">{title}</h1>
          <p className="mt-4 text-[16px] leading-relaxed text-brand-muted">{description}</p>
          <p className="mt-6 text-[15px] leading-relaxed text-brand-muted">{CUSTOMERS_LIMITED_NOTES.closing}</p>
          <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <Link href={finalCta.primary.href} className="btn-primary w-full sm:w-auto">
              {finalCta.primary.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={finalCta.secondary.href} className="btn-secondary w-full sm:w-auto">
              {finalCta.secondary.label}
            </Link>
            <Link href={finalCta.tertiary.href} className="btn-secondary w-full sm:w-auto">
              {finalCta.tertiary.label}
            </Link>
          </div>
          <Link
            href={CUSTOMERS_ROUTES.landing}
            className="mt-6 inline-flex text-[13px] font-semibold text-brand-blue hover:underline"
          >
            Back to Customers
          </Link>
        </div>
      </section>
    </>
  );
}
