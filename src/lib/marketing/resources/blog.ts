/**
 * Blog Detail catalog helpers (CMS-1327).
 * Article bodies are structured educational content — no invented customers or metrics.
 */

import { photos } from "@/lib/images";
import { ROUTES } from "@/lib/marketing/navigation";
import { RESOURCES_PREVIEW_CATALOG, RESOURCE_TOPIC_LABELS } from "./content";
import type { BlogArticleRecord, BlogContentBlock, ResourceRecord, ResourceTopic } from "./types";

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

function quote(text: string): BlogContentBlock {
  return { type: "quote", text };
}

function callout(text: string, title?: string): BlogContentBlock {
  return { type: "callout", title, text };
}

/** Educational bodies keyed by article id — kept separate from listing metadata. */
const BLOG_BODIES: Record<string, BlogContentBlock[]> = {
  "blog-field-to-financial": [
    h2("why-context-breaks", "Why field and financial context break apart"),
    p(
      "On many active jobs, daily logs live with the superintendent while cost and billing live with accounting. When those records are separate, teams re-enter the same progress story in multiple places — and disagreements show up late.",
    ),
    p(
      "Shared project context does not replace judgment. It gives field, project management, and finance a common place to see what happened on site and how that activity relates to the job record.",
    ),
    h2("what-shared-context-means", "What shared project context actually means"),
    ul(
      "Daily logs reference the same project and cost structure used for job cost.",
      "Percent-complete and billing discussions start from field activity already captured on the job.",
      "Questions about weather, crew, or delays can be reviewed without rebuilding the story from email.",
    ),
    quote(
      "The goal is fewer handoff gaps — not automated financial decisions without review.",
    ),
    h2("practical-handoff-points", "Practical handoff points on active jobs"),
    h3("superintendent-to-pm", "Superintendent to project manager"),
    p(
      "Field notes, photos, and daily conditions stay attached to the project so PMs can review status without chasing separate logs across tools.",
    ),
    h3("pm-to-accounting", "Project manager to accounting"),
    p(
      "Progress discussions for billing and job cost can reference the same project activity trail, reducing rework when month-end questions arrive.",
    ),
    callout(
      "Start by agreeing which field events belong on the shared project record — then keep daily capture consistent enough that finance can trust the trail.",
      "Implementation note",
    ),
    h2("how-vertexbuild-supports-this", "How VertexBuild supports this workflow"),
    p(
      "VertexBuild is designed so field activity and financial workflows can share one project operating record. Teams still review and approve consequential billing and cost decisions — the platform keeps context connected.",
    ),
  ],
  "blog-wip-reporting": [
    h2("the-spreadsheet-problem", "The disconnected spreadsheet problem"),
    p(
      "WIP reporting often becomes a monthly rebuild: export job cost, merge percent-complete from somewhere else, then reconcile billing in a third file. The report may be accurate for a moment — and outdated the next day.",
    ),
    h2("align-three-signals", "Align three signals on one record"),
    ol(
      "Budget and cost structure for the job.",
      "Progress indicators that project and field teams can review.",
      "Billing status that finance can reconcile without a parallel workbook.",
    ),
    p(
      "When those signals sit on the same project record, WIP conversations focus on interpretation — not on reconstructing the numbers.",
    ),
    h2("keep-review-human", "Keep review with your team"),
    p(
      "Connected data does not decide percent-complete for you. It reduces copy-paste and makes differences between cost, progress, and billed amounts easier to see during close.",
    ),
    callout(
      "Define who owns progress updates before month-end. Shared records help only when ownership is clear.",
      "Process tip",
    ),
    h2("platform-context", "Platform context"),
    p(
      "VertexBuild connects job cost, field activity, and billing workflows so WIP review can start from the project record instead of a disconnected spreadsheet stack.",
    ),
  ],
  "blog-submittal-workflow": [
    h2("why-submittals-drift", "Why submittals drift from the schedule"),
    p(
      "When submittal status lives in a separate tracker, PMs and supers lose the link between document review and field need dates. The schedule moves; the tracker lags.",
    ),
    h2("keep-status-visible", "Keep review status visible to the people who need it"),
    ul(
      "Tie each submittal to the project schedule context that depends on it.",
      "Make responsible parties and due dates visible without a second tool.",
      "Preserve the trail from package receipt through review and return.",
    ),
    h2("reduce-duplicate-tracking", "Reduce duplicate tracking"),
    p(
      "Duplicate trackers create conflicting truths. A single project-connected submittal path helps field and office discuss the same status.",
    ),
    quote("Visibility beats volume — fewer tools, clearer ownership."),
    h2("vertexbuild-fit", "Where VertexBuild fits"),
    p(
      "VertexBuild keeps document workflows connected to the project record so submittal status can stay aligned with schedule and field coordination.",
    ),
  ],
  "blog-rfi-decisions": [
    h2("from-request-to-decision", "From request to decision"),
    p(
      "RFIs stall when ownership is unclear, responses are buried in email, or site context is missing from the question. Faster decisions come from a visible path — not from more messages.",
    ),
    h2("shared-ownership", "Shared ownership and response paths"),
    ol(
      "Capture the question with enough drawing or location context to act.",
      "Assign a clear responder and due expectation.",
      "Record the decision where the project team can find it later.",
    ),
    h2("keep-site-context", "Keep site context with the RFI"),
    p(
      "Photos, markups, and location notes help reviewers answer once. Without them, teams re-ask the same question from the field.",
    ),
    callout(
      "Close the loop: every answered RFI should leave a durable project record, not only an email reply.",
    ),
    h2("connected-project-record", "Connected project record"),
    p(
      "VertexBuild supports RFI workflows on the same project record used for drawings, documents, and field coordination — so decisions stay findable during delivery.",
    ),
  ],
  "blog-change-orders": [
    h2("why-changes-stall-work", "Why changes stall active work"),
    p(
      "Change orders slow jobs when cost, schedule, and field impact are reviewed in separate threads. Teams wait for a complete picture that never lands in one place.",
    ),
    h2("one-change-path", "One path for cost, schedule, and field impact"),
    ul(
      "Describe the scope change with enough detail for review.",
      "Connect cost and schedule considerations to the same change record.",
      "Keep field impact visible so supers are not surprised mid-work.",
    ),
    h2("review-without-rebuilding", "Review without rebuilding the package"),
    p(
      "When supporting documents and prior decisions live with the change, reviewers spend less time reconstructing history and more time deciding.",
    ),
    quote("Momentum comes from clear review paths — not from skipping review."),
    h2("vertexbuild-context", "VertexBuild context"),
    p(
      "VertexBuild keeps change workflows connected to the project operating record so cost, documents, and field context can stay together during review.",
    ),
  ],
  "blog-closeout-process": [
    h2("closeout-is-not-a-new-system", "Closeout should not start a new system"),
    p(
      "Late-stage handoffs fail when punch lists, documents, and checklists live outside the project record used during delivery. Closeout then becomes a reconstruction exercise.",
    ),
    h2("connect-the-final-work", "Connect the final work to the same record"),
    ol(
      "Keep punch items tied to locations and responsible trades on the project.",
      "Attach closeout documents to the same job the team already uses.",
      "Use a shared checklist so office and field see remaining items together.",
    ),
    h2("handoff-clarity", "Handoff clarity"),
    p(
      "Owners and operations teams need a coherent trail — what is open, what is complete, and where supporting documents live.",
    ),
    callout(
      "Define closeout ownership early. Connected tools help most when roles are already clear.",
      "Team practice",
    ),
    h2("platform-note", "Platform note"),
    p(
      "VertexBuild is designed so late-stage punch, documentation, and handoff work can stay on the same project record used earlier in the job.",
    ),
  ],
  "blog-schedule-field-office": [
    h2("conflicting-updates", "Conflicting updates between field and office"),
    p(
      "When supers, PMs, and coordinators maintain separate schedule views, updates collide. The field plans one sequence; the office reports another.",
    ),
    h2("shared-visibility", "Shared schedule visibility"),
    ul(
      "One current schedule context for field and office roles.",
      "Clear ownership for updates so changes are not overwritten silently.",
      "Visibility into near-term work without exporting a weekly PDF rebuild.",
    ),
    h2("handoffs-that-stick", "Handoffs that stick"),
    p(
      "Look-ahead and daily coordination improve when everyone references the same schedule state — even when conversations still happen on site.",
    ),
    quote("Alignment is a shared view plus clear ownership — not more status meetings."),
    h2("vertexbuild-fit", "VertexBuild fit"),
    p(
      "VertexBuild connects scheduling with project and field workflows so field and office teams can work from shared schedule visibility on active jobs.",
    ),
  ],
  "blog-drawing-control": [
    h2("outdated-sheets", "The cost of outdated sheets"),
    p(
      "Field teams working from yesterday’s set create rework. Drawing control fails when current sets, markups, and revision history are hard to find.",
    ),
    h2("keep-the-current-set-obvious", "Keep the current set obvious"),
    ol(
      "Publish a clear current set for the project.",
      "Preserve markups and revision history where the team already looks.",
      "Make supers and PMs confident they are viewing the same sheets.",
    ),
    h2("jobsite-reality", "Jobsite reality"),
    p(
      "Connectivity varies. Drawing control still needs a durable project record so teams can confirm revisions when they reconnect.",
    ),
    callout(
      "Train the team on where the current set lives. Process consistency matters as much as software.",
    ),
    h2("platform-context", "Platform context"),
    p(
      "VertexBuild keeps drawings connected to the project record so revision history and current sets can stay visible across field and office roles.",
    ),
  ],
  "blog-safety-observations": [
    h2("observations-need-context", "Observations need project context"),
    p(
      "Safety observations lose value when they are captured without crew, location, or follow-up context — or when they never reconnect to the project record.",
    ),
    h2("link-to-the-job", "Link observations to the job"),
    ul(
      "Capture observations against the same project used for daily logs.",
      "Keep follow-up actions visible to the people responsible.",
      "Preserve enough detail for later review without creating a parallel safety silo.",
    ),
    h2("not-legal-advice", "Product support is not legal advice"),
    p(
      "VertexBuild can help teams organize safety-related field capture and project context. It does not replace your organization’s safety program, training, or compliance obligations.",
    ),
    callout(
      "Align observation categories with your internal safety process before rolling out a shared capture path.",
      "Governance note",
    ),
    h2("connected-field-record", "Connected field record"),
    p(
      "When observations sit beside daily logs and crew context, supervisors can review patterns with less reconstruction from separate notes.",
    ),
  ],
  "blog-owner-status": [
    h2("the-rebuild-cycle", "The status-report rebuild cycle"),
    p(
      "Owner meetings often trigger a late scramble: gather progress, documents, and financial signals from different systems, then format a one-off report.",
    ),
    h2("share-signals-earlier", "Share signals earlier"),
    ol(
      "Keep progress and document status on the project record throughout the period.",
      "Reuse the same signals finance and operations already review.",
      "Prepare owner updates from shared context instead of rebuilding from scratch.",
    ),
    h2("executive-clarity", "Executive clarity without a new spreadsheet"),
    p(
      "Leaders need a coherent view of status — not a guarantee of outcomes. Shared project signals reduce last-minute assembly work.",
    ),
    quote("Better owner updates start with better day-to-day project records."),
    h2("vertexbuild-context", "VertexBuild context"),
    p(
      "VertexBuild connects project, document, and financial workflows so status conversations can draw from the operating record teams already use.",
    ),
  ],
};

