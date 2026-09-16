/**
 * Security & Trust — public marketing content (CMS-1348).
 *
 * STATUS LABELS (UI must preserve meaning):
 * - requirement  → documented platform requirement / baseline
 * - target       → target / readiness (NOT achieved certification or guarantee)
 * - capability   → documented product capability / workflow support
 * - product      → product-domain feature (not a Vertex SaaS certification)
 *
 * Do not invent certifications, vendors, emails, audit dates, or verified uptime history.
 */

import { ROUTES } from "@/lib/marketing/navigation";

export type SecurityStatus =
  | "requirement"
  | "target"
  | "capability"
  | "product";

export const SECURITY_STATUS_LABEL: Record<SecurityStatus, string> = {
  requirement: "Documented requirement",
  target: "Target / readiness",
  capability: "Supported workflow",
  product: "Product capability",
};

export const SECURITY_ROUTES = {
  home: ROUTES.security,
  dataProtection: "/security/data-protection",
  accessSecurity: "/security/access-security",
  compliance: "/security/compliance",
  aiGovernance: "/security/ai-governance",
  reliability: "/security/reliability",
  contact: "/security/contact",
} as const;

export const securityPageMeta = {
  title: "Security & Trust | Vertex CMS",
  description:
    "How Vertex CMS approaches data protection, access control, compliance support, AI governance, and operational reliability for construction teams and enterprise reviewers.",
  canonical: SECURITY_ROUTES.home,
};

export const securitySubpageMeta = {
  dataProtection: {
    title: "Data Protection | Security & Trust | Vertex CMS",
    description: "Encryption, tenant-aware data architecture, and data-rights concepts for Vertex CMS.",
    canonical: SECURITY_ROUTES.dataProtection,
  },
  accessSecurity: {
    title: "Access Security | Security & Trust | Vertex CMS",
    description: "Identity, authentication, authorization, and administrative access controls for Vertex CMS.",
    canonical: SECURITY_ROUTES.accessSecurity,
  },
  compliance: {
    title: "Compliance | Security & Trust | Vertex CMS",
    description: "Documented compliance workflows and product support areas for Vertex CMS.",
    canonical: SECURITY_ROUTES.compliance,
  },
  aiGovernance: {
    title: "AI Governance | Security & Trust | Vertex CMS",
    description: "Permission-scoped AI, human confirmation, and audit logging for Vertex CMS.",
    canonical: SECURITY_ROUTES.aiGovernance,
  },
  reliability: {
    title: "Reliability & DR | Security & Trust | Vertex CMS",
    description: "Documented availability, resilience, and disaster-recovery objectives for Vertex CMS.",
    canonical: SECURITY_ROUTES.reliability,
  },
  contact: {
    title: "Security Contact | Security & Trust | Vertex CMS",
    description: "Contact Vertex CMS for security-related evaluation questions and enterprise review follow-up.",
    canonical: SECURITY_ROUTES.contact,
  },
} as const;

export const securityContactPage = {
  title: "Security contact",
  supporting:
    "For prospective customers, enterprise security reviewers, and authorized stakeholders who need additional security information beyond what is published in this section.",
  body: "Use the contact paths below for evaluation and sales inquiries. This is not a channel for reporting security incidents or submitting vulnerability reports.",
};

export const securityHero = {
  eyebrow: "Security & Trust",
  headline: "Security built into the platform.",
  supporting:
    "Vertex CMS is designed with data protection, controlled access, compliance support, AI governance, and operational reliability in mind — so construction teams and enterprise reviewers can understand how the platform is intended to operate.",
};

export const trustOverview = {
  eyebrow: "Trust overview",
  headline: "Security, privacy, compliance, AI governance, and reliability.",
  supporting:
    "A single trust model spans how data is protected, how access is controlled, which compliance workflows the product supports, how AI actions are governed, and how the platform is expected to recover from disruption.",
  pillars: [
    {
      id: "data",
      label: "Data protection",
      body: "Encryption and data-protection practices defined by the product baseline.",
    },
    {
      id: "access",
      label: "Access security",
      body: "MFA, RBAC, and applicable SSO/SCIM capabilities.",
    },
    {
      id: "compliance",
      label: "Compliance",
      body: "SOC 2 Type II is a target / readiness commitment, with documented workflow support — not an achieved certification.",
    },
    {
      id: "ai",
      label: "AI governance",
      body: "AI-assisted write actions require a plain-English summary and explicit human confirmation before commitment. AI does not autonomously commit changes.",
    },
    {
      id: "reliability",
      label: "Reliability / DR",
      body: "Documented availability, backup, and recovery objectives — targets, not historical guarantees.",
    },
  ],
};

