# Summit Construction Group — Public Website

Public-facing marketing website for a **tenant construction company** powered by Vertex CMS.

This is a construction-company website — not a SaaS product landing page.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

Next.js 14 · TypeScript · Tailwind CSS · Manrope + Space Grotesk

## Home Page Sections

1. Header (sticky, EN | ES, Request a Bid)
2. Hero (full-width construction photography)
3. Company Introduction
4. Services (editorial list)
5. Featured Projects (CMS-ready)
6. Featured Project Story
7. Process / How We Work
8. Safety & Credentials
9. Team
10. Testimonials
11. Service Area
12. Request a Bid CTA
13. Footer

## CMS Data Architecture

Tenant content lives in `src/lib/website/tenantData.ts` (replace with CMS API).
Localized strings in `src/lib/website/content.ts` (EN / ES).

Components accept data props for loading, empty, and error states.
