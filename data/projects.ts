import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "enki",
    description:
      "This site — a clean, data-driven portfolio built with Next.js App Router, Tailwind CSS v4, and TypeScript. Zero-config Vercel deployment.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/EvanWAppel/enki",
    featured: true,
    logo: "/assets/logos/projects/enki.svg",
  },
  {
    id: "bartleby",
    title: "Bartleby — Collaborative Notes",
    description:
      "A self-hosted, real-time collaborative notes app for a small group of friends, with two first-class clients — a SvelteKit web editor and a Python TUI — editing the same documents live via a shared CRDT.",
    tech: ["SvelteKit", "Node", "Python", "CRDT (Yjs)", "SQLite", "Docker"],
    github: "https://github.com/EvanWAppel/bartleby",
    // live: "TODO — Evan to provide deployed URL",
    featured: true,
    // logo: "/assets/logos/projects/bartleby.svg", // TODO — Evan to provide SVG
  },
  {
    id: "mccoy",
    title: "McCoy — Spotify Listening Dashboard",
    description:
      "A personal Spotify listening-habits dashboard with a DJ-style record-flipping playlist builder. Visualizes weekly listening trends and turns them into new playlists.",
    tech: ["Python", "Plotly Dash", "Spotify API", "Railway"],
    github: "https://github.com/EvanWAppel/mccoy",
    live: "https://web-production-bee9a.up.railway.app/",
    featured: true,
    logo: "/assets/logos/projects/mccoy.png",
  },
  {
    id: "lucre",
    title: "Lucre — Personal Finance PWA",
    description:
      "A single-user personal-finance PWA — balances, net worth, subscriptions, spending, and bill alerts — backed by Plaid for bank data and continuously-replicated SQLite.",
    tech: ["Python", "FastAPI", "HTMX", "Plaid", "SQLite + Litestream", "Railway"],
    github: "https://github.com/EvanWAppel/lucre",
    live: "https://lucre-rust.vercel.app/login",
    demo: "https://lucre-rust.vercel.app/demo/connect",
    featured: true,
    // No graphical logo in repo (text wordmark only) — left logo-less.
  },
  {
    id: "olympic",
    title: "Olympic — Health Tracker",
    description:
      "A personal health-tracking app that ingests data from multiple sources — including ResMed/CPAP therapy data — into one unified dashboard.",
    tech: ["Next.js", "TypeScript"],
    github: "https://github.com/EvanWAppel/olympic",
    live: "https://olympic-lime-six.vercel.app/",
    featured: true,
    logo: "/assets/logos/projects/olympic.png",
  },
  {
    id: "guzzolene",
    title: "Guzzolene — Gas Economics Tracker",
    description:
      "Tracks personal gas purchase history for a Mazda 3 Sport to see whether fuel economy has measurably changed — and to put price swings in the context of geopolitical events. Plots cost per mile overlaid with WTI crude oil prices.",
    tech: ["Python", "Jupyter", "pandas", "Matplotlib"],
    github: "https://github.com/EvanWAppel/guzzolene",
    live: "https://guzzo-lene.com/",
    demo: "https://guzzo-lene.com/demo",
    featured: true,
    logo: "/assets/logos/projects/guzzolene.svg",
  },
  {
    id: "elvis",
    title: "Elvis — dbt + Snowflake Portfolio",
    description:
      "Named after Las Vegas's most recognizable figure, this project explores free datasets about the Las Vegas Valley using dbt and Snowflake. Built to learn analytics engineering patterns: modular transformations, testing, and dimensional modeling.",
    tech: ["dbt", "Snowflake", "SQL", "Python"],
    github: "https://github.com/EvanWAppel/elvis",
    featured: true,
    logo: "/assets/logos/projects/elvis.svg",
  },
];
