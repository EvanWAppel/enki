@AGENTS.md
prime directive: don't do anything you're unclear about ask me about it.

<!-- factotum:blocked-protocol -->
**Blockers → Jira (fleet repo, system standard).** Anything only Evan can resolve — a credential, a deploy, external access, or a decision — becomes a ticket in the Jira `EA` space on *Needs Evan*, component `enki`, **with the specific steps a human takes to unblock it** (the action, where, any URL / path / env-var). From a session on Evan's Mac, file it with `uv run --project ~/Documents/_system sys file-blocker --component enki --title "…" --body-file steps.md` (add `--nice-to-have` for 🟡; default 🔴); fleet daemon runs on the box park their own ticket on *Needs Evan* instead. Two kinds stay in the root `BLOCKED.md`, in the standard format: **`[sec]` blockers** (`- [ ] 🔴 [sec] …`, because the security dashboard counts them only there, D-052) and anything Jira must not hold — roster/user data, secret values, unpublished writing (D-039). `BLOCKED.md` keeps its heading and a pointer to Jira. _system's blocked-router mirrors both into Evan's todo dashboard. Full rule: Evan's global `~/.claude/CLAUDE.md` and _system D-051/D-052.
<!-- /factotum:blocked-protocol -->

**Closing blockers fixed in a session (_system D-055/D-056/D-056a).** When work in a session resolves something a *Needs Evan* ticket is waiting on, propose closing it — never close silently:
1. **Find it.** Search `project = EA AND component = enki AND status = "Needs Evan"` (Atlassian connector). Name the match and why; if it's ambiguous, ask.
2. **Draft the comment** in a scratchpad file: what was done, how it was verified (or "on Evan's word" when only he can check, e.g. a value in an env file), and the commit/PR link. Never a secret value.
3. **Dry-run, then ask.** `uv run --project ~/Documents/_system sys resolve-blocker EA-N --comment-file note.md --dry-run`, then ask with AskUserQuestion, comment in the preview: *Close it* / *Edit the comment* / *Comment only, leave open* / *Skip*. Several tickets → one question.
4. **Only on "Close it"**, run it without `--dry-run`; report the new status and link. *Comment only* (a partial fix) posts via the connector and leaves the ticket on *Needs Evan*.
- A refusal is an answer, not an obstacle. A merge-handoff refusal means: ask whether the PR is merged, and add `--done` only after Evan says yes. Don't reassign a ticket to get past the bot-assignee check without asking.
- `[sec]` and other `BLOCKED.md` items aren't in Jira: tick the line there instead.
- If `sys resolve-blocker` doesn't exist, the local `_system` checkout is behind its `main`. Say so and stop; don't switch its branch.

<!-- factotum:recl-standing-rules -->
**ROCRLL** — this project follows Requirements → Orchestrate → Check → Review → Loop → Ledger.

- **Requirements.** Draft/keep a `PRD.md` via interview — walk every branch, don't guess.
  The interview also produces the `TASKS.md` grouping and seeds the Ledger.
- **Orchestrate.** Default is linear. Fan out to subagents **only when a task group has ≥3
  genuinely independent tasks**; give each its **own git worktree**, merge back one at a
  time, and remove each worktree and its branch once merged or abandoned.
  **Precondition:** the project must be its own standalone git repo. Worktrees are for
  overlapping-file work — disjoint-file fan-out may use lighter same-tree partitioning.
  **Agents are hands, you're the head:** subagents write code in their worktrees; they never
  inspect raw data or make design/verdict calls — those escalate to the orchestrator.
- **Check.** TDD, test-first. **The human inspects the data; the agent never sees raw data.**
  Run Check **centrally at the orchestrator** at each merge join, not inside each worktree:
  **affected tests + lint + typecheck at each join; the full suite once, before the group's
  final merge to main.**
- **Review.** Independent adversarial review on **every merge to the main line**. Default
  reviewer: a fresh-context same-model subagent; escalate cross-model for high-stakes/security.
  **High-severity findings block, but the human adjudicates them against the primary source** —
  reviewers over-call; never auto-action a finding. Everything below high is advisory.
- **Loop.** Iterate.
- **Ledger.** Record every **decision with a real trade-off** (chose X, rejected Y, why) in a
  `DECISIONS.md` append log. The agent drafts the entry; the human confirms it.

**Guardrails (always on):** TDD-first · nothing external sent/merged/published/deployed
without explicit human approval · the agent never sees raw data · **no autonomous
(Ralph-style) self-feeding loops** · **prime directive — if anything is unclear, stop and ask.**

**Standard artifacts:** `PRD.md` · `TASKS.md` (parallel groups marked) ·
`AGENTS.md`/`CLAUDE.md` · `DECISIONS.md` · `BLOCKED.md`.

<!-- /factotum:recl-standing-rules -->
