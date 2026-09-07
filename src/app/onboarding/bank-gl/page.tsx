import { redirect } from "next/navigation";
import { AUTH_ROUTES } from "@/lib/auth/routes";

/** Documented alias → /onboarding/connect */
export default function OnboardingBankGlAliasPage() {
  redirect(AUTH_ROUTES.onboardingConnect);
}
