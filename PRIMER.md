# PRIMER — enki (evanappel.me)

## Next session — 2026-10-24 weekend

**Goal.** enki is Evan's public portfolio site (evanappel.me): a Next.js 16 app whose
project cards, writing, fiction, résumé and "how I work" pages are driven by typed data
files under `data/`, guarded by Vitest data tests.

**Current state (main @ 9a83cdd, 2026-10-23).**
- 16-project roster complete; 14 projects showcased with animated GIFs (#42), top three
  elvis / weather / mccoy (#43). `ansel` is featured (no screenshot), `niu_ma` is `wip`.
- The weekend run (PR #51, merged 2026-10-23) did all six tasks from the 2026-10-22 primer
  (see below). Also merged since: #50 (`project.toml`, PLAT-REG-01), #46-#48 Dependabot
  bumps (vitest 5, tailwind postcss, lucide), #52 (blocker protocol sync), #53 (stale
  screenshot blockers cleared, domain blocker narrowed).
- `npm test`: **6 files, 50 tests, all pass** as measured 2026-10-22, before #51 added
  writing, README and CI tests; re-measure. `npx tsc --noEmit` (now `npm run typecheck`,
  also run in CI).
- Open PRs: #54 (react + react-dom + types to 19.3), #44 (react / @types/react Dependabot),
  #45 (typescript 7 Dependabot). Do not redo any of these.
- `TASKS.md` now exists and holds the `_system` platform handoffs; `PORTFOLIO-PLAN.md` was
  refreshed in #51.
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

All six tasks from the 2026-10-22 primer are done, merged in PR #51: writing tests
(`__tests__/lib/writing.test.ts`, `__tests__/data/writing.test.ts`), `PORTFOLIO-PLAN.md`
refresh, the `data/writing.ts` header comment, a real `README.md`, dropping
`vite-tsconfig-paths` (`resolve: { tsconfigPaths: true }`), and the CI typecheck step.

No further tasks are queued in this primer. The open work list is `TASKS.md` (PLAT-SITE-01,
pointing project cards at `*.evanappel.me` subdomains, is the open handoff there); anything
that needs Evan is in `BLOCKED.md`.

### Do NOT do

- **Deploy anything** (Vercel, `vercel` CLI, Railway) or touch DNS / Cloudflare / Porkbun /
  Wix. The domain move is Evan's (BLOCKED.md).
- **Merge any PR**, including #44, #45 and #54. typescript 7 is a major: Evan's call.
- **Take screenshots or use the browser** (global guardrail). No new showcase promotions that
  need images (ansel, niu_ma).
- **Promote `niu_ma`** or add any live link that is not confirmed returning 200 via curl.
- **Fill `linkedInUrl` / `publishedAt`** for `in-praise-of-the-boring-pipeline`, or invent any
  copy facts.
- **Copy rewrites needing taste** (enki self-card copy pass, enki detail page decision,
  ansel logo): Evan's call per the prime directive.
- Read `.env*`. Touch `fiction/` source originals.
