/**
 * Trial duration resolution from plan configuration.
 * Do not invent a trial length in UI — use plan.trialDays when the catalog provides it.
 */

import { getActivePlans } from "@/lib/marketing/pricing";

/**
 * Returns ISO trial end timestamp when the selected plan defines trialDays.
 * Returns null when plan config does not specify duration (backend must supply).
 */
export function resolveTrialEndsAt(planId?: string, from: Date = new Date()): string | null {
  if (!planId) return null;
  const plan = getActivePlans().find((p) => p.id === planId);
  if (!plan || plan.trialDays == null || plan.trialDays <= 0) return null;
  const end = new Date(from.getTime());
  end.setUTCDate(end.getUTCDate() + plan.trialDays);
  return end.toISOString();
}
