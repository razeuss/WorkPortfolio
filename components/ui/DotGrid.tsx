import { cn } from "@/lib/utils";

/** Light-grey dot canvas used behind diagrams and previews. */
export function DotGrid({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("bg-dot-grid relative", className)} {...props} />;
}
