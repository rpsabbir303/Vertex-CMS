/** Approved growth demo — aligned with ProductMockups CrmPipelineUI and feature detail modules. */

export const GROWTH_FLOW = ["Website", "Lead", "CRM", "Portal"] as const;

export const GROWTH_PIPELINE_STAGES = [
  "New Opportunity",
  "Qualification",
  "Go / No-Go",
  "Estimating",
  "Bidding",
  "Awarded",
  "Lost",
] as const;

export const GROWTH_ACTIVE_STAGE_INDEX = 3;

export const GROWTH_OPPORTUNITY = {
  name: "Riverside Office Complex",
  client: "Harbor Development",
  type: "Commercial",
  stage: "Estimating",
  activeInStage: "2 active",
  value: "$19.1M",
  expectedClose: "Apr 12",
  winLoss: "Open",
} as const;
