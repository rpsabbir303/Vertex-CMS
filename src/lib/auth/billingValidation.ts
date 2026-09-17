export type BillingSetupInput = {
  planId: string;
  billingPeriod?: "monthly" | "yearly";
  addonIds: string[];
};

export function validateBillingSetup(input: BillingSetupInput): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!input.planId?.trim()) {
    errors.plan = "Select a plan to continue.";
  }
  if (input.billingPeriod && input.billingPeriod !== "monthly" && input.billingPeriod !== "yearly") {
    errors.billingPeriod = "Select monthly or yearly billing.";
  }
  return errors;
}
