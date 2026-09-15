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
    bannerLabel: "Cookie consent",
    message:
      "We use cookies and similar technologies to support core site functionality and optional features. You can accept all, reject non-essential cookies, or manage your preferences.",
    acceptAll: "Accept All",
    rejectAll: "Reject All",
    manage: "Manage Preferences",
    preferencesTitle: "Cookie preferences",
    preferencesDescription:
      "Review and update the cookie categories supported on this site. Strictly necessary cookies remain active for core functionality.",
    save: "Save Preferences",
    cancel: "Cancel",
    saving: "Saving…",
    saved: "Your cookie preferences have been saved.",
    error: "We couldn't save your preferences. Please try again.",
    requiredLabel: "Always active",
    onLabel: "On",
    offLabel: "Off",
    demoHeading: "Demo controls",
    demoHelp:
      "Reset saved consent to test the first-visit banner, Accept All, Reject All, and Manage Preferences flows locally.",
    demoReset: "Reset consent (demo)",
    categories: {
      necessary: {
        name: "Strictly necessary",
        description:
          "Required for core site functionality such as security, session continuity, and storing your consent choice.",
      },
      functional: {
        name: "Functional",
        description:
          "Support optional site features and remembered settings when enabled. Specific technologies are documented in the Cookie Policy when approved.",
      },
      analytics: {
        name: "Analytics",
        description:
          "Help us understand site usage when enabled. Specific vendors and technologies are documented in the Cookie Policy when approved.",
      },
    },
  },
  legal: {
    eyebrow: "Legal",
    navigationAriaLabel: "Legal documents",
    onThisPage: "On this page",
    lastUpdated: "Last updated",
    version: "Version",
    metaPending: "To be provided",
    relatedHeading: "Legal",
    pendingBannerTitle: "Approved legal copy pending",
    pendingBannerBody:
      "This page presents the document structure only. Official legal copy will replace placeholder content once Vertex legal counsel publishes approved text.",
    localeNotice:
      "A Spanish translation will be published when approved legal copy is available. Document text below remains in English until then.",
    nav: {
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      dpa: "DPA",
      cookies: "Cookie Policy",
    },
    placeholderBadge: "Editable legal placeholder",
    cookiePreferencesHeading: "Cookie preferences",
    cookiePreferencesBody:
      "Manage your cookie choices using the same controls as the site cookie banner. Approved cookie categories will appear here when documented by legal counsel.",
    demoNoticeTitle: "Demo content — not final legal copy",
    demoNoticeBody:
      "The text below is sample legal-document content for visual design review only. It does not represent approved Vertex CMS terms, policies, or contractual obligations.",
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
    cookie: {
      ...en.cookie,
      bannerLabel: "Consentimiento de cookies",
      message:
        "Usamos cookies y tecnologías similares para la funcionalidad principal y funciones opcionales. Puede aceptar todas, rechazar las no esenciales o administrar sus preferencias.",
      acceptAll: "Aceptar todo",
      rejectAll: "Rechazar todo",
      manage: "Administrar preferencias",
      preferencesTitle: "Preferencias de cookies",
      preferencesDescription:
        "Revise y actualice las categorías de cookies admitidas en este sitio. Las cookies estrictamente necesarias permanecen activas.",
      save: "Guardar preferencias",
      cancel: "Cancelar",
      saving: "Guardando…",
      saved: "Sus preferencias de cookies se han guardado.",
      error: "No pudimos guardar sus preferencias. Inténtelo de nuevo.",
      requiredLabel: "Siempre activas",
      onLabel: "Activado",
      offLabel: "Desactivado",
      demoHeading: "Controles de demostración",
      demoHelp:
        "Restablezca el consentimiento guardado para probar el banner de primera visita y los flujos de aceptar, rechazar y administrar preferencias.",
      demoReset: "Restablecer consentimiento (demo)",
      categories: {
        necessary: {
          name: "Estrictamente necesarias",
          description:
            "Requeridas para la funcionalidad principal del sitio, como seguridad, continuidad de sesión y almacenamiento de su elección de consentimiento.",
        },
        functional: {
          name: "Funcionales",
          description:
            "Admiten funciones opcionales y ajustes recordados cuando están habilitadas. Las tecnologías específicas se documentarán en la Política de cookies cuando estén aprobadas.",
        },
        analytics: {
          name: "Analíticas",
          description:
            "Ayudan a comprender el uso del sitio cuando están habilitadas. Los proveedores y tecnologías específicos se documentarán en la Política de cookies cuando estén aprobados.",
        },
      },
    },
    legal: {
      ...en.legal,
      eyebrow: "Legal",
      navigationAriaLabel: "Documentos legales",
      onThisPage: "En esta página",
      lastUpdated: "Última actualización",
      version: "Versión",
      metaPending: "Por proporcionar",
      relatedHeading: "Legal",
      pendingBannerTitle: "Contenido legal aprobado pendiente",
      pendingBannerBody:
        "Esta página presenta únicamente la estructura del documento. Los Términos de Servicio oficiales reemplazarán el contenido provisional cuando el equipo legal de Vertex publique el texto aprobado.",
      localeNotice:
        "La traducción al español se publicará cuando exista contenido legal aprobado. El texto del documento permanece en inglés hasta entonces.",
      nav: {
        terms: "Términos de servicio",
        privacy: "Política de privacidad",
        dpa: "DPA",
        cookies: "Política de cookies",
      },
      placeholderBadge: "Marcador de posición legal",
      cookiePreferencesHeading: "Preferencias de cookies",
      cookiePreferencesBody:
        "Administre sus opciones de cookies con los mismos controles del banner del sitio. Las categorías aprobadas aparecerán aquí cuando el equipo legal las documente.",
      demoNoticeTitle: "Contenido demo — no es texto legal final",
      demoNoticeBody:
        "El texto siguiente es contenido de muestra para revisión visual únicamente. No representa términos, políticas u obligaciones contractuales aprobados de Vertex CMS.",
    },
  },
};

export type MarketingContent = typeof en;
