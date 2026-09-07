import type { Metadata } from "next";
import { Suspense } from "react";
import { SignUpForm } from "@/components/auth/SignUpForm";

export const metadata: Metadata = {
  title: "Sign Up | Vertex CMS",
  description: "Create your Vertex CMS account and start your free trial.",
};

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center text-sm text-brand-muted">Loading…</div>}>
      <SignUpForm />
    </Suspense>
  );
}
