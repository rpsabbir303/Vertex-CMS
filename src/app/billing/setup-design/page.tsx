import type { Metadata } from "next";
import { BillingSetupDesignView } from "@/components/conversion/BillingSetupDesignView";

export const metadata: Metadata = {
  title: "Billing Setup (Design) | Vertex CMS",
  description: "Static billing setup layout for design handoff and html.to.design capture.",
  robots: { index: false, follow: false },
};

export default function BillingSetupDesignPage() {
  return <BillingSetupDesignView />;
}
