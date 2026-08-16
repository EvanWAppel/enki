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
  /** Canonical production origin, used for metadataBase and OG image URLs. */
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  /** Sign-in-free, sandboxed demo recruiters can click through. */
  demo?: string;
  /** One-line note on the agentic build method (RECL loop, tests, etc.). */
  method?: string;
  featured?: boolean;
  logo?: string;
  /** Real preview image of the running app, shown in the card media panel
   * ahead of the logo/monogram fallback. Lives under /assets/screenshots. */
  screenshot?: string;
  /** One sentence naming the capability this project demonstrates, so a
   * recruiter does not have to infer it from the description. */
  proves?: string;
  /** Role families this project is evidence for (e.g. "Analytics
   * Engineering"), rendered distinctly from the implementation tech tags. */
  roleTags?: string[];
  /** Longer narrative for the project's own /projects/[slug] detail page.
   * Presence of `detail` is what gives a project a detail page and a card link. */
  detail?: string;
  /** Candid "what is real vs. still learning-in-public" note on the detail page. */
  honestNote?: string;
  /** Showcase rank on /projects (lower shows first). Present means this is one
   * of the curated lead projects; absent means it lives under "More projects". */
  showcase?: number;
  /** Still in the workshop: shown in the /projects Work-in-progress section,
   * hidden from the homepage carousel. */
  wip?: boolean;
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
