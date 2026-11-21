import { describe, it, expect } from "vitest";
import { getAllFiction, getAllSlugs, getFictionBySlug } from "@/lib/fiction";

// Behaviour of the filesystem readers in lib/fiction.ts. The reads must stay
// statically scoped to fiction/stories and fiction/poetry so Turbopack's file
// tracer bounds them (otherwise it traces the whole project into the server
// bundle). These tests pin the behaviour that refactor has to preserve.

describe("getFictionBySlug", () => {
  it("reads a story by slug", () => {
    const piece = getFictionBySlug("gnome-de-guerre");
    expect(piece).not.toBeNull();
    expect(piece!.type).toBe("story");
    expect(piece!.title).toBe("Gnome de Guerre");
    expect(piece!.content).toContain("Marta Stephanopoulos");
  });

  it("reads a poem by slug", () => {
    const piece = getFictionBySlug("rosewater");
    expect(piece).not.toBeNull();
    expect(piece!.type).toBe("poem");
    expect(piece!.title).toBe("Rosewater");
  });

  it("returns null for an unknown slug", () => {
    expect(getFictionBySlug("no-such-piece")).toBeNull();
  });

  it("rejects path-traversal slugs instead of reading outside fiction/", () => {
    // fiction/stories/../../README.md resolves to the repo README.
    expect(getFictionBySlug("../../README")).toBeNull();
    expect(getFictionBySlug("../poetry/rosewater")).toBeNull();
  });
});

describe("getAllSlugs / getAllFiction", () => {
  it("lists every story and poem, and each slug resolves", () => {
    const { stories, poems } = getAllFiction();
    const slugs = getAllSlugs();
    expect(stories.length).toBeGreaterThan(0);
    expect(poems.length).toBeGreaterThan(0);
    expect(slugs.length).toBe(stories.length + poems.length);
    for (const slug of slugs) expect(getFictionBySlug(slug)).not.toBeNull();
  });
});
