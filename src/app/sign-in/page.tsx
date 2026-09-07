import type { Metadata } from "next";
import { Suspense } from "react";
import { SignInForm } from "@/components/auth/SignInForm";

export const metadata: Metadata = {
  title: "Sign In | Vertex CMS",
  description: "Sign in to your Vertex CMS construction management workspace.",
};

export default function SignInPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center text-sm text-brand-muted">Loading…</div>}>
      <SignInForm />
    </Suspense>
  );
}
