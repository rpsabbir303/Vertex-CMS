/**
 * Website Builder feature detail — Business Growth module.
 * Construction-focused website platform connected to Vertex CMS data.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

const GROWTH = `${ROUTES.features}#growth`;
const BG_LABEL = "Business Growth";

export const websiteBuilderFeatureDetail = {
  meta: {
    title: "Website Builder | Vertex CMS Features",
    description:
      "Launch a construction company website from predefined templates, connected CMS content, branding controls, SEO, custom domains, and CRM lead capture — all inside Vertex CMS.",
    canonical: `${ROUTES.features}/website-builder`,
  },
  hero: {
    eyebrow: "Business Growth",
    headline: "Build a professional construction website from the information you already manage.",
    supporting:
      "Launch a construction-focused company website using predefined templates, connected CMS content, built-in branding controls, SEO settings, custom domains, and publishing tools.",
    primary: { label: "Explore Business Growth", href: GROWTH },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
    preview: "wbHero" as PreviewKey,
  },
  intro: {
    headline: "A website built around your construction business.",
    body: "Start with a predefined construction website system and customize the content and branding without rebuilding the entire design from scratch.",
    cards: [
      { n: "01", title: "Start with a proven template", body: "Choose from predefined website systems designed for different construction business types." },
      { n: "02", title: "Customize your brand", body: "Configure your logo, colors, fonts, and favicon to match your company identity." },
      { n: "03", title: "Publish with confidence", body: "Preview your website before publishing and keep the publishing process controlled." },
    ],
  },
  templates: {
    headline: "Start with a website designed for the way you build.",
    body: "Choose a complete construction-focused website template instead of starting from a blank canvas.",
    items: [
      { n: "01", name: "Corporate Construction", body: "Professional general-contractor website emphasizing company credibility and project portfolio.", accent: "navy" as const },
      { n: "02", name: "Modern Contractor", body: "Clean contemporary website for modern commercial construction companies.", accent: "orange" as const },
      { n: "03", name: "Premium Builder", body: "High-end visual template for luxury and residential construction companies.", accent: "slate" as const },
      { n: "04", name: "Industrial / Civil", body: "Strong technical design for infrastructure, industrial, and civil contractors.", accent: "steel" as const },
      { n: "05", name: "Specialty Contractor", body: "Service and trade-focused template for electrical, mechanical, roofing, concrete, and similar contractors.", accent: "blue" as const },
      { n: "06", name: "Project Portfolio", body: "Image-led template emphasizing completed and ongoing projects.", accent: "warm" as const },
    ],
  },
  templatePreview: {
    headline: "See the full website before you choose it.",
    body: "Inspect desktop and mobile layouts before selecting a template and creating your draft website.",
    preview: "wbTemplatePreview" as PreviewKey,
  },
  editor: {
    headline: "Edit the website while seeing the result.",
    body: "Manage pages, edit predefined sections, and preview changes without unrestricted layout editing.",
    preview: "wbEditor" as PreviewKey,
  },
  sectionEditor: {
    headline: "Customize the content without breaking the design.",
    body: "Edit supported section types while the underlying template structure stays controlled.",
    preview: "wbSectionEditor" as PreviewKey,
    sections: ["Hero", "Services", "Portfolio", "About", "Team", "Testimonials", "Certifications", "Contact"],
  },
  cmsImport: {
    headline: "Your website starts with the information already inside Vertex CMS.",
    body: "Reuse company information and project data instead of recreating everything manually.",
    preview: "wbCmsImport" as PreviewKey,
    flows: [
      { source: "Projects", target: "Portfolio" },
      { source: "Team", target: "About / Team" },
      { source: "Safety / TRIR", target: "Trust / Certifications" },
      { source: "Company information", target: "Website content" },
    ],
  },
  portfolio: {
    headline: "Turn completed work into your public portfolio.",
    body: "Select projects from Vertex CMS and publish them as portfolio content on the company website.",
    preview: "wbPortfolio" as PreviewKey,
  },
  branding: {
    headline: "Make the website unmistakably yours.",
    body: "Configure logo, brand colors, typography, and favicon — with changes reflected in the website preview.",
    preview: "wbBranding" as PreviewKey,
  },
  seo: {
    headline: "Give every page a stronger foundation for search.",
    body: "Manage page-level SEO titles, descriptions, and social preview settings from the Website Builder.",
    preview: "wbSeo" as PreviewKey,
  },
  publish: {
    headline: "Review everything before it goes live.",
    body: "Save changes, preview desktop and mobile layouts, approve updates, and publish when ready.",
    preview: "wbPublish" as PreviewKey,
    steps: ["Edit", "Save", "Preview", "Approve", "Publish"],
  },
  domain: {
    headline: "Publish on your own domain.",
    body: "Connect a custom domain and move from a draft website to a live company website.",
    preview: "wbDomain" as PreviewKey,
    steps: [
      { n: "01", title: "Add domain" },
      { n: "02", title: "Configure DNS" },
      { n: "03", title: "Verify domain" },
      { n: "04", title: "Activate SSL" },
      { n: "05", title: "Publish" },
    ],
  },
  dns: {
    headline: "A guided path from domain setup to verified.",
    body: "Follow clear DNS instructions to verify ownership before SSL activation.",
    preview: "wbDns" as PreviewKey,
  },
  ssl: {
    headline: "From verified domain to live website.",
    body: "Track domain verification, SSL provisioning, and live website status in one place.",
    preview: "wbSsl" as PreviewKey,
  },
  contactLead: {
    headline: "Turn website inquiries into CRM leads.",
    body: "Website contact form submissions create lead records in Vertex CMS CRM — connected to your business growth workflow.",
    preview: "wbContactLead" as PreviewKey,
  },
  workflow: {
    headline: "From template selection to a live construction website.",
    steps: [
      { n: "01", title: "Choose a template", body: "Select a predefined construction website system." },
      { n: "02", title: "Customize content", body: "Edit pages and predefined sections." },
      { n: "03", title: "Connect your brand", body: "Add logo, colors, fonts, and favicon." },
      { n: "04", title: "Import CMS content", body: "Reuse projects, team, company, and safety information." },
      { n: "05", title: "Preview and publish", body: "Review desktop/mobile appearance and publish approved changes." },
      { n: "06", title: "Connect your domain", body: "Verify DNS, activate SSL, and launch the website." },
    ],
  },
  outcomes: {
    headline: "A better website without starting from zero.",
    cards: [
      { n: "01", title: "Faster website launch", body: "Start from a complete construction-focused template." },
      { n: "02", title: "Less duplicated work", body: "Reuse information already managed inside Vertex CMS." },
      { n: "03", title: "Consistent company presentation", body: "Keep branding and project information organized across the public website." },
      { n: "04", title: "Connected lead capture", body: "Turn website inquiries into CRM leads." },
    ],
  },
  differentiator: {
    headline: "More than a website builder.",
    traditional: [
      "Blank canvas",
      "Manual project updates",
      "Separate portfolio management",
      "Separate contact leads",
      "Manual domain setup",
    ],
    vertex: [
      "Predefined construction templates",
      "Connected CMS information",
      "Integrated portfolio",
      "Website → CRM lead",
      "Guided domain + SSL workflow",
    ],
  },
  connectedWorkflows: {
    headline: "Website Builder connected to your business growth workflow.",
    body: "Keep your public website connected to CRM, lead capture, and customer portals across Vertex CMS.",
    cards: [
      { slug: "crm", category: BG_LABEL, title: "CRM", body: "Manage customer relationships connected to website inquiries." },
      { slug: "leads", category: BG_LABEL, title: "Leads", body: "Capture website inquiries as organized lead records." },
      { slug: "website-builder", category: BG_LABEL, title: "Website Builder", body: "Publish a construction company website connected to CMS data." },
      { slug: "customer-portals", category: BG_LABEL, title: "Customer Portals", body: "Give customers scoped access to project information." },
    ],
  },
  explore: {
    eyebrow: BG_LABEL,
    headline: "Build, connect, and grow from one platform.",
    body: "Connect website publishing with CRM, leads, and customer portals across your business growth workflows.",
    activeSlug: "website-builder",
    cards: [
      { slug: "crm", category: BG_LABEL, title: "CRM", body: "Manage opportunities, customer records, and pipeline visibility." },
      { slug: "leads", category: BG_LABEL, title: "Leads", body: "Capture and move new opportunities forward." },
      { slug: "website-builder", category: BG_LABEL, title: "Website Builder", body: "Publish a construction company website connected to CMS data." },
      { slug: "customer-portals", category: BG_LABEL, title: "Customer Portals", body: "Give owners and partners scoped access to project information." },
    ],
  },
  finalCta: {
    headline: "Put your construction business online without rebuilding everything from scratch.",
    supporting:
      "Choose a proven website system, connect the information already inside Vertex CMS, and publish a professional company website with a connected path to new leads.",
    primary: { label: "Explore Business Growth", href: GROWTH },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
  },
} as const;
