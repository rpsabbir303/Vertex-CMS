import Link from "next/link";

import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { ROUTES } from "@/lib/marketing/navigation";

export function TemplateUnavailablePage() {
  return (
    <div className="bg-[#F5F8FC] font-sans text-brand-navy">
      <Breadcrumbs
        items={[
          { label: "Home", href: ROUTES.home },
          { label: "Resources", href: ROUTES.resources },
          { label: "Templates", href: ROUTES.resourcesTemplates },
          { label: "Template" },
        ]}
      />
      <section className="border-b border-brand-line bg-[#FAFBFD]">
        <div className="site-shell py-14 sm:py-16">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">VertexBuild Template</p>
            <h1 className="mt-3 font-display text-[1.85rem] font-bold leading-tight text-brand-navy sm:text-[2.25rem]">
              This template is not available
            </h1>
            <p className="mt-5 border-l-2 border-brand-orange pl-4 text-[15px] leading-relaxed text-brand-muted">
              The template you requested could not be found, or it is not published yet.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={ROUTES.resourcesTemplates} className="btn-primary w-full sm:w-auto">
                Back to Templates
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
