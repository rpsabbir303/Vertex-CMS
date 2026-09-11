/**
 * CRM feature detail — Business Growth module.
 * Construction business relationships, opportunities, and project-connected customer context.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

const GROWTH = `${ROUTES.features}#growth`;
const BG_LABEL = "Business Growth";

export const crmFeatureDetail = {
  meta: {
    title: "CRM | Vertex CMS Features",
    description:
      "Manage construction customer relationships, opportunities, and project-connected business information in Vertex CMS — from first conversation through active work.",
    canonical: `${ROUTES.features}/crm`,
  },
  hero: {
    eyebrow: "Business Growth",
    headline: "Manage relationships from first conversation to project.",
    supporting:
      "Give teams a connected view of customers, prospects, opportunities, and project relationships without losing context across the platform.",
    primary: { label: "Explore Business Growth", href: GROWTH },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
    preview: "crmHero" as PreviewKey,
  },
  intro: {
    headline: "One connected view of every relationship.",
    body: "Keep customer and business information connected to the projects, opportunities, and teams that depend on it.",
    cards: [
      {
        n: "01",
        title: "Customer context",
        body: "Keep company and contact information organized in one place.",
      },
      {
        n: "02",
        title: "Opportunity visibility",
        body: "Track leads and opportunities from early conversation through active work.",
      },
      {
        n: "03",
        title: "Project connection",
        body: "Connect customer relationships to the projects, teams, and records already managed in Vertex CMS.",
      },
    ],
  },
  experience: {
    headline: "From prospect to project, without losing context.",
    body: "CRM information stays connected as a relationship moves through your business.",
    preview: "crmWorkflow" as PreviewKey,
    steps: [
      { n: "01", title: "Capture the relationship", body: "Create a company, contact, or lead record." },
      { n: "02", title: "Track the opportunity", body: "Record opportunity details, status, value, owner, and next steps." },
      { n: "03", title: "Connect the project", body: "Associate the relationship with the relevant project and project records." },
      { n: "04", title: "Keep the team aligned", body: "Give the right people visibility into customer activity and follow-up." },
    ],
  },
  workspace: {
    headline: "A clearer view of your business pipeline.",
    body: "See active opportunities, open leads, pipeline value, and follow-ups in one CRM workspace.",
    preview: "crmWorkspace" as PreviewKey,
  },
  customerRecord: {
    headline: "See the relationship and the work behind it.",
    body: "Review company details, contacts, active projects, opportunities, and recent activity from one customer profile.",
    preview: "crmCustomer" as PreviewKey,
  },
  activity: {
    headline: "Keep every customer interaction connected.",
    cards: [
      { n: "01", title: "Customer activity", body: "See recent interactions and important updates." },
      { n: "02", title: "Follow-ups", body: "Keep upcoming actions visible so opportunities do not go cold." },
      { n: "03", title: "Project relationships", body: "See which projects and records are connected to a customer." },
      { n: "04", title: "Team ownership", body: "Know who is responsible for the next step." },
    ],
  },
  darkStory: {
    headline: "Turn relationships into connected business opportunities.",
    body: "Give teams the context they need to move opportunities forward while keeping customer information connected to the work already happening in Vertex CMS.",
    preview: "crmOpportunity" as PreviewKey,
  },
  outcomes: {
    headline: "Built for a clearer path from relationship to revenue.",
    cards: [
      {
        n: "01",
        title: "Less scattered customer information",
        body: "Keep relationship details together instead of across disconnected tools.",
      },
      {
        n: "02",
        title: "Clearer opportunity visibility",
        body: "Know which opportunities need attention and what comes next.",
      },
      {
        n: "03",
        title: "Better team coordination",
        body: "Give teams shared context around customers and opportunities.",
      },
      {
        n: "04",
        title: "Stronger project continuity",
        body: "Connect business relationships with the project information already inside Vertex CMS.",
      },
    ],
  },
  connectedWorkflows: {
    headline: "CRM connected to your business growth workflows.",
    body: "Keep customer and opportunity information connected to the growth tools your team uses to win and deliver work.",
    cards: [
      {
        slug: "crm",
        category: BG_LABEL,
        title: "CRM",
        body: "Manage opportunities, customer records, and pipeline visibility in one connected workspace.",
      },
      {
        slug: "leads",
        category: BG_LABEL,
        title: "Leads",
        body: "Capture leads into the opportunity pipeline that feeds project delivery.",
      },
      {
        slug: "website-builder",
        category: BG_LABEL,
        title: "Website Builder",
        body: "Publish tenant website pages connected to CMS business data.",
      },
      {
        slug: "customer-portals",
        category: BG_LABEL,
        title: "Customer Portals",
        body: "Give owners and partners scoped access to project information.",
      },
    ],
  },
  explore: {
    eyebrow: BG_LABEL,
    headline: "Everything your team needs to grow connected.",
    body: "Connect CRM, lead capture, public web presence, and customer portals across your business growth workflows.",
    activeSlug: "crm",
    cards: [
      {
        slug: "crm",
        category: BG_LABEL,
        title: "CRM",
        body: "Manage opportunities, customer records, and pipeline visibility in one connected workspace.",
      },
      {
        slug: "leads",
        category: BG_LABEL,
        title: "Leads",
        body: "Capture leads into the opportunity pipeline that feeds project delivery.",
      },
      {
        slug: "website-builder",
        category: BG_LABEL,
        title: "Website Builder",
        body: "Publish tenant website pages and custom domains connected to CMS data.",
      },
      {
        slug: "customer-portals",
        category: BG_LABEL,
        title: "Customer Portals",
        body: "Give owners, subs, vendors, and architects scoped access to project information.",
      },
    ],
  },
  finalCta: {
    headline: "Build stronger customer relationships with connected context.",
    supporting:
      "Explore how Vertex CMS connects business growth with the projects, people, and information behind every opportunity.",
    primary: { label: "Explore Business Growth", href: GROWTH },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
  },
} as const;
