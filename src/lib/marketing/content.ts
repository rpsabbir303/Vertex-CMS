export type MarketingLocale = "en" | "es";

const en = {
  meta: {
    title: "Vertex CMS | Construction Management Software",
    description:
      "Connect construction projects, financials, field operations, compliance and intelligence with Vertex CMS.",
  },
  header: {
    productFeatures: "Product / Features",
    solutions: "Solutions",
    pricing: "Pricing",
    resources: "Resources",
    company: "Company",
    login: "Login",
    bookDemo: "Book a Demo",
    startTrial: "Start Free Trial",
    exploreAllFeatures: "Explore All Features →",
  },
  hero: {
    eyebrow: "Vertex CMS · Construction Management SaaS",
    headline: "The Connected Operating Platform for Construction.",
    headlineLine2: "",
    supporting:
      "Bring project management, financials, field operations, compliance and intelligence together in one connected construction platform.",
    trust: ["Construction Management", "Native Accounting", "Mobile Field Operations", "AI Intelligence"],
    explore: "Explore the Platform →",
  },
  problem: {
    eyebrow: "The Challenge",
    headline: "Construction shouldn't feel this disconnected.",
    items: [
      {
        number: "01",
        title: "Disconnected Tools",
        description: "Project information lives across too many systems.",
      },
      {
        number: "02",
        title: "Delayed Financial Visibility",
        description: "Know project performance before problems become expensive.",
      },
      {
        number: "03",
        title: "Manual Processes",
        description: "Reduce repetitive work and disconnected workflows.",
      },
      {
        number: "04",
        title: "Operational Friction",
        description: "Keep office, field and financial teams working from the same information.",
      },
    ],
  },
  platform: {
    eyebrow: "Platform Overview",
    headline: "One platform. Every part of the construction operation.",
    supporting:
      "Connect the information, people and workflows that keep every project moving.",
    hubs: [
      "Project Management",
      "Financials",
      "Field Operations",
      "Compliance",
      "Workforce",
      "AI",
      "Portals",
      "Growth",
    ],
  },
  features: {
    eyebrow: "Capabilities",
    headline: "Core capability groups built for construction operations.",
    items: [
      {
        title: "Project Management",
        description: "Plan, coordinate and control every project.",
        href: "/features/project-management",
      },
      {
        title: "Financial Management",
        description: "Connect budgets, job cost, billing and accounting.",
        href: "/features/contracts-financials",
      },
      {
        title: "Field Operations",
        description: "Keep field teams connected with mobile-first workflows.",
        href: "/features/field-operations",
      },
      {
        title: "Compliance & Workforce",
        description: "Manage compliance, subcontractors and workforce requirements.",
        href: "/features/safety-compliance",
      },
      {
        title: "AI & Intelligence",
        description: "Turn project data into actionable insights.",
        href: "/features/ai-intelligence",
      },
      {
        title: "Growth",
        description: "Connect CRM, leads and website capabilities.",
        href: "/features",
      },
    ],
  },
  financials: {
    eyebrow: "Native Financials",
    headline: "Your construction financials. Built in.",
    supporting:
      "Connect project costs, accounting, billing and financial visibility without relying on disconnected systems.",
    flow: ["Project financial data", "Native accounting", "Real-time visibility", "Better decisions"],
    highlights: ["Job Cost", "Budget vs Actual", "WIP", "AIA Pay Applications", "General Ledger"],
  },
  field: {
    eyebrow: "Field + Mobile",
    headline: "From the office to the jobsite.",
    supporting:
      "Give field teams the tools they need to capture information, manage work and stay connected—even when connectivity is limited.",
    labels: ["Daily Logs", "Photos", "Drawings", "RFIs", "Punch", "Safety", "Timesheets"],
    offline: "Offline capability · Sync when connection returns",
  },
  ai: {
    eyebrow: "AI & Intelligence",
    headline: "Turn project data into better decisions.",
    supporting:
      "AI Assistant, predictive intelligence, and document intelligence—with human confirmation before any write or action.",
    flow: ["Project Data", "Vertex AI", "Insight / Recommendation", "Human Review", "Confirmed Action"],
    prompts: [
      "Ask about project status",
      "Find risks",
      "Summarize documents",
      "Draft communication",
      "Identify potential cost/schedule issues",
    ],
  },
  growth: {
    eyebrow: "Website + CRM",
    headline: "From first lead to active project.",
    supporting:
      "Connect website builder, CRM, and construction operations so growth flows into project delivery.",
    flow: ["Website", "Lead", "CRM", "Opportunity", "Project", "Financials", "Operations"],
  },
  socialProof: {
    eyebrow: "Social Proof",
    headline: "Trusted by construction teams",
    placeholder: "Customer logos will appear here when approved.",
  },
  testimonials: {
    eyebrow: "Testimonials",
    quote:
      "Vertex gave our teams one place to see what was happening across the project—from the field to the financials.",
    name: "Demo Client",
    role: "Director of Operations",
    company: "Sample Construction Co.",
    note: "Placeholder testimonial · not a real customer",
  },
  finalCta: {
    headline: "Ready to connect your construction operation?",
    supporting:
      "See how Vertex CMS can bring projects, financials, field operations and intelligence together.",
  },
  footer: {
    rights: "© Vertex Software",
    english: "English",
    spanish: "Español",
  },
  cookie: {
    message: "We use cookies to improve your experience and analyze site usage.",
    accept: "Accept",
    preferences: "Preferences",
    manage: "Manage Preferences",
  },
};

export const marketingContent: Record<MarketingLocale, typeof en> = {
  en,
  es: {
    ...en,
    meta: {
      title: "Vertex CMS | Software de Gestión de Construcción",
      description:
        "Conecte proyectos, finanzas, operaciones de campo, cumplimiento e inteligencia con Vertex CMS.",
    },
    header: {
      ...en.header,
      productFeatures: "Producto / Funciones",
      solutions: "Soluciones",
      pricing: "Precios",
      resources: "Recursos",
      company: "Empresa",
      login: "Iniciar sesión",
      bookDemo: "Reservar Demo",
      startTrial: "Prueba Gratuita",
      exploreAllFeatures: "Explorar Todas las Funciones →",
    },
    hero: {
      ...en.hero,
      eyebrow: "Vertex CMS · SaaS de Gestión de Construcción",
      headline: "La Plataforma Operativa Conectada para Construcción.",
      supporting:
        "Una plataforma conectada para gestión de proyectos, finanzas, campo, cumplimiento e inteligencia.",
      explore: "Explorar la Plataforma →",
    },
    problem: {
      ...en.problem,
      headline: "La construcción no debería sentirse tan desconectada.",
    },
    platform: {
      ...en.platform,
      headline: "Una plataforma. Cada parte de la operación de construcción.",
    },
    finalCta: {
      headline: "¿Listo para conectar su operación de construcción?",
      supporting: en.finalCta.supporting,
    },
    footer: {
      rights: "© Vertex Software",
      english: "English",
      spanish: "Español",
    },
  },
};

export type MarketingContent = typeof en;
