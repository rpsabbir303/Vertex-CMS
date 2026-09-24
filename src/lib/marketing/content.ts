export type MarketingLocale = "en" | "es";

const en = {
  meta: {
    title: "VertexBuild | Construction Management Software",
    description:
      "Connect construction projects, financials, field operations, compliance and intelligence with VertexBuild.",
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
    eyebrow: "VertexBuild · Construction Management SaaS",
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
      "See how VertexBuild can bring projects, financials, field operations and intelligence together.",
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
  contact: {
    eyebrow: "Contact",
    headline: "Let's talk.",
    supporting:
      "Have a general question about VertexBuild or the company? Tell us what you need and we'll route your inquiry appropriately.",
    contextTitle: "General inquiries",
    contextBody:
      "Use this form for company and product questions that are not part of a dedicated demo or quote request. Our team will review your message and follow up.",
    salesGuidanceTitle: "Looking for sales resources?",
    salesGuidanceBody: "For a product walkthrough or pricing conversation, you can also use our dedicated journeys.",
    formTitle: "Send an inquiry",
    formSubtitle: "Share a few details and our team will route your message appropriately.",
    submit: "Send Inquiry",
    submitting: "Sending inquiry…",
    submitError: "We couldn't send your inquiry. Please check your connection and try again.",
    privacyNoticeBefore: "By submitting this form, you acknowledge that your information will be handled according to our",
    privacyNoticeLink: "Privacy Policy",
    privacyNoticeAfter: ".",
    salesDemoPrompt: "Looking for a demo?",
    salesQuotePrompt: "Need pricing information?",
    successEyebrow: "Contact",
    successTitle: "Inquiry received.",
    successBody:
      "Thanks for reaching out to VertexBuild. Your inquiry has been submitted successfully and will be routed appropriately.",
    successNextSteps:
      "Your message has been submitted successfully. If your inquiry is related to a product evaluation, you can also explore the available product and sales journeys below.",
    successSummaryTitle: "Submission summary",
    successSummaryInquiry: "Inquiry type",
    successSummaryCompany: "Company",
    successSummaryEmail: "Email",
    successInvalidEyebrow: "Contact",
    successInvalidTitle: "Start a new inquiry.",
    successInvalidBody: "Return to the Contact page to submit a general inquiry.",
    successInvalidCta: "Go to Contact",
    backHome: "Back to Home",
    exploreFeatures: "Explore Features",
    bookDemo: "Book a Demo",
    requestQuote: "Request a Quote",
    sendAnother: "Send another inquiry",
    backToCompany: "Company",
    successFlow: {
      input: "Input",
      received: "Received",
      system: "System",
    },
    fields: {
      name: "Full name",
      email: "Work email",
      company: "Company",
      phone: "Phone number",
      inquiryType: "Inquiry type",
      message: "Message",
      optional: "Optional",
      phoneHint: "Optional",
      messageHint: "Tell us what you're looking to accomplish.",
      selectInquiry: "Select inquiry type",
    },
    inquiryTypes: {
      general: "General Inquiry",
      product: "Product Question",
      sales: "Sales",
      other: "Other",
    },
    globalReach: {
      eyebrow: "Built to stay connected",
      headline: "One platform, wherever work happens.",
      supporting:
        "Keep projects, financials, field operations, and teams connected from wherever your business operates.",
      mapLabel: "Abstract visualization of connected cloud-based work — not a geographic coverage map.",
      flow: {
        project: "Connected project",
        field: "Field activity",
        financial: "Financial data",
        team: "Team visibility",
      },
    },
  },
  about: {
    eyebrow: "About",
  },
  careers: {
    hero: {
      eyebrow: "Careers",
      headline: "Build the future of construction software.",
      supporting:
        "Join a team building software that connects projects, financials, field operations, and intelligence in one platform.",
    },
    employerValue: {
      eyebrow: "Why VertexBuild",
      demoNotice: "Demo content — culture copy for UI review",
      storyHeadline: "Build software that solves real operational problems.",
      storyIntro:
        "How we approach building software at the intersection of product, technology, and real operational workflows.",
      principles: [
        {
          number: "01",
          sectionEyebrow: "01 / Culture",
          title: "Solve meaningful problems",
          lead: "Build software around real workflows and operational challenges that construction teams face every day. Meaningful work starts with understanding how projects, financials, and field operations connect in practice.",
          detail:
            "Product decisions are grounded in problems worth solving—not features for their own sake. The goal is software that changes how work gets done, not another tool on the shelf.",
        },
        {
          number: "02",
          sectionEyebrow: "02 / Culture",
          title: "Work across disciplines",
          lead: "Product, design, engineering, and domain knowledge come together to solve complex problems that no single discipline can address alone.",
          detail:
            "Collaboration spans from discovery through delivery, with each role contributing perspective on how the platform should work. Building VertexBuild requires thinking across the full product stack and the workflows it supports.",
        },
        {
          number: "03",
          sectionEyebrow: "03 / Culture",
          title: "Think in connected systems",
          lead: "Construction operations do not happen in isolation—projects, people, financials, and field work interact constantly.",
          detail:
            "Build experiences that reflect those connections instead of treating each capability as a separate tool. The platform is designed as one connected system where information flows between teams and workflows.",
        },
        {
          number: "04",
          sectionEyebrow: "04 / Culture",
          title: "Stay close to the customer problem",
          lead: "Understanding the workflow comes before proposing improvements. Stay oriented toward how teams actually operate, where friction appears, and what outcomes matter.",
          detail:
            "Product quality comes from clarity about the problem—not assumptions about what users need. Better workflows emerge when the problem is understood first.",
        },
      ],
    },
    companyNav: {
      eyebrow: "Company",
      headline: "Explore VertexBuild.",
      supporting: "Learn more about the company, the people behind the work, and how to get in touch.",
      navigationAriaLabel: "Company pages",
      currentPageSuffix: "current page",
      exploreLabel: "Explore",
      items: {
        about: { hint: "What we build and why it matters." },
        team: { hint: "The people behind the platform." },
        careers: { hint: "Culture and open roles." },
        contact: { hint: "Inquiries and how to reach us." },
      },
    },
    openPositions: {
      eyebrow: "Open positions",
      title: "Open positions",
      demoNotice: "Demo listings — sample roles for UI review, not real openings.",
      countSingular: "opportunity",
      countPlural: "opportunities",
      viewPosition: "View Position",
      applyNow: "Apply Now",
    },
    emptyState: {
      title: "No open positions right now.",
      body: "We're not currently listing open roles. Check back later for new opportunities.",
      contactLabel: "Contact",
    },
    cta: {
      eyebrow: "Interested in joining?",
      supporting: "See what we're building and explore current opportunities.",
      primaryLabel: "View Open Positions",
      primaryHref: "#open-positions",
      secondaryLabel: "Contact",
    },
    detail: {
      eyebrow: "Job Detail",
      backToCareers: "← Back to Careers",
      team: "Team",
      department: "Department",
      details: "Details",
      employmentType: "Employment type",
      location: "Location",
      workArrangement: "Work arrangement",
      aboutRole: "About the role",
      responsibilities: "What you'll work on",
      lookingFor: "What we're looking for",
      whyRole: "Why this role matters",
      applyHeadline: "Interested in this role?",
      applyDemoSupporting:
        "This is a sample vacancy for UI review. Applying here does not submit a real application.",
      applying: "Applying…",
      applyDemoSuccess: "Demo confirmation — no application was submitted.",
      applyError: "Unable to continue. Try again.",
      previousPosition: "Previous Position",
      nextPosition: "Next Position",
      requirements: "Requirements",
      backCta: "Back to Careers",
      demoNotice: "Demo listing — sample role for UI review",
      placeholderBody:
        "Full role details will be published on this page when Vertex provides approved vacancy content.",
      applyPending: "An application path has not been published for this role yet.",
      contentPending: "Approved content pending",
      notFoundTitle: "Position not found",
      notFoundBody: "The position you're looking for may no longer be available.",
      adjacentNav: "Other positions",
      contactCta: "Get in touch",
      viewAllRoles: "View all roles",
    },
    application: {
      pageEyebrow: "Apply",
      applyingFor: "Apply for this position",
      pageIntro: "Complete the form below to apply for this role at VertexBuild.",
      backToRole: "← Back to role",
      cancel: "Cancel",
      progressAria: "Application progress",
      stepApplication: "Your information",
      stepReview: "Review & submit",
      sectionCandidate: "Candidate information",
      sectionCandidateIntro: "Tell us how to reach you about this application.",
      sectionProfile: "Professional profile",
      sectionProfileIntro: "Share links to your professional presence if you would like.",
      sectionLinks: "Professional links",
      sectionExperience: "Professional experience",
      sectionExperienceIntro: "A brief summary of your recent roles helps our team review your application.",
      fieldCurrentRole: "Current role",
      fieldCurrentCompany: "Company",
      fieldYearsExperience: "Experience",
      fieldPreviousRole: "Previous role",
      fieldPreviousCompany: "Previous company",
      sectionCoverLetter: "Cover letter",
      sectionCoverLetterIntro: "Add context that complements your resume.",
      sectionResume: "Resume",
      sectionConsent: "Privacy & recruitment",
      fieldFullName: "Full name",
      fieldEmail: "Email",
      fieldPhone: "Phone",
      fieldLocation: "Location",
      fieldLinkedIn: "LinkedIn",
      fieldPortfolio: "Portfolio",
      fieldCoverLetter: "Cover letter",
      coverLetterHint: "You may include a short note about your interest in this role.",
      resumeLabel: "Resume",
      resumeEmptyTitle: "Add your resume",
      resumeEmptyHint: "Accepted formats: PDF, DOC, and DOCX.",
      resumeBrowse: "Browse files",
      resumeDragHint: "Or drag and drop your file here.",
      resumeUploading: "Uploading your file…",
      resumeScanning: "Verifying your file…",
      resumeValid: "Uploaded",
      resumeSecurityComplete: "Security check complete",
      resumeRemove: "Remove",
      resumeReplace: "Replace",
      resumeRetry: "Try again",
      resumeSecurityNote: "Files are checked for security before submission.",
      resumeFormats: "Accepted formats: {formats}.",
      resumeErrors: {
        unsupported_type: "Use PDF, DOC, or DOCX.",
        too_large: "This file exceeds the maximum allowed size.",
        empty: "The file appears to be empty.",
        corrupt: "This file could not be read. Try exporting a new copy.",
        scan_failed: "We could not verify this file. Try again or use a different file.",
        network: "Upload interrupted. Check your connection and try again.",
      },
      privacyConsentLabel: "I agree to the processing of my application information for recruitment purposes.",
      privacyLinkLabel: "Privacy Policy",
      vacancyTermsLabel: "I confirm that I am applying for the position shown above and that the information I provide is accurate.",
      reviewTitle: "Review your application before submitting.",
      reviewIntro: "Check your details below. You can edit any section before you submit.",
      reviewVacancy: "Vacancy",
      reviewCandidate: "Candidate",
      reviewLinks: "Links",
      reviewProfile: "Professional profile",
      reviewExperience: "Professional experience",
      reviewCoverLetter: "Cover letter",
      reviewResume: "Resume",
      reviewNotProvided: "Not provided",
      reviewConsent: "Consents",
      continueToReview: "Continue to review",
      submitApplication: "Submit application",
      submitting: "Submitting…",
      editSection: "Edit",
      errorSummaryTitle: "Please fix the following:",
      errorDuplicate:
        "An application for this vacancy already exists with this email address. If you need help, contact us instead of submitting again.",
      errorUnavailable: "This vacancy is no longer accepting applications. Your entered information is still here if you need to copy it.",
      errorGeneric: "We could not submit your application. Try again in a moment.",
      errorSession: "Your session may have expired. Review your details and submit again.",
      viewOpenRoles: "View open roles",
      contactUs: "Contact us",
      unavailableTitle: "This vacancy is not available",
      unavailableBody: "This role is closed, unpublished, or no longer accepting applications.",
      confirmationInvalidEyebrow: "Application",
      confirmationInvalidTitle: "Confirmation unavailable",
      confirmationInvalidBody: "Open an application from a vacancy page to reach this confirmation step.",
      confirmationInvalidCta: "View careers",
      confirmationEyebrow: "Application received",
      confirmationTitle: "Thank you for applying.",
      confirmationBody: "We received your application for the role below. Keep this reference for your records.",
      confirmationReference: "Reference",
      confirmationNext: "Our recruiting team will review your application. You may close this page.",
      confirmationBackToCareers: "Back to careers",
      confirmationViewRole: "View role details",
    },
  },
  security: {
    hero: {
      eyebrow: "Security & Trust",
      headline: "Security built into the platform.",
      supporting:
        "VertexBuild is designed with data protection, controlled access, compliance support, AI governance, and operational reliability in mind — so construction teams and enterprise reviewers can understand how the platform is intended to operate.",
    },
    overview: {
      eyebrow: "Trust overview",
      headline: "Security, privacy, compliance, AI governance, and reliability.",
      supporting:
        "A single trust model spans how data is protected, how access is controlled, which compliance workflows the product supports, how AI actions are governed, and how the platform is expected to recover from disruption.",
    },
    protection: {
      eyebrow: "Protection areas",
      headline: "Explore the trust model",
      navAria: "Security and trust destinations",
      exploreSuffix: "→",
    },
    explore: "Explore",
    dataProtection: { eyebrow: "Data protection" },
    accessSecurity: { eyebrow: "Access security" },
    compliance: {
      eyebrow: "Compliance",
      headline: "Compliance support, clearly labeled",
    },
    complianceKeyInfo: {
      eyebrow: "Key compliance information",
    },
    complianceCta: {
      title: "Need additional compliance information?",
      supporting:
        "Connect with the VertexBuild team for compliance-related evaluation questions and follow-up — for prospective customers, enterprise reviewers, and compliance stakeholders.",
    },
    aiGovernance: { eyebrow: "AI governance" },
    aiGovernanceHero: {
      primary: "Explore Security",
      secondary: "Contact Security",
    },
    aiGovernanceCta: {
      title: "Questions about AI governance?",
      supporting: "Contact the VertexBuild team for security and governance questions.",
      primary: "Contact Security",
      secondary: "Request a Demo",
    },
    reliability: { eyebrow: "Reliability / DR" },
    reliabilityHero: {
      primary: "Explore Security",
      secondary: "Contact Security",
    },
    reliabilityCta: {
      title: "Questions about reliability or recovery?",
      supporting: "Contact the VertexBuild team for security, reliability, and recovery questions.",
      primary: "Contact Security",
      secondary: "Request a Demo",
    },
    cta: {
      title: "Need additional security information?",
      supporting:
        "Connect with the VertexBuild team for security-related questions, evaluation support, or follow-up — for prospective customers, enterprise security reviewers, and authorized stakeholders.",
      note: "This contact path is for evaluation and sales inquiries — not for reporting security incidents.",
      primary: "Contact",
      secondary: "Book a Demo",
      tertiary: "Request Quote",
      legalHeading: "Related policies",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      dpa: "DPA",
      cookies: "Cookie Policy",
    },
    subpage: {
      back: "← Security & Trust",
    },
    pages: {
      hub: {
        nav: "Security & Trust",
        title: "Security built into the platform.",
        description:
          "VertexBuild is designed with data protection, controlled access, compliance support, AI governance, and operational reliability in mind — so construction teams and enterprise reviewers can understand how the platform is intended to operate.",
      },
      "data-protection": {
        nav: "Data Protection",
        title: "Data protection",
        description:
          "How tenant data is protected in transit and at rest, with isolation and handling patterns defined for the platform.",
      },
      "access-security": {
        nav: "Access Security",
        title: "Access security for every team and role.",
        description:
          "VertexBuild supports controlled access through identity, authentication, authorization, MFA, role-based access control, and applicable SSO/SCIM capabilities where documented.",
      },
      compliance: {
        nav: "Compliance",
        title: "Compliance designed into construction workflows.",
        description:
          "VertexBuild supports compliance-related workflows across privacy, accessibility, construction records, and workforce and safety requirements, while distinguishing product support from formal organizational certification.",
      },
      "ai-governance": {
        nav: "AI Governance",
        title: "AI governance built around human control.",
        description:
          "VertexBuild is designed so AI can assist with analysis, recommendations, and workflow actions while keeping consequential actions under explicit human control.",
      },
      reliability: {
        nav: "Reliability / DR",
        title: "Built for continuity, recovery, and resilience.",
        description:
          "VertexBuild is designed around resilient infrastructure, recovery planning, and operational continuity so construction teams can keep critical project information available when it matters.",
      },
      contact: {
        nav: "Security Contact",
        title: "Security contact",
        description:
          "Connect with VertexBuild for security-related evaluation questions and enterprise review follow-up.",
      },
    },
    related: {
      eyebrow: "Security & Trust",
      headline: "Explore the trust model",
      navAria: "Security and trust pages",
    },
    keyInfo: {
      eyebrow: "Key security information",
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
      "The text below is sample legal-document content for visual design review only. It does not represent approved VertexBuild terms, policies, or contractual obligations.",
  },
};

export const marketingContent: Record<MarketingLocale, typeof en> = {
  en,
  es: {
    ...en,
    meta: {
      title: "VertexBuild | Software de Gestión de Construcción",
      description:
        "Conecte proyectos, finanzas, operaciones de campo, cumplimiento e inteligencia con VertexBuild.",
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
      eyebrow: "VertexBuild · SaaS de Gestión de Construcción",
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
    contact: {
      ...en.contact,
      eyebrow: "Contacto",
      headline: "Hablemos.",
      supporting:
        "¿Tiene una pregunta general sobre VertexBuild o la empresa? Cuéntenos qué necesita y dirigiremos su consulta.",
      contextTitle: "Consultas generales",
      contextBody:
        "Use este formulario para preguntas sobre la empresa o el producto que no formen parte de una demo o cotización dedicada.",
      salesGuidanceTitle: "¿Busca recursos de ventas?",
      salesGuidanceBody: "Para una demostración del producto o una conversación sobre precios, también puede usar nuestros recorridos dedicados.",
      formTitle: "Enviar una consulta",
      formSubtitle: "Comparta algunos detalles y nuestro equipo dirigirá su mensaje adecuadamente.",
      submit: "Enviar consulta",
      submitting: "Enviando consulta…",
      submitError: "No pudimos enviar su consulta. Verifique su conexión e intente de nuevo.",
      privacyNoticeBefore: "Al enviar este formulario, reconoce que su información se manejará de acuerdo con nuestra",
      privacyNoticeLink: "Política de privacidad",
      privacyNoticeAfter: ".",
      salesDemoPrompt: "¿Busca una demo?",
      salesQuotePrompt: "¿Necesita información de precios?",
      successEyebrow: "Contacto",
      successTitle: "Consulta recibida.",
      successBody:
        "Gracias por contactar a VertexBuild. Su consulta se envió correctamente y será dirigida adecuadamente.",
      successNextSteps:
        "Su mensaje se envió correctamente. Si su consulta está relacionada con una evaluación del producto, también puede explorar los recorridos de producto y ventas disponibles a continuación.",
      successSummaryTitle: "Resumen del envío",
      successSummaryInquiry: "Tipo de consulta",
      successSummaryCompany: "Empresa",
      successSummaryEmail: "Correo",
      successInvalidEyebrow: "Contacto",
      successInvalidTitle: "Inicie una nueva consulta.",
      successInvalidBody: "Regrese a la página de Contacto para enviar una consulta general.",
      successInvalidCta: "Ir a Contacto",
      backHome: "Volver al inicio",
      exploreFeatures: "Explorar funciones",
      bookDemo: "Reservar demo",
      requestQuote: "Solicitar cotización",
      sendAnother: "Enviar otra consulta",
      backToCompany: "Empresa",
      successFlow: {
        input: "Entrada",
        received: "Recibido",
        system: "Sistema",
      },
      fields: {
        name: "Nombre completo",
        email: "Correo de trabajo",
        company: "Empresa",
        phone: "Teléfono",
        inquiryType: "Tipo de consulta",
        message: "Mensaje",
        optional: "Opcional",
        phoneHint: "Opcional",
        messageHint: "Cuéntenos qué desea lograr.",
        selectInquiry: "Seleccione el tipo de consulta",
      },
      inquiryTypes: {
        general: "Consulta general",
        product: "Pregunta sobre el producto",
        sales: "Ventas",
        other: "Otro",
      },
      globalReach: {
        eyebrow: "Diseñado para mantenerse conectado",
        headline: "Una plataforma, dondequiera que ocurra el trabajo.",
        supporting:
          "Mantenga proyectos, finanzas, operaciones de campo y equipos conectados desde donde opera su negocio.",
        mapLabel: "Visualización abstracta de trabajo conectado en la nube — no es un mapa de cobertura geográfica.",
        flow: {
          project: "Proyecto conectado",
          field: "Actividad de campo",
          financial: "Datos financieros",
          team: "Visibilidad del equipo",
        },
      },
    },
    about: {
      eyebrow: "Acerca de",
    },
    careers: {
      ...en.careers,
      hero: {
        eyebrow: "Carreras",
        headline: "Construya el futuro del software de construcción.",
        supporting:
          "Únase a un equipo que desarrolla software que conecta proyectos, finanzas, operaciones de campo e inteligencia en una plataforma.",
      },
      employerValue: {
        ...en.careers.employerValue,
        eyebrow: "Por qué VertexBuild",
        demoNotice: "Contenido demo — copy de cultura para revisión de UI",
        storyHeadline: "Construya software que resuelva problemas operativos reales.",
        storyIntro:
          "Cómo abordamos la construcción de software en la intersección de producto, tecnología y flujos de trabajo operativos reales.",
        principles: [
          {
            number: "01",
            sectionEyebrow: "01 / Cultura",
            title: "Resolver problemas significativos",
            lead: "Construya software en torno a flujos de trabajo reales y desafíos operativos que los equipos de construcción enfrentan cada día. El trabajo significativo comienza por entender cómo se conectan proyectos, finanzas y operaciones de campo en la práctica.",
            detail:
              "Las decisiones de producto se basan en problemas que valen la pena resolver—no en funciones por sí solas. El objetivo es software que cambie cómo se hace el trabajo, no otra herramienta más.",
          },
          {
            number: "02",
            sectionEyebrow: "02 / Cultura",
            title: "Trabajar entre disciplinas",
            lead: "Producto, diseño, ingeniería y conocimiento del dominio se unen para resolver problemas complejos que ninguna disciplina puede abordar sola.",
            detail:
              "La colaboración abarca desde el descubrimiento hasta la entrega, con cada rol aportando perspectiva sobre cómo debe funcionar la plataforma. Construir VertexBuild requiere pensar en todo el stack de producto y los flujos de trabajo que soporta.",
          },
          {
            number: "03",
            sectionEyebrow: "03 / Cultura",
            title: "Pensar en sistemas conectados",
            lead: "Las operaciones de construcción no ocurren aisladas—proyectos, personas, finanzas y trabajo de campo interactúan constantemente.",
            detail:
              "Cree experiencias que reflejen esas conexiones en lugar de tratar cada capacidad como una herramienta separada. La plataforma está diseñada como un sistema conectado donde la información fluye entre equipos y flujos de trabajo.",
          },
          {
            number: "04",
            sectionEyebrow: "04 / Cultura",
            title: "Mantenerse cerca del problema del cliente",
            lead: "Comprender el flujo de trabajo precede a proponer mejoras. Manténgase orientado hacia cómo operan realmente los equipos, dónde aparece la fricción y qué resultados importan.",
            detail:
              "La calidad del producto proviene de la claridad sobre el problema—no de suposiciones sobre lo que los usuarios necesitan. Surgen mejores flujos de trabajo cuando el problema se entiende primero.",
          },
        ],
      },
      companyNav: {
        ...en.careers.companyNav,
        eyebrow: "Empresa",
        headline: "Explore VertexBuild.",
        supporting: "Conozca más sobre la empresa, las personas detrás del trabajo y cómo ponerse en contacto.",
        navigationAriaLabel: "Páginas de la empresa",
        currentPageSuffix: "página actual",
        exploreLabel: "Explorar",
        items: {
          about: { hint: "Qué construimos y por qué importa." },
          team: { hint: "Las personas detrás de la plataforma." },
          careers: { hint: "Cultura y roles abiertos." },
          contact: { hint: "Consultas y cómo contactarnos." },
        },
      },
      openPositions: {
        ...en.careers.openPositions,
        eyebrow: "Posiciones abiertas",
        title: "Posiciones abiertas",
        demoNotice: "Listados demo — roles de muestra para revisión de UI, no vacantes reales.",
        countSingular: "oportunidad",
        countPlural: "oportunidades",
        viewPosition: "Ver posición",
        applyNow: "Aplicar ahora",
      },
      emptyState: {
        title: "No hay posiciones abiertas en este momento.",
        body: "Actualmente no listamos roles abiertos. Vuelva más tarde para nuevas oportunidades.",
        contactLabel: "Contacto",
      },
      cta: {
        ...en.careers.cta,
        eyebrow: "¿Interesado en unirse?",
        supporting: "Vea lo que estamos construyendo y explore las oportunidades actuales.",
        primaryLabel: "Ver posiciones abiertas",
        secondaryLabel: "Contacto",
      },
      detail: {
        ...en.careers.detail,
        eyebrow: "Detalle del puesto",
        backToCareers: "← Volver a Carreras",
        team: "Equipo",
        department: "Departamento",
        details: "Detalles",
        employmentType: "Tipo de empleo",
        location: "Ubicación",
        workArrangement: "Modalidad de trabajo",
        aboutRole: "Sobre el rol",
        responsibilities: "En qué trabajarás",
        lookingFor: "Qué buscamos",
        whyRole: "Por qué importa este rol",
        applyHeadline: "¿Te interesa este rol?",
        applyDemoSupporting:
          "Esta es una vacante de muestra para revisión de UI. Solicitar aquí no envía una postulación real.",
        applying: "Solicitando…",
        applyDemoSuccess: "Confirmación demo — no se envió ninguna postulación.",
        applyError: "No se pudo continuar. Inténtelo de nuevo.",
        previousPosition: "Posición anterior",
        nextPosition: "Siguiente posición",
        requirements: "Requisitos",
        backCta: "Volver a Carreras",
        demoNotice: "Listado demo — rol de muestra para revisión de UI",
        placeholderBody:
          "Los detalles completos del rol se publicarán en esta página cuando Vertex proporcione contenido aprobado.",
        applyPending: "Aún no se ha publicado una vía de solicitud para este rol.",
        contentPending: "Contenido aprobado pendiente",
        notFoundTitle: "Posición no encontrada",
        notFoundBody: "La posición que busca puede que ya no esté disponible.",
        adjacentNav: "Otras posiciones",
        contactCta: "Ponerse en contacto",
        viewAllRoles: "Ver todos los roles",
      },
      application: {
        ...en.careers.application,
        pageEyebrow: "Solicitar",
        applyingFor: "Solicitar este puesto",
        pageIntro: "Complete el formulario para postularse a este rol en VertexBuild.",
        backToRole: "← Volver al rol",
        cancel: "Cancelar",
        stepApplication: "Su información",
        stepReview: "Revisar y enviar",
        continueToReview: "Continuar a revisión",
        submitApplication: "Enviar solicitud",
        submitting: "Enviando…",
        confirmationTitle: "Gracias por postularse.",
        confirmationBackToCareers: "Volver a Carreras",
      },
    },
    security: {
      ...en.security,
      hero: {
        eyebrow: "Seguridad y confianza",
        headline: "Seguridad integrada en la plataforma.",
        supporting:
          "VertexBuild está diseñado con protección de datos, acceso controlado, soporte de cumplimiento, gobernanza de IA y fiabilidad operativa — para que equipos de construcción y revisores empresariales entiendan cómo se prevé que opere la plataforma.",
      },
      overview: {
        eyebrow: "Panorama de confianza",
        headline: "Seguridad, privacidad, cumplimiento, gobernanza de IA y fiabilidad.",
        supporting:
          "Un único modelo de confianza abarca cómo se protegen los datos, cómo se controla el acceso, qué flujos de cumplimiento admite el producto, cómo se gobiernan las acciones de IA y cómo se espera que la plataforma se recupere ante interrupciones.",
      },
      protection: {
        eyebrow: "Áreas de protección",
        headline: "Explore el modelo de confianza",
        navAria: "Destinos de seguridad y confianza",
        exploreSuffix: "→",
      },
      explore: "Explorar",
      dataProtection: { eyebrow: "Protección de datos" },
      accessSecurity: { eyebrow: "Seguridad de acceso" },
      compliance: {
        eyebrow: "Cumplimiento",
        headline: "Soporte de cumplimiento, claramente etiquetado",
      },
      complianceKeyInfo: {
        eyebrow: "Información clave de cumplimiento",
      },
      complianceCta: {
        title: "¿Necesita información adicional de cumplimiento?",
        supporting:
          "Conéctese con el equipo de VertexBuild para preguntas de evaluación relacionadas con cumplimiento — para clientes potenciales, revisores empresariales y partes interesadas en cumplimiento.",
      },
      aiGovernance: { eyebrow: "Gobernanza de IA" },
      aiGovernanceHero: {
        primary: "Explorar seguridad",
        secondary: "Contacto de seguridad",
      },
      aiGovernanceCta: {
        title: "¿Preguntas sobre gobernanza de IA?",
        supporting: "Contacte al equipo de VertexBuild para preguntas de seguridad y gobernanza.",
        primary: "Contacto de seguridad",
        secondary: "Solicitar demo",
      },
      reliability: { eyebrow: "Fiabilidad / DR" },
      reliabilityHero: {
        primary: "Explorar seguridad",
        secondary: "Contacto de seguridad",
      },
      reliabilityCta: {
        title: "¿Preguntas sobre fiabilidad o recuperación?",
        supporting: "Contacte al equipo de VertexBuild para preguntas de seguridad, fiabilidad y recuperación.",
        primary: "Contacto de seguridad",
        secondary: "Solicitar demo",
      },
      cta: {
        title: "¿Necesita información de seguridad adicional?",
        supporting:
          "Conéctese con el equipo de VertexBuild para preguntas de seguridad, apoyo en evaluaciones o seguimiento — para clientes potenciales, revisores de seguridad empresarial y partes autorizadas.",
        note: "Esta vía es para evaluación y consultas comerciales — no para reportar incidentes de seguridad.",
        primary: "Contacto",
        secondary: "Reservar demo",
        tertiary: "Solicitar cotización",
        legalHeading: "Políticas relacionadas",
        privacy: "Política de privacidad",
        terms: "Términos de servicio",
        dpa: "DPA",
        cookies: "Política de cookies",
      },
      subpage: {
        back: "← Seguridad y confianza",
      },
      pages: {
        hub: {
          nav: "Seguridad y confianza",
          title: "Seguridad integrada en la plataforma.",
          description:
            "VertexBuild está diseñado con protección de datos, acceso controlado, soporte de cumplimiento, gobernanza de IA y fiabilidad operativa — para que equipos de construcción y revisores empresariales entiendan cómo se prevé que opere la plataforma.",
        },
        "data-protection": {
          nav: "Protección de datos",
          title: "Protección de datos",
          description:
            "Cómo se protegen los datos del tenant en tránsito y en reposo, con patrones de aislamiento y manejo definidos para la plataforma.",
        },
        "access-security": {
          nav: "Seguridad de acceso",
          title: "Seguridad de acceso para cada equipo y rol.",
          description:
            "VertexBuild admite acceso controlado mediante identidad, autenticación, autorización, MFA, control de acceso basado en roles y capacidades SSO/SCIM aplicables donde esté documentado.",
        },
        compliance: {
          nav: "Cumplimiento",
          title: "Cumplimiento diseñado en los flujos de construcción.",
          description:
            "VertexBuild admite flujos relacionados con cumplimiento en privacidad, accesibilidad, registros de construcción y requisitos de fuerza laboral y seguridad, distinguiendo el soporte del producto de la certificación organizacional formal.",
        },
        "ai-governance": {
          nav: "Gobernanza de IA",
          title: "Gobernanza de IA basada en control humano.",
          description:
            "VertexBuild está diseñado para que la IA pueda ayudar con análisis, recomendaciones y acciones de flujo de trabajo, manteniendo las acciones consecuentes bajo control humano explícito.",
        },
        reliability: {
          nav: "Fiabilidad / DR",
          title: "Diseñado para continuidad, recuperación y resiliencia.",
          description:
            "VertexBuild está diseñado en torno a infraestructura resiliente, planificación de recuperación y continuidad operativa para que los equipos de construcción mantengan disponible la información crítica del proyecto cuando importa.",
        },
        contact: {
          nav: "Contacto de seguridad",
          title: "Contacto de seguridad",
          description:
            "Conéctese con VertexBuild para preguntas de evaluación de seguridad y seguimiento de revisiones empresariales.",
        },
      },
      related: {
        eyebrow: "Seguridad y confianza",
        headline: "Explore el modelo de confianza",
        navAria: "Páginas de seguridad y confianza",
      },
      keyInfo: {
        eyebrow: "Información de seguridad clave",
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
        "El texto siguiente es contenido de muestra para revisión visual únicamente. No representa términos, políticas u obligaciones contractuales aprobados de VertexBuild.",
    },
  },
};

export type MarketingContent = typeof en;
