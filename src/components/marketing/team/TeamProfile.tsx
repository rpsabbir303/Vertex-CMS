import { PLACEHOLDERS, type TeamMember } from "@/lib/marketing/team/content";

type Props = {
  member: TeamMember;
  variant?: "featured" | "secondary";
};

function isPlaceholder(value: string | null): value is null {
  return value === null;
}

export function TeamProfile({ member, variant = "secondary" }: Props) {
  const name = member.name ?? PLACEHOLDERS.name;
  const role = member.role ?? PLACEHOLDERS.role;
  const bio = member.bio ?? PLACEHOLDERS.bio;
  const nameIsPlaceholder = isPlaceholder(member.name);
  const roleIsPlaceholder = isPlaceholder(member.role);
  const bioIsPlaceholder = isPlaceholder(member.bio);
  const photoIsPlaceholder = isPlaceholder(member.image);

  if (variant === "featured") {
    return (
      <article className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:items-end">
        <PhotoBlock
          image={member.image}
          name={member.name}
          placeholder={photoIsPlaceholder}
          className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]"
        />
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            Leadership
          </p>
          <h3
            className={`mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl ${
              nameIsPlaceholder ? "italic text-brand-muted" : ""
            }`}
          >
            {name}
          </h3>
          <p
            className={`mt-2 text-[15px] font-medium ${
              roleIsPlaceholder ? "italic text-brand-muted" : "text-brand-navy"
            }`}
          >
            {role}
          </p>
          <p
            className={`mt-5 max-w-md text-[15px] leading-relaxed ${
              bioIsPlaceholder
                ? "rounded-lg border border-dashed border-brand-line bg-[#FAFBFD] px-4 py-3 italic text-brand-muted"
                : "text-brand-muted"
            }`}
          >
            {bio}
          </p>
          {member.linkedin ? (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-6 inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
            >
              LinkedIn
              <span aria-hidden="true">→</span>
            </a>
          ) : null}
          {(nameIsPlaceholder || roleIsPlaceholder || bioIsPlaceholder || photoIsPlaceholder) && (
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
              Editable content placeholder — not a real employee profile
            </p>
          )}
        </div>
      </article>
    );
  }

  return (
    <article className="grid gap-5 sm:grid-cols-[140px_1fr] sm:items-start">
      <PhotoBlock
        image={member.image}
        name={member.name}
        placeholder={photoIsPlaceholder}
        className="aspect-square sm:aspect-[4/5]"
      />
      <div>
        <h3
          className={`font-display text-xl font-bold tracking-tight text-brand-navy ${
            nameIsPlaceholder ? "italic text-brand-muted" : ""
          }`}
        >
          {name}
        </h3>
        <p
          className={`mt-1 text-[13px] font-medium ${
            roleIsPlaceholder ? "italic text-brand-muted" : "text-brand-navy"
          }`}
        >
          {role}
        </p>
        <p
          className={`mt-3 text-[14px] leading-relaxed ${
            bioIsPlaceholder
              ? "rounded-lg border border-dashed border-brand-line bg-[#FAFBFD] px-3 py-2.5 italic text-brand-muted"
              : "text-brand-muted"
          }`}
        >
          {bio}
        </p>
        {member.linkedin ? (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-[13px] font-semibold text-brand-orange transition hover:gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
          >
            LinkedIn <span aria-hidden="true">→</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}

function PhotoBlock({
  image,
  name,
  placeholder,
  className = "",
}: {
  image: string | null;
  name: string | null;
  placeholder: boolean;
  className?: string;
}) {
  if (!placeholder && image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={image}
        alt={name ? `Portrait of ${name}` : "Team member portrait"}
        className={`w-full rounded-xl border border-brand-line object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`flex w-full flex-col items-center justify-center rounded-xl border border-dashed border-brand-line bg-[#F4F7FB] ${className}`}
      role="img"
      aria-label="Leadership photo placeholder"
    >
      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
        {PLACEHOLDERS.photo}
      </span>
      <span className="mt-2 h-px w-12 bg-brand-line" aria-hidden="true" />
    </div>
  );
}
