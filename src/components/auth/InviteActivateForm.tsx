"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { AuthAlert } from "@/components/auth/AuthAlert";
import { AuthButton } from "@/components/auth/AuthButton";
import { AuthShell } from "@/components/auth/AuthShell";
import { FormField, authInputClass } from "@/components/auth/FormField";
import { PasswordField } from "@/components/auth/PasswordField";
import { AuthClient } from "@/lib/auth/client";
import { AUTH_ROUTES } from "@/lib/auth/routes";
import { readAuthSession } from "@/lib/auth/session";
import { INVITE_ROLE_LABELS, type InviteUiStatus } from "@/lib/auth/types";

export function InviteActivateForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [companyName, setCompanyName] = useState("your company");
  const [inviter, setInviter] = useState("a teammate");
  const [roleLabel, setRoleLabel] = useState("Member");
  const [inviteStatus, setInviteStatus] = useState<InviteUiStatus>("valid");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    const statusParam = params.get("status");
    const status: InviteUiStatus =
      statusParam === "expired" ? "expired" : statusParam === "invalid" ? "invalid" : "valid";

    AuthClient.seedInvitePreview({
      companyName: params.get("company") ?? undefined,
      email: params.get("email") ?? undefined,
      status,
    });
    const session = readAuthSession();
    if (session?.invite) {
      setCompanyName(session.invite.companyName);
      setInviter(session.invite.inviterName);
      setRoleLabel(INVITE_ROLE_LABELS[session.invite.role]);
      setInviteStatus(session.invite.status);
    }
  }, [params]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setFieldErrors({});
    const result = await AuthClient.activateInvite({ name, password, confirmPassword });
    setLoading(false);
    if (!result.ok) {
      setError(result.error);
      setFieldErrors(result.fieldErrors ?? {});
      return;
    }
    setActivated(true);
    window.setTimeout(() => router.push(result.data.redirectTo), 900);
  }

  if (inviteStatus === "expired") {
    return (
      <AuthShell
        title="Invitation expired"
        subtitle="That invitation link has expired. Ask your admin to send a new invite."
      >
        <AuthAlert>This invitation is no longer valid.</AuthAlert>
        <p className="mt-6 text-center text-[13px]">
          <Link href={AUTH_ROUTES.signIn} className="font-semibold text-brand-blue hover:underline">
            Back to sign in
          </Link>
        </p>
      </AuthShell>
    );
  }

  if (inviteStatus === "invalid") {
    return (
      <AuthShell
        title="Invalid invitation"
        subtitle="This invitation link is invalid or has already been used."
      >
        <AuthAlert>We couldn’t open this invitation.</AuthAlert>
        <p className="mt-6 text-center text-[13px]">
          <Link href={AUTH_ROUTES.signIn} className="font-semibold text-brand-blue hover:underline">
            Back to sign in
          </Link>
        </p>
      </AuthShell>
    );
  }

  if (activated) {
    return (
      <AuthShell title="Account activated" subtitle="Your account is ready. Continue to sign in.">
        <AuthAlert tone="success">Your account is activated.</AuthAlert>
        <div className="mt-5">
          <AuthButton type="button" onClick={() => router.push(`${AUTH_ROUTES.signIn}?activated=1`)}>
            Continue to sign in
          </AuthButton>
        </div>
      </AuthShell>
    );
  }

  return (
    <AuthShell
      title="Activate your invitation"
      subtitle={`You’ve been invited to join ${companyName} on VertexBuild.`}
      panelTitle="Join your team."
      panelBody="Set your password to activate your account and access the shared company workspace."
    >
      <div className="mb-5 space-y-2">
        <AuthAlert tone="info">
          Invited by <strong>{inviter}</strong> · Role: <strong>{roleLabel}</strong>
        </AuthAlert>
        <p className="text-[12px] text-brand-muted">Invitation → Magic link → Set password → Account activated</p>
      </div>
      <form onSubmit={onSubmit} className="space-y-4" noValidate>
        {error && <AuthAlert>{error}</AuthAlert>}
        <FormField id="name" label="Your name" error={fieldErrors.name}>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={authInputClass(fieldErrors.name)}
            autoComplete="name"
          />
        </FormField>
        <PasswordField
          id="password"
          label="Create password"
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
        <AuthButton loading={loading}>Activate account</AuthButton>
      </form>
      <p className="mt-6 text-center text-[13px]">
        <Link href={AUTH_ROUTES.signIn} className="font-semibold text-brand-blue hover:underline">
          Already activated? Sign in
        </Link>
      </p>
    </AuthShell>
  );
}
