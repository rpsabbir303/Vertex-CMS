import type { Metadata } from "next";
import { Suspense } from "react";
import { ProvisioningFailureForm } from "@/components/auth/ProvisioningFailureForm";

export const metadata: Metadata = {
  title: "Workspace Setup | VertexBuild",
  description: "Workspace provisioning could not be completed. Retry or contact support.",
};

export default function TenantSetupFailedPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#F7F9FC] text-sm text-brand-muted">
          Loading…
        </div>
      }
    >
      <ProvisioningFailureForm />
    </Suspense>
  );
}