export const protectionAreas = [
  {
    index: "01",
    title: "Data Protection",
    description: "Encryption and data-protection practices defined by the product baseline.",
    href: SECURITY_ROUTES.dataProtection,
  },
  {
    index: "02",
    title: "Access Security",
    description: "MFA, RBAC, and applicable SSO/SCIM capabilities.",
    href: SECURITY_ROUTES.accessSecurity,
  },
  {
    index: "03",
    title: "Compliance",
    description:
      "SOC 2 Type II is a target / readiness commitment, with documented workflow support — not an achieved certification.",
    href: SECURITY_ROUTES.compliance,
  },
  {
    index: "04",
    title: "AI Governance",
    description:
      "AI-assisted write actions require a plain-English summary and explicit human confirmation before commitment. AI does not autonomously commit changes.",
    href: SECURITY_ROUTES.aiGovernance,
  },
  {
    index: "05",
    title: "Reliability / DR",
    description: "Documented availability, backup, and recovery objectives — targets, not historical guarantees.",
    href: SECURITY_ROUTES.reliability,
  },
] as const;

export const heroTrustSignals: {
  label: string;
  detail: string;
  status: SecurityStatus;
}[] = [
  { label: "TLS 1.3", detail: "In transit", status: "requirement" },
  { label: "AES-256", detail: "At rest", status: "requirement" },
  { label: "SOC 2 Type II", detail: "Target / readiness commitment", status: "target" },
];

/** Hub specification grid — sourced from documented platform requirements (not new claims). */
export const hubSpecificationGrid: {
  label: string;
  detail: string;
  status: SecurityStatus;
  qualifier: string;
}[] = [
  { label: "TLS 1.3", detail: "In transit", status: "requirement", qualifier: "Documented security requirement" },
  { label: "AES-256", detail: "At rest", status: "requirement", qualifier: "Documented security requirement" },
  {
    label: "SOC 2 Type II",
    detail: "Target / readiness commitment",
    status: "target",
    qualifier: "Target / readiness commitment",
  },
  { label: "MFA", detail: "Access control", status: "requirement", qualifier: "Documented security requirement" },
  { label: "RBAC", detail: "Authorization", status: "requirement", qualifier: "Documented access/security requirement" },
  { label: "SSO", detail: "Enterprise SSO", status: "capability", qualifier: "Applicable enterprise capability" },
  { label: "99.9%", detail: "Uptime target", status: "target", qualifier: "Target / readiness" },
  {
    label: "RPO ≤15 min",
    detail: "Recovery point objective / target",
    status: "target",
    qualifier: "Target / readiness",
  },
  {
    label: "RTO ≤1 hr",
    detail: "Recovery time objective / target",
    status: "target",
    qualifier: "Target / readiness",
  },
];

/** Hub foundation row — three editorial modules (documented points only). */
export const hubFoundationModules = [
  {
    title: "Data protection",
    href: SECURITY_ROUTES.dataProtection,
    lines: [
      "TLS 1.3 · data in transit",
      "AES-256 · encryption at rest",
      "Tenant isolation · tenant_id on scoped data",
      "ClamAV scanning · file protection",
      "Rate limiting · documented requirement",
    ],
  },
  {
    title: "Access security",
    href: SECURITY_ROUTES.accessSecurity,
    lines: [
      "MFA · TOTP-based requirement",
      "RBAC · tenant-scoped authorization",
      "SSO / SCIM · Enterprise where enabled",
      "Session & privileged access controls",
    ],
  },
  {
    title: "Compliance",
    href: SECURITY_ROUTES.compliance,
    lines: [
      "Documented workflow support",
      "7-year retention · applicable records",
      "CCPA / CPRA · data-rights workflows",
      "WCAG 2.2 AA · product requirement",
      "SOC 2 Type II · target / readiness",
    ],
  },
] as const;

