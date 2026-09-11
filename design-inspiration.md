# Design Inspiration & Visual Direction — Vertex CMS

> **Permanent reference for this project.**  
> Whenever a future Cursor Agent session begins a significant UI, marketing, or product-mockup design task, **read this file first** before making visual decisions.  
> **Project requirements and the existing design system always take priority** over external inspiration.

---

## Table of Contents

1. [Project Design Context](#1-project-design-context)
2. [SaaS Website Inspiration](#2-saas-website-inspiration)
3. [Enterprise Software Inspiration](#3-enterprise-software-inspiration)
4. [Construction SaaS Inspiration](#4-construction-saas-inspiration)
5. [CRM Inspiration](#5-crm-inspiration)
6. [Project Management Inspiration](#6-project-management-inspiration)
7. [AI Inspiration](#7-ai-inspiration)
8. [Dashboard Inspiration](#8-dashboard-inspiration)
9. [Mobile App Inspiration](#9-mobile-app-inspiration)
10. [Typography Inspiration](#10-typography-inspiration)
11. [Interaction & Animation Inspiration](#11-interaction--animation-inspiration)
12. [Product Presentation Inspiration](#12-product-presentation-inspiration)
13. [What Cursor Should Analyze](#13-what-cursor-should-analyze)
14. [Design Synthesis System](#14-design-synthesis-system)
15. [Avoid Generic AI-Generated Design](#15-avoid-generic-ai-generated-design)
16. [Page-Specific Workflow](#16-page-specific-workflow)
17. [Design Quality Checklist](#17-design-quality-checklist)
18. [Cursor Working Instructions](#18-cursor-working-instructions)

---

## 1. Project Design Context

### What this product is

**Vertex CMS** is a **B2B construction management SaaS platform** — a connected operating system for construction businesses. It is **software**, not a construction company.

Core promise (from `src/lib/marketing/content.ts`):

> *"The Connected Operating Platform for Construction."*

The platform connects:

| Domain | Examples |
|--------|----------|
| **Project management** | Projects, scheduling, documents, RFIs, submittals, change orders, punch |
| **Financial management** | Budget & job cost, native accounting, billing, AIA pay applications, WIP, cash flow |
| **Field operations** | Daily logs, drawings, T&M, safety, mobile |
| **Compliance & workforce** | Subcontractors, compliance, workforce, time, payroll readiness |
| **AI & intelligence** | AI Assistant, project intelligence, predictive insights, document intelligence, automation |
| **Business growth** | CRM, leads, website builder, customer portals |

This repository (`cms-website`) is primarily the **public marketing website** and **product UI storytelling layer**:

- Next.js 14 App Router, React 18, TypeScript, Tailwind CSS 3
- 100+ routes: marketing, features, solutions, auth, onboarding, conversion
- **200+ product mockup preview keys** wired through `FeatureProductPreview` → `ProductMockups.tsx`
- Dedicated flagship pages for major modules (CRM, AI Assistant, Website Builder, Customer Portals, etc.)

### Visual positioning (critical)

Communicate:

> **"Technology that helps construction businesses operate, manage, and grow."**

Do **not** communicate:

> *"A company that builds construction projects."*

**Primary visual hero = product UI** (dashboards, workflows, portals, mobile field screens).  
**Avoid** stock photography of hard hats, cranes, blueprints, and buildings used as decorative hero imagery.

### Target users

| Segment | Role / need |
|---------|-------------|
| **General contractors** | Connected project, financial, subcontractor, field management |
| **Specialty contractors** | Field, billing, workforce, operational workflows |
| **Owners / clients** | Project visibility, financial oversight, customer portals |
| **Project managers** | Unified project status, RFIs, submittals, schedule, documents |
| **Estimators** | Estimates, bids, estimate → budget |
| **Superintendents** | Mobile daily logs, drawings, safety, punch |
| **Controllers / accountants** | GL, AP/AR, pay apps, WIP, cash flow |
| **Safety teams** | Incidents, inspections, toolbox talks, corrective actions |
| **Executives** | Portfolio performance, financial visibility, AI intelligence |

### Product category

- Construction management software (CMMS-adjacent operations platform)
- Enterprise / mid-market **B2B SaaS**
- Adjacent: project management, ERP-lite financials, field ops, CRM, client portals

### Desired visual personality

| Attribute | Vertex CMS direction |
|-----------|---------------------|
| **Tone** | Confident, editorial, product-led, professional |
| **Density** | Information-rich but spacious — not cluttered |
| **Structure** | Strong hierarchy, thin technical borders, controlled radius |
| **Modes** | Light marketing pages + dark homepage OS (`.home-os`) + dark financial/AI sections |
| **Motion** | Subtle reveals and hovers — never flashy |
| **Data** | Realistic construction sample data (Riverside Medical Center, RFIs, pay apps) |

### Existing design system (mandatory)

Inspect before designing anything new:

#### Colors (`tailwind.config.js`)

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-navy` | `#08233F` | Headlines, dark sections, authority |
| `brand-orange` | `#FF6A00` | Primary CTA, eyebrows, accent |
| `brand-blue` | `#146EF5` | Links, secondary accent, labels |
| `brand-muted` | `#5B6B7C` | Body secondary text |
| `brand-line` | `#E6ECF3` | Borders, dividers |
| `brand-soft` | `#F5F8FC` | Light surfaces |
| `brand-dark` / `brand-black` | `#061525` | Dark sections, footer |
| `brand-panel` | `#0C243D` | Dark UI panels |
| `brand-cyan` / `brand-teal` / `brand-violet` | — | Hero node accents (homepage only) |

#### Typography (`src/app/layout.tsx`)

| Role | Font | Class |
|------|------|-------|
| Display / headlines | **Space Grotesk** | `.display-title`, `.display-title-light`, `font-display` |
| Body | **Manrope** | `.body-copy`, `font-sans` |

#### Layout & spacing (`globals.css`)

| Class | Behavior |
|-------|----------|
| `.site-shell` | `max-w-[1280px]`, responsive horizontal padding |
| `.section-spacing` | `py-16` → `py-32` at xl |
| `.section-spacing-lg` | Larger vertical rhythm for hero-scale sections |
| `.prose-width` | `max-w-[36rem]` for readable paragraphs |

#### Components (reuse first)

| Component | Path |
|-----------|------|
| Header / mega menu | `src/components/marketing/MarketingHeader.tsx`, `MegaMenu.tsx` |
| Footer | `src/components/marketing/MarketingFooter.tsx` |
| Scroll reveal | `src/components/Reveal.tsx` |
| Product previews | `src/components/marketing/features/FeatureProductPreview.tsx` |
| All mockups | `src/components/mockups/ProductMockups.tsx` |
| Feature pages | `src/components/marketing/features/*FeatureDetailPage.tsx` |
| Solutions | `src/components/marketing/solutions/` |
| Auth / onboarding | `src/components/auth/` |
| Navigation / CTAs | `src/lib/marketing/navigation.ts` |

#### Recurring page patterns

**Feature detail pages:**
- Hero: eyebrow + `display-title` + supporting + CTAs + `PreviewStage`
- Optional sticky nav (`top-[4.5rem]`, scroll-spy via `IntersectionObserver`)
- Alternating 2-column sections with product mockups
- Dark story sections (`bg-[#061525]`)
- Connected workflows cross-links + final navy CTA

**Solutions landing:**
- Solution map hero, finder tabs (business / project type / role)
- Role selector with live preview swap
- Capability matrix, platform category links

**Auth / onboarding:**
- Split navy panel + white form card (`AuthShell`)
- 4-step onboarding progress grid (`OnboardingShell`)

#### Buttons

| Class | Style |
|-------|-------|
| `.btn-primary` | Orange, uppercase, `rounded-sm`, hover gap expansion |
| `.btn-secondary` | White + border |
| `.btn-ghost` | Orange uppercase link-style |
| `.btn-home-primary` | Homepage dark variant |

#### Shadows

`shadow-product`, `shadow-card`, `shadow-soft`, `shadow-lift`, `shadow-glow`

#### Surface colors (recurring hardcoded)

- Light heroes: `#F7F9FC`, `#FAFBFD`, `#F4F7FB`
- Preview stage light gradient: `#E8EEF5` → `#F0F4F9` → `#E4EBF4`
- Preview stage dark gradient: `#061525` → `#0A1F35` → `#08233F`

---

## 2. SaaS Website Inspiration

Premium B2B SaaS marketing — study **patterns**, not pixels.

---

### Stripe

**URL:** https://stripe.com  
**Category:** Premium B2B SaaS / Financial infrastructure

**Study:**
- Information hierarchy for complex multi-product platforms
- Enterprise + developer dual-audience messaging
- Product section rhythm and modular storytelling
- Restrained use of accent color against white space
- Code/product proof embedded in marketing

**Why relevant:** Vertex CMS sells a complex connected platform (project + financial + field + AI). Stripe demonstrates how to make complexity feel navigable without dumbing down the product.

---

### Linear

**URL:** https://linear.app  
**Category:** Premium SaaS / Product management

**Study:**
- Product-as-hero (the interface *is* the marketing)
- Dark-mode sophistication and typographic discipline
- Focused positioning — one promise, deep proof
- Restrained motion; page feels like the product
- Negative letter-spacing on large headlines

**Why relevant:** Best reference for Vertex flagship feature pages (AI Assistant, Website Builder, Solutions) where product UI should dominate.

---

### Vercel

**URL:** https://vercel.com  
**Category:** Developer-grade SaaS marketing

**Study:**
- Grid-based layouts, sharp hierarchy
- Product-led hero with real interface fragments
- Performance-conscious design (fast, no bloat)
- Clean navigation and developer trust signals

**Why relevant:** Model for technical credibility and polished product presentation without enterprise heaviness.

---

### Notion

**URL:** https://notion.so  
**Category:** Productivity SaaS / Information architecture

**Study:**
- Modular section structure (scannable blocks)
- Calm whitespace and readable body copy
- Use-case segmentation without visual chaos
- Template/gallery patterns (analogous to Website Builder template gallery)

**Why relevant:** Vertex has many modules — Notion shows how to organize capability depth without overwhelming visitors.

---

### Mercury

**URL:** https://mercury.com  
**Category:** Premium fintech B2B SaaS

**Study:**
- Calm, monochromatic premium minimalism
- Native product screenshots (not dropped-in afterthoughts)
- Audience-specific copy (founders, not "small business")
- Warm minimalism vs. cold corporate

**Why relevant:** Financial modules (accounting, WIP, cash flow, pay apps) should feel trustworthy and premium like Mercury — using Vertex navy/orange, not Mercury's palette.

---

### Ramp

**URL:** https://ramp.com  
**Category:** B2B fintech / Operations SaaS

**Study:**
- Bold editorial headlines with disciplined layout
- Strong outcome-led sections
- Product proof integrated into narrative flow
- Confident CTA placement

**Why relevant:** Business Growth pages (CRM, Leads) and conversion flows benefit from Ramp's clarity and confidence.

---

### Attio

**URL:** https://attio.com  
**Category:** Modern CRM SaaS

**Study:**
- Contemporary CRM marketing aesthetic
- Refined card system and data-forward UI previews
- Startup-premium feel without template clutter

**Why relevant:** Direct reference for CRM and Leads feature pages.

---

### Framer

**URL:** https://www.framer.com  
**Category:** SaaS marketing / Motion craft

**Study:**
- Scroll-linked storytelling (use sparingly)
- Section transition quality
- When motion adds meaning vs. decoration

**Why relevant:** For flagship pages needing one signature motion moment — not site-wide parallax.

---

### Raycast

**URL:** https://www.raycast.com  
**Category:** Premium product UI marketing

**Study:**
- Dark-mode product presentation excellence
- Layered interface previews
- Developer-product polish

**Why relevant:** AI Assistant and dark financial mockup sections.

---

## 3. Enterprise Software Inspiration

---

### Datadog

**URL:** https://www.datadoghq.com  
**Category:** Enterprise observability / Operations platform

**Study:**
- Deep feature taxonomy without losing hierarchy
- Data visualization in marketing contexts
- Workflow diagrams connecting modules
- Enterprise trust and scale messaging

**Why relevant:** Vertex serves multi-module enterprise construction operations — Datadog models how to present platform breadth.

---

### Retool

**URL:** https://retool.com  
**Category:** Enterprise builder / Dashboard platform

**Study:**
- Dashboard and table presentation in marketing
- Filter and workflow UI patterns
- Builder-style product screenshots

**Why relevant:** Mockup patterns for admin-style project dashboards and configurable workflows.

---

### Atlassian

**URL:** https://www.atlassian.com  
**Category:** Enterprise collaboration / Project tools

**Study:**
- Multi-product platform navigation (Jira, Confluence, etc.)
- Role-based landing pages
- Enterprise buyer + team user dual messaging

**Why relevant:** Vertex is a multi-module platform — Atlassian's segmentation model applies to Features hub and Solutions role selector.

---

### HubSpot

**URL:** https://www.hubspot.com  
**Category:** Enterprise CRM / Growth platform

**Study:**
- Solution segmentation by business function
- Mega menu information architecture
- Growth funnel storytelling (awareness → conversion)

**Why relevant:** Business Growth module (CRM, Leads, Website Builder, Customer Portals) and Solutions finder tabs.

---

### Intercom

**URL:** https://www.intercom.com  
**Category:** B2B customer platform

**Study:**
- Role-based messaging (support, sales, marketing)
- Product tour and walkthrough patterns
- Benefit-led section structure

**Why relevant:** Customer Portals and client-facing experience positioning.

---

## 4. Construction SaaS Inspiration

**Important:** Study these as **software product** references — platform positioning, workflow UX, and product screenshots. Do **not** copy their construction stock imagery or generic industry clichés.

---

### Procore

**URL:** https://www.procore.com  
**Category:** Construction management platform (enterprise)

**Study:**
- Connected platform narrative (project lifecycle, financials, field)
- Module interconnection messaging
- Enterprise construction buyer language
- Product UI in marketing (not just lifestyle photography)
- AI agents positioned as construction-native

**Why relevant:** Category leader — understand what construction buyers expect from platform marketing. **Do not visually clone Procore.** Vertex must feel distinct (navy/orange, Space Grotesk, editorial mockups).

**Avoid copying:** Generic construction hero photography, orange-adjacent palette confusion, overly busy module grids.

---

### Buildertrend

**URL:** https://buildertrend.com  
**Category:** Residential construction management SaaS

**Study:**
- Residential builder workflow emphasis
- Client communication and homeowner portal patterns
- Onboarding and adoption messaging
- Simpler UX tone for smaller builders

**Why relevant:** Residential project type solution page and Customer Portals client-facing UI.

---

### Fieldwire (Autodesk)

**URL:** https://www.fieldwire.com  
**Category:** Field management / Jobsite software

**Study:**
- Field-first mobile UX patterns
- Task, drawing, and punch list presentation
- Jobsite → office connection narrative

**Why relevant:** `PhoneUI` mockups, Mobile feature page, superintendent role solution.

---

### Autodesk Construction Cloud

**URL:** https://construction.autodesk.com  
**Category:** Enterprise construction technology platform

**Study:**
- Platform ecosystem positioning (multiple products, one cloud)
- Document and drawing workflow presentation
- Enterprise trust and integration messaging

**Why relevant:** Documents, drawings, and submittals module storytelling — study information architecture, not branding.

---

## 5. CRM Inspiration

---

### HubSpot

**URL:** https://www.hubspot.com  
**Category:** CRM / Marketing / Sales platform

**Study:** Pipeline visualization, contact record layouts, growth funnel sections, solution segmentation.  
**Why relevant:** CRM and Leads feature pages (`crmDetail.ts`, `leadsDetail.ts`).

---

### Attio

**URL:** https://attio.com  
**Category:** Modern CRM SaaS

**Study:** Clean data tables, relationship views, modern CRM card design, premium startup aesthetic.  
**Why relevant:** CRM hero mockups (`CrmHeroUI`, `CrmWorkspaceUI`) should feel this polished.

---

### Salesforce

**URL:** https://www.salesforce.com  
**Category:** Enterprise CRM

**Study:** Enterprise CRM information density, role-based pages, trust and scale signals.  
**Why relevant:** Understand enterprise buyer expectations — simplify for Vertex marketing (do not copy Salesforce visual density).

---

## 6. Project Management Inspiration

---

### Asana

**URL:** https://asana.com  
**Category:** Project / Work management

**Study:** Role-based landing pages, workflow clarity, timeline and task visualization, team collaboration messaging.  
**Why relevant:** Project Manager role solution, scheduling feature page.

---

### monday.com

**URL:** https://monday.com  
**Category:** Work OS / Project management

**Study:** Workflow visualization, module color-coding (study **structure**, not their rainbow palette), use-case boards.  
**Why relevant:** Solutions workflow stages (Plan → Build → Control → Connect → Intelligence).

---

### Linear

**URL:** https://linear.app  
**Category:** Issue / Project tracking (see also §2)

**Study:** Issue lists, project views, keyboard-native density, sidebar navigation.  
**Why relevant:** Project dashboard mockups and PM role preview patterns.

---

## 7. AI Inspiration

Vertex CMS has documented AI capabilities: AI Assistant, Project Intelligence, Predictive Insights, Document Intelligence, Automation — with **human confirmation before writes** as a core differentiator.

---

### Anthropic

**URL:** https://www.anthropic.com  
**Category:** AI product / Enterprise AI

**Study:** Calm, trustworthy AI positioning; clarity over hype; restrained visual system; serious enterprise tone.  
**Why relevant:** AI feature pages must feel credible, not gimmicky — no generic "AI sparkle" aesthetics.

---

### Cursor

**URL:** https://cursor.com  
**Category:** AI developer product

**Study:** AI interaction patterns in product UI; chat + context presentation; dark product marketing.  
**Why relevant:** AI Assistant mockups (`AiHeroUI`, `AiWorkspaceUI`, `AiConfirmUI`).

---

### Notion AI

**URL:** https://www.notion.so/product/ai  
**Category:** AI embedded in productivity

**Study:** AI as integrated capability (not bolt-on), grounded context presentation, subtle AI labeling.  
**Why relevant:** "Grounded in project data" positioning for AI Assistant and Document Intelligence.

---

### Datadog (AI features)

**URL:** https://www.datadoghq.com  
**Category:** AI in enterprise observability

**Study:** AI insights as actionable signals; dashboard-embedded intelligence; signal → action UX.  
**Why relevant:** Predictive Insights and Project Intelligence mockups (`PredHeroUI`, `PiWorkspaceUI`).

---

## 8. Dashboard Inspiration

Study for `BrowserFrame`, `FeatureProductPreview`, KPI tiles, tables, and financial dark modules.

---

### Linear

**URL:** https://linear.app  
**Study:** Sidebar density, list rows, status pills, dark chrome, focused header.

### Datadog

**URL:** https://www.datadoghq.com  
**Study:** KPI cards, time-series charts, alert badges, filter bars, activity feeds.

### Mercury

**URL:** https://mercury.com  
**Study:** Financial dashboard calmness, ledger tables, transaction rows, trust through whitespace.

### Retool

**URL:** https://retool.com  
**Study:** Table + filter + action patterns, builder layouts, dense-but-readable admin UI.

### Ramp

**URL:** https://ramp.com  
**Study:** Spend dashboards, card-based KPIs, approval workflows.

### Dashboard elements checklist

| Element | Vertex CMS application |
|---------|------------------------|
| **Sidebar** | Module groups: Project, Financial, Field, Compliance, AI, Growth |
| **Header** | Project switcher, search, notifications, user menu |
| **KPI cards** | Budget %, open RFIs, schedule health, safety status |
| **Charts** | Budget vs actual, cash flow, WIP — one insight per chart |
| **Tables** | RFIs, submittals, leads, subs — sticky header, status pills |
| **Filters** | Project-scoped; primary filters exposed |
| **Search** | Cmd-K pattern in product narrative |
| **Notifications** | Grouped, actionable |
| **Settings** | Left nav sections, form grouping |
| **Responsive** | Sidebar → drawer; table → card stack |

**Tone:** Dark navy for financial/intelligence modules; light for documents/field; orange for primary actions only.

---

## 9. Mobile App Inspiration

Vertex field mobile is represented by `PhoneUI` (`home`, `log`, `capture` variants) in `ProductMockups.tsx`.

### Reference products

| Reference | URL | Study |
|-----------|-----|-------|
| **Linear (mobile)** | https://linear.app | List density, dark chrome, speed |
| **Fieldwire** | https://www.fieldwire.com | Jobsite task UI, drawings, punch |
| **Procore (mobile)** | https://www.procore.com | Field-to-office sync narrative |
| **Mercury (mobile)** | https://mercury.com | Premium mobile spacing and trust |
| **Apple HIG** | https://developer.apple.com/design/human-interface-guidelines/ | Touch targets (44pt), safe areas, type scale |

### Mobile patterns to analyze

| Pattern | Guideline |
|---------|-----------|
| **Navigation** | Project context always visible; bottom tabs for field (3–5 items) |
| **Onboarding** | Step progress (see `OnboardingProgress.tsx`); clear escape to demo |
| **Authentication** | Minimal fields, strong errors, MFA clarity (`AuthShell`) |
| **Dashboard** | Scannable in < 3 seconds — status, today's work, recent activity |
| **Cards** | One primary action; thin borders; realistic construction labels |
| **Lists** | Tappable rows, status pills, chevron affordance |
| **Forms** | Single column, inline validation, sticky submit |
| **Empty states** | Explain next action |
| **Loading** | Skeleton lists, not full-page spinners |
| **Touch** | 44px minimum targets; no hover-only interactions |

**Mockup rule:** Keep text legible at marketing scale; horizontal scroll only **inside** mockups, never at page level.

---

## 10. Typography Inspiration

Vertex uses **Space Grotesk** (display) + **Manrope** (body). Study these references for **scale and rhythm**, not font substitution.

| Reference | What to study |
|-----------|---------------|
| **Linear** | Large headlines (80–96px feel), negative tracking, light weight (~500) on display |
| **Stripe** | Typographic hierarchy as primary visual system; italic accent words |
| **Mercury** | Restrained scale, calm body, premium spacing |
| **Anthropic** | Serious, readable, no display gimmicks |

### Vertex type rules

| Element | Treatment |
|---------|-----------|
| Eyebrow | `.eyebrow` — 11px, uppercase, tracked, orange |
| H1 | `.display-title` — Space Grotesk, bold, tight tracking |
| H2 | `font-display text-3xl sm:text-4xl` — section headers |
| Body | `.body-copy` — Manrope, 16–18px, relaxed leading |
| UI labels | 9–11px uppercase tracked (`text-[10px] font-semibold uppercase tracking-[0.14em]`) |
| Paragraph width | Cap at ~36rem (`.prose-width` / `max-w-3xl`) |

---

## 11. Interaction & Animation Inspiration

Existing project animations — extend, do not replace:

| Pattern | Implementation |
|---------|----------------|
| Scroll reveal | `Reveal.tsx` — opacity + translateY, 750ms, `prefers-reduced-motion` safe |
| Hero zoom | `.hero-image-zoom` — subtle scale over 22s |
| Float | `animate-float`, `-slow`, `-delay` on mockup chips |
| Mega menu | `.mega-menu-enter` — 180ms translateY |
| Home sync | `.home-pulse-line`, `.home-sync-bar` |
| Sticky nav spy | `IntersectionObserver` with `rootMargin: "-20% 0px -55% 0px"` |
| Button hover | `.btn-primary` gap expansion; ghost arrow slide |

### References for motion discipline

| Reference | Study |
|-----------|-------|
| **Linear** | Minimal, purposeful transitions |
| **Stripe** | Subtle section entrance, no parallax overload |
| **Framer** | When scroll storytelling earns its complexity |

**Rules:** Motion communicates connection and state change — not decoration. Always respect `prefers-reduced-motion`.

---

## 12. Product Presentation Inspiration

Central pattern: **`PreviewStage` → `FeatureProductPreview` → `ProductMockups`**

### References

| Reference | Study |
|-----------|-------|
| **Linear** | Product IS the page — live-feeling UI in hero |
| **Stripe** | Browser-framed product sections, code + UI proof |
| **Mercury** | Native screenshots integrated into design system |
| **Raycast** | Layered dark UI previews |
| **Loom** | Product-as-demo (screen recording principle applied to static mockups) |

### Vertex mockup vocabulary

| Component | Usage |
|-----------|-------|
| `BrowserFrame` | Desktop app chrome with URL bar |
| `FeatureProductPreview` | Scaled, framed preview with 200+ `PreviewKey` map |
| `PhoneUI` | Mobile field app (`home`, `log`, `capture`) |
| `PreviewStage` | Marketing wrapper with gradient border + "Vertex CMS · {label}" |
| Mini UIs | `SolutionsProductUI.tsx` — compact solution-specific fragments |
| Layered cards | `LayeredProductCards` — overlapping depth for ecosystem sections |

### Product presentation rules

1. **Realistic data** — project names, RFIs, cost codes, pay apps
2. **Framed context** — browser or device chrome, not floating screenshots
3. **Module-appropriate chrome** — dark frames for financial/AI; light for field/portals
4. **Scale thoughtfully** — `FeatureProductPreview` uses controlled scale transforms
5. **No lorem ipsum** in UI labels

---

## 13. What Cursor Should Analyze

For every reference visited, document **patterns** (not screenshots to reproduce).

### Layout

- Grid system and column behavior at breakpoints
- Container max-width and horizontal padding rhythm
- Section structure (hero → proof → depth → social proof → CTA)
- Vertical alignment and asymmetric vs. symmetric compositions
- Visual rhythm between sections (spacing jumps, divider usage)

### Typography

- Display vs. body font pairing strategy
- Heading scale (H1 → H6 or equivalent)
- Weight distribution (where bold vs. medium vs. light)
- Line height and paragraph measure
- Letter-spacing on labels and headlines

### Color

- Background vs. surface vs. elevated surface hierarchy
- Primary, secondary, and accent role assignment
- Border color and weight
- Gradient usage (if any) — note restraint
- Dark mode section treatment

### Components

- Primary, secondary, ghost button anatomy
- Card padding, border, hover, and radius
- Input and form field styling
- Navigation (header, mega menu, mobile drawer, breadcrumbs)
- Tabs, pills, and segmented controls
- Table row density and status chips
- Modal and drawer patterns (if applicable)
- Badge and pill semantics

### Product presentation

- How dashboards appear in marketing (framed vs. full-bleed)
- Device mockup usage (browser, phone, layered)
- Annotation vs. clean UI
- Workflow and connected-system diagrams
- Before/after or state transition presentation

### Motion

- Scroll-triggered reveals
- Hover feedback duration and easing
- Tab/selector transitions
- Parallax (note if excessive)
- Micro-interactions on buttons and links
- Page load behavior

### Responsive design

- Desktop (1280px+), tablet (~768px), mobile (~375px) behavior
- Navigation collapse strategy
- Typography scaling
- Mockup stacking vs. scaling
- Table → card degradation
- Touch target sizing on mobile

---

## 14. Design Synthesis System

References are **not templates**.

### Never copy

- Exact layouts or section order from any reference
- Exact copy, headlines, or CTAs
- Exact illustrations, icons, or photography
- Exact components (buttons, cards, nav structures)
- Exact branding (colors, logos, typefaces from references)
- Exact animations or visual identity
- Another company's name, product names, or trade dress

### Instead, follow this process

1. **Study multiple references** (minimum 2–4 per page type)
2. **Identify underlying principles** — why does this pattern work?
3. **Select only patterns relevant** to the current page's purpose
4. **Combine ideas** from different sources (e.g., Stripe hierarchy + Linear product proof + Vertex tokens)
5. **Adapt to Vertex CMS brand** — navy, orange, Space Grotesk/Manrope, construction data
6. **Create original layout** — unique section compositions per page
7. **Validate against existing components** — reuse `PreviewStage`, `Reveal`, mockups before inventing new primitives

### Success criterion

The finished page should **not** make users think:

- *"This looks like Linear."*
- *"This looks like Stripe."*
- *"This looks like Procore."*
- *"This looks like an AI-generated SaaS template."*

It should feel like **Vertex CMS** — a premium construction management platform with its own visual language.

---

## 15. Avoid Generic AI-Generated Design

Every visual element must have a **purpose**. Explicitly avoid:

| Anti-pattern | Why it fails |
|--------------|--------------|
| Generic SaaS templates | Hero + 3 icons + testimonial + CTA — instant AI/template signal |
| Predictable hero layouts | Gradient blob + vague headline + "Get started free" |
| Excessive gradients | Purple/blue mesh backgrounds, "Stripe gradient" clones |
| Excessive glassmorphism | Frosted panels without functional reason |
| Random blobs and floating shapes | Decorative SVG noise |
| Unnecessary 3D elements | Skeuomorphic or WebGL decoration |
| Excessive rounded cards | Everything `rounded-3xl` / pill-shaped |
| Excessive shadows | Layered drop shadows on every element |
| Random animations | Bouncing cards, spinning loaders, gratuitous parallax |
| Huge meaningless headings | Display type without substance |
| Poor typography | Too many sizes, inconsistent weights, centered walls of text |
| Over-decoration | Icons that don't map to product capabilities |
| Template-like layouts | Identical section structure repeated 6+ times |
| Copying popular SaaS websites | Linear clone, Stripe clone, etc. |
| Construction company aesthetics | Hard hats, cranes, blueprints as hero backgrounds |
| Contractor / architecture portfolios | Wrong category entirely |
| Real estate websites | Wrong category |
| Fake social proof | Invented logos, unlabeled fake testimonials |
| Invented product capabilities | Features not in Master Feature Register / BRD |

---

## 16. Page-Specific Workflow

Use this workflow whenever designing a **new or redesigned page**.

### Phase 1 — Inspect the current project

- Read existing similar pages and shared components
- Check `tailwind.config.js`, `globals.css`, `navigation.ts`
- Identify reusable mockups in `ProductMockups.tsx`

### Phase 2 — Read this file

- `design-inspiration.md` — align with principles and anti-patterns

### Phase 3 — Understand page purpose

- Marketing? Feature depth? Solution segment? Auth? Mobile mockup?
- Who is the audience? What action should they take?

### Phase 4 — Identify relevant inspiration categories

- Map page type to sections 2–12 above

### Phase 5 — Analyze relevant references

- Use Section 13 checklist; note patterns only

### Phase 6 — Extract useful patterns

- Write 3–5 principles to apply (not layouts to copy)

### Phase 7 — Combine into a new visual direction

- Sketch section order and hierarchy before coding
- Plan which `PreviewKey` mockups to use

### Phase 8 — Create an original layout

- Varied compositions: 2-column, full-bleed mockup, dark split, workflow diagram, matrix
- Avoid repeating the same grid on every section

### Phase 9 — Match existing brand / design system

- Vertex tokens, typography, buttons, spacing, header/footer

### Phase 10 — Implement responsive behavior

- Desktop, tablet, mobile
- Mockup scaling/stacking; no page-level horizontal overflow

### Phase 11 — Add meaningful micro-interactions

- `Reveal` on sections, hover on buttons/cards, tab transitions
- Respect `prefers-reduced-motion`

### Phase 12 — Review against quality checklist

- Section 17 — complete every item before marking done

### Page type quick map

| Page type | Primary references | Vertex patterns to reuse |
|-----------|-------------------|--------------------------|
| Home | Stripe, Linear, Vercel | `.home-os`, `HomeHero`, dark sections |
| Feature detail | Linear, Datadog, Retool | `*FeatureDetailPage.tsx`, `PreviewStage`, sticky nav |
| Business Growth | HubSpot, Attio, Ramp | CRM/Leads/WB/Portals detail pages |
| Solutions | HubSpot, Asana, Procore (positioning only) | `SolutionsLandingPage`, finder tabs |
| AI features | Anthropic, Cursor, Datadog | Dark sections, grounded AI mockups |
| Financial features | Mercury, Ramp, Stripe | Dark `PreviewStage`, `accountingDashboard` previews |
| Field / mobile | Fieldwire, Linear mobile | `PhoneUI`, `MobileFeatureDetailPage` |
| Auth / onboarding | Stripe, Linear | `AuthShell`, `OnboardingShell` |
| Conversion | Ramp, Mercury | `ConversionShell` |

---

## 17. Design Quality Checklist

Complete before considering any design task done:

- [ ] **Is the page visually distinctive?** — Not a template clone
- [ ] **Is the product purpose immediately clear?** — Understandable in ~5 seconds
- [ ] **Is the hierarchy strong?** — One primary message per section
- [ ] **Is typography polished?** — Space Grotesk/Manrope, consistent scale
- [ ] **Is spacing consistent?** — `.site-shell`, `.section-spacing`, uniform card padding
- [ ] **Is the layout balanced?** — Grid-aligned, intentional asymmetry only
- [ ] **Is the design accessible?** — Contrast, focus rings, semantic headings, keyboard nav
- [ ] **Are interactions meaningful?** — Reveal, hover, tabs — not decorative noise
- [ ] **Does it feel premium?** — Refined borders, subtle shadows, no clutter
- [ ] **Does it feel like a real SaaS product?** — Realistic mockup data and workflows
- [ ] **Does it avoid generic AI aesthetics?** — No blobs, gradient meshes, template heroes
- [ ] **Does it avoid copying references?** — Original layout and copy
- [ ] **Does it match the Vertex CMS brand?** — Navy, orange, product-led mockups
- [ ] **Does it work on mobile?** — Stack order, tap targets, readable mockups
- [ ] **Does it work on tablet?** — Sensible column collapse
- [ ] **Does it work on desktop?** — Full layouts, generous whitespace
- [ ] **Is the UI production-ready?** — Working links (`ROUTES`, `CTAS`), no lorem ipsum
- [ ] **Is content accurate?** — Only documented capabilities; no invented features
- [ ] **Are CTAs correct?** — Contextual conversion paths per page type

---

## 18. Cursor Working Instructions

### This file's role

`design-inspiration.md` is the **permanent design inspiration and visual-direction reference** for the Vertex CMS website repository. It supplements — but does not override — the codebase itself.

### Required behavior for every design task

1. **Inspect the codebase first** — existing components beat new invention
2. **Read this file** — before significant UI decisions
3. **Do not modify this file** unless the user explicitly requests an update
4. **Reuse mockup infrastructure** — `ProductMockups.tsx`, `FeatureProductPreview`, `PreviewStage`, `PhoneUI`
5. **Reuse layout shells** — `MarketingHeader`, `MarketingFooter`, `Breadcrumbs`, `Reveal`
6. **Separate content from presentation** — copy lives in `src/lib/marketing/**`
7. **Use documented features only** — sourced from Master Feature Register / BRD
8. **Never invent social proof** — no fake logos or testimonials without explicit placeholder labeling

### Project stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| UI | React 18, TypeScript |
| Styling | Tailwind CSS 3, `globals.css` component classes |
| Fonts | Space Grotesk + Manrope via `next/font/google` |

### Key paths

```
src/components/marketing/     Marketing UI
src/components/mockups/       Product mockups (ProductMockups.tsx)
src/lib/marketing/            Content, navigation, features, solutions
src/components/auth/          Auth and onboarding
tailwind.config.js            Brand tokens
src/app/globals.css           Shared classes
```

### When in doubt

> Build like a **premium B2B SaaS company** marketing a **serious construction platform**. Product UI is the hero. Vertex navy and orange are the brand. Every section explains a **real workflow**. Construction sample data makes mockups believable. The page should answer: *what is this software, who is it for, and why is it connected?*

---

*Vertex CMS · cms-website · Design inspiration reference · Aligned with current design system, feature pages, solutions landing, Business Growth modules, AI pages, auth flows, and ProductMockups library.*
