"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { AuthAlert } from "@/components/auth/AuthAlert";
import { AuthButton } from "@/components/auth/AuthButton";
import { AuthShell } from "@/components/auth/AuthShell";
import { PasswordField } from "@/components/auth/PasswordField";
import { AuthClient } from "@/lib/auth/client";
import { AUTH_ROUTES } from "@/lib/auth/routes";

export function ResetPasswordForm() {
  const router = useRouter();
  const params = useSearchParams();
  const token = params.get("token") ?? undefined;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setFieldErrors({});
    setSuccess(false);
    const result = await AuthClient.resetPassword({ password, confirmPassword, token });
    setLoading(false);
    if (!result.ok) {
      setError(result.error);
      setFieldErrors(result.fieldErrors ?? {});
      return;
    }
    setSuccess(true);
  }

  if (success) {
    return (
      <AuthShell title="Password updated" subtitle="Your password has been updated.">
        <AuthAlert tone="success">Your password has been updated.</AuthAlert>
        <div className="mt-5">
          <AuthButton type="button" onClick={() => router.push(`${AUTH_ROUTES.signIn}?reset=1`)}>
            Back to Sign In
          </AuthButton>
        </div>
      </AuthShell>
    );
  }

  return (
    <AuthShell title="Choose a new password" subtitle="Enter and confirm your new password to regain access.">
      <form onSubmit={onSubmit} className="space-y-4" noValidate>
        {error && <AuthAlert>{error}</AuthAlert>}
        <PasswordField
          id="password"
          label="New password"
          value={password}
          onChange={setPassword}
          error={fieldErrors.password}
          autoComplete="new-password"
          hint="At least 8 characters, including a letter and a number."
        />
        <PasswordField
          id="confirmPassword"
          label="Confirm password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          error={fieldErrors.confirmPassword}
          autoComplete="new-password"
        />
        <AuthButton loading={loading}>Update password</AuthButton>
      </form>
      <p className="mt-6 text-center text-[13px]">
        <Link href={AUTH_ROUTES.signIn} className="font-semibold text-brand-blue hover:underline">
          Back to sign in
        </Link>
      </p>
    </AuthShell>
  );
}
