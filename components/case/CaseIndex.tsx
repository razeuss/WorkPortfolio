"use client";

import { caseStudySections } from "@/content/projects";
import { useActiveSection } from "@/lib/useActiveSection";
import { cn } from "@/lib/utils";

const ids = caseStudySections.map((s) => s.id);

/** Sticky index (desktop) / sticky chip bar (mobile) that tracks the section in view. */
export function CaseIndex() {
  const active = useActiveSection(ids, "-30% 0px -60% 0px");
  return (
    <>
      <nav aria-label="Case study sections" className="hidden lg:sticky lg:top-28 lg:block">
        <ol className="flex flex-col">
          {caseStudySections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={cn(
                  "block border-l-2 py-1.5 pl-4 text-[14px] transition-colors duration-200",
                  active === s.id ? "border-accent text-ink" : "border-line text-faint hover:text-muted",
                )}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <nav aria-label="Case study sections" className="sticky top-14 z-30 -mx-px border-b border-line bg-bg/90 backdrop-blur lg:hidden">
        <ol className="flex gap-1.5 overflow-x-auto px-4 py-2.5">
          {caseStudySections.map((s) => (
            <li key={s.id} className="shrink-0">
              <a
                href={`#${s.id}`}
                className={cn(
                  "block rounded-md border px-2.5 py-1 text-[13px]",
                  active === s.id ? "border-ink bg-ink text-white" : "border-line bg-surface text-muted",
                )}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
