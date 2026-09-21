/**
 * Templates catalog — listing sections and detail helpers.
 */

import { ROUTES } from "@/lib/marketing/navigation";
import { RESOURCES_PREVIEW_CATALOG, RESOURCE_TOPIC_LABELS } from "./content";
import type { BlogContentBlock, ResourceRecord, ResourceTopic, TemplateArticleRecord } from "./types";

function h2(id: string, text: string): BlogContentBlock {
  return { type: "heading", level: 2, id, text };
}

function p(text: string): BlogContentBlock {
  return { type: "paragraph", text };
}

function ul(...items: string[]): BlogContentBlock {
  return { type: "ul", items };
}

const TEMPLATE_BODIES: Record<string, BlogContentBlock[]> = {
  "template-rfi-log": [
    h2("purpose", "What this worksheet covers"),
    p(
      "Use this structure to track RFIs, responsible parties, and response status before records move into VertexBuild. It keeps subject, due dates, and ownership visible during active coordination.",
    ),
    h2("sections", "Recommended sections"),
    ul(
      "RFI identifier and subject line tied to the project record.",
      "Requested by, assigned responder, and response due date.",
      "Status states your team uses before import (open, pending, answered).",
    ),
    h2("vertexbuild", "Bringing data into VertexBuild"),
    p(
      "After your team agrees on fields and status labels, map the worksheet columns to RFIs on the project record so supers, PMs, and design partners work from one source.",
    ),
  ],
  "template-daily-log": [
    h2("purpose", "What this template covers"),
    p(
      "Standard sections for weather, crew, equipment, and daily notes — structured for field teams before logs sync to the project operating record in VertexBuild.",
    ),
    h2("sections", "Recommended sections"),
    ul(
      "Date, weather, and site conditions.",
      "Crew and equipment on site.",
      "Work performed and delays or constraints.",
      "Notes for office follow-up.",
    ),
    h2("vertexbuild", "Bringing data into VertexBuild"),
    p(
      "Align daily log sections with your VertexBuild field workflow so supers capture once and project, schedule, and financial teams see the same context.",
    ),
  ],
  "template-punch-list": [
    h2("purpose", "What this sheet covers"),
    p(
      "Track locations, trades, and closeout items during final project phases — a shared checklist before punch items live on the project record.",
    ),
    h2("sections", "Recommended sections"),
    ul(
      "Location or area reference.",
      "Trade or responsible party.",
      "Item description and priority.",
      "Status through closeout.",
    ),
    h2("vertexbuild", "Bringing data into VertexBuild"),
    p(
      "Use consistent location and trade labels so punch coordination imports cleanly into VertexBuild closeout workflows.",
    ),
  ],
};

const TEMPLATE_SLUGS: Record<string, string> = {
  "template-rfi-log": "rfi-tracking-worksheet",
  "template-daily-log": "daily-field-log",
  "template-punch-list": "punch-list-coordination-sheet",
};

function enrichTemplate(record: ResourceRecord): TemplateArticleRecord | null {
  if (record.type !== "template") return null;
  const slug = record.slug ?? TEMPLATE_SLUGS[record.id];
  const body = record.body ?? TEMPLATE_BODIES[record.id];
  const templateFormat = record.templateFormat ?? "Template";
  if (!slug || !body?.length) return null;
  return {
    ...record,
    type: "template",
    slug,
    body,
    templateFormat,
    href: ROUTES.resourcesTemplateArticle(slug),
  };
}

export const FEATURED_TEMPLATE_ID = "template-daily-log";

export function getTemplateArticles(catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG): TemplateArticleRecord[] {
  return catalog.map(enrichTemplate).filter((item): item is TemplateArticleRecord => Boolean(item));
}

export function getFeaturedTemplate(catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG): TemplateArticleRecord | null {
  return (
    getTemplateArticles(catalog).find((t) => t.id === FEATURED_TEMPLATE_ID) ?? getTemplateArticles(catalog)[0] ?? null
  );
}

export function getTemplateBySlug(
  slug: string,
  catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG,
): TemplateArticleRecord | null {
  return getTemplateArticles(catalog).find((t) => t.slug === slug) ?? null;
}

export function getTemplateStaticParams(catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG) {
  return getTemplateArticles(catalog).map((t) => ({ slug: t.slug }));
}

