import { Hero } from "@/components/sections/Hero";
import { FeatureRow } from "@/components/sections/FeatureRow";
import { Projects } from "@/components/sections/Projects";
import { HowIBuild } from "@/components/sections/HowIBuild";
import { Stack } from "@/components/sections/Stack";
import { Experience } from "@/components/sections/Experience";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureRow />
      <Projects />
      <HowIBuild />
      <Stack />
      <Experience />
      <About />
      <Contact />
    </>
  );
}