const BLOG_SLUGS: Record<string, string> = {
  "blog-field-to-financial": "connecting-daily-field-logs-to-project-financials",
  "blog-wip-reporting": "wip-reporting-without-disconnected-spreadsheets",
  "blog-submittal-workflow": "submittal-workflows-that-stay-tied-to-the-schedule",
  "blog-rfi-decisions": "turning-rfis-into-faster-decisions",
  "blog-change-orders": "controlling-change-orders-without-losing-momentum",
  "blog-closeout-process": "building-a-connected-closeout-process",
  "blog-schedule-field-office": "keeping-field-and-office-on-the-same-schedule",
  "blog-drawing-control": "drawing-control-that-survives-the-jobsite",
  "blog-safety-observations": "capturing-safety-observations-without-losing-project-context",
  "blog-owner-status": "owner-status-updates-without-rebuilding-the-report",
};

function enrichBlog(record: ResourceRecord): BlogArticleRecord | null {
  if (record.type !== "blog") return null;
  const slug = record.slug ?? BLOG_SLUGS[record.id];
  const body = record.body ?? BLOG_BODIES[record.id];
  if (!slug || !body?.length) return null;
  return {
    ...record,
    type: "blog",
    slug,
    body,
    href: ROUTES.resourcesBlogArticle(slug),
  };
}

