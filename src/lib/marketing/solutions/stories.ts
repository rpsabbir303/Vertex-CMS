/**
 * Shared RoomMaster-inspired story models for all six solution pages.
 * Copy and previews are composed from documented solution content — nothing invented.
 */

import { ROUTES } from "@/lib/marketing/navigation";
import { civilCta, civilDocuments, civilField, civilHero, civilPlan, civilWorkforce } from "./civilInfrastructure";
import { commercialCoordination, commercialCta, commercialField, commercialHero, commercialOwner } from "./commercialConstruction";
import { gcCta, gcExperience, gcFieldOffice, gcFinancials, gcHero, gcOperating, gcProjects, gcSubs } from "./generalContractor";
import { ownerAccess, ownerCta, ownerDecisions, ownerExperience, ownerFinancials, ownerHero, ownerVisibility, ownerWarranty } from "./ownerClient";
import { residentialChange, residentialCta, residentialField, residentialHero, residentialOwner, residentialPlan } from "./residentialConstruction";
import { scCta, scField, scFinancials, scHero, scWorkforce } from "./specialtyContractor";
import type { SolutionStoryModel } from "./storyTypes";
import { SOLUTION_DETAILS } from "./data";

const SC = SOLUTION_DETAILS["specialty-contractors"];
const OWNER = SOLUTION_DETAILS.owners;
const COMMERCIAL = SOLUTION_DETAILS.commercial;
const RESIDENTIAL = SOLUTION_DETAILS.residential;
const CIVIL = SOLUTION_DETAILS.civil;

export const generalContractorStory: SolutionStoryModel = {
  hero: {
    eyebrow: gcHero.eyebrow,
    headline: gcHero.headline,
    supporting: gcHero.supporting,
    answer: gcHero.answer,
    primary: gcHero.primary,
    secondary: gcHero.secondary,
    preview: gcHero.preview,
    previewLabel: gcHero.previewLabel,
    overlayPreview: gcHero.overlayPreview,
    overlayLabel: gcHero.overlayLabel,
    manages: [...gcHero.manages],
  },
  bento: {
    eyebrow: gcOperating.eyebrow,
    headline: gcOperating.headline,
    supporting: gcOperating.supporting,
    items: gcOperating.areas.map((item) => ({
      id: item.id,
      label: item.label,
      story: item.story,
      preview: item.preview,
      href: item.href,
    })),
  },
  splits: [
    {
      kind: "moments",
      eyebrow: gcProjects.eyebrow,
      headline: gcProjects.headline,
      supporting: gcProjects.supporting,
      href: gcProjects.href,
      linkLabel: "Explore project management",
      moments: gcProjects.moments.map((item) => ({
        id: item.id,
        label: item.label,
        body: item.body,
        preview: item.preview,
      })),
    },
    {
      kind: "pair",
      reverse: true,
      eyebrow: gcFinancials.eyebrow,
      headline: gcFinancials.headline,
      supporting: gcFinancials.supporting,
      href: gcFinancials.href,
      linkLabel: "Explore financial management",
      left: gcFinancials.activity,
      right: gcFinancials.visibility,
      bridge: "Visible in",
    },
    {
      kind: "moments",
      eyebrow: gcSubs.eyebrow,
      headline: gcSubs.headline,
      supporting: gcSubs.supporting,
      href: gcSubs.href,
      linkLabel: "Explore subcontractors",
      moments: gcSubs.flow.map((item) => ({
        id: item.id,
        label: item.label,
        body: item.body,
        preview: item.preview,
      })),
    },
  ],
  process: {
    eyebrow: gcFieldOffice.eyebrow,
    headline: gcFieldOffice.headline,
    supporting: gcFieldOffice.supporting,
    stages: gcFieldOffice.stages.map((item) => ({
      id: item.id,
      label: item.label,
      body: item.body,
      preview: item.preview,
      phone: item.phone,
    })),
  },
  showcase: {
    eyebrow: gcExperience.eyebrow,
    headline: gcExperience.headline,
    supporting: gcExperience.supporting,
    preview: gcExperience.preview,
    previewLabel: gcExperience.previewLabel,
    satellites: [...gcExperience.satellites],
  },
  cta: gcCta,
};

