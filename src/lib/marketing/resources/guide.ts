/**
 * Guide Detail catalog helpers — structured educational content only.
 */

import { ROUTES } from "@/lib/marketing/navigation";
import { RESOURCES_PREVIEW_CATALOG, RESOURCE_TOPIC_LABELS } from "./content";
import type { BlogContentBlock, GuideArticleRecord, ResourceRecord, ResourceTopic } from "./types";

function h2(id: string, text: string): BlogContentBlock {
  return { type: "heading", level: 2, id, text };
}

function h3(id: string, text: string): BlogContentBlock {
  return { type: "heading", level: 3, id, text };
}

function p(text: string): BlogContentBlock {
  return { type: "paragraph", text };
}

function ul(...items: string[]): BlogContentBlock {
  return { type: "ul", items };
}

function ol(...items: string[]): BlogContentBlock {
  return { type: "ol", items };
}

function callout(text: string, title?: string): BlogContentBlock {
  return { type: "callout", title, text };
}

const GUIDE_BODIES: Record<string, BlogContentBlock[]> = {
  "guide-job-cost-structure": [
    h2("why-structure-matters", "Why job cost structure matters"),
    p(
      "Portfolio visibility breaks down when each project uses a different cost code layout, budget version, or commitment tracking method. Finance spends time normalizing data instead of interpreting it.",
    ),
    p(
      "A shared structure does not remove judgment — it gives operations and finance the same vocabulary for budget, commitment, and actual cost on every job.",
    ),
    h2("cost-codes-and-budgets", "How cost codes connect to budgets"),
    ul(
      "Define cost codes at the entity or portfolio level before projects go live.",
      "Tie budget lines to the same codes used for commitments and actuals.",
      "Keep revision history visible so field and office discuss the same budget state.",
    ),
    callout(
      "Agree who owns cost code changes after project kickoff. Shared records help only when updates are deliberate.",
      "Governance note",
    ),
    h2("commitments-and-job-cost", "How commitments affect project financials"),
    p(
      "Commitments should roll into job cost using the same project record as budgets and actuals — not a parallel spreadsheet maintained by procurement or PMs.",
    ),
    ol(
      "Capture commitment scope against the project cost structure.",
      "Connect approved changes to budget and schedule context.",
      "Review open commitments alongside actuals during period close.",
    ),
    h2("portfolio-visibility", "How portfolio-level visibility works"),
    p(
      "When cost codes, budgets, commitments, and actuals align across projects, portfolio reporting becomes aggregation — not reconstruction.",
    ),
    ul(
      "Roll project job cost into entity or portfolio views using consistent codes.",
      "Compare budget vs. commitment vs. actual signals without exporting to a third tool.",
      "Keep field activity context available when finance questions variance.",
    ),
    h2("implementation", "Practical implementation guidance"),
    p(
      "Start with one entity or business unit. Standardize codes and budget templates, run one close cycle, then expand — rather than attempting a portfolio-wide rewrite in a single step.",
    ),
    callout(
      "Document the handoff between project setup, procurement, and accounting so ownership stays clear after go-live.",
    ),
    h2("vertexbuild-workflow", "How VertexBuild supports the workflow"),
    p(
      "VertexBuild connects cost codes, budgets, commitments, and job cost on one project operating record so portfolio teams can review financial signals without disconnected workbooks.",
    ),
  ],
  "guide-compliance-docs": [
    h2("why-documentation-matters", "Why compliance documentation matters on active jobs"),
    p(
      "Subcontractor compliance gaps often appear late — when insurance expires, bonds lapse, or a required form was never attached to the project record.",
    ),
    h2("document-types", "Document types teams track together"),
    ul(
      "Insurance certificates and endorsements with clear effective dates.",
      "Bonds and licensing tied to the trade and jurisdiction.",
      "Safety and workforce documentation required by owner or GC standards.",
    ),
    h2("renewal-cadence", "Renewal cadence and ownership"),
    ol(
      "Assign a clear owner for each document category.",
      "Set renewal expectations before work starts on site.",
      "Keep status visible to project and compliance roles on the same record.",
    ),
    h2("handoff-points", "Handoff points between compliance and project teams"),
    p(
      "Compliance should not live in email while project teams work from a separate system. Handoffs fail when status is invisible to supers and PMs.",
    ),
    h2("vertexbuild-workflow", "How VertexBuild supports the workflow"),
    p(
      "VertexBuild keeps compliance documentation connected to the project record so field, project, and compliance teams can review status in one place.",
    ),
  ],
  "guide-onboarding-workspace": [
    h2("before-first-job", "Before your first job is live"),
    p(
      "Multi-entity contractors need tenant structure, roles, and templates defined early — otherwise every new project becomes a one-off setup exercise.",
    ),
    h2("tenant-structure", "Tenant structure for multi-entity teams"),
    ul(
      "Separate entities or divisions while sharing portfolio reporting where appropriate.",
      "Define default project templates per entity or job type.",
      "Align role permissions with how supers, PMs, and finance actually work.",
    ),
    h2("roles-and-access", "Roles and access"),
    p(
      "Role design should reflect who updates field data, who approves financial changes, and who needs read-only portfolio visibility.",
    ),
    h2("project-templates", "Project templates"),
    callout(
      "Templates encode your standards — cost structure, document folders, and workflow defaults — so active jobs start from a consistent baseline.",
    ),
    h2("vertexbuild-workflow", "How VertexBuild supports the workflow"),
    p(
      "VertexBuild workspace setup connects entities, roles, and project templates so teams can move from onboarding to active delivery on one platform record.",
    ),
  ],
};

