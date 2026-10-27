import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section className="bg-dot-grid flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="font-mono text-[13px] text-faint">404</span>
      <h1 className="text-[40px] font-medium tracking-tight">This page isn&apos;t in the system.</h1>
      <Button href="/" variant="solid">Back home</Button>
    </Section>
  );
}
