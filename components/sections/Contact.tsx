"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <Section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden px-4 py-20 md:py-32">
      <div aria-hidden className="bg-dashed-grid pointer-events-none absolute inset-0" />
      <div className="relative flex flex-col items-center gap-8 text-center">
        <SectionHeading id="contact-title" align="center" pill="Contact" title={site.contact.headline} />
        <button
          onClick={copy}
          className="inline-flex h-12 w-full max-w-sm items-center justify-center gap-2 rounded-xl border border-line-strong bg-surface px-5 text-[15px] font-medium transition-colors hover:bg-hover sm:w-auto"
        >
          {copied ? <Check className="size-4 text-success" /> : <Copy className="size-4 text-muted" />}
          <span aria-live="polite">{copied ? "Copied" : site.email}</span>
        </button>
        <div className="flex gap-5 text-[14px] text-muted">
          <a href={site.socials.github} target="_blank" rel="noreferrer" className="hover:text-ink hover:underline">GitHub</a>
          <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink hover:underline">LinkedIn</a>
          <a href={site.resumeUrl} target="_blank" rel="noreferrer" className="hover:text-ink hover:underline">Résumé</a>
        </div>
        <p className="font-mono text-[12px] text-faint">Résumé updated {site.resumeUpdated}</p>
      </div>
    </Section>
  );
}
