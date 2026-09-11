/**
 * Customer Portals feature detail — Business Growth module.
 * Controlled client-facing layer connected to project workflows.
 * Four documented portal experiences: Owner, Subcontractor, Vendor, Architect.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

const GROWTH = `${ROUTES.features}#growth`;
const BG_LABEL = "Business Growth";
const PM = "Project Management";

type AccessLevel = "View" | "Restricted" | "Full Access";

export const customerPortalsFeatureDetail = {
  meta: {
    title: "Customer Portals | Vertex CMS Features",
    description:
      "Give clients and project stakeholders secure, controlled access to project updates, documents, RFIs, submittals, and approvals — connected to Vertex CMS project workflows.",
    canonical: `${ROUTES.features}/customer-portals`,
  },
  hero: {
    eyebrow: BG_LABEL,
    headline: "Give every client a clear, connected view of their project.",
    supporting:
      "Give clients and project stakeholders secure access to the information, updates, documents, and decisions that matter—without adding more work for your team.",
    primary: { label: CTAS.demo.label, href: CTAS.demo.href },
    secondary: { label: "Explore Business Growth", href: GROWTH },
    preview: "cpHero" as PreviewKey,
  },
  capabilities: {
    headline: "Key capabilities",
    items: [
      { title: "Client project access", body: "Dedicated client-facing workspaces scoped to assigned projects and stakeholder roles." },
      { title: "Role-based permissions", body: "Control what owners, architects, subcontractors, vendors, and other stakeholders can see and do." },
      { title: "Project updates", body: "Publish progress updates and milestone context that stay connected to the project record." },
      { title: "Document access", body: "Share plans, specifications, reports, and submittals with the right stakeholders at the right time." },
      { title: "RFI visibility", body: "Keep RFIs visible to the roles that need them — with responses updating project records." },
      { title: "Submittal visibility", body: "Route submittal upload and architect review through portal workflows tied to project status." },
      { title: "Approval workflows", body: "Pay applications, change orders, drawing revisions, and other documented approvals stay in the project." },
      { title: "Connected project activity", body: "Portal actions and updates flow back into the broader Vertex CMS project environment." },
    ],
  },
  howItWorks: {
    headline: "How it works",
    steps: [
      {
        n: "01",
        title: "Create the portal",
        body: "Create a dedicated client-facing project workspace for each assigned stakeholder group.",
      },
      {
        n: "02",
        title: "Control access",
        body: "Choose what each stakeholder can see and access — from overview and documents to approvals and submittals.",
      },
      {
        n: "03",
        title: "Keep information current",
        body: "Connect portal visibility to the project's current information, updates, and workflow status.",
      },
      {
        n: "04",
        title: "Keep decisions moving",
        body: "Give clients and partners a clear place to review, respond, and approve where applicable.",
      },
    ],
  },
  controlledAccess: {
    headline: "Give every stakeholder the right level of access.",
    body: "Keep clients, owners, architects, and other project stakeholders connected to the information they need—while keeping internal project controls in place.",
    preview: "cpPermissions" as PreviewKey,
    roles: ["Owner", "Client", "Architect", "Subcontractor", "Vendor", "Other Stakeholder"],
    permissions: [
      "Project Overview",
      "Documents",
      "Drawings",
      "RFIs",
      "Submittals",
      "Updates",
      "Approvals",
    ],
    matrix: [
      { permission: "Project Overview", levels: ["Full Access", "Full Access", "View", "Restricted", "Restricted", "View"] as AccessLevel[] },
      { permission: "Documents", levels: ["Full Access", "Full Access", "Full Access", "Restricted", "View", "View"] as AccessLevel[] },
      { permission: "Drawings", levels: ["View", "View", "Full Access", "Restricted", "View", "View"] as AccessLevel[] },
      { permission: "RFIs", levels: ["View", "View", "Full Access", "Full Access", "Restricted", "Restricted"] as AccessLevel[] },
      { permission: "Submittals", levels: ["View", "View", "Full Access", "Full Access", "Restricted", "Restricted"] as AccessLevel[] },
      { permission: "Updates", levels: ["Full Access", "Full Access", "View", "View", "View", "View"] as AccessLevel[] },
      { permission: "Approvals", levels: ["Full Access", "Full Access", "Full Access", "Restricted", "Restricted", "Restricted"] as AccessLevel[] },
    ],
  },
  projectVisibility: {
    headline: "Give clients a clearer view of the project.",
    body: "Clients can see relevant project information in one connected place instead of relying on scattered updates and separate communication.",
    preview: "cpPortalScreen" as PreviewKey,
  },
  activity: {
    headline: "Keep project conversations connected to the work.",
    body: "Project activity stays tied to the work it relates to — updates, documents, RFIs, submittals, and approval requests in one connected feed.",
    preview: "cpActivity" as PreviewKey,
  },
  darkShowcase: {
    headline: "Keep clients connected without giving up control.",
    body: "Give stakeholders the visibility they need while your team controls the information, access, and workflows behind the project.",
    preview: "cpShowcase" as PreviewKey,
    items: [
      "Assigned project scope only — no tenant-wide access",
      "Role-specific navigation for Owner, Subcontractor, Vendor, and Architect portals",
      "Documented approval actions for pay apps, change orders, and design reviews",
      "E-signatures with IP, timestamp, and certificate on compliance documents",
      "Portal actions update underlying project workflow status",
    ],
  },
  approvals: {
    headline: "Keep decisions moving without leaving the project.",
    body: "Relevant stakeholder decisions stay connected to project work — with clear status, due dates, and comments on each request.",
    preview: "cpApprovals" as PreviewKey,
  },
  documents: {
    headline: "Put the right project information in the right hands.",
    body: "Share plans, specifications, schedules, and project reports through controlled portal access — scoped to each stakeholder's role.",
    preview: "cpDocuments" as PreviewKey,
  },
  clientExperience: {
    headline: "A better client experience, without more work for your team.",
    cards: [
      {
        n: "01",
        title: "Clearer project visibility",
        body: "Clients can find relevant project information without asking your team for every update.",
      },
      {
        n: "02",
        title: "Fewer repetitive updates",
        body: "Keep project information connected so teams spend less time repeating the same status information.",
      },
      {
        n: "03",
        title: "Faster stakeholder decisions",
        body: "Make relevant requests and approvals easier to review in one connected workspace.",
      },
      {
        n: "04",
        title: "More professional client experience",
        body: "Give every project stakeholder a consistent, organized project workspace.",
      },
    ],
  },
  stakeholderPortals: {
    headline: "Four documented portal experiences for external stakeholders.",
    body: "Owner, Subcontractor, Vendor, and Architect portals each expose the workflows and information documented for that role — scoped to assigned project work.",
    tabs: [
      { id: "owner", label: "Owner", preview: "cpOwnerPortal" as PreviewKey },
      { id: "sub", label: "Subcontractor", preview: "cpSubPortal" as PreviewKey },
      { id: "vendor", label: "Vendor", preview: "cpVendorPortal" as PreviewKey },
      { id: "architect", label: "Architect", preview: "cpArchitectPortal" as PreviewKey },
    ],
  },
  connectedWorkflows: {
    headline: "Customer Portals connected to your project workflows.",
    body: "Portal access and actions stay tied to the project modules your team already manages in Vertex CMS.",
    cards: [
      { slug: "projects", category: PM, title: "Projects", body: "Portal workspaces are scoped to assigned projects with role-specific navigation and visibility." },
      { slug: "documents", category: PM, title: "Documents", body: "Shared documents and attachments flow through portal access controls to the right stakeholders." },
      { slug: "rfis", category: PM, title: "RFIs", body: "Subcontractors and architects work RFIs through their portal — responses update project records." },
      { slug: "submittals", category: PM, title: "Submittals", body: "Submittal upload and architect review update submittal status and trigger project notifications." },
      { slug: "drawings", category: PM, title: "Drawings", body: "Drawing revisions and architect approval stay connected to the project record." },
      { slug: "change-orders", category: PM, title: "Change Orders", body: "Owner approval in the portal advances the change order workflow." },
    ],
  },
  productWorkflow: {
    headline: "From project setup to connected stakeholder collaboration.",
    supporting: "Visibility → controlled access → project communication → review and approval → connected workflows.",
    steps: [
      "Project",
      "Select stakeholders",
      "Control access",
      "Share project information",
      "Review / respond",
      "Keep project moving",
    ],
  },
  fullPortalShowcase: {
    headline: "A professional client-facing project experience.",
    body: "Bring project updates, information, documents, and relevant decisions together in one controlled workspace.",
    preview: "cpFullPortal" as PreviewKey,
  },
  outcomes: {
    headline: "Built for better client relationships.",
    cards: [
      { n: "01", title: "More visibility", body: "Stakeholders see the project information relevant to their role without opening the entire workspace." },
      { n: "02", title: "Better communication", body: "Updates and activity stay connected to the work they relate to." },
      { n: "03", title: "Clearer decisions", body: "Approvals and reviews happen in context — with status tracked on the project record." },
      { n: "04", title: "Less coordination overhead", body: "Teams spend less time chasing status updates and repeating the same project information." },
    ],
  },
  explore: {
    eyebrow: BG_LABEL,
    headline: "Explore related Business Growth workflows.",
    body: "Connect customer portals with CRM, lead capture, and public web presence across your business growth workflows.",
    activeSlug: "customer-portals",
    cards: [
      {
        slug: "crm",
        category: BG_LABEL,
        title: "CRM",
        body: "Manage opportunities, customer records, and pipeline visibility in one connected workspace.",
      },
      {
        slug: "leads",
        category: BG_LABEL,
        title: "Leads",
        body: "Capture and move new opportunities forward.",
      },
      {
        slug: "website-builder",
        category: BG_LABEL,
        title: "Website Builder",
        body: "Publish tenant website pages and custom domains connected to CMS data.",
      },
      {
        slug: "customer-portals",
        category: BG_LABEL,
        title: "Customer Portals",
        body: "Give clients and stakeholders controlled access to project information and workflows.",
      },
    ],
  },
  finalCta: {
    headline: "Give every client a clearer project experience.",
    supporting:
      "Connect clients to the information they need while keeping your team in control of the project.",
    primary: { label: CTAS.demo.label, href: CTAS.demo.href },
    secondary: { label: "Explore Business Growth", href: GROWTH },
  },
} as const;
