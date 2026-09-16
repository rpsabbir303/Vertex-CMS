import { ROUTES } from "@/lib/marketing/navigation";
import { SECURITY_ROUTES } from "./content";

export type SecurityPageId =
  | "hub"
  | "data-protection"
  | "access-security"
  | "compliance"
  | "ai-governance"
  | "reliability"
  | "contact";

export type SecurityNavItem = {
  id: SecurityPageId;
  href: string;
  labelKey: SecurityPageId;
};

/** Index numbers for Security & Trust topic sub-pages (hub is the parent landing page, not listed). */
export const SECURITY_NAV_INDEX: Record<SecurityPageId, string> = {
  hub: "",
  "data-protection": "01",
  "access-security": "02",
  compliance: "03",
  "ai-governance": "04",
  reliability: "05",
  contact: "",
};

/** Topic sub-pages only — excludes Security & Trust hub and contact. */
export const SECURITY_NAV_ITEMS: SecurityNavItem[] = [
  { id: "data-protection", href: SECURITY_ROUTES.dataProtection, labelKey: "data-protection" },
  { id: "access-security", href: SECURITY_ROUTES.accessSecurity, labelKey: "access-security" },
  { id: "compliance", href: SECURITY_ROUTES.compliance, labelKey: "compliance" },
  { id: "ai-governance", href: SECURITY_ROUTES.aiGovernance, labelKey: "ai-governance" },
  { id: "reliability", href: SECURITY_ROUTES.reliability, labelKey: "reliability" },
];

export function securityBreadcrumbLabel(pageId: SecurityPageId, labels: Record<SecurityPageId, string>) {
  if (pageId === "hub") return null;
  return labels[pageId];
}

export function securityBreadcrumbs(pageId: SecurityPageId, labels: Record<SecurityPageId, string>) {
  const items: { label: string; href?: string }[] = [
    { label: "Home", href: ROUTES.home },
    { label: labels.hub, href: pageId === "hub" ? undefined : SECURITY_ROUTES.home },
  ];
  const current = securityBreadcrumbLabel(pageId, labels);
  if (current) items.push({ label: current });
  return items;
}

/** Subtle hero diagram emphasis — same visual system, different highlighted node. */
export const SECURITY_VISUAL_EMPHASIS: Record<
  SecurityPageId,
  { label: string; cx: number; cy: number }
> = {
  hub: { label: "TRUST", cx: 560, cy: 230 },
  "data-protection": { label: "DATA", cx: 160, cy: 132 },
  "access-security": { label: "ACCESS", cx: 820, cy: 88 },
  compliance: { label: "GOVERN", cx: 896, cy: 236 },
  "ai-governance": { label: "AI", cx: 456, cy: 56 },
  reliability: { label: "RECOVER", cx: 174, cy: 352 },
  contact: { label: "TRUST", cx: 560, cy: 230 },
};
