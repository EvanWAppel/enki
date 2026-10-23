# TASKS — enki

`[ ]` todo · `[~]` in progress · `[x]` done · `[!]` blocked.

## Platform (handed off from _system)

Site tasks handed to this repo by the private `~/Documents/_system` platform repo. Do them
here, in enki's own session. Nothing deploys without Evan's approval (pushing to `main`
auto-deploys).

- [ ] **PLAT-SITE-01 — Point project cards at `*.evanappel.me` subdomains** _(handed off 2026-10-22)_
  - **Why:** `data/projects.ts` still links raw `*.up.railway.app` / `*.vercel.app` origins.
    The subdomains are live, and the origins will later be closed behind Cloudflare Access.
  - **Map** (each subdomain returned HTTP 200 on 2026-10-22; re-check with `curl -sI` first):

    | card `id` | field | new URL |
    |---|---|---|
    | mccoy | live | `https://mccoy.evanappel.me/` |
    | olympic | live | `https://olympic.evanappel.me/` |
    | elvis | live | `https://elvis.evanappel.me/` |
    | groening | live | `https://groening.evanappel.me/` |
    | robbins | live | `https://robbins.evanappel.me/` |
    | spooky | live | `https://spooky.evanappel.me/` |
    | benten | demo | `https://benten.evanappel.me/` |
    | wordly | live / demo | `https://wordly.evanappel.me/` · `/demo` |
    | weather | live | `https://mondaugen.evanappel.me/` (no `weather.` subdomain exists) |
    | gregan | live | `https://gregan.evanappel.me/` |
    | roodle | live | `https://roodle.evanappel.me/` |

  - **Also:** grep the repo (`app/`, `components/`, `data/`, `writing/`, `RECRUITER-PRIMER.md`)
    for any other `railway.app` / `vercel.app` links. `siteConfig.url` is already
    `https://evanappel.me`; nothing to do there.
  - **Tests first:** add a `__tests__/data/projects.test.ts` case asserting that no `live` /
    `demo` URL contains `railway.app` or `vercel.app`.
  - **Done when:** tests + lint green, PR open, deploy held for Evan's approval.

- [x] **PLAT-REG-01 — Verify and commit `project.toml`** _(handed off 2026-10-22)_
  - **Why:** `_system` builds the registry of every project from each repo's own
    `project.toml` (replacing `portfolio/projects.toml`). `_system` drafted this repo's file
    from the code and the reorg inventory; only this session can confirm it.
  - **Do:** read `project.toml` against the code and the live deploy (`curl -sI` the domain;
    Railway/Vercel dashboards for service names). Fix anything wrong. Unsure → write
    `"unknown"` and add a `BLOCKED.md` item, never guess. Then set `verified = true`, add
    `"PLAT-REG-01"` to `[platform] done`, and commit on a branch → PR.
  - **Check:** `cd ~/Documents/_system && uv run sys registry` shows this repo as `ok` (or
    `⚠ guardrail` if a paid key is still uncapped; that's a real open item, not a format error).
  - Format reference: `~/Documents/_system/docs/project-toml.md`.
