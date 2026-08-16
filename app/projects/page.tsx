import type { Metadata } from "next";
import { Download } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectGridCard from "@/components/ui/ProjectGridCard";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { capitalize, numberToWord } from "@/lib/numberWords";

// Count derived from the data so the copy never drifts as projects are added.
const shipped = projects.filter((p) => !p.wip);
const inProgress = projects.filter((p) => p.wip);
const shippedWord = numberToWord(shipped.length);
const ShippedWord = capitalize(shippedWord);

// Curated lead set (by showcase rank) up top; everything else is one click away
// under "More projects" so nothing is lost but the strongest work leads.
const showcase = shipped
  .filter((p) => p.showcase != null)
  .sort((a, b) => (a.showcase ?? 0) - (b.showcase ?? 0));
const more = shipped.filter((p) => p.showcase == null);

export const metadata: Metadata = {
  title: `Projects — ${siteConfig.name}`,
  description: `${ShippedWord} working applications designed, built, and shipped with agentic command-line tools, primarily Claude Code, and kept honest with tests.`,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `Projects — ${siteConfig.name}`,
    description: `${ShippedWord} working applications built with AI agents and kept honest with tests.`,
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-14 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Intro */}
          <header className="max-w-3xl mb-12">
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
              Projects
            </h1>
            <p className="text-muted leading-relaxed">
              I build software with AI agents, and I keep it honest with tests.
              Below are {shippedWord} working applications I designed, built, and
              shipped on my own time using agentic command-line tools, primarily Claude
              Code. They span web apps, a terminal interface, data pipelines, and
              integrations with both external APIs and local data. Each one
              answers a small real question in my life, and each was built the
              same way: write the requirements, let the agent execute, check the
              result against a test, and loop until it holds. The tools move
              fast. The tests are what make the speed safe.
            </p>

            {/* Persistent CTA: a recruiter deep-linking here still sees
                availability and can grab the resume in one click. */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm font-medium text-green-700 dark:text-green-400">
                <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
                Available for work
              </span>
              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 dark:border-neutral-600 px-3 py-1 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:border-accent hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <Download size={14} />
                Resume
              </a>
            </div>
          </header>

          {/* Showcase grid: the curated lead set */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {showcase.map((project) => (
              <ProjectGridCard key={project.id} project={project} />
            ))}
          </div>

          {/* More projects: everything else, one click away */}
          {more.length > 0 && (
            <details className="group mt-8">
              <summary className="cursor-pointer list-none inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
                <span>
                  More projects ({numberToWord(more.length)})
                </span>
                <span className="transition-transform group-open:rotate-90" aria-hidden="true">
                  ›
                </span>
              </summary>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
                {more.map((project) => (
                  <ProjectGridCard key={project.id} project={project} />
                ))}
              </div>
            </details>
          )}

          {/* Work in progress */}
          {inProgress.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
                Work in progress
              </h2>
              <p className="text-muted leading-relaxed max-w-3xl mb-8">
                A few projects still in the workshop: specs written, scaffolding
                up, not yet something I would call shippable. They are here for
                the same reason the rest are, so you can see how I work, and the
                source is on GitHub as it lands.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {inProgress.map((project) => (
                  <ProjectGridCard key={project.id} project={project} />
                ))}
              </div>
            </section>
          )}

          {/* Footer note */}
          <p className="text-sm text-muted mt-12">
            All source is on{" "}
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              GitHub
            </a>
            . Questions or a role in mind?{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-accent hover:underline"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
