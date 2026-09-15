"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { AuthAlert } from "@/components/auth/AuthAlert";
import { AuthButton } from "@/components/auth/AuthButton";
import { AuthShell } from "@/components/auth/AuthShell";
import { FormField, authInputAria, authInputClass } from "@/components/auth/FormField";
import { PasswordField } from "@/components/auth/PasswordField";
import { CaptchaGate } from "@/components/conversion/CaptchaGate";
import { PlanSelector } from "@/components/conversion/PlanSelector";
import { AuthClient } from "@/lib/auth/client";
import type { CaptchaGateValue } from "@/lib/auth/captcha";
import { AUTH_ROUTES } from "@/lib/auth/routes";
import { isEmailRegistered } from "@/lib/auth/session";
import { DUPLICATE_EMAIL_MESSAGE, validateSignUpFields } from "@/lib/auth/validation";
import { ROUTES } from "@/lib/marketing/navigation";
import { getActivePlans } from "@/lib/marketing/pricing";

type FieldId = "companyName" | "name" | "email" | "password" | "terms" | "captcha";

export function SignUpForm() {
  const router = useRouter();
  const params = useSearchParams();
  const planId = params.get("plan") ?? undefined;
  const plan = useMemo(() => (planId ? getActivePlans().find((p) => p.id === planId) : undefined), [planId]);

  const [companyName, setCompanyName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [captcha, setCaptcha] = useState<CaptchaGateValue>({ status: "challenge" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Partial<Record<FieldId, boolean>>>({});

  function buildPayload() {
    return {
      companyName,
      name,
      email,
      password,
      termsAccepted,
      botCheckAcknowledged: captcha.status === "verified",
    };
  }

  function validateField(id: FieldId): string | undefined {
    const errors = validateSignUpFields(buildPayload(), {
      checkDuplicate: (addr) => isEmailRegistered(addr),
      fields: [id],
      includeAcknowledgements: id === "terms" || id === "captcha",
    });
    return errors[id];
  }

  function touchField(id: FieldId) {
    setTouched((prev) => ({ ...prev, [id]: true }));
    const err = validateField(id);
    setFieldErrors((prev) => {
      const next = { ...prev };
      if (err) next[id] = err;
      else delete next[id];
      return next;
    });
  }

  function fieldValid(id: FieldId): boolean {
    if (!touched[id]) return false;
    return !fieldErrors[id] && !validateField(id);
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (loading) return;

    setError(null);
    setTouched({
      companyName: true,
      name: true,
      email: true,
      password: true,
      terms: true,
      captcha: true,
    });

    const clientErrors = validateSignUpFields(buildPayload(), {
      checkDuplicate: (addr) => isEmailRegistered(addr),
    });

    if (captcha.status !== "verified") {
      clientErrors.captcha = "Complete the bot check to continue.";
      setCaptcha({ status: "failed" });
    }

    if (Object.keys(clientErrors).length) {
      setFieldErrors(clientErrors);
      setError("Please correct the highlighted fields.");
      return;
    }

    setFieldErrors({});
    setLoading(true);
    const result = await AuthClient.signUp({
      companyName,
      name,
      email,
      password,
      planId,
      termsAccepted,
      botCheckAcknowledged: captcha.status === "verified",
    });
    setLoading(false);

    if (!result.ok) {
      setError(result.error);
      setFieldErrors(result.fieldErrors ?? {});
      if (result.fieldErrors?.captcha) setCaptcha({ status: "failed" });
      return;
    }

    router.push(result.data.redirectTo);
  }

  function inputProps(id: FieldId, hint?: string) {
    const err = fieldErrors[id];
    const options = { error: err, valid: fieldValid(id), touched: touched[id], id, hint };
    return {
      className: authInputClass(options),
      ...authInputAria(options),
      "aria-invalid": err ? true : touched[id] ? false : undefined,
    };
  }

  const duplicateEmail = fieldErrors.email === DUPLICATE_EMAIL_MESSAGE;

  return (
    <AuthShell
      title="Create your Vertex CMS account"
      subtitle="Start your free trial — verify email, provision your workspace, then enter Vertex CMS."
      panelTitle="From pricing to product — connected."
      panelBody="Selected plans carry from Pricing into signup. After verification we create your tenant and activate trial per plan configuration."
    >
      <PlanSelector selectedPlanId={plan?.id ?? planId} />

      <form onSubmit={onSubmit} className="space-y-4" noValidate>
        {error && <AuthAlert>{error}</AuthAlert>}

        <FormField
          id="companyName"
          label="Company Name"
          error={fieldErrors.companyName}
          valid={fieldValid("companyName")}
          touched={touched.companyName}
        >
          <input
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            onBlur={() => touchField("companyName")}
            autoComplete="organization"
            disabled={loading}
            {...inputProps("companyName")}
          />
        </FormField>

        <FormField id="name" label="Name" error={fieldErrors.name} valid={fieldValid("name")} touched={touched.name}>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => touchField("name")}
            autoComplete="name"
            disabled={loading}
            {...inputProps("name")}
          />
        </FormField>

        <FormField id="email" label="Work Email" error={fieldErrors.email} valid={fieldValid("email")} touched={touched.email}>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => touchField("email")}
            autoComplete="email"
            disabled={loading}
            {...inputProps("email")}
          />
          {duplicateEmail && (
            <p className="text-[12px] text-brand-muted">
              Already have an account?{" "}
              <Link href={AUTH_ROUTES.signIn} className="font-semibold text-brand-orange hover:underline">
                Sign in
              </Link>
            </p>
          )}
        </FormField>

        <PasswordField
          id="password"
          label="Password"
          value={password}
          onChange={setPassword}
          onBlur={() => touchField("password")}
          error={fieldErrors.password}
          autoComplete="new-password"
          hint="At least 8 characters, including a letter and a number."
          disabled={loading}
          valid={fieldValid("password")}
          touched={touched.password}
        />

        <div className="space-y-1.5">
          <label
            htmlFor="terms"
            className={`flex cursor-pointer items-start gap-2.5 rounded-lg border px-3.5 py-3 text-[13px] transition ${
              fieldErrors.terms
                ? "border-red-300 bg-red-50"
                : termsAccepted
                  ? "border-emerald-200 bg-emerald-50/50"
                  : "border-brand-line bg-[#FAFBFD]"
            }`}
          >
            <input
              id="terms"
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => {
                setTermsAccepted(e.target.checked);
                if (touched.terms) touchField("terms");
              }}
              onBlur={() => touchField("terms")}
              disabled={loading}
              className="mt-0.5 h-4 w-4 rounded border-brand-line text-brand-orange focus:ring-brand-orange"
              aria-invalid={!!fieldErrors.terms}
              aria-describedby={fieldErrors.terms ? "terms-error" : undefined}
            />
            <span className="text-brand-navy">
              I agree to the{" "}
              <Link href={ROUTES.legalTerms} className="font-semibold text-brand-blue hover:underline" target="_blank">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href={ROUTES.legalPrivacy} className="font-semibold text-brand-blue hover:underline" target="_blank">
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          {fieldErrors.terms && (
            <p id="terms-error" className="text-[12px] font-medium text-red-600" role="alert">
              {fieldErrors.terms}
            </p>
          )}
        </div>

        <CaptchaGate value={captcha} onChange={setCaptcha} error={fieldErrors.captcha} disabled={loading} />

        <AuthButton loading={loading} disabled={loading}>
          Start Free Trial
        </AuthButton>
      </form>

      <p className="mt-6 text-center text-[13px] text-brand-muted">
        Already have an account?{" "}
        <Link href={AUTH_ROUTES.signIn} className="font-semibold text-brand-orange hover:underline">
          Sign in
        </Link>
      </p>
    </AuthShell>
  );
}
