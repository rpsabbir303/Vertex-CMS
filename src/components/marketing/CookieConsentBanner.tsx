"use client";

import Link from "next/link";
import { useCookieConsent } from "./CookieConsentProvider";
import { useMarketing } from "./MarketingProviders";
import { ROUTES } from "@/lib/marketing/navigation";

export function CookieConsentBanner() {
  const { t } = useMarketing();
  const { bannerVisible, acceptAll, rejectAll, openPreferences } = useCookieConsent();

  if (!bannerVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] border-t border-brand-line bg-white/95 p-4 shadow-[0_-6px_24px_rgba(6,21,37,0.08)] backdrop-blur-sm print:hidden sm:p-5"
      role="region"
      aria-label={t.cookie.bannerLabel}
    >
      <div className="site-shell flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="min-w-0">
          <p className="text-sm leading-relaxed text-brand-muted">{t.cookie.message}</p>
          <p className="mt-2 text-[12px] text-brand-muted">
            <Link
              href={ROUTES.legalPrivacy}
              className="font-medium text-brand-navy underline-offset-2 hover:text-brand-orange hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              {t.legal.nav.privacy}
            </Link>
            <span className="mx-2 text-brand-line" aria-hidden="true">
              ·
            </span>
            <Link
              href={ROUTES.legalCookies}
              className="font-medium text-brand-navy underline-offset-2 hover:text-brand-orange hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              {t.legal.nav.cookies}
            </Link>
          </p>
        </div>

        <div className="flex w-full shrink-0 flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end lg:w-auto">
          <button
            type="button"
            className="btn-secondary px-4 py-2.5 text-[12px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            onClick={rejectAll}
          >
            {t.cookie.rejectAll}
          </button>
          <button
            type="button"
            className="btn-secondary px-4 py-2.5 text-[12px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            onClick={openPreferences}
          >
            {t.cookie.manage}
          </button>
          <button
            type="button"
            className="btn-primary px-4 py-2.5 text-[12px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            onClick={acceptAll}
          >
            {t.cookie.acceptAll}
          </button>
        </div>
      </div>
    </div>
  );
}
