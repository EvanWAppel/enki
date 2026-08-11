import type { ResumeData, ResumeVariant, Job } from "@/types";
import { Bot, Headset, Workflow, BarChart2 } from "lucide-react";

// Earlier roles are shared, condensed across variants (Credit One differs per variant).
const coinCloud: Job = {
  company: "Coin Cloud",
  role: "Data Analyst",
  start: "Jan 2021",
  end: "Dec 2022",
  bullets: [
    "Owned weekly cash-pickup route design for a cryptocurrency-ATM fleet from per-ATM fill data — balancing lost transactions against agent time, with direct financial and operational stakes.",
    "Acting backup manager; mentored junior analysts. SQL / Python / Tableau / Redshift.",
  ],
};

const precisionOpinion: Job = {
  company: "Precision Opinion",
  role: "Data Analyst, Engineering Dept.",
  start: "Dec 2019",
  end: "Jan 2021",
  bullets: [
    "Wrote SQL reporting for call-center management; owned PM and requirements gathering — the interface translating business stakeholders to the engineering team on a bespoke timekeeping software build.",
  ],
};

const formsDirect: Job = {
  company: "Forms Direct",
  role: "Data Analyst → Data Scientist",
  start: "May 2012",
  end: "Oct 2019",
  bullets: [
    "Self-directed path from marketing content writer to in-house data analyst over 7+ years (SQL, Python, Excel, Mode Analytics); managed a small remote team.",
  ],
};

const education = [
  {
    institution: "University of Nevada, Las Vegas",
    degree: "B.A. Journalism, Minor in Sociology",
    year: "2007 – 2012",
  },
];

const certifications = [
  "Snowflake Hands-On Essentials — Data Warehousing & Data Lake",
  'PyCon US 2026 — incl. "Professional Python: From Vibes to Verification" (Matt Harrison)',
  "Codecademy Data Engineer path (in progress, 2026)",
];

