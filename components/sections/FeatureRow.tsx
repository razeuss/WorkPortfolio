import { Database, LayoutTemplate, Rocket, Server } from "lucide-react";
import { capabilities } from "@/content/site";
import { Section } from "@/components/layout/Section";

const icons = { LayoutTemplate, Server, Database, Rocket };

/** Attio-style row of bordered cells: icon, bold title, muted 2-line text. */
export function FeatureRow() {
  return (
    <Section aria-label="What I do">
      <div className="grid grid-cols-1 gap-px bg-line min-[400px]:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((c) => {
          const Icon = icons[c.icon];
          return (
            <div key={c.title} className="flex flex-col gap-10 bg-bg p-6 md:p-8">
              <Icon className="size-5 text-muted" strokeWidth={1.5} />
              <div>
                <h3 className="text-[15px] font-medium">{c.title}</h3>
                <p className="mt-1 max-w-[26ch] text-[14px] leading-relaxed text-muted">{c.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
