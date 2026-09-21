import Link from "next/link";

import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { ROUTES } from "@/lib/marketing/navigation";

export function HelpDocUnavailablePage() {
  return (
    <div className="resource-detail-shell py-16 sm:py-20">
      <Breadcrumbs
        items={[
          { label: "Home", href: ROUTES.home },
          { label: "Resources", href: ROUTES.resources },
          { label: "Help Center", href: ROUTES.resourcesHelp },
          { label: "Unavailable" },
        ]}
      />
      <h1 className="mt-8 font-display text-2xl font-bold text-brand-navy">Documentation unavailable</h1>
      <p className="mt-3 max-w-lg text-[15px] text-brand-muted">
        This Help Center entry is not available on the marketing site preview.
      </p>
      <Link href={ROUTES.resourcesHelp} className="btn-primary mt-8 inline-flex">
        Back to Help Center
      </Link>
    </div>
  );
}
