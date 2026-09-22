/**
 * Webinars catalog — listing and detail helpers.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import { RESOURCES_PREVIEW_CATALOG, RESOURCE_TOPIC_LABELS, WEBINAR_STATUS_LABELS } from "./content";
import type {
  BlogContentBlock,
  ResourceAudience,
  ResourceRecord,
  ResourceTopic,
  WebinarArticleRecord,
  WebinarHubStatus,
} from "./types";

function h2(id: string, text: string): BlogContentBlock {
  return { type: "heading", level: 2, id, text };
}

function p(text: string): BlogContentBlock {
  return { type: "paragraph", text };
}

function ul(...items: string[]): BlogContentBlock {
  return { type: "ul", items };
}

const WEBINAR_BODIES: Record<string, BlogContentBlock[]> = {
  "webinar-platform-overview": [
    h2("session-focus", "Session focus"),
    p(
      "A structured tour of project, financial, field, compliance, and intelligence modules on one VertexBuild platform record — for operations leaders evaluating connected workflows.",
    ),
    h2("topics", "What the session covers"),
    ul(
      "How project, field, and financial data share one operating record.",
      "Compliance and documentation context alongside active delivery.",
      "Where intelligence and assistant capabilities fit day-to-day operations.",
    ),
    h2("format", "Format"),
    p("Live session — register to receive scheduling details when available."),
  ],
  "webinar-ai-assistant": [
    h2("session-focus", "Session focus"),
    p(
      "Documented use cases for project questions, insights, and document intelligence within VertexBuild — oriented toward teams already running active projects.",
    ),
    h2("topics", "What the session covers"),
    ul(
      "Asking project questions with document and record context.",
      "Reviewing insights tied to the project operating record.",
      "Practical boundaries for assistant use on active jobs.",
    ),
    h2("format", "Format"),
    p("On-demand recording — watch at your pace."),
  ],
  "webinar-job-cost-close": [
    h2("session-focus", "Session focus"),
    p(
      "How field activity feeds percent-complete and billing when financials share the project record — oriented toward finance and operations teams closing periods.",
    ),
    h2("topics", "What the session covers"),
    ul(
      "Connecting field signals to job cost during period close.",
      "Percent-complete and billing context on one record.",
      "Handoffs between supers, PMs, and finance during close.",
    ),
    h2("format", "Format"),
    p("This session was delivered live. A public recording is not available at this time."),
  ],
};

const WEBINAR_SLUGS: Record<string, string> = {
  "webinar-platform-overview": "vertexbuild-platform-overview-for-operations-leaders",
  "webinar-ai-assistant": "using-the-ai-assistant-on-active-projects",
  "webinar-job-cost-close": "month-end-job-cost-close-with-connected-field-data",
};

/** Session day (UTC) from ISO date string YYYY-MM-DD. */
function sessionDayUtc(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return Date.UTC(y, m - 1, d);
}

function todayDayUtc(now: Date = new Date()) {
  return Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
}

/**
 * Derive listing/detail status from session date and recording URL — not hardcoded catalog flags.
 * Future session → upcoming; past + videoUrl → on-demand; past without recording → completed.
 */
export function resolveWebinarStatus(record: ResourceRecord, now: Date = new Date()): WebinarHubStatus {
  const iso = record.publishedAt;
  if (!iso) {
    if (record.videoUrl) return "on-demand";
    return "completed";
  }
  if (sessionDayUtc(iso) > todayDayUtc(now)) return "upcoming";
  if (record.videoUrl) return "on-demand";
  return "completed";
}

function enrichWebinar(record: ResourceRecord): WebinarArticleRecord | null {
  if (record.type !== "webinar") return null;
  const slug = record.slug ?? WEBINAR_SLUGS[record.id];
  const body = record.body ?? WEBINAR_BODIES[record.id];
  const webinarStatus = resolveWebinarStatus(record);
  if (!slug || !body?.length) return null;
  return {
    ...record,
    type: "webinar",
    slug,
    body,
    webinarStatus,
    href: ROUTES.resourcesWebinarArticle(slug),
  };
}

export const FEATURED_WEBINAR_ID = "webinar-platform-overview";

export function getWebinarArticles(catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG): WebinarArticleRecord[] {
  return catalog.map(enrichWebinar).filter((item): item is WebinarArticleRecord => Boolean(item));
}

