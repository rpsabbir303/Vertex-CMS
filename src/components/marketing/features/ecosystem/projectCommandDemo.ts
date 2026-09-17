/** Approved product demo rows — aligned with ProductMockups register UIs. */

export const PM_DEMO_PROJECT = "Riverfront Office Complex";

export const PM_WORKFLOW_STEPS = [
  "Projects",
  "Scheduling",
  "Documents",
  "RFIs",
  "Submittals",
  "Change Orders",
] as const;

/** Visual bars only — labels from schedulingFeatureDetail.nav (no invented dates). */
export const PM_SCHEDULE_MODULES = [
  { label: "CPM Scheduling", width: "100%" },
  { label: "Dependencies", width: "82%" },
  { label: "Look-Ahead", width: "64%" },
  { label: "Risk Prediction", width: "46%" },
] as const;

export const PM_DOCUMENT_FOLDERS = [
  "Drawings",
  "Specifications",
  "Contracts",
  "RFIs",
  "Submittals",
  "Photos",
] as const;

export const PM_OPEN_RFIS = [
  {
    id: "RFI-001",
    subject: "Clarification Required — Beam pocket at Grid B",
    status: "Open",
  },
  {
    id: "RFI-002",
    subject: "MEP chase clearance at Level 2",
    status: "In Review",
  },
] as const;

export const PM_SUBMITTALS = [
  {
    id: "SUB-001",
    item: "Product Data — Curtain wall system",
    status: "Open",
  },
  {
    id: "SUB-002",
    item: "Material Sample — Flooring finish",
    status: "In Review",
  },
] as const;

export const PM_CHANGE_ORDER = {
  id: "CO-017",
  title: "Additional beam reinforcement",
  status: "Pending approval",
  contract: "C-2041 Rev B",
} as const;

export const PM_OVERVIEW = {
  status: "Active",
  manager: "A. Chen",
  team: "Project participants on record",
  progress: "Project operations in progress",
} as const;

/** From projectsFeatureDetail.dashboard.indicators — no invented metrics. */
export const PM_INDICATORS = [
  "Cost variance",
  "Schedule variance",
  "Safety score",
  "Open RFIs",
  "Submittal status",
  "Punch count",
] as const;