export type TemplateListingSectionLayout = "text-visual-right" | "visual-text-right";

export type TemplateListingSectionConfig = {
  topic: ResourceTopic;
  categoryLabel: string;
  sectionAnchorId: string;
  eyebrow: string;
  heading: string;
  supporting: string;
  layout: TemplateListingSectionLayout;
};

/** In-page sections on `/resources/templates` — not routes. */
export const TEMPLATE_LISTING_SECTIONS: TemplateListingSectionConfig[] = [
  {
    topic: "project-management",
    categoryLabel: "Project Operations",
    sectionAnchorId: "templates-project-operations",
    eyebrow: "PROJECT OPERATIONS",
    heading: "Standardize project coordination worksheets.",
    supporting:
      "RFI tracking, punch lists, and closeout checklists that align with how PMs and supers run active jobs before data enters VertexBuild.",
    layout: "text-visual-right",
  },
  {
    topic: "field-operations",
    categoryLabel: "Field Operations",
    sectionAnchorId: "templates-field-operations",
    eyebrow: "FIELD OPERATIONS",
    heading: "Field-ready logs and daily capture.",
    supporting:
      "Templates shaped for supers and field leads — consistent sections for crew, equipment, and site notes on every job.",
    layout: "visual-text-right",
  },
  {
    topic: "financials",
    categoryLabel: "Financial Workflows",
    sectionAnchorId: "templates-financial-workflows",
    eyebrow: "FINANCIAL WORKFLOWS",
    heading: "Financial worksheet standards.",
    supporting: "Budget and job-cost worksheets that match your cost structure before financials sync to the project record.",
    layout: "text-visual-right",
  },
  {
    topic: "compliance",
    categoryLabel: "Compliance",
    sectionAnchorId: "templates-compliance",
    eyebrow: "COMPLIANCE",
    heading: "Compliance and workforce checklists.",
    supporting: "Documentation and verification templates for subcontractor and workforce requirements on active projects.",
    layout: "visual-text-right",
  },
];

function sortTemplatesNewestFirst(templates: TemplateArticleRecord[]) {
  return [...templates].sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""));
}

export function getTemplatesForListingSection(
  topic: ResourceTopic,
  featuredTemplateId?: string,
  catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG,
): TemplateArticleRecord[] {
  const inTopic = sortTemplatesNewestFirst(getTemplateArticles(catalog).filter((t) => t.topic === topic));
  if (!featuredTemplateId) return inTopic;
  const withoutFeatured = inTopic.filter((t) => t.id !== featuredTemplateId);
  return withoutFeatured.length > 0 ? withoutFeatured : inTopic;
}

export type TemplateListingSection = TemplateListingSectionConfig & {
  id: ResourceTopic;
  templates: TemplateArticleRecord[];
};

export function getTemplateListingSections(catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG): TemplateListingSection[] {
  const featured = getFeaturedTemplate(catalog);
  const sections: TemplateListingSection[] = [];
  for (const config of TEMPLATE_LISTING_SECTIONS) {
    const templates = getTemplatesForListingSection(config.topic, featured?.id, catalog);
    if (templates.length === 0) continue;
    sections.push({ ...config, id: config.topic, templates });
  }
  return sections;
}

export function templateListingCategoryLabel(topic: ResourceTopic): string {
  const section = TEMPLATE_LISTING_SECTIONS.find((s) => s.topic === topic);
  return section?.categoryLabel ?? RESOURCE_TOPIC_LABELS[topic];
}

