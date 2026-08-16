import { describe, expect, it } from "vitest";
import { siteConfig } from "@/data/site";

describe("site config", () => {
  it("points LinkedIn at the live handle", () => {
    // Regression guard for the dead-link fix: the old evan-appel-8885569b /
    // evanappel handles must never come back.
    expect(siteConfig.linkedin).toContain("evanwebsterappel");
    expect(siteConfig.linkedin).not.toContain("8885569b");
  });

  it("has an absolute https origin for metadataBase and OG images", () => {
    expect(siteConfig.url).toMatch(/^https:\/\//);
    expect(() => new URL(siteConfig.url)).not.toThrow();
  });

  it("exposes a downloadable resume", () => {
    expect(siteConfig.resume).toMatch(/\.pdf$/);
  });
});
