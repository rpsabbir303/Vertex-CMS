import type { Metadata } from "next";
import { Suspense } from "react";
import { InviteActivateForm } from "@/components/auth/InviteActivateForm";

export const metadata: Metadata = {
  title: "Accept Invitation | Vertex CMS",
  description: "Activate your Vertex CMS invitation and set your password.",
};

export default function InvitePage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center text-sm text-brand-muted">Loading…</div>}>
      <InviteActivateForm />
    </Suspense>
  );
}
