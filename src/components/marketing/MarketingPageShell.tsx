import { MarketingProviders } from "./MarketingProviders";
import { MarketingHeader } from "./MarketingHeader";
import { MarketingFooter } from "./MarketingFooter";
import { CookieConsent } from "./CookieConsent";
import { Breadcrumbs } from "./Breadcrumbs";
import { Reveal } from "@/components/Reveal";

type Props = {
  title?: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  children?: React.ReactNode;
  showPlaceholder?: boolean;
  /** Skip marketing hero — used by legal document pages with their own header. */
  documentMode?: boolean;
};

export function MarketingPageShell({
  title,
  description,
  breadcrumbs,
  children,
  showPlaceholder = true,
  documentMode = false,
}: Props) {
  const showHero = !documentMode && !!title && !!description;

  return (
    <MarketingProviders>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-brand-navy">
        <div className="print:hidden">
          <MarketingHeader />
        </div>
        <main className="w-full min-w-0 flex-1">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className="print:hidden">
              <Breadcrumbs items={breadcrumbs} />
            </div>
          )}
          {showHero && (
            <section className="section-spacing border-b border-brand-line/60 bg-[#FAFAF8] print:border-0 print:bg-white">
              <div className="site-shell">
                <Reveal className="max-w-3xl">
                  <h1 className="display-title text-3xl sm:text-4xl lg:text-5xl">{title}</h1>
                  <p className="body-copy mt-5">{description}</p>
                </Reveal>
              </div>
            </section>
          )}
          {children}
          {showPlaceholder && !children && (
            <section className="section-spacing print:hidden">
              <div className="site-shell">
                <Reveal>
                  <div className="rounded-lg border border-dashed border-brand-line bg-[#FAFAF8] px-6 py-12 text-center sm:px-10">
                    <p className="text-sm text-brand-muted">
                      Page UI will be implemented in the next design phase.
                    </p>
                  </div>
                </Reveal>
              </div>
            </section>
          )}
        </main>
        <div className="print:hidden">
          <MarketingFooter />
          <CookieConsent />
        </div>
      </div>
    </MarketingProviders>
  );
}

export function pageHeadingFromMeta(metaTitle: string): string {
  const part = metaTitle.split("|")[0]?.trim();
  return part ?? metaTitle;
}
