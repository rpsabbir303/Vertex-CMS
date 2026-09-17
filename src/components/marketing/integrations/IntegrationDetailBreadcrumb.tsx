import Link from "next/link";
import { getCategoryLabel } from "@/lib/marketing/integrations/categories";
import { integrationsDiscoverHref } from "@/lib/marketing/integrations/detailCopy";
import type { IntegrationRecord } from "@/lib/marketing/integrations/types";
import { ROUTES } from "@/lib/marketing/navigation";

type Props = {
  item: IntegrationRecord;
};

/** Integrations / Category / Name — compact on mobile. */
export function IntegrationDetailBreadcrumb({ item }: Props) {
  const category = getCategoryLabel(item.categoryId);

  return (
    <nav aria-label="Breadcrumb" className="min-w-0" data-design-layer="Breadcrumb">
      <ol className="flex min-w-0 items-center gap-1.5 overflow-hidden text-[13px] text-brand-muted sm:gap-2">
        <li className="shrink-0">
          <Link href={ROUTES.integrations} className="hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40">
            Integrations
          </Link>
        </li>
        <li className="shrink-0" aria-hidden="true">
          /
        </li>
        <li className="min-w-0 truncate">
          <Link
            href={integrationsDiscoverHref(item.categoryId)}
            className="block truncate hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
          >
            {category}
          </Link>
        </li>
        <li className="shrink-0" aria-hidden="true">
          /
        </li>
        <li className="min-w-0 truncate">
          <span className="block truncate font-medium text-brand-navy" aria-current="page">
            {item.name}
          </span>
        </li>
      </ol>
    </nav>
  );
}
