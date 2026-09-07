import type { Metadata } from "next";
import { VerifyEmailForm } from "@/components/auth/VerifyEmailForm";

export const metadata: Metadata = {
  title: "Verify Email | Vertex CMS",
  description: "Verify your email to continue Vertex CMS onboarding.",
};

export default function VerifyEmailPage() {
  return <VerifyEmailForm />;
}
