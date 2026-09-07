"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AuthAlert } from "@/components/auth/AuthAlert";
import { AuthButton } from "@/components/auth/AuthButton";
import { AuthShell } from "@/components/auth/AuthShell";
import { AuthClient } from "@/lib/auth/client";
import { AUTH_ROUTES } from "@/lib/auth/routes";
import { readAuthSession } from "@/lib/auth/session";
import type { EmailVerificationUiStatus } from "@/lib/auth/types";

export function VerifyEmailForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<EmailVerificationUiStatus>("waiting");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => {
    const session = readAuthSession();
    if (!session) {
      router.replace(AUTH_ROUTES.signup);
      return;
    }
    if (session.emailVerified) {
      router.replace(AUTH_ROUTES.tenantSetup);
      return;
    }
    setEmail(session.email);

    const q = params.get("status");
    if (q === "expired") setStatus("expired");
    else if (q === "invalid") setStatus("invalid");
    else if (q === "failed") setStatus("failed");
    else if (q === "success") setStatus("success");
    else setStatus("waiting");
  }, [params, router]);

  async function verify() {
    setLoading(true);
    setError(null);
    const result = await AuthClient.verifyEmail();
    setLoading(false);
    if (!result.ok) {
      setStatus("failed");
      setError(result.error);
      return;
    }
    setStatus("success");
    router.push(result.data.redirectTo);
  }

  async function resend() {
    setResending(true);
    setError(null);
    setInfo(null);
    setStatus("resending");
    const result = await AuthClient.resendVerificationEmail();
    setResending(false);
    if (!result.ok) {
      setStatus("failed");
      setError(result.error);
      return;
    }
    setStatus("sent");
    setInfo(result.message ?? "Verification email resent.");
  }

  if (status === "expired") {
    return (
      <AuthShell
        title="Verification link expired"
        subtitle="That verification link has expired. Request a new email to continue."
      >
        <div className="space-y-5">
          {error && <AuthAlert>{error}</AuthAlert>}
          <AuthButton type="button" loading={resending} onClick={resend}>
            Resend verification email
          </AuthButton>
          <p className="text-center text-[13px]">
            <Link href={AUTH_ROUTES.signIn} className="font-semibold text-brand-blue hover:underline">
              Back to sign in
            </Link>
          </p>
        </div>
      </AuthShell>
    );
  }

  if (status === "invalid") {
    return (
      <AuthShell
        title="Invalid verification link"
        subtitle="This verification link is invalid or has already been used."
      >
        <div className="space-y-5">
          <AuthAlert>We couldn’t verify this link. Request a new verification email to continue.</AuthAlert>
          <AuthButton type="button" loading={resending} onClick={resend}>
            Resend verification email
          </AuthButton>
          <p className="text-center text-[13px]">
            <Link href={AUTH_ROUTES.signIn} className="font-semibold text-brand-blue hover:underline">
              Back to sign in
            </Link>
          </p>
        </div>
      </AuthShell>
    );
  }

  if (status === "failed") {
    return (
      <AuthShell
        title="Verification failed"
        subtitle="We couldn’t verify your email. Try again or request a new link."
      >
        <div className="space-y-5">
          <AuthAlert>{error ?? "Verification failed. Please try again."}</AuthAlert>
          <AuthButton type="button" loading={loading} onClick={verify}>
            Try again
          </AuthButton>
          <AuthButton type="button" variant="secondary" loading={resending} onClick={resend}>
            Resend email
          </AuthButton>
          <p className="text-center text-[13px]">
            <Link href={AUTH_ROUTES.signIn} className="font-semibold text-brand-blue hover:underline">
              Back to sign in
            </Link>
          </p>
        </div>
      </AuthShell>
    );
  }

  if (status === "success") {
    return (
      <AuthShell title="Email verified" subtitle="Continuing to workspace setup…">
        <AuthAlert tone="success">Verification successful. Preparing tenant provisioning…</AuthAlert>
      </AuthShell>
    );
  }

  return (
    <AuthShell
      title="Check your email"
      subtitle="We’ve sent a verification link to your email address. Confirm to create your tenant workspace."
    >
      <div className="space-y-5">
        {error && <AuthAlert>{error}</AuthAlert>}
        {info && <AuthAlert tone="success">{info}</AuthAlert>}
        <AuthAlert tone="info">
          {status === "sent" || status === "resending" ? "Verification email sent to" : "Waiting for verification at"}{" "}
          <strong>{email || "your email"}</strong>.
          {AuthClient.mode === "preview" ? " In this UI preview, confirm below to continue." : null}
        </AuthAlert>
        <AuthButton type="button" loading={loading} onClick={verify}>
          I’ve verified my email
        </AuthButton>
        <AuthButton type="button" variant="secondary" loading={resending} onClick={resend}>
          Resend email
        </AuthButton>
        <p className="text-center text-[13px]">
          <Link href={AUTH_ROUTES.signIn} className="font-semibold text-brand-blue hover:underline">
            Back to sign in
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
