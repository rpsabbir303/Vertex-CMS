import type { Metadata } from "next";
import { MfaForm } from "@/components/auth/MfaForm";

export const metadata: Metadata = {
  title: "Two-Factor Authentication | VertexBuild",
  description: "Verify your VertexBuild account with a TOTP authenticator code.",
};

export default function MfaPage() {
  return <MfaForm />;
}
