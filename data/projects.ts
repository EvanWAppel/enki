import type { Project } from "@/types";

// Order: the two most public, most visual projects first (per the projects-page
// brief), then the rest. Copy follows Evan's house style: em-dash-free.
export const projects: Project[] = [
  {
    id: "guzzolene",
    title: "Guzzolene: Gas Economics Tracker",
    description:
      "Tracks personal gas purchase history for a Mazda 3 Sport to see whether fuel economy has measurably changed, and to put price swings in the context of geopolitical events. Plots cost per mile overlaid with WTI crude oil prices.",
    tech: ["Python", "Jupyter", "pandas", "Matplotlib"],
    github: "https://github.com/EvanWAppel/guzzolene",
    live: "https://guzzo-lene.com/",
    demo: "https://guzzo-lene.com/demo",
    method:
      "Built with Claude Code on the RECL loop, with pytest guarding the data and the pipeline. Public on GitHub.",
    featured: true,
    logo: "/assets/logos/projects/guzzolene.svg",
  },
  {
    id: "portfolio",
    title: "enki: Personal Website",
    description:
      "This site: a clean, data-driven portfolio built with Next.js App Router, Tailwind CSS v4, and TypeScript. Zero-config Vercel deployment.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/EvanWAppel/enki",
    live: "https://evanappel.me/",
    method:
      "Designed and shipped with agentic tooling, with Vitest holding the components steady. Public.",
    featured: true,
    logo: "/assets/logos/projects/enki.svg",
  },
  {
    id: "mccoy",
    title: "McCoy: Spotify Listening Dashboard",
    description:
      "A personal Spotify listening-habits dashboard with a DJ-style record-flipping playlist builder. Visualizes weekly listening trends and turns them into new playlists.",
    tech: ["Python", "Plotly Dash", "Spotify API", "Railway"],
    github: "https://github.com/EvanWAppel/mccoy",
    live: "https://web-production-bee9a.up.railway.app/",
    method:
      "Claude Code with external-API integration (Spotify), tested end to end.",
    proves:
      "External-API integration end to end, from an OAuth data pipeline to weekly snapshots and a live dashboard.",
    detail:
      "McCoy is a personal Spotify listening dashboard with a DJ-style, record-flipping playlist builder. It captures my real listening data on a weekly snapshot pipeline, visualizes the trends, and turns them into new playlists. It is my end-to-end external-API project: OAuth, a scheduled data pull, storage, and a live front end, tested through.",
    honestNote:
      "What is real: the OAuth integration, the weekly snapshots, and the live dashboard run on my own listening data. Where I was learning: it is single-user by design, built for one account rather than hardened for many.",
    roleTags: ["Full-Stack", "Forward Deployed"],
    featured: true,
    showcase: 5,
    screenshot: "/assets/screenshots/mccoy.png",
    logo: "/assets/logos/projects/mccoy.png",
  },
  {
    id: "olympic",
    title: "Olympic: Health Tracker",
    description:
      "A personal health-tracking app that ingests data from multiple sources, including ResMed/CPAP therapy data, into one unified dashboard.",
    tech: ["Next.js", "TypeScript"],
    github: "https://github.com/EvanWAppel/olympic",
    live: "https://olympic-lime-six.vercel.app/",
    method:
      "Claude Code, multi-source data ingestion and visualization, verification-first.",
    featured: true,
    logo: "/assets/logos/projects/olympic.png",
  },
  {
    id: "elvis",
    title: "Elvis: dbt + DuckDB Portfolio",
    description:
      "Named after Las Vegas's most recognizable figure, this project explores free datasets about the Las Vegas Valley using dbt and DuckDB, surfaced through a Streamlit app. Built to learn analytics-engineering patterns: modular transformations, testing, and dimensional modeling.",
    tech: ["dbt", "DuckDB", "Streamlit", "SQL", "Python", "Railway"],
    github: "https://github.com/EvanWAppel/elvis",
    live: "https://elvis-production-e07a.up.railway.app/",
    method:
      "Claude Code, analytics-engineering patterns, with dbt tests on every model.",
    proves:
      "Production analytics engineering, an extract, load, model, test, and serve pipeline run the way a data team runs it.",
    detail:
      "Elvis takes free open data about the Las Vegas Valley, loads it into a DuckDB warehouse, models it with dbt, and serves it through a Streamlit app. Every number on every page is a dbt model queried live, so the whole thing runs on the same extract, load, model, test, and serve workflow a data team uses in production. I built it to learn analytics-engineering patterns by shipping them end to end: modular transformations, a test on every model, and dimensional modeling.",
    honestNote:
      "What is real: the pipeline runs, every model is tested, and the app is live. Where I was learning: this is portfolio work built to practice dbt patterns, not a system with production traffic behind it.",
    roleTags: ["Analytics Engineering", "Data Engineering"],
    featured: true,
    showcase: 1,
    screenshot: "/assets/screenshots/elvis.png",
    logo: "/assets/logos/projects/elvis.svg",
  },
  {
    id: "groening",
    title: "Groening: Portland Open-Data Explorer",
    description:
      "An interactive, multi-page explorer over free public datasets about the Portland, OR metro (Multnomah, Washington, and Clackamas counties), surfaced as maps, charts, and searchable tables. A Portland port of Elvis: same architecture, a DuckDB warehouse modeled with dbt, different city.",
    tech: ["dbt", "DuckDB", "Streamlit", "Altair", "PyDeck", "Railway"],
    github: "https://github.com/EvanWAppel/groening",
    live: "https://groening-production.up.railway.app/",
    method:
      "Claude Code, a reproducible ELT-plus-dbt warehouse baked at build time, with the city-specific config isolated to one file.",
    proves:
      "A reproducible dbt warehouse baked fresh at build time, with the city-specific config isolated to one file.",
    detail:
      "Groening is a Portland port of Elvis: the same architecture, a DuckDB warehouse modeled with dbt, aimed at free public data for the Portland metro across Multnomah, Washington, and Clackamas counties. The design goal was reproducibility. The warehouse is baked fresh at build time, and everything city-specific is isolated to a single config file, so pointing the whole thing at a new city is a small, contained change.",
    honestNote:
      "What is real: the build is reproducible, and the config isolation actually holds, which is the point I was testing. Where I was learning: it reuses the Elvis pattern deliberately, so the novelty is in the portability, not a from-scratch design.",
    roleTags: ["Analytics Engineering", "Forward Deployed"],
    featured: true,
    showcase: 3,
    screenshot: "/assets/screenshots/groening.png",
    // No graphical logo in repo yet; the card leads with the screenshot.
  },
  {
    id: "robbins",
    title: "Robbins: Seattle Open-Data Explorer",
    description:
      "An interactive, multi-page explorer over free public datasets about the Seattle metro (King County core, extending to Pierce and Snohomish), presented as maps, trends, and searchable tables. Ingests two access patterns, Socrata's SODA API and ArcGIS FeatureServers, into a DuckDB warehouse modeled with dbt.",
    tech: ["dbt", "DuckDB", "Streamlit", "Altair", "PyDeck", "Railway"],
    github: "https://github.com/EvanWAppel/robbins",
    live: "https://robbins-production.up.railway.app/",
    method:
      "Claude Code, multi-source ingestion across two public-data APIs, warehouse baked fresh on every deploy.",
    proves:
      "Multi-source ingestion and dimensional modeling, pulling two public-data APIs into one tested warehouse.",
    detail:
      "Robbins is a multi-page explorer over public data about the Seattle metro, from the King County core out to Pierce and Snohomish. The interesting part is ingestion: it pulls from two different access patterns, Socrata's SODA API and ArcGIS FeatureServers, and lands both in a DuckDB warehouse modeled with dbt. It is the same architecture as Elvis, pointed at a harder data-sourcing problem.",
    honestNote:
      "What is real: both ingestion paths work, and the warehouse is modeled and tested. Where I was learning: it is a portfolio build, so the emphasis is on covering the ingestion patterns cleanly rather than on scale.",
    roleTags: ["Analytics Engineering", "Data Engineering"],
    featured: true,
    showcase: 2,
    screenshot: "/assets/screenshots/robbins.png",
    // No graphical logo in repo yet; the card leads with the screenshot.
  },
  {
    id: "spooky",
    title: "Spooky: X-Files Episode Explorer",
    description:
      "An episode data explorer for The X-Files, built around the fact that nobody agrees which episodes are 'mythology.' It stores three sources' verdicts per episode, derives a defensible label by vote, and renders the disagreement as a first-class feature with contested-episode badges and per-source breakdowns.",
    tech: ["Python", "Plotly Dash", "pandas", "Railway"],
    github: "https://github.com/EvanWAppel/spooky",
    live: "https://web-production-61a00.up.railway.app/",
    method:
      "Claude Code with TDD against recorded API payloads, plus legal-shape and provenance tests in CI.",
    proves:
      "Test-driven data work, with recorded-payload TDD plus provenance and legal-shape checks running in CI.",
    detail:
      "Spooky is an episode data explorer for The X-Files, built around the fact that nobody agrees which episodes count as 'mythology.' Instead of picking a side, it stores three sources' verdicts per episode, derives a defensible label by vote, and renders the disagreement itself as a feature, with contested-episode badges and per-source breakdowns. It was an exercise in modeling provenance honestly rather than flattening it away.",
    honestNote:
      "What is real: the provenance model, the vote logic, and the tests, built with TDD against recorded API payloads plus legal-shape and provenance checks in CI. Where I was learning: the subject is deliberately low-stakes so I could focus on the data-modeling and testing ideas.",
    roleTags: ["Data Engineering", "Developer Advocacy"],
    featured: true,
    showcase: 4,
    screenshot: "/assets/screenshots/spooky.png",
    logo: "/assets/logos/projects/spooky.svg",
  },
  {
    id: "benten",
    title: "Benten: Music Workshop",
    description:
      "A personal music workshop named after the Japanese goddess of music: practice logs, theory notes, a riff library, and composition sketches, paired with an interactive app for playing chord progressions on a fretboard, recording and overdubbing takes, building effect chains, and searching tabs. Everything it writes stays clean, hand-editable Markdown.",
    tech: ["Python", "JavaScript", "Web Audio API", "Node", "Railway"],
    github: "https://github.com/EvanWAppel/benten",
    demo: "https://benten-production.up.railway.app/",
    method:
      "Claude Code, logic tested first with pytest and Node, then the interface, then a full walk through in a real browser.",
    proves:
      "An interactive full-stack build, Web Audio in the browser with logic tested first in pytest and Node.",
    detail:
      "Benten is a personal music workshop named after the Japanese goddess of music. Alongside practice logs, theory notes, and a riff library kept as clean Markdown, it has an interactive app for playing chord progressions on a fretboard, recording and overdubbing takes, building effect chains, and searching tabs, all in the browser with the Web Audio API. I built the logic first and tested it, then the interface, then walked the whole thing through in a real browser.",
    honestNote:
      "What is real: the audio tools work in the browser, and the logic is tested first in pytest and Node. Where I was learning: it is a personal tool built for how I practice, so it favors my own workflow over general-purpose polish.",
    roleTags: ["Full-Stack", "Developer Advocacy"],
    featured: true,
    showcase: 6,
    screenshot: "/assets/screenshots/benten.png",
    // No graphical logo in repo yet; the card leads with the screenshot.
  },
  {
    id: "wordly",
    title: "Wordly: Private Word Game",
    description:
      "A private, invite-only word game in the Words With Friends style for a small circle of friends and family, with no ads, no paywalls, and no power-ups to buy. It is an installable web app: async turn-based play, a faithful 15 by 15 board and tile bag, live dictionary-checked scoring, and a ping when it is your turn.",
    tech: ["Next.js", "TypeScript", "Neon Postgres", "Drizzle ORM", "Resend", "Web Push", "Vercel"],
    github: "https://github.com/EvanWAppel/wordly",
    live: "https://wordly-seven-rust.vercel.app/",
    demo: "https://wordly-seven-rust.vercel.app/demo",
    method:
      "Claude Code from a written PRD, with the game rules and scoring tested first, then magic-link auth, a Postgres data model, and email plus web-push notifications wired end to end.",
    proves:
      "A full-stack multiplayer app end to end, from magic-link auth and a Postgres data model to email and web-push notifications.",
    detail:
      "Wordly is a private, invite-only word game in the Words With Friends style, built so a small circle of friends and family can play with no ads, no paywalls, and no microtransactions, ever. It is an installable web app with async turn-based play, a faithful 15 by 15 board and 104-tile bag, live dictionary-checked scoring, and a turn notification by web push with an email fallback. New players join only by email invite from someone already in the game, so there is no public signup. Under it sits magic-link auth, a Neon Postgres store modeled with Drizzle, and Resend for mail.",
    honestNote:
      "What is real: v1 is shipped and played, with magic-link auth, the Postgres-backed game state, dictionary validation, and turn notifications all live. Where I was learning: it is invite-only by design and started as a single shared game, with concurrent games and wider invites the next step.",
    roleTags: ["Full-Stack"],
    featured: true,
    showcase: 7,
    screenshot: "/assets/screenshots/wordly.gif",
    logo: "/assets/logos/projects/wordly.svg",
  },
  {
    id: "weather",
    title: "Atmosphere: A Personal Weather App",
    description:
      "A calm, ad-free personal weather app built around the two things a weather site is actually for: a 10-day forecast and live radar, over a dark, sky-reactive backdrop that animates with the current conditions and the time of day. It adds saved locations, a keyboard command palette, and an installable PWA. Every data source is keyless.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MapLibre",
      "uPlot",
      "PWA",
      "Vercel",
    ],
    github: "https://github.com/EvanWAppel/weather",
    live: "https://weather-iota-murex.vercel.app/",
    method:
      "Claude Code through a Requirements, Orchestrate, Check, Review loop from a PRD and task board: logic tested first, adversarially reviewed on every merge, with a unit and Playwright suite in CI and data from keyless public APIs (Open-Meteo, RainViewer).",
    proves:
      "A polished, accessible front end on keyless public APIs: an interactive radar map, forecast charts, a sky-reactive animated UI, favorites and a command palette, and an installable PWA, with nothing to configure.",
    detail:
      "Atmosphere is a personal weather app, a calm and ad-free take on the two features a weather site is actually for: a 10-day forecast (a current-conditions hero plus hourly trend charts) and an interactive precipitation radar (MapLibre over OpenStreetMap with RainViewer tiles). The signature is a dark glass UI over a sky-reactive backdrop that animates with the current conditions and the time of day, gated behind reduced-motion. It adds the conveniences of something you would open every morning: saved locations, a keyboard command palette, and sunrise and sunset times, plus a dynamic Open Graph share card and an installable PWA that falls back to your last forecast offline. The design constraint was keylessness: every data source (Open-Meteo forecast and geocoding, RainViewer radar) is public and needs no API key, so there is nothing to configure and no secret to leak.",
    honestNote:
      "What is real: the forecast, geocoding, animated radar, favorites, and offline fallback all run live off keyless public APIs, with a unit and Playwright suite green in CI. It began as an ad-free reproduction of Weather Underground's two best features, then was reframed as a personal weather app. The scope stays deliberately those two features, done well.",
    roleTags: ["Full-Stack"],
    featured: true,
    logo: "/assets/logos/projects/weather.svg",
  },
  {
    id: "boor",
    title: "Boor: AI Dungeons & Dragons Table",
    description:
      "A web-based virtual tabletop for running a persistent D&D campaign that keeps going when players cannot make it. When someone is absent, an AI plays their character in their voice and within limits they set in advance, so the party stays whole and the session happens as planned. The DM role is just as flexible: a human can run the game, or the AI can.",
    tech: [
      "Python",
      "FastAPI",
      "Claude API",
      "TypeScript",
      "Next.js",
      "Postgres",
      "WebSockets",
      "pytest",
    ],
    github: "https://github.com/EvanWAppel/boor",
    method:
      "Built with Claude Code from a written PRD on the RECL loop. The language model proposes each in-character action, a pure guardrail layer checks it against the player's red lines, and a deterministic 5e rules engine adjudicates the result. Model-mocked pytest plus an eval harness keep it honest.",
    proves:
      "A bounded LLM agent that takes real in-character actions through a deterministic rules engine, refuses actions that cross the player's stated red lines, and is graded by an eval harness for mechanical validity and persona fidelity.",
    detail:
      "Boor is a virtual tabletop for a persistent D&D campaign that keeps going when a player cannot make it. Mark a player absent and an AI stands in for their character, acting in that player's voice and inside limits they set in advance. The interesting part is the agent architecture. The language model never invents a die roll or bends a rule; it reasons about what the character would do and emits a structured tool call, and a separate deterministic 5e rules engine adjudicates the outcome. Between the two sits a pure, tested guardrail layer that checks every proposed action against the character's standing red lines, so a tempting but forbidden move, such as swinging at a charmed ally, is refused and logged rather than executed. An eval harness scores the stand-in on three axes: mechanical validity, red-line adherence, and, with an LLM as judge, whether it still reads like the character. That reasons-here, adjudicates-there split, wrapped in guardrails and evals, is the whole point. It is the shape of a production agent, built small enough to see end to end.",
    honestNote:
      "What is real: the 5e rules engine, the async SQLAlchemy and Postgres data layer, Clerk auth, and the AI stand-in slice (structured tool-calling, the guardrail refusal layer, and the eval harness) all exist and are covered by a real test suite. The screenshot is the actual offline demo, which runs on a scripted reasoner with no API key so the flow is reproducible; the live-model path exists behind an env-gated test. Where I am still building: the real-time multiplayer table is written but not yet deployed, so there is no public live link yet, and the absent-player flow that hands live control to the AI mid-session is the next milestone.",
    roleTags: ["AI Engineering", "Full-Stack"],
    featured: true,
    showcase: 8,
    screenshot: "/assets/screenshots/boor.gif",
  },
  {
    id: "gregan",
    title: "Gregan: Glendora Open-Data Explorer",
    description:
      "An interactive, multi-page explorer over free public data about Glendora, California and its San Gabriel foothills setting, surfaced as maps, charts, and searchable tables. It ports the Elvis and Robbins engine to a new city, fetching city, county, state, and federal open data into a DuckDB warehouse modeled with dbt.",
    tech: ["dbt", "DuckDB", "Streamlit", "Altair", "PyDeck", "Railway"],
    github: "https://github.com/EvanWAppel/gregan",
    live: "https://gregan-production.up.railway.app/",
    method:
      "Claude Code on the RECL loop, a reproducible ELT-plus-dbt warehouse baked at build time, with dbt tests on the models.",
    proves:
      "Multi-source ingestion narrowed to one small city, pulling three access patterns (city ArcGIS, filtered county and federal files, and Socrata-style APIs) into one tested DuckDB and dbt warehouse.",
    detail:
      "Gregan is a Glendora, California open-data explorer built on the same Elvis, Robbins, and Groening engine: free public datasets fetched into a DuckDB warehouse, modeled with dbt, and served through a multi-page Streamlit app as maps, charts, and searchable tables. The interesting part is the sourcing. Glendora's data splits three ways, and that shape drives the warehouse: the city's own ArcGIS server for parks, street trees, and zoning; county, state, and federal files filtered down to Glendora for inspections, groundwater, air quality, and wildfire; and a logged DROP list for everything not machine-readable. It is the same reproducible pipeline pointed at a harder scope-a-region-to-one-city problem.",
    honestNote:
      "What is real: the ingestion patterns, the dbt models, and the live app all run on Railway. Where I was learning: it deliberately reuses the Elvis architecture, so the work is in the sourcing and the city-scoping, not a from-scratch design.",
    roleTags: ["Analytics Engineering", "Data Engineering"],
    featured: true,
    // No graphical logo or screenshot in repo yet; card uses the monogram fallback.
  },
  {
    id: "ansel",
    title: "Ansel: Resumable Photo Captioning CLI",
    description:
      "A macOS command-line tool for captioning and tagging your Photos library incrementally, in short sessions spread over months. Progress lives in a local SQLite database keyed by each photo's UUID, so you can quit at any time, including Ctrl-C, and pick up exactly where you left off.",
    tech: ["Python", "SQLite", "osxphotos", "photoscript", "uv"],
    github: "https://github.com/EvanWAppel/ansel",
    method:
      "Claude Code, test-first, with reads through osxphotos and writes through photoscript's AppleScript bridge so captions and keywords are real Photos edits.",
    proves:
      "A resumable, local-first batch tool built around interruptibility, with a UUID-keyed SQLite checkpoint so a months-long job survives quitting at any point.",
    detail:
      "Ansel captions and tags a macOS Photos library from the terminal, designed for a job too large to finish in one sitting. It reads photo metadata through osxphotos and writes captions and keywords back through photoscript's AppleScript bridge, so every edit is a real Photos edit that syncs with iCloud. The design centers on interruptibility: progress is a local SQLite database keyed by photo UUID, so quitting at any moment, including Ctrl-C, loses nothing and the next run resumes exactly where the last one stopped. It is a small, honest local-first tool built for how the work actually happens, a little at a time.",
    honestNote:
      "What is real: the resumable pipeline, the SQLite checkpoint, and the real Photos writes all work on my own library. Where it is narrow: it is a personal macOS CLI with no web front end, built for my own archive rather than packaged for general use.",
    roleTags: ["Developer Tooling"],
    featured: true,
    // Local CLI: no live link by nature; leads with the monogram fallback.
  },
  // --- Work in progress ---------------------------------------------------
  // Specs written and scaffolding up, but not yet shippable. These render in
  // the /projects Work-in-progress section and are kept off the homepage
  // carousel. No live/demo links until they actually ship.
  {
    id: "roodle",
    title: "Roodle: Async Drawing Game",
    description:
      "A small, private, ad-free drawing-and-guessing game, the Draw Something experience without the ads, coin shops, and upsells. A few friends take turns: one draws a word, the others open the app later, watch the drawing replay, and guess it by tapping letter tiles. Deliberately simple, cozy, and built for people who already know each other.",
    tech: ["Next.js", "TypeScript", "Vercel"],
    github: "https://github.com/EvanWAppel/roodle",
    method:
      "Claude Code from a written PRD: an async turn-based drawing game with drawing replay and tile-based guessing, no ads and no microtransactions by design.",
    wip: true,
  },
];
