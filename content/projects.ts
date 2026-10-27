export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  features: string[];
  links: { live?: string; github?: string };
  metric?: { label: string; value: string };
  /** Put files in /public/projects/<slug>/ */
  poster?: string;
  video?: string;
  url: string;
};

export const projects: Project[] = [1, 2, 3].map((n) => ({
  slug: `project-${n}`,
  title: `[Project ${n}]`,
  summary: "[One or two lines: what it does and who it is for.]",
  tags: ["[Next.js]", "[Postgres]", "[Tool]"],
  features: ["[Auth]", "[Feature]"],
  links: { live: "#", github: "#" },
  metric: { label: "[Metric label]", value: "[00]" },
  url: `project-${n}.app`,
}));

export const caseStudySections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "features", label: "Features" },
  { id: "architecture", label: "Architecture" },
  { id: "data-model", label: "Data model" },
  { id: "deep-dive", label: "Deep dive" },
  { id: "design", label: "Design decisions" },
  { id: "quality", label: "Quality" },
  { id: "results", label: "Results" },
];
