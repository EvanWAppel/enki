// Metadata for the essays under writing/essays/. Prose (title + body) lives in
// the markdown files; this sidecar holds the facts only Evan controls — the
// lane, display order, cover image, and the canonical LinkedIn permalink + date.
//
// linkedInUrl / publishedAt are intentionally blank until Evan supplies the real
// values (see BLOCKED.md). The pages render fully without them — the "Originally
// published on LinkedIn" backlink, the date line, and the canonical SEO tag each
// appear only once their field is filled in. Never invent these.

export type WritingMeta = {
  slug: string;
  lane: string;
  /** Display order on /writing (lower shows first). Follows the LinkedIn set 1–10. */
  order: number;
  /** Cover image under /public, or omit. */
  image?: string;
  /** Canonical LinkedIn permalink — Evan to fill. */
  linkedInUrl?: string;
  /** ISO date it went live on LinkedIn (e.g. "2025-07-16") — Evan to fill. */
  publishedAt?: string;
};

export const writingMeta: WritingMeta[] = [
  {
    slug: "the-junior-developer-who-never-sleeps",
    lane: "AI agents",
    order: 1,
    image: "/writing-images/junior-developer.jpg",
  },
  {
    slug: "the-tachometer-and-the-throttle",
    lane: "Responsible AI / cost",
    order: 2,
    image: "/writing-images/tachometer.jpg",
  },
  {
    slug: "the-philosophical-zombie-in-the-pull-request",
    lane: "Responsible AI / accountability",
    order: 3,
    image: "/writing-images/philosophical-zombie.jpg",
  },
  {
    slug: "every-pipeline-is-a-promise",
    lane: "Data engineering craft",
    order: 4,
    image: "/writing-images/pipeline.jpg",
  },
  {
    slug: "the-second-law-of-data",
    lane: "Data engineering craft",
    order: 5,
    image: "/writing-images/second-law.jpg",
  },
  {
    slug: "in-praise-of-the-boring-pipeline",
    lane: "Data engineering craft",
    order: 6,
    image: "/writing-images/boring-pipeline.jpg",
  },
  {
    slug: "git-is-a-time-machine",
    lane: "Git & dev practices",
    order: 7,
    image: "/writing-images/time-machine.jpg",
  },
  {
    slug: "linting-is-spell-check-for-code",
    lane: "Git & dev practices",
    order: 8,
    image: "/writing-images/spell-check.jpg",
  },
  {
    slug: "why-do-we-work-when-the-machine-can-do-it",
    lane: "Work, meaning & craft",
    order: 9,
    image: "/writing-images/why-do-we-work.jpg",
  },
  {
    slug: "code-as-composition",
    lane: "Work, meaning & craft",
    order: 10,
    image: "/writing-images/code-as-composition.jpg",
  },
];

export function getWritingMeta(slug: string): WritingMeta | undefined {
  return writingMeta.find((m) => m.slug === slug);
}
