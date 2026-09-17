import type { AuthPreviewSession } from "./types";
import { AUTH_ROUTES } from "./routes";

export const POST_TRIAL_PROGRESS_STEPS = [
  { id: "trial", number: "01", label: "Trial Ready" },
  { id: "billing", number: "02", label: "Billing" },
  { id: "dashboard", number: "03", label: "Dashboard" },
] as const;

export type PostTrialProgressStepId = (typeof POST_TRIAL_PROGRESS_STEPS)[number]["id"];

export function defaultCheckout(): AuthPreviewSession["checkout"] {
  return {
    billingComplete: false,
    addonsComplete: false,
    selectedAddonIds: [],
  };
}

/** Billing + optional add-ons complete on one step. */
export function isPostTrialCheckoutComplete(session: AuthPreviewSession): boolean {
  return session.checkout.billingComplete;
}

export function getPostTrialRedirect(session: AuthPreviewSession): string {
  if (session.trial.status !== "trial") {
    return AUTH_ROUTES.trialStarted;
  }
  if (!session.checkout.billingComplete) {
    return AUTH_ROUTES.billingSetup;
  }
  return AUTH_ROUTES.appHome;
}