export function getFeaturedWebinar(catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG): WebinarArticleRecord | null {
  return (
    getWebinarArticles(catalog).find((w) => w.id === FEATURED_WEBINAR_ID) ?? getWebinarArticles(catalog)[0] ?? null
  );
}

export function getWebinarBySlug(
  slug: string,
  catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG,
): WebinarArticleRecord | null {
  return getWebinarArticles(catalog).find((w) => w.slug === slug) ?? null;
}

export function getWebinarStaticParams(catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG) {
  return getWebinarArticles(catalog).map((w) => ({ slug: w.slug }));
}

export function webinarTopicLabel(topic: WebinarArticleRecord["topic"]) {
  return RESOURCE_TOPIC_LABELS[topic];
}

export function webinarStatusLabel(status: WebinarHubStatus) {
  return WEBINAR_STATUS_LABELS[status];
}

/** CTA copy from catalog status only — no registration backend implied beyond navigation. */
export function webinarActionLabel(status: WebinarHubStatus): string {
  if (status === "upcoming") return "Register";
  if (status === "on-demand") return "Watch webinar";
  return "View webinar";
}

/** Listing card / featured link labels — routes to detail; no fake playback. */
export function webinarListingLinkLabel(status: WebinarHubStatus): string {
  if (status === "upcoming") return "Register for webinar";
  if (status === "on-demand") return "Watch webinar";
  return "View session details";
}

export const WEBINAR_LIBRARY_PAGE_SIZE = 6;

export function formatWebinarDate(iso?: string) {
  if (!iso) return null;
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function sortByDateDesc(webinars: WebinarArticleRecord[]) {
  return [...webinars].sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""));
}

function filterForListingGroup(
  webinars: WebinarArticleRecord[],
  status: WebinarHubStatus,
  featuredId?: string,
): WebinarArticleRecord[] {
  const inStatus = sortByDateDesc(webinars.filter((w) => w.webinarStatus === status));
  if (!featuredId) return inStatus;
  return inStatus.filter((w) => w.id !== featuredId);
}

export type WebinarListingGroup = {
  status: WebinarHubStatus;
  eyebrow: string;
  anchorId: string;
  webinars: WebinarArticleRecord[];
};

/** Status-based in-page sections on `/resources/webinars` — not routes. */
export function getWebinarListingGroups(catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG): WebinarListingGroup[] {
  const all = getWebinarArticles(catalog);
  const featured = getFeaturedWebinar(catalog);
  const groups: WebinarListingGroup[] = [
    {
      status: "upcoming",
      eyebrow: "UPCOMING",
      anchorId: "webinars-upcoming",
      webinars: filterForListingGroup(all, "upcoming", featured?.id),
    },
    {
      status: "on-demand",
      eyebrow: "ON DEMAND",
      anchorId: "webinars-on-demand",
      webinars: filterForListingGroup(all, "on-demand", featured?.id),
    },
    {
      status: "completed",
      eyebrow: "PAST SESSIONS",
      anchorId: "webinars-past",
      webinars: filterForListingGroup(all, "completed", featured?.id),
    },
  ];
  return groups.filter((g) => g.webinars.length > 0);
}

export const WEBINAR_LISTING_PAGE_ANCHORS = {
  featured: "webinars-featured",
  explore: "webinars-explore",
  connectedResources: "webinars-connected-resources",
} as const;

export type WebinarHeroVisual = "platform-modules" | "ai-assistant" | "job-cost-close";

export type WebinarCoverItem = {
  title: string;
  description: string;
};

export type WebinarDetailMeta = {
  heroVisual: WebinarHeroVisual;
  overviewLead: string;
  overviewContext?: string;
  coverItems: WebinarCoverItem[];
  coverFlowLabels: string[];
  formatSummary: string;
  formatKind: string;
  /** Derived from session coverage bullets — not separate marketing claims. */
  keyTakeaways: string[];
  registrationAvailability: string;
};

export type WebinarSessionDetailField = {
  id: "date" | "availability" | "format" | "registration";
  label: string;
  value: string;
};

const WEBINAR_HERO_VISUAL: Record<string, WebinarHeroVisual> = {
  "webinar-platform-overview": "platform-modules",
  "webinar-ai-assistant": "ai-assistant",
  "webinar-job-cost-close": "job-cost-close",
};

