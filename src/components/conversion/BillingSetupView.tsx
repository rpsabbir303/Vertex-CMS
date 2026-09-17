"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { AuthAlert } from "@/components/auth/AuthAlert";
import { AuthButton } from "@/components/auth/AuthButton";
import { AuthShell } from "@/components/auth/AuthShell";
import { PostTrialProgress } from "@/components/auth/PostTrialProgress";
import { BillingAddOnsPicker } from "@/components/conversion/BillingAddOnsPicker";
import { BillingPlanPicker, BillingSelectedPlanBanner } from "@/components/conversion/BillingPlanPicker";
import { PlanCheckoutSummary } from "@/components/conversion/PlanCheckoutSummary";
import { AuthClient } from "@/lib/auth/client";
import { resolveAuthGate } from "@/lib/auth/guards";
import { AUTH_ROUTES } from "@/lib/auth/routes";
import { readAuthSession, updateCheckoutPlan } from "@/lib/auth/session";
import type { BillingPeriod } from "@/lib/auth/types";
import {
  getActiveAddOns,
  getActivePlans,
  isAddonIncludedInPlan,
  planQuoteHref,
} from "@/lib/marketing/pricing";

type Phase = "loading" | "ready" | "complete";

export function BillingSetupView() {
  const router = useRouter();
  const addOns = useMemo(() => getActiveAddOns(), []);

  const [phase, setPhase] = useState<Phase>("loading");
  const [processing, setProcessing] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [planError, setPlanError] = useState<string | null>(null);
  const [planId, setPlanId] = useState<string | undefined>();
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");
  const [trialEndsAt, setTrialEndsAt] = useState<string | null>(null);
  const [showPlanPicker, setShowPlanPicker] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const plan = useMemo(() => (planId ? getActivePlans().find((p) => p.id === planId) : undefined), [planId]);
  const selectedAddonObjects = addOns.filter(
    (addon) => selectedAddons.includes(addon.id) && !isAddonIncludedInPlan(addon, planId)
  );
  const needsPlanSelection = !planId || showPlanPicker;
  const isEnterpriseQuote = plan?.cta.action === "quote";

  useEffect(() => {
    const session = readAuthSession();
    const gate = resolveAuthGate(session, { allowTrialInactive: false });

    if (gate.reason === "unauthenticated") {
      router.replace(AUTH_ROUTES.signup);
      return;
    }
    if (gate.redirectTo && gate.reason !== "ready" && gate.reason !== "billing_incomplete") {
      router.replace(gate.redirectTo);
      return;
    }
    if (!session) return;

    if (session.checkout.billingComplete) {
      setPlanId(session.planId);
      setBillingPeriod(session.billingPeriod ?? "monthly");
      setSelectedAddons(session.checkout.selectedAddonIds);
      setTrialEndsAt(session.trial.trial_ends_at);
      setPhase("complete");
      return;
    }

    setPlanId(session.planId);
    setBillingPeriod(session.billingPeriod ?? "monthly");
    setShowPlanPicker(!session.planId);
    setTrialEndsAt(session.trial.trial_ends_at);
    setSelectedAddons(session.checkout.selectedAddonIds ?? []);
    setPhase("ready");
  }, [router]);

  useEffect(() => {
    setSelectedAddons((prev) =>
      prev.filter((id) => {
        const addon = addOns.find((item) => item.id === id);
        if (!addon) return false;
        return !isAddonIncludedInPlan(addon, planId);
      })
    );
  }, [planId, addOns]);

  function toggleAddon(id: string) {
    const addon = addOns.find((item) => item.id === id);
    if (!addon || isAddonIncludedInPlan(addon, planId)) return;
    setSelectedAddons((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function handlePeriodChange(period: BillingPeriod) {
    setBillingPeriod(period);
    if (planId) {
      updateCheckoutPlan(planId, period);
    }
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);
    setPlanError(null);

    if (!planId || !plan) {
      setPlanError("Select a plan to continue.");
      setShowPlanPicker(true);
      return;
    }
    if (isEnterpriseQuote) return;

    setProcessing(true);
    const result = await AuthClient.completeBillingSetup({
      planId,
      billingPeriod,
      addonIds: selectedAddons,
    });
    setProcessing(false);

    if (!result.ok) {
      setFormError(result.error);
      if (result.fieldErrors?.plan) {
        setPlanError(result.fieldErrors.plan);
        setShowPlanPicker(true);
      }
      return;
    }
    setPhase("complete");
  }

  if (phase === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F7F9FC]">
        <div className="w-full max-w-md space-y-3 px-6" aria-busy="true" aria-live="polite">
          <p className="text-center text-sm text-brand-muted">Loading billing setup…</p>
          <div className="h-3 w-1/3 animate-pulse rounded bg-brand-line" />
          <div className="h-16 animate-pulse rounded-xl bg-brand-line/80" />
          <div className="h-24 animate-pulse rounded-xl bg-brand-line/70" />
        </div>
      </div>
    );
  }

  const completePlan = plan ?? (planId ? getActivePlans().find((p) => p.id === planId) : undefined);
  if (phase === "complete" && completePlan) {
    return (
      <AuthShell
        layout="checkout"
        showPreviewNotice={false}
        eyebrow="Billing complete"
        title="Your Vertex CMS workspace is ready."
        subtitle="Billing setup is complete. Continue to your dashboard to get started."
        panelTitle="Billing follows your plan."
        panelBody="Your plan, billing cadence, and optional capabilities are configured. Payment processing is handled through Vertex CMS billing."
      >
        <PostTrialProgress current="dashboard" />
        <div className="mt-4 space-y-6">
          <AuthAlert tone="success">Billing complete</AuthAlert>
          <div className="rounded-xl border border-brand-line bg-[#FAFBFD] p-5 text-[14px]">
            <p>
              <span className="text-brand-muted">Plan</span>
              <br />
              <strong className="text-brand-navy">{completePlan.name}</strong>
            </p>
            <p className="mt-3">
              <span className="text-brand-muted">Billing</span>
              <br />
              <strong className="text-brand-navy">{billingPeriod === "yearly" ? "Yearly" : "Monthly"}</strong>
            </p>
            <p className="mt-3">
              <span className="text-brand-muted">Add-ons</span>
              <br />
              <strong className="text-brand-navy">
                {selectedAddonObjects.length
                  ? selectedAddonObjects.map((addon) => addon.name).join(", ")
                  : "None selected"}
              </strong>
            </p>
          </div>
          <AuthButton type="button" labelStyle="normal" className="sm:min-w-[15rem]" onClick={() => router.push(AUTH_ROUTES.appHome)}>
            Continue to Dashboard
          </AuthButton>
        </div>
      </AuthShell>
    );
  }

  return (
    <AuthShell
      layout="checkout"
      showPreviewNotice={false}
      eyebrow="Payment & billing"
      title="Set up your billing"
      subtitle="Configure your plan, billing cadence, and optional add-ons. Payment processing is handled through Vertex CMS billing."
      panelTitle="Billing follows your plan."
      panelBody="Choose the plan and optional capabilities for your workspace. Charges follow your trial and plan configuration when billing is connected."
    >
      <PostTrialProgress current="billing" />

      <form className="mt-2 min-w-0 space-y-8" onSubmit={(e) => void submit(e)} noValidate>
        {formError ? (
          <AuthAlert>
            {formError}{" "}
            <span className="font-medium">You can retry without losing your current configuration.</span>
          </AuthAlert>
        ) : null}

        {needsPlanSelection ? (
          <BillingPlanPicker
            selectedPlanId={planId}
            billingPeriod={billingPeriod}
            onPlanChange={(id) => {
              setPlanId(id);
              setShowPlanPicker(false);
              setPlanError(null);
            }}
            onPeriodChange={handlePeriodChange}
            disabled={processing}
            error={planError ?? undefined}
          />
        ) : plan ? (
          <BillingSelectedPlanBanner
            plan={plan}
            billingPeriod={billingPeriod}
            onPeriodChange={handlePeriodChange}
            onChangePlan={() => setShowPlanPicker(true)}
            disabled={processing}
          />
        ) : null}

        <div className="grid min-w-0 grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] xl:items-start">
          <div className="min-w-0">
            <BillingAddOnsPicker
              addOns={addOns}
              selectedIds={selectedAddons}
              planId={planId}
              planName={plan?.name}
              disabled={processing || needsPlanSelection}
              onToggle={toggleAddon}
            />
          </div>
          <div className="min-w-0 xl:sticky xl:top-6">
            {plan ? (
              <PlanCheckoutSummary
                plan={plan}
                billingPeriod={billingPeriod}
                selectedAddons={selectedAddonObjects}
                trialEndsAt={trialEndsAt}
                title="Billing summary"
              />
            ) : (
              <aside className="rounded-xl border border-dashed border-brand-line bg-[#FAFBFD] p-5 text-[13px] text-brand-muted">
                Select a plan to review your billing configuration.
              </aside>
            )}
          </div>
        </div>

        {plan ? (
          <div className="xl:hidden">
            <PlanCheckoutSummary
              plan={plan}
              billingPeriod={billingPeriod}
              selectedAddons={selectedAddonObjects}
              trialEndsAt={trialEndsAt}
              variant="final"
              title="Billing summary"
            />
          </div>
        ) : null}

        <div className="flex flex-col gap-3 border-t border-brand-line pt-6 sm:flex-row sm:flex-wrap sm:items-center">
          {isEnterpriseQuote && plan ? (
            <Link
              href={planQuoteHref(plan.id, { period: billingPeriod })}
              className="inline-flex w-full items-center justify-center rounded-sm bg-brand-orange px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-[#e85f00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange sm:w-auto sm:min-w-[15rem]"
            >
              Request a Quote
            </Link>
          ) : (
            <AuthButton
              type="submit"
              loading={processing}
              loadingLabel="Completing billing setup…"
              labelStyle="normal"
              className="sm:min-w-[15rem]"
              disabled={!planId}
            >
              {processing ? "Completing billing setup…" : "Complete Billing Setup"}
            </AuthButton>
          )}
          <Link
            href={AUTH_ROUTES.trialStarted}
            className="inline-flex w-full items-center justify-center rounded-sm border border-brand-line bg-white px-6 py-3.5 text-[15px] font-semibold text-brand-navy hover:bg-brand-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange sm:w-auto sm:min-w-[6rem]"
          >
            Back
          </Link>
        </div>
      </form>
    </AuthShell>
  );
}
