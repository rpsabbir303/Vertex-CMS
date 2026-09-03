import { MarketingPageShell, pageHeadingFromMeta } from "@/components/marketing/MarketingPageShell";
import { MARKETING_PAGES, marketingMetadata } from "@/lib/marketing/pages";
import { getActivePlans } from "@/lib/marketing/pricing";

export const metadata = marketingMetadata("signup");

type Props = {
  searchParams?: { plan?: string };
};

export default function SignupPage({ searchParams }: Props) {
  const config = MARKETING_PAGES.signup;
  const planId = searchParams?.plan;
  const plan = planId ? getActivePlans().find((p) => p.id === planId) : undefined;

  return (
    <MarketingPageShell
      title={pageHeadingFromMeta(config.title)}
      description={config.description}
      breadcrumbs={config.breadcrumbs}
      showPlaceholder={false}
    >
      <section className="section-spacing">
        <div className="site-shell max-w-xl">
          <div className="rounded-2xl border border-brand-line bg-[#FAFAF8] p-6 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">Free trial</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-brand-navy">Create your Vertex CMS account</h2>
            {plan && (
              <p className="mt-3 rounded-lg border border-brand-blue/20 bg-brand-blue/5 px-3 py-2 text-[13px] text-brand-navy">
                Selected plan: <strong>{plan.name}</strong>
              </p>
            )}
            <p className="mt-4 text-[14px] leading-relaxed text-brand-muted">
              Signup captures company name, your name, email, password, and selected plan — then email verification,
              tenant creation, trial start, and onboarding. The full form UI will connect to the live auth flow next.
            </p>
            <p className="mt-6 text-[12px] text-brand-muted">
              Plan parameter is preserved from pricing:{" "}
              <code className="rounded bg-white px-1.5 py-0.5 text-[11px]">{planId ?? "none"}</code>
            </p>
          </div>
        </div>
      </section>
    </MarketingPageShell>
  );
}
