import type { SecurityPageId } from "@/lib/marketing/security/pages";
import { SecurityTrustInfrastructure } from "./SecurityTrustInfrastructure";

/** Contained hero-side architecture — sits beside copy, not below it. */
export function SecurityHeroVisual({ pageId }: { pageId: SecurityPageId }) {
  return (
    <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-none" aria-hidden="true">
      <SecurityTrustInfrastructure density="hero" pageId={pageId} className="relative w-full" />
    </div>
  );
}
