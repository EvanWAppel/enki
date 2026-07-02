import type React from "react";

export interface SiteConfig {
  name: string;
  title: string;
  url: string;
  bio: string;
  photo: string;
  email: string;
  github: string;
  linkedin: string;
  resume: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  logo?: string;
}

export interface Job {
  company: string;
  role: string;
  start: string;
  end: string;
  /** Optional italic context line shown under the role on resume pages. */
  tagline?: string;
  bullets: string[];
}

export interface SkillGroup {
  label: string;
  items: string;
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
}

/** Canonical master record shown on the homepage Resume section. */
export interface ResumeData {
  summary: string;
  skills: string[];
  experience: Job[];
  education: Education[];
  certifications: string[];
}

export interface ResumeVariant {
  label: string;
  slug: string;
  path: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  /** Role-tailored content rendered on /resume/[slug]. */
  summary: string;
  skillGroups: SkillGroup[];
  experience: Job[];
}
