import type { IntegrationCategory } from "./types";

/** Documented integration discovery categories (BRD-aligned). */
export const INTEGRATION_CATEGORIES: readonly IntegrationCategory[] = [
  {
    id: "all",
    label: "All Integrations",
    description: "Browse platform capabilities and documented integrations.",
  },
  {
    id: "accounting",
    label: "Accounting",
    description: "Accounting systems and optional sync capabilities documented for Vertex CMS.",
  },
  {
    id: "e-signature",
    label: "E-Signature",
    description: "E-signature connections documented for construction workflows.",
  },
  {
    id: "productivity",
    label: "Productivity",
    description: "Productivity tools used alongside Vertex CMS.",
  },
  {
    id: "platform",
    label: "Platform & API",
    description: "Public API, webhooks, marketplace, and programmatic access.",
  },
  {
    id: "other",
    label: "Other",
    description: "Additional documented integration capabilities.",
  },
] as const;

export function getCategoryLabel(id: IntegrationCategory["id"]): string {
  return INTEGRATION_CATEGORIES.find((c) => c.id === id)?.label ?? id;
}
