import Image from "next/image";
import { site } from "@/content/site";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DotGrid } from "@/components/ui/DotGrid";
import { LocalTime } from "./LocalTime";

export function About() {
  return (
    <Section id="about" aria-labelledby="about-title" className="grid md:grid-cols-[60fr_40fr]">
      <div className="order-2 px-6 py-16 md:order-1 md:border-r md:border-line md:px-10 md:py-24">
        <SectionHeading id="about-title" pill="About" title={site.about.headline} />
        <div className="mt-8 max-w-[52ch] space-y-5 text-[18px] leading-relaxed">
          <p>{site.about.intro}</p>
          <p>
            {site.about.current.lead}{" "}
            <a
              href={site.about.current.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-muted"
            >
              {site.about.current.company}
            </a>
            . {site.about.current.rest}
          </p>
          <p className="text-muted">{site.about.textMuted}</p>
        </div>
      </div>
      <DotGrid className="order-1 flex flex-col items-center justify-center gap-3 border-b border-line px-6 py-12 md:order-2 md:border-b-0">
        <Image
          src="/about.jpg"
          alt={`Portrait of ${site.name} working at a laptop`}
          width={1632}
          height={2040}
          quality={90}
          sizes="(min-width: 768px) 256px, 160px"
          className="h-auto w-40 rounded-2xl border border-line bg-surface saturate-50 transition duration-300 hover:saturate-100 md:w-64"
        />
        <p className="font-mono text-[12px] text-faint">
          {site.location} · local time <LocalTime />
        </p>
      </DotGrid>
    </Section>
  );
}
