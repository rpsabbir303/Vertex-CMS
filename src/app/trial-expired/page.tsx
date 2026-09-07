import type { Metadata } from "next";
import { TrialExpiredView } from "@/components/conversion/TrialExpiredView";

export const metadata: Metadata = {
  title: "Trial Ended | Vertex CMS",
  description: "Your Vertex CMS trial has ended. Upgrade or contact sales to continue.",
};

export default function TrialExpiredPage() {
  return <TrialExpiredView />;
}
