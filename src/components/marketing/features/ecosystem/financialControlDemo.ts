/** Approved financial demo — aligned with billingDetail, budgetJobCostDetail, ProductMockups. */

import { billingFeatureDetail } from "@/lib/marketing/features/billingDetail";
import { budgetJobCostFeatureDetail } from "@/lib/marketing/features/budgetJobCostDetail";

export const FM_DEMO_PROJECT = billingFeatureDetail.workspace.project;

export const FM_CONTRACT_SUMMARY = billingFeatureDetail.workspace.metrics;

export const FM_JOB_COST_SUMMARY = budgetJobCostFeatureDetail.dashboard.metrics;

/** Budget vs actual bar widths (percent of budget) — from BudgetDashboard mockup categories. */
export const FM_COST_CODE_BARS = [
  { label: "03 Concrete", actualPct: 58, budgetPct: 100, warn: false },
  { label: "05 Metals", actualPct: 48, budgetPct: 100, warn: false },
  { label: "16 Electrical", actualPct: 42, budgetPct: 100, warn: true },
] as const;

export const FM_WORKFLOW_STEPS = [
  "Contract",
  "Pay Application",
  "Billing / AR",
  "Cash / PO",
  "Receipt",
  "AP",
  "Job Cost",
  "GL",
  "One Financial Picture",
] as const;

/** Maps feature slug → highlighted workflow step label. */
export const FM_SLUG_TO_FLOW_STEP: Record<string, string> = {
  "budget-job-cost": "Job Cost",
  "native-accounting": "GL",
  billing: "Billing / AR",
  "aia-pay-applications": "Pay Application",
  wip: "One Financial Picture",
  "cash-flow": "Cash / PO",
};
