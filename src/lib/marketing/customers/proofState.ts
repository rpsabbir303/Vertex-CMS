/**

 * Customers proof content mode.

 *

 * - `demo` — populated fictional sample content for UI/UX evaluation (current dev default).

 * - `published` — approved production content from `CUSTOMER_LOGOS`, `CASE_STUDIES`, etc.

 * - `limited` — same as published but allows partial empty sections (uses published arrays only).

 * - `empty` — no public proof; compact limited states throughout.

 */

export type CustomersProofState = "demo" | "published" | "limited" | "empty";



/** Switch to `published` | `limited` | `empty` when connecting CMS-approved customer proof. */

export const CUSTOMERS_PROOF_STATE: CustomersProofState = "demo";



export function isCustomersDemoMode(): boolean {

  return CUSTOMERS_PROOF_STATE === "demo";

}



export function isCustomersEmptyMode(): boolean {

  return CUSTOMERS_PROOF_STATE === "empty";

}


