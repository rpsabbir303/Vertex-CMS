import type { Metadata } from "next";
import { TrialStartedView } from "@/components/conversion/TrialStartedView";

export const metadata: Metadata = {
  title: "Trial Ready | Vertex CMS",
  description: "Your Vertex CMS trial workspace is ready.",
};

export default function TrialStartedPage() {
  return <TrialStartedView />;
}
