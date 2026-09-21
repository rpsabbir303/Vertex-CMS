/**
 * Resource Hub (CMS-1325) — section copy and preview catalog.
 * Preview entries use neutral product-oriented titles; replace via CMS without changing hub layout.
 */

import { photos } from "@/lib/images";
import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { HelpDocCategoryPreview, ResourceRecord, ResourceTopic, ResourceType } from "./types";

export const resourcesLandingMeta = {
  title: "Resources | VertexBuild",
  description:
    "Insights, guides, templates, webinars, and documentation for construction teams using VertexBuild.",
  canonical: "https://www.vertexcms.com/resources",
};

export const RESOURCES_HUB = {
  hero: {
    eyebrow: "Resources",
    headline: "Resources for smarter construction management",
    supporting:
      "Explore insights, in-depth guides, downloadable templates, webinars, and product documentation — curated for teams running projects on VertexBuild.",
    searchPlaceholder: "Search resources…",
    searchLabel: "Search resources",
  },
  blog: {
    eyebrow: "Blog",
    headline: "Construction operations insights",
    supporting:
      "Articles on project delivery, financial alignment, field coordination, and platform updates — written for construction teams, not generic SaaS fluff.",
    cta: "Explore Blogs",
    href: ROUTES.resourcesBlog,
  },
  guides: {
    eyebrow: "Guides",
    headline: "In-depth workflow guidance",
    supporting:
      "Structured educational resources for setting up and running project, financial, field, and compliance workflows in VertexBuild.",
    cta: "Explore Guides",
    href: ROUTES.resourcesGuides,
  },
  templates: {
    eyebrow: "Templates",
    headline: "Reference templates for the field and office",
    supporting:
      "Downloadable marketing resource templates for common construction processes — worksheets and checklists you can adapt before bringing data into VertexBuild.",
    cta: "Explore Templates",
    href: ROUTES.resourcesTemplates,
  },
  webinars: {
    eyebrow: "Webinars",
    headline: "Live and on-demand sessions",
    supporting:
      "Sessions on platform capabilities, implementation topics, and operational best practices for construction teams.",
    cta: "Explore Webinars",
    href: ROUTES.resourcesWebinars,
  },
  help: {
    eyebrow: "Help & documentation",
    headline: "Product help and documentation",
    supporting:
      "Marketing resources explain how construction teams work. Product documentation explains how VertexBuild itself works — including setup, modules, workflows, and day-to-day product guidance.",
    supportingNote: "Product knowledge, organized around how construction teams work.",
    cta: "Visit Help Center",
    href: ROUTES.resourcesHelp,
  },
  cta: {
    headline: "Ready to put these ideas into practice?",
    supporting:
      "See how VertexBuild connects project, financial, field, and intelligence workflows — then start a trial or take a product tour.",
    primary: CTAS.trial,
    secondary: { label: "Product Tour", href: ROUTES.productTour },
    tertiary: CTAS.exploreFeatures,
  },
} as const;

export const RESOURCE_TYPE_LABELS: Record<ResourceType, string> = {
  blog: "Blog",
  guide: "Guide",
  template: "Template",
  webinar: "Webinar",
};

export const RESOURCE_TOPIC_LABELS: Record<ResourceTopic, string> = {
  "project-management": "Project management",
  financials: "Financials & job cost",
  "field-operations": "Field operations",
  compliance: "Compliance & workforce",
  platform: "Platform & product",
  "getting-started": "Getting started",
};

export const WEBINAR_STATUS_LABELS = {
  upcoming: "Upcoming",
  "on-demand": "On demand",
  completed: "Recording unavailable",
} as const;

