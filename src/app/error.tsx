"use client";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ reset }: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center text-brand-navy">
      <h2 className="font-display text-2xl font-bold">Something went wrong.</h2>
      <p className="mt-3 max-w-md text-sm text-brand-muted">
        The page could not be loaded. Try again, or return to the home page.
      </p>
      <div className="mt-8 flex gap-4">
        <button type="button" onClick={() => reset()} className="btn-primary">
          Try again
        </button>
        <a href="/" className="inline-flex items-center justify-center rounded-sm border border-brand-line px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-brand-navy">
          Back Home
        </a>
      </div>
    </div>
  );
}
