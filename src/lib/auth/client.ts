/**
 * AuthClient — UI integration boundary for Vertex CMS authentication.
 *
 * MODE: "preview"
 * - No backend exists in this marketing repository.
 * - Methods validate input, simulate latency, and advance the documented journey
 *   via sessionStorage so the connected auth/provisioning UX can be tested.
 * - Replace method bodies with CMS API calls when available. Do not invent endpoints.
 *
 * Documented journey:
 * Signup → Email verify → Tenant + subdomain provision → Trial → Onboarding → App
 */

import type { AuthResult, FinanceConnectStatus, InviteRole, TenantProvisionStatus } from "./types";
import type { BillingPaymentInput } from "./billingValidation";
import { isPreviewPaymentDecline, validateBillingPayment } from "./billingValidation";
import { getPostTrialRedirect } from "./postTrial";
import { getNextOnboardingHref, isOnboardingComplete } from "./guards";
import { AUTH_ROUTES } from "./routes";
import {
  defaultSession,
  isEmailRegistered,
  previewSubdomainFromCompany,
  readAuthSession,
  registerEmail,
  writeAuthSession,
} from "./session";
import {
  clearProvisionDemoRetry,
  getProvisionDemoRetry,
  PROVISION_DEMO_COMPANY,
} from "./provisioningDemo";
import { allocateUniqueSubdomain } from "./subdomain";
import { TRIAL_EXPIRED_DEMO } from "./trialDemo";
import { resolveTrialEndsAt } from "./trial";
import {
  isValidEmail,
  validatePassword,
  validateRequired,
  validateSignInFields,
  validateSignUpFields,
  validateTotpCode,
} from "./validation";

const delay = (ms = 700) => new Promise((r) => setTimeout(r, ms));

export const AUTH_MODE = "preview" as const;

export const AUTH_PREVIEW_NOTICE =
  "UI preview — authentication / tenant APIs are not connected yet. Journey navigation works locally for design/QA.";

/** Backend dependencies still required for production. */
export const AUTH_BACKEND_GAPS = [
  "Authentication & session API (sign-up, sign-in, cookies/JWT)",
  "Transactional email (verification, password reset, invitations)",
  "CAPTCHA / bot-prevention provider on signup (see captcha.ts)",
  "Tenant provisioning API (create tenant, unique subdomain, workspace ready)",
  "Trial activation API (status=trial, trial_ends_at from plan config)",
  "MFA enrollment + TOTP challenge against real authenticator secrets",
  "Enterprise SSO on login when product enables it (see sso.ts — currently disabled)",
  "Invitation token validation & magic-link activation",
  "Payment / billing provider (payment method tokenization, subscription create)",
  "Add-on selection persistence API",
  "Onboarding persistence APIs (company, project, invites, Bank/GL connectors)",
  "Authenticated CMS application entry URL (post-onboarding handoff to tenant app)",
  "Server middleware / RBAC enforcement (client gates are navigation-only)",
] as const;

async function previewOk<T>(data: T, message?: string): Promise<AuthResult<T>> {
  await delay();
  return { ok: true, data, message };
}

async function previewFail(error: string, fieldErrors?: Record<string, string>): Promise<AuthResult<never>> {
  await delay(400);
  return { ok: false, error, fieldErrors };
}

function returningUserRedirect(session: ReturnType<typeof readAuthSession>): string {
  if (!session) return AUTH_ROUTES.signIn;
  if (session.trial.status === "expired") return AUTH_ROUTES.trialExpired;
  if (session.mfaRequired && !session.mfaVerified) return AUTH_ROUTES.mfa;
  if (!session.emailVerified) return AUTH_ROUTES.verifyEmail;
  if (session.tenant.status !== "ready") return AUTH_ROUTES.tenantSetup;
  if (session.trial.status !== "trial") return AUTH_ROUTES.trialStarted;
  const postTrial = getPostTrialRedirect(session);
  if (postTrial !== AUTH_ROUTES.appHome) return postTrial;
  return AUTH_ROUTES.appHome;
}

