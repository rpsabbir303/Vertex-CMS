import Link from "next/link";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import { ROUTES } from "@/lib/marketing/navigation";

export const metadata = {
  title: "Page Not Found | VertexBuild",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <MarketingProviders>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-brand-navy">
        <MarketingHeader />
        <main className="flex w-full flex-1 items-center">
          <div className="site-shell py-20 text-center">
            <h1 className="display-title text-3xl sm:text-4xl">Page Not Found</h1>
            <p className="body-copy mx-auto mt-4 max-w-lg">
              The page you&apos;re looking for doesn&apos;t exist.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href={ROUTES.home} className="btn-primary">
                Back to Home
              </Link>
              <Link
                href={ROUTES.features}
                className="inline-flex items-center justify-center rounded-sm border border-brand-line px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-brand-navy transition hover:border-brand-navy"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}
