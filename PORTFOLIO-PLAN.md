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

### gregan — Glendora open-data explorer ✅ DONE (featured)
Live: https://gregan-production.up.railway.app/. Added in the roster-prune PR as a `featured`
entry with full copy (`proves`, `roleTags`, `detail`, `honestNote`) matching its explorer siblings.
- [x] Added featured with full copy and a detail page
- [ ] Screenshot (from Evan) + `showcase` rank to sit alongside the other explorers

### wordly — Private word game ✅ DONE (showcased)
Live: https://wordly-seven-rust.vercel.app/. Full copy + logo + a playable-demo gif; merged
to `main` (#36) and holds `showcase` rank 7.
- [x] Showcased with a real demo gif

### weather → Atmosphere — Personal weather app ✅ DONE (reframed)
Live: https://weather-iota-murex.vercel.app/. Reframed from "ad-free forecast + radar" to
**"Atmosphere: A Personal Weather App"** (sky-reactive UI, saved locations, command palette,
PWA, Playwright suite); full copy + `weather.svg`. Merged to `main` via the reconcile PR.
- [x] Reframed and shipped as a `featured` entry
- [ ] (optional) Screenshot of the forecast/radar view (from Evan) → then a `showcase` rank

---

## Tier C — work-in-progress, ship first

### boor — AI D&D virtual tabletop ✅ DONE (showcased)
Promoted to the showcase with a real offline-demo gif; merged to `main` via the reconcile PR
at `showcase` rank 8. Full copy (`proves`, `roleTags`, `detail`, `honestNote`) frames the
bounded-LLM-agent architecture. No public live link yet (multiplayer table not deployed).
- [x] Showcased with `boor.gif` and full copy
- [ ] (future) Deploy the multiplayer table → add a `live`/`demo` link

### roodle — Draw and Guess with Friends ✅ DONE (featured, live)
Live: https://roodle-web-production.up.railway.app/. Async Pictionary / drawing-and-guessing
game (Next.js + Postgres/Drizzle + magic-link + canvas replay). Promoted from wip to a
`featured` entry with full copy and a detail page.
- [x] Live URL confirmed (200); dropped `wip`, wrote shipped copy
- [ ] (optional) Screenshot (from Evan) + `showcase` rank

---

## Tier D — new, not in the portfolio yet

### ansel — macOS photo captioning CLI ✅ DONE (featured, github-only)
Added in the roster-prune PR as a `featured` entry with full copy and a detail page, framed on
the "resumable local-first CLI" angle. No `live` link by nature (it is a terminal CLI).
- [x] Added featured with full copy (`proves`, `roleTags`, `detail`, `honestNote`)
- [ ] (optional) Logo (`ansel.svg`) — currently uses the monogram fallback

### niu_ma — Chinese-standard mahjong ⏳ ADDED as WIP (deploy failing)
Added as a `wip` card with description + tech + method (FastAPI + pure deterministic rules
engine, Postgres, htmx, magic-link, Resend, Railway). No live link: the given URL
(niuma-production.up.railway.app) returns 404 on every attempt.
- [x] Added as a wip entry with accurate copy
- [ ] Healthy deployment + working URL (from Evan) → drop `wip`, write shipped copy, then
  `proves`/`detail`/`honestNote` and a screenshot for the showcase (tracked in BLOCKED.md).

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

**Complete.** All 16 roster projects now have cards: guzzolene, enki, mccoy, olympic, elvis,
groening, robbins, spooky, benten, wordly (showcase 7), weather/Atmosphere, boor (showcase 8),
gregan, ansel, roodle (live), and niu_ma (wip). Removed: lucre, bartleby, seer, wormsworth,
and the four `learn-*` cards.

**The one non-live card: `niu_ma`** ships as `wip` — its Railway URL 404s ("failing a lot"),
so no live link until the deployment is healthy (see BLOCKED.md).

**Promotions still available** (each needs a screenshot from Evan, tracked in BLOCKED.md):
`weather`, `gregan`, and `roodle` into the showcase carousel; `niu_ma` to featured once its
deployment serves a 200.
