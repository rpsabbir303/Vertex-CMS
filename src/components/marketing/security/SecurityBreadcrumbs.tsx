"use client";

import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import { securityBreadcrumbs, type SecurityPageId } from "@/lib/marketing/security/pages";

export function SecurityBreadcrumbs({ pageId }: { pageId: SecurityPageId }) {
  const { t } = useMarketing();
  const labels = t.security.pages;
  const navLabels = {
    hub: labels.hub.nav,
    "data-protection": labels["data-protection"].nav,
    "access-security": labels["access-security"].nav,
    compliance: labels.compliance.nav,
    "ai-governance": labels["ai-governance"].nav,
    reliability: labels.reliability.nav,
    contact: labels.contact.nav,
  };
  return <Breadcrumbs items={securityBreadcrumbs(pageId, navLabels)} />;
}
