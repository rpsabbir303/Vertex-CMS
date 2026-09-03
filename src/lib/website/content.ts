import type { Locale } from "./tenantData";

type Content = {
  nav: Record<string, string>;
  hero: {
    eyebrow: string;
    headline: string;
    headlineLine2: string;
    supporting: string;
    credibility: string;
    ctaPrimary: string;
    ctaSecondary: string;
    metaProjectTypes: string;
    metaServiceArea: string;
    metaEstablished: string;
    metaProjectsDelivered: string;
    scrollExplore: string;
  };
  companyIntro: {
    eyebrow: string;
    headline: string;
    headlineLine2: string;
    paragraph: string;
    cta: string;
  };
  services: {
    eyebrow: string;
    headline: string;
    headlineLine2: string;
    intro: string;
    viewService: string;
    items: Record<string, { title: string; description: string }>;
  };
  projects: {
    eyebrow: string;
    headline: string;
    supporting: string;
    viewProject: string;
    viewAll: string;
  };
  projectStory: {
    eyebrow: string;
    storyLead: string;
    viewDetails: string;
    projectType: string;
    location: string;
    status: string;
    scope: string;
  };
  process: {
    eyebrow: string;
    headline: string;
    steps: Record<string, { title: string; description: string }>;
  };
  safety: {
    eyebrow: string;
    headline: string;
    supporting: string;
  };
  team: {
    eyebrow: string;
    headline: string;
    headlineLine2: string;
    supporting: string;
  };
  testimonials: {
    eyebrow: string;
    headline: string;
  };
  serviceArea: {
    eyebrow: string;
    headline: string;
  };
  cta: {
    headline: string;
    supporting: string;
    primary: string;
    secondary: string;
  };
  footer: {
    company: string;
    projects: string;
    trust: string;
    contact: string;
    legal: string;
    featuredProjects: string;
    allProjects: string;
    portfolio: string;
    testimonials: string;
    certifications: string;
    safetyQuality: string;
    contactUs: string;
    requestBid: string;
    serviceArea: string;
    rights: string;
  };
  pages: {
    about: { title: string; description: string; placeholder: string };
    services: { title: string; description: string; placeholder: string };
    projects: { title: string; description: string; placeholder: string; featured: string; categories: string; allProjects: string };
    team: { title: string; description: string; placeholder: string };
    testimonials: { title: string; description: string; placeholder: string };
    certifications: { title: string; description: string; placeholder: string };
    contact: { title: string; description: string; contactInfo: string; requestBid: string };
    projectDetail: { placeholder: string; backToProjects: string; projectType: string; location: string; status: string; scope: string };
    notFound: { title: string; description: string; backHome: string; viewProjects: string };
  };
  requestBid: {
    success: string;
    error: string;
  };
};

