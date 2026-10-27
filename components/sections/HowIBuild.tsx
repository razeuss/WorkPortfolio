"use client";

import { useState } from "react";
import { processSteps } from "@/content/process";
import { cn } from "@/lib/utils";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DotGrid } from "@/components/ui/DotGrid";
import { FlowCanvas } from "@/components/canvas/FlowCanvas";

/** Attio workflow canvas: sticky step list left, node diagram right, kept in sync. */
export function HowIBuild() {
  const [done, setDone] = useState(1);
  const activeIndex = Math.min(done, processSteps.length) - 1;

  return (
    <Section id="process" aria-labelledby="process-title" className="grid lg:grid-cols-[30fr_70fr]">
      <div className="border-b border-line px-6 py-16 md:px-10 lg:border-r lg:border-b-0 lg:py-24">
        <div className="lg:sticky lg:top-28">
          <SectionHeading id="process-title" pill="Process" title="[How I build.]" muted="[Muted second sentence.]" />
          <ol className="mt-10 hidden flex-col lg:flex">
            {processSteps.map((s, i) => (
              <li
                key={s.id}
                className={cn(
                  "border-l-2 py-2 pl-4 text-[15px] transition-colors duration-300",
                  i === activeIndex ? "border-accent text-ink" : "border-line text-faint",
                )}
              >
                {s.title}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <DotGrid className="flex items-center px-6 py-16 md:px-12 lg:py-24">
        <FlowCanvas steps={processSteps} cols={3} onProgress={setDone} className="w-full" />
      </DotGrid>
    </Section>
  );
}