export function formatTemplateDate(iso?: string) {
  if (!iso) return null;
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export const TEMPLATE_LISTING_PAGE_ANCHORS = {
  featured: "templates-featured",
  explore: "templates-explore",
  connectedResources: "templates-connected-resources",
} as const;

export type TemplatePreviewVariant = "rfi-worksheet" | "field-log" | "punch-checklist";

export type TemplateIncludedSection = {
  title: string;
  description: string;
};

export type TemplateHowToStep = {
  title: string;
  description: string;
};

export type TemplateDetailMeta = {
  previewVariant: TemplatePreviewVariant;
  coversSummary: string;
  coversFlow: string[];
  includedSections: TemplateIncludedSection[];
  howToUse: TemplateHowToStep[];
  vertexBuildSummary: string;
};

const TEMPLATE_DETAIL_META: Record<string, TemplateDetailMeta> = {
  "template-rfi-log": {
    previewVariant: "rfi-worksheet",
    coversSummary:
      "Use this structure to track RFIs, responsible parties, and response status before records move into VertexBuild. It keeps subject, due dates, and ownership visible during active coordination.",
    coversFlow: ["RFI identification", "Responsible party", "Response status", "Project record"],
    includedSections: [
      { title: "RFI identification", description: "RFI identifier and subject line tied to the project record." },
      { title: "Responsible party", description: "Requested by, assigned responder, and response due date." },
      { title: "Response deadline", description: "Due dates visible for coordination before answers are logged." },
      { title: "Status tracking", description: "Status states your team uses before import (open, pending, answered)." },
      { title: "Project record", description: "Fields aligned to how RFIs attach to the active project context." },
    ],
    howToUse: [
      { title: "Prepare", description: "Agree on RFI numbering, status labels, and who owns each column before the job is live." },
      { title: "Complete", description: "Capture RFIs as they arise — subject, parties, due date, and status on one worksheet." },
      { title: "Review", description: "PM and supers review open items during coordination meetings or schedule checks." },
      {
        title: "Bring into VertexBuild",
        description:
          "After fields are standardized, map worksheet columns to RFIs on the project record so teams work from one source.",
      },
    ],
    vertexBuildSummary:
      "After your team agrees on fields and status labels, map the worksheet columns to RFIs on the project record so supers, PMs, and design partners work from one source.",
  },
  "template-daily-log": {
    previewVariant: "field-log",
    coversSummary:
      "Standard sections for weather, crew, equipment, and daily notes — structured for field teams before logs align with the project operating record in VertexBuild.",
    coversFlow: ["Site conditions", "Crew & equipment", "Work performed", "Project record"],
    includedSections: [
      { title: "Date & conditions", description: "Date, weather, and site conditions." },
      { title: "Crew & equipment", description: "Crew and equipment on site." },
      { title: "Work performed", description: "Work performed and delays or constraints." },
      { title: "Follow-up notes", description: "Notes for office follow-up." },
    ],
    howToUse: [
      { title: "Prepare", description: "Set the sections your supers will complete every day before work starts on site." },
      { title: "Complete", description: "Field leads fill weather, crew, equipment, and work notes during or after the shift." },
      { title: "Review", description: "PMs review logs for schedule and coordination follow-ups." },
      {
        title: "Bring into VertexBuild",
        description: "Align sections with your VertexBuild field workflow so office teams see the same context.",
      },
    ],
    vertexBuildSummary:
      "Align daily log sections with your VertexBuild field workflow so supers capture once and project, schedule, and financial teams see the same context.",
  },
  "template-punch-list": {
    previewVariant: "punch-checklist",
    coversSummary:
      "Track locations, trades, and closeout items during final project phases — a shared checklist before punch items live on the project record.",
    coversFlow: ["Location", "Trade owner", "Closeout item", "Project record"],
    includedSections: [
      { title: "Location reference", description: "Location or area reference." },
      { title: "Trade owner", description: "Trade or responsible party." },
      { title: "Item detail", description: "Item description and priority." },
      { title: "Closeout status", description: "Status through closeout." },
    ],
    howToUse: [
      { title: "Prepare", description: "Define location labels and trade names your closeout team will use consistently." },
      { title: "Complete", description: "Capture punch items with owner, priority, and status during walkthroughs." },
      { title: "Review", description: "PM and supers review open items until closeout is complete." },
      {
        title: "Bring into VertexBuild",
        description: "Use consistent location and trade labels so punch coordination maps to the project record.",
      },
    ],
    vertexBuildSummary:
      "Use consistent location and trade labels so punch coordination maps cleanly to VertexBuild closeout workflows on the project record.",
  },
};

export function getTemplateDetailMeta(templateId: string): TemplateDetailMeta | null {
  return TEMPLATE_DETAIL_META[templateId] ?? null;
}

export function getRelatedResourcesForTemplate(
  template: TemplateArticleRecord,
  limit = 4,
  catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG,
): ResourceRecord[] {
  const others = catalog.filter((item) => item.id !== template.id);
  const sameTopic = others.filter((item) => item.topic === template.topic);
  const rest = others.filter((item) => item.topic !== template.topic);
  return [...sameTopic, ...rest].slice(0, limit);
}
