import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getEssayBySlug, getAllSlugs, markdownToHtml } from "@/lib/writing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);
  if (!essay) return {};
  return {
    title: essay.title,
    description: essay.excerpt,
    openGraph: { title: essay.title, description: essay.excerpt },
    twitter: { title: essay.title, description: essay.excerpt },
    // SEO: when the essay is canonically the LinkedIn post, point search
    // engines back at the original to avoid duplicate-content dilution.
    alternates: essay.linkedInUrl ? { canonical: essay.linkedInUrl } : undefined,
  };
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);
  if (!essay) notFound();

  const html = markdownToHtml(essay.content);
  const date = essay.publishedAt ? formatDate(essay.publishedAt) : "";

  return (
    <>
      <Navbar />
      <main className="pt-14 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
          <Link
            href="/writing"
            className="text-sm text-muted hover:text-accent transition-colors mb-8 inline-block"
          >
            ← Writing
          </Link>

          {essay.image && (
            <div className="relative w-full h-64 rounded-xl overflow-hidden mb-8 bg-neutral-100 dark:bg-neutral-800">
              <Image
                src={essay.image}
                alt={essay.title}
                fill
                sizes="(max-width: 672px) 100vw, 672px"
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2 mb-4 text-xs text-muted">
            {essay.lane && (
              <span className="font-medium px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800">
                {essay.lane}
              </span>
            )}
            {date && <span>{date}</span>}
          </div>

          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-10">
            {essay.title}
          </h1>

          <article
            className="text-neutral-800 dark:text-neutral-200 text-base"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {essay.linkedInUrl && (
            <p className="mt-12 pt-6 border-t border-neutral-200 dark:border-neutral-800 text-sm text-muted">
              Originally published on{" "}
              <a
                href={essay.linkedInUrl}
                rel="noopener"
                className="text-accent hover:underline"
              >
                LinkedIn
              </a>
              .
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
