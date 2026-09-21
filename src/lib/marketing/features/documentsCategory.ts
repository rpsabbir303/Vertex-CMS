/**
 * Documents feature / Documents & Drawings category page.
 * Source: Register DOC (folders, documents, versions, current revision),
 * DWG (drawings, markups, current revision for field), TRANS (transmittals, items).
 * No e-sign, AI summarization, co-editing, OCR, or document approval claims.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

const FEATURE_LIBRARY = `${ROUTES.features}#features-library`;

export const documentsCategory = {
  id: "documents-project-information",
  meta: {
    title: "Documents | VertexBuild Features",
    description:
      "Centralize project documents, drawings, revisions, and transmittals in VertexBuild. Keep teams working from current information from the office to the field.",
    canonical: `${ROUTES.features}/documents`,
  },
  hero: {
    eyebrow: "Project Management",
    headline: "Keep every project document organized, current, and connected.",
    supporting:
      "Centralize project documents, drawings, revisions, and project records in one connected workspace. Give teams a reliable source of current information from the office to the field.",
    primary: { label: "Explore Feature Library", href: FEATURE_LIBRARY },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
    preview: "documentCenter" as PreviewKey,
  },
  center: {
    id: "document-center",
    eyebrow: "Document Management",
    headline: "One place for every project document.",
    body: "Keep specifications, contracts, reports, photos, permits, insurance records, RFIs, submittals, and other project files organized in a centralized document workspace.",
    points: [
      "Centralized project documents",
      "Organized folders",
      "Multiple document types",
      "Fast document search",
      "Project-level organization",
    ],
    cta: { label: "Explore Document Center", href: "#document-center" },
    preview: "documentCenter" as PreviewKey,
  },
  search: {
    id: "document-search",
    headline: "Find the information you need, without digging through folders.",
    body: "Search across project information and quickly locate documents by name, description, or drawing title. Keep information structured so teams can get to the right file when decisions need to be made.",
    preview: "documentSearch" as PreviewKey,
  },
  detail: {
    id: "document-detail",
    eyebrow: "Document Detail",
    headline: "See the complete record behind every file.",
    body: "Give teams the context they need with document information, current status, version history, revisions, and related project records in one place.",
    points: [
      "File information",
      "Version history",
      "Revision tracking",
      "Current document status",
      "Linked project records",
    ],
    cta: { label: "Explore Document Management", href: "#document-detail" },
    preview: "documentDetail" as PreviewKey,
  },
  versions: {
    id: "document-versions",
    headline: "Always know which version is current.",
    body: "Track document versions and revisions without losing the history behind them. When a new file is uploaded, the latest version becomes current while previous versions remain available for reference.",
    callout: "Latest becomes current. Previous versions stay available.",
    points: [
      "Current version control",
      "Complete revision history",
      "Change notes",
      "Previous versions remain accessible",
      "Teams work from the current revision",
    ],
    preview: "documentVersions" as PreviewKey,
  },
  drawings: {
    id: "drawings-register",
    eyebrow: "Drawings",
    headline: "Keep construction drawings current and easy to find.",
    body: "Manage project drawing sets, sheets, disciplines, and revisions from a centralized drawing register. Give field and office teams a clear view of the drawings that matter to the current project.",
    cta: { label: "Explore Drawings", href: `${ROUTES.features}/drawings` },
    preview: "drawingRegister" as PreviewKey,
  },
  viewer: {
    id: "drawing-viewer",
    headline: "View the current construction drawings wherever work happens.",
    body: "Give teams direct access to current construction drawings with a focused viewer experience designed for reviewing project information in the field and office.",
    preview: "drawingViewer" as PreviewKey,
  },
  markup: {
    id: "drawing-markup",
    eyebrow: "Collaboration",
    headline: "Mark up drawings without changing the original file.",
    body: "Add project annotations and markups directly to drawing sheets while keeping the original document intact. Make field observations and drawing discussions easier to communicate.",
    callout: "Non-destructive overlays. Original drawing unchanged.",
    cta: { label: "Explore Drawing Markup", href: `${ROUTES.features}/drawings` },
    preview: "drawingMarkup" as PreviewKey,
  },
  transmittals: {
    id: "transmittals",
    headline: "Share project information with a clear record.",
    body: "Send project documents and drawing items with a structured transmittal record that captures recipients, included items, purpose, and acknowledgement.",
    preview: "transmittal" as PreviewKey,
  },
  connected: {
    id: "connected-workflows",
    eyebrow: "Connected Workflows",
    headline: "Documents don't live in isolation.",
    body: "Connect project documents and drawings with the workflows that depend on them. Keep information connected across Projects, Drawings, RFIs, and Submittals.",
    cards: [
      {
        title: "Projects",
        body: "Connect documents to the project and its working context.",
        cta: "Explore Projects",
        href: `${ROUTES.features}/projects`,
      },
      {
        title: "Drawings",
        body: "Keep drawing sets and revisions connected to project information.",
        cta: "Explore Drawings",
        href: `${ROUTES.features}/drawings`,
      },
      {
        title: "RFIs",
        body: "Connect project questions and responses to the documents they reference.",
        cta: "Explore RFIs",
        href: `${ROUTES.features}/rfis`,
      },
      {
        title: "Submittals",
        body: "Keep submitted documents and review workflows connected.",
        cta: "Explore Submittals",
        href: `${ROUTES.features}/submittals`,
      },
    ],
  },
  howItWorks: {
    id: "how-it-works",
    headline: "Keep project information moving in three simple steps.",
    steps: [
      {
        n: "01",
        title: "Upload & Organize",
        body: "Add project files and organize them within the appropriate document structure.",
      },
      {
        n: "02",
        title: "Review & Update",
        body: "Track versions, revisions, and current documents as project information changes.",
      },
      {
        n: "03",
        title: "Access & Connect",
        body: "Give teams access to current information and connect documents to related project workflows.",
      },
    ],
    preview: "documentUpload" as PreviewKey,
  },
  outcomes: {
    id: "outcomes",
    headline: "A more reliable project information system.",
    cards: [
      {
        title: "Current Information",
        body: "Keep teams working from the latest approved document and revision.",
      },
      {
        title: "Less File Hunting",
        body: "Find project information quickly through structured organization and search.",
      },
      {
        title: "Complete History",
        body: "Keep previous versions and revision history available for reference.",
      },
      {
        title: "Connected Workflows",
        body: "Keep documents connected to drawings, RFIs, submittals, and project activity.",
      },
    ],
  },
  finalCta: {
    headline: "Keep every project document connected and current.",
    supporting:
      "Bring documents, drawings, revisions, and project workflows together in one connected platform.",
    primary: { label: "Explore Feature Library", href: FEATURE_LIBRARY },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
  },
} as const;
