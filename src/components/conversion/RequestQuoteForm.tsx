"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AuthAlert } from "@/components/auth/AuthAlert";
import { AuthButton } from "@/components/auth/AuthButton";
import { FormField, authInputClass } from "@/components/auth/FormField";
import { CheckboxField } from "@/components/conversion/CheckboxField";
import { ConversionShell } from "@/components/conversion/ConversionShell";
import { TextAreaField } from "@/components/conversion/TextAreaField";
import { VertexLogo } from "@/components/Icons";
import { ConversionClient } from "@/lib/conversion/client";
import {
  QUOTE_MODULES,
  QUOTE_ORG_SIZES,
  QUOTE_PROJECT_VOLUME,
  QUOTE_ROLES,
  QUOTE_SSO_OPTIONS,
  QUOTE_TIMING,
  QUOTE_USER_BANDS,
} from "@/lib/conversion/types";
import { getActivePlans, getPricingCatalog } from "@/lib/marketing/pricing";
import { ROUTES } from "@/lib/marketing/navigation";

export function RequestQuoteForm() {
  const searchParams = useSearchParams();
  const planId = (searchParams.get("plan") || "").toLowerCase();
  const billingPeriod = searchParams.get("period");
  const quoteIntent = searchParams.get("intent");

  const planContext = useMemo(() => {
    if (!planId) return null;
    const plan = getActivePlans(getPricingCatalog()).find((p) => p.id === planId);
    if (!plan) return null;
    return {
      id: plan.id,
      name: plan.name,
      isCustomPricing: plan.monthlyPrice == null && plan.yearlyPrice == null,
      billingPeriod: billingPeriod === "yearly" || billingPeriod === "monthly" ? billingPeriod : null,
      isUpgradeIntent: quoteIntent === "upgrade",
    };
  }, [planId, billingPeriod, quoteIntent]);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [organizationSize, setOrganizationSize] = useState("");
  const [estimatedUsers, setEstimatedUsers] = useState("");
  const [projectVolume, setProjectVolume] = useState("");
  const [modules, setModules] = useState<string[]>([]);
  const [ssoNeeds, setSsoNeeds] = useState("");
  const [integrations, setIntegrations] = useState("");
  const [implementationTiming, setImplementationTiming] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setComments] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  function toggleModule(id: string, checked: boolean) {
    setModules((prev) => (checked ? [...prev, id] : prev.filter((x) => x !== id)));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError(null);
    setFieldErrors({});
    const result = await ConversionClient.submitQuote({
      name,
      email,
      company,
      role,
      organizationSize,
      estimatedUsers,
      projectVolume,
      modules,
      ssoNeeds,
      integrations: integrations || undefined,
      implementationTiming,
      phone: phone || undefined,
      comments: comments || undefined,
      plan: planContext?.id || planId || undefined,
    });
    setLoading(false);
    if (!result.ok) {
      setError(result.error);
      setFieldErrors(result.fieldErrors ?? {});
      return;
    }
    setSuccess(true);
  }

  return (
    <ConversionShell
      panelEyebrow="Request a quote"
      panelHeadlineLead="Built for the way"
      panelHeadlineAccent="your business operates."
      panelBody="Tell us about your organization, users, projects, and requirements. We'll help shape the right VertexBuild solution for your team."
      benefits={[
        "Enterprise-ready capabilities",
        "Tailored implementation planning",
        "Support for your team's requirements",
      ]}
    >
      {success ? (
        <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-soft sm:p-8">
          <div className="mb-6 hidden lg:block">
            <VertexLogo />
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Quote request received
          </p>
          <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-brand-navy sm:text-[1.75rem]">
            Thanks. We&apos;ll take it from here.
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-brand-muted">
            Your request has been submitted. Our team will review your requirements and follow up with the next steps.
          </p>
          <AuthAlert tone="success">Request submitted successfully.</AuthAlert>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href={ROUTES.home} className="btn-primary text-center">
              Back to Website
            </Link>
            <Link href={ROUTES.pricing} className="btn-secondary text-center">
              Return to Pricing
            </Link>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-brand-line bg-white p-6 shadow-soft sm:p-8">
          <div className="mb-6 hidden lg:block">
            <div className="flex items-center justify-between gap-3">
              <VertexLogo />
              <Link href={ROUTES.home} className="text-[12px] font-semibold text-brand-muted hover:text-brand-navy">
                ← Back to website
              </Link>
            </div>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">Request a quote</p>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-brand-navy sm:text-[1.75rem]">
            Let&apos;s build the right solution for your team.
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-brand-muted">
            Share a few details about your organization and requirements so our team can prepare the right next step.
          </p>

          {planContext ? (
            <div className="mt-5 rounded-lg border border-brand-line bg-[#FAFBFD] px-4 py-3">
              <p className="text-[13px] font-semibold text-brand-navy">{planContext.name} Plan</p>
              <p className="mt-0.5 text-[12px] text-brand-muted">
                {planContext.isUpgradeIntent ? "Upgrade quote request" : planContext.isCustomPricing ? "Custom pricing" : "Quote request"}
                {planContext.billingPeriod
                  ? ` · ${planContext.billingPeriod === "yearly" ? "Yearly billing" : "Monthly billing"}`
                  : ""}
              </p>
            </div>
          ) : null}

          <form onSubmit={onSubmit} className="mt-7 space-y-4" noValidate>
            {error && <AuthAlert>{error}</AuthAlert>}

            <FormField id="quote-name" label="Full name" error={fieldErrors.name}>
              <input
                id="quote-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={authInputClass(fieldErrors.name)}
                placeholder="Enter your full name"
                autoComplete="name"
                disabled={loading}
              />
            </FormField>

            <FormField id="quote-company" label="Company / organization" error={fieldErrors.company}>
              <input
                id="quote-company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className={authInputClass(fieldErrors.company)}
                placeholder="Enter your company name"
                autoComplete="organization"
                disabled={loading}
              />
            </FormField>

            <FormField id="quote-email" label="Work email" error={fieldErrors.email}>
              <input
                id="quote-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={authInputClass(fieldErrors.email)}
                placeholder="Enter your work email"
                autoComplete="email"
                disabled={loading}
              />
            </FormField>

            <div className="grid gap-4 sm:grid-cols-2">
              <FormField id="quote-role" label="Role" error={fieldErrors.role}>
                <select
                  id="quote-role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className={authInputClass(fieldErrors.role)}
                  disabled={loading}
                >
                  <option value="">Select your role</option>
                  {QUOTE_ROLES.map((r) => (
                    <option key={r.value} value={r.value}>
                      {r.label}
                    </option>
                  ))}
                </select>
              </FormField>
              <FormField id="quote-org-size" label="Organization size" error={fieldErrors.organizationSize}>
                <select
                  id="quote-org-size"
                  value={organizationSize}
                  onChange={(e) => setOrganizationSize(e.target.value)}
                  className={authInputClass(fieldErrors.organizationSize)}
                  disabled={loading}
                >
                  <option value="">Select company size</option>
                  {QUOTE_ORG_SIZES.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </FormField>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <FormField id="quote-users" label="Estimated user count" error={fieldErrors.estimatedUsers}>
                <select
                  id="quote-users"
                  value={estimatedUsers}
                  onChange={(e) => setEstimatedUsers(e.target.value)}
                  className={authInputClass(fieldErrors.estimatedUsers)}
                  disabled={loading}
                >
                  <option value="">Select estimated users</option>
                  {QUOTE_USER_BANDS.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </FormField>
              <FormField id="quote-volume" label="Project volume" error={fieldErrors.projectVolume}>
                <select
                  id="quote-volume"
                  value={projectVolume}
                  onChange={(e) => setProjectVolume(e.target.value)}
                  className={authInputClass(fieldErrors.projectVolume)}
                  disabled={loading}
                >
                  <option value="">Select project volume</option>
                  {QUOTE_PROJECT_VOLUME.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </FormField>
            </div>

            <fieldset>
              <legend className="mb-2 text-[13px] font-semibold text-brand-navy">Required modules</legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {QUOTE_MODULES.map((m) => (
                  <CheckboxField
                    key={m.value}
                    id={`module-${m.value}`}
                    label={m.label}
                    checked={modules.includes(m.value)}
                    onChange={(checked) => toggleModule(m.value, checked)}
                    disabled={loading}
                  />
                ))}
              </div>
            </fieldset>

            <FormField id="quote-sso" label="Enterprise identity / SSO" error={fieldErrors.ssoNeeds}>
              <select
                id="quote-sso"
                value={ssoNeeds}
                onChange={(e) => setSsoNeeds(e.target.value)}
                className={authInputClass(fieldErrors.ssoNeeds)}
                disabled={loading}
              >
                <option value="">Select requirement</option>
                {QUOTE_SSO_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </FormField>

            <TextAreaField
              id="quote-integrations"
              label="Integrations"
              value={integrations}
              onChange={setIntegrations}
              optional
              rows={3}
              disabled={loading}
              placeholder="Tell us about your accounting, ERP, identity, or other systems..."
            />

            <FormField id="quote-timing" label="Implementation timing" error={fieldErrors.implementationTiming}>
              <select
                id="quote-timing"
                value={implementationTiming}
                onChange={(e) => setImplementationTiming(e.target.value)}
                className={authInputClass(fieldErrors.implementationTiming)}
                disabled={loading}
              >
                <option value="">When are you looking to get started?</option>
                {QUOTE_TIMING.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </FormField>

            <FormField id="quote-phone" label="Phone (optional)">
              <input
                id="quote-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={authInputClass()}
                placeholder="Enter your phone number"
                autoComplete="tel"
                disabled={loading}
              />
            </FormField>

            <TextAreaField
              id="quote-comments"
              label="Additional requirements or comments"
              value={comments}
              onChange={setComments}
              optional
              rows={3}
              disabled={loading}
              placeholder="Tell us anything else about your requirements..."
            />

            <AuthButton loading={loading}>Request a Quote</AuthButton>
          </form>
        </div>
      )}
    </ConversionShell>
  );
}
