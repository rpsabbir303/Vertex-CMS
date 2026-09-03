"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/website/PageHero";
import { TenantPageLayout } from "@/components/website/TenantPageLayout";
import { useLanguage } from "@/components/website/LanguageProvider";
import { company } from "@/lib/website/tenantData";
import { PAGE_ANCHORS } from "@/lib/website/navigation";

type FormState = "idle" | "submitting" | "success" | "error";

function ContactForm() {
  const { t } = useLanguage();
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("submitting");

    // No backend configured — do not simulate a successful CRM lead creation.
    await new Promise((r) => setTimeout(r, 400));
    setState("error");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Company" name="company" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
        <Field label="Project Name" name="projectName" />
        <Field label="Project Type" name="projectType" />
        <Field label="Project Location" name="projectLocation" />
        <Field label="Estimated Project Value" name="projectValue" />
        <Field label="Target Start Date" name="startDate" type="date" className="sm:col-span-2" />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-brand-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-brand-line px-4 py-3 text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
        />
      </div>
      {state === "error" && (
        <p className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          {t.requestBid.error} Form submission is not connected to a backend yet.
        </p>
      )}
      <button type="submit" className="btn-primary" disabled={state === "submitting"}>
        {state === "submitting" ? "Submitting…" : t.nav.requestBid}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-brand-navy">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-brand-line px-4 py-3 text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
      />
    </div>
  );
}

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <TenantPageLayout>
      <PageHero title={t.pages.contact.title} description={t.pages.contact.description} />

      <section className="section-spacing">
        <div className="site-shell grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <h2 className="font-display text-xl font-bold text-brand-navy">{t.pages.contact.contactInfo}</h2>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Phone</dt>
                <dd className="mt-1">
                  <a href={`tel:${company.phone.replace(/\D/g, "")}`} className="text-brand-navy hover:text-brand-orange">
                    {company.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${company.email}`} className="text-brand-navy hover:text-brand-orange">
                    {company.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Office</dt>
                <dd className="mt-1 text-sm leading-relaxed text-brand-navy">{company.address}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                  {t.footer.serviceArea}
                </dt>
                <dd className="mt-1 text-sm text-brand-navy">{company.serviceAreaLabel}</dd>
              </div>
            </dl>
          </Reveal>

          <div id={PAGE_ANCHORS.requestBid} className="scroll-mt-24">
            <Reveal delay={80}>
              <h2 className="font-display text-xl font-bold text-brand-navy">{t.pages.contact.requestBid}</h2>
              <p className="mt-2 text-sm text-brand-muted">{t.cta.supporting}</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </TenantPageLayout>
  );
}
