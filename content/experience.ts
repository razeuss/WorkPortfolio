type Job = {
  role: string;
  company: string;
  /** Optional company website, shown as a link when the job is open. */
  url?: string;
  period: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    role: "UI/UX Designer",
    company: "Kominiti",
    url: "https://kominiti.com",
    period: "Sep 2025 — Present",
    bullets: [
      "Built the homepage of the Kominiti website.",
      "Designing and building the UI of Kominiti's product suite, including its learning platform and marketplace.",
    ],
  },
  {
    role: "UI/UX Designer",
    company: "Resume Rubix",
    url: "https://resumerubix.com",
    period: "Jul — Sep 2026",
    bullets: ["Designed the Resume Rubix website."],
  },
  {
    role: "Frontend Developer Intern",
    company: "Anura Innovations",
    period: "Jun — Jul 2025",
    bullets: [
      "Helped finish Icarus, a multi-environmental security system.",
      "Built the frontend of a music app.",
    ],
  },
];
