export type ResourceType = "blog" | "guide" | "template" | "webinar";

export type ResourceTopic =
  | "project-management"
  | "financials"
  | "field-operations"
  | "compliance"
  | "platform"
  | "getting-started";

export type ResourceAudience = "gc" | "specialty" | "finance" | "operations" | "executive";

export type WebinarHubStatus = "upcoming" | "on-demand" | "completed";

/** Structured article body for Blog Detail. */
export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string; id: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "callout"; title?: string; text: string }
  | { type: "image"; src: string; alt: string; caption?: string };

/** Catalog item — CMS-1326+ can replace preview entries with published content. */
export type ResourceRecord = {
  id: string;
  type: ResourceType;
  title: string;
  description: string;
  topic: ResourceTopic;
  audience?: ResourceAudience[];
  /** ISO date when known; omit for evergreen templates. */
  publishedAt?: string;
  /** Navigation target — listing or detail slug route. */
  href: string;
  /** URL slug for detail pages. */
  slug?: string;
  /** Preview catalog only — not presented as verified customer proof. */
  catalogStatus: "preview";
  /** Hub webinar previews — supports upcoming / on-demand / completed states. */
  webinarStatus?: WebinarHubStatus;
  /** Template preview — format label (worksheet, checklist, etc.). */
  templateFormat?: string;
  /** Editorial article image — curated construction photography when available. */
  image?: {
    src: string;
    alt: string;
  };
  /** Long-form article body for Blog Detail. */
  body?: BlogContentBlock[];
  author?: string;
  readingMinutes?: number;
};

export type BlogArticleRecord = ResourceRecord & {
  type: "blog";
  slug: string;
  body: BlogContentBlock[];
};

/** Long-form guide detail — shares block model with blog for CMS parity. */
export type GuideArticleRecord = ResourceRecord & {
  type: "guide";
  slug: string;
  body: BlogContentBlock[];
  /** Display label e.g. "In-depth guide" */
  guideFormat?: string;
};

export type HelpDocCategoryPreview = {
  id: string;
  title: string;
  description: string;
  href: string;
};