export function getBlogArticles(catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG): BlogArticleRecord[] {
  return catalog
    .map(enrichBlog)
    .filter((item): item is BlogArticleRecord => Boolean(item));
}

export function getBlogBySlug(
  slug: string,
  catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG,
): BlogArticleRecord | null {
  return getBlogArticles(catalog).find((article) => article.slug === slug) ?? null;
}

export function getBlogStaticParams(catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG) {
  return getBlogArticles(catalog).map((article) => ({ slug: article.slug }));
}

export function getRelatedBlogArticles(
  article: BlogArticleRecord,
  limit = 3,
  catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG,
): BlogArticleRecord[] {
  const others = getBlogArticles(catalog).filter((item) => item.id !== article.id);
  const sameTopic = others.filter((item) => item.topic === article.topic);
  const rest = others.filter((item) => item.topic !== article.topic);
  return [...sameTopic, ...rest].slice(0, limit);
}

export function getRelatedHubResources(
  article: BlogArticleRecord,
  limit = 3,
  catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG,
): ResourceRecord[] {
  return catalog
    .filter((item) => item.type !== "blog" && item.topic === article.topic)
    .slice(0, limit);
}

export function getBlogToc(article: BlogArticleRecord) {
  return article.body
    .filter((block): block is Extract<BlogContentBlock, { type: "heading" }> => block.type === "heading" && block.level === 2)
    .map((block, index) => ({
      id: block.id,
      label: block.text,
      index: index + 1,
    }));
}

