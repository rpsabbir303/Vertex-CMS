"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthAlert } from "@/components/auth/AuthAlert";
import { AuthButton } from "@/components/auth/AuthButton";
import { AuthShell } from "@/components/auth/AuthShell";
import { AuthClient } from "@/lib/auth/client";
import { AUTH_ROUTES } from "@/lib/auth/routes";
import { resolveAuthGate } from "@/lib/auth/guards";
import { readAuthSession } from "@/lib/auth/session";
import { getActivePlans } from "@/lib/marketing/pricing";

type Phase = "loading" | "activating" | "ready" | "failed";

export function TrialStartedView() {
  const router = useRouter();
  const started = useRef(false);
  const [phase, setPhase] = useState<Phase>("loading");
  const [companyName, setCompanyName] = useState("");
  const [subdomain, setSubdomain] = useState<string | undefined>();
  const [planName, setPlanName] = useState<string | undefined>();
  const [trialEndsAt, setTrialEndsAt] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const session = readAuthSession();
    const gate = resolveAuthGate(session, {
      allowUnprovisionedTenant: false,
      allowTrialInactive: true,
    });

    if (gate.reason === "unauthenticated") {
      router.replace(AUTH_ROUTES.signup);
      return;
    }
    if (gate.reason === "email_unverified") {
      router.replace(AUTH_ROUTES.verifyEmail);
      return;
    }
    if (gate.reason === "tenant_incomplete" || gate.reason === "tenant_failed") {
      router.replace(AUTH_ROUTES.tenantSetup);
      return;
    }
    if (!session) return;

    setCompanyName(session.companyName);
    setSubdomain(session.tenant.subdomain);
    if (session.planId) {
      setPlanName(getActivePlans().find((p) => p.id === session.planId)?.name);
    }

    if (session.trial.status === "trial") {
      setTrialEndsAt(session.trial.trial_ends_at);
      setPhase("ready");
      return;
    }

    if (started.current) return;
    started.current = true;

    async function activate() {
      setPhase("activating");
      setError(null);
      const result = await AuthClient.startTrial();
      if (!result.ok) {
        setPhase("failed");
        setError(result.error);
        return;
      }
      setTrialEndsAt(result.data.trial_ends_at);
      setPhase("ready");
    }

    void activate();
  }, [router]);

  async function retry() {
    started.current = false;
    setPhase("activating");
    setError(null);
    const result = await AuthClient.startTrial();
    if (!result.ok) {
      setPhase("failed");
      setError(result.error);
      return;
    }
    setTrialEndsAt(result.data.trial_ends_at);
    setPhase("ready");
  }

  if (phase === "loading" || phase === "activating") {
    return (
      <AuthShell title="Starting your trial" subtitle="Activating trial for your provisioned workspace…">
        <AuthAlert tone="info">Trial activation in progress…</AuthAlert>
      </AuthShell>
    );
  }

  if (phase === "failed") {
    return (
      <AuthShell title="Trial activation failed" subtitle="We couldn’t start your trial. Please try again.">
        <div className="space-y-4">
          <AuthAlert>{error ?? "We couldn’t start your trial."}</AuthAlert>
          <AuthButton type="button" onClick={() => void retry()}>
            Try again
          </AuthButton>
        </div>
      </AuthShell>
    );
  }

  return (
    <AuthShell
      title="Your trial is ready"
      subtitle="Your trial has started. Continue into onboarding to finish company setup."
      panelTitle="Trial started."
      panelBody="Tenant and subdomain are provisioned. Trial status is active per your selected plan configuration."
    >
      <div className="space-y-5">
        <AuthAlert tone="success">
          <p>
            Trial started for <strong>{companyName || "your company"}</strong>
            {planName ? (
              <>
                {" "}
                on <strong>{planName}</strong>
              </>
            ) : null}
            .
          </p>
          {subdomain ? (
            <p className="mt-2">
              Workspace address: <strong className="font-mono text-[13px]">{subdomain}</strong>
            </p>
          ) : null}
          {trialEndsAt ? (
            <p className="mt-2 text-[12px]">
              Trial ends at: <strong>{new Date(trialEndsAt).toLocaleString()}</strong>
            </p>
          ) : (
            <p className="mt-2 text-[12px] text-brand-muted">
              Trial end date will appear when plan configuration provides trial length (trialDays).
            </p>
          )}
        </AuthAlert>
        <AuthButton type="button" onClick={() => router.push(AUTH_ROUTES.onboardingCompany)}>
          Continue to onboarding
        </AuthButton>
      </div>
    </AuthShell>
  );
}