const GUIDE_SLUGS: Record<string, string> = {
  "guide-job-cost-structure": "structuring-job-cost-for-multi-project-portfolios",
  "guide-compliance-docs": "compliance-documentation-checklist-for-subcontractors",
  "guide-onboarding-workspace": "workspace-setup-for-multi-entity-contractors",
};

const DEFAULT_GUIDE_FORMAT = "In-depth guide";

function enrichGuide(record: ResourceRecord): GuideArticleRecord | null {
  if (record.type !== "guide") return null;
  const slug = record.slug ?? GUIDE_SLUGS[record.id];
  const body = record.body ?? GUIDE_BODIES[record.id];
  if (!slug || !body?.length) return null;
  return {
    ...record,
    type: "guide",
    slug,
    body,
    guideFormat: DEFAULT_GUIDE_FORMAT,
    href: ROUTES.resourcesGuideArticle(slug),
  };
}

export const FEATURED_GUIDE_ID = "guide-job-cost-structure";

export function getGuideArticles(catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG): GuideArticleRecord[] {
  return catalog.map(enrichGuide).filter((item): item is GuideArticleRecord => Boolean(item));
}

export function getFeaturedGuide(catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG): GuideArticleRecord | null {
  return getGuideArticles(catalog).find((guide) => guide.id === FEATURED_GUIDE_ID) ?? getGuideArticles(catalog)[0] ?? null;
}

/** Guides for the listing library, newest first; optionally omit the featured spotlight guide. */
export function getGuidesForLibrary(
  options: { excludeFeatured?: boolean; catalog?: ResourceRecord[] } = {},
): GuideArticleRecord[] {
  const { excludeFeatured = true, catalog = RESOURCES_PREVIEW_CATALOG } = options;
  const sorted = [...getGuideArticles(catalog)].sort((a, b) => {
    const da = a.publishedAt ?? "";
    const db = b.publishedAt ?? "";
    return db.localeCompare(da);
  });
  if (!excludeFeatured) return sorted;
  return sorted.filter((guide) => guide.id !== FEATURED_GUIDE_ID);
}

export type GuideListingSectionLayout = "text-visual-right" | "visual-text-right" | "text-visual-right-alt";

export type GuideListingSectionConfig = {
  topic: ResourceTopic;
  /** Display category on guide records — not a URL or route. */
  categoryLabel: string;
  /** In-page section anchor on `/resources/guides` only. */
  sectionAnchorId: string;
  eyebrow: string;
  heading: string;
  supporting: string;
  layout: GuideListingSectionLayout;
};