export const AuthClient = {
  mode: AUTH_MODE,

  async signIn(input: {
    email: string;
    password: string;
    remember?: boolean;
  }): Promise<AuthResult<{ requireMfa: boolean; redirectTo: string }>> {
    const fieldErrors = validateSignInFields(input);
    if (Object.keys(fieldErrors).length) {
      return previewFail("Please correct the highlighted fields.", fieldErrors);
    }

    const requireMfa = input.password === "mfa12345";
    const emailLower = input.email.trim().toLowerCase();
    const trialExpired =
      input.password === TRIAL_EXPIRED_DEMO.password || emailLower === TRIAL_EXPIRED_DEMO.email;

    if (input.password === "wrongpass") {
      return previewFail("Invalid email or password.", {
        password: "Invalid email or password.",
      });
    }

    writeAuthSession(
      defaultSession({
        email: input.email.trim(),
        name: input.email.split("@")[0] ?? "User",
        companyName: trialExpired ? "Demo Construction Co." : "Your Company",
        planId: trialExpired ? "pro" : undefined,
        accountStatus: "verified",
        mfaRequired: requireMfa,
        mfaVerified: !requireMfa,
        emailVerified: true,
        tenant: {
          status: "ready",
          tenantId: "tenant_preview_returning",
          subdomain: "your-company",
          workspaceLabel: "Your Company",
          planAssociated: true,
        },
        trial: trialExpired
          ? { status: "expired", trial_ends_at: null }
          : {
              status: "trial",
              trial_ends_at: resolveTrialEndsAt(undefined),
            },
        onboarding: {
          companyComplete: true,
          projectComplete: true,
          inviteComplete: true,
          connectSkipped: true,
          financeStatus: "not_connected",
        },
      })
    );

    if (trialExpired) {
      return previewOk({
        requireMfa: false,
        redirectTo: AUTH_ROUTES.trialExpired,
      });
    }

    return previewOk({
      requireMfa,
      redirectTo: requireMfa ? AUTH_ROUTES.mfa : returningUserRedirect(readAuthSession()),
    });
  },

  async signUp(input: {
    companyName: string;
    name: string;
    email: string;
    password: string;
    planId?: string;
    billingPeriod?: "monthly" | "yearly";
    termsAccepted?: boolean;
    botCheckAcknowledged?: boolean;
  }): Promise<AuthResult<{ redirectTo: string }>> {
    const fieldErrors = validateSignUpFields(
      {
        ...input,
        termsAccepted: input.termsAccepted,
        botCheckAcknowledged: input.botCheckAcknowledged ?? false,
      },
      { checkDuplicate: (email) => isEmailRegistered(email), includeAcknowledgements: true }
    );

    if (Object.keys(fieldErrors).length) {
      return previewFail("Please correct the highlighted fields.", fieldErrors);
    }

    const emailLower = input.email.trim().toLowerCase();

    // Account creation only — tenant is NOT created here
    registerEmail(emailLower);
    writeAuthSession(
      defaultSession({
        email: input.email.trim(),
        name: input.name.trim(),
        companyName: input.companyName.trim(),
        planId: input.planId,
        billingPeriod: input.billingPeriod,
        accountStatus: "created",
        emailVerified: false,
        tenant: { status: "not_started", planAssociated: false },
        trial: { status: "not_started", trial_ends_at: null },
      })
    );

    return previewOk({ redirectTo: AUTH_ROUTES.verifyEmail });
  },

  async requestPasswordReset(email: string): Promise<AuthResult<{ submitted: true }>> {
    if (!isValidEmail(email)) {
      return previewFail("Enter a valid email address.", { email: "Enter a valid email address." });
    }
    return previewOk(
      { submitted: true },
      "If an account exists for that email, you will receive password reset instructions."
    );
  },

  async resetPassword(input: {
    password: string;
    confirmPassword: string;
    token?: string;
  }): Promise<AuthResult<{ redirectTo: string }>> {
    const fieldErrors: Record<string, string> = {};
    const pwErr = validatePassword(input.password);
    if (pwErr) fieldErrors.password = pwErr;
    if (input.password !== input.confirmPassword) {
      fieldErrors.confirmPassword = "Passwords do not match.";
    }
    if (Object.keys(fieldErrors).length) {
      return previewFail("Please correct the highlighted fields.", fieldErrors);
    }
    return previewOk({ redirectTo: `${AUTH_ROUTES.signIn}?reset=1` }, "Your password has been updated.");
  },

  async verifyMfa(code: string): Promise<AuthResult<{ redirectTo: string }>> {
    const err = validateTotpCode(code);
    if (err) return previewFail(err, { code: err });
    if (code.trim() !== "123456") {
      return previewFail("Invalid verification code. Try again.", {
        code: "Invalid verification code.",
      });
    }
    const session = readAuthSession();
    if (session) {
      writeAuthSession({ ...session, mfaVerified: true, mfaRequired: false });
    }
    return previewOk({ redirectTo: returningUserRedirect(readAuthSession()) });
  },

  async resendVerificationEmail(): Promise<AuthResult<{ sent: true }>> {
    const session = readAuthSession();
    if (!session) {
      return previewFail("Your session expired. Please sign up again.");
    }
    return previewOk({ sent: true }, "Verification email resent.");
  },

  async verifyEmail(): Promise<AuthResult<{ redirectTo: string }>> {
    const session = readAuthSession();
    if (!session) {
      return previewFail("Your session expired. Please sign up again.");
    }
    writeAuthSession({
      ...session,
      emailVerified: true,
      accountStatus: "verified",
      tenant: { ...session.tenant, status: "not_started" },
      trial: { status: "not_started", trial_ends_at: null },
    });
    return previewOk({ redirectTo: AUTH_ROUTES.tenantSetup });
  },

  /**
   * Tenant + subdomain provisioning AFTER email verification.
   * Does NOT start the trial — that is a separate step.
   */
  async provisionTenant(): Promise<
    AuthResult<{
      redirectTo: string;
      subdomain: string;
      tenantId: string;
      planId?: string;
      status: TenantProvisionStatus;
    }>
  > {
    const session = readAuthSession();
    if (!session) {
      return previewFail("Your session expired. Please sign up again.");
    }
    if (!session.emailVerified) {
      return previewFail("Verify your email before setting up your workspace.");
    }

    const tenantId = `tenant_${Date.now().toString(36)}`;

    // Stage: creating tenant
    writeAuthSession({
      ...session,
      tenant: {
        status: "creating_tenant",
        tenantId,
        workspaceLabel: session.companyName,
        planAssociated: false,
        errorMessage: undefined,
      },
    });
    await delay(500);

    // Stage: assign unique subdomain
    writeAuthSession({
      ...readAuthSession()!,
      tenant: {
        ...readAuthSession()!.tenant,
        status: "assigning_subdomain",
        tenantId,
        workspaceLabel: session.companyName,
        planAssociated: false,
      },
    });
    await delay(500);

    const allocated = allocateUniqueSubdomain(session.companyName);
    if (!allocated.ok) {
      writeAuthSession({
        ...readAuthSession()!,
        tenant: {
          status: "failed",
          tenantId,
          subdomain: allocated.attempted,
          workspaceLabel: session.companyName,
          planAssociated: false,
          errorMessage: allocated.error,
          failureRetryable: allocated.retryable,
        },
      });
      return previewFail(allocated.error);
    }

    writeAuthSession({
      ...readAuthSession()!,
      tenant: {
        status: "assigning_subdomain",
        tenantId,
        subdomain: allocated.subdomain,
        workspaceLabel: session.companyName,
        planAssociated: Boolean(session.planId),
        errorMessage: undefined,
      },
    });
    await delay(400);

    // Stage: prepare workspace
    writeAuthSession({
      ...readAuthSession()!,
      tenant: {
        status: "preparing_workspace",
        tenantId,
        subdomain: allocated.subdomain,
        workspaceLabel: session.companyName,
        planAssociated: Boolean(session.planId),
      },
    });
    await delay(500);

    // Workspace ready — trial still not started
    writeAuthSession({
      ...readAuthSession()!,
      tenant: {
        status: "ready",
        tenantId,
        subdomain: allocated.subdomain,
        workspaceLabel: session.companyName,
        planAssociated: Boolean(session.planId),
        errorMessage: undefined,
      },
      trial: { status: "not_started", trial_ends_at: null },
    });

    return previewOk({
      redirectTo: AUTH_ROUTES.trialStarted,
      subdomain: allocated.subdomain,
      tenantId,
      planId: session.planId,
      status: "ready",
    });
  },

  /**
   * Preview-only — seed a failed provisioning session for demo / QA.
   * Uses sessionStorage; does not create real tenants.
   */
  seedProvisioningFailurePreview(options?: {
    retryable?: boolean;
    planId?: string;
    companyName?: string;
    email?: string;
  }) {
    const retryable = options?.retryable !== false;
    const company =
      options?.companyName ??
      (retryable ? PROVISION_DEMO_COMPANY.retryableFail : PROVISION_DEMO_COMPANY.nonRetryableFail);

    writeAuthSession(
      defaultSession({
        email: options?.email ?? "demo.provision@vertexcms.test",
        name: "Demo User",
        companyName: company,
        planId: options?.planId ?? "pro",
        accountStatus: "verified",
        emailVerified: true,
        tenant: {
          status: "failed",
          tenantId: "tenant_demo_preview",
          workspaceLabel: company,
          planAssociated: true,
          failureRetryable: retryable,
          errorMessage: retryable
            ? "We couldn\u2019t finish setting up your workspace."
            : "We couldn\u2019t complete your workspace setup.",
        },
        trial: { status: "not_started", trial_ends_at: null },
      })
    );
  },

  /**
   * Preview-only — seed an expired-trial session for demo / QA.
   * Uses sessionStorage; does not change real subscription status.
   */
  seedTrialExpiredPreview(options?: {
    planId?: string;
    companyName?: string;
    email?: string;
    name?: string;
  }) {
    writeAuthSession(
      defaultSession({
        email: options?.email ?? TRIAL_EXPIRED_DEMO.email,
        name: options?.name ?? "Demo User",
        companyName: options?.companyName ?? "Demo Construction Co.",
        planId: options?.planId ?? "pro",
        accountStatus: "verified",
        emailVerified: true,
        mfaRequired: false,
        mfaVerified: true,
        tenant: {
          status: "ready",
          tenantId: "tenant_demo_expired",
          subdomain: "demo-construction-co",
          workspaceLabel: options?.companyName ?? "Demo Construction Co.",
          planAssociated: true,
        },
        trial: { status: "expired", trial_ends_at: null },
        onboarding: {
          companyComplete: true,
          projectComplete: true,
          inviteComplete: true,
          connectSkipped: true,
          financeStatus: "not_connected",
        },
      })
    );
  },

  async retryTenantProvisioning(): Promise<
    AuthResult<{
      redirectTo: string;
      subdomain: string;
      tenantId: string;
      planId?: string;
      status: TenantProvisionStatus;
    }>
  > {
    const session = readAuthSession();
    if (!session) {
      return previewFail("Your session expired. Please sign up again.");
    }

    const demoOutcome = getProvisionDemoRetry();
    if (demoOutcome === "fail-retryable" || demoOutcome === "fail-non-retryable") {
      await delay(900);
      clearProvisionDemoRetry();
      const retryable = demoOutcome === "fail-retryable";
      writeAuthSession({
        ...session,
        tenant: {
          ...session.tenant,
          status: "failed",
          failureRetryable: retryable,
          errorMessage: retryable
            ? "We couldn\u2019t finish setting up your workspace."
            : "We couldn\u2019t complete your workspace setup.",
        },
      });
      return previewFail(
        retryable
          ? "We couldn\u2019t finish setting up your workspace."
          : "We couldn\u2019t complete your workspace setup."
      );
    }

    if (demoOutcome === "success") {
      clearProvisionDemoRetry();
    }

    writeAuthSession({
      ...session,
      companyName: session.companyName.replace(/fail[- ]?provision[- ]?permanent/gi, "Workspace").replace(/fail[- ]?provision/gi, "Workspace").trim() || "Workspace",
      tenant: {
        status: "not_started",
        planAssociated: Boolean(session.planId),
        errorMessage: undefined,
        failureRetryable: undefined,
      },
      trial: { status: "not_started", trial_ends_at: null },
    });

    return AuthClient.provisionTenant();
  },

  /**
   * Start trial AFTER workspace is ready.
   * trial_ends_at comes from plan.trialDays when configured; otherwise null.
   */
  async startTrial(): Promise<
    AuthResult<{ redirectTo: string; status: "trial"; trial_ends_at: string | null }>
  > {
    const session = readAuthSession();
    if (!session) {
      return previewFail("Your session expired. Please sign up again.");
    }
    if (session.tenant.status !== "ready") {
      return previewFail("Finish workspace setup before starting your trial.");
    }

    writeAuthSession({
      ...session,
      trial: { status: "activating", trial_ends_at: null },
    });
    await delay(600);

    const trial_ends_at = resolveTrialEndsAt(session.planId);
    writeAuthSession({
      ...readAuthSession()!,
      trial: {
        status: "trial",
        trial_ends_at,
        errorMessage: undefined,
      },
    });

    return previewOk({
      redirectTo: AUTH_ROUTES.billingSetup,
      status: "trial",
      trial_ends_at,
    });
  },

  async selectCheckoutPlan(input: {
    planId: string;
    billingPeriod?: "monthly" | "yearly";
  }): Promise<AuthResult<{ planId: string }>> {
    const session = readAuthSession();
    if (!session) {
      return previewFail("Your session expired. Please sign in again.");
    }
    await delay(200);
    writeAuthSession({
      ...session,
      planId: input.planId,
      billingPeriod: input.billingPeriod ?? session.billingPeriod ?? "monthly",
      tenant: { ...session.tenant, planAssociated: true },
    });
    return previewOk({ planId: input.planId });
  },

  /** Payment + optional add-ons on one billing setup step. */
  async completeBillingSetup(input: BillingPaymentInput & {
    planId: string;
    addonIds: string[];
  }): Promise<AuthResult<{ completed: true }>> {
    const session = readAuthSession();
    if (!session) {
      return previewFail("Your session expired. Please sign in again.");
    }
    if (session.trial.status !== "trial") {
      return previewFail("Start your trial before setting up billing.");
    }
    if (!input.planId?.trim()) {
      return previewFail("Select a plan to continue.", { plan: "Select a plan to continue." });
    }

    const fieldErrors = validateBillingPayment(input);
    if (Object.keys(fieldErrors).length) {
      return previewFail("Please correct the highlighted fields.", fieldErrors);
    }

    await delay(900);

    if (isPreviewPaymentDecline(input.cardNumber)) {
      return previewFail("Payment could not be processed. Check your card details or try another payment method.");
    }

    writeAuthSession({
      ...session,
      planId: input.planId,
      checkout: {
        ...session.checkout,
        billingComplete: true,
        addonsComplete: true,
        selectedAddonIds: input.addonIds,
      },
    });

    return previewOk({ completed: true });
  },

  async activateInvite(input: {
    password: string;
    confirmPassword: string;
    name: string;
  }): Promise<AuthResult<{ redirectTo: string }>> {
    const fieldErrors: Record<string, string> = {};
    const nameErr = validateRequired(input.name, "Name");
    if (nameErr) fieldErrors.name = nameErr;
    const pwErr = validatePassword(input.password);
    if (pwErr) fieldErrors.password = pwErr;
    if (input.password !== input.confirmPassword) {
      fieldErrors.confirmPassword = "Passwords do not match.";
    }
    if (Object.keys(fieldErrors).length) {
      return previewFail("Please correct the highlighted fields.", fieldErrors);
    }
    const session = readAuthSession();
    if (session?.invite?.status === "expired") {
      return previewFail("That invitation link has expired.");
    }
    if (session?.invite?.status === "invalid") {
      return previewFail("This invitation link is invalid.");
    }
    const company = session?.invite?.companyName ?? session?.companyName ?? "Invited Company";
    writeAuthSession(
      defaultSession({
        email: session?.email ?? "invitee@company.com",
        name: input.name.trim(),
        companyName: company,
        accountStatus: "verified",
        emailVerified: true,
        invite: session?.invite ? { ...session.invite, status: "activated" } : undefined,
        tenant: {
          status: "ready",
          tenantId: `tenant_invite_${Date.now().toString(36)}`,
          subdomain: previewSubdomainFromCompany(company),
          workspaceLabel: company,
          planAssociated: true,
        },
        trial: { status: "trial", trial_ends_at: null },
        onboarding: {
          companyComplete: true,
          projectComplete: true,
          inviteComplete: true,
          connectSkipped: true,
          financeStatus: "not_connected",
        },
      })
    );
    return previewOk({ redirectTo: `${AUTH_ROUTES.signIn}?activated=1` }, "Your account is activated.");
  },

  seedInvitePreview(params?: {
    companyName?: string;
    email?: string;
    role?: InviteRole;
    status?: "valid" | "expired" | "invalid";
  }) {
    writeAuthSession(
      defaultSession({
        email: params?.email ?? "alex@contractor.com",
        companyName: params?.companyName ?? "Summit Construction Group",
        accountStatus: "none",
        invite: {
          companyName: params?.companyName ?? "Summit Construction Group",
          inviterName: "Jordan Lee",
          role: params?.role ?? "member",
          status: params?.status ?? "valid",
        },
      })
    );
  },

  async saveCompanyProfile(input: {
    companyName: string;
    trade: string;
    region: string;
    phone?: string;
  }): Promise<AuthResult<{ redirectTo: string }>> {
    const fieldErrors: Record<string, string> = {};
    if (validateRequired(input.companyName, "Company name")) {
      fieldErrors.companyName = "Company name is required.";
    }
    if (validateRequired(input.trade, "Trade")) fieldErrors.trade = "Select a trade.";
    if (validateRequired(input.region, "Region")) fieldErrors.region = "Region is required.";
    if (Object.keys(fieldErrors).length) {
      return previewFail("Please correct the highlighted fields.", fieldErrors);
    }
    const session = readAuthSession();
    if (session) {
      writeAuthSession({
        ...session,
        companyName: input.companyName.trim(),
        onboarding: { ...session.onboarding, companyComplete: true },
      });
    }
    return previewOk({ redirectTo: AUTH_ROUTES.onboardingProject });
  },

  async saveFirstProject(input: {
    name: string;
    type: string;
    location: string;
    startDate: string;
    endDate?: string;
    retainage?: string;
  }): Promise<AuthResult<{ redirectTo: string }>> {
    const fieldErrors: Record<string, string> = {};
    if (validateRequired(input.name, "Project name")) fieldErrors.name = "Project name is required.";
    if (validateRequired(input.type, "Project type")) fieldErrors.type = "Select a project type.";
    if (validateRequired(input.location, "Location")) fieldErrors.location = "Location is required.";
    if (validateRequired(input.startDate, "Start date")) fieldErrors.startDate = "Start date is required.";
    if (Object.keys(fieldErrors).length) {
      return previewFail("Please correct the highlighted fields.", fieldErrors);
    }
    const session = readAuthSession();
    if (session) {
      writeAuthSession({
        ...session,
        onboarding: { ...session.onboarding, projectComplete: true },
      });
    }
    return previewOk({ redirectTo: AUTH_ROUTES.onboardingInvite });
  },

  async inviteTeam(input: {
    invites: { email: string; role: InviteRole }[];
  }): Promise<AuthResult<{ redirectTo: string; sent: number }>> {
    const fieldErrors: Record<string, string> = {};
    const valid = input.invites.filter((i) => i.email.trim());
    if (valid.length === 0) {
      fieldErrors.emails = "Add at least one email address.";
      return previewFail("Add at least one teammate to invite, or skip for now.", fieldErrors);
    }
    for (const inv of valid) {
      if (!isValidEmail(inv.email)) {
        fieldErrors.emails = `Invalid email: ${inv.email}`;
        return previewFail("Please correct invitation emails.", fieldErrors);
      }
    }
    const session = readAuthSession();
    if (session) {
      writeAuthSession({
        ...session,
        onboarding: { ...session.onboarding, inviteComplete: true },
      });
    }
    return previewOk({ redirectTo: AUTH_ROUTES.onboardingConnect, sent: valid.length });
  },

  async skipInviteTeam(): Promise<AuthResult<{ redirectTo: string }>> {
    const session = readAuthSession();
    if (session) {
      writeAuthSession({
        ...session,
        onboarding: { ...session.onboarding, inviteComplete: true },
      });
    }
    return previewOk({ redirectTo: AUTH_ROUTES.onboardingConnect });
  },

  async connectFinance(
    _kind: "bank" | "gl" = "bank"
  ): Promise<AuthResult<{ status: FinanceConnectStatus; redirectTo?: string }>> {
    const session = readAuthSession();
    if (!session) return previewFail("Your session expired. Please sign in again.");

    writeAuthSession({
      ...session,
      onboarding: { ...session.onboarding, financeStatus: "connecting" },
    });
    await delay(900);

    writeAuthSession({
      ...session,
      onboarding: { ...session.onboarding, financeStatus: "failed" },
    });
    // Customer-facing copy — UI maps this to a polished unavailable state.
    return previewFail("We couldn’t complete this connection right now.");
  },

  async skipConnect(): Promise<AuthResult<{ redirectTo: string }>> {
    const session = readAuthSession();
    if (session) {
      writeAuthSession({
        ...session,
        onboarding: {
          ...session.onboarding,
          connectSkipped: true,
          financeStatus: "not_connected",
        },
      });
    }
    return previewOk({ redirectTo: AUTH_ROUTES.appHome });
  },

  async markFinanceConnectedPreview(): Promise<AuthResult<{ redirectTo: string }>> {
    const session = readAuthSession();
    if (session) {
      writeAuthSession({
        ...session,
        onboarding: {
          ...session.onboarding,
          connectSkipped: true,
          financeStatus: "connected",
        },
      });
    }
    return previewOk({ redirectTo: AUTH_ROUTES.appHome });
  },
};
