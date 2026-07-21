import { describe, expect, it } from "vitest";
import { projects } from "@/data/projects";

describe("projects data", () => {
  it("every project has the required fields", () => {
    for (const p of projects) {
      expect(p.id).toBeTruthy();
      expect(p.title).toBeTruthy();
      expect(p.description).toBeTruthy();
      expect(p.tech.length).toBeGreaterThan(0);
    }
  });

  it("has unique ids", () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("all live/demo/github links are absolute https URLs", () => {
    for (const p of projects) {
      for (const url of [p.github, p.live, p.demo]) {
        if (url) expect(url).toMatch(/^https:\/\//);
      }
    }
  });

  it("surfaces sign-in-free demos for the recruiter-facing apps", () => {
    const demos = new Set(projects.filter((p) => p.demo).map((p) => p.id));
    expect(demos.has("lucre")).toBe(true);
    expect(demos.has("guzzolene")).toBe(true);
  });

  it("every project carries a method line describing the agentic build", () => {
    for (const p of projects) {
      expect(p.method, `${p.id} is missing a method line`).toBeTruthy();
    }
  });

  it("copy follows Evan's em-dash-free house style", () => {
    for (const p of projects) {
      for (const text of [p.title, p.description, p.method]) {
        expect(text ?? "", `${p.id} prose contains an em-dash`).not.toContain(
          "—",
        );
      }
    }
  });
});
