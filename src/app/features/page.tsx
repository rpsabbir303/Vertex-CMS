import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { ROUTES } from "@/lib/marketing/navigation";
import { EXPLORE_MODULES, GROUPS } from "@/lib/exploreModules";

const FEATURE_ANCHORS = [
  { id: "project-management", label: "Project Management" },
  { id: "financial-management", label: "Financial Management" },
  { id: "field-operations", label: "Field Operations" },
  { id: "compliance", label: "Compliance & Workforce" },
  { id: "ai", label: "AI & Intelligence" },
  { id: "growth", label: "Growth" },
];

export const metadata = {
  title: "Vertex CMS Features | Construction Management Software",
  description:
    "Explore every major capability in the Vertex CMS construction management platform.",
};

export default function FeaturesIndexPage() {
  return (
    <MarketingProviders>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-brand-navy">
        <MarketingHeader />
        <main className="w-full min-w-0 flex-1">
          <Breadcrumbs items={[{ label: "Home", href: ROUTES.home }, { label: "Features" }]} />
          <section className="section-spacing border-b border-brand-line/60 bg-[#FAFAF8]">
            <div className="site-shell">
              <Reveal className="max-w-3xl">
                <p className="eyebrow">Vertex CMS Platform</p>
                <h1 className="display-title mt-3 text-4xl sm:text-5xl">All Features</h1>
                <p className="body-copy mt-4">
                  Dive into each module of the construction management system — from planning and
                  financials through field operations, documents, collaboration, and AI.
                </p>
              </Reveal>
            </div>
          </section>

          <section className="border-b border-brand-line bg-white py-8">
            <div className="site-shell flex flex-wrap gap-2">
              {FEATURE_ANCHORS.map((a) => (
                <a
                  key={a.id}
                  href={`#${a.id}`}
                  className="rounded-sm border border-brand-line px-3 py-2 text-[12px] font-semibold text-brand-navy hover:border-brand-orange"
                >
                  {a.label}
                </a>
              ))}
            </div>
          </section>

          {FEATURE_ANCHORS.map((anchor) => (
            <div key={anchor.id} id={anchor.id} className="scroll-mt-24">
              <section className="section-spacing border-b border-brand-line/40 bg-brand-soft/50">
                <div className="site-shell">
                  <h2 className="font-display text-2xl font-bold text-brand-navy">{anchor.label}</h2>
                  <p className="mt-2 text-sm text-brand-muted">Explore {anchor.label.toLowerCase()} capabilities.</p>
                </div>
              </section>
            </div>
          ))}

          <section className="section-spacing">
            <div className="site-shell space-y-12">
              {GROUPS.map((group) => {
                const modules = EXPLORE_MODULES.filter((m) => m.group === group.id);
                return (
                  <div key={group.id}>
                    <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">
                      {group.label}
                    </h2>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {modules.map((m) => (
                        <Link
                          key={m.id}
                          href={m.href}
                          className="group rounded-2xl border border-brand-line bg-white p-5 transition hover:border-brand-blue/30 hover:shadow-sm"
                        >
                          <span className="text-[11px] font-bold text-brand-orange">{m.number}</span>
                          <span className="mt-2 block text-base font-semibold text-brand-navy group-hover:text-brand-blue">
                            {m.title}
                          </span>
                          <span className="mt-2 block text-sm text-brand-muted line-clamp-2">{m.description}</span>
                          <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-orange">
                            Learn more <ArrowRight className="h-3 w-3" />
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}
