import Link from "next/link";

import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { ROUTES } from "@/lib/marketing/navigation";

/** Shown when a guide slug is missing or not published. */
export function GuideUnavailablePage() {
  return (
    <div className="bg-[#F5F8FC] font-sans text-brand-navy">
      <Breadcrumbs
        items={[
          { label: "Home", href: ROUTES.home },
          { label: "Resources", href: ROUTES.resources },
          { label: "Guides", href: ROUTES.resourcesGuides },
          { label: "Guide" },
        ]}
      />

      <section className="border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell py-14 sm:py-16 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">VertexBuild Guide</p>
            <h1 className="mt-3 font-display text-[1.85rem] font-bold leading-tight tracking-tight text-brand-navy sm:text-[2.25rem]">
              This guide is not available
            </h1>
            <p className="mt-5 border-l-2 border-brand-orange pl-4 text-[15px] leading-relaxed text-brand-muted">
              The guide you requested could not be found, or it is not published for public reading yet.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href={ROUTES.resourcesGuides} className="btn-primary w-full sm:w-auto">
                Back to Guides
              </Link>
              <Link href={ROUTES.resources} className="btn-secondary w-full sm:w-auto">
                Resource Hub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
