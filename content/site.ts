// All copy lives in /content. Replace every [placeholder] with your real content.

export const site = {
  name: "Joshua Radz",
  initials: "JR",
  role: "Software Engineer",
  email: "[you@email.com]",
  location: "Oroquieta City, Philippines",
  timezone: "Asia/Manila",
  status: "Open to software engineering roles",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/[username]",
    linkedin: "https://linkedin.com/in/[username]",
  },
  hero: {
    headline: "Joshua Radz.",
    headlineMuted: "Software Engineer.",
    subline: "[One or two lines about your stack and your edge.]",
    meta: ["Oroquieta City, Philippines","[GMT+8]", "[Stack 1]", "[Stack 2]", "[Stack 3]"],
  },
  about: {
    headline: "I build software people can actually use.",
    intro: "I'm a software engineer and a computer science graduate of MSU-IIT who loves the space where design meets engineering. My favorite work is building interfaces that look good, feel right, and hold up just as well behind the scenes.",
    current: {
      lead: "Currently, I'm a UI/UX designer at",
      company: "Kominiti",
      url: "https://kominiti.com",
      rest: "So far, I've focused mainly on design and frontend roles because I wanted to put my eye for visuals to use. That background shapes how I build: I notice the small details, and I care as much about how a product feels as how it works.",
    },
    textMuted: "I'm also really easy to work with. I ask questions early, take feedback well, and speak up when I'm stuck. If your team needs someone who cares about the work and is easy to have around, I'd love to talk.",
  },
};

export const navLinks = [
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
];

/** The 4-cell row under the hero. icon = lucide-react icon name. */
export const capabilities = [
  { icon: "LayoutTemplate", title: "[Frontend]", text: "[Two short lines describing this strength.]" },
  { icon: "Server", title: "[Backend & API]", text: "[Two short lines describing this strength.]" },
  { icon: "Database", title: "[Data]", text: "[Two short lines describing this strength.]" },
  { icon: "Rocket", title: "[Shipping]", text: "[Two short lines describing this strength.]" },
] as const;
