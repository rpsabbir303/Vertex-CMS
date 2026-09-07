"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthAlert } from "@/components/auth/AuthAlert";
import { AuthButton } from "@/components/auth/AuthButton";
import { FormField, authInputClass } from "@/components/auth/FormField";
import { OnboardingShell } from "@/components/auth/OnboardingShell";
import { AuthClient } from "@/lib/auth/client";
import { readAuthSession } from "@/lib/auth/session";

export function CompanySetupForm() {
  const router = useRouter();
  const [companyName, setCompanyName] = useState("");
  const [trade, setTrade] = useState("");
  const [region, setRegion] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const session = readAuthSession();
    if (session?.companyName) setCompanyName(session.companyName);
  }, []);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setFieldErrors({});
    setSaved(false);
    const result = await AuthClient.saveCompanyProfile({ companyName, trade, region, phone });
    setLoading(false);
    if (!result.ok) {
      setError(result.error);
      setFieldErrors(result.fieldErrors ?? {});
      return;
    }
    setSaved(true);
    window.setTimeout(() => router.push(result.data.redirectTo), 600);
  }

  return (
    <OnboardingShell
      current="company"
      title="Company profile"
      subtitle="Configure your company identity. This is separate from tenant workspace provisioning."
    >
      <form onSubmit={onSubmit} className="space-y-4" noValidate>
        {error && <AuthAlert>{error}</AuthAlert>}
        {saved && <AuthAlert tone="success">Company profile complete.</AuthAlert>}
        <FormField id="companyName" label="Company name" error={fieldErrors.companyName}>
          <input
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className={authInputClass(fieldErrors.companyName)}
          />
        </FormField>
        <FormField id="trade" label="Trade" error={fieldErrors.trade}>
          <select
            id="trade"
            value={trade}
            onChange={(e) => setTrade(e.target.value)}
            className={authInputClass(fieldErrors.trade)}
          >
            <option value="">Select trade</option>
            <option value="general_contractor">General Contractor</option>
            <option value="subcontractor">Subcontractor</option>
          </select>
        </FormField>
        <FormField id="region" label="Primary region" error={fieldErrors.region}>
          <input
            id="region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className={authInputClass(fieldErrors.region)}
            placeholder="City, State / Region"
          />
        </FormField>
        <FormField id="phone" label="Phone (optional)">
          <input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className={authInputClass()} />
        </FormField>
        <AuthButton loading={loading}>Save and continue</AuthButton>
      </form>
    </OnboardingShell>
  );
}
