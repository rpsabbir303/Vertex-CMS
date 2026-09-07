"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { AuthAlert } from "@/components/auth/AuthAlert";
import { AuthButton } from "@/components/auth/AuthButton";
import { AuthShell } from "@/components/auth/AuthShell";
import { FormField, authInputClass } from "@/components/auth/FormField";
import { PasswordField } from "@/components/auth/PasswordField";
import { CaptchaGate } from "@/components/conversion/CaptchaGate";
import { PlanSelector } from "@/components/conversion/PlanSelector";
import { AuthClient } from "@/lib/auth/client";
import type { CaptchaGateValue } from "@/lib/auth/captcha";
import { AUTH_ROUTES } from "@/lib/auth/routes";
import { isValidEmail, validatePassword, validateRequired } from "@/lib/auth/validation";
import { getActivePlans } from "@/lib/marketing/pricing";

export function SignUpForm() {
  const router = useRouter();
  const params = useSearchParams();
  const planId = params.get("plan") ?? undefined;
  const plan = useMemo(() => (planId ? getActivePlans().find((p) => p.id === planId) : undefined), [planId]);

  const [companyName, setCompanyName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState<CaptchaGateValue>({ status: "challenge" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function validateClient(): Record<string, string> {
    const next: Record<string, string> = {};
    const companyErr = validateRequired(companyName, "Company name");
    const nameErr = validateRequired(name, "Name");
    if (companyErr) next.companyName = companyErr;
    if (nameErr) next.name = nameErr;
    if (!isValidEmail(email)) next.email = "Please enter a valid work email.";
    const pwErr = validatePassword(password);
    if (pwErr) next.password = pwErr;
    return next;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (loading) return;

    setError(null);
    setFieldErrors({});

    // 1) Client-side validation
    const clientErrors = validateClient();
    if (Object.keys(clientErrors).length) {
      setFieldErrors(clientErrors);
      setError("Please correct the highlighted fields.");
      return;
    }

    // 2) CAPTCHA / bot protection
    if (captcha.status !== "verified") {
      setCaptcha({ status: "failed" });
      setFieldErrors({ captcha: "Complete the bot check to continue." });
      setError("Please complete bot protection to continue.");
      return;
    }

    // 3) Server validation + create account
    setLoading(true);
    const result = await AuthClient.signUp({
      companyName,
      name,
      email,
      password,
      planId,
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

        <FormField id="companyName" label="Company Name" error={fieldErrors.companyName}>
          <input
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className={authInputClass(fieldErrors.companyName)}
            autoComplete="organization"
            disabled={loading}
            aria-invalid={!!fieldErrors.companyName}
          />
        </FormField>

        <FormField id="name" label="Name" error={fieldErrors.name}>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={authInputClass(fieldErrors.name)}
            autoComplete="name"
            disabled={loading}
            aria-invalid={!!fieldErrors.name}
          />
        </FormField>

        <FormField id="email" label="Work Email" error={fieldErrors.email}>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={authInputClass(fieldErrors.email)}
            autoComplete="email"
            disabled={loading}
            aria-invalid={!!fieldErrors.email}
          />
        </FormField>

        <PasswordField
          id="password"
          label="Password"
          value={password}
          onChange={setPassword}
          error={fieldErrors.password}
          autoComplete="new-password"
          hint="At least 8 characters, including a letter and a number."
        />

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
