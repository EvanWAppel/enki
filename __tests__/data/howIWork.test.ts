import { describe, expect, it } from "vitest";
import { howIWorkIntro, principles, reclSteps } from "@/data/howIWork";

describe("how-i-work content", () => {
  it("names the four RECL steps in order", () => {
    expect(reclSteps.map((s) => s.label)).toEqual([
      "Requirements",
      "Execute",
      "Check",
      "Loop",
    ]);
  });

  it("names the verification-first discipline", () => {
    const all = [
      ...howIWorkIntro,
      ...reclSteps.map((s) => s.body),
      ...principles.flatMap((p) => [p.title, p.body]),
    ].join(" ");
    expect(all.toLowerCase()).toContain("verification");
    expect(all.toLowerCase()).toContain("test");
  });

  it("keeps the portfolio framed as personal, not employer AI work", () => {
    const all = [...howIWorkIntro, ...principles.map((p) => p.body)].join(" ");
    expect(all).toContain("on my own time");
  });

  it("follows the em-dash-free house style", () => {
    const all = [
      ...howIWorkIntro,
      ...reclSteps.flatMap((s) => [s.label, s.body]),
      ...principles.flatMap((p) => [p.title, p.body]),
    ];
    for (const text of all) {
      expect(text).not.toContain("—");
    }
  });
});