const en: Content = {
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    team: "Team",
    contact: "Contact",
    requestBid: "Request a Bid",
  },
  hero: {
    eyebrow: "General Contractor · Commercial · Civil · Residential",
    headline: "Building With Purpose.",
    headlineLine2: "Delivering With Precision.",
    supporting:
      "We bring experienced teams, disciplined project management, and a commitment to quality and safety to every project we build.",
    credibility: "From preconstruction through closeout.",
    ctaPrimary: "Request a Bid",
    ctaSecondary: "View Our Projects",
    metaProjectTypes: "Project Types",
    metaServiceArea: "Service Area",
    metaEstablished: "Established",
    metaProjectsDelivered: "Projects Delivered",
    scrollExplore: "Scroll to explore",
  },
  companyIntro: {
    eyebrow: "Who We Are",
    headline: "Built on Experience.",
    headlineLine2: "Driven by Accountability.",
    paragraph:
      "Every project begins with a clear plan, experienced people, and a commitment to doing the work right. We work closely with owners, architects, subcontractors, and project teams to deliver projects with confidence from planning through completion.",
    cta: "About Our Company",
  },
  services: {
    eyebrow: "What We Do",
    headline: "Construction Expertise",
    headlineLine2: "for Every Stage of the Project.",
    intro:
      "From early planning to final closeout, our team brings the experience and coordination needed to move complex projects forward.",
    viewService: "View Service",
    items: {
      commercial: {
        title: "Commercial Construction",
        description: "Office, retail, hospitality, and institutional projects built with disciplined execution.",
      },
      preconstruction: {
        title: "Preconstruction",
        description: "Planning, estimating, value engineering, and early project strategy.",
      },
      civil: {
        title: "Civil & Infrastructure",
        description: "Site work, utilities, paving, and infrastructure delivered with precision.",
      },
      renovation: {
        title: "Renovation & Remodeling",
        description: "Occupied and active-environment renovations with careful phasing and coordination.",
      },
      "tenant-improvements": {
        title: "Tenant Improvements",
        description: "Fast-track interior build-outs for commercial and corporate tenants.",
      },
      "construction-management": {
        title: "Construction Management",
        description: "Owner representation, scheduling, cost control, and project leadership.",
      },
    },
  },
  projects: {
    eyebrow: "Selected Work",
    headline: "Projects That Speak for Themselves.",
    supporting:
      "Explore a selection of projects delivered by our team across commercial, civil, residential, and specialized construction.",
    viewProject: "View Project",
    viewAll: "View All Projects",
  },
  projectStory: {
    eyebrow: "Featured Project",
    storyLead: "Built for the future of work.",
    viewDetails: "View Project Details",
    projectType: "Project Type",
    location: "Location",
    status: "Status",
    scope: "Scope",
  },
  process: {
    eyebrow: "How We Work",
    headline: "From First Plan to Final Walkthrough.",
    steps: {
      preconstruction: {
        title: "Preconstruction",
        description: "Planning, estimating, coordination, and early project strategy.",
      },
      procurement: {
        title: "Procurement",
        description: "Subcontractor, material, and project coordination.",
      },
      construction: {
        title: "Construction",
        description: "Field execution, project management, scheduling, and quality.",
      },
      "safety-quality": {
        title: "Safety & Quality",
        description: "Continuous safety, quality control, inspections, and compliance.",
      },
      closeout: {
        title: "Closeout",
        description: "Documentation, final completion, warranties, and handover.",
      },
    },
  },
  safety: {
    eyebrow: "Safety & Quality",
    headline: "Safety Is Part of Every Project.",
    supporting:
      "We believe strong projects begin with strong safety practices, clear accountability, and disciplined execution.",
  },
  team: {
    eyebrow: "Our People",
    headline: "Experienced People.",
    headlineLine2: "Committed to the Work.",
    supporting:
      "Our projects are delivered by people who understand that construction is built on communication, accountability, and trust.",
  },
  testimonials: {
    eyebrow: "Clients & Partners",
    headline: "Trusted by the People We Build With.",
  },
  serviceArea: {
    eyebrow: "Where We Build",
    headline: "Serving Projects Across Texas.",
  },
  cta: {
    headline: "Have a Project in Mind?",
    supporting: "Tell us about your next project and our team will be in touch.",
    primary: "Request a Bid",
    secondary: "Contact Our Team",
  },
  footer: {
    company: "Company",
    projects: "Projects",
    trust: "Trust",
    contact: "Contact",
    legal: "Legal",
    featuredProjects: "Featured Projects",
    allProjects: "All Projects",
    portfolio: "Portfolio",
    testimonials: "Testimonials",
    certifications: "Certifications",
    safetyQuality: "Safety & Quality",
    contactUs: "Contact Us",
    requestBid: "Request a Bid",
    serviceArea: "Service Area",
    rights: "All rights reserved.",
  },
  pages: {
    about: {
      title: "About Us",
      description:
        "Learn about our company, experience, approach, and commitment to quality construction.",
      placeholder: "About page content will be designed next.",
    },
    services: {
      title: "Our Services",
      description: "Explore the construction services and capabilities offered by our team.",
      placeholder: "Services page content will be designed next.",
    },
    projects: {
      title: "Our Projects",
      description: "Explore selected projects delivered by our team.",
      placeholder: "Projects page content will be designed next.",
      featured: "Featured Projects",
      categories: "Project Categories",
      allProjects: "All Projects",
    },
    team: {
      title: "Our Team",
      description: "Meet the people behind our projects.",
      placeholder: "Team page content will be designed next.",
    },
    testimonials: {
      title: "Client Testimonials",
      description: "See what clients and partners say about working with us.",
      placeholder: "Testimonials page content will be designed next.",
    },
    certifications: {
      title: "Certifications & Credentials",
      description:
        "Explore our professional credentials, certifications, and commitment to quality and safety.",
      placeholder: "Certifications page content will be designed next.",
    },
    contact: {
      title: "Contact Us",
      description: "Tell us about your next construction project.",
      contactInfo: "Contact Information",
      requestBid: "Request a Bid",
    },
    projectDetail: {
      placeholder: "Project detail page content will be designed next.",
      backToProjects: "Back to Projects",
      projectType: "Project Type",
      location: "Location",
      status: "Status",
      scope: "Scope",
    },
    notFound: {
      title: "Page Not Found",
      description: "The page you're looking for doesn't exist.",
      backHome: "Back Home",
      viewProjects: "View Projects",
    },
  },
  requestBid: {
    success: "Thank you. Your project inquiry has been received.",
    error: "Something went wrong. Please try again.",
  },
};

