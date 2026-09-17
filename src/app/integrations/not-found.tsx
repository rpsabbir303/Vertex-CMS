import Link from "next/link";
import { IntegrationsExperienceFrame } from "@/components/marketing/integrations/IntegrationsExperienceFrame";
import { IntegrationsTypographyRoot } from "@/components/marketing/integrations/IntegrationsTypographyRoot";
import { INTEGRATION_DETAIL_COPY } from "@/lib/marketing/integrations/detailCopy";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { ROUTES } from "@/lib/marketing/navigation";

export default function IntegrationsNotFound() {
  return (
    <IntegrationsTypographyRoot>
      <MarketingProviders>
        <IntegrationsExperienceFrame>
          <MarketingHeader />
          <main className="w-full min-w-0 flex-1">
            <div className="site-shell section-spacing">
              <p className="int-eyebrow text-brand-orange">Integrations</p>
              <h1 className="int-display-title mt-3 text-3xl text-brand-navy">{INTEGRATION_DETAIL_COPY.notFoundTitle}</h1>
              <p className="mt-4 max-w-lg text-[15px] text-brand-muted">{INTEGRATION_DETAIL_COPY.notFoundBody}</p>
              <Link href={ROUTES.integrations} className="btn-primary mt-8 inline-flex">
                Explore Integrations
              </Link>
            </div>
          </main>
          <MarketingFooter />
        </IntegrationsExperienceFrame>
      </MarketingProviders>
    </IntegrationsTypographyRoot>
  );
}
