import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, VertexLogo } from "@/components/Icons";
import {
  AccountingUI,
  AIConsole,
  CollaborationUI,
  ConnectedExperienceUI,
  DocsUI,
  EstimateUI,
  FinanceUI,
  PhoneUI,
  PortfolioAnalytics,
  ProcurementUI,
  ProjectWorkspace,
  SafetyUI,
  ScheduleUI,
  WorkforceUI,
} from "@/components/mockups/ProductMockups";
import { EXPLORE_MODULES } from "@/lib/exploreModules";

export function generateStaticParams() {
  return EXPLORE_MODULES.map((m) => ({ slug: m.id }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const mod = EXPLORE_MODULES.find((m) => m.id === params.slug);
  if (!mod) return { title: "Feature | Vertex CMS" };
  return {
    title: `${mod.title} | Vertex CMS`,
    description: mod.description,
  };
}

function Preview({ type }: { type: (typeof EXPLORE_MODULES)[number]["previewType"] }) {
  switch (type) {
    case "project":
      return <ProjectWorkspace />;
    case "estimate":
      return <EstimateUI />;
    case "finance":
      return <FinanceUI />;
    case "accounting":
      return <AccountingUI />;
    case "field":
      return (
        <div className="flex justify-center gap-4 rounded-2xl border border-brand-line bg-brand-soft p-8">
          <PhoneUI variant="home" />
          <PhoneUI variant="log" raised />
        </div>
      );
    case "schedule":
      return <ScheduleUI />;
    case "safety":
      return <SafetyUI />;
    case "procurement":
      return <ProcurementUI />;
    case "docs":
      return <DocsUI />;
    case "workforce":
      return <WorkforceUI />;
    case "ai":
      return (
        <div className="rounded-2xl bg-[#061A30] p-1">
          <AIConsole />
        </div>
      );
    case "reports":
      return <PortfolioAnalytics />;
    case "collaboration":
      return <CollaborationUI />;
    case "connected":
      return <ConnectedExperienceUI />;
    default:
      return <ProjectWorkspace />;
  }
}

export default function FeatureDetailPage({ params }: { params: { slug: string } }) {
  const mod = EXPLORE_MODULES.find((m) => m.id === params.slug);
  if (!mod) notFound();

  return (
    <div className="min-h-screen bg-brand-soft text-brand-navy">
      <header className="border-b border-brand-line bg-white">
        <div className="site-shell flex h-16 items-center justify-between">
          <VertexLogo />
          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm font-medium text-brand-muted hover:text-brand-navy">
              ← Home
            </Link>
            <Link href="/features" className="btn-secondary px-3.5 py-2 text-xs">
              All Features
            </Link>
          </div>
        </div>
      </header>

      <main className="site-shell py-14 sm:py-20">
        <p className="eyebrow">
          {mod.number} · Feature
        </p>
        <h1 className="display-title mt-3 max-w-3xl text-4xl sm:text-5xl">{mod.title}</h1>
        <p className="body-copy mt-4 max-w-2xl">{mod.description}</p>

        <div className="mt-10 max-w-4xl overflow-hidden rounded-2xl shadow-product">
          <Preview type={mod.previewType} />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-brand-line bg-white p-6">
            <h2 className="display-title text-xl">Capabilities</h2>
            <ul className="mt-4 space-y-2">
              {mod.capabilities.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-3 rounded-xl border border-brand-line bg-brand-soft px-4 py-3 text-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-brand-line bg-white p-6">
            <h2 className="display-title text-xl">See it on the homepage</h2>
            <p className="mt-2 text-sm text-brand-muted">
              Return to the product story, or start a free trial to experience the full platform.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/#plan" className="btn-secondary">
                View product story
              </Link>
              <Link href="/#trial" className="btn-primary">
                Start Free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
