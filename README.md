# enki

Source for [evanappel.me](https://evanappel.me), Evan Appel's portfolio site. It is a
Next.js 16 (App Router) app with React 19 and Tailwind CSS 4. Nearly everything a visitor
reads (project cards, essays, fiction, résumé variants, the "how I work" page) comes from
typed data files and Markdown in this repo, and Vitest data tests guard that content.

> Heads up: this Next.js has breaking changes from older versions. Read the guides in
> `node_modules/next/dist/docs/` before changing app code (see `AGENTS.md`).

## Getting started

Requires Node 20 (what CI uses).

```bash
npm ci            # install exactly what package-lock.json pins
npm run dev       # dev server on http://localhost:3000
npm test          # Vitest data + lib tests (run once)
npm run test:watch
npx tsc --noEmit  # typecheck
npm run build     # production build
```

CI (`.github/workflows/ci.yml`) runs `npm ci` and `npm test` on every pull request and
push to `main`.

## Pages

| Route | Source |
| --- | --- |
| `/` | Hero, project carousel, résumé and contact sections (`app/page.tsx`) |
| `/projects`, `/projects/[slug]` | `data/projects.ts` |
| `/writing`, `/writing/[slug]` | `writing/essays/` + `data/writing.ts` |
| `/fiction`, `/fiction/[slug]` | `fiction/stories/`, `fiction/poetry/` |
| `/how-i-work` | `data/howIWork.ts` |
| `/resume/[slug]` | `data/resume.ts` (one variant per slug) |

Open Graph images for the home, projects, writing and how-I-work routes come from an opengraph-image file in each route folder (for example `app/projects/opengraph-image.tsx`), using
`lib/ogCard.tsx`.

## Where the content lives

- `data/` holds the typed content (types in `types/index.ts`):
  - `data/projects.ts`: every project card (the `Project` type).
  - `data/writing.ts`: per-essay metadata (lane, order, cover image, LinkedIn permalink
    and publish date). Prose lives in the Markdown.
  - `data/resume.ts`: the résumé variants served at `/resume/[slug]`.
  - `data/howIWork.ts`: copy for the how-I-work page.
  - `data/site.ts`: name, title, bio and contact links.
- `writing/essays/`: one Markdown file per essay. The title is the leading `# ` line;
  `lib/writing.ts` reads and renders it.
- `fiction/`: short stories (`fiction/stories/`) and poems (`fiction/poetry/`) as
  Markdown, read by `lib/fiction.ts`. `lib/fictionImages.ts` assigns illustrations from
  `public/fiction-images/`.
- `public/assets/`: `public/assets/logos/projects/` (project logos, SVG or PNG) and
  `public/assets/screenshots/` (one animated GIF per showcased project).
- `public/`: also the résumé PDFs (`public/resume.pdf`, `public/resumes/`), the headshot
  and the essay images (`public/writing-images/`).
- `components/`: layout, homepage sections and UI pieces.

## Content rules (enforced by the tests in `__tests__/`)

- Copy is em-dash-free; the data tests reject the em dash (U+2014), and so does the README test.
- Every `github` / `live` / `demo` URL is absolute `https://`.
- Every project needs `id`, `title`, `description`, a non-empty `tech` list and a
  `method` line.
- A project with `detail` gets a detail page and must also have `honestNote`.
- Never invent facts: no made-up links, dates, LinkedIn URLs or screenshots.

### Showcase rules

The homepage carousel shows projects with a `showcase` rank. A showcased project needs
all of:

- a unique `showcase` rank;
- a `screenshot` under `public/assets/screenshots/` (`.png`, `.jpg` or `.gif`; every
  current card uses an animated GIF);
- `proves`, `roleTags`, `detail` and `honestNote`;
- not `wip`. By convention it is also `featured: true`.

The showcase set **and its order** are hardcoded in `__tests__/data/projects.test.ts`, so
adding, removing or re-ranking a showcase project means updating that assertion too.
Screenshots are captured by Evan; agents do not use a browser.

`PORTFOLIO-PLAN.md` tracks the roster, current ranks and per-project follow-ups.

## Working in this repo

- Test first: extend the Vitest test, watch it fail, then make it pass.
- One branch and one pull request per change. Agents open PRs; they do not merge or deploy.
- Anything waiting on Evan (credentials, deploys, DNS, copy decisions) goes in
  `BLOCKED.md`.
- Decisions with a real trade-off are recorded in `DECISIONS.md`.
- Agent instructions: `CLAUDE.md` and `AGENTS.md`.
