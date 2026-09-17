/** Integration catalog types — shared with landing and detail routes. */

export type IntegrationAvailability = "AVAILABLE" | "COMING_SOON";

/** Platform capability vs named third-party integration (BRD distinction). */
export type IntegrationKind = "capability" | "integration";

export type IntegrationCategoryId =
  | "accounting"
  | "e-signature"
  | "productivity"
  | "platform"
  | "other";

export type IntegrationCategory = {
  id: IntegrationCategoryId | "all";
  label: string;
  description: string;
};

export type IntegrationBenefitItem =
  | string
  | {
      title: string;
      description?: string;
    };

export type IntegrationDataExchangeGroup = {
  label: string;
  /** Documented flow direction — omit when not specified in source data. */
  direction?: "vertex-out" | "vertex-in" | "both";
  items: string[];
};

export type IntegrationHowItWorksStep = {
  title: string;
  body: string;
};

/** Documented connection flow — only populate from approved source data. */
export type IntegrationHowItWorks = {
  /** Human-readable flow when direction is documented (e.g. outbound webhooks). */
  directionLabel?: string;
  layers?: { label: string; detail?: string }[];
  steps?: IntegrationHowItWorksStep[];
};

export type IntegrationDetailExtraSection = {
  id: string;
  title: string;
  body?: string;
  items?: string[];
  links?: { label: string; href: string }[];
};

export type IntegrationDetailFields = {
  overview?: string;
  /** Structured overview points when multiple documented statements exist. */
  overviewPoints?: string[];
  howItWorks?: IntegrationHowItWorks;
  /** High-level exchange description when field-level data is not documented. */
  dataExchangeSummary?: string;
  dataExchanged?: string[];
  dataExchangedGroups?: IntegrationDataExchangeGroup[];
  benefits?: IntegrationBenefitItem[];
  requirements?: string[];
  requirementsNote?: string;
  capabilities?: string[];
  workflows?: string[];
  technicalNotes?: string[];
  limitations?: string[];
  documentationLinks?: { label: string; href: string }[];
  additionalSections?: IntegrationDetailExtraSection[];
};

export type IntegrationRecord = {
  id: string;
  slug: string;
  name: string;
  kind: IntegrationKind;
  categoryId: IntegrationCategoryId;
  shortDescription: string;
  availability: IntegrationAvailability;
  logoSrc?: string;
  monogram?: string;
  featured?: boolean;
  detailSummary?: string;
  detail?: IntegrationDetailFields;
};

export type IntegrationsCatalogResult = {
  items: IntegrationRecord[];
  loadedAt: number;
};

export type IntegrationsCatalogError = {
  message: string;
  retryable: boolean;
};
