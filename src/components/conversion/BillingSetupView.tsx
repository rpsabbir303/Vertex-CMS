"use client";



import Link from "next/link";

import { useRouter } from "next/navigation";

import { useEffect, useMemo, useState } from "react";

import { AuthAlert } from "@/components/auth/AuthAlert";

import { AuthButton } from "@/components/auth/AuthButton";

import { AuthShell } from "@/components/auth/AuthShell";

import { FormField, authInputAria, authInputClass } from "@/components/auth/FormField";

import { PostTrialProgress } from "@/components/auth/PostTrialProgress";

import { BillingPlanPicker, BillingSelectedPlanBanner } from "@/components/conversion/BillingPlanPicker";

import { PlanCheckoutSummary } from "@/components/conversion/PlanCheckoutSummary";

import { AuthClient } from "@/lib/auth/client";

import { resolveAuthGate } from "@/lib/auth/guards";

import { AUTH_ROUTES } from "@/lib/auth/routes";

import { readAuthSession, updateCheckoutPlan } from "@/lib/auth/session";

import type { BillingPeriod } from "@/lib/auth/types";

import { getActivePlans, getPricingCatalog } from "@/lib/marketing/pricing";



type FieldKey = "cardNumber" | "expMonth" | "expYear" | "cvc" | "billingName" | "billingAddress";



type Phase = "loading" | "checkout" | "complete";



const inputMinHeight = "min-h-[46px]";



