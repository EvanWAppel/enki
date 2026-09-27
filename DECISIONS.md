# DECISIONS — the Ledger

The durable *why*. One entry per decision with a **real trade-off** — what was chosen, what was rejected, and why. Append-only; newest at the bottom. The agent drafts the entry; the human confirms it.

## 2026-09-25 — Add wordly, promote weather, as featured (not showcase) entries

**Context.** wordly (a private WWF-style word game, v1 shipped) and weather (ad-free
forecast + radar) are both live and were missing or stale in the portfolio. weather had
been sitting in the work-in-progress block despite being deployed.

**Chosen.** Add both as `featured` projects with full copy (proves, roleTags, detail,
honestNote) and original SVG logos, placed under "More projects" rather than the curated
showcase set.

**Rejected.** Promoting either into the 6-project `showcase` carousel now.

**Why.** The showcase test (`__tests__/data/projects.test.ts`) requires every showcased
project to lead with a real screenshot. Capturing screenshots needs a browser (off by the
global guardrail), and wordly's board sits behind magic-link auth so it cannot be reached
headlessly at all. Rather than fake or skip the screenshot invariant, both ship as featured
now; either can be promoted to showcase once Evan supplies a PNG. Tracked in BLOCKED.md.

## 2026-09-27 — Roster prune: align data/projects.ts to the 16-project roster

**Context.** PORTFOLIO-PLAN.md locked a 16-project target roster, but `main` still carried
archived and superseded cards. This pass prunes to match.

**Chosen.** Remove `lucre`, `bartleby`, `seer`, `wormsworth`, and the four separate `learn-*`
cards. Add `gregan` (featured, live Glendora open-data explorer), `ansel` (featured, macOS
photo-captioning CLI, github-only), and `roodle` (wip, async drawing game). Hold `niu_ma`.

**Rejected.** Consolidating the four `learn-*` into one `learn` card (the earlier #37/orch
approach); keeping `bartleby`. Both conflict with the final roster, which drops `learn`
entirely and drops `bartleby`.

**Why.** The roster is the source of truth. `learn` and `bartleby` are not on it, so they go.
`roodle` ships as wip because its PRD says the core game is live but no public URL could be
confirmed (blocked on a URL from Evan). `niu_ma` is held out of this pass because it has no
confirmed deployment; adding it would mean either omitting a live link or inventing one.

## 2026-09-27 — roodle goes live; niu_ma added as work-in-progress

**Context.** Evan supplied deployment URLs for the two remaining roster projects:
roodle at roodle-web-production.up.railway.app and niu_ma at niuma-production.up.railway.app,
noting niu_ma "is failing a lot."

**Chosen.** Promote `roodle` to a `featured`, live entry with full copy (it returns 200,
titled "Roodle — draw & guess with friends"). Add `niu_ma` as a `wip` card with no live link.

**Rejected.** Giving `niu_ma` a live link now.

**Why.** `niu_ma`'s URL returns 404 on every attempt (a Railway no-active-deployment page),
and the hostname variants 404 too, matching Evan's "failing a lot." Putting that link on a
public portfolio would point recruiters at a broken page. It ships as `wip` (built, honestly
described, no live link) until the deployment serves a 200. This completes all 16 roster
projects on the site, 15 live/featured and niu_ma as the one work-in-progress.
