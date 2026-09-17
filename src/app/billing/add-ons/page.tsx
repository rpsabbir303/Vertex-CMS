import { redirect } from "next/navigation";
import { AUTH_ROUTES } from "@/lib/auth/routes";

/** Add-ons are selected on the unified billing setup page. */
export default function BillingAddonsRedirectPage() {
  redirect(AUTH_ROUTES.billingSetup);
}
