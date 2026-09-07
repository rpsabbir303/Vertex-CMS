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

export type AddOn = {
  id: string;
  name: string;
  description: string;
  category: "ai" | "storage" | "seats" | "website" | "payroll";
  /** null until live add-on pricing is connected */
  priceLabel: string | null;
  active: boolean;
  sort: number;
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
