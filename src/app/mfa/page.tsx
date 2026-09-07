import type { Metadata } from "next";
import { MfaForm } from "@/components/auth/MfaForm";

export const metadata: Metadata = {
  title: "Two-Factor Authentication | Vertex CMS",
  description: "Verify your Vertex CMS account with a TOTP authenticator code.",
};

export default function MfaPage() {
  return <MfaForm />;
}
