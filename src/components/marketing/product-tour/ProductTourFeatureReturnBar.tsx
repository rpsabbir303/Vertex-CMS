"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { ROUTES } from "@/lib/marketing/navigation";
import {
  isTourWorkflowId,
  productTourReturnLabel,
  productTourWorkflowHash,
  PRODUCT_TOUR_FROM_QUERY,
  PRODUCT_TOUR_WORKFLOW_QUERY,
} from "@/lib/marketing/product-tour/featureLinks";

/** Shown on feature detail pages when the visitor arrived from Product Tour. */
export function ProductTourFeatureReturnBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const from = searchParams.get("from");
  const workflowParam = searchParams.get(PRODUCT_TOUR_WORKFLOW_QUERY);

  const onFeatureDetail =
    pathname.startsWith(`${ROUTES.features}/`) && pathname !== `${ROUTES.features}/`;

  if (!onFeatureDetail || from !== PRODUCT_TOUR_FROM_QUERY || !isTourWorkflowId(workflowParam)) {
    return null;
  }

  const href = productTourWorkflowHash(workflowParam);
  const workflowLabel = productTourReturnLabel(workflowParam);

  return (
    <div
      className="border-b border-brand-line/80 bg-[#F4F8FC]"
      data-design-layer="product-tour-return"
    >
      <div className="site-shell flex flex-wrap items-center gap-x-3 gap-y-1 py-2.5 text-[13px]">
        <Link
          href={href}
          className="font-semibold text-black transition hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
        >
          ← Back to Product Tour
        </Link>
        <span className="hidden text-brand-line sm:inline" aria-hidden="true">
          |
        </span>
        <Link
          href={href}
          className="text-[#111827] transition hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
        >
          Return to {workflowLabel}
        </Link>
      </div>
    </div>
  );
}
