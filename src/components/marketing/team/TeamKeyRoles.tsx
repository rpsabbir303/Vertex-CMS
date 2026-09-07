import { Reveal } from "@/components/Reveal";
import { keyRoles, PLACEHOLDERS } from "@/lib/marketing/team/content";

export function TeamKeyRoles() {
  return (
    <section className="border-b border-brand-line bg-[#FAFBFD]">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Key roles</p>
          <h2 className="display-title mt-3 text-3xl sm:text-4xl">Key roles</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">
            A role-focused view of how teams contribute to Vertex CMS. Role titles and descriptions are
            editable placeholders until Vertex documents the organization.
          </p>
        </Reveal>

        <Reveal delay={70} className="mt-12">
          <div className="overflow-hidden rounded-xl border border-brand-line bg-white">
            <ol className="divide-y divide-brand-line">
              {keyRoles.map((role, index) => {
                const title = role.title ?? PLACEHOLDERS.keyRole;
                const description = role.description ?? PLACEHOLDERS.keyRoleDescription;
                const titlePlaceholder = role.title === null;
                const descPlaceholder = role.description === null;
                return (
                  <li
                    key={role.id}
                    className="grid gap-4 px-5 py-6 sm:grid-cols-[72px_1fr] sm:items-start sm:gap-8 sm:px-8 sm:py-8"
                  >
                    <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-2">
                      <span className="font-mono text-[12px] font-semibold text-brand-orange">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {index < keyRoles.length - 1 ? (
                        <span className="hidden text-[11px] text-brand-muted sm:inline" aria-hidden="true">
                          ↓
                        </span>
                      ) : (
                        <span className="hidden text-[11px] text-brand-muted sm:inline" aria-hidden="true">
                          →
                        </span>
                      )}
                    </div>
                    <div>
                      <h3
                        className={`font-display text-xl font-bold tracking-tight ${
                          titlePlaceholder ? "italic text-brand-muted" : "text-brand-navy"
                        }`}
                      >
                        {title}
                      </h3>
                      <p
                        className={`mt-2 max-w-2xl text-[14px] leading-relaxed ${
                          descPlaceholder
                            ? "rounded-lg border border-dashed border-brand-line bg-[#FAFBFD] px-3 py-2 italic text-brand-muted"
                            : "text-brand-muted"
                        }`}
                      >
                        {description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
            <div className="border-t border-brand-line bg-brand-navy px-5 py-4 sm:px-8">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white">
                Vertex CMS
              </p>
              <p className="mt-1 text-[12px] text-slate-400">Product organization · content-ready structure</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
