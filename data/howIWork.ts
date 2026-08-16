// Copy for the /how-i-work page, kept here so it is easy to edit and testable
// in isolation. House style: em-dash-free, plain declarative sentences, first
// person. Claims are calibrated: the portfolio is built on personal time; the
// method is also applied and taught at work. No claim implies the employer's
// software is built with agents.

export const howIWorkIntro: string[] = [
  "I build software with AI agents, and I keep it honest with tests. That is the whole method, and every project on this site was built that way.",
  "The tools move fast. The discipline is what makes the speed safe. What follows is how I actually work: the loop I run, and the habits that keep agent-built software durable.",
];

export interface ReclStep {
  key: string;
  label: string;
  body: string;
}

// RECL: Requirements, Execute, Check, Loop.
export const reclSteps: ReclStep[] = [
  {
    key: "requirements",
    label: "Requirements",
    body: "I write down what the thing has to do, in plain language, before any code. A short PRD, an AGENTS file, a task list. The clearer the requirements, the less the agent has to guess.",
  },
  {
    key: "execute",
    label: "Execute",
    body: "I let the agent build against those requirements, and I stay in the loop. I read the diff and steer rather than accept whatever comes back.",
  },
  {
    key: "check",
    label: "Check",
    body: "Every change is checked against a test. Pytest is my verification layer, with cached fixtures so the checks run in CI without a live database. If it is not tested, it is not done.",
  },
  {
    key: "loop",
    label: "Loop",
    body: "Then I loop. Refine the requirements, run it again, tighten the tests, until the result holds. The loop is short on purpose.",
  },
];

export interface Principle {
  title: string;
  body: string;
}

export const principles: Principle[] = [
  {
    title: "Verification first",
    body: "Speed without verification is just a faster way to ship bugs. Tests are what let me move quickly and still trust the result. Every project here is guarded by them, from unit tests on the logic to CI that runs without a live service.",
  },
  {
    title: "Requirements before code",
    body: "Most of the leverage is upstream of the agent. A written PRD, an AGENTS file, and a task list turn a vague ask into something an agent can execute and a test can check.",
  },
  {
    title: "The pairing that lasts",
    body: "Agent fluency on its own is common now. What makes it durable is pairing it with ordinary engineering discipline: test-driven development, CI/CD, structured logging, version control. The projects on this site I built on my own time. The same method I apply and teach at work, where I run workshops and wrote the manual that helped a 100-analyst organization adopt these tools.",
  },
];