export const resumeVariants: ResumeVariant[] = [
  {
    label: "Applied AI Engineer",
    slug: "ai-engineer",
    path: "/resumes/evan_appel_ai_engineer.pdf",
    icon: Bot,
    summary:
      "Applied-AI engineer who builds with agents across the full stack. 15+ months working agentically through research, frontend, backend, and data; built nine non-trivial applications with agentic CLI harnesses (Claude Code primary). Led a team to a 3rd-place, C-suite-judged AI hackathon finish. Pairs agent fluency with the engineering discipline — TDD, CI/CD, validation — that makes agent-built software durable.",
    skillGroups: [
      {
        label: "Agentic development",
        items:
          "Claude Code (primary daily driver), Codex, Gemini CLI / Antigravity, GitHub Copilot, GitLab Duo, Qwen, NotebookLM; local inference via Ollama (Open WebUI over Tailscale)",
      },
      {
        label: "Methodology",
        items:
          "RECL (Requirements · Execute · Check · Loop); PRD.md / AGENTS.md / TASKS.md scaffolding; TDD with pytest as the verification layer",
      },
      {
        label: "Languages",
        items:
          "Python (production), SQL (production), TypeScript / JavaScript (working), Bash",
      },
      {
        label: "Tooling",
        items: "uv, ruff, ty, prek; Git / GitLab CI/CD; structured logging; Snowflake",
      },
      {
        label: "Build surface",
        items: "web apps, TUIs, data ingestion, external-API & local-data integration",
      },
    ],
    experience: [
      {
        company: "Credit One Bank",
        role: "Marketing Analyst",
        start: "Feb 2023",
        end: "Present",
        tagline:
          "De-facto AI/data engineer · Project lead · Python & Git authority for a 100-analyst organization",
        bullets: [
          "Led a three-person team to 3rd place in the bank's first AI Hackathon (bank-wide, C-suite judges; beat Operations, Treasury, Risk) with an agent-built tool that turned hundreds of PDFs into infographics, dashboards, and decks — weeks of work compressed to ~1 hour.",
          "Apply agentic development daily; drive Python, Git, and agent-tool adoption across a 100-analyst org via weekly workshops (since Aug 2024) and a 5,000-line internal manual adopted org-wide.",
          "Engineering discipline that makes agent work durable: formal lead on a 30-project, ~25,000-line SAS-to-Python migration to Snowflake with standardized packaging, env-var secrets, and unattended execution.",
          "Built a pytest validation methodology (cached fixtures; CI without a live DB) and the team's first GitLab CI/CD pipeline — only engineer in the department shipping to DevOps production.",
        ],
      },
      coinCloud,
      precisionOpinion,
      formsDirect,
    ],
  },
  {
    label: "AI Solutions Engineer",
    slug: "solutions-engineer",
    path: "/resumes/evan_appel_solutions_engineer.pdf",
    icon: Headset,
    summary:
      "Solutions / customer engineer who uses AI development tools daily and teaches others to adopt them. Runs weekly technical workshops (since Aug 2024, up to 20 attendees), wrote a 5,000-line internal manual adopted across a 100-analyst organization, and personally drove Git adoption org-wide. Won 3rd in a C-suite-judged AI hackathon by making agent-built work legible to executives. Came to AI from analytics — bridges analysts, business users, and engineers.",
    skillGroups: [
      {
        label: "Enablement & communication",
        items:
          "technical teaching, workshop facilitation, live demos, executive-legible storytelling, documentation, mentoring",
      },
      {
        label: "AI tool fluency",
        items:
          "Claude Code (daily), Codex, Gemini CLI, Copilot, GitLab Duo, Qwen, NotebookLM; local models via Ollama; RECL methodology; PRD/AGENTS/TASKS scaffolding",
      },
      {
        label: "Technical depth",
        items:
          "Python, SQL, Snowflake, Git / GitLab CI/CD, TypeScript / JavaScript (working), pytest",
      },
      {
        label: "Bridge domains",
        items:
          "marketing analytics, consumer credit / financial services; analyst-to-engineer translation",
      },
    ],
    experience: [
      {
        company: "Credit One Bank",
        role: "Marketing Analyst",
        start: "Feb 2023",
        end: "Present",
        tagline:
          "Internal AI / Python enablement lead · Python & Git authority for a 100-analyst organization",
        bullets: [
          "Recognized Python & Git/GitLab authority for a 100-analyst organization; personally drove Git adoption org-wide through demos, group workshops, and 1:1 tutoring where none existed before.",
          "Run weekly Python / agentic-tooling workshops since Aug 2024 (regular 4–10, up to 20) across multiple proficiency levels; built and maintain an internal knowledge base of guides, examples, and tooling for analysts.",
          "Authored a 5,000-line internal manual (git, packaging, validation, query optimization, secrets, merge gates) adopted across the analyst organization.",
          "Led a three-person team to 3rd place in the bank-wide AI Hackathon (C-suite judges) — strength was a working demo with a clear business punchline (weeks → hour, costly → cheap).",
          "Lead a 30-project SAS-to-Python migration to Snowflake (six teammates) and built the team's first GitLab CI/CD pipeline — credibility comes from shipping, not just advising.",
        ],
      },
      coinCloud,
      precisionOpinion,
      formsDirect,
    ],
  },
  {
    label: "Analytics Engineer",
    slug: "analytics-engineer",
    path: "/resumes/evan_appel_analytics_engineer.pdf",
    icon: Workflow,
    summary:
      "Analytics/data engineer with a production track record modernizing legacy analytics into Python on Snowflake. Formal lead on a 30-project, ~25,000-line SAS-to-Python migration with full CI/CD and pytest validation. Recognized Python & Git authority for a 100-analyst organization. Brings modern, agent-assisted engineering as a force multiplier on transformation and pipeline work.",
    skillGroups: [
      {
        label: "Languages & query",
        items:
          "Python (Polars, pandas, NumPy, Snowpark), SQL (Snowflake — CTEs, window functions, stored procedures, query optimization), SAS (read/translate), Bash",
      },
      {
        label: "Data platforms",
        items:
          "Snowflake (Snowpark, staging, warehouse sizing/cost), Redshift / AWS, Oracle",
      },
      {
        label: "Transformation & pipelines",
        items:
          "dbt (modular models, tests, docs), Polars (lazy evaluation), ETL design, idempotent / unattended execution",
      },
      {
        label: "Engineering",
        items:
          "Git / GitLab, GitLab CI/CD, pytest (fixtures, monkeypatch, cached-fixture validation), structured logging, env-var secrets, packaging (uv), ruff, ty",
      },
      {
        label: "AI-assisted",
        items:
          "Claude Code and other agentic harnesses, with TDD/validation as the verification layer",
      },
    ],
    experience: [
      {
        company: "Credit One Bank",
        role: "Marketing Analyst",
        start: "Feb 2023",
        end: "Present",
        tagline:
          "Project lead, SAS→Python/Snowflake migration · Python & Git authority for a 100-analyst organization",
        bullets: [
          "Lead a 30-project, ~25,000-line SAS-to-Python migration into the bank's Snowflake Enterprise Data Platform ahead of a SAS contract sunset; direct six engineers of varying Python levels.",
          "Designed the standardized package structure (run.py / tests.py / requirements / .env, structured logging, env-var secrets, unattended entry points) used across all 30 projects.",
          "Built a pytest validation methodology comparing new Python output against legacy SAS on cached fixtures — enabling CI runs without a live database and gating merges on correctness.",
          "Built the marketing analytics team's first GitLab CI/CD pipeline from scratch.",
          "Designed a two-phase optimization workflow: preserve correctness on the existing data shape, then push computation into Snowflake (Snowpark) to minimize data transfer.",
          "Only engineer in a 100-analyst department shipping code to DevOps for production; 10 packages currently in code review headed to prod.",
          "Built the Brand Team ETL — a production pipeline consolidating multiple third-party datasets into a Tableau dashboard; integrated Snowflake with GitHub for version-controlled SQL/notebook deployment.",
          "Authored a 5,000-line internal engineering manual (git workflow, packaging, validation, Polars/Snowflake optimization, secrets, merge-gate checklist), adopted org-wide.",
        ],
      },
      coinCloud,
      precisionOpinion,
      formsDirect,
    ],
  },
  {
    label: "Senior Data Analyst",
    slug: "data-analyst",
    path: "/resumes/evan_appel_data_analyst.pdf",
    icon: BarChart2,
    summary:
      "Senior data / BI analyst with 10+ years turning data into decisions — including 3+ years embedded in marketing analytics at a financial-services company. Strong SQL, Snowflake, and Tableau, paired with uncommon engineering rigor (CI/CD, validation testing) and agent-assisted analytics as a multiplier. Recognized Python & Git authority for a 100-analyst organization.",
    skillGroups: [
      {
        label: "Analytics & SQL",
        items:
          "SQL (Snowflake — CTEs, window functions, complex joins, optimization), exploratory analysis, KPI/metric design, stakeholder partnership",
      },
      {
        label: "BI & visualization",
        items: "Tableau (dashboards), Power BI, dimensional / reporting modeling",
      },
      {
        label: "Data & platforms",
        items:
          "Snowflake, Redshift / AWS, Oracle; Python (Polars, pandas) for analysis & automation",
      },
      {
        label: "Engineering hygiene",
        items:
          "Git / GitLab, GitLab CI/CD, pytest validation — software discipline applied to analytics",
      },
      {
        label: "Domain",
        items:
          "marketing analytics, consumer credit / financial services, call-center operations",
      },
      {
        label: "AI-assisted",
        items: "Claude Code & agentic tools for faster exploration and reporting",
      },
    ],
    experience: [
      {
        company: "Credit One Bank",
        role: "Marketing Analyst",
        start: "Feb 2023",
        end: "Present",
        tagline:
          "Project lead, analytics modernization · Python & Git authority for a 100-analyst organization",
        bullets: [
          "Partner with marketing stakeholders to deliver analyses and reporting; lead a 30-project modernization of the marketing analytics codebase (SAS→Python on Snowflake), directing six analysts.",
          "Brought software rigor to analytics: built the team's first CI/CD pipeline and a pytest validation framework comparing new output against trusted legacy results.",
          "Recognized Python & Git authority for a 100-analyst org; run weekly Python workshops (since Aug 2024, 4–20 attendees) and authored a 5,000-line internal manual adopted org-wide.",
          "Led a three-person team to 3rd place (bank-wide, C-suite-judged) in the AI Hackathon with a tool that turned hundreds of PDFs into infographics, dashboards, and decks — compressing a multi-week process into ~1 hour.",
          "Built the Brand Team ETL feeding a Tableau dashboard from multiple third-party datasets.",
        ],
      },
      coinCloud,
      precisionOpinion,
      formsDirect,
    ],
  },
];

