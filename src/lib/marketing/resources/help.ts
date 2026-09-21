/**
 * Help Center documentation catalog — preview entries derived from HELP_DOC_CATEGORY_PREVIEWS only.
 * No invented product procedures, API behavior, or version metadata.
 */

import {
  getHelpDocCategoryRouteIdFromSlug,
  resourcesHelpCategory,
  ROUTES,
  type HelpDocCategoryRouteId,
} from "@/lib/marketing/navigation";
import { HELP_CENTER_SECTION_ANCHORS, HELP_DOC_CATEGORY_PREVIEWS } from "./content";
import type { BlogContentBlock, HelpDocArticleRecord, HelpDocCategoryId } from "./types";

function h2(id: string, text: string): BlogContentBlock {
  return { type: "heading", level: 2, id, text };
}

function p(text: string): BlogContentBlock {
  return { type: "paragraph", text };
}

function ul(...items: string[]): BlogContentBlock {
  return { type: "ul", items };
}

function docCallout(title: "NOTE" | "TIP" | "IMPORTANT" | "WARNING", text: string): BlogContentBlock {
  return { type: "callout", title, text };
}

export function getHelpCategoryCoverageTopics(description: string): string[] {
  const trimmed = description.replace(/\.\s*$/, "").trim();
  return trimmed
    .split(/,\s*and\s*|,\s*/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function topicsFromDescription(description: string): string[] {
  return getHelpCategoryCoverageTopics(description);
}

function buildHelpBody(categoryTitle: string, description: string): BlogContentBlock[] {
  const topics = topicsFromDescription(description);
  return [
    h2("overview", "Overview"),
    p(description),
    h2("knowledge-area-scope", "Knowledge area scope"),
    p(
      `The ${categoryTitle} area groups VertexBuild product documentation topics listed below. This marketing preview orients teams to what the area covers.`,
    ),
    ul(...topics),
    h2("important-notes", "Important notes"),
    docCallout(
      "IMPORTANT",
      "This page summarizes a Help Center knowledge area on the VertexBuild marketing site. Step-by-step in-product documentation is available inside the application Help Center when your workspace is provisioned.",
    ),
    docCallout(
      "NOTE",
      "Marketing resources explain how construction teams work. Product documentation explains how VertexBuild itself works — including setup, modules, workflows, and day-to-day product guidance.",
    ),
    h2("next-steps", "Next steps"),
    p("Return to the Help Center to browse other knowledge areas, or explore related VertexBuild resources."),
  ];
}

type HelpDocSeed = {
  id: string;
  slug: string;
  title: string;
  categoryId: HelpDocCategoryId;
};

const HELP_DOC_SEEDS: HelpDocSeed[] = [
  {
    id: "help-getting-started",
    slug: "account-setup-workspace-and-first-project-checklist",
    title: "Account setup, workspace basics, and first-project checklist",
    categoryId: "getting-started",
  },
  {
    id: "help-projects",
    slug: "project-setup-documents-and-scheduling",
    title: "Project setup, documents, scheduling, and core workflows",
    categoryId: "projects",
  },
  {
    id: "help-financials",
    slug: "job-cost-billing-and-reporting-fundamentals",
    title: "Job cost, billing workflows, and reporting fundamentals",
    categoryId: "financials",
  },
  {
    id: "help-field-operations",
    slug: "daily-logs-field-capture-and-handoffs",
    title: "Daily logs, field capture, and superintendent handoffs",
    categoryId: "field-operations",
  },
  {
    id: "help-account",
    slug: "users-roles-authentication-and-tenant-administration",
    title: "Users, roles, authentication, and tenant administration",
    categoryId: "account",
  },
];

function categoryMeta(categoryId: HelpDocCategoryId) {
  const preview = HELP_DOC_CATEGORY_PREVIEWS.find((c) => c.id === categoryId);
  if (!preview) {
    throw new Error(`Missing help category preview: ${categoryId}`);
  }
  return preview;
}

function buildHelpCatalog(): HelpDocArticleRecord[] {
  return HELP_DOC_SEEDS.map((seed) => {
    const category = categoryMeta(seed.categoryId);
    const slug = seed.slug;
    return {
      id: seed.id,
      slug,
      title: seed.title,
      description: category.description,
      categoryId: seed.categoryId,
      categoryTitle: category.title,
      href: ROUTES.resourcesHelpArticle(slug),
      body: buildHelpBody(category.title, category.description),
    };
  });
}

const HELP_DOC_CATALOG: HelpDocArticleRecord[] = buildHelpCatalog();

export function helpCategoryLandingHref(categoryId: HelpDocCategoryId): string {
  return `${ROUTES.resourcesHelp}#${helpDocCategoryAnchor(categoryId)}`;
}

export function getHelpDocArticles(): HelpDocArticleRecord[] {
  return HELP_DOC_CATALOG;
}

export function getHelpDocBySlug(slug: string): HelpDocArticleRecord | null {
  return HELP_DOC_CATALOG.find((doc) => doc.slug === slug) ?? null;
}

export function getHelpDocStaticParams() {
  return HELP_DOC_CATALOG.map((doc) => ({ slug: doc.slug }));
}

export function getHelpCategoryStaticParams() {
  return (Object.keys(ROUTES.resourcesHelpCategorySlug) as HelpDocCategoryRouteId[]).map((categoryId) => ({
    slug: ROUTES.resourcesHelpCategorySlug[categoryId],
  }));
}

/** Article detail slugs only — knowledge areas live on `/resources/help` with in-page anchors. */
export function getHelpCenterStaticParams() {
  return getHelpDocStaticParams();
}

/** Bullets from the documentation body (same topics as the detail page scope list). */
export function getHelpDocLearnTopics(doc: HelpDocArticleRecord): string[] {
  const listBlock = doc.body.find((block): block is Extract<BlogContentBlock, { type: "ul" }> => block.type === "ul");
  return listBlock?.items ?? [];
}

export type HelpDocCategoryView = {
  categoryId: HelpDocCategoryId;
  routeSlug: string;
  title: string;
  description: string;
  href: string;
};

export function getHelpDocCategoryByRouteSlug(slug: string): HelpDocCategoryView | null {
  const categoryId = getHelpDocCategoryRouteIdFromSlug(slug);
  if (!categoryId) return null;
  const preview = categoryMeta(categoryId);
  const routeSlug = ROUTES.resourcesHelpCategorySlug[categoryId];
  return {
    categoryId,
    routeSlug,
    title: preview.title,
    description: preview.description,
    href: resourcesHelpCategory(categoryId),
  };
}

export function getHelpDocCategoryView(categoryId: HelpDocCategoryId): HelpDocCategoryView {
  const preview = categoryMeta(categoryId);
  const routeSlug = ROUTES.resourcesHelpCategorySlug[categoryId];
  return {
    categoryId,
    routeSlug,
    title: preview.title,
    description: preview.description,
    href: resourcesHelpCategory(categoryId),
  };
}

export function getHelpDocToc(doc: HelpDocArticleRecord) {
  return doc.body
    .filter((block): block is Extract<BlogContentBlock, { type: "heading" }> => block.type === "heading" && block.level === 2)
    .map((block, index) => ({
      id: block.id,
      label: block.text,
      index: index + 1,
    }));
}

export function getHelpDocsByCategory(categoryId: HelpDocCategoryId): HelpDocArticleRecord[] {
  return HELP_DOC_CATALOG.filter((doc) => doc.categoryId === categoryId);
}

export function getRelatedHelpDocs(doc: HelpDocArticleRecord, limit = 4): HelpDocArticleRecord[] {
  const others = HELP_DOC_CATALOG.filter((item) => item.id !== doc.id);
  const sameCategory = others.filter((item) => item.categoryId === doc.categoryId);
  const rest = others.filter((item) => item.categoryId !== doc.categoryId);
  return [...sameCategory, ...rest].slice(0, limit);
}

export function getHelpDocNeighbors(doc: HelpDocArticleRecord): {
  previous: HelpDocArticleRecord | null;
  next: HelpDocArticleRecord | null;
} {
  const index = HELP_DOC_CATALOG.findIndex((item) => item.id === doc.id);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: index > 0 ? HELP_DOC_CATALOG[index - 1]! : null,
    next: index < HELP_DOC_CATALOG.length - 1 ? HELP_DOC_CATALOG[index + 1]! : null,
  };
}

export function helpDocCategoryAnchor(categoryId: HelpDocCategoryId): string {
  return HELP_CENTER_SECTION_ANCHORS[categoryId];
}

/** Category previews with in-page Help Center anchor links. */
export function getHelpDocCategoryPreviewsForNav() {
  return HELP_DOC_CATEGORY_PREVIEWS.map((category) => {
    const categoryId = category.id as HelpDocCategoryId;
    return {
      ...category,
      href: helpCategoryLandingHref(categoryId),
    };
  });
}
