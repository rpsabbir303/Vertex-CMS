import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { CivilInfrastructurePage } from "@/components/marketing/solutions/civil-infrastructure/CivilInfrastructurePage";
import { CommercialConstructionPage } from "@/components/marketing/solutions/commercial-construction/CommercialConstructionPage";
import { GeneralContractorPage } from "@/components/marketing/solutions/general-contractor/GeneralContractorPage";
import { OwnerClientPage } from "@/components/marketing/solutions/owner-client/OwnerClientPage";
import { ResidentialConstructionPage } from "@/components/marketing/solutions/residential-construction/ResidentialConstructionPage";
import { SpecialtyContractorPage } from "@/components/marketing/solutions/specialty-contractor/SpecialtyContractorPage";
import { SolutionDetailPage } from "@/components/marketing/solutions/SolutionDetailPage";
import { getSolutionBySlug, SOLUTION_SLUGS, type SolutionSlug } from "@/lib/marketing/solutions/data";
import { civilPageMeta } from "@/lib/marketing/solutions/civilInfrastructure";
import { commercialPageMeta } from "@/lib/marketing/solutions/commercialConstruction";
import { gcPageMeta } from "@/lib/marketing/solutions/generalContractor";
import { ownerPageMeta } from "@/lib/marketing/solutions/ownerClient";
import { residentialPageMeta } from "@/lib/marketing/solutions/residentialConstruction";
import { scPageMeta } from "@/lib/marketing/solutions/specialtyContractor";

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return SOLUTION_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  if (params.slug === "general-contractors") {
    return {
      title: gcPageMeta.title,
      description: gcPageMeta.description,
      alternates: { canonical: gcPageMeta.canonical },
      openGraph: {
        title: gcPageMeta.title,
        description: gcPageMeta.description,
        url: gcPageMeta.canonical,
        type: "website",
      },
    };
  }

  if (params.slug === "specialty-contractors") {
    return {
      title: scPageMeta.title,
      description: scPageMeta.description,
      alternates: { canonical: scPageMeta.canonical },
      openGraph: {
        title: scPageMeta.title,
        description: scPageMeta.description,
        url: scPageMeta.canonical,
        type: "website",
      },
    };
  }

  if (params.slug === "owners") {
    return {
      title: ownerPageMeta.title,
      description: ownerPageMeta.description,
      alternates: { canonical: ownerPageMeta.canonical },
      openGraph: {
        title: ownerPageMeta.title,
        description: ownerPageMeta.description,
        url: ownerPageMeta.canonical,
        type: "website",
      },
    };
  }

  if (params.slug === "commercial") {
    return {
      title: commercialPageMeta.title,
      description: commercialPageMeta.description,
      alternates: { canonical: commercialPageMeta.canonical },
      openGraph: {
        title: commercialPageMeta.title,
        description: commercialPageMeta.description,
        url: commercialPageMeta.canonical,
        type: "website",
      },
    };
  }

  if (params.slug === "residential") {
    return {
      title: residentialPageMeta.title,
      description: residentialPageMeta.description,
      alternates: { canonical: residentialPageMeta.canonical },
      openGraph: {
        title: residentialPageMeta.title,
        description: residentialPageMeta.description,
        url: residentialPageMeta.canonical,
        type: "website",
      },
    };
  }

  if (params.slug === "civil") {
    return {
      title: civilPageMeta.title,
      description: civilPageMeta.description,
      alternates: { canonical: civilPageMeta.canonical },
      openGraph: {
        title: civilPageMeta.title,
        description: civilPageMeta.description,
        url: civilPageMeta.canonical,
        type: "website",
      },
    };
  }

  const solution = getSolutionBySlug(params.slug);
  if (!solution) return { title: "Solution | VertexBuild" };

  return {
    title: `${solution.label} | VertexBuild Solutions`,
    description: solution.supporting,
    alternates: { canonical: solution.href },
    openGraph: {
      title: `${solution.label} | VertexBuild Solutions`,
      description: solution.supporting,
      url: solution.href,
      type: "website",
    },
  };
}

export default function SolutionSlugPage({ params }: PageProps) {
  const solution = getSolutionBySlug(params.slug);
  if (!solution) notFound();

  return (
    <MarketingProviders>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-brand-navy">
        <MarketingHeader />
        <main className="w-full min-w-0 flex-1">
          {params.slug === "general-contractors" ? (
            <GeneralContractorPage />
          ) : params.slug === "specialty-contractors" ? (
            <SpecialtyContractorPage />
          ) : params.slug === "owners" ? (
            <OwnerClientPage />
          ) : params.slug === "commercial" ? (
            <CommercialConstructionPage />
          ) : params.slug === "residential" ? (
            <ResidentialConstructionPage />
          ) : params.slug === "civil" ? (
            <CivilInfrastructurePage />
          ) : (
            <SolutionDetailPage slug={params.slug as SolutionSlug} />
          )}
        </main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}
