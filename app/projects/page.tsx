import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectGridCard from "@/components/ui/ProjectGridCard";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Projects — ${siteConfig.name}`,
  description:
    "Eleven working applications designed, built, and shipped with agentic command-line tools, primarily Claude Code, and kept honest with tests.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `Projects — ${siteConfig.name}`,
    description:
      "Eleven working applications built with AI agents and kept honest with tests.",
    type: "website",
  },
};

export default function ProjectsPage() {
  const shipped = projects.filter((p) => !p.wip);
  const inProgress = projects.filter((p) => p.wip);

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
              Below are eleven working applications I designed, built, and shipped
              on my own time using agentic command-line tools, primarily Claude
              Code. They span web apps, a terminal interface, data pipelines, and
              integrations with both external APIs and local data. Each one
              answers a small real question in my life, and each was built the
              same way: write the requirements, let the agent execute, check the
              result against a test, and loop until it holds. The tools move
              fast. The tests are what make the speed safe.
            </p>
          </header>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {shipped.map((project) => (
              <ProjectGridCard key={project.id} project={project} />
            ))}
          </div>

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
