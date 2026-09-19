import fs from "fs";
import path from "path";
import { writingMeta, getWritingMeta } from "@/data/writing";

// Reads the essays under writing/essays/ and merges them with the metadata in
// data/writing.ts. Mirrors lib/fiction.ts: title comes from the leading `# `
// heading, the excerpt is derived, and markdownToHtml renders the body.

export type Essay = {
  slug: string;
  title: string;
  lane: string;
  excerpt: string;
  content: string;
  image?: string;
  linkedInUrl?: string;
  publishedAt?: string;
};

const ESSAYS_DIR = path.join(process.cwd(), "writing", "essays");

function parseMd(raw: string): { title: string; body: string } {
  const lines = raw.split("\n");
  let title = "";
  let bodyStart = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith("# ")) {
      title = lines[i].slice(2).trim();
      bodyStart = i + 1;
      break;
    }
  }
  const body = lines.slice(bodyStart).join("\n").trim();
  return { title, body };
}

function getExcerpt(body: string, length = 180): string {
  const plain = body
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/\*\*?([^*]+)\*\*?/g, "$1")
    .replace(/\\\\/g, "")
    .replace(/\n+/g, " ")
    .trim();
  return plain.length > length ? plain.slice(0, length).trimEnd() + "…" : plain;
}

function readEssay(slug: string): Essay | null {
  const filePath = path.join(ESSAYS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { title, body } = parseMd(raw);
  const meta = getWritingMeta(slug);
  return {
    slug,
    title,
    lane: meta?.lane ?? "",
    excerpt: getExcerpt(body),
    content: body,
    image: meta?.image,
    linkedInUrl: meta?.linkedInUrl,
    publishedAt: meta?.publishedAt,
  };
}

/** All essays, ordered by the `order` field in data/writing.ts. */
export function getAllEssays(): Essay[] {
  return writingMeta
    .slice()
    .sort((a, b) => a.order - b.order)
    .map((m) => readEssay(m.slug))
    .filter((e): e is Essay => e !== null);
}

export function getEssayBySlug(slug: string): Essay | null {
  return readEssay(slug);
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(ESSAYS_DIR)) return [];
  return fs
    .readdirSync(ESSAYS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(".md", ""));
}

export function markdownToHtml(md: string): string {
  const blocks = md.split(/\n\n+/);
  return blocks
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (trimmed.startsWith("### "))
        return `<h3 class="text-base font-semibold mt-6 mb-2">${inline(trimmed.slice(4))}</h3>`;
      if (trimmed.startsWith("## "))
        return `<h2 class="text-lg font-semibold mt-8 mb-3 text-muted">${inline(trimmed.slice(3))}</h2>`;
      if (trimmed.startsWith("# "))
        return `<h2 class="text-xl font-semibold mt-8 mb-3">${inline(trimmed.slice(2))}</h2>`;
      const lines = trimmed.split("\n").map(inline).join("<br />");
      return `<p class="mb-5 leading-relaxed">${lines}</p>`;
    })
    .filter(Boolean)
    .join("\n");
}

function inline(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*\n]+)\*/g, "<em>$1</em>")
    .replace(/\\([!?.,])/g, "$1");
}
