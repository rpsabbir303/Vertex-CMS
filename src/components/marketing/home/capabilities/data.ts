export type CapabilityId =
  | "preconstruction"
  | "project-management"
  | "financial-control"
  | "field-operations"
  | "ai-intelligence"
  | "closeout";

export type Capability = {
  id: CapabilityId;
  number: string;
  title: string;
  description: string;
  story: string;
  navHint: string;
  accentY: number;
};

export const CAPABILITIES: Capability[] = [
  {
    id: "preconstruction",
    number: "01",
    title: "Preconstruction",
    description: "Plan, estimate and win work with connected preconstruction workflows.",
    story: "PLAN",
    navHint: "CRM · Estimating · Takeoff · Bidding",
    accentY: 12,
  },
  {
    id: "project-management",
    number: "02",
    title: "Project Management",
    description: "Keep schedules, documents, RFIs, submittals and change orders connected.",
    story: "CONTROL",
    navHint: "Schedule · Documents · RFIs · Submittals",
    accentY: 28,
  },
  {
    id: "financial-control",
    number: "03",
    title: "Financial Control",
    description: "Connect budget, job cost, billing, WIP and cash flow to project performance.",
    story: "KNOW",
    navHint: "Budget · Job Cost · Billing · WIP",
    accentY: 44,
  },
  {
    id: "field-operations",
    number: "04",
    title: "Field Operations",
    description: "Capture daily work, photos, drawings, punch, safety and time in the field.",
    story: "CAPTURE",
    navHint: "Daily Logs · Photos · Punch · Safety",
    accentY: 60,
  },
  {
    id: "ai-intelligence",
    number: "05",
    title: "AI & Intelligence",
    description: "Turn project data and documents into actionable intelligence.",
    story: "UNDERSTAND",
    navHint: "AI Assistant · Insights · Documents",
    accentY: 76,
  },
  {
    id: "closeout",
    number: "06",
    title: "Closeout",
    description: "Bring punch, documents, warranty and closeout workflows together.",
    story: "COMPLETE",
    navHint: "Punch · Documents · Warranty",
    accentY: 92,
  },
];

export const AUTOPLAY_MS = 6500;
export const RESUME_MS = 10000;
