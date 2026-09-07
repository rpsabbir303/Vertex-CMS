"use client";

import type { AuthPreviewSession, OnboardingStepId } from "./types";

const KEY = "vertex_cms_auth_preview_session";
const EMAIL_REGISTRY_KEY = "vertex_cms_preview_email_registry";

export function readAuthSession(): AuthPreviewSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return null;
    return normalizeSession(JSON.parse(raw) as Partial<AuthPreviewSession>);
  } catch {
    return null;
  }
}

export function writeAuthSession(session: AuthPreviewSession): void {
  sessionStorage.setItem(KEY, JSON.stringify(session));
}

export function clearAuthSession(): void {
  sessionStorage.removeItem(KEY);
}

export function isEmailRegistered(email: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = sessionStorage.getItem(EMAIL_REGISTRY_KEY);
    const list = raw ? (JSON.parse(raw) as string[]) : [];
    return list.includes(email.trim().toLowerCase());
  } catch {
    return false;
  }
}

export function registerEmail(email: string): void {
  if (typeof window === "undefined") return;
  const key = email.trim().toLowerCase();
  try {
    const raw = sessionStorage.getItem(EMAIL_REGISTRY_KEY);
    const list = raw ? (JSON.parse(raw) as string[]) : [];
    if (!list.includes(key)) {
      list.push(key);
      sessionStorage.setItem(EMAIL_REGISTRY_KEY, JSON.stringify(list));
    }
  } catch {
    sessionStorage.setItem(EMAIL_REGISTRY_KEY, JSON.stringify([key]));
  }
}

export function updateOnboarding(
  step: OnboardingStepId,
  value: boolean
): AuthPreviewSession | null {
  const session = readAuthSession();
  if (!session) return null;
  const next: AuthPreviewSession = {
    ...session,
    onboarding: { ...session.onboarding },
  };
  if (step === "company") next.onboarding.companyComplete = value;
  if (step === "project") next.onboarding.projectComplete = value;
  if (step === "invite") next.onboarding.inviteComplete = value;
  if (step === "connect") {
    next.onboarding.connectSkipped = value;
    if (value) next.onboarding.financeStatus = "not_connected";
  }
  writeAuthSession(next);
  return next;
}

/** Migrate older preview sessions that lack tenant / trial / finance fields. */
function normalizeSession(partial: Partial<AuthPreviewSession>): AuthPreviewSession {
  const email = partial.email ?? "";
  const legacyTenant = partial.tenant as
    | (AuthPreviewSession["tenant"] & { trialStarted?: boolean })
    | undefined;

  return defaultSession({
    ...partial,
    email,
    accountStatus:
      partial.accountStatus ??
      (partial.emailVerified ? "verified" : partial.email ? "created" : "none"),
    tenant: {
      status: "not_started",
      planAssociated: false,
      ...legacyTenant,
      // Drop legacy trialStarted if present on tenant blob
    },
    trial: {
      status: "not_started",
      trial_ends_at: null,
      ...partial.trial,
      // Migrate old tenant.trialStarted → trial.status
      ...(legacyTenant?.trialStarted && !partial.trial
        ? { status: "trial" as const, trial_ends_at: null }
        : {}),
    },
    onboarding: {
      companyComplete: false,
      projectComplete: false,
      inviteComplete: false,
      connectSkipped: false,
      financeStatus: "not_connected",
      ...partial.onboarding,
    },
  });
}

export function defaultSession(
  partial: Partial<AuthPreviewSession> & Pick<AuthPreviewSession, "email">
): AuthPreviewSession {
  return {
    email: partial.email,
    name: partial.name ?? "",
    companyName: partial.companyName ?? "",
    planId: partial.planId,
    accountStatus: partial.accountStatus ?? "none",
    mfaRequired: partial.mfaRequired ?? false,
    mfaVerified: partial.mfaVerified ?? false,
    emailVerified: partial.emailVerified ?? false,
    tenant: {
      status: "not_started",
      planAssociated: false,
      ...partial.tenant,
    },
    trial: {
      status: "not_started",
      trial_ends_at: null,
      ...partial.trial,
    },
    onboarding: {
      companyComplete: false,
      projectComplete: false,
      inviteComplete: false,
      connectSkipped: false,
      financeStatus: "not_connected",
      ...partial.onboarding,
    },
    invite: partial.invite,
  };
}

/** Preview-only slug from company name. Production subdomain format is API-defined. */
export function previewSubdomainFromCompany(companyName: string): string {
  const slug = companyName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48);
  return slug || "workspace";
}
