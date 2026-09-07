/**
 * SSO entry configuration for login.
 * Documentation: "SSO entry where enabled/appropriate."
 * No identity provider is configured in this marketing repo.
 */

export type SsoProvider = {
  id: string;
  label: string;
};

/** Flip to true and populate providers when enterprise SSO is wired. */
export const SSO_ENABLED = false;

export const SSO_PROVIDERS: SsoProvider[] = [];

export const SSO_BACKEND_GAP =
  "Enterprise SSO / identity provider entry on login (only when enabled for the tenant/product)";