export const specialtyContractorStory: SolutionStoryModel = {
  hero: {
    eyebrow: scHero.eyebrow,
    headline: scHero.headline,
    supporting: scHero.supporting,
    answer:
      "VertexBuild helps a Specialty Contractor keep field activity, labor, and billing aligned with the same project record.",
    primary: scHero.primary,
    secondary: scHero.secondary,
    preview: scHero.preview,
    previewLabel: scHero.previewLabel,
    overlayPreview: scHero.overlayPreview,
    overlayLabel: scHero.overlayLabel,
    manages: [...scHero.chips],
  },
  bento: {
    eyebrow: "The specialty operating model",
    headline: "Field, labor, billing, and the project stay connected.",
    supporting: SC.body,
    items: [
      {
        id: "field",
        label: "Field operations",
        story: "Capture the work on site against the same project the office uses.",
        preview: "dailyLogDashboard",
        href: `${ROUTES.features}#field-operations`,
      },
      {
        id: "workforce",
        label: "Workforce",
        story: "Hours, crews, and timesheets stay with the work.",
        preview: "wfOverview",
        href: `${ROUTES.features}/workforce`,
      },
      {
        id: "billing",
        label: "Billing",
        story: "Field activity should already be visible in billing and cost.",
        preview: "billingWorkspace",
        href: `${ROUTES.features}/billing`,
      },
      {
        id: "projects",
        label: "Projects",
        story: "The specialty job remains one workspace — not a side spreadsheet.",
        preview: "projectDashboard",
        href: `${ROUTES.features}/projects`,
      },
    ],
  },
  splits: [
    {
      kind: "moments",
      eyebrow: scField.eyebrow,
      headline: scField.headline,
      supporting: scField.supporting,
      href: `${ROUTES.features}#field-operations`,
      linkLabel: "Explore field operations",
      moments: scField.stages.slice(0, 3).map((item, i) => ({
        id: item.id,
        label: item.label,
        body: item.body,
        preview: item.preview,
        phone: i === 0,
      })),
    },
    {
      kind: "moments",
      reverse: true,
      eyebrow: scWorkforce.eyebrow,
      headline: scWorkforce.headline,
      supporting: scWorkforce.supporting,
      href: `${ROUTES.features}/workforce`,
      linkLabel: "Explore workforce",
      moments: scWorkforce.views.map((item) => ({
        id: item.id,
        label: item.label,
        body: item.body,
        preview: item.preview,
      })),
    },
    {
      kind: "pair",
      eyebrow: scFinancials.eyebrow,
      headline: scFinancials.headline,
      supporting: scFinancials.supporting,
      href: `${ROUTES.features}#financial-management`,
      linkLabel: "Explore financial management",
      left: {
        label: "Project activity",
        body: "Tickets, hours, and field work already live on the project.",
        preview: "tmTicket",
      },
      right: {
        label: "Billing visibility",
        body: "Cost and billing stay attached to that same work.",
        preview: "billingWorkspace",
      },
      bridge: "Visible in",
    },
  ],
  process: {
    eyebrow: "Field → office",
    headline: "What the crew captures should already be available to the office.",
    supporting: scField.supporting,
    stages: scField.stages.map((item, i) => ({
      id: item.id,
      label: item.label,
      body: item.body,
      preview: item.preview,
      phone: i === 0,
    })),
  },
  showcase: {
    eyebrow: "Product experience",
    headline: "This is the specialty workspace.",
    supporting: "Field activity, workforce, billing, and the project record stay in one VertexBuild product.",
    preview: "dailyLogDashboard",
    previewLabel: SC.previewLabel,
    satellites: [
      { label: "Workforce", preview: "wfOverview" },
      { label: "Billing", preview: "billingWorkspace" },
      { label: "Project", preview: "projectDashboard" },
    ],
  },
  cta: {
    headline: scCta.headline,
    supporting: scCta.supporting,
    primary: scCta.secondary,
    secondary: scCta.primary,
  },
};

