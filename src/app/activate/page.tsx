import { redirect } from "next/navigation";
import { AUTH_ROUTES } from "@/lib/auth/routes";

/** Documented alias → canonical invite activation / set password. */
export default function ActivateAliasPage() {
  redirect(AUTH_ROUTES.invite);
}
