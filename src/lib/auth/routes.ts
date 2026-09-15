import { ROUTES } from "@/lib/marketing/navigation";

/** Auth & onboarding routes — extend marketing ROUTES without duplicating aliases. */
export const AUTH_ROUTES = {
  login: ROUTES.login,
  signIn: "/sign-in",
  signup: ROUTES.signup,
  /** Documented alias — redirects to /signup */
  signUp: "/sign-up",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password",
  mfa: "/mfa",
  /** Canonical invite activation */
  invite: "/invite",
  /** Documented aliases — redirect to /invite */
  invitation: "/invitation",
  activate: "/activate",
  verifyEmail: "/verify-email",
  /** Required after email verification — creates tenant workspace + subdomain */
  tenantSetup: "/tenant-setup",
  /** Workspace provisioning failure recovery */
  tenantSetupFailed: "/tenant-setup/failed",
  /** Preview-only demo hub for provisioning failure scenarios */
  provisioningDemo: "/provisioning-demo",
  /** After successful provisioning — trial ready handoff */
  trialStarted: "/trial-started",
  /** Trial-ended recovery — preview demo: /trial-expired?mode=demo */
  trialExpired: "/trial-expired",
  onboarding: "/onboarding",
  onboardingCompany: "/onboarding/company",
  onboardingProject: "/onboarding/project",
  /** Canonical team invite step */
  onboardingInvite: "/onboarding/invite-team",
  /** Documented alias */
  onboardingTeam: "/onboarding/team",
  /** Canonical bank/GL step */
  onboardingConnect: "/onboarding/connect",
  /** Documented alias */
  onboardingBankGl: "/onboarding/bank-gl",
  /**
   * Destination after onboarding — tenant app shell on this site until
   * production CMS URL is configured.
   */
  appHome: "/app",
} as const;
