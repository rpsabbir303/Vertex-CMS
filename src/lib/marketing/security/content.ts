/**
 * Security & Trust page content for Vertex CMS.
 *
 * STATUS LABELS (do not blur these in UI):
 * - requirement  → documented platform requirement / baseline
 * - target       → target / readiness (not achieved certification)
 * - capability   → documented product capability / workflow support
 * - product      → product-domain feature (not a Vertex SaaS certification)
 * - placeholder  → missing; editable by Vertex
 *
 * Do not invent certifications, vendors, emails, or verified performance results.
 */

export type SecurityStatus =
  | "requirement"
  | "target"
  | "capability"
  | "product"
  | "placeholder";

export const SECURITY_STATUS_LABEL: Record<SecurityStatus, string> = {
  requirement: "Documented requirement",
  target: "Target / readiness",
  capability: "Supported workflow",
  product: "Product capability",
  placeholder: "Editable — to be confirmed",
};

export const securityPageMeta = {
  title: "Security & Trust | Vertex CMS",
  description:
    "Security, data protection, controlled access, compliance readiness, and operational reliability for Vertex CMS.",
  canonical: "/security",
};

export const securityHero = {
  eyebrow: "Security & Trust",
  headline: "Security built into every layer.",
  supporting:
    "Vertex CMS is designed around data protection, controlled access, compliance readiness, and operational reliability — so construction teams can trust how project and financial data is handled.",
};

export const trustStrip: {
  label: string;
  detail: string;
  status: SecurityStatus;
}[] = [
  { label: "TLS 1.3", detail: "In transit", status: "requirement" },
  { label: "AES-256", detail: "At rest", status: "requirement" },
  { label: "MFA", detail: "TOTP-based 2FA", status: "requirement" },
  { label: "SSO", detail: "Where enabled", status: "capability" },
  { label: "CCPA / CPRA", detail: "Data-rights workflow", status: "capability" },
  { label: "SOC 2 Type II", detail: "Target / readiness", status: "target" },
];

export const dataProtection = {
  title: "Data protection",
  supporting:
    "Protecting tenant data in transit and at rest, with scanning and isolation patterns defined for the platform.",
  controls: [
    {
      title: "Encryption in transit",
      value: "TLS 1.3",
      status: "requirement" as SecurityStatus,
    },
    {
      title: "Encryption at rest",
      value: "AES-256",
      status: "requirement" as SecurityStatus,
    },
    {
      title: "File protection",
      value: "ClamAV scanning",
      status: "requirement" as SecurityStatus,
    },
    {
      title: "Tenant isolation",
      value: "tenant_id on scoped data",
      status: "requirement" as SecurityStatus,
    },
  ],
  notes: [
    {
      title: "Soft delete",
      body: "Soft delete is used where applicable so records can be retained under platform data rules.",
      status: "requirement" as SecurityStatus,
    },
    {
      title: "Financial records",
      body: "Financial records use void rather than destructive deletion.",
      status: "requirement" as SecurityStatus,
    },
  ],
};

export const accessSecurity = {
  title: "Access designed around control.",
  supporting:
    "Access is controlled through authentication, multi-factor verification, role-based authorization, and tenant-scoped resources. Identity providers appear only when enabled for an organization.",
  steps: [
    { id: "user", label: "User", detail: "Signed-in identity" },
    { id: "auth", label: "Authentication", detail: "Credentials / session" },
    { id: "mfa", label: "MFA / SSO", detail: "TOTP MFA · SSO where enabled" },
    { id: "rbac", label: "Role-based access", detail: "RBAC permissions" },
    { id: "tenant", label: "Tenant-scoped resources", detail: "Data limited by tenant" },
  ],
  callouts: [
    { label: "MFA", body: "TOTP-based two-factor authentication as required by the platform BRD.", status: "requirement" as SecurityStatus },
    { label: "RBAC", body: "Role-based access control for authorization.", status: "requirement" as SecurityStatus },
    { label: "SSO / SCIM", body: "SSO and applicable SCIM capabilities where enabled for the tenant/product.", status: "capability" as SecurityStatus },
  ],
};