export const resumeData: ResumeData = {
  summary:
    "Data and applied-AI engineer with 10+ years turning data into decisions. Builds with agentic tools across the full stack — web apps, TUIs, and data pipelines — paired with the engineering discipline (TDD, CI/CD, validation) that makes agent-built software durable. Currently leads a 30-project SAS-to-Python migration onto Snowflake and is the recognized Python & Git authority for a 100-analyst organization.",
  skills: [
    "Claude Code / Agentic AI",
    "Python",
    "SQL",
    "Snowflake",
    "Polars",
    "pandas",
    "dbt",
    "Git",
    "GitLab CI/CD",
    "pytest",
    "SAS",
    "Tableau",
    "TypeScript",
    "Bash",
    "ETL Design",
    "Data Warehousing",
    "Marketing Analytics",
    "AWS / Redshift",
  ],
  experience: [
    {
      company: "Credit One Bank",
      role: "Marketing Analyst",
      start: "Feb 2023",
      end: "Present",
      tagline:
        "De-facto AI/data engineer · Project lead · Python & Git authority for a 100-analyst organization",
      bullets: [
        "Formal lead on a 30-project, ~25,000-line SAS-to-Python migration onto the bank's Snowflake Enterprise Data Platform, directing six engineers of varying Python levels — with standardized packaging, a pytest validation methodology (cached fixtures, CI without a live DB), and the team's first GitLab CI/CD pipeline.",
        "Led a three-person team to 3rd place in the bank's first AI Hackathon (bank-wide, C-suite judges) with an agent-built tool that turned hundreds of PDFs into infographics, dashboards, and decks — weeks of work compressed to ~1 hour.",
        "Apply agentic development daily and drive Python, Git, and agent-tool adoption across a 100-analyst org via weekly workshops (since Aug 2024) and a 5,000-line internal manual adopted org-wide.",
        "Only engineer in the department shipping code to DevOps for production; built the Brand Team ETL feeding a Tableau dashboard and integrated Snowflake with GitHub for version-controlled deployment.",
      ],
    },
    coinCloud,
    precisionOpinion,
    formsDirect,
  ],
  education,
  certifications,
};
