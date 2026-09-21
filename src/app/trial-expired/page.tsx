import type { Metadata } from "next";
import { Suspense } from "react";
import { TrialExpiredView } from "@/components/conversion/TrialExpiredView";

export const metadata: Metadata = {
  title: "Trial Ended | VertexBuild",
  description: "Your VertexBuild trial has ended. Upgrade or contact sales to continue.",
};

export default function TrialExpiredPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center text-sm text-brand-muted">Loading…</div>}>
      <TrialExpiredView />
    </Suspense>
  );
}
