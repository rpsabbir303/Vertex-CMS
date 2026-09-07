"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthAlert } from "@/components/auth/AuthAlert";
import { AuthButton } from "@/components/auth/AuthButton";
import { VertexLogo } from "@/components/Icons";
import { AUTH_PREVIEW_NOTICE, AuthClient } from "@/lib/auth/client";
import { AUTH_ROUTES } from "@/lib/auth/routes";
import { resolveAuthGate } from "@/lib/auth/guards";
import { readAuthSession } from "@/lib/auth/session";
import { PROVISIONING_MILESTONES, type TenantProvisionStatus } from "@/lib/auth/types";
import { ROUTES } from "@/lib/marketing/navigation";

const STATUS_COPY: Record<Exclude<TenantProvisionStatus, "not_started" | "ready" | "failed">, string> = {
  creating_tenant: "Creating tenant…",
  assigning_subdomain: "Provisioning subdomain…",
  preparing_workspace: "Preparing workspace…",
};

type Phase = "running" | "ready" | "failed";
type MilestoneId = (typeof PROVISIONING_MILESTONES)[number]["id"];
type MilestoneState = "done" | "active" | "pending" | "failed";

export function TenantSetupForm() {
  const router = useRouter();
  const started = useRef(false);
  const [ready, setReady] = useState(false);
  const [phase, setPhase] = useState<Phase>("running");
  const [status, setStatus] = useState<TenantProvisionStatus>("creating_tenant");
  const [companyName, setCompanyName] = useState("");
  const [subdomain, setSubdomain] = useState<string | undefined>();
  const [error, setError] = useState<string | null>(null);
  const [retrying, setRetrying] = useState(false);

  const syncFromSession = useCallback(() => {
    const session = readAuthSession();
    if (!session) return;
    setCompanyName(session.companyName);
    setStatus(session.tenant.status);
    setSubdomain(session.tenant.subdomain);
  }, []);

  const runProvision = useCallback(
    async (retry = false) => {
      setPhase("running");
      setError(null);
      setRetrying(retry);
      setSubdomain(undefined);

      const poll = window.setInterval(() => syncFromSession(), 150);
      const result = retry ? await AuthClient.retryTenantProvisioning() : await AuthClient.provisionTenant();
      window.clearInterval(poll);
      syncFromSession();
      setRetrying(false);

      if (!result.ok) {
        setPhase("failed");
        setStatus("failed");
        setError(result.error);
        return;
      }

      setPhase("ready");
      setStatus("ready");
      setSubdomain(result.data.subdomain);
    },
    [syncFromSession]
  );

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

    if (session?.tenant.status === "ready") {
      setCompanyName(session.companyName);
      setSubdomain(session.tenant.subdomain);
      setPhase("ready");
      setStatus("ready");
      setReady(true);
      return;
    }

    setReady(true);
    if (!started.current) {
      started.current = true;
      void runProvision(false);
    }
  }, [router, runProvision]);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F7F9FC] text-sm text-brand-muted">
        Setting up your workspace…
      </div>
    );
  }

  const milestoneState = (id: MilestoneId): MilestoneState => {
    if (phase === "ready") return "done";
    if (id === "account" || id === "email") return "done";

    if (id === "tenant") {
      if (status === "creating_tenant") return phase === "failed" ? "failed" : "active";
      if (["assigning_subdomain", "preparing_workspace", "ready"].includes(status)) return "done";
      if (phase === "failed") return "failed";
      return "pending";
    }

    if (id === "subdomain") {
      if (status === "assigning_subdomain") return phase === "failed" ? "failed" : "active";
      if (["preparing_workspace", "ready"].includes(status)) return "done";
      if (status === "creating_tenant") return "pending";
      if (phase === "failed" && status === "failed") return "failed";
      return "pending";
    }

    if (id === "workspace") {
      if (status === "preparing_workspace") return phase === "failed" ? "failed" : "active";
      if (status === "ready") return "done";
      return "pending";
    }

    return "pending";
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-brand-navy">
      <header className="border-b border-brand-line bg-white">
        <div className="site-shell flex h-16 items-center justify-between">
          <VertexLogo />
          <Link href={ROUTES.home} className="text-[13px] font-semibold text-brand-muted hover:text-brand-navy">
            Exit to website
          </Link>
        </div>
      </header>

      <main className="site-shell py-10 sm:py-16">
        <div className="mb-4 rounded-lg border border-brand-blue/20 bg-brand-blue/5 px-3 py-2.5 text-[12px] text-brand-navy/80">
          {AUTH_PREVIEW_NOTICE}
        </div>

        <div className="mx-auto max-w-xl rounded-2xl border border-brand-line bg-white p-6 shadow-soft sm:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">Tenant setup</p>
          <h1 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            {phase === "ready" ? "Your workspace is ready." : "Setting up your workspace"}
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-brand-muted">
            {phase === "ready"
              ? "Your Vertex CMS workspace has been provisioned successfully. Continue to start your trial and complete onboarding."
              : "Your Vertex CMS workspace is being prepared."}
          </p>

          <ol className="mt-8 space-y-3" aria-live="polite">
            {PROVISIONING_MILESTONES.map((m) => {
              const state = milestoneState(m.id);
              return (
                <li
                  key={m.id}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-[14px] ${
                    state === "done"
                      ? "border-emerald-200 bg-emerald-50/70 text-brand-navy"
                      : state === "active"
                        ? "border-brand-orange/30 bg-brand-orange/5 text-brand-navy"
                        : state === "failed"
                          ? "border-red-200 bg-red-50 text-brand-navy"
                          : "border-brand-line bg-[#FAFBFD] text-brand-muted"
                  }`}
                >
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current text-[11px] font-bold"
                    aria-hidden="true"
                  >
                    {state === "done" ? "✓" : state === "active" ? "→" : state === "failed" ? "!" : "·"}
                  </span>
                  <span className="font-medium">{m.label}</span>
                </li>
              );
            })}
          </ol>

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

          {phase === "failed" && (
            <div className="mt-6 space-y-4">
              <AuthAlert>{error ?? "We couldn’t finish setting up your workspace."}</AuthAlert>
              <AuthButton type="button" loading={retrying} onClick={() => void runProvision(true)}>
                Try again
              </AuthButton>
              <Link
                href={ROUTES.contact}
                className="inline-flex w-full items-center justify-center rounded-sm border border-brand-line bg-white px-5 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-brand-navy hover:bg-brand-soft"
              >
                Contact Support
              </Link>
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
        </div>
      </main>
    </div>
  );
}
