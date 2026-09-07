import Link from "next/link";
import { ONBOARDING_STEPS, type OnboardingStepId } from "@/lib/auth/types";
import { AUTH_ROUTES } from "@/lib/auth/routes";

const HREF: Record<OnboardingStepId, string> = {
  company: AUTH_ROUTES.onboardingCompany,
  project: AUTH_ROUTES.onboardingProject,
  invite: AUTH_ROUTES.onboardingInvite,
  connect: AUTH_ROUTES.onboardingConnect,
};

type Props = {
  current: OnboardingStepId;
  completed: Partial<Record<OnboardingStepId, boolean>>;
};

export function OnboardingProgress({ current, completed }: Props) {
  return (
    <ol className="mb-8 grid gap-2 sm:grid-cols-4">
      {ONBOARDING_STEPS.map((step) => {
        const done = !!completed[step.id];
        const active = step.id === current;
        return (
          <li key={step.id}>
            <Link
              href={HREF[step.id]}
              className={`block rounded-xl border px-3 py-3 transition ${
                active
                  ? "border-brand-orange/40 bg-brand-orange/5"
                  : done
                    ? "border-emerald-200 bg-emerald-50/60"
                    : "border-brand-line bg-white"
              }`}
              aria-current={active ? "step" : undefined}
            >
              <p
                className={`text-[10px] font-bold uppercase tracking-[0.14em] ${
                  active ? "text-brand-orange" : done ? "text-emerald-700" : "text-brand-muted"
                }`}
              >
                {step.number}
                {done ? " · Done" : ""}
              </p>
              <p className="mt-1 text-[13px] font-semibold text-brand-navy">{step.title}</p>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