export function BillingSetupView() {

  const router = useRouter();

  const catalog = useMemo(() => getPricingCatalog(), []);

  const addOns = useMemo(() => catalog.addOns.filter((a) => a.active).sort((a, b) => a.sort - b.sort), [catalog]);



  const [phase, setPhase] = useState<Phase>("loading");

  const [processing, setProcessing] = useState(false);

  const [formError, setFormError] = useState<string | null>(null);

  const [planError, setPlanError] = useState<string | null>(null);

  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldKey, string>>>({});

  const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>({});



  const [planId, setPlanId] = useState<string | undefined>();

  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");

  const [trialEndsAt, setTrialEndsAt] = useState<string | null>(null);

  const [showPlanPicker, setShowPlanPicker] = useState(false);

  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);



  const [cardNumber, setCardNumber] = useState("");

  const [expMonth, setExpMonth] = useState("");

  const [expYear, setExpYear] = useState("");

  const [cvc, setCvc] = useState("");

  const [billingName, setBillingName] = useState("");

  const [billingAddress, setBillingAddress] = useState("");



  const plan = useMemo(() => (planId ? getActivePlans().find((p) => p.id === planId) : undefined), [planId]);

  const selectedAddonObjects = addOns.filter((a) => selectedAddons.includes(a.id));

  const needsPlanSelection = !planId || showPlanPicker;



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

    setBillingName(session.name);

    setPhase("checkout");

  }, [router]);



  function toggleAddon(id: string) {

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



    setProcessing(true);

    const result = await AuthClient.completeBillingSetup({

      cardNumber,

      expMonth,

      expYear,

      cvc,

      billingName,

      billingAddress,

      planId,

      addonIds: selectedAddons,

    });

    setProcessing(false);



    if (!result.ok) {

      setFormError(result.error);

      if (result.fieldErrors?.plan) {

        setPlanError(result.fieldErrors.plan);

        setShowPlanPicker(true);

      }

      if (result.fieldErrors) {

        setFieldErrors(result.fieldErrors as Partial<Record<FieldKey, string>>);

      }

      return;

    }

    setPhase("complete");

  }



  if (phase === "loading") {

    return (

      <div className="flex min-h-screen items-center justify-center bg-[#F7F9FC] text-sm text-brand-muted">

        Loading billing setup…

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

        panelBody="Payment details are collected to continue with your selected plan."

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

              <span className="text-brand-muted">Add-ons</span>

              <br />

              <strong className="text-brand-navy">

                {selectedAddonObjects.length ? `${selectedAddonObjects.length} selected` : "None selected"}

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



  const paymentDisabled = needsPlanSelection || !plan;



  return (

    <AuthShell

      layout="checkout"

      showPreviewNotice={false}

      eyebrow="Payment & billing"

      title="Set up your billing"

      subtitle="Add your billing details to continue with your selected Vertex CMS plan."

      panelTitle="Billing follows your plan."

      panelBody="Payment details are collected to continue with your selected plan. Charges follow your trial and plan configuration when billing is connected."

    >

      <PostTrialProgress current="billing" />



      <form className="mt-2 min-w-0 space-y-8" onSubmit={(e) => void submit(e)} noValidate>

        {formError ? <AuthAlert>{formError}</AuthAlert> : null}



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

            onChangePlan={() => setShowPlanPicker(true)}

          />

        ) : null}



        <div className="grid min-w-0 grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] xl:items-start">

          <div className="min-w-0 space-y-8">

            <fieldset

              className="min-w-0 space-y-4 rounded-xl border border-brand-line p-5 sm:p-6"

              disabled={paymentDisabled || processing}

            >

              <legend className="px-1 text-[14px] font-semibold text-brand-navy">Payment method</legend>

              {paymentDisabled ? (

                <p className="text-[13px] text-brand-muted">Select a plan above to enter payment details.</p>

              ) : null}



              <FormField

                id="cardNumber"

                label="Card number"

                required

                error={fieldErrors.cardNumber}

                touched={touched.cardNumber}

              >

                <input

                  id="cardNumber"

                  autoComplete="cc-number"

                  inputMode="numeric"

                  placeholder="1234 5678 9012 3456"

                  disabled={paymentDisabled}

                  className={`${authInputClass({ error: fieldErrors.cardNumber, touched: touched.cardNumber })} ${inputMinHeight}`}

                  value={cardNumber}

                  onChange={(e) => setCardNumber(e.target.value)}

                  onBlur={() => setTouched((t) => ({ ...t, cardNumber: true }))}

                  {...authInputAria({ id: "cardNumber", error: fieldErrors.cardNumber, touched: touched.cardNumber })}

                />

              </FormField>



              <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(7.5rem,9rem)]">

                <div className="grid min-w-0 grid-cols-2 gap-3">

                  <FormField id="expMonth" label="Exp. month" required error={fieldErrors.expMonth} touched={touched.expMonth}>

                    <input

                      id="expMonth"

                      placeholder="MM"

                      disabled={paymentDisabled}

                      autoComplete="cc-exp-month"

                      className={`${authInputClass({ error: fieldErrors.expMonth, touched: touched.expMonth })} ${inputMinHeight}`}

                      value={expMonth}

                      onChange={(e) => setExpMonth(e.target.value)}

                      onBlur={() => setTouched((t) => ({ ...t, expMonth: true }))}

                      {...authInputAria({ id: "expMonth", error: fieldErrors.expMonth, touched: touched.expMonth })}

                    />

                  </FormField>

                  <FormField id="expYear" label="Exp. year" required error={fieldErrors.expYear} touched={touched.expYear}>

                    <input

                      id="expYear"

                      placeholder="YY"

                      disabled={paymentDisabled}

                      autoComplete="cc-exp-year"

                      className={`${authInputClass({ error: fieldErrors.expYear, touched: touched.expYear })} ${inputMinHeight}`}

                      value={expYear}

                      onChange={(e) => setExpYear(e.target.value)}

                      onBlur={() => setTouched((t) => ({ ...t, expYear: true }))}

                      {...authInputAria({ id: "expYear", error: fieldErrors.expYear, touched: touched.expYear })}

                    />

                  </FormField>

                </div>

                <FormField id="cvc" label="CVC" required error={fieldErrors.cvc} touched={touched.cvc}>

                  <input

                    id="cvc"

                    placeholder="123"

                    disabled={paymentDisabled}

                    autoComplete="cc-csc"

                    inputMode="numeric"

                    className={`${authInputClass({ error: fieldErrors.cvc, touched: touched.cvc })} ${inputMinHeight}`}

                    value={cvc}

                    onChange={(e) => setCvc(e.target.value)}

                    onBlur={() => setTouched((t) => ({ ...t, cvc: true }))}

                    {...authInputAria({ id: "cvc", error: fieldErrors.cvc, touched: touched.cvc })}

                  />

                </FormField>

              </div>



              <FormField

                id="billingName"

                label="Billing name"

                required

                error={fieldErrors.billingName}

                touched={touched.billingName}

              >

                <input

                  id="billingName"

                  autoComplete="name"

                  disabled={paymentDisabled}

                  className={`${authInputClass({ error: fieldErrors.billingName, touched: touched.billingName })} ${inputMinHeight}`}

                  value={billingName}

                  onChange={(e) => setBillingName(e.target.value)}

                  onBlur={() => setTouched((t) => ({ ...t, billingName: true }))}

                  {...authInputAria({ id: "billingName", error: fieldErrors.billingName, touched: touched.billingName })}

                />

              </FormField>



              <FormField

                id="billingAddress"

                label="Billing address"

                required

                error={fieldErrors.billingAddress}

                touched={touched.billingAddress}

              >

                <input

                  id="billingAddress"

                  autoComplete="street-address"

                  disabled={paymentDisabled}

                  className={`${authInputClass({ error: fieldErrors.billingAddress, touched: touched.billingAddress })} ${inputMinHeight}`}

                  value={billingAddress}

                  onChange={(e) => setBillingAddress(e.target.value)}

                  onBlur={() => setTouched((t) => ({ ...t, billingAddress: true }))}

                  {...authInputAria({

                    id: "billingAddress",

                    error: fieldErrors.billingAddress,

                    touched: touched.billingAddress,

                  })}

                />

              </FormField>

            </fieldset>



            <section className="min-w-0" aria-labelledby="optional-addons-heading">

              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">Optional add-ons</p>

              <h3 id="optional-addons-heading" className="mt-2 text-[16px] font-semibold text-brand-navy">

                Add capabilities when you need them.

              </h3>

              <p className="mt-1 text-[14px] text-brand-muted">

                Choose optional capabilities for your Vertex CMS workspace. You can continue without selecting any add-ons.

              </p>



              <ul className="mt-4 space-y-3">

                {addOns.map((addon) => {

                  const isSelected = selectedAddons.includes(addon.id);

                  return (

                    <li key={addon.id}>

                      <div

                        className={`rounded-xl border px-4 py-4 sm:px-5 ${

                          isSelected ? "border-brand-orange/50 bg-brand-orange/5" : "border-brand-line bg-white"

                        }`}

                      >

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

                          <div className="min-w-0 flex-1">

                            <h4 className="text-[15px] font-semibold text-brand-navy">{addon.name}</h4>

                            <p className="mt-1 text-[14px] leading-relaxed text-brand-muted">{addon.description}</p>

                            <p className="mt-2 text-[13px] font-medium text-brand-navy/80">

                              {addon.priceLabel ?? "Pricing when synchronized from billing configuration"}

                            </p>

                          </div>

                          <button

                            type="button"

                            aria-pressed={isSelected}

                            disabled={processing}

                            onClick={() => toggleAddon(addon.id)}

                            className={`shrink-0 rounded-md border px-4 py-2.5 text-[13px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange disabled:opacity-60 ${

                              isSelected

                                ? "border-brand-orange bg-brand-orange text-white"

                                : "border-brand-line bg-white text-brand-navy hover:bg-brand-soft"

                            }`}

                          >

                            {isSelected ? "Selected" : "Select"}

                          </button>

                        </div>

                      </div>

                    </li>

                  );

                })}

              </ul>

            </section>

          </div>



          <div className="min-w-0 xl:sticky xl:top-6">

            {plan ? (

              <PlanCheckoutSummary

                plan={plan}

                billingPeriod={billingPeriod}

                selectedAddons={selectedAddonObjects}

                trialEndsAt={trialEndsAt}

              />

            ) : null}

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

              title="Order summary"

            />

          </div>

        ) : null}



        <div className="flex flex-col gap-3 border-t border-brand-line pt-6 sm:flex-row sm:flex-wrap sm:items-center">

          <AuthButton

            type="submit"

            loading={processing}

            loadingLabel="Completing setup…"

            labelStyle="normal"

            className="sm:min-w-[15rem]"

            disabled={!planId}

          >

            {processing ? "Completing setup…" : "Complete Billing Setup"}

          </AuthButton>

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


