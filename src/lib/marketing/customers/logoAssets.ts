/**
 * Optional static logo paths. Production logo wall uses `CUSTOMER_LOGOS` in catalog.ts (approved only).
 * Demo SVG paths under `/images/customers/demo/` are for design QA — not wired unless explicitly approved.
 */
export const CUSTOMER_LOGO_ASSETS = {
  demoWall: [
    "/images/customers/demo/demo-customer-logo-01.svg",
    "/images/customers/demo/demo-customer-logo-02.svg",
    "/images/customers/demo/demo-customer-logo-03.svg",
    "/images/customers/demo/demo-customer-logo-04.svg",
    "/images/customers/demo/demo-customer-logo-05.svg",
    "/images/customers/demo/demo-customer-logo-06.svg",
  ],
} as const;
