"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { IconType } from "react-icons";
import { stack, stackGroups, type StackGroup } from "@/content/stack";
import { cn } from "@/lib/utils";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Attio "Connectivity" row: marquee of logo tiles; a filter turns it into a static grid. */
export function Stack() {
  const [filter, setFilter] = useState<StackGroup | "All">("All");
  const items = filter === "All" ? stack : stack.filter((s) => s.group === filter);

  return (
    <Section id="stack" aria-labelledby="stack-title" className="overflow-hidden px-4 py-16 md:px-10 md:py-24">
      <SectionHeading id="stack-title" align="center" pill="Stack" title="The tools I build with." muted="From the interface to the database." />

      <div role="group" aria-label="Filter stack" className="mask-fade-x mx-auto mt-10 flex max-w-full gap-1.5 overflow-x-auto px-6 sm:justify-center">
        {(["All", ...stackGroups] as const).map((g) => (
          <button
            key={g}
            onClick={() => setFilter(g)}
            aria-pressed={filter === g}
            className={cn(
              "shrink-0 rounded-md border px-2.5 py-1 text-[13px] transition-colors duration-150",
              filter === g ? "border-ink bg-ink text-white" : "border-line bg-surface text-muted hover:text-ink",
            )}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="mt-10">
        {filter === "All" ? (
          <div className="mask-fade-x group flex overflow-hidden">
            {/* Two copies for a seamless loop; pauses on hover */}
            <div className="flex w-max animate-marquee gap-4 pr-4 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
              {[...stack, ...stack].map((s, i) => (
                <Tile key={i} name={s.name} icon={s.icon} color={s.color} hidden={i >= stack.length} />
              ))}
            </div>
          </div>
        ) : (
          <motion.ul layout className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4">
            <AnimatePresence mode="popLayout">
              {items.map((s, i) => (
                <motion.li key={`${s.group}-${i}`} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
                  <Tile name={s.name} icon={s.icon} color={s.color} />
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        )}
      </div>
    </Section>
  );
}

function Tile({ name, icon: Icon, color, hidden }: { name: string; icon: IconType; color: string; hidden?: boolean }) {
  return (
    <div aria-hidden={hidden} className="group/tile relative">
      <div className="grid size-16 place-items-center rounded-2xl border border-line bg-surface md:size-[72px]">
        <Icon aria-hidden className="size-8 md:size-9" style={{ color }} />
      </div>
      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-ink px-1.5 py-0.5 text-[11px] whitespace-nowrap text-white opacity-0 transition-opacity group-hover/tile:opacity-100">
        {name}
      </span>
    </div>
  );
}
