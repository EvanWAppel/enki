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
    id: "lucre",
    title: "Lucre: Personal Finance PWA",
    description:
      "A single-user personal-finance PWA covering balances, net worth, subscriptions, spending, and bill alerts, backed by Plaid for bank data and continuously-replicated SQLite.",
    tech: ["Python", "FastAPI", "HTMX", "Plaid", "SQLite + Litestream", "Railway"],
    github: "https://github.com/EvanWAppel/lucre",
    live: "https://lucre-rust.vercel.app/login",
    demo: "https://lucre-rust.vercel.app/demo/connect",
    method:
      "Claude Code, Plaid data ingestion and analysis, validated with pytest.",
    featured: true,
    // No graphical logo in repo (text wordmark only), left logo-less.
  },
  {
    id: "bartleby",
    title: "Bartleby: Collaborative Notes",
    description:
      "A self-hosted, real-time collaborative notes app for a small group of friends, with two first-class clients, a SvelteKit web editor and a Python TUI, editing the same documents live via a shared CRDT.",
    tech: ["SvelteKit", "Node", "Python", "CRDT (Yjs)", "SQLite", "Docker"],
    github: "https://github.com/EvanWAppel/bartleby",
    method:
      "Claude Code across two clients from one core, with tests holding the shared logic steady.",
    featured: true,
    logo: "/assets/logos/projects/bartleby.svg",
  },
  {
    id: "elvis",
    title: "Elvis: dbt + Snowflake Portfolio",
    description:
      "Named after Las Vegas's most recognizable figure, this project explores free datasets about the Las Vegas Valley using dbt and Snowflake, surfaced through a Streamlit app. Built to learn analytics-engineering patterns: modular transformations, testing, and dimensional modeling.",
    tech: ["dbt", "Snowflake", "Streamlit", "SQL", "Python", "Railway"],
    github: "https://github.com/EvanWAppel/elvis",
    live: "https://elvis-production-e07a.up.railway.app/",
    method:
      "Claude Code, analytics-engineering patterns, with dbt tests on every model.",
    proves:
      "Production analytics engineering, an extract, load, model, test, and serve pipeline run the way a data team runs it.",
    detail:
      "Elvis takes free open data about the Las Vegas Valley, loads it into a warehouse, models it with dbt, and serves it through a Streamlit app. Every number on every page is a dbt model queried live, so the whole thing runs on the same extract, load, model, test, and serve workflow a data team uses in production. I built it to learn analytics-engineering patterns by shipping them end to end: modular transformations, a test on every model, and dimensional modeling.",
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
  // --- Work in progress ---------------------------------------------------
  // Specs written and scaffolding up, but not yet shippable. These render in
  // the /projects Work-in-progress section and are kept off the homepage
  // carousel. No live/demo links until they actually ship.
  {
    id: "boor",
    title: "Boor: AI Dungeons & Dragons Table",
    description:
      "A web-based virtual tabletop for running a persistent D&D campaign that keeps going when players cannot make it. When someone is absent, an AI plays their character in their voice and within limits they set in advance, so the party stays whole and the session happens as planned. The DM role is just as flexible: a human can run the game, or the AI can.",
    tech: ["Python", "TypeScript"],
    github: "https://github.com/EvanWAppel/boor",
    method:
      "Claude Code from a written PRD, a Python service and a TypeScript web client, with believable AI stand-ins as the north-star bet.",
    wip: true,
  },
  {
    id: "seer",
    title: "Seer: Handwriting to Markdown",
    description:
      "Turns phone photos of handwritten notebook pages into clean, versioned Markdown in a Git repo. Claude's vision model transcribes each page verbatim, flags uncertain words, and the author reviews the result side by side with the original before it is committed. The original images are preserved alongside the text, so the archive stays greppable and future-proof.",
    tech: ["Claude API", "Markdown", "Git"],
    github: "https://github.com/EvanWAppel/seer",
    method:
      "Claude Code from a PRD, vision transcription with a human review gate before anything is committed.",
    wip: true,
  },
  {
    id: "weather",
    title: "Weather: Ad-Free Forecast and Radar",
    description:
      "An ad-free reproduction of the only two Weather Underground features worth keeping: a clean 10-day forecast and an interactive radar map. No ads, no trackers, no account. Every data source is keyless, so there are no secrets to configure.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MapLibre", "Vercel"],
    github: "https://github.com/EvanWAppel/weather",
    method:
      "Claude Code from a PRD and task board, data from keyless public APIs (Open-Meteo, RainViewer).",
    wip: true,
  },
  {
    id: "wormsworth",
    title: "Wormsworth: Poetry Commonplace Book",
    description:
      "A poetry commonplace book that a machine can also read. Every entry does three jobs at once: a working notebook of notes on poets and poems, a structured dataset with consistent YAML frontmatter so the collection is queryable, and a context store an LLM can be handed as background. The design constraint that reconciles them is prose a human wants to read, wrapped in metadata a machine can parse.",
    tech: ["Markdown", "YAML"],
    github: "https://github.com/EvanWAppel/wormsworth",
    method:
      "A human-first notebook wrapped in machine-parseable metadata, with a status pipeline tracking what has actually been read versus merely shelved.",
    wip: true,
  },
  {
    id: "learn-typescript",
    title: "learn_typescript: Graded TypeScript Ladder",
    description:
      "A graded-exercise learning ladder for TypeScript aimed at AI-development work. Each exercise ships a failing Vitest test as the spec, and you drive it green. The ladder starts at fundamentals like discriminated unions, narrowing, and generics, then climbs to runtime validation with zod, typed tool schemas, and a capstone agent loop that calls a live Anthropic model.",
    tech: ["TypeScript", "Vitest", "zod", "Anthropic SDK"],
    github: "https://github.com/EvanWAppel/learn_typescript",
    method:
      "Test-first by construction: every exercise is a failing spec you drive green, with a hidden reference generating the golden output.",
    wip: true,
  },
  {
    id: "learn-sql",
    title: "learn_sql: Graded SQL Ladder",
    description:
      "A graded-exercise learning ladder for advanced analytical SQL, backed by DuckDB. Each exercise ships a failing test as the spec, and you drive it green against real, messy public data (the Olist e-commerce dataset). The ladder starts at intermediate level and drills window functions, set-based joins, and analytical patterns like funnels, cohorts, and gaps-and-islands.",
    tech: ["SQL", "DuckDB", "Python", "pytest"],
    github: "https://github.com/EvanWAppel/learn_sql",
    method:
      "Golden-output grading against a hidden reference on committed sample data, so exercises run offline and instantly.",
    wip: true,
  },
  {
    id: "learn-ai",
    title: "learn_AI: Project-Driven AI Path",
    description:
      "A project-driven path into modern AI and machine learning that works through the full stack of an AI application: model, API, context, tools and agents, retrieval, evaluation, and deployment. The method is deliberately hands-on: read just enough theory to unblock the next build, make it move, then look inside to see why it worked. Local inference runs CPU-only through Ollama.",
    tech: ["Python", "Ollama", "Anthropic SDK"],
    github: "https://github.com/EvanWAppel/learn_AI",
    method:
      "Every module ends in a build, with math taught just in time through code rather than as a prerequisite gate.",
    wip: true,
  },
  {
    id: "learn-spark-databricks",
    title: "learn_spark-databricks: Spark in a Weekend",
    description:
      "A sprint-based plan to go from an experienced data engineer who has not touched Spark to someone who can talk about Spark and Databricks credibly, by building one real pipeline end to end. It maps existing data-engineering knowledge (partitioning, ETL, schemas, idempotency) onto Spark's names for things, then drills the handful of places where Spark's execution model genuinely differs.",
    tech: ["Spark", "Databricks", "Python", "Delta Lake"],
    github: "https://github.com/EvanWAppel/learn_spark-databricks",
    method:
      "One real pipeline end to end, mapping existing engineering intuition onto Spark's execution model.",
    wip: true,
  },
];
