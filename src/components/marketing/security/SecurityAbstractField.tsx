import type { SecurityPageId } from "@/lib/marketing/security/pages";
import { SecurityTrustInfrastructure } from "./SecurityTrustInfrastructure";

type Props = {
  pageId: SecurityPageId;
  variant?: "ambient" | "hero";
};

/** Page-wide ambient layer of the Security & Trust infrastructure visual. */
export function SecurityAbstractField({ pageId, variant = "ambient" }: Props) {
  if (variant === "hero") {
    return <SecurityTrustInfrastructure density="hero" pageId={pageId} />;
  }

  return <SecurityTrustInfrastructure density="ambient" pageId={pageId} />;
}
