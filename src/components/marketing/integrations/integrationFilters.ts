import type { IntegrationCategoryId, IntegrationRecord } from "@/lib/marketing/integrations/types";

export function filterIntegrations(
  items: IntegrationRecord[],
  categoryId: IntegrationCategoryId | "all",
  query: string,
): IntegrationRecord[] {
  const q = query.trim().toLowerCase();
  return items.filter((item) => {
    const categoryMatch = categoryId === "all" || item.categoryId === categoryId;
    if (!categoryMatch) return false;
    if (!q) return true;
    return (
      item.name.toLowerCase().includes(q) ||
      item.shortDescription.toLowerCase().includes(q)
    );
  });
}

export function splitByAvailability(items: IntegrationRecord[]) {
  return {
    available: items.filter((i) => i.availability === "AVAILABLE"),
    comingSoon: items.filter((i) => i.availability === "COMING_SOON"),
  };
}
