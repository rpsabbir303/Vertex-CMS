import { MarketingPageShell, pageHeadingFromMeta } from "@/components/marketing/MarketingPageShell";
import { MARKETING_PAGES, marketingMetadata } from "@/lib/marketing/pages";

export const metadata = marketingMetadata("customers");

export default function CustomersPage() {
  const config = MARKETING_PAGES.customers;
  return (
    <MarketingPageShell
      title={pageHeadingFromMeta(config.title)}
      description={config.description}
      breadcrumbs={config.breadcrumbs}
      showPlaceholder={false}
    >
      <section className="section-spacing">
        <div className="site-shell space-y-6">
          <div
            id="case-studies"
            className="scroll-mt-24 rounded-lg border border-dashed border-brand-line bg-[#FAFAF8] px-6 py-10"
          >
            <h2 className="font-display text-lg font-bold text-brand-navy">Case Studies</h2>
            <p className="mt-2 text-sm text-brand-muted">Customer case studies will be published when approved.</p>
          </div>
          <div
            id="testimonials"
            className="scroll-mt-24 rounded-lg border border-dashed border-brand-line bg-[#FAFAF8] px-6 py-10"
          >
            <h2 className="font-display text-lg font-bold text-brand-navy">Testimonials</h2>
            <p className="mt-2 text-sm text-brand-muted">Customer testimonials will be published when approved.</p>
          </div>
        </div>
      </section>
    </MarketingPageShell>
  );
}
