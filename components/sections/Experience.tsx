"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { experience } from "@/content/experience";
import { cn } from "@/lib/utils";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="experience" aria-labelledby="experience-title" className="grid lg:grid-cols-[30fr_70fr]">
      <div className="border-b border-line px-6 py-16 md:px-10 lg:border-r lg:border-b-0 lg:py-24">
        <SectionHeading id="experience-title" pill="Experience" title="Where I've worked." />
      </div>

      <ul className="divide-y divide-line self-center">
        {experience.map((job, i) => {
          const isOpen = open === i;
          return (
            <li key={i}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-4 px-6 py-6 text-left transition-colors duration-150 hover:bg-hover md:items-center md:px-10"
              >
                <span className="flex flex-col gap-0.5 md:flex-row md:items-baseline md:gap-2">
                  <span className="text-[16px] font-medium">{job.role}</span>
                  <span className="text-[15px] text-muted">{job.company}</span>
                  <span className="font-mono text-[12px] text-faint md:hidden">{job.period}</span>
                </span>
                <span className="flex items-center gap-4">
                  <span className="hidden font-mono text-[12px] text-faint md:inline">{job.period}</span>
                  <ChevronDown className={cn("size-4 text-muted transition-transform duration-300", isOpen && "rotate-180")} />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden px-6 md:px-10"
                  >
                    <ul>
                      {job.bullets.map((b, j) => (
                        <li key={j} className={cn("relative pb-2 pl-4 text-[15px] leading-relaxed text-muted before:absolute before:top-[11px] before:left-0 before:size-1 before:rounded-full before:bg-line-strong", !job.url && "last:pb-6")}>
                          {b}
                        </li>
                      ))}
                    </ul>
                    {job.url && (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-6 ml-4 inline-flex items-center gap-1 pt-1 font-mono text-[12px] text-faint underline-offset-4 transition-colors hover:text-ink hover:underline"
                      >
                        {job.url.replace(/^https?:\/\//, "")}
                        <ArrowUpRight className="size-3" />
                      </a>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
