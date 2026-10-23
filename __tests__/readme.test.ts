import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

// Guards README.md against drifting back to boilerplate or naming paths and
// scripts that no longer exist.
const ROOT = process.cwd();
const readme = fs.readFileSync(path.join(ROOT, "README.md"), "utf-8");
const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, "package.json"), "utf-8"));

describe("README.md", () => {
  it("is not the create-next-app boilerplate", () => {
    expect(readme).not.toMatch(/create-next-app/);
    expect(readme).toMatch(/evanappel\.me/);
  });

  it("is em-dash-free (house style)", () => {
    expect(readme).not.toContain("—");
  });

  it("documents the install, dev and test commands", () => {
    expect(readme).toContain("npm ci");
    expect(readme).toContain("npm run dev");
    expect(readme).toContain("npm test");
  });

  it("only names npm scripts that exist in package.json", () => {
    const scripts = [...readme.matchAll(/npm run ([\w:-]+)/g)].map((m) => m[1]);
    for (const s of scripts) {
      expect(pkg.scripts, `npm run ${s}`).toHaveProperty(s);
    }
  });

  it("only points at repo paths that exist", () => {
    // Backticked tokens that look like concrete repo paths (no placeholders).
    const tokens = [...readme.matchAll(/`([^`\s]+)`/g)]
      .map((m) => m[1])
      .filter((t) => !/[<>*]/.test(t))
      .filter((t) => t.includes("/") || /\.(md|ts|tsx|json|yml)$/.test(t))
      // Leading-slash tokens are site routes, not repo paths.
      .filter((t) => !t.startsWith("http") && !t.startsWith("@/") && !t.startsWith("/"));
    expect(tokens.length).toBeGreaterThan(5);
    for (const t of tokens) {
      const rel = t.replace(/\/$/, "");
      expect(fs.existsSync(path.join(ROOT, rel)), t).toBe(true);
    }
  });
});
