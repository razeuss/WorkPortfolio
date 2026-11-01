"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/content/projects";
import { cn } from "@/lib/utils";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DotGrid } from "@/components/ui/DotGrid";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";

const DURATION = 7000;

/** Keeps the section blurred and non-interactive until the case studies are ready. */
export function Projects() {
  return (
    <Section id="work" aria-labelledby="work-notice-title">
      <div className="overflow-hidden">
        <div inert className="pointer-events-none blur-[6px] select-none">
          <ProjectsContent />
        </div>
      </div>
      <div className="absolute inset-0 z-10 flex justify-center bg-bg/40 px-4">
        <div className="sticky top-[30vh] mt-[20vh] h-fit w-full max-w-[420px] rounded-2xl border border-line bg-surface p-6 text-center shadow-sm md:p-8">
          <Pill>In progress</Pill>
          <h2 id="work-notice-title" className="mt-4 text-[24px] font-medium tracking-tight">
            Case studies are on the way.
          </h2>
          <Button href="#contact" variant="solid" className="mt-5">Get in touch</Button>
        </div>
      </div>
    </Section>
  );
}

/** Attio "Signals"-style tabs: project list + progress bar left, live preview right. */
function ProjectsContent() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const reduce = useReducedMotion();
  const running = inView && !paused && !reduce;

  useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % projects.length), DURATION);
    return () => clearTimeout(t);
  }, [active, running]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") setActive((a) => (a + 1) % projects.length);
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") setActive((a) => (a - 1 + projects.length) % projects.length);
  };

  const current = projects[active];

  return (
    <>
      <div className="border-b border-line px-6 py-16 md:px-10 md:py-24">
        <SectionHeading id="work-title" pill="Projects" title="[Section headline.]" muted="[Muted second sentence.]" />
      </div>

      {/* Desktop: tabs + preview */}
      <div
        ref={ref}
        className="hidden min-h-[600px] lg:grid lg:grid-cols-[40fr_60fr]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div role="tablist" aria-orientation="vertical" onKeyDown={onKey} className="flex flex-col justify-center gap-2 border-r border-line px-10 py-12">
          {projects.map((p, i) => {
            const isActive = i === active;
            return (
              <div key={p.slug} className="py-3">
                <button
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={cn(
                    "text-left text-[20px] font-medium tracking-tight transition-colors duration-200",
                    isActive ? "text-ink" : "text-faint hover:text-muted",
                  )}
                >
                  {p.title}
                </button>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <ProjectMeta project={p} />
                      <div className="mt-5 h-px w-full bg-line">
                        {/* CSS keyframe so it restarts cleanly on every tab change */}
                        <div
                          key={`${active}-${running}`}
                          className="h-px origin-left bg-ink"
                          style={running ? { animation: `progress ${DURATION}ms linear forwards` } : { transform: "scaleX(0)" }}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <DotGrid className="flex items-center p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.slug}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group relative w-full"
            >
              <Link href={`/work/${current.slug}`} aria-label={`${current.title} case study`}>
                <BrowserFrame url={current.url} poster={current.poster} video={current.video} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
              </Link>
              <div className="absolute -top-3 left-6 flex gap-1.5">
                {current.features.map((f) => (
                  <span key={f} className="rounded-md border border-line bg-surface px-2 py-1 text-[12px] font-medium shadow-sm">{f}</span>
                ))}
              </div>
              <span className="pointer-events-none absolute right-4 bottom-4 inline-flex items-center gap-1 rounded-md bg-ink px-2.5 py-1.5 text-[12px] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                View case study <ArrowRight className="size-3" />
              </span>
            </motion.div>
          </AnimatePresence>
        </DotGrid>
      </div>

      {/* Mobile / tablet: stacked cards */}
      <ul className="divide-y divide-line lg:hidden">
        {projects.map((p) => (
          <li key={p.slug} className="flex flex-col gap-5 px-4 py-10 sm:px-6">
            <Link href={`/work/${p.slug}`}>
              <BrowserFrame url={p.url} poster={p.poster} video={p.video} />
            </Link>
            <div>
              <h3 className="text-[20px] font-medium tracking-tight">{p.title}</h3>
              <ProjectMeta project={p} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

function ProjectMeta({ project }: { project: Project }) {
  return (
    <>
      <p className="mt-2 max-w-[42ch] text-[15px] leading-relaxed text-muted">{project.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <li key={t} className="rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-[12px] text-muted">{t}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-4 text-[14px]">
        {project.links.live && (
          <a href={project.links.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-0.5 hover:text-accent">
            Live <ArrowUpRight className="size-3.5" />
          </a>
        )}
        <Link href={`/work/${project.slug}`} className="inline-flex items-center gap-1 hover:text-accent">
          Case study <ArrowRight className="size-3.5" />
        </Link>
        {project.links.github && (
          <a href={project.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-0.5 text-muted hover:text-accent">
            GitHub <ArrowUpRight className="size-3.5" />
          </a>
        )}
      </div>
    </>
  );
}