export function formatBlogDate(iso?: string) {
  if (!iso) return null;
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function blogTopicLabel(topic: ResourceTopic) {
  return RESOURCE_TOPIC_LABELS[topic];
}

export const FEATURED_BLOG_ID = "blog-field-to-financial";

export const BLOG_LISTING_PAGE_ANCHORS = {
  featured: "blog-featured",
  library: "blog-library",
  connectedResources: "blog-connected-resources",
} as const;

const BLOG_PAGE_SIZE = 6;

export { BLOG_PAGE_SIZE };

function sortBlogArticlesByDate(articles: BlogArticleRecord[]) {
  return [...articles].sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""));
}

export function getFeaturedBlog(catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG): BlogArticleRecord | null {
  return (
    getBlogArticles(catalog).find((a) => a.id === FEATURED_BLOG_ID) ?? getBlogArticles(catalog)[0] ?? null
  );
}

export function excludeBlogById(articles: BlogArticleRecord[], id?: string) {
  if (!id) return sortBlogArticlesByDate(articles);
  return sortBlogArticlesByDate(articles.filter((a) => a.id !== id));
}

export type BlogTopicFilterId = "all" | ResourceTopic;

export function getBlogTopicFilters(catalog: ResourceRecord[] = RESOURCES_PREVIEW_CATALOG) {
  const topics = new Set(getBlogArticles(catalog).map((a) => a.topic));
  return [
    { id: "all" as const, label: "All" },
    ...Array.from(topics).map((topic) => ({
      id: topic,
      label: RESOURCE_TOPIC_LABELS[topic],
    })),
  ];
}

function normalizeSearch(s: string) {
  return s.trim().toLowerCase();
}

function blockPlainText(block: BlogContentBlock): string {
  switch (block.type) {
    case "paragraph":
    case "quote":
      return block.text;
    case "heading":
      return block.text;
    case "ul":
    case "ol":
      return block.items.join(" ");
    case "callout":
      return `${block.title ?? ""} ${block.text}`;
    case "image":
      return block.caption ?? "";
    default:
      return "";
  }
}

/** Derived from catalog field or article body length — not a marketing claim. */
export function getBlogReadingMinutes(article: BlogArticleRecord): number | null {
  if (typeof article.readingMinutes === "number") return article.readingMinutes;
  const text = article.body.map(blockPlainText).join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  if (words === 0) return null;
  return Math.max(1, Math.round(words / 200));
}

/** Client-side search over catalog fields — no fake results. */
export function filterBlogArticles(
  articles: BlogArticleRecord[],
  options: {
    query?: string;
    topic?: BlogTopicFilterId;
  },
): BlogArticleRecord[] {
  let result = articles;
  const q = normalizeSearch(options.query ?? "");
  if (options.topic && options.topic !== "all") {
    result = result.filter((a) => a.topic === options.topic);
  }
  if (!q) return result;
  return result.filter((a) => {
    const topic = blogTopicLabel(a.topic).toLowerCase();
    const author = (a.author ?? "").toLowerCase();
    return (
      a.title.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q) ||
      topic.includes(q) ||
      author.includes(q)
    );
  });
}

/** Optional body image for the featured field article — reuses approved photo assets. */
export const BLOG_INLINE_IMAGES = {
  fieldContext: {
    src: photos.documents,
    alt: "Project documents used when coordinating field activity and office review",
    caption: "Shared project documents help field and office review the same context.",
  },
} as const;
