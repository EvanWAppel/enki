# PORTFOLIO-PLAN — target roster and per-project prep

Working plan for curating the enki portfolio (`data/projects.ts`). The **target
roster is 16 projects**; everything not on it gets removed. Each project below has a
checklist for the session that brings it to "portfolio state." Check items off as you go.

_Drafted 2026-09-26. Roster chosen by Evan. bartleby confirmed dropped. Status refreshed
2026-10-24 against `data/projects.ts` (after #42, #43)._

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
- `showcase: <n>` (unique rank), `screenshot: "/assets/screenshots/<file>.gif"` (the test
  accepts `.png`, `.jpg` or `.gif`; every current card uses an animated GIF), `proves`,
  `roleTags: [...]`, `detail`, `honestNote`, not `wip`. By convention also `featured: true`
  (every showcased card has it, though the test does not check it).
- The showcase set **and its order** are **hardcoded** in the test, so adding, removing or
  re-ranking a showcase project means editing that assertion too.

**Assets** live under `public/assets/` (`logos/projects/<id>.svg|png`,
`screenshots/<id>.gif`). SVG logos follow the house style: an emblematic mark plus an
EB Garamond wordmark on the ink/cream/blue/coral palette (see `enki.svg`, `elvis.svg`).
Note enki's card id is `portfolio` (screenshot `portfolio.gif`, logo `enki.svg`).

**Screenshots need a browser**, which is off by guardrail for agents (and auth-gated apps
are unreachable headlessly). The current GIFs were recorded from the live sites in #42;
new captures come from Evan.

---

## Showcase — all 14 shipped web projects (verify only)

Since #42 (all shipped projects promoted, each with an animated GIF) and #43 (top three
reordered to elvis, weather, mccoy), every shipped project with a web UI is in the
carousel with full copy (`proves`, `roleTags`, `detail`, `honestNote`). A session only
needs to confirm the live link still resolves and the copy still reads true.

- [ ] **elvis** — dbt + DuckDB, Las Vegas (showcase #1)
- [ ] **weather** — Atmosphere, personal weather app (showcase #2)
- [ ] **mccoy** — Spotify listening dashboard (showcase #3)
- [ ] **robbins** — Seattle open-data explorer (showcase #4)
- [ ] **groening** — Portland open-data explorer (showcase #5)
- [ ] **spooky** — X-Files episode explorer (showcase #6)
- [ ] **benten** — music workshop, Web Audio; `demo` link only, no `live` (showcase #7)
- [ ] **wordly** — private word game, `live` + `/demo` (showcase #8)
- [ ] **boor** — AI D&D virtual tabletop; github only, no `live`/`demo` (showcase #9)
- [ ] **gregan** — Glendora open-data explorer (showcase #10)
- [ ] **roodle** — draw and guess with friends (showcase #11)
- [ ] **guzzolene** — gas economics tracker, `live` + `/demo` (showcase #12)
- [ ] **olympic** — health tracker (showcase #13)
- [ ] **enki** (`portfolio`) — this website (showcase #14)

---

## Open per-project follow-ups

### enki — this website (showcase #14)
Live: https://evanappel.me/. Has full copy, a detail page, `enki.svg` and `portfolio.gif`.
- [x] Detail page (has `detail` + `honestNote`, added in #42)
- [ ] Light copy pass (Evan's call)

### boor — AI D&D virtual tabletop (showcase #9)
No public live link yet (multiplayer table not deployed).
- [x] Showcased with `boor.gif` and full copy
- [ ] (future) Deploy the multiplayer table → add a `live`/`demo` link

### Logos
Cards with a logo: guzzolene, enki, elvis, spooky, wordly, weather (SVG); mccoy, olympic
(PNG). The rest (robbins, groening, benten, boor, gregan, ansel, roodle, niu_ma) use the
monogram fallback.

### ansel — macOS photo captioning CLI (featured, not showcased)
A `featured` entry with full copy and a detail page, framed on the "resumable local-first
CLI" angle. No `live` link and no screenshot by nature (terminal CLI, no web UI to record),
so it stays out of the carousel.
- [x] Added featured with full copy (`proves`, `roleTags`, `detail`, `honestNote`)
- [ ] (optional) Logo (`ansel.svg`), currently the monogram fallback

### niu_ma — Chinese-standard mahjong ⏳ WIP (deploy failing)
A `wip` card with description + tech + method (FastAPI + pure deterministic rules engine,
Postgres, htmx, magic-link, Resend, Railway). No live link: the given URL
(niuma-production.up.railway.app) returned 404 on every attempt.
- [x] Added as a wip entry with accurate copy
- [ ] Healthy deployment + working URL (from Evan) → drop `wip`, write shipped copy, then
  `proves`/`detail`/`honestNote` and a screenshot for the showcase (tracked in BLOCKED.md).

### Done (kept for history)
- [x] guzzolene: full copy + GIF, promoted to showcase (#42)
- [x] olympic: full copy + GIF, promoted to showcase (#42)
- [x] weather: reframed as **Atmosphere: A Personal Weather App** (#39), GIF + showcase (#42)
- [x] gregan: added featured with full copy (#40), GIF + showcase (#42)
- [x] roodle: live URL confirmed, dropped `wip` (#41), GIF + showcase (#42)
- [x] wordly: showcased with a playable-demo GIF (#36)

---

## Remove from the portfolio (not on the roster)

Removed from `data/projects.ts` in the roster-prune PR (test references updated):

- [x] **lucre** — personal-finance PWA
- [x] **bartleby** — collaborative CRDT notes
- [x] **seer** — handwriting to Markdown
- [x] **wormsworth** — poetry commonplace book
- [x] **learn-typescript / learn-sql / learn-ai / learn-spark-databricks** — learning ladders

---

## Status (all 16 roster projects on `main`)

**Complete.** All 16 roster projects have cards. **14 are showcased** (ranks above, matching
`data/projects.ts` and the hardcoded test): elvis, weather, mccoy, robbins, groening, spooky,
benten, wordly, boor, gregan, roodle, guzzolene, olympic, enki (`portfolio`). **ansel** is
featured but not showcased (terminal CLI, no screenshot). **niu_ma** ships as `wip`. Removed:
lucre, bartleby, seer, wormsworth, and the four `learn-*` cards.

**The non-live cards:** `niu_ma` (wip; its Railway URL 404s, so no live link until the
deployment is healthy, see BLOCKED.md), plus `boor` and `ansel` (github only) and `benten`
(`demo` link only).

**Promotions still available:** `niu_ma` once its deployment serves a 200 (then a screenshot
from Evan). `ansel` only if a visual for a terminal CLI is decided on. Nothing else is left to
promote: the weather / gregan / roodle screenshot asks were resolved by #42.