export const ownerClientStory: SolutionStoryModel = {
  hero: {
    eyebrow: ownerHero.eyebrow,
    headline: ownerHero.headline,
    supporting: ownerHero.supporting,
    answer:
      "VertexBuild gives Owners and Clients a controlled view of assigned projects — visibility, financial oversight, and decisions without the internal workspace.",
    primary: ownerHero.primary,
    secondary: ownerHero.secondary,
    preview: ownerHero.preview,
    previewLabel: ownerHero.previewLabel,
    overlayPreview: ownerHero.overlayPreview,
    overlayLabel: ownerHero.overlayLabel,
    manages: [...ownerHero.chips],
  },
  bento: {
    eyebrow: "The owner experience",
    headline: ownerExperience.headline,
    supporting: ownerExperience.supporting,
    items: ownerExperience.areas.slice(0, 4).map((item) => ({
      id: item.id,
      label: item.label,
      story: item.items.join(" · "),
      preview: item.preview,
      dark: "previewDark" in item ? item.previewDark : undefined,
      href: `${ROUTES.features}/customer-portals`,
    })),
  },
  splits: [
    {
      kind: "moments",
      eyebrow: ownerVisibility.eyebrow,
      headline: ownerVisibility.headline,
      supporting: ownerVisibility.supporting,
      href: `${ROUTES.features}/customer-portals`,
      linkLabel: "Explore Customer Portals",
      moments: ownerVisibility.views.slice(0, 3).map((item) => ({
        id: item.id,
        label: item.label,
        body: item.body,
        preview: item.preview,
      })),
    },
    {
      kind: "pair",
      reverse: true,
      eyebrow: ownerFinancials.eyebrow,
      headline: ownerFinancials.headline,
      supporting: ownerFinancials.supporting,
      href: `${ROUTES.features}/aia-pay-applications`,
      linkLabel: "Explore pay applications",
      left: {
        label: "Read-only budget",
        body: "See committed project budget context without editing job cost.",
        preview: "cpOwnerPortal",
      },
      right: {
        label: "Pay application review",
        body: "Review, comment, and approve or reject in the portal.",
        preview: "cpApprovals",
      },
      bridge: "Then decide",
    },
    {
      kind: "moments",
      eyebrow: ownerWarranty.eyebrow,
      headline: ownerWarranty.headline,
      supporting: ownerWarranty.supporting,
      href: ownerWarranty.href,
      linkLabel: "Explore Customer Portals",
      moments: [
        {
          id: "claim",
          label: "Warranty claim",
          body: "Submit a claim against the assigned project.",
          preview: "cpOwnerWarranty",
        },
        {
          id: "description",
          label: "Description",
          body: "Capture what happened in the portal.",
          preview: "cpOwnerWarranty",
        },
        {
          id: "photos",
          label: "Photos",
          body: "Attach photos with the claim.",
          preview: "cpOwnerWarranty",
        },
      ],
    },
  ],
  process: {
    eyebrow: ownerDecisions.eyebrow,
    headline: ownerDecisions.headline,
    supporting: ownerDecisions.supporting,
    stages: [
      ...ownerAccess.stages.map((item) => ({
        id: item.id,
        label: item.label,
        body: item.body,
        preview: "cpPermissions" as const,
      })),
      {
        id: "decision",
        label: "Decision",
        body: "Approve or reject in the Owner Portal — with comments where supported.",
        preview: "cpOwnerPortal" as const,
      },
    ],
  },
  showcase: {
    eyebrow: "Product experience",
    headline: "This is the Owner / Client portal.",
    supporting: OWNER.body,
    preview: "cpShowcase",
    previewLabel: OWNER.previewLabel,
    satellites: [
      { label: "Documents", preview: "cpDocuments" },
      { label: "Approvals", preview: "cpApprovals" },
      { label: "Warranty", preview: "cpOwnerWarranty" },
    ],
  },
  cta: {
    headline: ownerCta.headline,
    supporting: ownerCta.supporting,
    primary: ownerCta.secondary,
    secondary: ownerCta.primary,
  },
};

