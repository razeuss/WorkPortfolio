import type { IconType } from "react-icons";
import {
  SiBitbucket,
  SiBootstrap,
  SiC,
  SiCplusplus,
  SiCss,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

export type StackGroup = "Languages" | "Frontend" | "Mobile" | "Backend" | "Database" | "DevOps & Tools" | "Design";

export const stackGroups: StackGroup[] = ["Languages", "Frontend", "Mobile", "Backend", "Database", "DevOps & Tools", "Design"];

/**
 * `color` is the tool's brand color, applied to its logo.
 * `scale` enlarges logos that are short inside their square viewBox so all logos render at the same height.
 */
export const stack: { name: string; group: StackGroup; icon: IconType; color: string; scale?: number }[] = [
  { name: "JavaScript", group: "Languages", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", group: "Languages", icon: SiTypescript, color: "#3178C6" },
  { name: "Python", group: "Languages", icon: SiPython, color: "#3776AB" },
  { name: "C", group: "Languages", icon: SiC, color: "#A8B9CC" },
  { name: "C++", group: "Languages", icon: SiCplusplus, color: "#00599C" },
  { name: "Java", group: "Languages", icon: FaJava, color: "#007396" },
  { name: "C#", group: "Languages", icon: TbBrandCSharp, color: "#512BD4" },
  { name: "React", group: "Frontend", icon: SiReact, color: "#61DAFB", scale: 1.12 },
  { name: "Next.js", group: "Frontend", icon: SiNextdotjs, color: "#000000" },
  { name: "HTML", group: "Frontend", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", group: "Frontend", icon: SiCss, color: "#1572B6" },
  { name: "Tailwind CSS", group: "Frontend", icon: SiTailwindcss, color: "#06B6D4", scale: 1.67 },
  { name: "Bootstrap", group: "Frontend", icon: SiBootstrap, color: "#7952B3", scale: 1.26 },
  { name: "Flutter", group: "Mobile", icon: SiFlutter, color: "#02569B" },
  { name: "Flask", group: "Backend", icon: SiFlask, color: "#000000", scale: 1.24 },
  { name: "Express.js", group: "Backend", icon: SiExpress, color: "#000000", scale: 1.52 },
  { name: "MySQL", group: "Database", icon: SiMysql, color: "#4479A1", scale: 1.45 },
  { name: "PostgreSQL", group: "Database", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", group: "Database", icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", group: "Database", icon: SiFirebase, color: "#DD2C00" },
  { name: "Git", group: "DevOps & Tools", icon: SiGit, color: "#F05032" },
  { name: "GitHub", group: "DevOps & Tools", icon: SiGithub, color: "#181717" },
  { name: "Bitbucket", group: "DevOps & Tools", icon: SiBitbucket, color: "#0052CC", scale: 1.11 },
  { name: "Vercel", group: "DevOps & Tools", icon: SiVercel, color: "#000000", scale: 1.15 },
  { name: "VS Code", group: "DevOps & Tools", icon: VscVscode, color: "#007ACC" },
  { name: "Figma", group: "Design", icon: SiFigma, color: "#F24E1E" },
];
