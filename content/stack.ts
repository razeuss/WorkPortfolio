export type StackGroup = "Frontend" | "Backend" | "Database" | "DevOps" | "Design";

export const stackGroups: StackGroup[] = ["Frontend", "Backend", "Database", "DevOps", "Design"];

/** Replace `mark` with an SVG logo later (e.g. from simpleicons.org). */
export const stack: { name: string; group: StackGroup; mark: string }[] = [
  { name: "[Tool]", group: "Frontend", mark: "A" },
  { name: "[Tool]", group: "Frontend", mark: "B" },
  { name: "[Tool]", group: "Frontend", mark: "C" },
  { name: "[Tool]", group: "Backend", mark: "D" },
  { name: "[Tool]", group: "Backend", mark: "E" },
  { name: "[Tool]", group: "Database", mark: "F" },
  { name: "[Tool]", group: "Database", mark: "G" },
  { name: "[Tool]", group: "DevOps", mark: "H" },
  { name: "[Tool]", group: "DevOps", mark: "I" },
  { name: "[Tool]", group: "Design", mark: "J" },
];
