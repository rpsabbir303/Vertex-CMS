import type { Metadata } from "next";
import { Suspense } from "react";
import { VerifyEmailForm } from "@/components/auth/VerifyEmailForm";

export const metadata: Metadata = {
  title: "Verify Email | Vertex CMS",
  description: "Verify your email to continue Vertex CMS onboarding.",
};

export default function VerifyEmailPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center text-sm text-brand-muted">Loading…</div>
      }
    >
      <VerifyEmailForm />
    </Suspense>
  );
}
