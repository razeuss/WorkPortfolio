import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { caseStudySections, projects } from "@/content/projects";
import { processSteps } from "@/content/process";
import { Section } from "@/components/layout/Section";
import { Pill } from "@/components/ui/Pill";
import { DotGrid } from "@/components/ui/DotGrid";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { FlowCanvas } from "@/components/canvas/FlowCanvas";
import { CaseIndex } from "@/components/case/CaseIndex";
import { ReadingProgress } from "@/components/case/ReadingProgress";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project?.title ?? "Case study" };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  const meta = [
    { label: "Role", value: "[Solo full-stack]" },
    { label: "Timeline", value: "[X weeks]" },
    { label: "Stack", value: project.tags.join(" · ") },
    { label: "Links", value: "[Live · GitHub]" },
  ];

  return (
    <>
      <ReadingProgress />

      {/* Header */}
      <Section className="px-6 pt-12 pb-12 md:px-10 md:pt-20">
        <Link href="/#work" className="inline-flex items-center gap-1 text-[14px] text-muted hover:text-ink">
          <ArrowLeft className="size-3.5" /> All work
        </Link>
        <div className="mt-10 flex flex-col items-start gap-5">
          <Pill>[Project type]</Pill>
          <h1 className="max-w-[20ch] text-[40px] leading-[1.05] font-medium tracking-[-0.03em] md:text-[56px]">
            {project.title}. <span className="text-muted">[Muted second sentence.]</span>
          </h1>
        </div>
      </Section>

      {/* Meta row */}
      <Section>
        <dl className="grid grid-cols-2 gap-px bg-line md:grid-cols-4">
          {meta.map((m) => (
            <div key={m.label} className="bg-bg px-6 py-5 md:px-10">
              <dt className="font-mono text-[12px] text-faint">{m.label}</dt>
              <dd className="mt-1 text-[14px]">{m.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Hero preview */}
      <Section>
        <DotGrid className="px-4 py-10 md:px-16 md:py-16">
          <BrowserFrame url={project.url} poster={project.poster} video={project.video} />
        </DotGrid>
      </Section>

      {/* Body: sticky index + content */}
      <Section className="grid lg:grid-cols-[25fr_75fr]">
        <aside className="lg:border-r lg:border-line lg:px-10 lg:py-16">
          <CaseIndex />
        </aside>
        <article className="flex flex-col">
          {caseStudySections.map((s) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="scroll-mt-28 border-b border-line px-6 py-14 last:border-b-0 md:px-10">
              <h2 id={`${s.id}-h`} className="text-[24px] font-medium tracking-tight">{s.label}</h2>
              <p className="mt-4 max-w-[68ch] text-[16px] leading-relaxed text-muted">[Content for {s.label.toLowerCase()}.]</p>

              {s.id === "architecture" && (
                <DotGrid className="mt-8 rounded-2xl border border-line px-6 py-12">
                  <FlowCanvas steps={processSteps} cols={3} />
                </DotGrid>
              )}
              {s.id === "deep-dive" && (
                <div className="mt-8 overflow-hidden rounded-xl border border-line bg-surface">
                  <div className="border-b border-line px-4 py-2 font-mono text-[12px] text-faint">[filename.ts]</div>
                  <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-muted">{"// [code snippet]"}</pre>
                </div>
              )}
            </section>
          ))}
        </article>
      </Section>

      {/* Next project */}
      <Section>
        <Link href={`/work/${next.slug}`} className="group flex items-center justify-between px-6 py-12 hover:bg-hover md:px-10">
          <span>
            <span className="font-mono text-[12px] text-faint">Next project</span>
            <span className="mt-1 block text-[28px] font-medium tracking-tight">{next.title}</span>
          </span>
          <ArrowRight className="size-6 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
        </Link>
      </Section>
    </>
  );
}