export const commercialStory: SolutionStoryModel = {
  hero: {
    eyebrow: commercialHero.eyebrow,
    headline: commercialHero.headline,
    supporting: commercialHero.supporting,
    answer:
      "VertexBuild helps commercial teams keep project controls, field activity, financials, and owner collaboration on one record.",
    primary: commercialHero.primary,
    secondary: commercialHero.secondary,
    preview: commercialHero.preview,
    previewLabel: commercialHero.previewLabel,
    overlayPreview: commercialHero.overlayPreview,
    overlayLabel: commercialHero.overlayLabel,
    manages: [...commercialHero.chips],
  },
  bento: {
    eyebrow: "The commercial operating model",
    headline: "Project, field, financials, and collaboration stay connected.",
    supporting: COMMERCIAL.body,
    items: [
      {
        id: "project",
        label: "Project management",
        story: "Schedule, documents, and coordination sit in one commercial workspace.",
        preview: "scheduleGantt",
        href: `${ROUTES.features}/project-management`,
      },
      {
        id: "field",
        label: "Field operations",
        story: "Site activity writes back to the same commercial project.",
        preview: "dailyLogDashboard",
        href: `${ROUTES.features}#field-operations`,
      },
      {
        id: "financials",
        label: "Financial management",
        story: "Cost and billing stay visible against the work already happening.",
        preview: "projectFinancial",
        href: `${ROUTES.features}#financial-management`,
      },
      {
        id: "owner",
        label: "Owner collaboration",
        story: "Share project context without opening the internal workspace.",
        preview: "cpShowcase",
        href: `${ROUTES.features}/customer-portals`,
      },
    ],
  },
  splits: [
    {
      kind: "moments",
      eyebrow: commercialCoordination.eyebrow,
      headline: commercialCoordination.headline,
      supporting: commercialCoordination.supporting,
      href: `${ROUTES.features}/project-management`,
      linkLabel: "Explore project management",
      moments: commercialCoordination.stages.slice(0, 3).map((item) => ({
        id: item.id,
        label: item.label,
        body: item.body,
        preview: item.preview,
        dark: "previewDark" in item ? item.previewDark : undefined,
      })),
    },
    {
      kind: "moments",
      reverse: true,
      eyebrow: commercialField.eyebrow,
      headline: commercialField.headline,
      supporting: commercialField.supporting,
      href: `${ROUTES.features}#field-operations`,
      linkLabel: "Explore field operations",
      moments: commercialField.stages.slice(0, 3).map((item, i) => ({
        id: item.id,
        label: item.label,
        body: item.body,
        preview: item.preview,
        phone: i === 0,
      })),
    },
    {
      kind: "pair",
      eyebrow: "Connected financial management",
      headline: "Commercial project activity should already be visible in the numbers.",
      supporting:
        "Project financial information stays in the same platform that runs the commercial job — without recreating operations in a separate finance tool.",
      href: `${ROUTES.features}#financial-management`,
      linkLabel: "Explore financial management",
      left: {
        label: "Project activity",
        body: "The work, changes, and status already live on the project record.",
        preview: "projectDashboard",
      },
      right: {
        label: "Financial visibility",
        body: "Cost context stays attached to that same commercial project.",
        preview: "projectFinancial",
      },
      bridge: "Visible in",
    },
  ],
  process: {
    eyebrow: commercialOwner.eyebrow,
    headline: commercialOwner.headline,
    supporting: commercialOwner.supporting,
    stages: commercialOwner.stages.slice(0, 4).map((item) => ({
      id: item.id,
      label: item.label,
      body: item.body,
      preview: item.preview,
    })),
  },
  showcase: {
    eyebrow: "Product experience",
    headline: "This is the commercial workspace.",
    supporting: "Project controls, field activity, financial context, and owner collaboration stay in one product.",
    preview: "scheduleGantt",
    previewLabel: COMMERCIAL.previewLabel,
    satellites: [
      { label: "Field activity", preview: "dailyLogDashboard" },
      { label: "Documents", preview: "documentCenter" },
      { label: "Owner portal", preview: "cpShowcase" },
    ],
  },
  cta: {
    headline: commercialCta.headline,
    supporting: commercialCta.supporting,
    primary: commercialHero.primary,
    secondary: commercialHero.secondary,
  },
};

