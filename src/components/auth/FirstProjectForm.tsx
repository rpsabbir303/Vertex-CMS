"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthAlert } from "@/components/auth/AuthAlert";
import { AuthButton } from "@/components/auth/AuthButton";
import { FormField, authInputClass } from "@/components/auth/FormField";
import { OnboardingShell } from "@/components/auth/OnboardingShell";
import { AuthClient } from "@/lib/auth/client";

export function FirstProjectForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [retainage, setRetainage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setFieldErrors({});
    setSaved(false);
    const result = await AuthClient.saveFirstProject({
      name,
      type,
      location,
      startDate,
      endDate,
      retainage,
    });
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
      current="project"
      title="Create your first project"
      subtitle="Guided setup for type, location, dates, and retainage — fields aligned to Vertex CMS project configuration."
    >
      <form onSubmit={onSubmit} className="space-y-4" noValidate>
        {error && <AuthAlert>{error}</AuthAlert>}
        {saved && <AuthAlert tone="success">Your first project is ready.</AuthAlert>}
        <FormField id="name" label="Project name" error={fieldErrors.name}>
          <input id="name" value={name} onChange={(e) => setName(e.target.value)} className={authInputClass(fieldErrors.name)} />
        </FormField>
        <FormField id="type" label="Project type" error={fieldErrors.type}>
          <select id="type" value={type} onChange={(e) => setType(e.target.value)} className={authInputClass(fieldErrors.type)}>
            <option value="">Select type</option>
            <option value="commercial">Commercial</option>
            <option value="residential">Residential</option>
            <option value="civil">Civil</option>
          </select>
        </FormField>
        <FormField id="location" label="Location" error={fieldErrors.location}>
          <input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className={authInputClass(fieldErrors.location)}
          />
        </FormField>
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField id="startDate" label="Start date" error={fieldErrors.startDate}>
            <input
              id="startDate"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className={authInputClass(fieldErrors.startDate)}
            />
          </FormField>
          <FormField id="endDate" label="End date (optional)">
            <input id="endDate" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className={authInputClass()} />
          </FormField>
        </div>
        <FormField id="retainage" label="Retainage % (optional)" hint="Financial retainage percentage for this project.">
          <input
            id="retainage"
            inputMode="decimal"
            value={retainage}
            onChange={(e) => setRetainage(e.target.value)}
            className={authInputClass()}
            placeholder="e.g. 10"
          />
        </FormField>
        <AuthButton loading={loading}>Create project and continue</AuthButton>
      </form>
    </OnboardingShell>
  );
}
