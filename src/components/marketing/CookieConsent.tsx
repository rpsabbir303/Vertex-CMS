"use client";

import { CookieConsentBanner } from "./CookieConsentBanner";
import { CookiePreferencesModal } from "./CookiePreferencesModal";

/** Site-wide cookie consent + shared preferences UI. */
export function CookieConsent() {
  return (
    <>
      <CookieConsentBanner />
      <CookiePreferencesModal />
    </>
  );
}
