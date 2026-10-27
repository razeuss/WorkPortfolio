"use client";

import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

export type FlowStep = {
  id: string;
  title: string;
  tools?: string;
  detail?: string;
};

type Props = {
  ref?: React.Ref<HTMLDivElement>;
  step: FlowStep;
  index: number;
  state: "done" | "running";
  isStart?: boolean;
  compact?: boolean;
};

/** One white node on the canvas. Hover reveals its detail line. */
export function FlowNode({ ref, step, index, state, isStart, compact }: Props) {
  return (
    <div
      ref={ref}
      tabIndex={0}
      className={cn(
        "group relative z-10 rounded-xl border bg-surface transition-[border-color,box-shadow,transform] duration-200 outline-none",
        "hover:-translate-y-0.5 hover:shadow-[0_1px_2px_rgba(0,0,0,.04),0_4px_12px_rgba(0,0,0,.05)] focus-visible:-translate-y-0.5",
        state === "done" ? "border-accent/40" : "border-line",
        compact ? "px-3 py-2.5" : "px-4 py-3.5",
      )}
    >
      {isStart && (
        <span className="absolute -top-[22px] left-2 inline-flex items-center gap-1 rounded-t-md bg-accent px-1.5 py-0.5 text-[11px] font-medium text-white">
          <Play className="size-2.5 fill-current" /> Start
        </span>
      )}
      <span className="absolute -top-3 right-2">
        <Badge state={state} />
      </span>

      <div className="flex items-center gap-2.5">
        <span className="grid size-6 shrink-0 place-items-center rounded-md bg-accent-soft font-mono text-[11px] text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className={cn("truncate font-medium", compact ? "text-[13px]" : "text-[15px]")}>{step.title}</span>
      </div>
      {step.tools && <p className="mt-1.5 truncate text-[13px] text-muted">{step.tools}</p>}

      {step.detail && !compact && (
        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]">
          <p className="overflow-hidden text-[12px] leading-relaxed text-faint">
            <span className="block pt-2">{step.detail}</span>
          </p>
        </div>
      )}

      {/* connector ports */}
      <span aria-hidden className="absolute top-1/2 -left-[3px] hidden size-1.5 -translate-y-1/2 rounded-full bg-accent sm:block" />
      <span aria-hidden className="absolute top-1/2 -right-[3px] hidden size-1.5 -translate-y-1/2 rounded-full bg-accent sm:block" />
    </div>
  );
}
