"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { AuthAlert } from "@/components/auth/AuthAlert";
import { AuthButton } from "@/components/auth/AuthButton";
import { AuthShell } from "@/components/auth/AuthShell";
import { FormField, authInputClass } from "@/components/auth/FormField";
import { AuthClient } from "@/lib/auth/client";
import { AUTH_ROUTES } from "@/lib/auth/routes";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    setFieldErrors({});
    const result = await AuthClient.requestPasswordReset(email);
    setLoading(false);
    if (!result.ok) {
      setError(result.error);
      setFieldErrors(result.fieldErrors ?? {});
      return;
    }
    setSuccess(result.message ?? "If an account exists for that email, you will receive password reset instructions.");
  }

  return (
    <AuthShell
      title="Forgot your password?"
      subtitle="Enter your work email and we’ll send reset instructions if an account exists."
    >
      {success ? (
        <div className="space-y-5">
          <AuthAlert tone="success">{success}</AuthAlert>
          <p className="text-[13px] text-brand-muted">
            For UI preview, continue to the reset password screen.
          </p>
          <Link href={`${AUTH_ROUTES.resetPassword}?token=preview`} className="btn-primary w-full">
            Continue to reset password
          </Link>
          <p className="text-center text-[13px]">
            <Link href={AUTH_ROUTES.signIn} className="font-semibold text-brand-blue hover:underline">
              Back to sign in
            </Link>
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4" noValidate>
          {error && <AuthAlert>{error}</AuthAlert>}
          <FormField id="email" label="Work email" error={fieldErrors.email}>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={authInputClass(fieldErrors.email)}
              autoComplete="email"
            />
          </FormField>
          <AuthButton loading={loading}>Send reset link</AuthButton>
          <p className="text-center text-[13px]">
            <Link href={AUTH_ROUTES.signIn} className="font-semibold text-brand-blue hover:underline">
              Back to sign in
            </Link>
          </p>
        </form>
      )}
    </AuthShell>
  );
}
