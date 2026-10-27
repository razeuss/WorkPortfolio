import { site } from "@/content/site";
import { heroSystem } from "@/content/process";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { DotGrid } from "@/components/ui/DotGrid";
import { Reveal } from "@/components/ui/Reveal";
import { FlowCanvas } from "@/components/canvas/FlowCanvas";

export function Hero() {
  return (
    <Section aria-label="Introduction" className="grid md:grid-cols-[55fr_45fr]">
      {/* Left: words */}
      <div className="relative flex flex-col justify-between gap-12 px-6 pt-14 pb-8 md:border-r md:border-line md:px-10 md:pt-24">
        <div aria-hidden className="bg-dashed-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative flex flex-col items-start gap-6">
          <Reveal onMount>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-[13px]">
              <span className="size-1.5 animate-pulse-dot rounded-full bg-success" />
              {site.status}
            </span>
          </Reveal>
          <h1 className="text-[40px] leading-[1.05] font-medium tracking-[-0.03em] text-balance md:text-[56px] lg:text-[64px]">
            <Reveal onMount inline delay={0.08} className="inline-block">{site.hero.headline} </Reveal>
            <Reveal onMount inline delay={0.16} className="inline-block text-muted">{site.hero.headlineMuted}</Reveal>
          </h1>
          <Reveal onMount delay={0.24}>
            <p className="max-w-[480px] text-[16px] leading-relaxed text-muted md:text-[17px]">{site.hero.subline}</p>
          </Reveal>
          <Reveal onMount delay={0.3} className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <Button href="#work" variant="solid" className="h-11 sm:h-9">View projects</Button>
            <Button href={site.resumeUrl} external className="h-11 sm:h-9">Résumé</Button>
          </Reveal>
        </div>
        <ul className="relative flex flex-wrap gap-x-3 gap-y-1 border-t border-line pt-4 font-mono text-[12px] text-faint">
          {site.hero.meta.map((m, i) => (
            <li key={i}>{i > 0 && <span className="mr-3">·</span>}{m}</li>
          ))}
        </ul>
      </div>

      {/* Right: live mini system diagram */}
      <DotGrid className="flex items-center border-t border-line px-6 py-14 md:border-t-0 md:px-10">
        <FlowCanvas steps={heroSystem} cols={2} compact hop={1000} className="w-full" />
      </DotGrid>
    </Section>
  );
}
