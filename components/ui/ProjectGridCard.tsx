import Image from "next/image";
import { ExternalLink, PlayCircle } from "lucide-react";
import { GithubIcon } from "./icons";
import type { Project } from "@/types";
import TechTag from "./TechTag";
import Button from "./Button";

interface ProjectGridCardProps {
  project: Project;
}

/**
 * Vertical, scannable card for the standalone /projects grid: media panel on
 * top, then title, one-paragraph description, the "method" line, tech tags, and
 * links. Distinct from the homepage carousel's horizontal ProjectCard.
 */
export default function ProjectGridCard({ project }: ProjectGridCardProps) {
  const monogram = project.title.trim().charAt(0).toUpperCase();

  return (
    <article className="relative flex flex-col h-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-600 transition-all">
      {project.wip && (
        <span className="absolute top-2 left-2 z-10 rounded-full bg-amber-100 dark:bg-amber-500/15 text-amber-700 dark:text-amber-300 text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 ring-1 ring-amber-200 dark:ring-amber-500/30">
          Work in progress
        </span>
      )}

      {/* Media panel: a real screenshot when we have one, else the logo, else a
          subtle monogram. */}
      <div className="h-32 flex items-center justify-center overflow-hidden bg-neutral-50 dark:bg-neutral-700/50 border-b border-neutral-100 dark:border-neutral-700">
        {project.screenshot ? (
          <Image
            src={project.screenshot}
            alt={`Screenshot of ${project.title}`}
            width={480}
            height={270}
            className="w-full h-full object-cover object-top"
            unoptimized
          />
        ) : project.logo ? (
          <Image
            src={project.logo}
            alt={`${project.title} logo`}
            width={120}
            height={120}
            className="max-h-[72%] max-w-[45%] w-auto h-auto object-contain"
            unoptimized
          />
        ) : (
          <span
            aria-hidden="true"
            className="text-4xl font-semibold text-neutral-300 dark:text-neutral-500 select-none"
          >
            {monogram}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
          {project.description}
        </p>

        {project.method && (
          <p className="text-xs italic text-muted leading-relaxed mb-3">
            {project.method}
          </p>
        )}

        {/* "What it proves": the recruiter-facing capability claim. */}
        {project.proves && (
          <p className="flex gap-1.5 text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed mb-3">
            <span aria-hidden="true" className="text-accent font-semibold">
              →
            </span>
            <span>{project.proves}</span>
          </p>
        )}

        {/* Role-family tags, styled distinctly from the tech tags below. */}
        {project.roleTags && project.roleTags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.roleTags.map((role) => (
              <span
                key={role}
                className="inline-block px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wide text-muted border border-neutral-300 dark:border-neutral-600"
              >
                {role}
              </span>
            ))}
          </div>
        )}

        {/* Push tech + links to the bottom so cards align in the grid. */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map((t) => (
              <TechTag key={t} label={t} />
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.demo && (
              <Button
                href={project.demo}
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Try the ${project.title} demo, no sign-in`}
              >
                <PlayCircle size={14} />
                Try demo
              </Button>
            )}
            {project.github && (
              <Button
                href={project.github}
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source code on GitHub`}
              >
                <GithubIcon size={14} />
                Code
              </Button>
            )}
            {project.live && (
              <Button
                href={project.live}
                variant="ghost"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live site`}
              >
                <ExternalLink size={14} />
                Live
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
