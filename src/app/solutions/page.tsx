import { MarketingPageShell, pageHeadingFromMeta } from "@/components/marketing/MarketingPageShell";
import { MARKETING_PAGES, marketingMetadata } from "@/lib/marketing/pages";

export const metadata = marketingMetadata("solutions");

const ANCHORS = [
  "general-contractors",
  "subcontractors",
  "commercial",
  "residential",
  "civil",
] as const;

export default function SolutionsPage() {
  const config = MARKETING_PAGES.solutions;
  return (
    <MarketingPageShell
      title={pageHeadingFromMeta(config.title)}
      description={config.description}
      breadcrumbs={config.breadcrumbs}
      showPlaceholder={false}
    >
      <section className="section-spacing">
        <div className="site-shell space-y-6">
          {ANCHORS.map((id) => (
            <div
              key={id}
              id={id}
              className="scroll-mt-24 rounded-lg border border-dashed border-brand-line bg-[#FAFAF8] px-6 py-10"
            >
              <h2 className="font-display text-lg font-bold capitalize text-brand-navy">
                {id.replace(/-/g, " ")}
              </h2>
              <p className="mt-2 text-sm text-brand-muted">Solution content will be designed next.</p>
            </div>
          ))}
        </div>
      </section>
    </MarketingPageShell>
  );
}
