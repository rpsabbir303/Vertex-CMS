import type { Metadata } from "next";
import { TenantSetupForm } from "@/components/auth/TenantSetupForm";

export const metadata: Metadata = {
  title: "Workspace Setup | VertexBuild",
  description: "Provision your VertexBuild tenant workspace after email verification.",
};

export default function TenantSetupPage() {
  return <TenantSetupForm />;
}
