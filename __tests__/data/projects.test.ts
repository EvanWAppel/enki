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

  it("links live apps through evanappel.me subdomains, not raw platform hosts", () => {
    for (const p of projects) {
      for (const url of [p.live, p.demo]) {
        if (url) expect(url, `${p.id}: ${url}`).not.toMatch(/\.(up\.railway|vercel)\.app/);
      }
    }
  });

  it("surfaces sign-in-free demos for the recruiter-facing apps", () => {
    const demos = new Set(projects.filter((p) => p.demo).map((p) => p.id));
    expect(demos.has("guzzolene")).toBe(true);
  });

  it("has pruned the archived and consolidated projects", () => {
    const ids = new Set(projects.map((p) => p.id));
    for (const gone of [
      "lucre",
      "bartleby",
      "seer",
      "wormsworth",
      "learn-typescript",
      "learn-sql",
      "learn-ai",
      "learn-spark-databricks",
    ]) {
      expect(ids.has(gone), `${gone} should be pruned from the roster`).toBe(false);
    }
    for (const present of ["gregan", "ansel", "roodle", "niu_ma"]) {
      expect(ids.has(present), `${present} should be on the roster`).toBe(true);
    }
  });

  it("roodle is shipped (live, featured) and niu_ma is still work-in-progress", () => {
    const roodle = projects.find((p) => p.id === "roodle");
    expect(roodle?.wip, "roodle should be shipped, not wip").toBeFalsy();
    expect(roodle?.featured).toBe(true);
    expect(roodle?.live, "roodle needs a live URL").toMatch(/^https:\/\//);

    const niuMa = projects.find((p) => p.id === "niu_ma");
    expect(niuMa?.wip, "niu_ma has no stable deployment, stays wip").toBe(true);
    expect(niuMa?.live, "niu_ma should not carry a live link while its deploy 404s").toBeUndefined();
  });

  it("every project carries a method line describing the agentic build", () => {
    for (const p of projects) {
      expect(p.method, `${p.id} is missing a method line`).toBeTruthy();
    }
  });

  it("lists mondaugen (the weather app) as a shipped featured project", () => {
    const mondaugen = projects.find((p) => p.id === "mondaugen");
    expect(mondaugen, "mondaugen project is missing").toBeTruthy();
    expect(mondaugen?.title).toMatch(/^Mondaugen:/);
    expect(mondaugen?.wip, "mondaugen should be shipped, not work-in-progress").toBeFalsy();
    expect(mondaugen?.featured).toBe(true);
    expect(mondaugen?.live).toBe("https://mondaugen.evanappel.me/");
    expect(projects.some((p) => p.id === "weather"), "old weather id should be gone").toBe(false);
  });

  it("lists wordly as a shipped featured project with a detail page", () => {
    const wordly = projects.find((p) => p.id === "wordly");
    expect(wordly, "wordly project is missing").toBeTruthy();
    expect(wordly?.wip).toBeFalsy();
    expect(wordly?.featured).toBe(true);
    expect(
      wordly?.live,
      "wordly's game is behind Cloudflare Access, so it carries no public live link",
    ).toBeUndefined();
    expect(
      wordly?.demo,
      "wordly's demo must be the public demo host, not the Access-gated /demo path",
    ).toBe("https://wordly-demo.evanappel.me/");
    expect(wordly?.proves, "wordly needs a proves line").toBeTruthy();
    expect((wordly?.roleTags?.length ?? 0), "wordly needs role tags").toBeGreaterThan(0);
    expect(wordly?.detail, "wordly needs a detail narrative").toBeTruthy();
    expect(wordly?.honestNote, "wordly needs an honest note").toBeTruthy();
  });

  it("carries a card for each public -demo app, linked to its demo host", () => {
    // These repos are private, so the cards link the public demo and no source.
    for (const id of ["ragnarok", "daltrey", "homestar", "bourdain", "todo-dashboard"]) {
      const p = projects.find((x) => x.id === id);
      expect(p, `${id} card is missing`).toBeTruthy();
      expect(p?.demo).toBe(`https://${id}-demo.evanappel.me/`);
      expect(p?.github, `${id}'s repo is private`).toBeUndefined();
      expect(p?.wip).toBeFalsy();
      expect(p?.detail, `${id} needs a detail page`).toBeTruthy();
    }
  });

  it("credits Jim Riley on the projects built with him", () => {
    for (const id of ["ragnarok", "daltrey"]) {
      expect(projects.find((p) => p.id === id)?.method).toContain("Jim Riley");
    }
  });

  it("links boor's sign-in-free demo", () => {
    expect(projects.find((p) => p.id === "boor")?.demo).toBe("https://boor-demo.evanappel.me/");
  });

  it("curates the expected showcase set with unique ranks", () => {
    const ranked = projects
      .filter((p) => p.showcase != null)
      .sort((a, b) => (a.showcase ?? 0) - (b.showcase ?? 0));
    // Employer-facing apps lead, then the geography explorers, games last.
    expect(ranked.map((p) => p.id)).toEqual([
      "ragnarok",
      "daltrey",
      "homestar",
      "robbins",
      "groening",
      "gregan",
      "elvis",
      "mondaugen",
      "mccoy",
      "spooky",
      "benten",
      "guzzolene",
      "olympic",
      "portfolio",
      "bourdain",
      "todo-dashboard",
      "wordly",
      "boor",
      "roodle",
    ]);
    const ranks = ranked.map((p) => p.showcase);
    expect(new Set(ranks).size).toBe(ranks.length);
    // Showcased projects are shipped, never work-in-progress.
    expect(ranked.every((p) => !p.wip)).toBe(true);
  });

  it("every showcased project leads with a real screenshot", () => {
    const showcased = projects.filter((p) => p.showcase != null);
    for (const p of showcased) {
      expect(p.screenshot, `${p.id} is missing a screenshot`).toMatch(
        /^\/assets\/screenshots\/.+\.(png|jpg|gif)$/,
      );
    }
  });

  it("every showcased project maps to roles with a proves line", () => {
    const showcased = projects.filter((p) => p.showcase != null);
    for (const p of showcased) {
      expect(p.proves, `${p.id} is missing a proves line`).toBeTruthy();
      expect(
        p.roleTags?.length,
        `${p.id} is missing role tags`,
      ).toBeGreaterThan(0);
    }
  });

  it("every detail page has a narrative and an honest note", () => {
    // Presence of `detail` is what creates a /projects/[slug] page, so it must
    // come with the honest note the page renders. Showcased projects all qualify.
    const withDetail = projects.filter((p) => p.detail);
    expect(withDetail.length).toBeGreaterThanOrEqual(6);
    for (const p of withDetail) {
      expect(p.honestNote, `${p.id} has a detail page but no honest note`).toBeTruthy();
    }
    for (const p of projects.filter((p) => p.showcase != null)) {
      expect(p.detail, `showcased ${p.id} is missing a detail page`).toBeTruthy();
    }
  });

  it("copy follows Evan's em-dash-free house style", () => {
    for (const p of projects) {
      const strings = [
        p.title,
        p.description,
        p.method,
        p.proves,
        p.detail,
        p.honestNote,
        ...(p.roleTags ?? []),
      ];
      for (const text of strings) {
        expect(text ?? "", `${p.id} prose contains an em-dash`).not.toContain(
          "—",
        );
      }
    }
  });
});
