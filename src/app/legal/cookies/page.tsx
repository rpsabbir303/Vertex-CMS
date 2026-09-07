import { redirect } from "next/navigation";
import { ROUTES } from "@/lib/marketing/navigation";

/** Legacy path → canonical /cookie-policy */
export default function LegacyLegalCookiesPage() {
  redirect(ROUTES.legalCookies);
}
