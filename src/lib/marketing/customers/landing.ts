import { customersInPreLaunchMode } from "./catalog";
import { CUSTOMERS_PROOF_NAV } from "./content";

export type CustomersProofNavItem = (typeof CUSTOMERS_PROOF_NAV)[number];

export function getCustomersProofNavItems(): CustomersProofNavItem[] {
  return [...CUSTOMERS_PROOF_NAV];
}

export function showCustomersProofClosingNote(): boolean {
  return customersInPreLaunchMode();
}
