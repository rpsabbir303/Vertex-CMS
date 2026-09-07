import { redirect } from "next/navigation";
import { AUTH_ROUTES } from "@/lib/auth/routes";

/** Documented alias → /onboarding/invite-team */
export default function OnboardingTeamAliasPage() {
  redirect(AUTH_ROUTES.onboardingInvite);
}
