import { POST_TRIAL_PROGRESS_STEPS, type PostTrialProgressStepId } from "@/lib/auth/postTrial";

export function PostTrialProgress({ current }: { current: PostTrialProgressStepId }) {
  const currentIndex = POST_TRIAL_PROGRESS_STEPS.findIndex((s) => s.id === current);

  return (
    <nav aria-label="Onboarding progress" className="mb-8">
      <ol className="flex flex-wrap gap-x-3 gap-y-2">
        {POST_TRIAL_PROGRESS_STEPS.map((step, index) => {
          const done = index < currentIndex;
          const active = step.id === current;
          return (
            <li
              key={step.id}
              className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-[12px] font-semibold ${
                active
                  ? "border-brand-orange/50 bg-brand-orange/10 text-brand-navy"
                  : done
                    ? "border-brand-line bg-brand-soft/80 text-brand-muted"
                    : "border-brand-line bg-white text-brand-muted"
              }`}
              aria-current={active ? "step" : undefined}
            >
              <span className={`font-mono text-[11px] ${active ? "text-brand-orange" : ""}`}>{step.number}</span>
              <span>{step.label}</span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
