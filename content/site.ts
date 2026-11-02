// All copy lives in /content. Replace every [placeholder] with your real content.

export const site = {
  name: "Joshua Radz",
  initials: "JR",
  role: "Software Engineer",
  email: "adlaon.joshuaradz@gmail.com",
  location: "Oroquieta City, Philippines",
  timezone: "Asia/Manila",
  status: "Available for work",
  resumeUrl: "/resume.pdf",
  resumeUpdated: "July 2025",
  socials: {
    github: "https://github.com/razeuss",
    linkedin: "https://linkedin.com/in/joshuaradzadlaon",
  },
  hero: {
    headline: "Joshua Radz.",
    headlineMuted: "Software Engineer.",
    subline: "I'm a frontend-focused software engineer with a background in UI/UX design, building polished web interfaces with React, Next.js, and TypeScript.",
    meta: ["Oroquieta City, Philippines", "GMT+8"],
  },
  about: {
    headline: "I build software people can actually use.",
    intro: "I'm a computer science graduate of MSU-IIT who loves the space where design meets engineering. My favorite work is building interfaces that look good, feel right, and hold up just as well behind the scenes.",
    current: {
      lead: "Currently, I'm a UI/UX designer at",
      company: "Kominiti",
      url: "https://kominiti.com",
      rest: "So far, I've focused mainly on design and frontend roles because I wanted to put my eye for visuals to use. That background shapes how I build: I notice the small details, and I care as much about how a product feels as how it works.",
    },
    textMuted: "I'm also really easy to work with. I ask questions early, take feedback well, and speak up when I'm stuck. If your team needs someone who cares about the work and is easy to have around, I'd love to talk.",
  },
  contact: {
    headline: "Let's build something together.",
  },
};

export const navLinks = [
  { id: "work", label: "Projects" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
];

/** The 4-cell row under the hero. icon = lucide-react icon name. */
export const capabilities = [
  { icon: "LayoutTemplate", title: "Frontend & Mobile", text: "React, Next.js, and Tailwind CSS on the web, Flutter on mobile." },
  { icon: "PenTool", title: "UI/UX Design", text: "Designing in Figma, from early ideas to polished screens." },
  { icon: "Server", title: "Backend & Data", text: "Flask and Express.js APIs on MySQL, PostgreSQL, MongoDB, and Firebase." },
  { icon: "Rocket", title: "Shipping", text: "Git, GitHub, and Bitbucket for version control, deployed on Vercel." },
] as const;
