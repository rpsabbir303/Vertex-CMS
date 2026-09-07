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
 */

export type LegalDocId = "terms" | "privacy" | "dpa" | "cookies";

export type LegalSection = {
  id: string;
  title: string;
  /** Faithful documented text, or placeholder for counsel */
  body: string[];
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
  lastUpdated: string | null;
  version: string | null;
  sections: LegalSection[];
};

const PLACEHOLDER = "[Legal section to be provided by Vertex/legal counsel]";
const TERMS_PLACEHOLDER = "[Terms content to be provided by Vertex/legal counsel]";
const PRIVACY_PLACEHOLDER = "[Privacy policy content to be provided by Vertex/legal counsel]";
const DPA_PLACEHOLDER = "[Data Processing Addendum content to be provided by Vertex/legal counsel]";
const COOKIE_PLACEHOLDER = "[Cookie Policy content to be provided by Vertex/legal counsel]";

function placeholderSection(id: string, title: string, line: string): LegalSection {
  return {
    id,
    title,
    placeholder: true,
    body: [line],
  };
}

export const LEGAL_DOCS: Record<LegalDocId, LegalDocument> = {
  terms: {
    id: "terms",
    slug: "/terms",
    navLabel: "Terms",
    title: "Terms of Service",
    description: null,
    metaTitle: "Terms of Service | Vertex CMS",
    metaDescription: "Vertex CMS Terms of Service.",
    lastUpdated: null,
    version: null,
    sections: [
      placeholderSection("introduction", "1. Introduction", TERMS_PLACEHOLDER),
      placeholderSection("agreement", "2. Agreement", TERMS_PLACEHOLDER),
      placeholderSection("use-of-service", "3. Use of the Service", TERMS_PLACEHOLDER),
      placeholderSection("accounts", "4. Accounts", TERMS_PLACEHOLDER),
      placeholderSection("subscriptions-billing", "5. Subscriptions and Billing", TERMS_PLACEHOLDER),
      placeholderSection("acceptable-use", "6. Acceptable Use", TERMS_PLACEHOLDER),
      placeholderSection("intellectual-property", "7. Intellectual Property", TERMS_PLACEHOLDER),
      placeholderSection("termination", "8. Termination", TERMS_PLACEHOLDER),
      placeholderSection("disclaimers", "9. Disclaimers", TERMS_PLACEHOLDER),
      placeholderSection("limitation-of-liability", "10. Limitation of Liability", TERMS_PLACEHOLDER),
      placeholderSection("changes", "11. Changes", TERMS_PLACEHOLDER),
      placeholderSection("contact", "12. Contact", TERMS_PLACEHOLDER),
    ],
  },
  privacy: {
    id: "privacy",
    slug: "/privacy",
    navLabel: "Privacy",
    title: "Privacy Policy",
    description: null,
    metaTitle: "Privacy Policy | Vertex CMS",
    metaDescription: "Vertex CMS Privacy Policy.",
    lastUpdated: null,
    version: null,
    sections: [
      placeholderSection("overview", "1. Overview", PRIVACY_PLACEHOLDER),
      placeholderSection("information-collected", "2. Information We Collect", PRIVACY_PLACEHOLDER),
      placeholderSection("how-used", "3. How Information Is Used", PRIVACY_PLACEHOLDER),
      placeholderSection("storage-retention", "4. Data Storage and Retention", PRIVACY_PLACEHOLDER),
      placeholderSection("data-sharing", "5. Data Sharing", PRIVACY_PLACEHOLDER),
      placeholderSection("user-rights", "6. User Rights", PRIVACY_PLACEHOLDER),
      {
        id: "cookies-tracking",
        title: "7. Cookies and Tracking",
        placeholder: true,
        body: [
          PRIVACY_PLACEHOLDER,
          "See also the Cookie Policy. Specific vendors, technologies, and retention periods are not listed until documented by counsel.",
        ],
      },
      placeholderSection("data-requests", "8. Data Requests", PRIVACY_PLACEHOLDER),
      placeholderSection("contact", "9. Contact", PRIVACY_PLACEHOLDER),
    ],
  },
  dpa: {
    id: "dpa",
    slug: "/dpa",
    navLabel: "DPA",
    title: "Data Processing Addendum",
    description: null,
    metaTitle: "Data Processing Addendum | Vertex CMS",
    metaDescription: "Vertex CMS Data Processing Addendum (DPA).",
    lastUpdated: null,
    version: null,
    sections: [
      placeholderSection("introduction", "1. Introduction", DPA_PLACEHOLDER),
      placeholderSection("roles", "2. Roles of the Parties", DPA_PLACEHOLDER),
      placeholderSection("processing", "3. Processing Details", DPA_PLACEHOLDER),
      placeholderSection("security", "4. Security Measures", DPA_PLACEHOLDER),
      placeholderSection("subprocessors", "5. Subprocessors", DPA_PLACEHOLDER),
      placeholderSection("transfers", "6. International Transfers", DPA_PLACEHOLDER),
      placeholderSection("assistance", "7. Assistance and Audits", DPA_PLACEHOLDER),
      placeholderSection("contact", "8. Contact", DPA_PLACEHOLDER),
    ],
  },
  cookies: {
    id: "cookies",
    slug: "/cookie-policy",
    navLabel: "Cookie Policy",
    title: "Cookie Policy",
    description: null,
    metaTitle: "Cookie Policy | Vertex CMS",
    metaDescription: "Vertex CMS Cookie Policy.",
    lastUpdated: null,
    version: null,
    sections: [
      placeholderSection("introduction", "1. Introduction", COOKIE_PLACEHOLDER),
      placeholderSection("what-are-cookies", "2. What Cookies Are", COOKIE_PLACEHOLDER),
      placeholderSection("how-used", "3. How Cookies Are Used", COOKIE_PLACEHOLDER),
      placeholderSection("types", "4. Types of Cookies", COOKIE_PLACEHOLDER),
      placeholderSection("analytics", "5. Analytics / Tracking", COOKIE_PLACEHOLDER),
      placeholderSection("controls", "6. Cookie Controls", COOKIE_PLACEHOLDER),
      {
        id: "consent",
        title: "7. Consent",
        body: [
          "The Vertex CMS website presents a cookie consent prompt that allows visitors to accept cookies or manage preferences.",
          "[Additional consent details to be provided by Vertex/legal counsel]",
        ],
      },
      placeholderSection("changes", "8. Changes to This Policy", COOKIE_PLACEHOLDER),
      placeholderSection("contact", "9. Contact", COOKIE_PLACEHOLDER),
    ],
  },
};

export const LEGAL_NAV: { id: LegalDocId; label: string; href: string }[] = [
  { id: "terms", label: LEGAL_DOCS.terms.navLabel, href: LEGAL_DOCS.terms.slug },
  { id: "privacy", label: LEGAL_DOCS.privacy.navLabel, href: LEGAL_DOCS.privacy.slug },
  { id: "dpa", label: LEGAL_DOCS.dpa.navLabel, href: LEGAL_DOCS.dpa.slug },
  { id: "cookies", label: LEGAL_DOCS.cookies.navLabel, href: LEGAL_DOCS.cookies.slug },
];

export function getLegalDocument(id: LegalDocId): LegalDocument {
  return LEGAL_DOCS[id];
}

/** Shared placeholder token for meta fields — never invent dates/versions in UI. */
export const LEGAL_META_PENDING = "[To be provided]";