/**
 * Guides listing sections on `/resources/guides`.
 * Categories classify content; they are NOT routes (no `/resources/guides/[category]` pages).
 */
export const GUIDE_LISTING_SECTIONS: GuideListingSectionConfig[] = [
  {
    topic: "getting-started",
    categoryLabel: "Getting Started",
    sectionAnchorId: "guides-getting-started",
    eyebrow: "GETTING STARTED",
    heading: "Build the right foundation before the first job is live.",
    supporting:
      "These guides help teams configure their VertexBuild workspace, define roles, and establish project structure before work starts on site.",
    layout: "text-visual-right",
  },
  {
    topic: "financials",
    categoryLabel: "Financials & Job Cost",
    sectionAnchorId: "guides-financials",
    eyebrow: "FINANCIALS & JOB COST",
    heading: "Keep project cost and financial context connected.",
    supporting:
      "Align cost codes, budgets, commitments, and job cost on one project record so portfolio teams review financial signals without disconnected workbooks.",
    layout: "visual-text-right",
  },
  {
    topic: "compliance",
    categoryLabel: "Compliance & Workforce",
    sectionAnchorId: "guides-compliance",
    eyebrow: "COMPLIANCE & WORKFORCE",
    heading: "Keep workforce and compliance workflows organized.",
    supporting:
      "Documentation, renewals, and handoffs stay visible to project and compliance roles when subcontractor requirements live on the same operating record.",
    layout: "text-visual-right-alt",
  },
];

function sortGuidesNewestFirst(guides: GuideArticleRecord[]) {
  return [...guides].sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""));
}

/**
 * Guides for a listing category. Omits the page featured guide when other guides exist in the topic;
 * otherwise keeps the topic visible with the featured (or only) guide.
 */
export function getGuidesForListingSection(
  topic: ResourceTopic,
  featuredGuideId?: string,
  catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG,
): GuideArticleRecord[] {
  const inTopic = sortGuidesNewestFirst(getGuideArticles(catalog).filter((g) => g.topic === topic));
  if (!featuredGuideId) return inTopic;
  const withoutFeatured = inTopic.filter((g) => g.id !== featuredGuideId);
  return withoutFeatured.length > 0 ? withoutFeatured : inTopic;
}

export type GuideListingSection = GuideListingSectionConfig & {
  id: ResourceTopic;
  guides: GuideArticleRecord[];
};

export function getGuideListingSections(catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG): GuideListingSection[] {
  const featured = getFeaturedGuide(catalog);
  const sections: GuideListingSection[] = [];
  for (const config of GUIDE_LISTING_SECTIONS) {
    const guides = getGuidesForListingSection(config.topic, featured?.id, catalog);
    if (guides.length === 0) continue;
    sections.push({
      ...config,
      id: config.topic,
      guides,
    });
  }
  return sections;
}

/** Category label for a guide record (content classification, not a route). */
export function guideListingCategoryLabel(topic: ResourceTopic): string {
  const section = GUIDE_LISTING_SECTIONS.find((s) => s.topic === topic);
  return section?.categoryLabel ?? RESOURCE_TOPIC_LABELS[topic];
}

/** In-page anchor id for a listing section on `/resources/guides`. */
export function guideListingSectionAnchorId(topic: ResourceTopic): string | null {
  return GUIDE_LISTING_SECTIONS.find((s) => s.topic === topic)?.sectionAnchorId ?? null;
}

export const GUIDE_LISTING_PAGE_ANCHORS = {
  featured: "guides-featured",
  connectedResources: "guides-connected-resources",
} as const;

export function getGuideBySlug(
  slug: string,
  catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG,
): GuideArticleRecord | null {
  return getGuideArticles(catalog).find((guide) => guide.slug === slug) ?? null;
}

export function getGuideStaticParams(catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG) {
  return getGuideArticles(catalog).map((guide) => ({ slug: guide.slug }));
}

