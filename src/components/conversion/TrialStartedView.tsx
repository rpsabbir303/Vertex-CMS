"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthAlert } from "@/components/auth/AuthAlert";
import { AuthButton } from "@/components/auth/AuthButton";
import { AuthShell } from "@/components/auth/AuthShell";
import { ProvisioningMilestones } from "@/components/auth/ProvisioningMilestones";
import { AuthClient } from "@/lib/auth/client";
import { AUTH_ROUTES } from "@/lib/auth/routes";
import { resolveAuthGate } from "@/lib/auth/guards";
import { readAuthSession } from "@/lib/auth/session";
import { ROUTES } from "@/lib/marketing/navigation";
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
  const [retrying, setRetrying] = useState(false);

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
    setRetrying(true);
    setPhase("activating");
    setError(null);
    const result = await AuthClient.startTrial();
    setRetrying(false);
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
      <AuthShell
        eyebrow="Trial activation"
        title="Starting your trial"
        subtitle="Activating trial for your provisioned workspace…"
      >
        <AuthAlert tone="info">Trial activation in progress…</AuthAlert>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-brand-line">
          <div className="h-full w-1/3 animate-pulse rounded-full bg-brand-orange" />
        </div>
      </AuthShell>
    );
  }

  if (phase === "failed") {
    return (
      <AuthShell title="Trial activation failed" subtitle="We couldn’t start your trial. Please try again.">
        <div className="space-y-4">
          <AuthAlert>{error ?? "We couldn’t start your trial."}</AuthAlert>
          <AuthButton type="button" loading={retrying} onClick={() => void retry()}>
            Try again
          </AuthButton>
          <Link
            href={ROUTES.contact}
            className="inline-flex w-full items-center justify-center rounded-sm border border-brand-line bg-white px-5 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-brand-navy hover:bg-brand-soft"
          >
            Contact Support
          </Link>
        </div>
      </AuthShell>
    );
  }

  return (
    <AuthShell
      eyebrow="Trial ready"
      title="Your trial is ready"
      subtitle="Your workspace is active. Enter VertexBuild to continue setup."
      panelTitle="Trial started."
      panelBody="Tenant and subdomain are provisioned. Your trial is active per your selected plan configuration."
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
              Trial ends: <strong>{new Date(trialEndsAt).toLocaleString()}</strong>
            </p>
          ) : null}
        </AuthAlert>

        <ProvisioningMilestones phase="ready" status="ready" />

        <p className="text-[14px] leading-relaxed text-brand-muted">
          Next, set up billing and optional add-ons, then continue to your dashboard. Company profile setup happens inside
          VertexBuild.
        </p>

        <AuthButton type="button" onClick={() => router.push(AUTH_ROUTES.billingSetup)}>
          Continue — Start Free Trial
        </AuthButton>

        <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-4 sm:gap-y-1">
          <Link
            href={ROUTES.resourcesHelp}
            className="text-center text-[13px] font-semibold text-brand-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            Help &amp; resources
          </Link>
          <span className="hidden text-brand-line sm:inline" aria-hidden="true">
            ·
          </span>
          <Link
            href={ROUTES.demo}
            className="text-center text-[13px] font-semibold text-brand-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            Book a Demo
          </Link>
          <span className="hidden text-brand-line sm:inline" aria-hidden="true">
            ·
          </span>
          <Link
            href={ROUTES.contact}
            className="text-center text-[13px] font-semibold text-brand-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            Contact support
          </Link>
        </div>
      </div>
    </AuthShell>
  );
}
