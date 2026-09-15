import type { Metadata } from "next";
import { ProvisioningDemoHub } from "@/components/auth/ProvisioningDemoHub";

export const metadata: Metadata = {
  title: "Provisioning Demo | Vertex CMS",
  description: "Preview-only demos for workspace provisioning failure and recovery states.",
  robots: { index: false, follow: false },
};

export default function ProvisioningDemoPage() {
  return <ProvisioningDemoHub />;
}
