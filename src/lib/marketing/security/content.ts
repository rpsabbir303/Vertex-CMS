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
  requirement: "",
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
  title: "Security & Trust | VertexBuild",
  description:
    "How VertexBuild approaches data protection, access control, compliance support, AI governance, and operational reliability for construction teams and enterprise reviewers.",
  canonical: SECURITY_ROUTES.home,
};

export const securitySubpageMeta = {
  dataProtection: {
    title: "Data Protection | Security & Trust | VertexBuild",
    description: "Encryption, tenant-aware data architecture, and data-rights concepts for VertexBuild.",
    canonical: SECURITY_ROUTES.dataProtection,
  },
  accessSecurity: {
    title: "Access Security | Security & Trust | VertexBuild",
    description: "Identity, authentication, authorization, and administrative access controls for VertexBuild.",
    canonical: SECURITY_ROUTES.accessSecurity,
  },
  compliance: {
    title: "Compliance | Security & Trust | VertexBuild",
    description: "Documented compliance workflows and product support areas for VertexBuild.",
    canonical: SECURITY_ROUTES.compliance,
  },
  aiGovernance: {
    title: "AI Governance | VertexBuild",
    description:
      "Learn how VertexBuild governs AI-assisted actions through human confirmation, activity visibility, and controlled platform usage.",
    canonical: SECURITY_ROUTES.aiGovernance,
  },
  reliability: {
    title: "Reliability & Disaster Recovery | VertexBuild",
    description:
      "Learn how VertexBuild approaches reliability, recovery objectives, redundancy, backup, and disaster recovery for construction workflows.",
    canonical: SECURITY_ROUTES.reliability,
  },
  contact: {
    title: "Security Contact | Security & Trust | VertexBuild",
    description: "Contact VertexBuild for security-related evaluation questions and enterprise review follow-up.",
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
    "VertexBuild is designed with data protection, controlled access, compliance support, AI governance, and operational reliability in mind — so construction teams and enterprise reviewers can understand how the platform is intended to operate.",
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
  { label: "TLS 1.3", detail: "In transit", status: "requirement", qualifier: "" },
  { label: "AES-256", detail: "At rest", status: "requirement", qualifier: "" },
  {
    label: "SOC 2 Type II",
    detail: "Target / readiness commitment",
    status: "target",
    qualifier: "Target / readiness commitment",
  },
  { label: "MFA", detail: "Access control", status: "requirement", qualifier: "" },
  { label: "RBAC", detail: "Authorization", status: "requirement", qualifier: "" },
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

/** Editorial Access Security page — same template as Data Protection (documented scope only). */
export const accessSecurityKeyInfo = [
  { label: "MFA", detail: "Multi-factor authentication", qualifier: "" },
  { label: "RBAC", detail: "Role-based access control", qualifier: "" },
  {
    label: "SSO / SCIM",
    detail: "Enterprise identity and provisioning capabilities where applicable",
    qualifier: "",
  },
] as const;

export const accessSecurityEditorial = {
  mainHeadline: "Controlled access across teams, roles, and organizations.",
  capabilityRows: [
    {
      title: "MFA",
      body: "Multi-factor authentication for controlled account access.",
    },
    {
      title: "RBAC",
      body: "Role-based authorization across tenant-scoped resources.",
    },
    {
      title: "SSO",
      body: "Enterprise SSO capability where applicable.",
    },
    {
      title: "SCIM",
      body: "Enterprise identity provisioning capability where applicable.",
    },
  ],
  accessControls: [
    { title: "Authentication", value: "MFA", status: "requirement" as SecurityStatus },
    { title: "Authorization", value: "RBAC", status: "requirement" as SecurityStatus },
    { title: "Enterprise identity", value: "SSO / SCIM", status: "capability" as SecurityStatus },
    {
      title: "Administrative access",
      value: "Role and permission controls",
      status: "requirement" as SecurityStatus,
    },
  ],
  supportingTopics: [
    {
      title: "Identity",
      body: "Signed-in users and service identities scoped to tenant context.",
      status: "requirement" as SecurityStatus,
    },
    {
      title: "Authentication",
      body: "Credentials and session validation before access is granted.",
      status: "requirement" as SecurityStatus,
    },
    {
      title: "Authorization",
      body: "RBAC decisions on tenant-scoped resources.",
      status: "requirement" as SecurityStatus,
    },
    {
      title: "MFA",
      body: "TOTP-based multi-factor authentication as documented for the platform.",
      status: "requirement" as SecurityStatus,
    },
    {
      title: "RBAC",
      body: "Role-based access control for permission decisions.",
      status: "requirement" as SecurityStatus,
    },
    {
      title: "SSO / SCIM",
      body: "Enterprise SSO and applicable SCIM capabilities where enabled — associated with the Enterprise tier in the entitlement matrix.",
      status: "capability" as SecurityStatus,
    },
  ],
  accessFlow: [
    { id: "identity", label: "IDENTITY" },
    { id: "authentication", label: "AUTHENTICATION" },
    { id: "mfa", label: "MFA" },
    { id: "role", label: "ROLE" },
    { id: "permission", label: "PERMISSION" },
    { id: "resource", label: "RESOURCE" },
  ],
};

export const complianceSection = {
  id: "compliance",
  title: "Compliance",
  supporting:
    "VertexBuild supports documented compliance workflows where applicable. Product support is not the same as formal organizational certification, and support does not imply legal compliance in every jurisdiction.",
  distinction:
    "Controls below describe product support or documented requirements — not claims that VertexBuild is certified for every standard listed.",
  exploreHref: SECURITY_ROUTES.compliance,
};

/** Editorial Compliance page — same template as Data Protection (documented scope only). */
export const complianceKeyInfo = [
  {
    label: "SOC 2 Type II",
    detail: "Target / readiness status",
    qualifier: "Target / readiness commitment",
  },
  { label: "CCPA / CPRA", detail: "Privacy requirement", qualifier: "" },
  { label: "WCAG 2.2 AA", detail: "Accessibility requirement", qualifier: "" },
  { label: "7-year retention", detail: "Record-retention requirement", qualifier: "" },
] as const;

export const complianceEditorial = {
  mainHeadline: "Compliance support across the platform.",
  productSupportNote:
    "VertexBuild provides product capabilities and workflows that support applicable compliance requirements. Product support should not be interpreted as a certification of the customer's organization.",
  capabilityRows: [
    {
      title: "Privacy & data rights",
      body: "CCPA / CPRA-related workflow support where applicable.",
    },
    {
      title: "Accessibility",
      body: "WCAG 2.2 AA requirement.",
    },
    {
      title: "Construction records",
      body: "Retention requirements and documented construction records.",
    },
    {
      title: "Workforce & safety",
      body: "OSHA-related forms and workforce compliance workflows.",
    },
    {
      title: "Prevailing wage",
      body: "WH-347 / prevailing-wage workflow support where applicable.",
    },
  ],
  complianceControls: [
    { title: "Privacy", value: "CCPA / CPRA", status: "capability" as SecurityStatus },
    { title: "Accessibility", value: "WCAG 2.2 AA", status: "requirement" as SecurityStatus },
    { title: "Retention", value: "7-year retention", status: "requirement" as SecurityStatus },
    { title: "Safety", value: "OSHA forms", status: "product" as SecurityStatus },
    { title: "Workforce", value: "WH-347 / prevailing wage where applicable", status: "product" as SecurityStatus },
    { title: "Lien requirements", value: "State-specific lien-law support where applicable", status: "product" as SecurityStatus },
  ],
  complianceAreas: [
    {
      title: "Privacy",
      body: "Supported data-rights workflows including export, delete, and consent where applicable.",
      status: "capability" as SecurityStatus,
    },
    {
      title: "Accessibility",
      body: "WCAG 2.2 AA requirement for the product experience — not stated as a formal WCAG certification of the company.",
      status: "requirement" as SecurityStatus,
    },
    {
      title: "Construction records",
      body: "Documented retention requirement for applicable records, including 7-year retention where applicable.",
      status: "requirement" as SecurityStatus,
    },
    {
      title: "Workforce & safety",
      body: "Product-domain workflow support for construction safety forms — not a SaaS certification of VertexBuild.",
      status: "product" as SecurityStatus,
    },
    {
      title: "Prevailing wage",
      body: "Product-domain payroll / compliance workflow support including WH-347 where applicable.",
      status: "product" as SecurityStatus,
    },
    {
      title: "State-specific lien requirements",
      body: "Product-domain workflow support where applicable.",
      status: "product" as SecurityStatus,
    },
  ],
  supportingTopics: [
    {
      title: "CCPA / CPRA",
      body: "Supported data-rights workflows where applicable.",
      status: "capability" as SecurityStatus,
    },
    {
      title: "WCAG 2.2 AA",
      body: "Accessibility requirement for the product experience — not a formal WCAG certification of the company.",
      status: "requirement" as SecurityStatus,
    },
    {
      title: "7-year retention",
      body: "Documented retention requirement for applicable records.",
      status: "requirement" as SecurityStatus,
    },
    {
      title: "OSHA forms (current)",
      body: "Product-domain workflow support for construction safety forms.",
      status: "product" as SecurityStatus,
    },
    {
      title: "WH-347",
      body: "Product-domain payroll / compliance workflow support where applicable.",
      status: "product" as SecurityStatus,
    },
    {
      title: "State lien law",
      body: "Product-domain workflow support where applicable.",
      status: "product" as SecurityStatus,
    },
  ],
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
    context: "Product-domain workflow support for construction safety forms — not a SaaS certification of VertexBuild.",
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

/** Editorial AI Governance page — same template as Data Protection (documented scope only). */
export const aiGovernanceEditorial = {
  humanControl: {
    title: "Human control at the point of action.",
    intro:
      "AI can assist users with information and workflow intelligence within their permission scope. AI-generated recommendations are not automatically committed as final actions.",
    bullets: [
      "Write actions are preceded by a plain-English summary of what will happen.",
      "The user must explicitly confirm before the action is committed.",
      "Consequential workflow changes remain under human control.",
    ],
    sequence: [
      { id: "suggestion", label: "AI suggestion" },
      { id: "summary", label: "Plain-English action summary" },
      { id: "confirmation", label: "Explicit user confirmation", emphasis: true },
      { id: "committed", label: "Committed action" },
    ],
  },
  confirmedWrites: {
    title: "Confirmed write actions",
    body: "Before an AI write action is committed, the system presents a plain-English summary of the proposed action and requires explicit human confirmation. Not every AI capability is read-only, and AI actions are not executed automatically without this confirmation step.",
    steps: [
      { id: "write", label: "AI write action proposed" },
      { id: "summary", label: "Plain-English summary" },
      { id: "confirm", label: "Explicit human confirmation", emphasis: true },
      { id: "commit", label: "Action committed" },
    ],
  },
  activityTraceability: {
    title: "AI activity remains traceable.",
    body: "AI activity and tool calls are represented as governed system activity so relevant actions can be reviewed and traced. Tool calls are logged with confirmation and execution states — without claiming a specific public retention period or external audit certification.",
    steps: [
      { id: "request", label: "AI request" },
      { id: "tool", label: "Tool call" },
      { id: "activity", label: "System activity" },
      { id: "event", label: "Recorded event" },
    ],
  },
  protectRecords: {
    title: "Protecting project records.",
    body: "AI does not delete records as part of governed tool behavior. This is a documented product governance rule — not a claim that AI can never make mistakes or that all risk is eliminated.",
  },
  tenantUsage: {
    title: "Tenant quotas",
    body: "AI usage is governed within the platform's tenant and usage controls and applicable quotas. Specific numeric limits, token rates, and pricing tiers are defined in product entitlements — not stated here as guarantees.",
  },
  currentCapabilities: [
    {
      title: "AI Assistant",
      body: "Natural-language assistance grounded in connected project information, with confirmation before data changes.",
    },
    {
      title: "Project Intelligence",
      body: "Connected project intelligence views within permission scope.",
    },
    {
      title: "Document Intelligence",
      body: "Document-oriented AI workflows on connected project records.",
    },
    {
      title: "Automation",
      body: "AI-supported workflow actions subject to the same confirmation and logging model where writes apply.",
    },
  ],
  roadmapCapabilities: [
    {
      title: "Predictive Insights",
      body: "Predictive intelligence described in later roadmap phases — planned / roadmap, not presented as generally available today.",
      roadmap: true,
    },
  ],
  governanceModel: [
    { step: "01", label: "User initiates" },
    { step: "02", label: "AI analyzes / assists" },
    { step: "03", label: "AI proposes" },
    { step: "04", label: "System explains the proposed action" },
    { step: "05", label: "Human confirms", emphasis: true },
    { step: "06", label: "Action commits" },
    { step: "07", label: "Activity remains traceable" },
  ],
  trustMessage: {
    title: "AI with accountable control.",
    body: "VertexBuild is designed to keep people in control of consequential AI-assisted actions while providing visibility into AI activity and governed platform usage.",
  },
  heroFlow: [
    "AI INPUT",
    "AI ANALYSIS",
    "RECOMMENDATION",
    "HUMAN CONFIRMATION",
    "COMMITTED ACTION",
    "AUDIT / ACTIVITY LOG",
  ],
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

/** Editorial Reliability / DR page — same template as Data Protection (documented targets only). */
export const reliabilityEditorial = {
  intro: {
    title: "Designed for operational continuity.",
    body: "Reliability is supported through resilient infrastructure, redundancy, backup and recovery processes, and tested recovery procedures. These describe design intent and documented objectives — not perfect availability or guaranteed recovery in every scenario.",
    bullets: [
      "Resilient infrastructure patterns for production operation.",
      "Redundancy to support continuity as usage grows.",
      "Backup and recovery mechanisms with documented procedures.",
      "Tested restore runbook as an operational requirement.",
    ],
  },
  availability: {
    title: "Availability target",
    value: "99.9%",
    label: "Uptime target",
    qualifier: "Documented target",
    detail: "Published as a target — not a guarantee, historical uptime result, or enterprise SLA claim.",
  },
  recoveryObjectives: {
    title: "Recovery objectives",
    rpo: {
      value: "≤ 15 min",
      label: "RPO",
      detail: "Recovery point objective — the target maximum amount of data loss measured in time.",
    },
    rto: {
      value: "≤ 1 hr",
      label: "RTO",
      detail: "Recovery time objective — the target time to restore service.",
    },
    note: "RPO and RTO are documented recovery targets, not guarantees of zero data loss or instant recovery.",
  },
  disasterRecoveryFlow: [
    { id: "detect", label: "DETECT" },
    { id: "protect", label: "PROTECT" },
    { id: "restore", label: "RESTORE" },
    { id: "verify", label: "VERIFY" },
    { id: "resume", label: "RESUME" },
  ],
  backupRecovery: {
    title: "Backup and recovery",
    body: "Documented reliability requirements include recovery planning, backup and recovery mechanisms, restore procedures, and a tested restore runbook. Specific backup frequency, retention periods, geographic replication, and vendor technologies are not stated here unless defined in your agreement or deployment documentation.",
  },
  restoreRunbook: {
    title: "Recovery is a process, not just a backup.",
    body: reliability.restoreNote,
    steps: [
      { id: "backup", label: "Backup" },
      { id: "procedure", label: "Restore procedure" },
      { id: "validation", label: "Validation" },
      { id: "recovery", label: "Service recovery" },
    ],
  },
  scalability: {
    title: "Designed to scale with project operations.",
    body: "The platform is designed with scalable infrastructure and redundancy to support reliable operation as project usage grows — without claiming zero downtime or disaster-proof infrastructure.",
  },
  targetsVsGuarantees: {
    title: "Targets, not guarantees",
    body: "Published figures such as 99.9% uptime, RPO ≤ 15 minutes, and RTO ≤ 1 hour are documented targets and architecture objectives. They are not presented as certified guarantees, achieved SLAs, or historical performance results.",
  },
  trustStack: [
    { id: "data-protection", label: "DATA PROTECTION" },
    { id: "access-security", label: "ACCESS SECURITY" },
    { id: "compliance", label: "COMPLIANCE" },
    { id: "ai-governance", label: "AI GOVERNANCE" },
    { id: "reliability", label: "RELIABILITY / DR", emphasis: true },
  ],
};

export const securityCta = {
  title: "Need additional security information?",
  supporting:
    "Connect with the VertexBuild team for security-related questions, evaluation support, or follow-up — for prospective customers, enterprise security reviewers, and authorized stakeholders.",
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
