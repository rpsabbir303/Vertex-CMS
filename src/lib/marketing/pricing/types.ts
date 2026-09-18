/**
 * Pricing domain types for the Vertex CMS marketing site.
 *
 * Live plan configuration (monthly/yearly amounts, currency, sort, active)
 * should eventually be synchronized from the platform plan API.
 * Until that connection exists, UI consumes these types via the local data layer.
 */

export type PricingPeriod = "monthly" | "yearly";

export type EntitlementValue = "included" | "excluded" | "addon";

export type PlanCta = {
  label: string;
  /** "trial" → signup with plan query; "demo" → book demo; "quote" → request quote; "contact" → contact */
  action: "trial" | "demo" | "quote" | "contact";
};

export type Plan = {
  id: string;
  name: string;
  description: string;
  /** null = do not display a numeric price (Contact us / Custom) */
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  currency: string;
  active: boolean;
  sort: number;
  /**
   * Trial length in days from plan configuration.
   * null until synchronized from the plan/billing API — do not invent a duration in UI.
   */
  trialDays: number | null;
  /** Only set when product config marks a recommended plan */
  popular?: boolean;
  highlights: string[];
  cta: PlanCta;
};

export type Feature = {
  id: string;
  name: string;
  /** planId → entitlement */
  entitlements: Record<string, EntitlementValue>;
};

export type FeatureGroup = {
  id: string;
  name: string;
  features: Feature[];
  defaultOpen?: boolean;
};

export type AddOnSource =
  | "DOCUMENTED_BILLING_ADDON"
  | "DOCUMENTED_OPTIONAL_CAPABILITY"
  | "EXISTING_CONFIGURED_ADDON"
  | "ENTERPRISE_CAPABILITY"
  | "ROADMAP_CAPABILITY";

export type AddOnListing = "purchasable" | "enterprise" | "roadmap";

export type AddOnUiKind =
  | "selectable"
  | "selected"
  | "included"
  | "enterprise"
  | "coming_soon"
  | "inactive";

export type AddOn = {
  id: string;
  name: string;
  description: string;
  /** Open category key from catalog/register — not a closed five-item union. */
  category: string;
  /** Human-readable category for filters (derived from catalog data). */
  categoryLabel?: string;
  /** null until live add-on pricing is connected */
  priceLabel: string | null;
  /** Documented billing model (not a dollar amount). */
  billingModel: string | null;
  active: boolean;
  sort: number;
  /** Plan ids where this capability is already included and should not be sold again. */
  includedInPlanIds?: string[];
  /** Internal provenance — not shown in UI. */
  source?: AddOnSource;
  /** Whether checkout may attach this SKU for the tenant. */
  selectable?: boolean;
  /** Billing setup section grouping. */
  listing?: AddOnListing;
};

export type BillingSetupCatalog = {
  purchasable: AddOn[];
  enterprise: AddOn[];
  roadmap: AddOn[];
};

export type PricingFAQ = {
  id: string;
  question: string;
  answer: string;
  order: number;
  active: boolean;
};

export type PricingCatalog = {
  /**
   * Source marker — swap to "api" when live plan sync is wired.
   * @see getPricingCatalog
   */
  source: "placeholder" | "api";
  plans: Plan[];
  featureGroups: FeatureGroup[];
  addOns: AddOn[];
  faqs: PricingFAQ[];
};
