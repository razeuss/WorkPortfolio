import { cn } from "@/lib/utils";

export function Pill({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md bg-accent-soft px-2.5 py-1 text-[13px] leading-none font-medium text-accent",
        className,
      )}
      {...props}
    />
  );
}
