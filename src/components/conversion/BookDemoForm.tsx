"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { AuthAlert } from "@/components/auth/AuthAlert";
import { AuthButton } from "@/components/auth/AuthButton";
import { FormField, authInputClass } from "@/components/auth/FormField";
import { CheckboxField } from "@/components/conversion/CheckboxField";
import { ConversionShell } from "@/components/conversion/ConversionShell";
import { TextAreaField } from "@/components/conversion/TextAreaField";
import { VertexLogo } from "@/components/Icons";
import { ConversionClient } from "@/lib/conversion/client";
import {
  DEMO_COMPANY_SIZES,
  DEMO_INTERESTS,
  DEMO_PROJECT_TYPES,
  DEMO_ROLES,
} from "@/lib/conversion/types";
import { ROUTES } from "@/lib/marketing/navigation";

export function BookDemoForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [projectType, setProjectType] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  function toggleInterest(id: string, checked: boolean) {
    setInterests((prev) => (checked ? [...prev, id] : prev.filter((x) => x !== id)));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError(null);
    setFieldErrors({});
    const result = await ConversionClient.submitDemo({
      name,
      company,
      email,
      role,
      companySize,
      projectType,
      interests,
      phone: phone || undefined,
      notes: notes || undefined,
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
      panelEyebrow="Book a demo"
      panelHeadlineLead="See how VertexBuild"
      panelHeadlineAccent="fits your business."
      panelBody="See how VertexBuild brings projects, people, finances, and operations together in one connected workspace."
      benefits={["Explore the platform", "Find the right capabilities for your team", "Get answers from our team"]}
    >
      {success ? (
        <div className="rounded-2xl border border-brand-line bg-white p-6 shadow-soft sm:p-8">
          <div className="mb-6 hidden lg:block">
            <VertexLogo />
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
            Demo request received
          </p>
          <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-brand-navy sm:text-[1.75rem]">
            You’re on your way to a better-connected workflow.
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-brand-muted">
            Thanks for your interest in VertexBuild. Our team will review your request and follow up with the next
            steps.
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
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">Book a demo</p>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-brand-navy sm:text-[1.75rem]">
            Let&apos;s find the right fit for your team.
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-brand-muted">
            Tell us a little about your business and what you want to accomplish with VertexBuild.
          </p>

          <form onSubmit={onSubmit} className="mt-7 space-y-4" noValidate>
            {error && <AuthAlert>{error}</AuthAlert>}

            <FormField id="demo-name" label="Full name" error={fieldErrors.name}>
              <input
                id="demo-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={authInputClass(fieldErrors.name)}
                placeholder="Enter your full name"
                autoComplete="name"
                disabled={loading}
              />
            </FormField>

            <FormField id="demo-company" label="Company" error={fieldErrors.company}>
              <input
                id="demo-company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className={authInputClass(fieldErrors.company)}
                placeholder="Enter your company name"
                autoComplete="organization"
                disabled={loading}
              />
            </FormField>

            <FormField id="demo-email" label="Work email" error={fieldErrors.email}>
              <input
                id="demo-email"
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
              <FormField id="demo-role" label="Role" error={fieldErrors.role}>
                <select
                  id="demo-role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className={authInputClass(fieldErrors.role)}
                  disabled={loading}
                >
                  <option value="">Select your role</option>
                  {DEMO_ROLES.map((r) => (
                    <option key={r.value} value={r.value}>
                      {r.label}
                    </option>
                  ))}
                </select>
              </FormField>
              <FormField id="demo-size" label="Company / project size" error={fieldErrors.companySize}>
                <select
                  id="demo-size"
                  value={companySize}
                  onChange={(e) => setCompanySize(e.target.value)}
                  className={authInputClass(fieldErrors.companySize)}
                  disabled={loading}
                >
                  <option value="">Select company size</option>
                  {DEMO_COMPANY_SIZES.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </FormField>
            </div>

            <FormField id="demo-project-type" label="Project type" error={fieldErrors.projectType}>
              <select
                id="demo-project-type"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className={authInputClass(fieldErrors.projectType)}
                disabled={loading}
              >
                <option value="">Select project type</option>
                {DEMO_PROJECT_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </FormField>

            <fieldset>
              <legend className="mb-2 text-[13px] font-semibold text-brand-navy">Areas of interest</legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {DEMO_INTERESTS.map((item) => (
                  <CheckboxField
                    key={item.value}
                    id={`interest-${item.value}`}
                    label={item.label}
                    checked={interests.includes(item.value)}
                    onChange={(checked) => toggleInterest(item.value, checked)}
                    disabled={loading}
                  />
                ))}
              </div>
            </fieldset>

            <FormField id="demo-phone" label="Phone (optional)">
              <input
                id="demo-phone"
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
              id="demo-notes"
              label="Anything you'd like us to know?"
              value={notes}
              onChange={setNotes}
              optional
              rows={3}
              disabled={loading}
              placeholder="Tell us what you'd like to see in the demo..."
            />

            <AuthButton loading={loading}>Book a Demo</AuthButton>
            <p className="text-center text-[12px] leading-relaxed text-brand-muted">
              By submitting this form, you agree to be contacted about VertexBuild.
            </p>
          </form>
        </div>
      )}
    </ConversionShell>
  );
}
