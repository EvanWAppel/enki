import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

// Guards the typecheck gate: package.json exposes `npm run typecheck` and CI
// runs it after the tests, so type errors fail the PR instead of the deploy.
const ROOT = process.cwd();
const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, "package.json"), "utf-8"));
const ci = fs.readFileSync(path.join(ROOT, ".github/workflows/ci.yml"), "utf-8");

describe("typecheck in CI", () => {
  it("package.json has a typecheck script running tsc --noEmit", () => {
    expect(pkg.scripts.typecheck).toBe("tsc --noEmit");
  });

  it("ci.yml runs npm run typecheck after npm test", () => {
    const testAt = ci.indexOf("run: npm test");
    const typecheckAt = ci.indexOf("run: npm run typecheck");
    expect(testAt).toBeGreaterThan(-1);
    expect(typecheckAt).toBeGreaterThan(testAt);
  });
});
