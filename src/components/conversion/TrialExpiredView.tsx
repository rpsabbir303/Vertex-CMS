"use client";

import Link from "next/link";
import { AuthAlert } from "@/components/auth/AuthAlert";
import { AuthShell } from "@/components/auth/AuthShell";
import { ROUTES } from "@/lib/marketing/navigation";

/**
 * Documented Trial Expired state.
 * Does not invent pricing, renewal rules, or trial length.
 */
export function TrialExpiredView() {
  return (
    <AuthShell
      title="Your trial has ended"
      subtitle="Your trial period is no longer active. Choose how you’d like to continue with Vertex CMS."
      panelTitle="Continue with Vertex CMS."
      panelBody="Upgrade to a paid plan or talk with sales about the right package for your organization. Exact terms follow your account configuration."
    >
      <div className="space-y-5">
        <AuthAlert tone="info">
          This screen presents the documented trial-expired state. Renewal and billing rules are enforced by the
          billing backend — not this marketing site.
        </AuthAlert>
        <div className="flex flex-col gap-3">
          <Link href={ROUTES.pricing} className="btn-primary text-center">
            Upgrade
          </Link>
          <Link href={ROUTES.contact} className="btn-secondary text-center">
            Contact Sales
          </Link>
        </div>
        <p className="text-center text-[13px]">
          <Link href={ROUTES.signIn} className="font-semibold text-brand-blue hover:underline">
            Back to sign in
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