export const residentialStory: SolutionStoryModel = {
  hero: {
    eyebrow: residentialHero.eyebrow,
    headline: residentialHero.headline,
    supporting: residentialHero.supporting,
    answer:
      "VertexBuild helps residential teams keep the work, cost, and client view aligned on one project record.",
    primary: residentialHero.primary,
    secondary: residentialHero.secondary,
    preview: residentialHero.preview,
    previewLabel: residentialHero.previewLabel,
    overlayPreview: residentialHero.overlayPreview,
    overlayLabel: residentialHero.overlayLabel,
    manages: [...residentialHero.chips],
  },
  bento: {
    eyebrow: "The residential operating model",
    headline: "Work, cost, field activity, and client visibility stay connected.",
    supporting: RESIDENTIAL.body,
    items: [
      {
        id: "project",
        label: "Project management",
        story: "The residential job stays in one workspace from plan through closeout.",
        preview: "projectDashboard",
        href: `${ROUTES.features}/project-management`,
      },
      {
        id: "field",
        label: "Field operations",
        story: "What the crew captures should already be on the job.",
        preview: "dailyLogDashboard",
        href: `${ROUTES.features}#field-operations`,
      },
      {
        id: "cost",
        label: "Cost visibility",
        story: "A change should be visible in cost — not only in a conversation.",
        preview: "budgetVsActual",
        dark: true,
        href: `${ROUTES.features}/budget-job-cost`,
      },
      {
        id: "client",
        label: "Client visibility",
        story: "Give the client a controlled view — not the internal workspace.",
        preview: "cpShowcase",
        href: `${ROUTES.features}/customer-portals`,
      },
    ],
  },
  splits: [
    {
      kind: "moments",
      eyebrow: residentialPlan.eyebrow,
      headline: residentialPlan.headline,
      supporting: residentialPlan.supporting,
      href: `${ROUTES.features}/project-management`,
      linkLabel: "Explore project management",
      moments: residentialPlan.stages.slice(0, 3).map((item) => ({
        id: item.id,
        label: item.label,
        body: item.body,
        preview: item.preview,
        dark: "previewDark" in item ? item.previewDark : undefined,
      })),
    },
    {
      kind: "moments",
      reverse: true,
      eyebrow: residentialChange.eyebrow,
      headline: residentialChange.headline,
      supporting: residentialChange.supporting,
      href: `${ROUTES.features}/change-orders`,
      linkLabel: "Explore change orders",
      moments: residentialChange.stages.slice(0, 3).map((item) => ({
        id: item.id,
        label: item.label,
        body: item.body,
        preview: item.preview,
        dark: "previewDark" in item ? item.previewDark : undefined,
      })),
    },
    {
      kind: "pair",
      eyebrow: residentialOwner.eyebrow,
      headline: residentialOwner.headline,
      supporting: residentialOwner.supporting,
      href: residentialOwner.href,
      linkLabel: "Explore Customer Portals",
      left: {
        label: "Project team",
        body: "The residential team manages the project record in VertexBuild.",
        preview: "projectDashboard",
      },
      right: {
        label: "Owner / client view",
        body: "The portal shows assigned project scope — not tenant-wide access.",
        preview: "cpShowcase",
      },
      bridge: "Shared as",
    },
  ],
  process: {
    eyebrow: residentialField.eyebrow,
    headline: residentialField.headline,
    supporting: residentialField.supporting,
    stages: residentialField.stages.map((item, i) => ({
      id: item.id,
      label: item.label,
      body: item.body,
      preview: item.preview,
      phone: i === 0,
    })),
  },
  showcase: {
    eyebrow: "Product experience",
    headline: "This is the residential workspace.",
    supporting: "Project control, field execution, cost context, and client visibility stay in one product.",
    preview: "projectDashboard",
    previewLabel: RESIDENTIAL.previewLabel,
    satellites: [
      { label: "Field activity", preview: "dailyLogDashboard" },
      { label: "Cost context", preview: "budgetVsActual", dark: true },
      { label: "Owner portal", preview: "cpShowcase" },
    ],
  },
  cta: {
    headline: residentialCta.headline,
    supporting: residentialCta.supporting,
    primary: residentialHero.primary,
    secondary: residentialHero.secondary,
  },
};

