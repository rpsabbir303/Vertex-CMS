import type { WebinarListingGroup } from "@/lib/marketing/resources/webinar";
import { WEBINAR_LISTING_PAGE_ANCHORS } from "@/lib/marketing/resources/webinar";

import { WebinarKnowledgeHubAbstract } from "./WebinarSectionAbstracts";
import { WebinarResourceRow } from "./WebinarResourceRow";

type Props = { groups: WebinarListingGroup[] };

export function WebinarsExploreSection({ groups }: Props) {
  if (groups.length === 0) return null;

  let rowCounter = 0;

  return (
    <section
      id={WEBINAR_LISTING_PAGE_ANCHORS.explore}
      className="relative scroll-mt-28 border-b border-brand-line/60 bg-[#F5F8FC]/80"
      aria-labelledby="webinars-explore-heading"
    >
      <div className="resource-detail-shell relative z-[1] py-10 sm:py-11 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(8rem,10rem)] lg:items-start">
          <header className="min-w-0" data-design-layer="content">
            <h2 id="webinars-explore-heading" className="font-display text-[1.5rem] font-bold tracking-tight text-brand-navy sm:text-[1.7rem]">
              Explore Webinars
            </h2>
            <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-brand-muted sm:text-[15px]">
              Practical sessions for construction teams navigating project delivery, field operations, financial workflows,
              and connected operations.
            </p>
          </header>
          <WebinarKnowledgeHubAbstract className="mx-auto hidden opacity-90 lg:mx-0 lg:mt-1 lg:block" />
        </div>

        <div className="mt-8 space-y-10 sm:mt-10">
          {groups.map((group) => (
            <div key={group.anchorId} id={group.anchorId} className="scroll-mt-28">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-orange">{group.eyebrow}</p>
              <ul className="mt-4 divide-y divide-brand-line border border-brand-line bg-white">
                {group.webinars.map((webinar) => {
                  rowCounter += 1;
                  return (
                    <li key={webinar.id}>
                      <WebinarResourceRow webinar={webinar} index={rowCounter} />
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