const WEBINAR_COVER_FLOW: Record<string, string[]> = {
  "webinar-platform-overview": ["PROJECT", "FIELD", "FINANCIAL", "COMPLIANCE", "INTELLIGENCE"],
  "webinar-ai-assistant": ["PROJECT", "DOCUMENTS", "INTELLIGENCE"],
  "webinar-job-cost-close": ["FIELD", "FINANCIAL", "HANDOFFS"],
};

const WEBINAR_COVER_TITLES: Record<string, string[]> = {
  "webinar-platform-overview": [
    "Project · field · financial",
    "Compliance & documentation",
    "Intelligence & assistant",
  ],
  "webinar-ai-assistant": ["Project questions", "Operating insights", "Practical boundaries"],
  "webinar-job-cost-close": ["Field to job cost", "Percent-complete & billing", "Super · PM · finance"],
};

const AUDIENCE_LABELS: Record<ResourceAudience, string> = {
  gc: "General contractors",
  specialty: "Specialty contractors",
  finance: "Finance / accounting",
  operations: "Operations leaders",
  executive: "Executive leaders",
};

function blockAfterHeading(body: BlogContentBlock[], headingText: string): BlogContentBlock | null {
  const idx = body.findIndex(
    (b) => b.type === "heading" && b.level === 2 && b.text.toLowerCase() === headingText.toLowerCase(),
  );
  if (idx === -1) return null;
  return body[idx + 1] ?? null;
}

function paragraphAfterHeading(body: BlogContentBlock[], headingText: string): string | null {
  const block = blockAfterHeading(body, headingText);
  return block?.type === "paragraph" ? block.text : null;
}

function listAfterHeading(body: BlogContentBlock[], headingText: string): string[] {
  const block = blockAfterHeading(body, headingText);
  return block?.type === "ul" ? block.items : [];
}

function formatKindFromCopy(formatParagraph: string, status: WebinarHubStatus): string {
  const lower = formatParagraph.toLowerCase();
  if (lower.includes("on-demand")) return "On-demand session";
  if (lower.includes("live")) return "Live session";
  if (status === "completed") return "Past session";
  return webinarStatusLabel(status);
}

/** Registration row copy from catalog status + format paragraph only. */
function registrationAvailabilityFromSource(formatSummary: string, status: WebinarHubStatus): string {
  const lower = formatSummary.toLowerCase();
  if (status === "upcoming") return "Open";
  if (status === "on-demand") return "Available";
  if (lower.includes("not available")) return "Not available";
  return webinarStatusLabel(status);
}

function buildWebinarDetailMeta(webinar: WebinarArticleRecord): WebinarDetailMeta | null {
  const heroVisual = WEBINAR_HERO_VISUAL[webinar.id];
  const coverFlowLabels = WEBINAR_COVER_FLOW[webinar.id];
  const titlePreset = WEBINAR_COVER_TITLES[webinar.id];
  if (!heroVisual || !coverFlowLabels || !titlePreset) return null;

  const overviewLead = paragraphAfterHeading(webinar.body, "Session focus") ?? webinar.description;
  const topicItems = listAfterHeading(webinar.body, "What the session covers");
  const formatSummary = paragraphAfterHeading(webinar.body, "Format") ?? "";
  if (!topicItems.length || !formatSummary) return null;

  const coverItems: WebinarCoverItem[] = topicItems.map((description, index) => ({
    title: titlePreset[index] ?? `Focus ${index + 1}`,
    description,
  }));

  const formatKind = formatKindFromCopy(formatSummary, webinar.webinarStatus);

  return {
    heroVisual,
    overviewLead,
    overviewContext: webinar.description !== overviewLead ? webinar.description : undefined,
    coverItems,
    coverFlowLabels: coverFlowLabels.slice(0, coverItems.length),
    formatSummary,
    formatKind,
    keyTakeaways: topicItems,
    registrationAvailability: registrationAvailabilityFromSource(formatSummary, webinar.webinarStatus),
  };
}

export function getWebinarDetailMeta(webinar: WebinarArticleRecord): WebinarDetailMeta | null {
  return buildWebinarDetailMeta(webinar);
}