export const civilInfrastructureStory: SolutionStoryModel = {
  hero: {
    eyebrow: civilHero.eyebrow,
    headline: civilHero.headline,
    supporting: civilHero.supporting,
    answer:
      "VertexBuild helps Civil / Infrastructure teams keep complex project control, field operations, documents, and financials on one connected record — without a separate infrastructure module.",
    primary: civilHero.primary,
    secondary: civilHero.secondary,
    preview: civilHero.preview,
    previewLabel: civilHero.previewLabel,
    overlayPreview: civilHero.overlayPreview,
    overlayLabel: civilHero.overlayLabel,
    manages: [...civilHero.chips],
  },
  bento: {
    eyebrow: "The civil operating model",
    headline: "Complex project information stays on one record.",
    supporting: CIVIL.body,
    items: [
      {
        id: "control",
        label: "Project control",
        story: "Scheduling and project status stay visible as civil work moves.",
        preview: "scheduleLookahead",
        href: `${ROUTES.features}/scheduling`,
      },
      {
        id: "field",
        label: "Field operations",
        story: "Site activity writes back to the same project record.",
        preview: "dailyLogDashboard",
        href: `${ROUTES.features}#field-operations`,
      },
      {
        id: "documents",
        label: "Documents + drawings",
        story: "Find the current sheet and keep the history on the project.",
        preview: "drawingViewer",
        href: `${ROUTES.features}/drawings`,
      },
      {
        id: "financials",
        label: "Financial control",
        story: "Project activity should already be visible in cost and cash.",
        preview: "projectFinancial",
        href: `${ROUTES.features}#financial-management`,
      },
    ],
  },
  splits: [
    {
      kind: "moments",
      eyebrow: civilPlan.eyebrow,
      headline: civilPlan.headline,
      supporting: civilPlan.supporting,
      href: `${ROUTES.features}/project-management`,
      linkLabel: "Explore project management",
      moments: civilPlan.stages.slice(0, 3).map((item) => ({
        id: item.id,
        label: item.label,
        body: item.body,
        preview: item.preview,
        dark: "previewDark" in item ? item.previewDark : undefined,
      })),
    },
    {
      kind: "moments",
      reverse: true,
      eyebrow: civilDocuments.eyebrow,
      headline: civilDocuments.headline,
      supporting: civilDocuments.supporting,
      href: `${ROUTES.features}/drawings`,
      linkLabel: "Explore drawings",
      moments: civilDocuments.stages
        .filter((item) => item.id === "document" || item.id === "review" || item.id === "track")
        .map((item) => ({
          id: item.id,
          label: item.label,
          body: item.body,
          preview: item.preview,
        })),
    },
    {
      kind: "moments",
      eyebrow: civilWorkforce.eyebrow,
      headline: civilWorkforce.headline,
      supporting: civilWorkforce.supporting,
      href: `${ROUTES.features}/workforce`,
      linkLabel: "Explore workforce",
      moments: civilWorkforce.points.slice(0, 3).map((item) => ({
        id: item.title.toLowerCase(),
        label: item.title,
        body: item.body,
        preview:
          item.title === "Compliance" ? ("subReadiness" as const) : ("wfOverview" as const),
      })),
    },
  ],
  process: {
    eyebrow: civilField.eyebrow,
    headline: civilField.headline,
    supporting: civilField.supporting,
    stages: civilField.stages.map((item, i) => ({
      id: item.id,
      label: item.label,
      body: item.body,
      preview: item.preview,
      phone: i === 0,
    })),
  },
  showcase: {
    eyebrow: "Product experience",
    headline: "This is the Civil / Infrastructure workspace.",
    supporting:
      "VertexBuild connects documented platform capabilities around the civil project — not a separate infrastructure product.",
    preview: "scheduleLookahead",
    previewLabel: CIVIL.previewLabel,
    satellites: [
      { label: "Field activity", preview: "dailyLogDashboard" },
      { label: "Drawings", preview: "drawingViewer" },
      { label: "Safety", preview: "safetyOverview" },
    ],
  },
  cta: civilCta,
};
