import type { Metadata } from "next";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";

export const metadata: Metadata = {
  title: "Forgot Password | Vertex CMS",
  description: "Reset your Vertex CMS account password.",
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}