export function getRelatedGuides(
  guide: GuideArticleRecord,
  limit = 3,
  catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG,
): GuideArticleRecord[] {
  const others = getGuideArticles(catalog).filter((item) => item.id !== guide.id);
  const sameTopic = others.filter((item) => item.topic === guide.topic);
  const rest = others.filter((item) => item.topic !== guide.topic);
  return [...sameTopic, ...rest].slice(0, limit);
}

export function getRelatedHubResourcesForGuide(
  guide: GuideArticleRecord,
  limit = 3,
  catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG,
): ResourceRecord[] {
  return catalog
    .filter((item) => item.type !== "guide" && item.topic === guide.topic)
    .slice(0, limit);
}

export function getContinueReadingForGuide(
  guide: GuideArticleRecord,
  limit = 4,
  catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG,
): ResourceRecord[] {
  const hub = getRelatedHubResourcesForGuide(guide, 3, catalog);
  const guides = getRelatedGuides(guide, 2, catalog);
  return [...hub, ...guides].slice(0, limit);
}

export function getGuideToc(guide: GuideArticleRecord) {
  return guide.body
    .filter((block): block is Extract<BlogContentBlock, { type: "heading" }> => block.type === "heading" && block.level === 2)
    .map((block, index) => ({
      id: block.id,
      label: block.text,
      index: index + 1,
    }));
}

export function formatGuideDate(iso?: string) {
  if (!iso) return null;
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function guideTopicLabel(topic: ResourceTopic) {
  return RESOURCE_TOPIC_LABELS[topic];
}

export type GuideSectionWorkflowVariant =
  | "structure-stack"
  | "codes-budget"
  | "commitment-flow"
  | "portfolio-hub"
  | "implementation"
  | "platform"
  | "generic-stack";

/** Section category eyebrow + workflow variant by guide id and section index. */
export function guideSectionMeta(
  guideId: string,
  sectionIndex: number,
): { category: string; variant: GuideSectionWorkflowVariant } {
  const financial = [
    { category: "FINANCIAL WORKFLOW", variant: "structure-stack" as const },
    { category: "COST STRUCTURE", variant: "codes-budget" as const },
    { category: "COMMITMENTS", variant: "commitment-flow" as const },
    { category: "PORTFOLIO", variant: "portfolio-hub" as const },
    { category: "IMPLEMENTATION", variant: "implementation" as const },
    { category: "VERTEXBUILD", variant: "platform" as const },
  ];
  const compliance = [
    { category: "COMPLIANCE", variant: "generic-stack" as const },
    { category: "DOCUMENTATION", variant: "codes-budget" as const },
    { category: "RENEWALS", variant: "commitment-flow" as const },
    { category: "HANDOFF", variant: "portfolio-hub" as const },
    { category: "VERTEXBUILD", variant: "platform" as const },
  ];
  const onboarding = [
    { category: "GETTING STARTED", variant: "generic-stack" as const },
    { category: "WORKSPACE", variant: "structure-stack" as const },
    { category: "ROLES", variant: "codes-budget" as const },
    { category: "TEMPLATES", variant: "commitment-flow" as const },
    { category: "VERTEXBUILD", variant: "platform" as const },
  ];

  const map =
    guideId === "guide-job-cost-structure"
      ? financial
      : guideId === "guide-compliance-docs"
        ? compliance
        : guideId === "guide-onboarding-workspace"
          ? onboarding
          : financial;

  return map[sectionIndex] ?? { category: "WORKFLOW", variant: "generic-stack" };
}

export function relatedTopicsForGuide(topic: ResourceTopic): string[] {
  if (topic === "financials") {
    return ["Cost Codes", "Budget", "Commitments", "Job Cost", "Portfolio"];
  }
  if (topic === "compliance") {
    return ["Documentation", "Subcontractors", "Renewals", "Project Record"];
  }
  if (topic === "getting-started") {
    return ["Workspace", "Roles", "Templates", "Multi-Entity"];
  }
  return ["Project Record", "Workflow", "VertexBuild"];
}
