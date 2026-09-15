"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  COOKIE_CONSENT_UPDATED_EVENT,
  COOKIE_PREFERENCES_OPEN_EVENT,
  acceptAllConsent,
  hasConsentDecision,
  isCookieDemoResetRequested,
  readCookieConsent,
  rejectAllConsent,
  resetCookieConsent,
  DEFAULT_PREFERENCES,
  saveCustomConsent,
  type CookiePreferenceValues,
  type StoredCookieConsent,
} from "@/lib/marketing/cookieConsent";

export type CookieSaveStatus = "idle" | "saving" | "saved" | "error";

type CookieConsentContextValue = {
  consent: StoredCookieConsent | null;
  hasDecision: boolean;
  bannerVisible: boolean;
  preferencesOpen: boolean;
  draftPreferences: CookiePreferenceValues;
  saveStatus: CookieSaveStatus;
  acceptAll: () => void;
  rejectAll: () => void;
  openPreferences: () => void;
  closePreferences: () => void;
  setDraftPreference: (id: keyof CookiePreferenceValues, enabled: boolean) => void;
  savePreferences: () => Promise<void>;
  resetConsentDemo: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

function preferencesFromConsent(consent: StoredCookieConsent | null): CookiePreferenceValues {
  return consent?.preferences ?? { ...DEFAULT_PREFERENCES };
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<StoredCookieConsent | null>(null);
  const [hasDecision, setHasDecision] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [draftPreferences, setDraftPreferences] = useState<CookiePreferenceValues>(DEFAULT_PREFERENCES);
  const [saveStatus, setSaveStatus] = useState<CookieSaveStatus>("idle");
  const [hydrated, setHydrated] = useState(false);

  const syncFromStorage = useCallback(() => {
    const stored = readCookieConsent();
    setConsent(stored);
    const decided = stored !== null;
    setHasDecision(decided);
    setBannerVisible(!decided);
    setDraftPreferences(preferencesFromConsent(stored));
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (isCookieDemoResetRequested(window.location.search)) {
      resetCookieConsent();
      const url = new URL(window.location.href);
      url.searchParams.delete("cookie_consent");
      url.searchParams.delete("cookie_demo");
      window.history.replaceState({}, "", url.pathname + url.search + url.hash);
    }

    syncFromStorage();
    setHydrated(true);

    function onConsentUpdated() {
      syncFromStorage();
    }

    function onOpenPreferences() {
      setDraftPreferences(preferencesFromConsent(readCookieConsent()));
      setSaveStatus("idle");
      setPreferencesOpen(true);
      setBannerVisible(false);
    }

    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, onConsentUpdated);
    window.addEventListener(COOKIE_PREFERENCES_OPEN_EVENT, onOpenPreferences);
    return () => {
      window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, onConsentUpdated);
      window.removeEventListener(COOKIE_PREFERENCES_OPEN_EVENT, onOpenPreferences);
    };
  }, [syncFromStorage]);

  const acceptAll = useCallback(() => {
    const next = acceptAllConsent();
    setConsent(next);
    setHasDecision(true);
    setBannerVisible(false);
    setPreferencesOpen(false);
    setSaveStatus("idle");
  }, []);

  const rejectAll = useCallback(() => {
    const next = rejectAllConsent();
    setConsent(next);
    setHasDecision(true);
    setBannerVisible(false);
    setPreferencesOpen(false);
    setSaveStatus("idle");
  }, []);

  const openPreferences = useCallback(() => {
    setDraftPreferences(preferencesFromConsent(readCookieConsent()));
    setSaveStatus("idle");
    setPreferencesOpen(true);
    setBannerVisible(false);
  }, []);

  const closePreferences = useCallback(() => {
    setPreferencesOpen(false);
    setSaveStatus("idle");
    if (!hasConsentDecision()) {
      setBannerVisible(true);
    }
  }, []);

  const setDraftPreference = useCallback((id: keyof CookiePreferenceValues, enabled: boolean) => {
    if (id === "necessary") return;
    setDraftPreferences((prev) => ({ ...prev, [id]: enabled }));
    setSaveStatus("idle");
  }, []);

  const savePreferences = useCallback(async () => {
    setSaveStatus("saving");
    try {
      await new Promise((resolve) => setTimeout(resolve, 350));
      const next = saveCustomConsent(draftPreferences);
      setConsent(next);
      setHasDecision(true);
      setSaveStatus("saved");
      window.setTimeout(() => {
        setPreferencesOpen(false);
        setBannerVisible(false);
        setSaveStatus("idle");
      }, 900);
    } catch {
      setSaveStatus("error");
    }
  }, [draftPreferences]);

  const resetConsentDemo = useCallback(() => {
    resetCookieConsent();
    setConsent(null);
    setHasDecision(false);
    setBannerVisible(true);
    setPreferencesOpen(false);
    setDraftPreferences({ ...DEFAULT_PREFERENCES });
    setSaveStatus("idle");
  }, []);

  const value = useMemo<CookieConsentContextValue>(
    () => ({
      consent,
      hasDecision,
      bannerVisible: hydrated && bannerVisible,
      preferencesOpen: hydrated && preferencesOpen,
      draftPreferences,
      saveStatus,
      acceptAll,
      rejectAll,
      openPreferences,
      closePreferences,
      setDraftPreference,
      savePreferences,
      resetConsentDemo,
    }),
    [
      acceptAll,
      bannerVisible,
      closePreferences,
      consent,
      draftPreferences,
      hasDecision,
      hydrated,
      openPreferences,
      preferencesOpen,
      rejectAll,
      resetConsentDemo,
      savePreferences,
      saveStatus,
      setDraftPreference,
    ]
  );

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    if (process.env.NODE_ENV === "development") {
      return {
        consent: null,
        hasDecision: false,
        bannerVisible: false,
        preferencesOpen: false,
        draftPreferences: { ...DEFAULT_PREFERENCES },
        saveStatus: "idle" as CookieSaveStatus,
        acceptAll: () => {},
        rejectAll: () => {},
        openPreferences: () => {},
        closePreferences: () => {},
        setDraftPreference: () => {},
        savePreferences: async () => {},
        resetConsentDemo: () => {},
      };
    }
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return ctx;
}
