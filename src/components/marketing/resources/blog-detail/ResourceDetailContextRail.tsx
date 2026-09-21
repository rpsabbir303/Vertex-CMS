import Link from "next/link";

import { ArrowRight } from "@/components/Icons";
import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import { RESOURCES_HUB } from "@/lib/marketing/resources/content";

import { ResourceMapNav, type LibraryLinkItem } from "../resource-detail/ResourceMapNav";

export type ResourceMapItem = {
  id: string;
  label: string;
  index: number;
};

type Props = {
  mapItems: ResourceMapItem[];
  relatedTopics: string[];
  className?: string;
  /** Defaults to "Resource map" (blog). Guides use "On this guide". */
  mapTitle?: string;
  mapAriaLabel?: string;
  scrollSpy?: boolean;
  mapVariant?: "simple" | "guide";
  libraryTitle?: string;
  libraryItems?: LibraryLinkItem[];
};

/**
 * Resource Detail context rail — reusable across Blog / Guide / Webinar / Template.
 * Resource Map + related topics + compact product CTA.
 */
export function ResourceDetailContextRail({
  mapItems,
  relatedTopics,
  className = "",
  mapTitle = "Resource map",
  mapAriaLabel = "Resource map",
  scrollSpy = false,
  mapVariant = "simple",
  libraryTitle,
  libraryItems,
}: Props) {
  return (
    <aside className={`hidden min-w-0 lg:block ${className}`} data-design-layer="ResourceDetailContextRail">
      <div className="sticky top-24 space-y-5">
        <ResourceMapNav
          mapItems={mapItems}
          mapTitle={mapTitle}
          mapAriaLabel={mapAriaLabel}
          variant={mapVariant}
          scrollSpy={scrollSpy}
          libraryTitle={libraryTitle}
          libraryItems={libraryItems}
        />

        {/* Related topics */}
        {relatedTopics.length > 0 ? (
          <div className="border border-brand-line bg-[#FAFBFD] px-4 py-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">Related topics</p>
            <ul className="mt-3 space-y-2">
              {relatedTopics.map((topic) => (
                <li key={topic} className="flex items-center gap-2 text-[12.5px] text-brand-navy/85">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange/80" aria-hidden="true" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* Compact product CTA */}
        <div className="border border-brand-navy/20 bg-brand-navy px-4 py-4 text-white">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">See it in VertexBuild</p>
          <p className="mt-2 text-[13px] leading-snug text-slate-200">
            Connect field activity, project records, and financial visibility on one operating record.
          </p>
          <Link href={CTAS.trial.href} className="btn-primary mt-3 inline-flex w-full justify-center text-[12px]">
            {CTAS.trial.label}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href={ROUTES.productTour}
            className="mt-2 inline-flex w-full items-center justify-center text-[12px] font-semibold text-slate-300 transition hover:text-white"
          >
            Product Tour
          </Link>
        </div>

        <p className="sr-only">
          Next steps: {RESOURCES_HUB.cta.primary.label}, {RESOURCES_HUB.cta.secondary.label}.
        </p>
      </div>
    </aside>
  );
}

/** Contextual topic chips for the field→financial article family — labels only, no invented claims. */
export function relatedTopicsForArticle(topic: string): string[] {
  if (topic === "field-operations") {
    return ["Field Operations", "Daily Logs", "Job Cost", "Financial Visibility"];
  }
  if (topic === "financials") {
    return ["Job Cost", "Financial Visibility", "WIP Reporting", "Project Record"];
  }
  if (topic === "project-management") {
    return ["Project Record", "Schedule", "Documents", "Field Coordination"];
  }
  return ["Project Record", "Field Operations", "Financial Visibility"];
}
