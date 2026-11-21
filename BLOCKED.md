# BLOCKED — what I need from Evan

> **Fleet repo (_system D-036, D-051, D-052):** enki's blockers live in Jira as *Needs Evan*
> tickets (component `enki`; file with `uv run --project ~/Documents/_system sys file-blocker`);
> `sys blockers` mirrors them into the todo dashboard. Two kinds stay here: `[sec]` blockers (the
> security dashboard counts them only here) and anything Jira must not hold — rosters, secrets,
> unpublished writing. Moved 2026-11-01: EA-185, EA-186, EA-187, EA-188.

- [x] 🔴 **Cancel the Wix Premium plan and Wix domain auto-renew for evanappel.me before Nov 28, 2026** — the move off Wix is otherwise done: the registrar is now Porkbun and DNS is on Cloudflare (`gina`/`hunts.ns.cloudflare.com`, verified 2026-10-23). **To unblock:** sign in to wix.com with `appelew@gmail.com` → Account Settings → Billing & Payments → Premium Subscriptions → cancel the plan on site "A Gentle Hill Racer", and turn off auto-renew for any `evanappel.me` domain subscription still listed there. Do it before Wix renews on **Nov 28, 2026**; it is safe because nothing on the live domain depends on Wix any more. ✅ Done 2026-10-24: Evan confirmed the Wix plan is cancelled.
- [x] 🟡 **Screenshot to promote gregan into the showcase carousel** — `gregan` ships as a `featured` entry with a full detail page. To lift it into the curated showcase alongside its explorer siblings (elvis/robbins/groening), the tests require a real screenshot at `public/assets/screenshots/gregan.png`. **To unblock:** drop a PNG of the live app there and tell me; I will add the `screenshot` field, assign a `showcase` rank, and update the showcase test. ✅ Done 2026-10-24 (stale): PR #42 (2026-09-26) added `public/assets/screenshots/gregan.gif` and gave gregan `showcase: 10` with that screenshot in `data/projects.ts`; the showcase test covers it.
