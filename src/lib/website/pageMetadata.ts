import type { Metadata } from "next";
import { company } from "./tenantData";

export function pageTitle(page: string): string {
  return `${page} | ${company.name}`;
}

export const homeMetadata: Metadata = {
  title: `${company.name} | Construction Company`,
  description: company.description,
};

export const aboutMetadata: Metadata = {
  title: `About ${company.name}`,
  description: `Learn about ${company.name}, our experience, approach, and commitment to quality construction.`,
};

export const servicesMetadata: Metadata = {
  title: `Construction Services | ${company.name}`,
  description: `Explore the construction services and capabilities offered by ${company.name}.`,
};

export const projectsMetadata: Metadata = {
  title: `Projects | ${company.name}`,
  description: `Explore selected projects delivered by ${company.name}.`,
};

export const teamMetadata: Metadata = {
  title: `Our Team | ${company.name}`,
  description: `Meet the people behind ${company.name}'s projects.`,
};

export const testimonialsMetadata: Metadata = {
  title: `Client Testimonials | ${company.name}`,
  description: `See what clients and partners say about working with ${company.name}.`,
};

export const certificationsMetadata: Metadata = {
  title: `Certifications & Credentials | ${company.name}`,
  description: `Explore professional credentials, certifications, and commitment to quality and safety at ${company.name}.`,
};

export const contactMetadata: Metadata = {
  title: `Contact ${company.name}`,
  description: `Tell ${company.name} about your next construction project.`,
};

export function projectMetadata(projectName: string): Metadata {
  return {
    title: `${projectName} | ${company.name}`,
    description: `Project details for ${projectName} — delivered by ${company.name}.`,
  };
}
