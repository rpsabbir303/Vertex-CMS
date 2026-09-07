import { redirect } from "next/navigation";
import { AUTH_ROUTES } from "@/lib/auth/routes";

/** Documented alias → canonical invite activation. */
export default function InvitationAliasPage() {
  redirect(AUTH_ROUTES.invite);
}
