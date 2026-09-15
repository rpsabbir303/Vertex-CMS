/**
 * Cookie consent — single source of truth for the marketing site.
 * Client-side persistence only; no backend or tracking vendor integration.
 */

export const COOKIE_CONSENT_STORAGE_KEY = "vertex_cms_cookie_consent_v1";

/** @deprecated Legacy key — migrated on read */
const LEGACY_STORAGE_KEY = "vertex-cms-cookie-consent";

export const COOKIE_PREFERENCES_OPEN_EVENT = "vertex-cms-cookie-preferences-open";
export const COOKIE_CONSENT_UPDATED_EVENT = "vertex-cms-cookie-consent-updated";

export type CookieCategoryId = "necessary" | "functional" | "analytics";

export type CookiePreferenceValues = Record<CookieCategoryId, boolean>;

export type CookieConsentChoice = "accepted" | "rejected" | "custom";

export type StoredCookieConsent = {
  choice: CookieConsentChoice;
  preferences: CookiePreferenceValues;
  updatedAt: string;
};

export const COOKIE_CATEGORY_IDS: CookieCategoryId[] = ["necessary", "functional", "analytics"];

export const DEFAULT_PREFERENCES: CookiePreferenceValues = {
  necessary: true,
  functional: false,
  analytics: false,
};

export const ACCEPT_ALL_PREFERENCES: CookiePreferenceValues = {
  necessary: true,
  functional: true,
  analytics: true,
};

export const REJECT_ALL_PREFERENCES: CookiePreferenceValues = {
  necessary: true,
  functional: false,
  analytics: false,
};

function normalizePreferences(input: Partial<CookiePreferenceValues> | undefined): CookiePreferenceValues {
  return {
    necessary: true,
    functional: Boolean(input?.functional),
    analytics: Boolean(input?.analytics),
  };
}

function parseStored(raw: string): StoredCookieConsent | null {
  try {
    const parsed = JSON.parse(raw) as StoredCookieConsent;
    if (!parsed || typeof parsed !== "object") return null;
    if (!parsed.choice || !parsed.preferences) return null;
    return {
      choice: parsed.choice,
      preferences: normalizePreferences(parsed.preferences),
      updatedAt: parsed.updatedAt ?? new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

function migrateLegacy(): StoredCookieConsent | null {
  if (typeof window === "undefined") return null;
  const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
  if (!legacy) return null;

  let migrated: StoredCookieConsent;
  if (legacy === "accepted") {
    migrated = {
      choice: "accepted",
      preferences: ACCEPT_ALL_PREFERENCES,
      updatedAt: new Date().toISOString(),
    };
  } else if (legacy === "preferences") {
    migrated = {
      choice: "custom",
      preferences: DEFAULT_PREFERENCES,
      updatedAt: new Date().toISOString(),
    };
  } else {
    return null;
  }

  writeCookieConsent(migrated);
  localStorage.removeItem(LEGACY_STORAGE_KEY);
  return migrated;
}

export function readCookieConsent(): StoredCookieConsent | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
  if (raw) {
    const parsed = parseStored(raw);
    if (parsed) return parsed;
  }
  return migrateLegacy();
}

export function writeCookieConsent(consent: StoredCookieConsent): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_UPDATED_EVENT, { detail: consent }));
}

export function hasConsentDecision(): boolean {
  return readCookieConsent() !== null;
}

export function acceptAllConsent(): StoredCookieConsent {
  const consent: StoredCookieConsent = {
    choice: "accepted",
    preferences: ACCEPT_ALL_PREFERENCES,
    updatedAt: new Date().toISOString(),
  };
  writeCookieConsent(consent);
  return consent;
}

export function rejectAllConsent(): StoredCookieConsent {
  const consent: StoredCookieConsent = {
    choice: "rejected",
    preferences: REJECT_ALL_PREFERENCES,
    updatedAt: new Date().toISOString(),
  };
  writeCookieConsent(consent);
  return consent;
}

export function saveCustomConsent(preferences: CookiePreferenceValues): StoredCookieConsent {
  const consent: StoredCookieConsent = {
    choice: "custom",
    preferences: normalizePreferences(preferences),
    updatedAt: new Date().toISOString(),
  };
  writeCookieConsent(consent);
  return consent;
}

export function resetCookieConsent(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
  localStorage.removeItem(LEGACY_STORAGE_KEY);
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_UPDATED_EVENT, { detail: null }));
}

/** Opens the shared cookie preferences interface. */
export function openCookiePreferences(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(COOKIE_PREFERENCES_OPEN_EVENT));
}

export function isCookieDemoResetRequested(search: string): boolean {
  const params = new URLSearchParams(search);
  return params.get("cookie_consent") === "reset" || params.get("cookie_demo") === "reset";
}
