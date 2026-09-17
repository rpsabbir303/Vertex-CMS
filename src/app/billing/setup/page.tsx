import type { Metadata } from "next";
import { BillingSetupView } from "@/components/conversion/BillingSetupView";

export const metadata: Metadata = {
  title: "Billing Setup | Vertex CMS",
  description: "Set up billing to continue with your Vertex CMS trial.",
};

export default function BillingSetupPage() {
  return <BillingSetupView />;
}
