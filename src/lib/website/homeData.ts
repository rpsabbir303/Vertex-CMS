import { photos } from "@/lib/images";

export const VALUE_POINTS = [
  { label: "Real-Time Job Cost", icon: "chart" as const },
  { label: "Native Accounting", icon: "ledger" as const },
  { label: "Field-First Workflows", icon: "field" as const },
  { label: "Compliance Control", icon: "shield" as const },
  { label: "AI-Powered Insights", icon: "ai" as const },
] as const;

export const CAPABILITIES = [
  {
    id: "project-management",
    title: "Project Management",
    description:
      "Keep projects, teams, phases, documents, and project health organized in one place.",
  },
  {
    id: "financial-control",
    title: "Financial Control",
    description:
      "Connect budgets, job costs, contracts, billing, AP, AR, and native accounting.",
  },
  {
    id: "field-operations",
    title: "Field Operations",
    description:
      "Capture daily logs, RFIs, photos, punch items, T&M tickets, and field information faster.",
  },
  {
    id: "scheduling",
    title: "Scheduling",
    description:
      "Manage CPM schedules, dependencies, critical paths, variance, and three-week look-aheads.",
  },
  {
    id: "safety-compliance",
    title: "Safety & Compliance",
    description:
      "Track incidents, inspections, toolbox talks, insurance, lien requirements, and compliance.",
  },
  {
    id: "ai-intelligence",
    title: "AI Construction Intelligence",
    description:
      "Ask questions, process documents, identify risks, and turn project data into actionable insight.",
  },
] as const;

export const FIELD_HIGHLIGHTS = [
  "Daily Logs",
  "Photos",
  "RFIs",
  "Punch Lists",
  "Timesheets",
  "Safety",
  "Offline workflows",
] as const;

export const AI_PROMPTS = [
  "What's putting this project at risk?",
  "Which RFIs are overdue?",
  "Where are we trending over budget?",
  "What changed this week?",
  "Summarize the latest project documents.",
] as const;

export type ProjectCard = {
  id: string;
  name: string;
  type: string;
  location: string;
  description: string;
  image: string;
  slug: string;
};

/** Demo portfolio data — replace with CMS-sourced projects when API is available. */
export const DEMO_PROJECTS: ProjectCard[] = [
  {
    id: "riverfront-office",
    name: "Riverfront Office Complex",
    type: "Commercial · New Construction",
    location: "Austin, TX",
    description:
      "12-story Class A office tower with integrated project controls, financial tracking, and field documentation.",
    image: photos.aerial,
    slug: "riverfront-office-complex",
  },
  {
    id: "northside-medical",
    name: "Northside Medical Center",
    type: "Healthcare · Expansion",
    location: "Denver, CO",
    description:
      "Hospital wing expansion managed with live schedule variance, safety compliance, and subcontractor coordination.",
    image: photos.steelFrame,
    slug: "northside-medical-center",
  },
  {
    id: "oakwood-residential",
    name: "Oakwood Residential",
    type: "Multifamily · Development",
    location: "Phoenix, AZ",
    description:
      "240-unit residential development with job cost visibility, pay application tracking, and owner reporting.",
    image: photos.crane,
    slug: "oakwood-residential",
  },
];

export const SAFETY_METRICS = [
  { label: "Safety Performance", value: "96%", note: "Sample data" },
  { label: "Incident Tracking", value: "Active", note: "Real-time" },
  { label: "Inspections", value: "142", note: "YTD" },
  { label: "Toolbox Talks", value: "318", note: "YTD" },
  { label: "TRIR", value: "0.82", note: "Sample · demo data" },
] as const;
