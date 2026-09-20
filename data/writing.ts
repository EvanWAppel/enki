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
    linkedInUrl:
      "https://www.linkedin.com/pulse/junior-developer-who-never-sleeps-evan-appel-byovc",
    publishedAt: "2026-07-22",
  },
  {
    slug: "the-tachometer-and-the-throttle",
    lane: "Responsible AI / cost",
    order: 2,
    image: "/writing-images/tachometer.jpg",
    linkedInUrl:
      "https://www.linkedin.com/pulse/tachometer-throttle-evan-appel-d0xwc",
    publishedAt: "2026-08-26",
  },
  {
    slug: "the-philosophical-zombie-in-the-pull-request",
    lane: "Responsible AI / accountability",
    order: 3,
    image: "/writing-images/philosophical-zombie.jpg",
    linkedInUrl:
      "https://www.linkedin.com/pulse/philosophical-zombie-pull-request-evan-appel-3vwsc",
    publishedAt: "2026-07-29",
  },
  {
    slug: "every-pipeline-is-a-promise",
    lane: "Data engineering craft",
    order: 4,
    image: "/writing-images/pipeline.jpg",
    linkedInUrl:
      "https://www.linkedin.com/pulse/every-pipeline-promise-evan-appel-7hlkc",
    publishedAt: "2026-08-05",
  },
  {
    slug: "the-second-law-of-data",
    lane: "Data engineering craft",
    order: 5,
    image: "/writing-images/second-law.jpg",
    linkedInUrl:
      "https://www.linkedin.com/pulse/second-law-data-evan-appel-ktcbc",
    publishedAt: "2026-09-02",
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
    linkedInUrl:
      "https://www.linkedin.com/pulse/git-time-machine-we-historians-evan-appel-j5ibc",
    publishedAt: "2026-08-12",
  },
  {
    slug: "linting-is-spell-check-for-code",
    lane: "Git & dev practices",
    order: 8,
    image: "/writing-images/spell-check.jpg",
    linkedInUrl:
      "https://www.linkedin.com/pulse/linting-spell-check-code-so-why-do-we-resent-evan-appel-1r7wc",
    publishedAt: "2026-08-19",
  },
  {
    slug: "why-do-we-work-when-the-machine-can-do-it",
    lane: "Work, meaning & craft",
    order: 9,
    image: "/writing-images/why-do-we-work.jpg",
    linkedInUrl:
      "https://www.linkedin.com/pulse/why-do-we-work-when-machine-can-evan-appel-sszvc",
    publishedAt: "2026-09-09",
  },
  {
    slug: "code-as-composition",
    lane: "Work, meaning & craft",
    order: 10,
    image: "/writing-images/code-as-composition.jpg",
    linkedInUrl:
      "https://www.linkedin.com/pulse/code-composition-evan-appel-zlq2c",
    publishedAt: "2026-09-16",
  },
];

export function getWritingMeta(slug: string): WritingMeta | undefined {
  return writingMeta.find((m) => m.slug === slug);
}
