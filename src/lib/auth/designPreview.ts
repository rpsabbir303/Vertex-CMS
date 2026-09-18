"use client";

import { getActivePlans } from "@/lib/marketing/pricing";
import { defaultSession, previewSubdomainFromCompany, readAuthSession, writeAuthSession } from "./session";
import { resolveTrialEndsAt } from "./trial";

export const BILLING_DESIGN_PREVIEW_PARAM = "designPreview";
export const BILLING_DESIGN_PREVIEW_VALUE = "1";

/** Must be set to "true" in Vercel Preview (and local .env) — never on Production. */
export const BILLING_DESIGN_PREVIEW_ENV = "NEXT_PUBLIC_ENABLE_BILLING_DESIGN_PREVIEW";

const DESIGN_PREVIEW_EMAIL = "design-preview@vertexcms.test";
const DESIGN_PREVIEW_WORKSPACE = "Design preview workspace";

export function isLocalDevelopmentHost(): boolean {
  if (typeof window === "undefined") return false;
  const hostname = window.location.hostname;
  return hostname === "localhost" || hostname === "127.0.0.1";
}

export function hasBillingDesignPreviewQuery(searchParams?: URLSearchParams | null): boolean {
  const params =
    searchParams ??
    (typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null);
  if (!params) return false;
  return params.get(BILLING_DESIGN_PREVIEW_PARAM) === BILLING_DESIGN_PREVIEW_VALUE;
}

function isBillingDesignPreviewFlagEnabled(): boolean {
  return process.env.NEXT_PUBLIC_ENABLE_BILLING_DESIGN_PREVIEW === "true";
}

/**
 * Approved deployment targets for billing design capture (html.to.design).
 * Production Vercel deploys are always rejected, even if the public flag is mis-set.
 */
export function isApprovedBillingDesignPreviewDeployment(): boolean {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
    return false;
  }

  if (process.env.NODE_ENV === "development" && isLocalDevelopmentHost()) {
    return true;
  }

  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
    return true;
  }

  return false;
}

/**
 * HTML-to-Design billing capture — requires explicit env flag, approved deployment, and ?designPreview=1.
 */
export function isBillingDesignPreviewCaptureEnabled(searchParams?: URLSearchParams | null): boolean {
  if (!isBillingDesignPreviewFlagEnabled()) return false;
  if (!isApprovedBillingDesignPreviewDeployment()) return false;
  return hasBillingDesignPreviewQuery(searchParams);
}

function pickBillingDesignPreviewPlanId(): string | undefined {
  const plans = getActivePlans();
  if (plans.length === 0) return undefined;
  return (
    plans.find((plan) => plan.cta.action === "trial")?.id ??
    plans.find((plan) => plan.cta.action !== "quote")?.id ??
    plans[0]?.id
  );
}

/**
 * Seeds the minimum preview session BillingSetupView expects when capture has no sessionStorage.
 * No-op unless design preview is enabled and no session exists yet.
 */
export function ensureBillingDesignPreviewSession(): void {
  if (!isBillingDesignPreviewCaptureEnabled()) return;
  if (readAuthSession()) return;

  const planId = pickBillingDesignPreviewPlanId();
  if (!planId) return;

  writeAuthSession(
    defaultSession({
      email: DESIGN_PREVIEW_EMAIL,
      name: "",
      companyName: DESIGN_PREVIEW_WORKSPACE,
      planId,
      billingPeriod: "monthly",
      accountStatus: "verified",
      emailVerified: true,
      mfaRequired: false,
      mfaVerified: true,
      tenant: {
        status: "ready",
        tenantId: "tenant_design_preview",
        subdomain: previewSubdomainFromCompany(DESIGN_PREVIEW_WORKSPACE),
        workspaceLabel: DESIGN_PREVIEW_WORKSPACE,
        planAssociated: true,
      },
      trial: {
        status: "trial",
        trial_ends_at: resolveTrialEndsAt(planId),
      },
      onboarding: {
        companyComplete: true,
        projectComplete: true,
        inviteComplete: true,
        connectSkipped: true,
        financeStatus: "not_connected",
      },
      checkout: {
        billingComplete: false,
        addonsComplete: false,
        selectedAddonIds: [],
      },
    })
  );
}
