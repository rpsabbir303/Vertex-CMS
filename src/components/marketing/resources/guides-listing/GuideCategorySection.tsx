import { guideListingSectionAnchorId, type GuideListingSection } from "@/lib/marketing/resources/guide";
import type { ResourceTopic } from "@/lib/marketing/resources/types";

import {
  GuideComplianceCategoryAbstract,
  GuideFinancialsCategoryAbstract,
  GuideGettingStartedAbstract,
} from "./GuideSectionAbstracts";
import { GuideResourceRow } from "./GuideResourceRow";

type Props = {
  section: GuideListingSection;
};

function SectionAbstract({ topic }: { topic: ResourceTopic }) {
  if (topic === "getting-started") {
    return <GuideGettingStartedAbstract className="mx-auto w-full max-w-[15rem] lg:max-w-none" />;
  }
  if (topic === "financials") {
    return <GuideFinancialsCategoryAbstract className="mx-auto w-full max-w-[15rem] lg:max-w-none" />;
  }
  if (topic === "compliance") {
    return <GuideComplianceCategoryAbstract className="mx-auto w-full max-w-[15rem] lg:max-w-none" />;
  }
  return null;
}

function SectionIntro({ section, headingId }: { section: GuideListingSection; headingId: string }) {
  return (
    <header className="min-w-0" data-design-layer="content">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-orange">{section.eyebrow}</p>
      <h2
        id={headingId}
        className="mt-2 max-w-2xl font-display text-[1.45rem] font-bold leading-[1.15] tracking-tight text-brand-navy sm:text-[1.65rem] lg:text-[1.75rem]"
      >
        {section.heading}
      </h2>
      <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-brand-muted sm:text-[15px]">{section.supporting}</p>
    </header>
  );
}

function GuideList({ section }: { section: GuideListingSection }) {
  const single = section.guides.length === 1;
  const showCategory = section.topic === "getting-started";

  if (single) {
    return (
      <div className="mt-8 lg:mt-0">
        <GuideResourceRow guide={section.guides[0]!} index={1} variant="spotlight" showCategory={showCategory} />
      </div>
    );
  }

  return (
    <ul className="mt-8 divide-y divide-brand-line border border-brand-line bg-white lg:mt-6" data-design-layer="content">
      {section.guides.map((guide, i) => (
        <li key={guide.id}>
          <GuideResourceRow guide={guide} index={i + 1} variant="row" showCategory={showCategory} />
        </li>
      ))}
    </ul>
  );
}

/** Category block on the Guides listing — layout varies by topic for editorial rhythm. */
export function GuideCategorySection({ section }: Props) {
  const bg =
    section.topic === "getting-started"
      ? "bg-white/70"
      : section.topic === "financials"
        ? "bg-[#EEF4FA]/50"
        : "bg-[#F5F8FC]";

  const visualLeft = section.layout === "visual-text-right";
  const sectionAnchor = guideListingSectionAnchorId(section.topic) ?? undefined;
  const headingId = sectionAnchor ? `${sectionAnchor}-heading` : `guide-section-${section.id}-heading`;

  return (
    <section
      id={sectionAnchor}
      className={`relative scroll-mt-28 border-b border-brand-line/60 ${bg}`}
      aria-labelledby={headingId}
      data-design-layer="GuideCategorySection"
    >
      <div className="resource-detail-shell relative z-[1] py-10 sm:py-12 lg:py-14">
        {visualLeft ? (
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:gap-12 xl:gap-14">
            <div className="hidden lg:block">
              <SectionAbstract topic={section.topic} />
            </div>
            <div className="min-w-0">
              <SectionIntro section={section} headingId={headingId} />
              <div className="mt-6 lg:hidden">
                <SectionAbstract topic={section.topic} />
              </div>
              <GuideList section={section} />
            </div>
          </div>
        ) : (
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.32fr)] lg:gap-12 xl:gap-14">
            <div className="min-w-0">
              <SectionIntro section={section} headingId={headingId} />
              <GuideList section={section} />
            </div>
            <div className="hidden lg:flex lg:justify-end lg:pt-8">
              <SectionAbstract topic={section.topic} />
            </div>
            <div className="lg:hidden">
              <SectionAbstract topic={section.topic} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
