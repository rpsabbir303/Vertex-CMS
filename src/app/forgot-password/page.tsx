import type { Metadata } from "next";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";

export const metadata: Metadata = {
  title: "Forgot Password | VertexBuild",
  description: "Reset your VertexBuild account password.",
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}
