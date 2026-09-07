/**
 * Auth domain types for Vertex CMS marketing + product auth UI.
 * Backend/session integration is not present in this marketing repo yet.
 * UI flows use AuthClient in "preview" mode until the CMS auth API is wired.
 */

export type AuthMode = "preview" | "api";

export type AuthResult<T = void> =
  | { ok: true; data: T; message?: string }
  | { ok: false; error: string; fieldErrors?: Record<string, string> };

export type InviteRole = "company_admin" | "member";

export type OnboardingStepId = "company" | "project" | "invite" | "connect";

/**
 * Tenant workspace provisioning — AFTER email verification, BEFORE trial.
 * Trial is a separate state machine (see TrialStatus).
 */
export type TenantProvisionStatus =
  | "not_started"
  | "creating_tenant"
  | "assigning_subdomain"
  | "preparing_workspace"
  | "ready"
  | "failed";

/** Documented trial state — activated only after workspace ready. */
export type TrialStatus = "not_started" | "activating" | "trial" | "failed" | "expired";

export type AccountStatus = "none" | "created" | "verified";

export type EmailVerificationUiStatus =
  | "sent"
  | "waiting"
  | "resending"
  | "success"
  | "expired"
  | "invalid"
  | "failed";

export type InviteUiStatus = "valid" | "expired" | "invalid" | "activated";

export type FinanceConnectStatus = "not_connected" | "connecting" | "connected" | "failed";

export type AuthPreviewSession = {
  email: string;
  name: string;
  companyName: string;
  /** Selected plan carried from Pricing → Signup */
  planId?: string;
  accountStatus: AccountStatus;
  mfaRequired: boolean;
  mfaVerified: boolean;
  emailVerified: boolean;
  /** Isolated CMS workspace — set during /tenant-setup, before trial. */
  tenant: {
    status: TenantProvisionStatus;
    tenantId?: string;
    /** Generated/assigned slug from provisioning — not user-entered on Signup */
    subdomain?: string;
    workspaceLabel?: string;
    planAssociated: boolean;
    errorMessage?: string;
  };
  /** Separate from tenant provisioning */
  trial: {
    status: TrialStatus;
    /** ISO timestamp when plan config provides trialDays; null if not configured */
    trial_ends_at: string | null;
    errorMessage?: string;
  };
  onboarding: {
    companyComplete: boolean;
    projectComplete: boolean;
    inviteComplete: boolean;
    connectSkipped: boolean;
    financeStatus: FinanceConnectStatus;
  };
  invite?: {
    companyName: string;
    inviterName: string;
    role: InviteRole;
    status: InviteUiStatus;
  };
};

export const INVITE_ROLE_LABELS: Record<InviteRole, string> = {
  company_admin: "Company Admin",
  member: "Member",
};

export const ONBOARDING_STEPS: {
  id: OnboardingStepId;
  number: string;
  title: string;
  description: string;
}[] = [
  {
    id: "company",
    number: "01",
    title: "Company Profile",
    description: "Set up your company identity.",
  },
  {
    id: "project",
    number: "02",
    title: "First Project",
    description: "Create your first project workspace.",
  },
  {
    id: "invite",
    number: "03",
    title: "Invite Team",
    description: "Invite colleagues into Vertex CMS.",
  },
  {
    id: "connect",
    number: "04",
    title: "Connect Bank / GL",
    description: "Connect financial systems when ready.",
  },
];

/** Tenant provisioning checklist — trial/onboarding happen after this screen. */
export const PROVISIONING_MILESTONES = [
  { id: "account", label: "Account created" },
  { id: "email", label: "Email verified" },
  { id: "tenant", label: "Tenant created" },
  { id: "subdomain", label: "Subdomain provisioned" },
  { id: "workspace", label: "Workspace ready" },
] as const;
