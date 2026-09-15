"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthAlert } from "@/components/auth/AuthAlert";
import { AuthButton } from "@/components/auth/AuthButton";
import { ProvisioningMilestones } from "@/components/auth/ProvisioningMilestones";
import { TenantSetupShell } from "@/components/auth/TenantSetupShell";
import { AuthClient } from "@/lib/auth/client";
import { AUTH_ROUTES } from "@/lib/auth/routes";
import { resolveAuthGate } from "@/lib/auth/guards";
import { readAuthSession } from "@/lib/auth/session";
import type { TenantProvisionStatus } from "@/lib/auth/types";
import { getActivePlans } from "@/lib/marketing/pricing";

const STATUS_COPY: Record<Exclude<TenantProvisionStatus, "not_started" | "ready" | "failed">, string> = {
  creating_tenant: "Creating tenant…",
  assigning_subdomain: "Provisioning subdomain…",
  preparing_workspace: "Preparing workspace…",
};

type Phase = "running" | "ready";

export function TenantSetupForm() {
  const router = useRouter();
  const started = useRef(false);
  const [ready, setReady] = useState(false);
  const [phase, setPhase] = useState<Phase>("running");
  const [status, setStatus] = useState<TenantProvisionStatus>("creating_tenant");
  const [companyName, setCompanyName] = useState("");
  const [planName, setPlanName] = useState<string | undefined>();
  const [subdomain, setSubdomain] = useState<string | undefined>();
  const [retrying, setRetrying] = useState(false);

  const syncFromSession = useCallback(() => {
    const session = readAuthSession();
    if (!session) return;
    setCompanyName(session.companyName);
    setStatus(session.tenant.status);
    setSubdomain(session.tenant.subdomain);
    if (session.planId) {
      setPlanName(getActivePlans().find((p) => p.id === session.planId)?.name);
    }
  }, []);

  const runProvision = useCallback(async () => {
    setPhase("running");
    setRetrying(false);
    setSubdomain(undefined);

    const poll = window.setInterval(() => syncFromSession(), 150);
    const result = await AuthClient.provisionTenant();
    window.clearInterval(poll);
    syncFromSession();

    if (!result.ok) {
      router.replace(AUTH_ROUTES.tenantSetupFailed);
      return;
    }

    setPhase("ready");
    setStatus("ready");
    setSubdomain(result.data.subdomain);
  }, [router, syncFromSession]);

  useEffect(() => {
    const session = readAuthSession();
    const gate = resolveAuthGate(session, {
      allowUnverifiedEmail: false,
      allowUnprovisionedTenant: true,
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
    if (gate.reason === "mfa_required") {
      router.replace(AUTH_ROUTES.mfa);
      return;
    }

    if (session?.tenant.status === "failed") {
      router.replace(AUTH_ROUTES.tenantSetupFailed);
      return;
    }

    if (session?.tenant.status === "ready") {
      setCompanyName(session.companyName);
      setSubdomain(session.tenant.subdomain);
      if (session.planId) {
        setPlanName(getActivePlans().find((p) => p.id === session.planId)?.name);
      }
      setPhase("ready");
      setStatus("ready");
      setReady(true);
      return;
    }

    setReady(true);
    if (!started.current) {
      started.current = true;
      void runProvision();
    }
  }, [router, runProvision]);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F7F9FC] text-sm text-brand-muted">
        Setting up your workspace…
      </div>
    );
  }

  return (
    <TenantSetupShell>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">Workspace setup</p>
      <h1 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
        {phase === "ready" ? "Your workspace is ready." : "Setting up your workspace"}
      </h1>
      <p className="mt-3 text-[15px] leading-relaxed text-brand-muted">
        {phase === "ready"
          ? "Your Vertex CMS workspace has been provisioned successfully. Continue to start your trial."
          : "Your Vertex CMS workspace is being prepared."}
      </p>

      {phase === "ready" && (companyName || planName) ? (
        <p className="mt-2 text-[13px] text-brand-muted">
          {companyName ? (
            <>
              Company: <strong className="text-brand-navy">{companyName}</strong>
            </>
          ) : null}
          {companyName && planName ? " · " : null}
          {planName ? (
            <>
              Plan: <strong className="text-brand-navy">{planName}</strong>
            </>
          ) : null}
        </p>
      ) : null}

      <ProvisioningMilestones phase={phase} status={status} />

      {phase === "running" && (
        <div className="mt-6" role="status" aria-live="polite">
          <AuthAlert tone="info">
            {STATUS_COPY[status as keyof typeof STATUS_COPY] ?? "Setting up your workspace…"}
            {retrying ? " (retrying)" : ""}
          </AuthAlert>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-brand-line">
            <div className="h-full w-1/2 animate-pulse rounded-full bg-brand-orange" />
          </div>
        </div>
      )}

      {phase === "ready" && (
        <div className="mt-6 space-y-4">
          <AuthAlert tone="success">
            <p>
              Workspace for <strong>{companyName || "your company"}</strong> is ready.
            </p>
            {subdomain ? (
              <p className="mt-2">
                Workspace address:
                <br />
                <strong className="font-mono text-[13px]">{subdomain}</strong>
              </p>
            ) : null}
          </AuthAlert>
          <AuthButton type="button" onClick={() => router.push(AUTH_ROUTES.trialStarted)}>
            Continue — Start Trial
          </AuthButton>
        </div>
      )}
    </TenantSetupShell>
  );
}