const es: Content = {
  ...en,
  nav: {
    home: "Inicio",
    about: "Nosotros",
    services: "Servicios",
    projects: "Proyectos",
    team: "Equipo",
    contact: "Contacto",
    requestBid: "Solicitar Cotización",
  },
  hero: {
    ...en.hero,
    eyebrow: "Contratista General · Comercial · Civil · Residencial",
    headline: "Construyendo con Propósito.",
    headlineLine2: "Entregando con Precisión.",
    supporting:
      "Aportamos equipos experimentados, gestión disciplinada de proyectos y un compromiso con la calidad y la seguridad en cada obra.",
    credibility: "Desde la preconstrucción hasta el cierre.",
    ctaPrimary: "Solicitar Cotización",
    ctaSecondary: "Ver Nuestros Proyectos",
    metaProjectTypes: "Tipos de Proyecto",
    metaServiceArea: "Área de Servicio",
    metaEstablished: "Fundada",
    metaProjectsDelivered: "Proyectos Entregados",
    scrollExplore: "Desplázate para explorar",
  },
  companyIntro: {
    eyebrow: "Quiénes Somos",
    headline: "Construidos sobre Experiencia.",
    headlineLine2: "Impulsados por Responsabilidad.",
    paragraph:
      "Cada proyecto comienza con un plan claro, personas experimentadas y un compromiso de hacer el trabajo correctamente. Trabajamos de cerca con propietarios, arquitectos, subcontratistas y equipos de proyecto.",
    cta: "Sobre Nuestra Empresa",
  },
  services: {
    eyebrow: "Qué Hacemos",
    headline: "Experiencia en Construcción",
    headlineLine2: "para Cada Etapa del Proyecto.",
    intro:
      "Desde la planificación inicial hasta el cierre final, nuestro equipo aporta la experiencia y coordinación necesarias.",
    viewService: "Ver Servicio",
    items: {
      commercial: {
        title: "Construcción Comercial",
        description: "Proyectos de oficinas, retail, hospitalidad e institucionales.",
      },
      preconstruction: {
        title: "Preconstrucción",
        description: "Planificación, estimación, ingeniería de valor y estrategia temprana.",
      },
      civil: {
        title: "Civil e Infraestructura",
        description: "Trabajo de sitio, utilidades, pavimentación e infraestructura.",
      },
      renovation: {
        title: "Renovación y Remodelación",
        description: "Renovaciones en entornos ocupados con faseo cuidadoso.",
      },
      "tenant-improvements": {
        title: "Mejoras para Inquilinos",
        description: "Construcción interior de rápido seguimiento para inquilinos comerciales.",
      },
      "construction-management": {
        title: "Gestión de Construcción",
        description: "Representación del propietario, programación y control de costos.",
      },
    },
  },
  projects: {
    eyebrow: "Trabajo Seleccionado",
    headline: "Proyectos que Hablan por Sí Mismos.",
    supporting:
      "Explore una selección de proyectos entregados por nuestro equipo en construcción comercial, civil y residencial.",
    viewProject: "Ver Proyecto",
    viewAll: "Ver Todos los Proyectos",
  },
  projectStory: {
    eyebrow: "Proyecto Destacado",
    storyLead: "Construido para el futuro del trabajo.",
    viewDetails: "Ver Detalles del Proyecto",
    projectType: "Tipo de Proyecto",
    location: "Ubicación",
    status: "Estado",
    scope: "Alcance",
  },
  process: {
    eyebrow: "Cómo Trabajamos",
    headline: "Del Primer Plan al Recorrido Final.",
    steps: {
      preconstruction: {
        title: "Preconstrucción",
        description: "Planificación, estimación, coordinación y estrategia temprana.",
      },
      procurement: {
        title: "Adquisiciones",
        description: "Coordinación de subcontratistas, materiales y proyecto.",
      },
      construction: {
        title: "Construcción",
        description: "Ejecución de campo, gestión, programación y calidad.",
      },
      "safety-quality": {
        title: "Seguridad y Calidad",
        description: "Seguridad continua, control de calidad e inspecciones.",
      },
      closeout: {
        title: "Cierre",
        description: "Documentación, finalización, garantías y entrega.",
      },
    },
  },
  safety: {
    eyebrow: "Seguridad y Calidad",
    headline: "La Seguridad Es Parte de Cada Proyecto.",
    supporting:
      "Creemos que los proyectos sólidos comienzan con prácticas de seguridad sólidas y ejecución disciplinada.",
  },
  team: {
    eyebrow: "Nuestro Equipo",
    headline: "Personas Experimentadas.",
    headlineLine2: "Comprometidas con el Trabajo.",
    supporting:
      "Nuestros proyectos son entregados por personas que entienden que la construcción se basa en comunicación y confianza.",
  },
  testimonials: {
    eyebrow: "Clientes y Socios",
    headline: "Confianza de Quienes Construimos Juntos.",
  },
  serviceArea: {
    eyebrow: "Dónde Construimos",
    headline: "Sirviendo Proyectos en Todo Texas.",
  },
  cta: {
    headline: "¿Tiene un Proyecto en Mente?",
    supporting: "Cuéntenos sobre su próximo proyecto y nuestro equipo se pondrá en contacto.",
    primary: "Solicitar Cotización",
    secondary: "Contactar al Equipo",
  },
  footer: {
    company: "Empresa",
    projects: "Proyectos",
    trust: "Confianza",
    contact: "Contacto",
    legal: "Legal",
    featuredProjects: "Proyectos Destacados",
    allProjects: "Todos los Proyectos",
    portfolio: "Portafolio",
    testimonials: "Testimonios",
    certifications: "Certificaciones",
    safetyQuality: "Seguridad y Calidad",
    contactUs: "Contáctenos",
    requestBid: "Solicitar Cotización",
    serviceArea: "Área de Servicio",
    rights: "Todos los derechos reservados.",
  },
  pages: {
    about: {
      title: "Sobre Nosotros",
      description:
        "Conozca nuestra empresa, experiencia, enfoque y compromiso con la construcción de calidad.",
      placeholder: "El contenido de la página Nosotros se diseñará próximamente.",
    },
    services: {
      title: "Nuestros Servicios",
      description: "Explore los servicios y capacidades de construcción que ofrece nuestro equipo.",
      placeholder: "El contenido de la página Servicios se diseñará próximamente.",
    },
    projects: {
      title: "Nuestros Proyectos",
      description: "Explore una selección de proyectos entregados por nuestro equipo.",
      placeholder: "El contenido de la página Proyectos se diseñará próximamente.",
      featured: "Proyectos Destacados",
      categories: "Categorías de Proyecto",
      allProjects: "Todos los Proyectos",
    },
    team: {
      title: "Nuestro Equipo",
      description: "Conozca a las personas detrás de nuestros proyectos.",
      placeholder: "El contenido de la página Equipo se diseñará próximamente.",
    },
    testimonials: {
      title: "Testimonios de Clientes",
      description: "Vea lo que clientes y socios dicen sobre trabajar con nosotros.",
      placeholder: "El contenido de testimonios se diseñará próximamente.",
    },
    certifications: {
      title: "Certificaciones y Credenciales",
      description:
        "Explore nuestras credenciales profesionales, certificaciones y compromiso con la calidad y seguridad.",
      placeholder: "El contenido de certificaciones se diseñará próximamente.",
    },
    contact: {
      title: "Contáctenos",
      description: "Cuéntenos sobre su próximo proyecto de construcción.",
      contactInfo: "Información de Contacto",
      requestBid: "Solicitar Cotización",
    },
    projectDetail: {
      placeholder: "El contenido del detalle del proyecto se diseñará próximamente.",
      backToProjects: "Volver a Proyectos",
      projectType: "Tipo de Proyecto",
      location: "Ubicación",
      status: "Estado",
      scope: "Alcance",
    },
    notFound: {
      title: "Página No Encontrada",
      description: "La página que busca no existe.",
      backHome: "Volver al Inicio",
      viewProjects: "Ver Proyectos",
    },
  },
  requestBid: {
    success: "Gracias. Su consulta de proyecto ha sido recibida.",
    error: "Algo salió mal. Por favor intente de nuevo.",
  },
};

export const content: Record<Locale, Content> = { en, es };

export type { Content };
