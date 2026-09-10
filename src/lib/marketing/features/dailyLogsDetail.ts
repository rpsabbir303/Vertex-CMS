/**
 * Daily Logs feature detail — LOG module.
 * Source: Register (Daily logs, Weather & manpower entries, Log attachments)
 * + featureAreas howItWorks / outcomes.
 *
 * No GPS tracking, automatic weather collection, AI-generated reports,
 * automated worker tracking, payroll, offline claims, or auto notifications.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

const FIELD_OPS = `${ROUTES.features}#field-operations`;
const FO = "Field Operations";

export const dailyLogsFeatureDetail = {
  meta: {
    title: "Daily Logs | Vertex CMS Features",
    description:
      "Capture daily site activity, weather, manpower, notes, photos, and attachments in one connected field log in Vertex CMS.",
    canonical: `${ROUTES.features}/daily-logs`,
  },
  hero: {
    eyebrow: "Field Operations",
    headline: "Keep Every Day's Work Documented.",
    supporting:
      "Capture the work, conditions, workforce, and progress happening on your jobsite so project teams always have a reliable daily record.",
    description:
      "Keep daily field information organized and connected to the project, from site conditions and work completed to notes, photos, and workforce updates.",
    primary: { label: "Explore Field Operations", href: FIELD_OPS },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
    preview: "dailyLogDashboard" as PreviewKey,
  },
  nav: [
    { id: "dl-overview", label: "Overview" },
    { id: "dl-activity", label: "Daily Activity" },
    { id: "dl-records", label: "Field Records" },
    { id: "dl-workforce", label: "Workforce" },
    { id: "dl-photos", label: "Photos" },
    { id: "dl-outcomes", label: "Outcomes" },
    { id: "dl-workflows", label: "Workflows" },
  ] as const,
  intro: {
    headline: "Know What Happened on the Jobsite.",
    body: "Give project teams a consistent record of daily activity without relying on scattered notes, messages, or disconnected files.",
    points: [
      {
        title: "Capture Daily Activity",
        body: "Record the work completed and important project activity while the day is still fresh.",
      },
      {
        title: "Keep Field Conditions Visible",
        body: "Document weather, site conditions, workforce information, and other details that affect the work.",
      },
      {
        title: "Create a Connected Record",
        body: "Keep daily information connected to the project so teams can reference it later.",
      },
    ],
  },
  showcase: {
    headline: "One View of Your Daily Field Activity.",
    body: "Bring the most important information from the workday into one organized daily record.",
    project: "Riverside Medical Center",
    metrics: [
      { label: "Weather", value: "82°F" },
      { label: "Conditions", value: "Partly Cloudy" },
      { label: "Workforce", value: "42 Workers" },
      { label: "Photos", value: "8 Photos" },
    ] as const,
    preview: "dailyLogDetail" as PreviewKey,
  },
  workflow: {
    headline: "From Morning Conditions to Completed Work.",
    body: "Capture the information that shapes the workday and keep it organized as part of the project record.",
    steps: [
      {
        n: "01",
        title: "Start the daily record",
        body: "Record the date, project conditions, and key information for the workday.",
      },
      {
        n: "02",
        title: "Document activity",
        body: "Capture completed work, workforce updates, notes, and relevant field information.",
      },
      {
        n: "03",
        title: "Add supporting evidence",
        body: "Attach photos and other useful context to the daily record.",
      },
      {
        n: "04",
        title: "Keep the record current",
        body: "Maintain a clear daily history that project teams can reference throughout the project.",
      },
    ],
    preview: "dailyLogCapture" as PreviewKey,
  },
  capabilities: {
    eyebrow: "Daily Log Capabilities",
    headline: "Everything Your Team Needs to Document the Workday.",
    items: [
      {
        title: "Daily Reports",
        body: "Create structured records for daily project activity.",
      },
      {
        title: "Workforce Updates",
        body: "Document workforce information associated with the workday.",
      },
      {
        title: "Weather & Conditions",
        body: "Record conditions that may affect project activity.",
      },
      {
        title: "Work Completed",
        body: "Capture the work performed and progress made.",
      },
      {
        title: "Daily Notes",
        body: "Keep important field observations and context in the project record.",
      },
      {
        title: "Photos",
        body: "Attach visual evidence to support the daily record.",
      },
      {
        title: "Project Activity",
        body: "Keep daily information connected to the broader project.",
      },
      {
        title: "Historical Records",
        body: "Give teams a consistent history of previous daily activity.",
      },
    ],
  },
  story: {
    headline: "Capture the Story Behind Every Workday.",
    body: "A daily log should do more than store notes. It should give project teams useful context about what happened, what changed, and what was completed.",
    preview: "dailyLogHistory" as PreviewKey,
  },
  fieldRecord: {
    headline: "Turn Daily Activity Into a Reliable Project Record.",
    body: "Keep field information structured and easy to reference instead of allowing important details to disappear into disconnected notes and conversations.",
    cards: [
      {
        title: "Consistent Records",
        body: "Use a repeatable structure for documenting daily project activity.",
      },
      {
        title: "Clear Project History",
        body: "Give teams a clearer view of what happened throughout the project.",
      },
      {
        title: "Better Field Visibility",
        body: "Keep project information available to the people who need it.",
      },
    ],
    preview: "dailyLogDashboard" as PreviewKey,
  },
  connected: {
    headline: "Connected Daily Reporting, Without Disconnected Records.",
    body: "Keep daily field information connected to the workflows and project records that teams already use.",
    cards: [
      {
        slug: "projects",
        title: "Projects",
        body: "Connect daily activity to the project record.",
      },
      {
        slug: "drawings",
        title: "Drawings",
        body: "Reference relevant drawings while documenting field activity.",
      },
      {
        slug: "punch",
        title: "Punch",
        body: "Keep daily reporting connected to field items and completion work.",
      },
      {
        slug: "safety",
        title: "Safety",
        body: "Keep safety-related observations connected to the project workflow.",
      },
      {
        slug: "t-and-m",
        title: "T&M",
        body: "Connect time and material information to field activity.",
      },
      {
        slug: "documents",
        title: "Documents",
        body: "Keep supporting project information connected to the daily record.",
      },
    ],
  },
  visibility: {
    eyebrow: "Field Visibility",
    headline: "See More From Every Day on the Jobsite.",
    body: "Give project teams a clearer view of daily activity by keeping important field information organized and connected.",
    panels: [
      {
        title: "Daily Activity",
        body: "See what work was completed.",
      },
      {
        title: "Project Conditions",
        body: "Understand the conditions surrounding the work.",
      },
      {
        title: "Field Record",
        body: "Keep the day's information available as part of the project history.",
      },
    ],
    preview: "dailyLogDetail" as PreviewKey,
  },
  workforce: {
    headline: "Document the workforce behind the workday.",
    body: "Keep workforce information organized within the daily log so project teams understand who was on site and how the day was staffed.",
    preview: "dailyLogWorkforce" as PreviewKey,
  },
  photos: {
    headline: "Attach visual evidence to the daily record.",
    body: "Add photos that support the day's activity and keep visual progress connected to the project log.",
    preview: "dailyLogPhotos" as PreviewKey,
  },
  outcomes: {
    headline: "Built for Better Daily Field Reporting.",
    cards: [
      {
        title: "Faster Daily Reporting",
        body: "Capture important field information without unnecessary back-and-forth.",
      },
      {
        title: "Better Project Records",
        body: "Maintain a consistent history of daily activity.",
      },
      {
        title: "Clearer Team Visibility",
        body: "Help office and field teams stay aligned on what is happening.",
      },
      {
        title: "Stronger Project Documentation",
        body: "Keep important daily information organized and connected.",
      },
    ],
  },
  fieldOps: {
    headline: "Connected to Your Field Operations Workflow.",
    body: "Keep daily reporting connected to the workflows your teams use throughout the project.",
    activeSlug: "daily-logs",
    cards: [
      {
        slug: "daily-logs",
        category: FO,
        title: "Daily Logs",
        body: "Daily field logs with weather, manpower, and attachments.",
      },
      {
        slug: "drawings",
        category: FO,
        title: "Drawings",
        body: "Keep drawing information available to field teams.",
      },
      {
        slug: "punch",
        category: FO,
        title: "Punch",
        body: "Track field items and completion work.",
      },
      {
        slug: "t-and-m",
        category: FO,
        title: "T&M",
        body: "Document time and material activity.",
      },
      {
        slug: "safety",
        category: FO,
        title: "Safety",
        body: "Keep safety activity connected to project work.",
      },
      {
        slug: "mobile",
        category: FO,
        title: "Mobile",
        body: "Bring essential field workflows to the jobsite.",
      },
    ],
  },
  finalCta: {
    headline: "Keep Every Workday Connected to the Project.",
    supporting:
      "Give field and office teams a clearer daily record of the work, conditions, and activity happening across the jobsite.",
    primary: { label: "Explore Field Operations", href: FIELD_OPS },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
  },
} as const;
