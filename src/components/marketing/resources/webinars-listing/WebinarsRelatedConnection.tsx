import Link from "next/link";

import { ArrowRight } from "@/components/Icons";
import { ROUTES } from "@/lib/marketing/navigation";
import { RESOURCE_TYPE_LABELS } from "@/lib/marketing/resources/content";
import { WEBINAR_LISTING_PAGE_ANCHORS } from "@/lib/marketing/resources/webinar";

type ConnectionItem =
  | { id: string; label: string; href: string; current?: false }
  | { id: string; label: string; href: string; current: true };

const CONNECTIONS: ConnectionItem[] = [
  { id: "blog", label: RESOURCE_TYPE_LABELS.blog, href: ROUTES.resourcesBlog },
  { id: "guide", label: RESOURCE_TYPE_LABELS.guide, href: ROUTES.resourcesGuides },
  { id: "template", label: RESOURCE_TYPE_LABELS.template, href: ROUTES.resourcesTemplates },
  { id: "webinar", label: RESOURCE_TYPE_LABELS.webinar, href: ROUTES.resourcesWebinars, current: true },
];

export function WebinarsRelatedConnection() {
  return (
    <section
      id={WEBINAR_LISTING_PAGE_ANCHORS.connectedResources}
      className="relative scroll-mt-28 border-b border-brand-line/60 bg-white"
      aria-labelledby="webinars-connected-heading"
    >
      <div className="resource-detail-shell relative z-[1] py-10 sm:py-11 lg:py-12">
        <div data-design-layer="content">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Connected resources</p>
          <h2 id="webinars-connected-heading" className="mt-1.5 font-display text-[1.4rem] font-bold tracking-tight text-brand-navy sm:text-[1.6rem]">
            Continue exploring VertexBuild resources
          </h2>
          <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-[#111827]">
            Webinars are one part of the Resources system — move between editorial, guides, templates, and sessions.
          </p>

          <nav className="mt-8 border-y border-brand-line" aria-label="Resource types">
            <ul className="flex flex-col divide-y divide-brand-line sm:flex-row sm:divide-x sm:divide-y-0">
              {CONNECTIONS.map((item) => (
                <li key={item.id} className="min-w-0 flex-1">
                  {item.current ? (
                    <span
                      className="flex h-full flex-col gap-1 border-l-2 border-brand-orange bg-white px-4 py-4 sm:px-5"
                      aria-current="page"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-orange">{item.label}</span>
                      <span className="text-[12px] font-medium text-[#111827]/60">Current section</span>
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="group flex h-full flex-col justify-between gap-3 px-4 py-4 transition hover:bg-[#F7FAFD] sm:px-5 sm:py-5"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#111827]/55 group-hover:text-brand-navy">
                        {item.label}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-brand-navy group-hover:text-brand-orange">
                        Explore
                        <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <p className="mt-6">
            <Link
              href={ROUTES.resources}
              className="text-[13px] font-semibold text-brand-navy hover:text-brand-orange hover:underline"
            >
              ← Back to Resource Hub
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
