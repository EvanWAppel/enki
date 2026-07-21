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
    featured: true,
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
      "Named after Las Vegas's most recognizable figure, this project explores free datasets about the Las Vegas Valley using dbt and Snowflake. Built to learn analytics-engineering patterns: modular transformations, testing, and dimensional modeling.",
    tech: ["dbt", "Snowflake", "SQL", "Python"],
    github: "https://github.com/EvanWAppel/elvis",
    method:
      "Claude Code, analytics-engineering patterns, with dbt tests on every model.",
    featured: true,
    logo: "/assets/logos/projects/elvis.svg",
  },
];
