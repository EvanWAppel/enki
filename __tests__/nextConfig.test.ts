import { describe, expect, it } from "vitest";
import nextConfig from "../next.config";

describe("next.config redirects", () => {
  it("permanently redirects the old weather project page to mondaugen", async () => {
    const redirects = (await nextConfig.redirects?.()) ?? [];
    expect(redirects).toContainEqual({
      source: "/projects/weather",
      destination: "/projects/mondaugen",
      permanent: true,
    });
  });
});
