import { CookieConsent } from "@/components/marketing/CookieConsent";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { SecurityMasterTemplate } from "@/components/marketing/security/SecurityMasterTemplate";
import { SecurityBreadcrumbs } from "@/components/marketing/security/SecurityBreadcrumbs";
import type { SecurityPageId } from "@/lib/marketing/security/pages";

type Props = {
  pageId: SecurityPageId;
  children: React.ReactNode;
  showContactCta?: boolean;
};

export function SecurityPageShell({ pageId, children, showContactCta }: Props) {
  return (
    <MarketingProviders>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-[#FDFDFD] text-[#0D0D0D]">
        <MarketingHeader />
        <main className="w-full min-w-0 flex-1">
          <SecurityBreadcrumbs pageId={pageId} />
          <SecurityMasterTemplate pageId={pageId} showContactCta={showContactCta}>
            {children}
          </SecurityMasterTemplate>
        </main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}
