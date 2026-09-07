import type { Metadata } from "next";
import { Suspense } from "react";
import { OnboardingHub } from "@/components/auth/OnboardingHub";

export const metadata: Metadata = {
  title: "Onboarding | Vertex CMS",
  description: "Complete Vertex CMS company onboarding.",
};

export default function OnboardingPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center text-sm text-brand-muted">Loading…</div>}>
      <OnboardingHub />
    </Suspense>
  );
}
