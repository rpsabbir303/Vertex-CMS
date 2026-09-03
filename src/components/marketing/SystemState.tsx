import Link from "next/link";

type Variant = "404" | "500" | "loading" | "maintenance" | "unavailable";

const COPY: Record<Variant, { title: string; description: string }> = {
  loading: { title: "Loading", description: "Please wait while content loads." },
  "404": { title: "Page Not Found", description: "The page you're looking for doesn't exist." },
  "500": { title: "Something Went Wrong", description: "We're working to fix the issue. Please try again." },
  maintenance: { title: "Under Maintenance", description: "Vertex CMS is temporarily unavailable." },
  unavailable: { title: "Content Unavailable", description: "This content is not available right now." },
};

export function SystemState({ variant }: { variant: Variant }) {
  const { title, description } = COPY[variant];

  if (variant === "loading") {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <p className="text-sm text-brand-muted">{description}</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-3xl font-bold text-brand-navy">{title}</h1>
      <p className="mt-3 max-w-md text-brand-muted">{description}</p>
      <Link href="/" className="btn-primary mt-8">
        Back Home
      </Link>
    </div>
  );
}
