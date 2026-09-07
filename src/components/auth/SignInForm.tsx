"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { AuthAlert } from "@/components/auth/AuthAlert";
import { AuthButton } from "@/components/auth/AuthButton";
import { AuthShell } from "@/components/auth/AuthShell";
import { FormField, authInputClass } from "@/components/auth/FormField";
import { PasswordField } from "@/components/auth/PasswordField";
import { AuthClient } from "@/lib/auth/client";
import { AUTH_ROUTES } from "@/lib/auth/routes";
import { SSO_BACKEND_GAP, SSO_ENABLED, SSO_PROVIDERS } from "@/lib/auth/sso";

export function SignInForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const banner =
    params.get("reset") === "1"
      ? "Password updated. Sign in with your new password."
      : params.get("activated") === "1"
        ? "Account activated. Sign in to continue."
        : params.get("session") === "expired"
          ? "Your session has expired. Please sign in again."
          : null;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setFieldErrors({});
    const result = await AuthClient.signIn({ email, password, remember });
    setLoading(false);
    if (!result.ok) {
      setError(result.error);
      setFieldErrors(result.fieldErrors ?? {});
      return;
    }
    router.push(result.data.redirectTo);
  }

  return (
    <AuthShell
      title="Sign in to Vertex CMS"
      subtitle="Access your construction operating system."
      panelTitle="One source of truth for every project."
      panelBody="Sign in to manage projects, financials, field operations, and intelligence in one connected platform."
    >
      {banner && (
        <div className="mb-5">
          <AuthAlert tone="success">{banner}</AuthAlert>
        </div>
      )}
      <form onSubmit={onSubmit} className="space-y-4" noValidate>
        {error && <AuthAlert>{error}</AuthAlert>}
        <FormField id="email" label="Work email" error={fieldErrors.email}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={authInputClass(fieldErrors.email)}
            aria-invalid={!!fieldErrors.email}
            disabled={loading}
          />
        </FormField>
        <PasswordField
          id="password"
          label="Password"
          value={password}
          onChange={setPassword}
          error={fieldErrors.password}
          hint="Preview: MFA with mfa12345 · invalid credentials with wrongpass"
        />
        <div className="flex items-center justify-between gap-3">
          <label className="inline-flex items-center gap-2 text-[13px] text-brand-muted">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 rounded border-brand-line text-brand-orange focus:ring-brand-orange"
            />
            Remember me
          </label>
          <Link href={AUTH_ROUTES.forgotPassword} className="text-[13px] font-semibold text-brand-blue hover:underline">
            Forgot password?
          </Link>
        </div>
        <AuthButton loading={loading}>Sign In</AuthButton>
      </form>

      {SSO_ENABLED && SSO_PROVIDERS.length > 0 ? (
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3 text-[12px] text-brand-muted">
            <span className="h-px flex-1 bg-brand-line" />
            Or continue with SSO
            <span className="h-px flex-1 bg-brand-line" />
          </div>
          {SSO_PROVIDERS.map((provider) => (
            <button
              key={provider.id}
              type="button"
              className="inline-flex w-full items-center justify-center rounded-sm border border-brand-line bg-white px-5 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-brand-navy hover:bg-brand-soft"
            >
              {provider.label}
            </button>
          ))}
        </div>
      ) : (
        <p className="mt-5 text-[11px] leading-relaxed text-brand-muted" title={SSO_BACKEND_GAP}>
          SSO entry appears here when enabled for your organization.
        </p>
      )}

      <p className="mt-6 text-center text-[13px] text-brand-muted">
        New to Vertex CMS?{" "}
        <Link href={AUTH_ROUTES.signup} className="font-semibold text-brand-orange hover:underline">
          Create an account
        </Link>
      </p>
    </AuthShell>
  );
}