export const dataProtection = {
  id: "data-protection",
  title: "Data protection",
  supporting:
    "Tenant data is protected in transit and at rest, with isolation and handling patterns defined for the platform. Details below reflect documented requirements — not independent audit results.",
  summaryBullets: [
    "TLS 1.3 for data in transit",
    "AES-256 encryption at rest",
    "Multi-tenant architecture with tenant_id on scoped tables",
    "Data export and GDPR / CCPA delete capabilities where applicable",
    "Backup and disaster-recovery requirements aligned with reliability targets",
  ],
  controls: [
    { title: "Encryption in transit", value: "TLS 1.3", status: "requirement" as SecurityStatus },
    { title: "Encryption at rest", value: "AES-256", status: "requirement" as SecurityStatus },
    { title: "File protection", value: "ClamAV scanning", status: "requirement" as SecurityStatus },
    { title: "Tenant isolation", value: "tenant_id on scoped data", status: "requirement" as SecurityStatus },
    { title: "Rate limiting", value: "Documented platform requirement", status: "requirement" as SecurityStatus },
  ],
  notes: [
    {
      title: "Data rights",
      body: "Export and delete workflows support documented GDPR / CCPA data-subject requests where applicable.",
      status: "capability" as SecurityStatus,
    },
    {
      title: "Retention & recovery",
      body: "Backup and disaster-recovery requirements connect to documented RPO / RTO targets on the Reliability page.",
      status: "requirement" as SecurityStatus,
    },
    {
      title: "Record handling",
      body: "Soft delete applies where documented; financial records use void rather than destructive deletion.",
      status: "requirement" as SecurityStatus,
    },
  ],
  exploreHref: SECURITY_ROUTES.dataProtection,
};

export const accessSecurity = {
  id: "access-security",
  title: "Access security",
  supporting:
    "Access is controlled through authentication, multi-factor verification, role-based authorization, and tenant-scoped resources. Not every control applies identically to every plan or user type.",
  summaryBullets: [
    "MFA (TOTP-based) as a documented platform requirement",
    "RBAC for authorization across tenant-scoped resources",
    "SSO and applicable SCIM capabilities on Enterprise tier where enabled",
    "Separate Super Admin authentication guard and session controls",
    "IP allowlist for the admin panel where configured",
    "Immutable audit logging for Super Admin actions",
  ],
  steps: [
    { id: "user", label: "User", detail: "Signed-in identity" },
    { id: "auth", label: "Authentication", detail: "Credentials / session" },
    { id: "mfa", label: "MFA / SSO", detail: "TOTP MFA · SSO where enabled (Enterprise)" },
    { id: "rbac", label: "Authorization", detail: "RBAC permissions" },
    { id: "tenant", label: "Tenant-scoped resources", detail: "Data limited by tenant" },
  ],
  callouts: [
    {
      label: "MFA",
      body: "TOTP-based multi-factor authentication as required by platform documentation.",
      status: "requirement" as SecurityStatus,
    },
    {
      label: "RBAC",
      body: "Role-based access control for authorization decisions.",
      status: "requirement" as SecurityStatus,
    },
    {
      label: "SSO / SCIM",
      body: "Enterprise SSO and applicable SCIM capabilities where enabled for the organization — associated with the Enterprise tier in the entitlement matrix.",
      status: "capability" as SecurityStatus,
    },
    {
      label: "Super Admin",
      body: "Separate authentication guard, session timeout / force logout, IP allowlist for the admin panel, and immutable audit logging for privileged actions.",
      status: "requirement" as SecurityStatus,
    },
  ],
  exploreHref: SECURITY_ROUTES.accessSecurity,
};

export const complianceSection = {
  id: "compliance",
  title: "Compliance",
  supporting:
    "Vertex CMS supports documented compliance workflows where applicable. Product support is not the same as formal organizational certification, and support does not imply legal compliance in every jurisdiction.",
  distinction:
    "Controls below describe product support or documented requirements — not claims that Vertex CMS is certified for every standard listed.",
  exploreHref: SECURITY_ROUTES.compliance,
};

export const complianceMatrix: {
  control: string;
  context: string;
  status: SecurityStatus;
}[] = [
  {
    control: "SOC 2 Type II",
    context: "Target / readiness commitment — not presented as certified until attained.",
    status: "target",
  },
  {
    control: "7-year retention",
    context: "Documented retention requirement for applicable records.",
    status: "requirement",
  },
  {
    control: "OSHA forms (current)",
    context: "Product-domain workflow support for construction safety forms — not a SaaS certification of Vertex CMS.",
    status: "product",
  },
  {
    control: "WH-347",
    context: "Product-domain payroll / compliance workflow support.",
    status: "product",
  },
  {
    control: "State lien law",
    context: "Product-domain workflow support where applicable.",
    status: "product",
  },
  {
    control: "CCPA / CPRA",
    context: "Supported data-rights workflows.",
    status: "capability",
  },
  {
    control: "GDPR / CCPA DSR",
    context: "Export / delete / consent workflow support.",
    status: "capability",
  },
  {
    control: "WCAG 2.2 AA",
    context: "Accessibility requirement for the product experience — not stated as a formal WCAG certification of the company.",
    status: "requirement",
  },
  {
    control: "Certificate expiry tracking",
    context: "Operational tracking of certificate expiry.",
    status: "requirement",
  },
  {
    control: "Pen-test evidence",
    context: "Compliance evidence requirement — not a public penetration-test result claim.",
    status: "requirement",
  },
];

