import type { Metadata } from "next";
import { TenantSetupForm } from "@/components/auth/TenantSetupForm";

export const metadata: Metadata = {
  title: "Workspace Setup | Vertex CMS",
  description: "Provision your Vertex CMS tenant workspace after email verification.",
};

export default function TenantSetupPage() {
  return <TenantSetupForm />;
}
