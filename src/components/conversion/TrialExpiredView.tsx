"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AuthAlert } from "@/components/auth/AuthAlert";
import { AuthShell } from "@/components/auth/AuthShell";
import { AuthClient } from "@/lib/auth/client";
import { readAuthSession } from "@/lib/auth/session";
import { AUTH_ROUTES } from "@/lib/auth/routes";
import { isTrialExpiredDemoMode } from "@/lib/auth/trialDemo";
import { getActivePlans } from "@/lib/marketing/pricing";
import { planQuoteHref } from "@/lib/marketing/pricing/planLinks";
import { ROUTES } from "@/lib/marketing/navigation";

/**
 * Trial expired recovery — distinct from sign-in failure or system errors.
 * Does not invent pricing, retention, or data-deletion claims.
 */
export function TrialExpiredView() {
  const router = useRouter();
  const params = useSearchParams();
  const demoMode = isTrialExpiredDemoMode(params.get("mode"));

  const [companyName, setCompanyName] = useState<string | undefined>();
  const [planName, setPlanName] = useState<string | undefined>();
  const [planId, setPlanId] = useState<string | undefined>();
  const [ready, setReady] = useState(!demoMode);

  useEffect(() => {
    if (demoMode) {
      AuthClient.seedTrialExpiredPreview();
    }

    const session = readAuthSession();
    if (!session && !demoMode) {
      router.replace(`${AUTH_ROUTES.signIn}?trial=expired`);
      return;
    }

    if (session?.companyName) setCompanyName(session.companyName);
    if (session?.planId) {
      setPlanId(session.planId);
      setPlanName(getActivePlans().find((p) => p.id === session.planId)?.name);
    }
    setReady(true);
  }, [demoMode, router]);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F7F9FC] text-sm text-brand-muted">
        Loading…
      </div>
    );
  }

  const pricingHref = planId
    ? `${ROUTES.pricing}?intent=upgrade&plan=${encodeURIComponent(planId)}`
    : `${ROUTES.pricing}?intent=upgrade`;
  const quoteHref = planId ? planQuoteHref(planId, { intent: "upgrade" }) : ROUTES.requestQuote;

  return (
    <AuthShell
      eyebrow="Trial status"
      title="Your Vertex CMS trial has ended."
      subtitle="Your trial period is no longer active. Choose the next step that works best for your business."
      panelTitle="Continue with Vertex CMS."
      panelBody="Upgrade to a paid plan, request a quote, or speak with our team about the right package for your organization."
    >
      <div className="space-y-5">
        <AuthAlert tone="info">
          {companyName ? (
            <p>
              Signed in as <strong>{companyName}</strong>. Your trial is no longer active.
              {planName ? (
                <>
                  {" "}
                  Your previous trial was on <strong>{planName}</strong>.
                </>
              ) : null}
            </p>
          ) : (
            <p>Your trial period has ended. Choose a path below to continue with Vertex CMS.</p>
          )}
        </AuthAlert>

        <div className="flex flex-col gap-3">
          <Link href={pricingHref} className="btn-primary text-center">
            Choose a Plan
          </Link>
          <Link href={quoteHref} className="btn-secondary text-center">
            Request Quote
          </Link>
          <Link
            href={ROUTES.demo}
            className="inline-flex items-center justify-center rounded-sm border border-brand-line bg-white px-5 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-brand-navy hover:bg-brand-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            Book a Demo
          </Link>
        </div>

        <p className="text-center text-[13px] text-brand-muted">
          Have an active subscription?{" "}
          <Link
            href={AUTH_ROUTES.signIn}
            className="font-semibold text-brand-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            Back to Login
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
