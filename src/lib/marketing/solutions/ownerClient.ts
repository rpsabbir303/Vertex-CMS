/**
 * Owner / Client solution page content.
 * Source: SOLUTION_DETAILS.owners, customerPortalsDetail, Owner Portal mockups
 * (Overview, Budget, Schedule, Photos, Pay Applications, Change Orders, Invoices, Warranty),
 * AIA Pay Applications, Change Orders, AI Feature pages.
 * Does not invent unsupported product functionality, metrics, or testimonials.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "@/lib/marketing/features/register";
import { SOLUTION_DETAILS } from "./data";

const OWNER = SOLUTION_DETAILS.owners;

export const ownerPageMeta = {
  title: "Owner & Client Software | VertexBuild Solutions",
  description:
    "VertexBuild gives Owners and Clients a controlled view of assigned projects — visibility, financial oversight, collaboration, and approvals without full workspace access.",
  canonical: ROUTES.solutionsOwners,
} as const;

export const ownerHero = {
  eyebrow: "Solution · Owner / Client",
  headline: "See the project without managing the project.",
  supporting: OWNER.body,
  primary: { label: CTAS.trial.label, href: CTAS.trial.href },
  secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
  preview: "cpShowcase" as PreviewKey,
  previewLabel: "Owner / client portal",
  overlayPreview: "cpOwnerPortal" as PreviewKey,
  overlayLabel: "Pending decisions",
  chips: [
    { label: "Project Visibility", href: `${ROUTES.features}/customer-portals` },
    { label: "Financial Oversight", href: `${ROUTES.features}/aia-pay-applications` },
    { label: "Collaboration", href: `${ROUTES.features}/customer-portals` },
    { label: "Approvals", href: `${ROUTES.features}/customer-portals` },
  ],
} as const;

export const ownerVisibility = {
  eyebrow: "Owner view",
  headline: "See what matters. Without the noise.",
  supporting:
    "The Owner Portal keeps dashboard, budget, schedule, photos, invoices, and project information connected — scoped to the assigned project, not the internal workspace.",
  views: [
    {
      id: "dashboard",
      label: "Dashboard",
      body: "Status, updates, and the current phase in one place.",
      preview: "cpPortalScreen" as PreviewKey,
    },
    {
      id: "budget",
      label: "Read-only budget",
      body: "See committed project budget context without editing job cost.",
      preview: "cpOwnerPortal" as PreviewKey,
    },
    {
      id: "schedule",
      label: "Schedule",
      body: "Milestone and look-ahead context for the assigned project.",
      preview: "scheduleLookahead" as PreviewKey,
    },
    {
      id: "photos",
      label: "Photos",
      body: "Visual progress connected to the project record.",
      preview: "dailyLogPhotos" as PreviewKey,
    },
    {
      id: "invoices",
      label: "Invoices",
      body: "Invoice activity visible in the Owner Portal.",
      preview: "cpOwnerPortal" as PreviewKey,
    },
    {
      id: "info",
      label: "Project information",
      body: "Documents, reports, and project context for the assigned scope.",
      preview: "cpDocuments" as PreviewKey,
    },
  ],
} as const;

export const ownerAccess = {
  eyebrow: "Controlled access",
  headline: "The right project. The right information. The right access.",
  supporting:
    "Portal users see assigned project scope only — not tenant-wide access. Role-specific navigation keeps owners and clients focused on the information documented for their portal.",
  preview: "cpPermissions" as PreviewKey,
  stages: [
    {
      id: "project",
      label: "Right project",
      body: "Workspaces are scoped to assigned projects.",
    },
    {
      id: "information",
      label: "Right information",
      body: "Overview, documents, updates, and approvals stay connected to that project.",
    },
    {
      id: "access",
      label: "Right access",
      body: "What each stakeholder can see and do stays role-specific.",
    },
  ],
  note: "Assigned project scope only — no tenant-wide access.",
  href: `${ROUTES.features}/customer-portals`,
} as const;

export const ownerFinancials = {
  eyebrow: "Financial oversight",
  headline: "See budget, billing, and pay applications in context.",
  supporting:
    "Owners review read-only budget, invoices, draw requests, and pay applications in the portal — connected to VertexBuild billing and AIA pay application workflows.",
  path: [
    { id: "budget", label: "Budget", preview: "cpOwnerPortal" as PreviewKey },
    { id: "billing", label: "Billing", preview: "cpOwnerPortal" as PreviewKey },
    { id: "pay-app", label: "Pay application", preview: "payAppReview" as PreviewKey, previewDark: true },
    { id: "approval", label: "Approval", preview: "cpApprovals" as PreviewKey },
    { id: "visibility", label: "Financial visibility", preview: "cpShowcase" as PreviewKey },
  ],
  modules: [
    { label: "Read-only budget", href: `${ROUTES.features}/customer-portals` },
    { label: "Invoices", href: `${ROUTES.features}/billing` },
    { label: "AIA Pay Applications", href: `${ROUTES.features}/aia-pay-applications` },
    { label: "Draw requests", href: `${ROUTES.features}/customer-portals` },
  ],
} as const;

export const ownerApprovals = {
  eyebrow: "Approvals",
  headline: "A decision in the portal moves the project workflow.",
  supporting:
    "Review pay applications with comments, then approve or reject. Portal actions update the underlying project workflow status.",
  preview: "cpOwnerPortal" as PreviewKey,
  listPreview: "cpApprovals" as PreviewKey,
  states: [
    { id: "pending", label: "Owner pay-app pending" },
    { id: "approved", label: "Approved" },
    { id: "rejected", label: "Rejected" },
  ],
  actions: ["Approve", "Reject", "Comment"] as const,
  href: `${ROUTES.features}/aia-pay-applications`,
} as const;

export const ownerDecisions = {
  eyebrow: "Change orders + decisions",
  headline: "Review the change with the context that belongs to it.",
  supporting:
    "Owner approval in the portal advances the change order workflow. See project information, financial context, and comments before the decision.",
  stages: [
    {
      id: "context",
      label: "Context",
      body: "Project and contract information sit with the change.",
      preview: "changeOrderContext" as PreviewKey,
      previewDark: true,
    },
    {
      id: "review",
      label: "Review",
      body: "Description, status, and cost impact stay on the record.",
      preview: "changeOrderDetail" as PreviewKey,
      previewDark: true,
    },
    {
      id: "decision",
      label: "Decision",
      body: "Approve or reject in the Owner Portal — with comments where supported.",
      preview: "cpOwnerPortal" as PreviewKey,
    },
  ],
  href: `${ROUTES.features}/change-orders`,
} as const;

export const ownerCollaboration = {
  eyebrow: "Project collaboration",
  headline: "One place to understand status and activity.",
  supporting:
    "Dashboard, schedule, photos, documents, invoices, pay applications, and change orders stay in the same Owner / Client workspace — connected to the project already managed in VertexBuild.",
  views: [
    { id: "dashboard", label: "Dashboard", preview: "cpFullPortal" as PreviewKey },
    { id: "schedule", label: "Schedule", preview: "scheduleGantt" as PreviewKey },
    { id: "photos", label: "Photos", preview: "dailyLogPhotos" as PreviewKey },
    { id: "documents", label: "Documents", preview: "cpDocuments" as PreviewKey },
    { id: "invoices", label: "Invoices", preview: "cpOwnerPortal" as PreviewKey },
    { id: "pay-apps", label: "Pay applications", preview: "cpApprovals" as PreviewKey },
    { id: "changes", label: "Change orders", preview: "changeOrderRegister" as PreviewKey, previewDark: true },
  ],
} as const;

export const ownerWarranty = {
  eyebrow: "Warranty",
  headline: "Submit a claim against the assigned project.",
  supporting:
    "The Owner Portal includes warranty. Capture a claim with a description and photos, then submit it to the project record.",
  preview: "cpOwnerWarranty" as PreviewKey,
  steps: ["Warranty Claim", "Description", "Photos", "Submission"] as const,
  href: `${ROUTES.features}/customer-portals`,
} as const;

export const ownerAi = {
  eyebrow: "AI + intelligence",
  headline: "Ask the project you can see — then confirm before anything is written.",
  supporting:
    "Use AI Assistant, Project Intelligence, Predictive Insights, Document Intelligence, and Automation on assigned project information. Access is permission-aware. Tool calls are logged. Write actions require a plain-English summary and explicit human confirmation.",
  note: "AI assists users and does not replace human review. AI cannot delete records.",
  stages: [
    {
      id: "data",
      label: "Data",
      body: "Grounded in the project, documents, and financial records already in VertexBuild — scoped to what the user can access.",
      preview: "aiGrounded" as PreviewKey,
    },
    {
      id: "intelligence",
      label: "Intelligence",
      body: "See status, risk, and document context without leaving the project.",
      preview: "piWorkspace" as PreviewKey,
    },
    {
      id: "action",
      label: "Action",
      body: "Automation can prepare the next step — with logging and confirmation before execution.",
      preview: "autoApproval" as PreviewKey,
    },
  ],
  modules: [
    { label: "AI Assistant", href: `${ROUTES.features}/ai-assistant` },
    { label: "Project Intelligence", href: `${ROUTES.features}/project-intelligence` },
    { label: "Predictive Insights", href: `${ROUTES.features}/predictive-insights` },
    { label: "Document Intelligence", href: `${ROUTES.features}/document-intelligence` },
    { label: "Automation", href: `${ROUTES.features}/automation` },
  ],
} as const;

export const ownerExperience = {
  eyebrow: "One connected owner experience",
  headline: "Visibility, oversight, and decisions in one portal.",
  supporting:
    "Owners and clients stay connected to the project without managing every underlying construction operation.",
  areas: [
    {
      id: "visibility",
      label: "Project visibility",
      preview: "cpShowcase" as PreviewKey,
      items: ["Dashboard", "Schedule", "Photos", "Documents"],
    },
    {
      id: "oversight",
      label: "Financial oversight",
      preview: "cpOwnerPortal" as PreviewKey,
      items: ["Read-only budget", "Invoices", "Pay applications", "Draw requests"],
    },
    {
      id: "collaboration",
      label: "Collaboration",
      preview: "cpActivity" as PreviewKey,
      items: ["Updates", "Documents", "Project information"],
    },
    {
      id: "approvals",
      label: "Approvals",
      preview: "cpApprovals" as PreviewKey,
      items: ["Pay applications", "Comments", "Approve / reject"],
    },
    {
      id: "decisions",
      label: "Decisions",
      preview: "changeOrderDetail" as PreviewKey,
      previewDark: true,
      items: ["Change orders", "Project context", "Workflow status"],
    },
  ],
} as const;

export const ownerCta = {
  headline: "See VertexBuild from the owner and client side.",
  supporting: "Walk through the portal, approvals, and project visibility — or start a free trial.",
  primary: { label: CTAS.demo.label, href: CTAS.demo.href },
  secondary: { label: CTAS.trial.label, href: CTAS.trial.href },
} as const;
