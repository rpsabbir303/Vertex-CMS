import type { Metadata } from "next";
import { TrialStartedView } from "@/components/conversion/TrialStartedView";

export const metadata: Metadata = {
  title: "Trial Ready | VertexBuild",
  description: "Your VertexBuild trial workspace is ready.",
};

export default function TrialStartedPage() {
  return <TrialStartedView />;
}