export function getWebinarSessionDetailFields(
  webinar: WebinarArticleRecord,
  meta: WebinarDetailMeta,
): WebinarSessionDetailField[] {
  const date = formatWebinarDate(webinar.publishedAt);
  const fields: WebinarSessionDetailField[] = [];

  if (date) {
    fields.push({ id: "date", label: "Date", value: date });
  }
  fields.push({
    id: "availability",
    label: "Availability",
    value: webinarStatusLabel(webinar.webinarStatus),
  });
  fields.push({ id: "format", label: "Format", value: meta.formatKind });
  fields.push({
    id: "registration",
    label: "Registration",
    value: meta.registrationAvailability,
  });

  return fields;
}

export function webinarAudienceLabels(audience: ResourceAudience[] | undefined): string[] {
  if (!audience?.length) return [];
  return audience.map((id) => AUDIENCE_LABELS[id]);
}

/** Marketing navigation for session CTAs — no registration backend. */
export function getWebinarRegistrationCta(status: WebinarHubStatus): { label: string; href: string } {
  if (status === "upcoming") {
    return { label: webinarActionLabel(status), href: CTAS.demo.href };
  }
  if (status === "on-demand") {
    return { label: webinarActionLabel(status), href: ROUTES.productTour };
  }
  return { label: webinarActionLabel(status), href: ROUTES.resourcesWebinars };
}

export function getRelatedResourcesForWebinar(
  webinar: WebinarArticleRecord,
  limit = 4,
  catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG,
): ResourceRecord[] {
  const others = catalog.filter((item) => item.id !== webinar.id);
  const sameTopic = others.filter((item) => item.topic === webinar.topic);
  const rest = others.filter((item) => item.topic !== webinar.topic);
  return [...sameTopic, ...rest].slice(0, limit);
}

export function getRelatedWebinars(
  webinar: WebinarArticleRecord,
  limit = 3,
  catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG,
): WebinarArticleRecord[] {
  const others = getWebinarArticles(catalog).filter((w) => w.id !== webinar.id);
  const sameTopic = others.filter((w) => w.topic === webinar.topic);
  const rest = others.filter((w) => w.topic !== webinar.topic);
  return [...sameTopic, ...rest].slice(0, limit);
}

export type WebinarTopicFilterId = "all" | ResourceTopic;
export type WebinarStatusFilterId = "all" | WebinarHubStatus;

export function getWebinarTopicFilters(catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG) {
  const topics = new Set(getWebinarArticles(catalog).map((w) => w.topic));
  return [
    { id: "all" as const, label: "All" },
    ...Array.from(topics).map((topic) => ({
      id: topic,
      label: RESOURCE_TOPIC_LABELS[topic],
    })),
  ];
}

export function getWebinarStatusFilters() {
  return [
    { id: "all" as const, label: "All statuses" },
    { id: "upcoming" as const, label: WEBINAR_STATUS_LABELS.upcoming },
    { id: "on-demand" as const, label: WEBINAR_STATUS_LABELS["on-demand"] },
    { id: "completed" as const, label: WEBINAR_STATUS_LABELS.completed },
  ] as const;
}

function normalizeSearch(s: string) {
  return s.trim().toLowerCase();
}

/** Client-side search over catalog fields — no fake results. */
export function filterWebinarArticles(
  webinars: WebinarArticleRecord[],
  options: {
    query?: string;
    topic?: WebinarTopicFilterId;
    status?: WebinarStatusFilterId;
  },
): WebinarArticleRecord[] {
  let result = webinars;
  const q = normalizeSearch(options.query ?? "");
  if (options.topic && options.topic !== "all") {
    result = result.filter((w) => w.topic === options.topic);
  }
  if (options.status && options.status !== "all") {
    result = result.filter((w) => w.webinarStatus === options.status);
  }
  if (!q) return result;
  return result.filter((w) => {
    const topic = webinarTopicLabel(w.topic).toLowerCase();
    const status = webinarStatusLabel(w.webinarStatus).toLowerCase();
    const author = (w.author ?? "").toLowerCase();
    return (
      w.title.toLowerCase().includes(q) ||
      w.description.toLowerCase().includes(q) ||
      topic.includes(q) ||
      status.includes(q) ||
      author.includes(q)
    );
  });
}

export function excludeWebinarById(webinars: WebinarArticleRecord[], id?: string) {
  if (!id) return webinars;
  return webinars.filter((w) => w.id !== id);
}
