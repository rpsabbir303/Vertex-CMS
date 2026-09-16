import type { ReactNode } from "react";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { AccessSecurityEditorialPage } from "@/components/marketing/security/editorial/AccessSecurityEditorialPage";
import { AiGovernanceEditorialPage } from "@/components/marketing/security/editorial/AiGovernanceEditorialPage";
import { ComplianceEditorialPage } from "@/components/marketing/security/editorial/ComplianceEditorialPage";
import { DataProtectionEditorialPage } from "@/components/marketing/security/editorial/DataProtectionEditorialPage";
import { ReliabilityEditorialPage } from "@/components/marketing/security/editorial/ReliabilityEditorialPage";
import { SecurityEditorialContainer } from "@/components/marketing/security/editorial/SecurityEditorialFrame";
import { SecurityMasterTemplate } from "@/components/marketing/security/SecurityMasterTemplate";
import { SecurityBreadcrumbs } from "@/components/marketing/security/SecurityBreadcrumbs";
import type { SecurityPageId } from "@/lib/marketing/security/pages";

type Props = {
  pageId: SecurityPageId;
  children?: React.ReactNode;
  showContactCta?: boolean;
  /** Editorial line/container layout (Security topic pages). */
  editorial?: boolean;
};

const EDITORIAL_PAGES: Partial<Record<SecurityPageId, () => ReactNode>> = {
  "data-protection": () => <DataProtectionEditorialPage />,
  "access-security": () => <AccessSecurityEditorialPage />,
  compliance: () => <ComplianceEditorialPage />,
  "ai-governance": () => <AiGovernanceEditorialPage />,
  reliability: () => <ReliabilityEditorialPage />,
};

export function SecurityPageShell({ pageId, children, showContactCta, editorial }: Props) {
  return (
    <MarketingProviders>
      <div
        className={`flex min-h-screen flex-col overflow-x-hidden text-[#0D0D0D] ${editorial ? "bg-white" : "bg-[#FDFDFD]"}`}
      >
        <MarketingHeader />
        <main className="w-full min-w-0 flex-1" data-figma-section="security-main">
          <div className={`min-w-0 ${editorial ? "bg-white" : ""}`} data-figma-section="security-breadcrumb">
            {editorial ? (
              <SecurityEditorialContainer>
                <SecurityBreadcrumbs pageId={pageId} />
              </SecurityEditorialContainer>
            ) : (
              <SecurityBreadcrumbs pageId={pageId} />
            )}
          </div>
          {editorial && EDITORIAL_PAGES[pageId] ? (
            EDITORIAL_PAGES[pageId]!()
          ) : (
            <SecurityMasterTemplate pageId={pageId} showContactCta={showContactCta}>
              {children}
            </SecurityMasterTemplate>
          )}
        </main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}
