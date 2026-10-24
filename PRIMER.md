# PRIMER — enki (evanappel.me)

## Next session — 2026-10-24 weekend

**Goal.** enki is Evan's public portfolio site (evanappel.me): a Next.js 16 app whose
project cards, writing, fiction, résumé and "how I work" pages are driven by typed data
files under `data/`, guarded by Vitest data tests.

**Current state (main @ 94dd77d, 2026-10-22).**
- 16-project roster complete; 14 projects showcased with animated GIFs (#42), top three
  elvis / weather / mccoy (#43). `ansel` is featured (no screenshot), `niu_ma` is `wip`.
- `npm test`: **6 files, 50 tests, all pass**. `npx tsc --noEmit`: clean.
- Open PRs: #50 (project.toml for the `_system` registry, branch `plat-reg-01-project-toml`;
  also adds a BLOCKED item for the eps -> enki Vercel rename), #44-#48 Dependabot bumps
  (react, typescript 7, vitest 5, tailwind postcss, lucide). Do not redo any of these.
- No TASKS.md; the work list lives in `PORTFOLIO-PLAN.md` (partly stale, see task 2).
- `DOMAIN-MIGRATION.md` is gitignored and only exists in Evan's local checkout.

**House rules (from CLAUDE.md / AGENTS.md).**
- Prime directive: *"don't do anything you're unclear about, ask me about it."* Unattended,
  that means: if a task needs a judgement call on copy, design, or roster, skip it and add a
  BLOCKED.md line instead of guessing.
- This is **not the Next.js you know**: read `node_modules/next/dist/docs/` before touching
  app code; heed deprecations.
- TDD: write or extend the Vitest test first, see it fail, then make it pass.
- Copy is em-dash-free (the data test rejects `—`). URLs are absolute `https://`.
- Never invent facts (LinkedIn URLs, dates, live links, screenshots).
- Add a `DECISIONS.md` entry only for decisions with a real trade-off.
- One branch + one PR per task, off `origin/main`. Open PRs, do not merge, do not deploy.

**Test command for everything:** `npm ci && npm test && npx tsc --noEmit`

### Autonomous tasks, in order

1. **Tests for `lib/writing.ts` + `data/writing.ts`** (M). Nothing under `__tests__` covers
   writing. Add `__tests__/lib/writing.test.ts` and `__tests__/data/writing.test.ts`: every
   `writing/essays/*.md` has a meta entry and vice versa; slugs unique; `linkedInUrl`, when
   set, is `https://www.linkedin.com/...`; `publishedAt`, when set, is ISO `YYYY-MM-DD`;
   `markdownToHtml` handles headings / paragraphs / emphasis / links (read the function and
   pin current behaviour). Done when the new tests pass and fail if a meta entry is removed.
2. **Refresh `PORTFOLIO-PLAN.md` status** (S). It still says weather / gregan / roodle need
   screenshots and lists old showcase ranks; main has them showcased with GIFs (#42, #43).
   Update ranks and checkboxes from `data/projects.ts`. Done when every claim matches the data
   file. Docs only.
3. **Fix the stale header comment in `data/writing.ts`** (S). It says the LinkedIn fields are
   "intentionally blank"; 9 of 10 essays are filled, only `in-praise-of-the-boring-pipeline`
   is blank. Comment-only change; tests stay green.
4. **Replace the create-next-app boilerplate `README.md`** (S) with a real one: what the site
   is, `npm ci` / `npm run dev` / `npm test`, the data-file layout (`data/`, `writing/`,
   `fiction/`, `public/assets/`), the showcase rules from PORTFOLIO-PLAN.md, and a pointer to
   BLOCKED.md / DECISIONS.md. No secrets, no Vercel project ids. Done when it reads true
   against the code.
5. **Drop `vite-tsconfig-paths`** (S). Vitest warns that Vite resolves tsconfig paths natively;
   switch `vitest.config.ts` to `resolve: { tsconfigPaths: true }` and remove the devDependency
   (update `package-lock.json` via `npm uninstall`). Done when `npm test` passes with no plugin
   warning. If the option does not exist in the installed Vite, stop and leave it.
6. **Add a typecheck step to CI** (S). Add `"typecheck": "tsc --noEmit"` to `package.json`
   and a `npm run typecheck` step in `.github/workflows/ci.yml` after tests. Done when it runs
   clean locally. Do not touch the Dependabot PRs.

### Do NOT do

- **Deploy anything** (Vercel, `vercel` CLI, Railway) or touch DNS / Cloudflare / Porkbun /
  Wix. The domain move is Evan's (BLOCKED.md).
- **Merge any PR**, including Dependabot #44-#48 and #50. typescript 7 / vitest 5 are majors:
  Evan's call.
- **Take screenshots or use the browser** (global guardrail). No new showcase promotions that
  need images (ansel, niu_ma).
- **Promote `niu_ma`** or add any live link that is not confirmed returning 200 via curl.
- **Fill `linkedInUrl` / `publishedAt`** for `in-praise-of-the-boring-pipeline`, or invent any
  copy facts.
- **Copy rewrites needing taste** (enki self-card copy pass, enki detail page decision,
  ansel logo): Evan's call per the prime directive.
- Read `.env*`. Edit `project.toml` (lives on PR #50). Touch `fiction/` source originals.
