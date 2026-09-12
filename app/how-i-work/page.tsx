import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  disciplines,
  disciplinesIntro,
  howIWorkIntro,
  principles,
  reclSteps,
} from "@/data/howIWork";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `How I Work — ${siteConfig.name}`,
  description:
    "How I build software with AI agents and keep it honest with tests: the RECL loop, and where prompt engineering, context engineering, orchestration, and a model-agnostic method fit into it.",
  alternates: { canonical: "/how-i-work" },
  openGraph: {
    title: `How I Work — ${siteConfig.name}`,
    description:
      "Building with agents, kept honest with tests: the RECL loop, plus the vocabulary behind it (prompt and context engineering, loop engineering, multi-agent orchestration, model-agnostic).",
    type: "website",
  },
};

export default function HowIWorkPage() {
  return (
    <>
      <Navbar />
      <main className="pt-14 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Intro */}
          <header className="mb-12">
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
              How I work
            </h1>
            {howIWorkIntro.map((para) => (
              <p key={para} className="text-muted leading-relaxed mb-4 last:mb-0">
                {para}
              </p>
            ))}
          </header>

          {/* The RECL loop */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
              The RECL loop
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Requirements, Execute, Check, Loop. It is the cycle I run on every
              project, and the reason agent speed does not turn into agent chaos.
            </p>
            <ol className="space-y-4">
              {reclSteps.map((step, i) => (
                <li
                  key={step.key}
                  className="flex gap-4 rounded-xl border border-line bg-surface p-5"
                >
                  <span
                    aria-hidden="true"
                    className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-accent/10 text-accent font-semibold"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                      {step.label}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* The vocabulary, mapped onto the loop */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
              The vocabulary, mapped
            </h2>
            <p className="text-muted leading-relaxed mb-8">{disciplinesIntro}</p>
            <dl className="space-y-6">
              {disciplines.map((d) => (
                <div key={d.term}>
                  <dt className="font-semibold text-accent mb-1">{d.term}</dt>
                  <dd className="text-muted leading-relaxed">{d.body}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Principles */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              What keeps it durable
            </h2>
            <div className="space-y-6">
              {principles.map((p) => (
                <div key={p.title}>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                    {p.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4 border-t border-neutral-200 dark:border-neutral-700 pt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:gap-2.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
            >
              See the projects this method built
              <ArrowRight size={15} />
            </Link>
            <a
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted hover:text-accent transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
