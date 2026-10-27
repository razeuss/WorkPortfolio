import { ArrowUp } from "lucide-react";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-3 px-6 py-6 text-center text-[13px] text-muted md:flex-row md:justify-between md:text-left">
      <span>© {new Date().getFullYear()} {site.name}</span>
      <span className="font-mono text-[12px] text-faint">Designed in Figma · Built with Next.js · Hosted on Vercel</span>
      <a href="#top" className="inline-flex items-center gap-1 hover:text-ink">
        Back to top <ArrowUp className="size-3.5" strokeWidth={1.75} />
      </a>
    </footer>
  );
}