/** Preview catalog — neutral titles, no fictional customers or metrics. */
export const RESOURCES_PREVIEW_CATALOG: ResourceRecord[] = [
  {
    id: "blog-field-to-financial",
    type: "blog",
    title: "Connecting daily field logs to project financials",
    description:
      "Why shared project context reduces rework between superintendents, PMs, and accounting on active jobs.",
    topic: "field-operations",
    audience: ["operations", "gc"],
    publishedAt: "2026-01-08",
    href: ROUTES.resourcesBlog,
    catalogStatus: "preview",
    image: {
      src: photos.superintendent,
      alt: "Site superintendent reviewing field project documentation with a digital device on an active construction site",
    },
  },
  {
    id: "blog-wip-reporting",
    type: "blog",
    title: "WIP reporting without disconnected spreadsheets",
    description:
      "Principles for keeping percent-complete and billing aligned when job cost lives in your CMS.",
    topic: "financials",
    audience: ["finance", "executive"],
    publishedAt: "2025-11-05",
    href: ROUTES.resourcesBlog,
    catalogStatus: "preview",
    image: {
      src: photos.planning,
      alt: "Team reviewing financial and project reporting documents at a desk",
    },
  },
  {
    id: "blog-submittal-workflow",
    type: "blog",
    title: "Submittal workflows that stay tied to the schedule",
    description: "Keeping document review status visible to PMs and supers without duplicate tracking tools.",
    topic: "project-management",
    publishedAt: "2025-10-12",
    href: ROUTES.resourcesBlog,
    catalogStatus: "preview",
    image: {
      src: photos.documents,
      alt: "Project documents and review materials used in construction coordination workflows",
    },
  },
  {
    id: "blog-rfi-decisions",
    type: "blog",
    title: "Turning RFIs into faster decisions",
    description:
      "How shared ownership, clear response paths, and visible status help RFIs move from request to decision without losing site context.",
    topic: "project-management",
    audience: ["operations", "gc"],
    publishedAt: "2025-09-18",
    href: ROUTES.resourcesBlog,
    catalogStatus: "preview",
    image: {
      src: photos.blueprint,
      alt: "Construction drawings and annotations used when coordinating project questions and responses",
    },
  },
  {
    id: "blog-change-orders",
    type: "blog",
    title: "Controlling change orders without losing momentum",
    description:
      "Keeping cost, schedule, and field impact visible in one change-order path so teams can review scope without stalling active work.",
    topic: "financials",
    audience: ["operations", "finance"],
    publishedAt: "2025-08-27",
    href: ROUTES.resourcesBlog,
    catalogStatus: "preview",
    image: {
      src: photos.collaboration,
      alt: "Project team collaborating around plans and documentation during scope review",
    },
  },
  {
    id: "blog-closeout-process",
    type: "blog",
    title: "Building a connected closeout process",
    description:
      "Connecting punch lists, documentation, and handoff checklists so closeout stays tied to the same project record used earlier in delivery.",
    topic: "project-management",
    audience: ["operations", "gc"],
    publishedAt: "2025-07-30",
    href: ROUTES.resourcesBlog,
    catalogStatus: "preview",
    image: {
      src: photos.commercialInterior,
      alt: "Finished commercial interior space representing late-stage project closeout and handoff",
    },
  },
  {
    id: "blog-schedule-field-office",
    type: "blog",
    title: "Keeping field and office on the same schedule",
    description:
      "Why shared schedule visibility between supers, PMs, and coordinators reduces conflicting updates and missed handoffs on active jobs.",
    topic: "field-operations",
    audience: ["operations", "gc"],
    publishedAt: "2025-07-09",
    href: ROUTES.resourcesBlog,
    catalogStatus: "preview",
    image: {
      src: photos.fieldCrew,
      alt: "Field and site team reviewing project status during active construction work",
    },
  },
  {
    id: "blog-drawing-control",
    type: "blog",
    title: "Drawing control that survives the jobsite",
    description:
      "Keeping current sets, markups, and revision history visible so field teams are not working from outdated sheets.",
    topic: "project-management",
    audience: ["operations", "gc"],
    publishedAt: "2025-06-18",
    href: ROUTES.resourcesBlog,
    catalogStatus: "preview",
    image: {
      src: photos.steelFrame,
      alt: "Steel framing on an active construction site where drawing control and current sets matter",
    },
  },
  {
    id: "blog-safety-observations",
    type: "blog",
    title: "Capturing safety observations without losing project context",
    description:
      "Linking field observations to the same project record used for daily logs, crew, and follow-up actions.",
    topic: "compliance",
    audience: ["operations", "gc"],
    publishedAt: "2025-05-28",
    href: ROUTES.resourcesBlog,
    catalogStatus: "preview",
    image: {
      src: photos.safety,
      alt: "Construction workers in safety gear on a jobsite during active field operations",
    },
  },
  {
    id: "blog-owner-status",
    type: "blog",
    title: "Owner status updates without rebuilding the report",
    description:
      "How shared project progress, documents, and financial signals reduce last-minute reporting for owner meetings.",
    topic: "platform",
    audience: ["executive", "operations"],
    publishedAt: "2025-05-07",
    href: ROUTES.resourcesBlog,
    catalogStatus: "preview",
    image: {
      src: photos.aerial,
      alt: "Aerial view of commercial buildings representing portfolio and owner reporting context",
    },
  },
  {
    id: "guide-job-cost-structure",
    type: "guide",
    title: "Structuring job cost for multi-project portfolios",
    description:
      "How cost codes, budgets, and commitments align across projects when financials and field activity share one record.",
    topic: "financials",
    audience: ["finance", "operations"],
    publishedAt: "2026-01-14",
    href: ROUTES.resourcesGuides,
    catalogStatus: "preview",
  },
  {
    id: "guide-compliance-docs",
    type: "guide",
    title: "Compliance documentation checklist for subcontractors",
    description:
      "Document types, renewal cadence, and handoff points between compliance and project teams.",
    topic: "compliance",
    audience: ["gc", "specialty"],
    publishedAt: "2025-11-20",
    href: ROUTES.resourcesGuides,
    catalogStatus: "preview",
  },
  {
    id: "guide-onboarding-workspace",
    type: "guide",
    title: "Workspace setup for multi-entity contractors",
    description: "Tenant structure, roles, and project templates before your first job is live in VertexBuild.",
    topic: "getting-started",
    audience: ["executive", "operations"],
    publishedAt: "2025-09-30",
    href: ROUTES.resourcesGuides,
    catalogStatus: "preview",
  },
  {
    id: "template-rfi-log",
    type: "template",
    title: "RFI tracking worksheet",
    description: "Organize RFIs, responsible parties, and response status before importing into VertexBuild.",
    topic: "project-management",
    publishedAt: "2025-12-02",
    href: ROUTES.resourcesTemplates,
    catalogStatus: "preview",
    templateFormat: "Worksheet",
  },
  {
    id: "template-daily-log",
    type: "template",
    title: "Daily log field template",
    description: "Standard sections for weather, crew, equipment, and notes — ready to adapt for field teams.",
    topic: "field-operations",
    href: ROUTES.resourcesTemplates,
    catalogStatus: "preview",
    templateFormat: "Field log",
  },
  {
    id: "template-punch-list",
    type: "template",
    title: "Punch list coordination sheet",
    description: "Track locations, trades, and closeout items during final project phases.",
    topic: "project-management",
    href: ROUTES.resourcesTemplates,
    catalogStatus: "preview",
    templateFormat: "Checklist",
  },
  {
    id: "webinar-platform-overview",
    type: "webinar",
    title: "VertexBuild platform overview for operations leaders",
    description:
      "A structured tour of project, financial, field, compliance, and intelligence modules on one platform.",
    topic: "platform",
    audience: ["executive", "operations"],
    publishedAt: "2026-02-18",
    href: ROUTES.resourcesWebinars,
    catalogStatus: "preview",
    webinarStatus: "upcoming",
  },
  {
    id: "webinar-ai-assistant",
    type: "webinar",
    title: "Using the AI assistant on active projects",
    description: "Documented use cases for project questions, insights, and document intelligence within VertexBuild.",
    topic: "platform",
    publishedAt: "2025-10-22",
    href: ROUTES.resourcesWebinars,
    catalogStatus: "preview",
    webinarStatus: "on-demand",
  },
  {
    id: "webinar-job-cost-close",
    type: "webinar",
    title: "Month-end job cost close with connected field data",
    description: "How field activity feeds percent-complete and billing when financials share the project record.",
    topic: "financials",
    publishedAt: "2025-08-15",
    href: ROUTES.resourcesWebinars,
    catalogStatus: "preview",
    webinarStatus: "completed",
  },
];

export const HELP_DOC_CATEGORY_PREVIEWS: HelpDocCategoryPreview[] = [
  {
    id: "getting-started",
    title: "Getting started",
    description: "Account setup, workspace basics, and first-project checklist.",
    href: ROUTES.resourcesHelp,
  },
  {
    id: "projects",
    title: "Projects",
    description: "Project setup, documents, scheduling, and core workflows.",
    href: ROUTES.resourcesHelp,
  },
  {
    id: "financials",
    title: "Financials",
    description: "Job cost, billing workflows, and reporting fundamentals.",
    href: ROUTES.resourcesHelp,
  },
  {
    id: "field-operations",
    title: "Field operations",
    description: "Daily logs, field capture, and superintendent handoffs.",
    href: ROUTES.resourcesHelp,
  },
  {
    id: "account",
    title: "Account & security",
    description: "Users, roles, authentication, and tenant administration.",
    href: ROUTES.resourcesHelp,
  },
];

export function getHubResourcesByType(type: ResourceType, limit?: number, catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG) {
  const items = catalog.filter((item) => item.type === type);
  return limit ? items.slice(0, limit) : items;
}
