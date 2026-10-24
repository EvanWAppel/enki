import fs from "fs";
import path from "path";
import { describe, expect, it } from "vitest";
import { getWritingMeta, writingMeta } from "@/data/writing";

const ESSAYS_DIR = path.join(process.cwd(), "writing", "essays");
const essayFiles = fs
  .readdirSync(ESSAYS_DIR)
  .filter((f) => f.endsWith(".md"))
  .map((f) => f.replace(/\.md$/, ""));

describe("writing metadata", () => {
  it("has a meta entry for every essay file", () => {
    const metaSlugs = new Set(writingMeta.map((m) => m.slug));
    const missing = essayFiles.filter((slug) => !metaSlugs.has(slug));
    expect(missing).toEqual([]);
  });

  it("has an essay file for every meta entry", () => {
    const files = new Set(essayFiles);
    const orphans = writingMeta.filter((m) => !files.has(m.slug)).map((m) => m.slug);
    expect(orphans).toEqual([]);
  });

  it("has unique slugs", () => {
    const slugs = writingMeta.map((m) => m.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("has unique display orders", () => {
    const orders = writingMeta.map((m) => m.order);
    expect(new Set(orders).size).toBe(orders.length);
  });

  it("every entry has a lane", () => {
    for (const m of writingMeta) expect(m.lane, m.slug).toBeTruthy();
  });

  it("linkedInUrl, when set, is an https LinkedIn permalink", () => {
    for (const m of writingMeta) {
      if (m.linkedInUrl !== undefined) {
        expect(m.linkedInUrl, m.slug).toMatch(/^https:\/\/www\.linkedin\.com\//);
      }
    }
  });

  it("publishedAt, when set, is a real ISO YYYY-MM-DD date", () => {
    for (const m of writingMeta) {
      if (m.publishedAt !== undefined) {
        expect(m.publishedAt, m.slug).toMatch(/^\d{4}-\d{2}-\d{2}$/);
        const d = new Date(`${m.publishedAt}T00:00:00Z`);
        expect(d.toISOString().slice(0, 10), m.slug).toBe(m.publishedAt);
      }
    }
  });

  it("cover images, when set, point at an existing file under public/", () => {
    for (const m of writingMeta) {
      if (m.image !== undefined) {
        expect(m.image, m.slug).toMatch(/^\//);
        expect(fs.existsSync(path.join(process.cwd(), "public", m.image)), m.image).toBe(true);
      }
    }
  });

  it("getWritingMeta finds entries by slug and returns undefined otherwise", () => {
    const first = writingMeta[0];
    expect(getWritingMeta(first.slug)).toBe(first);
    expect(getWritingMeta("no-such-essay")).toBeUndefined();
  });
});
