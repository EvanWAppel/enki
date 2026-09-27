# PORTFOLIO-PLAN — target roster and per-project prep

Working plan for curating the enki portfolio (`data/projects.ts`). The **target
roster is 16 projects**; everything not on it gets removed. Each project below has a
checklist for the session that brings it to "portfolio state." Check items off as you go.

_Drafted 2026-09-26. Roster chosen by Evan. bartleby confirmed dropped._

---

## What "portfolio state" means

Every card is one entry in `data/projects.ts` (type `Project` in `types/index.ts`).
The data tests in `__tests__/data/projects.test.ts` enforce the rules below — run
`npm run test` before calling a project done.

**Required for every project**
- `id`, `title`, `description`, `tech: [...]` (non-empty)
- `method` — one line on the agentic build (RECL loop, tests, etc.)
- Copy is **em-dash-free** (house style; the test rejects `—`)
- Any `github`/`live`/`demo` URL is absolute `https://`

**A "detail page" (`/projects/[slug]`)** appears when a project has `detail`. If it
has `detail` it MUST also have `honestNote` (what is real vs. still learning).

**Showcase (the curated homepage carousel)** requires ALL of:
- `showcase: <n>` (unique rank), `screenshot: "/assets/screenshots/<id>.png"`,
  `proves`, `roleTags: [...]`, `detail`, `honestNote`, `featured: true`, not `wip`
- The showcase set is **hardcoded** in the test — adding/removing a showcase project
  means editing that assertion too.

**Assets** live under `public/assets/` (`logos/projects/<id>.svg|png`,
`screenshots/<id>.png`). SVG logos follow the house style: an emblematic mark plus an
EB Garamond wordmark on the ink/cream/blue/coral palette (see `enki.svg`, `elvis.svg`).

**Screenshots cannot be captured by an agent** (browser automation is off by
guardrail; auth-gated apps are unreachable headlessly). Evan supplies PNGs.

---

## Tier A — ready now (verify only)

These are shipped with full copy + screenshot and are already showcased. A session
only needs to confirm the live link still resolves and the copy still reads true.

- [ ] **elvis** — dbt + DuckDB, Las Vegas (showcase #1)
- [ ] **robbins** — Seattle open-data explorer (showcase #2)
- [ ] **groening** — Portland open-data explorer (showcase #3)
- [ ] **spooky** — X-Files episode explorer (showcase #4)
- [ ] **mccoy** — Spotify listening dashboard (showcase #5)
- [ ] **benten** — music workshop, Web Audio (showcase #6)

---

## Tier B — in portfolio, needs polish

### guzzolene — Gas economics tracker
Live: https://guzzo-lene.com/ (+ /demo). Has `method` + logo only.
- [ ] Add `proves`, `roleTags`, `detail`, `honestNote`
- [ ] (optional) screenshot + `showcase` rank to promote into the carousel

### enki — this website
Live: https://evanappel.me/. Featured, has `method` + logo.
- [ ] Light copy pass; decide whether it gets a `detail` page (currently none)

### olympic — Health tracker
Live: https://olympic-lime-six.vercel.app/. Thin copy, no screenshot.
- [ ] Add `proves`, `roleTags`, `detail`, `honestNote`
- [ ] Screenshot (from Evan) if promoting to showcase

### gregan — Glendora open-data explorer
Live: https://gregan-production.up.railway.app/. Being added by the orch session with
description + `method` only; it is an Elvis-family explorer like the showcased robbins/groening.
- [ ] Add `proves`, `roleTags`, `detail`, `honestNote` to match its siblings
- [ ] Screenshot (from Evan) + `showcase` rank to sit alongside the other explorers

### wordly — Private word game (DONE except screenshot)
Live: https://wordly-seven-rust.vercel.app/. Full copy + `wordly.svg` already written on
branch `add-weather-wordly-projects`.
- [ ] Screenshot of a logged-in board (from Evan — auth-gated) → then `showcase` rank

### weather — Ad-free forecast + radar (DONE except screenshot)
Live: https://weather-iota-murex.vercel.app/. Full copy + `weather.svg` already written on
branch `add-weather-wordly-projects`.
- [ ] Screenshot of the forecast/radar view (from Evan) → then `showcase` rank

---

## Tier C — work-in-progress, ship first

### boor — AI D&D virtual tabletop
WIP, spec only, no deployment. Python service + TypeScript web client.
- [ ] Ship a demoable deployment (or a sign-in-free `demo`)
- [ ] Remove `wip`; write full copy (`proves`, `roleTags`, `detail`, `honestNote`)
- [ ] Logo + screenshot

### roodle — (define it)
WIP, **no description in the repo yet**. Being added by the orch session.
- [ ] Decide what roodle is and whether it belongs; write the description
- [ ] Ship it, then full copy + assets

---

## Tier D — new, not in the portfolio yet

### ansel — macOS photo captioning CLI
Public repo. This is a **terminal CLI**, not a web app (osxphotos + photoscript, SQLite
progress store). No live URL by nature — model it like bartleby was: `github` + copy, no `live`.
- [ ] Write a new `data/projects.ts` entry: `description`, `tech`, `github`, `method`
- [ ] `proves`/`roleTags`/`detail`/`honestNote` (frame the "resumable local-first CLI" angle)
- [ ] Logo (`ansel.svg`)

### niu_ma — async Chinese-standard mahjong
Private repo. FastAPI + pure rules engine, htmx frontend, Postgres, magic-link, Resend,
Railway. **Deployment not confirmed** — no live URL found.
- [ ] Confirm or create a Railway deployment; capture the live URL
- [ ] Write a new entry: `description`, `tech`, `github`, `live`, `method`
- [ ] `proves`/`roleTags`/`detail`/`honestNote` (deterministic tested rules engine is the story)
- [ ] Logo + screenshot (from Evan — likely auth-gated)

---

## Remove from the portfolio (not on the roster)

Delete these entries from `data/projects.ts` (and their showcase/test references):

- [ ] **lucre** — personal-finance PWA (already being archived by orch)
- [ ] **bartleby** — collaborative CRDT notes (confirmed drop)
- [ ] **seer** — handwriting → Markdown (already being archived by orch)
- [ ] **wormsworth** — poetry commonplace book (wip)
- [ ] **learn / learn-typescript / learn-sql / learn-ai / learn-spark-databricks** — learning ladders

---

## Coordination note (two in-flight branches)

- `wordly` + `weather` are committed on worktree branch **`add-weather-wordly-projects`**
  (`../enki-wordly-weather`), additive off HEAD.
- The **orch** session is concurrently editing `data/projects.ts` on `main` (removing
  lucre/seer, adding gregan/roodle, consolidating learn).
- These will conflict in `data/projects.ts`, its test, and `DECISIONS.md`. Reconcile once,
  then use this roster as the source of truth for the final set.
