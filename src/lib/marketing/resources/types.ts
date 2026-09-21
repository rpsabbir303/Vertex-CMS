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
  /** Navigation target — listing or future detail slug. */
  href: string;
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
};

export type HelpDocCategoryPreview = {
  id: string;
  title: string;
  description: string;
  href: string;
};
