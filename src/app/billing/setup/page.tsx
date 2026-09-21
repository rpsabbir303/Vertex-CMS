import type { Metadata } from "next";
import { BillingSetupView } from "@/components/conversion/BillingSetupView";

export const metadata: Metadata = {
  title: "Billing Setup | VertexBuild",
  description: "Set up billing to continue with your VertexBuild trial.",
};

export default function BillingSetupPage() {
  return <BillingSetupView />;
}
