import type { AuthPreviewSession, OnboardingStepId } from "./types";
import { AUTH_ROUTES } from "./routes";

export type AuthGateReason =
  | "unauthenticated"
  | "email_unverified"
  | "mfa_required"
  | "tenant_incomplete"
  | "tenant_failed"
  | "trial_incomplete"
  | "onboarding_incomplete"
  | "ready";

export type AuthGate = {
  reason: AuthGateReason;
  redirectTo?: string;
  nextOnboardingStep?: OnboardingStepId;
};

function nextOnboardingStep(session: AuthPreviewSession): OnboardingStepId | null {
  if (!session.onboarding.companyComplete) return "company";
  if (!session.onboarding.projectComplete) return "project";
  if (!session.onboarding.inviteComplete) return "invite";
  if (!session.onboarding.connectSkipped && session.onboarding.financeStatus !== "connected") {
    return "connect";
  }
  return null;
}

const ONBOARDING_HREF: Record<OnboardingStepId, string> = {
  company: AUTH_ROUTES.onboardingCompany,
  project: AUTH_ROUTES.onboardingProject,
  invite: AUTH_ROUTES.onboardingInvite,
  connect: AUTH_ROUTES.onboardingConnect,
};

/**
 * Client-side journey gate for preview UX.
 * Production must enforce the same states via server session + middleware.
 */
export function resolveAuthGate(
  session: AuthPreviewSession | null,
  options?: {
    allowUnverifiedEmail?: boolean;
    allowUnprovisionedTenant?: boolean;
    allowTrialInactive?: boolean;
    requireOnboardingComplete?: boolean;
  }
): AuthGate {
  if (!session) {
    return { reason: "unauthenticated", redirectTo: AUTH_ROUTES.signup };
  }

  if (session.mfaRequired && !session.mfaVerified) {
    return { reason: "mfa_required", redirectTo: AUTH_ROUTES.mfa };
  }

  if (!session.emailVerified && !options?.allowUnverifiedEmail) {
    return { reason: "email_unverified", redirectTo: AUTH_ROUTES.verifyEmail };
  }

  if (session.tenant.status === "failed" && !options?.allowUnprovisionedTenant) {
    return { reason: "tenant_failed", redirectTo: AUTH_ROUTES.tenantSetup };
  }

  if (session.tenant.status !== "ready" && !options?.allowUnprovisionedTenant) {
    return { reason: "tenant_incomplete", redirectTo: AUTH_ROUTES.tenantSetup };
  }

  if (session.trial.status !== "trial" && !options?.allowTrialInactive) {
    return { reason: "trial_incomplete", redirectTo: AUTH_ROUTES.trialStarted };
  }

  if (options?.requireOnboardingComplete) {
    const step = nextOnboardingStep(session);
    if (step) {
      return {
        reason: "onboarding_incomplete",
        nextOnboardingStep: step,
        redirectTo: ONBOARDING_HREF[step],
      };
    }
  }

  return { reason: "ready" };
}

export function isOnboardingComplete(session: AuthPreviewSession): boolean {
  return nextOnboardingStep(session) === null;
}

export function getNextOnboardingHref(session: AuthPreviewSession): string {
  const step = nextOnboardingStep(session);
  if (!step) return AUTH_ROUTES.appHome;
  return ONBOARDING_HREF[step];
}
