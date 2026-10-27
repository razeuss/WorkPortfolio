import { Check, Loader } from "lucide-react";
import { cn } from "@/lib/utils";

export function Badge({ state = "done", children }: { state?: "done" | "running"; children?: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[11px] leading-none font-medium transition-colors duration-300",
        state === "done" ? "bg-success-soft text-success" : "bg-hover text-faint",
      )}
    >
      {state === "done" ? <Check className="size-3" strokeWidth={2.5} /> : <Loader className="size-3" strokeWidth={2.5} />}
      {children ?? (state === "done" ? "Completed" : "Running")}
    </span>
  );
}
