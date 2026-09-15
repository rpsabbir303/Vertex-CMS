"use client";

import { useCookieConsent } from "@/components/marketing/CookieConsentProvider";
import { useLegalUi } from "./useLegalUi";
import { useMarketing } from "@/components/marketing/MarketingProviders";

export function LegalCookiePreferences() {
  const { ui } = useLegalUi();
  const { t } = useMarketing();
  const { openPreferences, resetConsentDemo } = useCookieConsent();

  return (
    <section
      className="mt-10 border-t border-brand-line pt-8 print:hidden"
      aria-labelledby="cookie-preferences-heading"
    >
      <h2
        id="cookie-preferences-heading"
        className="font-display text-lg font-bold tracking-tight text-brand-navy sm:text-xl"
      >
        {ui.cookiePreferencesHeading}
      </h2>
      <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-brand-muted">{ui.cookiePreferencesBody}</p>
      <button
        type="button"
        className="btn-secondary mt-5 px-5 py-3.5 text-[13px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
        onClick={openPreferences}
      >
        {t.cookie.manage}
      </button>

      <div className="mt-8 rounded-lg border border-dashed border-brand-line bg-[#FAFBFD] px-4 py-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
          {t.cookie.demoHeading}
        </p>
        <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{t.cookie.demoHelp}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            className="rounded-sm border border-brand-line bg-white px-3 py-2 text-[12px] font-semibold text-brand-navy hover:bg-brand-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            onClick={resetConsentDemo}
          >
            {t.cookie.demoReset}
          </button>
        </div>
        <p className="mt-3 text-[12px] text-brand-muted">
          URL: <code className="rounded bg-white px-1.5 py-0.5 text-[11px]">?cookie_consent=reset</code>
        </p>
      </div>
    </section>
  );
}
