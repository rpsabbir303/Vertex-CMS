/**
 * Conversion / lead-capture types for Vertex CMS SaaS website.
 * APIs are not present in this marketing repo — ConversionClient runs in local UI mode.
 */

export type ConversionMode = "preview" | "api";

export type ConversionResult<T = void> =
  | { ok: true; data: T; message?: string }
  | { ok: false; error: string; fieldErrors?: Record<string, string> };

export type DemoRequestInput = {
  name: string;
  company: string;
  email: string;
  role: string;
  companySize: string;
  projectType: string;
  interests: string[];
  phone?: string;
  notes?: string;
};

export type ContactInquiryType = "general" | "product" | "sales" | "other";

export const CONTACT_INQUIRY_TYPES: { value: ContactInquiryType; label: string }[] = [
  { value: "general", label: "General Inquiry" },
  { value: "product", label: "Product Question" },
  { value: "sales", label: "Sales" },
  { value: "other", label: "Other" },
];

export type ContactInquiryInput = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  inquiryType: ContactInquiryType | "";
  message: string;
};

export type QuoteRequestInput = {
  name: string;
  email: string;
  company: string;
  role: string;
  organizationSize: string;
  estimatedUsers: string;
  projectVolume: string;
  modules: string[];
  ssoNeeds: string;
  integrations?: string;
  implementationTiming: string;
  phone?: string;
  comments?: string;
  /** Plan context from pricing CTA (e.g. enterprise) */
  plan?: string;
};

export const DEMO_ROLES = [
  { value: "owner_executive", label: "Owner / Executive" },
  { value: "project_manager", label: "Project Manager" },
  { value: "superintendent", label: "Superintendent" },
  { value: "estimator", label: "Estimator" },
  { value: "finance", label: "Finance / Accounting" },
  { value: "operations", label: "Operations" },
  { value: "other", label: "Other" },
] as const;

export const DEMO_COMPANY_SIZES = [
  { value: "1_10", label: "1–10 employees" },
  { value: "11_50", label: "11–50 employees" },
  { value: "51_200", label: "51–200 employees" },
  { value: "201_500", label: "201–500 employees" },
  { value: "500_plus", label: "500+ employees" },
] as const;

export const DEMO_PROJECT_TYPES = [
  { value: "general_contracting", label: "General Contracting" },
  { value: "subcontracting", label: "Subcontracting" },
  { value: "commercial", label: "Commercial Construction" },
  { value: "residential", label: "Residential Construction" },
  { value: "infrastructure", label: "Infrastructure" },
  { value: "other", label: "Other" },
] as const;

export const DEMO_INTERESTS = [
  { value: "projects_scheduling", label: "Projects & Scheduling" },
  { value: "daily_logs", label: "Daily Logs" },
  { value: "rfis_submittals", label: "RFIs & Submittals" },
  { value: "documents_photos", label: "Documents & Photos" },
  { value: "financials", label: "Financial Management" },
  { value: "compliance", label: "Compliance" },
  { value: "workforce", label: "Team / Workforce" },
  { value: "reporting", label: "Reporting & Analytics" },
  { value: "other", label: "Other" },
] as const;

export const QUOTE_ROLES = DEMO_ROLES;
export const QUOTE_ORG_SIZES = DEMO_COMPANY_SIZES;

export const QUOTE_USER_BANDS = [
  { value: "1_10", label: "1–10" },
  { value: "11_25", label: "11–25" },
  { value: "26_50", label: "26–50" },
  { value: "51_100", label: "51–100" },
  { value: "101_250", label: "101–250" },
  { value: "250_plus", label: "250+" },
] as const;

export const QUOTE_PROJECT_VOLUME = [
  { value: "1_5", label: "1–5 active projects" },
  { value: "6_20", label: "6–20 active projects" },
  { value: "21_50", label: "21–50 active projects" },
  { value: "51_plus", label: "51+ active projects" },
] as const;

export const QUOTE_MODULES = [
  { value: "project_management", label: "Project Management" },
  { value: "scheduling", label: "Scheduling" },
  { value: "daily_logs", label: "Daily Logs" },
  { value: "rfis_submittals", label: "RFIs & Submittals" },
  { value: "documents_photos", label: "Documents & Photos" },
  { value: "financials", label: "Financial Management" },
  { value: "reporting", label: "Reporting & Analytics" },
  { value: "compliance", label: "Compliance" },
  { value: "workforce", label: "Workforce / Team Management" },
  { value: "website_builder", label: "Website Builder" },
  { value: "other", label: "Other" },
] as const;

export const QUOTE_SSO_OPTIONS = [
  { value: "not_required", label: "Not required" },
  { value: "sso_required", label: "SSO required" },
  { value: "enterprise_identity", label: "Enterprise identity requirements" },
  { value: "not_sure", label: "Not sure" },
] as const;

export const QUOTE_TIMING = [
  { value: "asap", label: "As soon as possible" },
  { value: "1_3_months", label: "Within 1–3 months" },
  { value: "3_6_months", label: "Within 3–6 months" },
  { value: "6_plus_months", label: "6+ months" },
  { value: "exploring", label: "Just exploring" },
] as const;
