/**
 * Mobile feature detail — Field Operations mobile access.
 * Source: featureAreas fo-mobile (LOG, DWG, SAFETY, TM, PUNCH).
 *
 * No offline mode, GPS/worker tracking, geofencing, push notifications,
 * device management, biometric tracking, or AI mobile assistant claims.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

const FIELD_OPS = `${ROUTES.features}#field-operations`;
const FO = "Field Operations";

export const mobileFeatureDetail = {
  meta: {
    title: "Mobile | Vertex CMS Features",
    description:
      "Access daily logs, drawings, photos, punch, T&M, and safety workflows from mobile devices connected to the Vertex CMS project record.",
    canonical: `${ROUTES.features}/mobile`,
  },
  hero: {
    eyebrow: "Field Operations",
    headline: "Bring Project Work to the Jobsite.",
    supporting:
      "Give field teams access to the project information and workflows they need, wherever the work happens.",
    description:
      "Vertex CMS brings essential field workflows into a connected mobile experience, helping teams capture updates, review project information, document work, and stay connected with the office from the jobsite.",
    primary: { label: "Explore Field Operations", href: FIELD_OPS },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
    preview: "mobileHome" as PreviewKey,
  },
  nav: [
    { id: "mobile-overview", label: "Overview" },
    { id: "mobile-access", label: "Field Access" },
    { id: "mobile-daily", label: "Daily Work" },
    { id: "mobile-info", label: "Project Information" },
    { id: "mobile-workflows", label: "Connected Workflows" },
    { id: "mobile-outcomes", label: "Outcomes" },
  ] as const,
  intro: {
    headline: "Put Essential Project Work Within Reach.",
    body: "Field teams should not have to leave the jobsite to keep project information current. Give them a focused mobile experience for the workflows they use throughout the workday.",
    points: [
      {
        title: "Work From the Field",
        body: "Access and update project information while work is happening.",
      },
      {
        title: "Capture Information",
        body: "Record field activity, photos, issues, and other supported project information directly from the jobsite.",
      },
      {
        title: "Stay Connected",
        body: "Keep field activity connected to the broader Vertex CMS project record.",
      },
    ],
  },
  workspace: {
    headline: "One Mobile Workspace for Field Operations.",
    body: "Bring essential field workflows together so teams can move between project information and field activity without switching between disconnected tools.",
    preview: "mobileWorkspace" as PreviewKey,
  },
  dashboard: {
    eyebrow: "Field Access",
    headline: "Start the Day With the Information That Matters.",
    body: "Give field teams a focused view of project activity and quick access to the workflows they use most.",
    preview: "mobileDashboard" as PreviewKey,
  },
  dailyWork: {
    eyebrow: "Daily Work",
    headline: "Capture the Work While You're Still on Site.",
    body: "Give field teams convenient access to the daily workflows they use to document project activity and keep records current.",
    items: [
      {
        title: "Daily Logs",
        body: "Document work completed and field conditions.",
      },
      {
        title: "Photos",
        body: "Capture visual project updates.",
      },
      {
        title: "Punch",
        body: "Create or update field items.",
      },
      {
        title: "T&M",
        body: "Record supported time and material activity.",
      },
    ],
    preview: "mobileDailyLog" as PreviewKey,
    cta: { label: "Explore Daily Logs", href: `${ROUTES.features}/daily-logs` },
  },
  projectInfo: {
    headline: "Keep Project Information Close to the Work.",
    body: "Help field teams reference the project information they need without leaving the jobsite.",
    blocks: [
      {
        title: "Drawings",
        body: "Reference project drawings and relevant information while working in the field.",
        preview: "mobileDrawing" as PreviewKey,
        label: "Drawing viewer",
      },
      {
        title: "Documents",
        body: "Access supported project documentation when additional context is needed.",
        preview: "mobilePhotos" as PreviewKey,
        label: "Supporting files",
      },
      {
        title: "Project Records",
        body: "Keep field activity connected to the appropriate project record.",
        preview: "mobileHome" as PreviewKey,
        label: "Project information",
      },
    ],
    cta: { label: "Explore Drawings", href: `${ROUTES.features}/drawings` },
  },
  capture: {
    headline: "Capture Information Where It Happens.",
    body: "Mobile access makes it easier for field teams to document project activity while the details are current.",
    panels: [
      {
        title: "Fast Capture",
        body: "Record information directly from the field.",
      },
      {
        title: "Project Context",
        body: "Keep entries connected to the right project.",
      },
      {
        title: "Supporting Evidence",
        body: "Add relevant photos and documentation where supported.",
      },
    ],
    preview: "mobileCapture" as PreviewKey,
  },
  chain: {
    headline: "One Mobile Experience Across Field Operations.",
    body: "Move between the workflows your teams already use without losing the connection between field activity and project information.",
    preview: "mobileChain" as PreviewKey,
  },
  connected: {
    eyebrow: "Connected Project Information",
    headline: "What Happens in the Field Stays Connected to the Project.",
    body: "Keep mobile updates connected to the broader project workflow so field and office teams can work from the same project information.",
    preview: "mobileFlow" as PreviewKey,
  },
  dayStory: {
    headline: "Move Through the Workday Without Losing Context.",
    body: "Show how a field team member might move through multiple workflows during a normal project day.",
    stages: [
      {
        n: "01",
        title: "Check the project",
        body: "Review current project information and today's activity.",
        preview: "mobileDashboard" as PreviewKey,
        label: "Project overview",
      },
      {
        n: "02",
        title: "Document the work",
        body: "Create a daily log and capture relevant field updates.",
        preview: "mobileDailyLog" as PreviewKey,
        label: "Daily log",
      },
      {
        n: "03",
        title: "Record issues",
        body: "Create or update punch and safety items when needed.",
        preview: "mobilePunch" as PreviewKey,
        label: "Punch item",
      },
      {
        n: "04",
        title: "Keep the project current",
        body: "Keep field information connected to the project record.",
        preview: "mobileSafety" as PreviewKey,
        label: "Safety observation",
      },
    ],
  },
  outcomes: {
    headline: "Built for Teams Working in the Field.",
    cards: [
      {
        title: "Faster Field Updates",
        body: "Capture information while work is happening instead of waiting until later.",
      },
      {
        title: "Better Field Visibility",
        body: "Give teams access to the project information they need on site.",
      },
      {
        title: "Less Back-and-Forth",
        body: "Keep field and office teams connected through a shared project workflow.",
      },
      {
        title: "More Current Project Records",
        body: "Keep important field information connected to the project.",
      },
    ],
  },
  whyMobile: {
    headline: "The Project Doesn't Stop When You Leave the Office.",
    body: "Construction happens in the field. Give the people doing the work a connected way to access information and keep project records current.",
    statements: [
      {
        title: "Work Where the Work Happens",
        body: "Capture information directly from the jobsite.",
      },
      {
        title: "Keep Information Close",
        body: "Access the project information teams need.",
      },
      {
        title: "Stay Connected",
        body: "Keep field activity connected to the project team.",
      },
    ],
    preview: "mobileHome" as PreviewKey,
  },
  fieldOps: {
    eyebrow: "Field Operations",
    headline: "Everything Your Field Team Needs to Stay Connected.",
    body: "Explore the connected Field Operations capabilities available across Vertex CMS.",
    activeSlug: "mobile",
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
        body: "Current drawings and markup for field and office teams.",
      },
      {
        slug: "punch",
        category: FO,
        title: "Punch",
        body: "Punch lists and items for quality completion and closeout.",
      },
      {
        slug: "t-and-m",
        category: FO,
        title: "T&M",
        body: "Time & material field tickets and line items.",
      },
      {
        slug: "safety",
        category: FO,
        title: "Safety",
        body: "Incidents, inspections, toolbox talks, and JHA/JSA.",
      },
      {
        slug: "mobile",
        category: FO,
        title: "Mobile",
        body: "Mobile-first field workflows connected to the project.",
      },
    ],
  },
  finalCta: {
    headline: "Bring Vertex CMS to the Jobsite.",
    supporting:
      "Give field teams the connected project information and workflows they need to keep work moving from the field to the office.",
    primary: { label: "Explore Field Operations", href: FIELD_OPS },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
  },
} as const;