export const aiGovernance = {
  id: "ai-governance",
  title: "AI governance",
  supporting:
    "AI can assist within a user’s permission scope, but consequential writes remain under explicit human control. Predictive intelligence capabilities described in later roadmap phases are not presented here as currently available.",
  coreMessage:
    "AI can assist, but consequential writes remain under explicit human control.",
  summaryBullets: [
    "AI reads only within the user’s permission scope",
    "Write actions require a plain-English summary before execution",
    "Explicit user confirmation is required before execution",
    "AI does not delete records",
    "Every tool call is logged with confirmation / execution states",
  ],
  flow: [
    { label: "Request", detail: "User prompt within permission scope" },
    { label: "Summary", detail: "Plain-English description of the proposed action" },
    { label: "Confirmation", detail: "Explicit human approval required" },
    { label: "Execution", detail: "Governed tool call only after confirmation" },
    { label: "Audit", detail: "Logged tool-call record" },
  ],
  points: [
    { label: "Permission scope", body: "AI reads only within the authenticated user’s permission scope." },
    { label: "Plain-English summary", body: "Write actions are preceded by a plain-English summary of what will change." },
    { label: "Human confirmation", body: "Explicit confirmation is required before consequential writes execute." },
    { label: "No record deletion", body: "AI does not delete records as part of governed tool behavior." },
    { label: "Tool-call logging", body: "Tool calls are logged with confirmation and execution states for accountability." },
  ],
  roadmapNote:
    "Predictive intelligence and related roadmap capabilities are planned for later phases and are not described here as generally available today.",
  exploreHref: SECURITY_ROUTES.aiGovernance,
};

export const reliability = {
  id: "reliability",
  title: "Reliability & disaster recovery",
  supporting:
    "Documented availability and recovery objectives define how the platform is designed to operate and recover. Figures below are targets and architecture objectives — not historical uptime guarantees.",
  metrics: [
    {
      value: "99.9%",
      label: "Uptime target",
      detail: "Documented availability target — not a guarantee or historical result",
      status: "target" as SecurityStatus,
    },
    {
      value: "≤ 15 min",
      label: "RPO",
      detail: "Recovery point objective (documented target)",
      status: "target" as SecurityStatus,
    },
    {
      value: "≤ 1 hr",
      label: "RTO",
      detail: "Recovery time objective (documented target)",
      status: "target" as SecurityStatus,
    },
  ],
  flow: [
    { label: "System", detail: "Production services" },
    { label: "Redundancy", detail: "Kubernetes auto-scale · read replicas · Redis HA" },
    { label: "Backup", detail: "Protected backup state" },
    { label: "Recovery", detail: "Documented recovery procedures" },
    { label: "Restore", detail: "Tested restore runbook" },
  ],
  architectureNote:
    "Kubernetes auto-scale, read replicas, and Redis HA describe documented resilience patterns — not a claim of zero downtime.",
  restoreNote: "A tested restore runbook is a documented operational requirement.",
  exploreHref: SECURITY_ROUTES.reliability,
};

export const securityCta = {
  title: "Need additional security information?",
  supporting:
    "Connect with the Vertex CMS team for security-related questions, evaluation support, or follow-up — for prospective customers, enterprise security reviewers, and authorized stakeholders.",
  note: "This contact path is for evaluation and sales inquiries — not for reporting security incidents.",
  primaryLabel: "Contact",
  primaryHref: ROUTES.contact,
  secondaryLabel: "Book a Demo",
  secondaryHref: ROUTES.demo,
  tertiaryLabel: "Request Quote",
  tertiaryHref: `${ROUTES.requestQuote}?plan=enterprise`,
  legalHeading: "Related policies",
  privacyHref: ROUTES.legalPrivacy,
  termsHref: ROUTES.legalTerms,
  dpaHref: ROUTES.legalDpa,
  cookiesHref: ROUTES.legalCookies,
};

export const exploreLabel = "Explore";
