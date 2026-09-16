import type { SecurityPageId } from "@/lib/marketing/security/pages";
import { SecurityCanvas } from "./SecurityCanvas";
import { SecurityContactCTA } from "./SecurityContactCTA";
import { SecurityHero } from "./SecurityHero";
import { SecurityRelatedPages } from "./SecurityRelatedPages";
import { SecurityTopicRail } from "./SecurityTopicRail";

type Props = {
  pageId: SecurityPageId;
  children: React.ReactNode;
  showContactCta?: boolean;
};

export function SecurityMasterTemplate({ pageId, children, showContactCta = true }: Props) {
  return (
    <SecurityCanvas>
      <SecurityHero pageId={pageId} />
      <SecurityTopicRail current={pageId} />
      {children}
      <SecurityRelatedPages current={pageId} />
      {showContactCta ? <SecurityContactCTA compact={pageId === "contact"} /> : null}
    </SecurityCanvas>
  );
}
