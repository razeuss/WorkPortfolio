import Image from "next/image";
import { site } from "@/content/site";
import { Section } from "@/components/layout/Section";
import { DotGrid } from "@/components/ui/DotGrid";
import { InspectFrame } from "@/components/ui/Inspector";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <Section id="about" aria-labelledby="about-title" className="grid md:grid-cols-[60fr_40fr]">
      <div className="order-2 px-6 py-16 md:order-1 md:border-r md:border-line md:px-10 md:py-24">
        <SectionHeading id="about-title" pill="About" title={site.about.headline} />
        <div className="mt-8 max-w-[52ch] space-y-5 text-[17px] leading-relaxed">
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
      <DotGrid className="order-1 flex items-center justify-center overflow-hidden border-b border-line px-6 py-14 md:order-2 md:border-b-0">
        <InspectFrame name="Portrait" className="w-full max-w-[300px] select-none md:max-w-[380px] [-webkit-touch-callout:none]">
          <Image
            src="/about-dither.png"
            alt={`Dot-pattern portrait of ${site.name} working at a laptop`}
            width={1320}
            height={1458}
            unoptimized
            draggable={false}
            className="pointer-events-none block h-auto w-full select-none [-webkit-touch-callout:none]"
          />
        </InspectFrame>
      </DotGrid>
    </Section>
  );
}
