import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, PlayCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import TechTag from "@/components/ui/TechTag";
import { GithubIcon } from "@/components/ui/icons";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

// Only projects with a `detail` narrative get a page; unknown slugs 404.
const detailProjects = projects.filter((p) => p.detail);

export const dynamicParams = false;

export function generateStaticParams() {
  return detailProjects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = detailProjects.find((p) => p.id === slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${siteConfig.name}`,
    description: project.proves ?? project.description,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: {
      title: `${project.title} — ${siteConfig.name}`,
      description: project.proves ?? project.description,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = detailProjects.find((p) => p.id === slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-14 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={15} />
            All projects
          </Link>

          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">
            {project.title}
          </h1>

          {project.roleTags && project.roleTags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-6">
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

          {project.screenshot && (
            <div className="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 mb-8">
              <Image
                src={project.screenshot}
                alt={`Screenshot of ${project.title}`}
                width={960}
                height={540}
                className="w-full h-auto"
                unoptimized
                priority
              />
            </div>
          )}

          {/* Expanded narrative */}
          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8">
            {project.detail}
          </p>

          {/* What it proves */}
          {project.proves && (
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-700 bg-surface dark:bg-neutral-800 p-5 mb-6">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">
                What it proves
              </h2>
              <p className="text-neutral-800 dark:text-neutral-200 leading-relaxed">
                {project.proves}
              </p>
            </div>
          )}

          {/* How it was built */}
          {project.method && (
            <div className="mb-6">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">
                How it was built
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {project.method}
              </p>
            </div>
          )}

          {/* What is real vs. learning in public */}
          {project.honestNote && (
            <div className="mb-8">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">
                What is real, and where I was learning
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {project.honestNote}
              </p>
            </div>
          )}

          {/* Tech */}
          <div className="flex flex-wrap gap-1.5 mb-8">
            {project.tech.map((t) => (
              <TechTag key={t} label={t} />
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-2 border-t border-neutral-200 dark:border-neutral-700 pt-8">
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
      </main>
      <Footer />
    </>
  );
}
