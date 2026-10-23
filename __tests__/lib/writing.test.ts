import { describe, expect, it } from "vitest";
import { writingMeta } from "@/data/writing";
import {
  getAllEssays,
  getAllSlugs,
  getEssayBySlug,
  markdownToHtml,
} from "@/lib/writing";

describe("essay loading", () => {
  it("getAllSlugs lists every essay file", () => {
    const slugs = getAllSlugs();
    expect(slugs.length).toBeGreaterThan(0);
    expect(slugs.sort()).toEqual(writingMeta.map((m) => m.slug).sort());
  });

  it("getAllEssays returns every essay in meta `order`", () => {
    const essays = getAllEssays();
    const expected = writingMeta
      .slice()
      .sort((a, b) => a.order - b.order)
      .map((m) => m.slug);
    expect(essays.map((e) => e.slug)).toEqual(expected);
  });

  it("every essay has a title, lane, excerpt and body", () => {
    for (const e of getAllEssays()) {
      expect(e.title, e.slug).toBeTruthy();
      expect(e.lane, e.slug).toBeTruthy();
      expect(e.excerpt, e.slug).toBeTruthy();
      expect(e.content, e.slug).toBeTruthy();
    }
  });

  it("strips the leading # title from the body", () => {
    for (const e of getAllEssays()) {
      expect(e.content.startsWith(`# ${e.title}`), e.slug).toBe(false);
    }
  });

  it("caps excerpts at 180 chars plus an ellipsis", () => {
    for (const e of getAllEssays()) {
      expect(e.excerpt.length, e.slug).toBeLessThanOrEqual(181);
      if (e.excerpt.length > 180) expect(e.excerpt.endsWith("…")).toBe(true);
    }
  });

  it("merges meta fields onto the essay", () => {
    const meta = writingMeta[0];
    const essay = getEssayBySlug(meta.slug);
    expect(essay).not.toBeNull();
    expect(essay!.lane).toBe(meta.lane);
    expect(essay!.image).toBe(meta.image);
    expect(essay!.linkedInUrl).toBe(meta.linkedInUrl);
    expect(essay!.publishedAt).toBe(meta.publishedAt);
  });

  it("getEssayBySlug returns null for an unknown slug", () => {
    expect(getEssayBySlug("no-such-essay")).toBeNull();
  });
});

describe("markdownToHtml (writing)", () => {
  it("wraps plain text in a paragraph", () => {
    expect(markdownToHtml("Hello world")).toBe(
      '<p class="mb-5 leading-relaxed">Hello world</p>',
    );
  });

  it("splits blank-line-separated blocks into separate paragraphs", () => {
    const html = markdownToHtml("First\n\n\nSecond");
    expect(html.match(/<p /g)).toHaveLength(2);
    expect(html.split("\n")).toHaveLength(2);
  });

  it("joins single newlines within a block with <br />", () => {
    expect(markdownToHtml("Line one\nLine two")).toContain(
      "Line one<br />Line two",
    );
  });

  it("drops empty blocks", () => {
    expect(markdownToHtml("\n\n   \n\n")).toBe("");
  });

  it("renders # as a large h2 (the page owns the h1)", () => {
    expect(markdownToHtml("# Big")).toBe(
      '<h2 class="text-xl font-semibold mt-8 mb-3">Big</h2>',
    );
  });

  it("renders ## as a muted h2", () => {
    expect(markdownToHtml("## Section")).toBe(
      '<h2 class="text-lg font-semibold mt-8 mb-3 text-muted">Section</h2>',
    );
  });

  it("renders ### as h3", () => {
    expect(markdownToHtml("### Sub")).toBe(
      '<h3 class="text-base font-semibold mt-6 mb-2">Sub</h3>',
    );
  });

  it("applies inline formatting inside headings", () => {
    expect(markdownToHtml("## A **bold** move")).toContain(
      "A <strong>bold</strong> move",
    );
  });

  it("converts **text** to <strong> and *text* to <em>", () => {
    const html = markdownToHtml("Some **bold** and *italic* text");
    expect(html).toContain("<strong>bold</strong>");
    expect(html).toContain("<em>italic</em>");
  });

  it("strips backslash escapes before ! ? . ,", () => {
    expect(markdownToHtml("Wait\\! Really\\? Yes\\. Ok\\, fine")).toContain(
      "Wait! Really? Yes. Ok, fine",
    );
  });

  it("leaves markdown links as literal text (links are not rendered)", () => {
    const html = markdownToHtml("See [the docs](https://example.com).");
    expect(html).toContain("[the docs](https://example.com)");
    expect(html).not.toContain("<a ");
  });
});
