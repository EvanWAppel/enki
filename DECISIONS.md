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