export const auditAccountability = {
  title: "Every important action leaves a trail.",
  supporting:
    "Platform audit and data-access logging capture who did what, where, and when — including impersonation versus direct access.",
  platformFields: ["admin", "event", "auditable type / id", "tenant", "IP", "timestamp"],
  dataAccessFields: ["admin", "tenant", "accessed resource", "access method", "impersonation / direct"],
  sampleEntries: [
    { kind: "Platform event", meta: "admin · tenant · timestamp", method: "event" },
    { kind: "Data access", meta: "admin · resource · method", method: "direct" },
    { kind: "Admin action", meta: "admin · auditable type/id", method: "event" },
    { kind: "Data access", meta: "admin · tenant · impersonation", method: "impersonation" },
  ],
};

export const complianceMatrix: {
  control: string;
  context: string;
  status: SecurityStatus;
}[] = [
  {
    control: "SOC 2 Type II",
    context: "Target / readiness — not presented as certified or compliant until attained.",
    status: "target",
  },
  {
    control: "Pen-test",
    context: "Compliance evidence requirement.",
    status: "requirement",
  },
  {
    control: "Certificate expiry tracking",
    context: "Operational tracking of certificate expiry.",
    status: "requirement",
  },
  {
    control: "CCPA / CPRA",
    context: "Supported data-rights workflow.",
    status: "capability",
  },
  {
    control: "GDPR / CCPA DSR",
    context: "Export / delete / consent workflow support.",
    status: "capability",
  },
  {
    control: "WCAG 2.2 AA",
    context: "Accessibility requirement for the product experience.",
    status: "requirement",
  },
  {
    control: "OSHA-related requirements",
    context: "Product-domain compliance capabilities for construction safety workflows — not a SaaS certification of Vertex CMS.",
    status: "product",
  },
];

export const reliability = {
  title: "Reliability & recovery",
  supporting:
    "Operational reliability targets define how the platform is expected to recover. Figures below are documented requirements — not independently verified public performance results.",
  metrics: [
    {
      value: "99.9%",
      label: "Uptime",
      detail: "Documented uptime requirement",
      status: "requirement" as SecurityStatus,
    },
    {
      value: "≤ 15 min",
      label: "RPO",
      detail: "Recovery point objective",
      status: "requirement" as SecurityStatus,
    },
    {
      value: "≤ 1 hr",
      label: "RTO",
      detail: "Recovery time objective",
      status: "requirement" as SecurityStatus,
    },
  ],
  flow: [
    { label: "System", detail: "Production service" },
    { label: "Backup / recovery", detail: "Protected state" },
    { label: "Restore", detail: "Tested restore runbook" },
    { label: "Service recovery", detail: "Return to operation" },
  ],
  restoreNote: "Tested restore runbook is a documented operational requirement.",
};

export const aiGovernance = {
  title: "AI governance",
  supporting:
    "AI capabilities are governed by policy, quotas, confirmation, and audit — so intelligent features stay under administrative control.",
  flow: [
    { label: "AI request", detail: "User or system prompt" },
    { label: "Policy / quota", detail: "Tenant quotas · plan-based tool access" },
    { label: "Confirmation", detail: "Confirmed writes before action" },
    { label: "Action", detail: "Governed tool execution" },
    { label: "Audit", detail: "Accountable record of the action" },
  ],
  points: [
    { label: "Confirmed writes", body: "Human confirmation before write or action." },
    { label: "Tenant quotas", body: "Usage bounded by tenant quotas." },
    { label: "Tool controls", body: "AI tool controls with plan-based tool access and MCP tool catalog." },
    { label: "Super Admin", body: "AI governance controls in Super Admin." },
  ],
};

export const architectureLayers = {
  title: "Security architecture",
  supporting: "Identity, data, and platform layers work together under tenant-scoped isolation.",
  root: "VERTEX CMS",
  pillars: [
    {
      title: "Identity",
      items: ["MFA / SSO", "RBAC"],
    },
    {
      title: "Data layer",
      items: ["TLS / AES", "ClamAV"],
    },
    {
      title: "Platform",
      items: ["Audit logs", "Health"],
    },
  ],
  base: "Tenant-scoped data",
};

export const securityCta = {
  title: "Questions about security?",
  supporting:
    "Talk with the Vertex team about how Vertex CMS approaches security, access control, and compliance readiness for your organization.",
  /** No security@ email is documented in this repo — keep editable. */
  contactPlaceholder: "[Security contact channel to be provided by Vertex]",
  primaryLabel: "Contact our team",
  primaryHref: "/book-demo",
  secondaryLabel: "Request a quote",
  secondaryHref: "/request-quote?plan=enterprise",
  privacyHref: "/privacy",
  dpaHref: "/dpa",
};
