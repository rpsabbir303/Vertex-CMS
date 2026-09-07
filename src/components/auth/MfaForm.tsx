"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { AuthAlert } from "@/components/auth/AuthAlert";
import { AuthButton } from "@/components/auth/AuthButton";
import { AuthShell } from "@/components/auth/AuthShell";
import { OTPInput } from "@/components/auth/OTPInput";
import { AuthClient } from "@/lib/auth/client";
import { AUTH_ROUTES } from "@/lib/auth/routes";

export function MfaForm() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setFieldErrors({});
    const result = await AuthClient.verifyMfa(code);
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
      title="Two-factor authentication"
      subtitle="Enter the TOTP code from your authenticator app to continue."
      panelTitle="Protect every workspace."
      panelBody="Vertex CMS supports TOTP-based 2FA for account security as required by the platform BRD."
    >
      <form onSubmit={onSubmit} className="space-y-5" noValidate>
        {error && <AuthAlert>{error}</AuthAlert>}
        <OTPInput value={code} onChange={setCode} error={fieldErrors.code} />
        <p className="text-[12px] text-brand-muted">Preview: use code 123456</p>
        <AuthButton loading={loading}>Verify</AuthButton>
      </form>
      <p className="mt-6 text-center text-[13px]">
        <Link href={AUTH_ROUTES.signIn} className="font-semibold text-brand-blue hover:underline">
          Back to sign in
        </Link>
      </p>
    </AuthShell>
  );
}
