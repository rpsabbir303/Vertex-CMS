/**
 * Legal document content for Vertex CMS public marketing site.
 *
 * RULES:
 * - Do NOT invent legal claims, certifications, dates, vendors, jurisdictions,
 *   retention periods, contact emails, or contractual terms.
 * - Documented facts only where the project already states them.
 * - Missing clauses use editable placeholders for Vertex / legal counsel.
 *
 * lastUpdated / version: set to a string when counsel provides values; leave null otherwise.
 *
 * Demo sections (demoContent: true) are sample copy for visual design review only.
 */

import { COOKIES_DEMO_SECTIONS } from "./demo/cookiesDemo";
import { DPA_DEMO_SECTIONS } from "./demo/dpaDemo";
import { PRIVACY_DEMO_SECTIONS } from "./demo/privacyDemo";
import { TERMS_DEMO_SECTIONS } from "./demo/termsDemo";

export type LegalDocId = "terms" | "privacy" | "dpa" | "cookies";

export type LegalList = {
  ordered?: boolean;
  items: string[];
  /** When true, list is illustrative / pending — not official policy */
  placeholder?: boolean;
};

export type LegalTable = {
  caption?: string;
  headers: string[];
  rows: string[][];
  /** When true, table is illustrative / pending — not official policy */
  placeholder?: boolean;
};

export type LegalSubsection = {
  title: string;
  body?: string[];
  lists?: LegalList[];
};

export type LegalSection = {
  id: string;
  title: string;
  /** Faithful documented text, or placeholder for counsel */
  body: string[];
  /** Optional lists for long-form legal copy */
  lists?: LegalList[];
  /** Optional tables for structured DPA / disclosure content */
  tables?: LegalTable[];
  /** Nested subsections (h3) within a section */
  subsections?: LegalSubsection[];
  /** When true, section is a structural placeholder — not official policy */
  placeholder?: boolean;
};

export type LegalDocument = {
  id: LegalDocId;
  slug: string;
  navLabel: string;
  title: string;
  /** Short description only when source-supported */
  description: string | null;
  metaTitle: string;
  metaDescription: string;
  /** When true, document uses sample copy for visual design review */
  demoContent?: boolean;
  lastUpdated: string | null;
  version: string | null;
  sections: LegalSection[];
};

export const LEGAL_DOCS: Record<LegalDocId, LegalDocument> = {
  terms: {
    id: "terms",
    slug: "/terms",
    navLabel: "Terms",
    title: "Terms of Service",
    description:
      "Terms governing access to and use of the Vertex CMS platform and related services.",
    metaTitle: "Terms of Service | Vertex CMS",
    metaDescription:
      "Read the Vertex CMS Terms of Service document for platform access and use.",
    demoContent: true,
    lastUpdated: null,
    version: null,
    sections: TERMS_DEMO_SECTIONS,
  },
  privacy: {
    id: "privacy",
    slug: "/privacy",
    navLabel: "Privacy",
    title: "Privacy Policy",
    description:
      "How Vertex CMS handles personal information in connection with the platform and this website.",
    metaTitle: "Privacy Policy | Vertex CMS",
    metaDescription:
      "Read the Vertex CMS Privacy Policy document for information about personal data practices.",
    demoContent: true,
    lastUpdated: null,
    version: null,
    sections: PRIVACY_DEMO_SECTIONS,
  },
  dpa: {
    id: "dpa",
    slug: "/dpa",
    navLabel: "DPA",
    title: "Data Processing Addendum",
    description:
      "Data processing terms for Vertex CMS customer arrangements.",
    metaTitle: "Data Processing Addendum | Vertex CMS",
    metaDescription:
      "Read the Vertex CMS Data Processing Addendum (DPA) document for customer data processing arrangements.",
    demoContent: true,
    lastUpdated: null,
    version: null,
    sections: DPA_DEMO_SECTIONS,
  },
  cookies: {
    id: "cookies",
    slug: "/cookie-policy",
    navLabel: "Cookie Policy",
    title: "Cookie Policy",
    description: "Cookie and tracking practices for the Vertex CMS website.",
    metaTitle: "Cookie Policy | Vertex CMS",
    metaDescription:
      "Read the Vertex CMS Cookie Policy document for website cookie and tracking practices.",
    demoContent: true,
    lastUpdated: null,
    version: null,
    sections: COOKIES_DEMO_SECTIONS,
  },
};

/**
 * Canonical legal document routes — labels come from i18n (t.legal.nav).
 * Order: Terms → Privacy → DPA → Cookie Policy
 */
export const LEGAL_NAV: { id: LegalDocId; href: string }[] = [
  { id: "terms", href: LEGAL_DOCS.terms.slug },
  { id: "privacy", href: LEGAL_DOCS.privacy.slug },
  { id: "dpa", href: LEGAL_DOCS.dpa.slug },
  { id: "cookies", href: LEGAL_DOCS.cookies.slug },
];

export function getLegalDocument(id: LegalDocId): LegalDocument {
  return LEGAL_DOCS[id];
}

/** True when every section is marked placeholder — show pending banner. */
export function isLegalDocumentContentPending(document: LegalDocument): boolean {
  return document.sections.length > 0 && document.sections.every((s) => s.placeholder);
}

/** Document-specific pending banner copy — no fabricated legal text. */
export function getLegalPendingBannerBody(docId: LegalDocId): string | undefined {
  const labels: Record<LegalDocId, string> = {
    terms: "Terms of Service",
    privacy: "Privacy Policy",
    dpa: "Data Processing Addendum",
    cookies: "Cookie Policy",
  };
  const label = labels[docId];
  if (!isLegalDocumentContentPending(LEGAL_DOCS[docId])) return undefined;
  return `This page presents the document structure only. Official ${label} will replace placeholder content once Vertex legal counsel publishes approved copy.`;
}

/** Shared placeholder token for meta fields — never invent dates/versions in UI. */
export const LEGAL_META_PENDING = "[To be provided]";

