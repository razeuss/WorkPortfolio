// All copy lives in /content. Replace every [placeholder] with your real content.

export const site = {
  name: "[Your Name]",
  initials: "YN",
  role: "[Full-stack developer]",
  email: "[you@email.com]",
  location: "[City, PH]",
  timezone: "Asia/Manila",
  status: "[Open to full-stack roles]",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/[username]",
    linkedin: "https://linkedin.com/in/[username]",
  },
  hero: {
    headline: "[Headline sentence one.]",
    headlineMuted: "[Muted sentence two.]",
    subline: "[One or two lines about your stack and your edge.]",
    meta: ["[Location]", "[GMT+8]", "[Stack 1]", "[Stack 2]", "[Stack 3]"],
  },
  about: {
    text: "[Three to four sentences: who you are, why you moved from design into full stack,",
    textMuted: "what you care about building, and the role you are looking for.]",
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
