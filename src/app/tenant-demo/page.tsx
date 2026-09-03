import { Header } from "@/components/website/Header";
import { Hero } from "@/components/website/Hero";
import { CompanyIntro } from "@/components/website/CompanyIntro";
import { Services } from "@/components/website/Services";
import { FeaturedProjects } from "@/components/website/FeaturedProjects";
import { ProjectStory } from "@/components/website/ProjectStory";
import { Process } from "@/components/website/Process";
import { SafetyCredentials } from "@/components/website/SafetyCredentials";
import { Team } from "@/components/website/Team";
import { Testimonials } from "@/components/website/Testimonials";
import { ServiceArea } from "@/components/website/ServiceArea";
import { RequestBidCTA } from "@/components/website/RequestBidCTA";
import { Footer } from "@/components/website/Footer";
import { homeMetadata } from "@/lib/website/pageMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = homeMetadata;

/** Tenant construction-company demo homepage (Summit Construction Group). */
export default function TenantDemoHomePage() {
  return (
    <div id="top" className="min-h-screen w-full overflow-x-hidden bg-white text-brand-navy">
      <Header />
      <main className="w-full">
        <Hero />
        <CompanyIntro />
        <Services />
        <FeaturedProjects />
        <ProjectStory />
        <Process />
        <SafetyCredentials />
        <Team />
        <Testimonials />
        <ServiceArea />
        <RequestBidCTA />
      </main>
      <Footer />
    </div>
  );
}
