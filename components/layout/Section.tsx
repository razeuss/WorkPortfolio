import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"section"> & {
  /** Hide the full-width line under the section (e.g. last section). */
  noDivider?: boolean;
};

/**
 * A framed block inside the page rails.
 * Draws the full-bleed bottom line + square markers where it crosses the rails.
 */
export function Section({ className, children, noDivider, ...props }: Props) {
  return (
    <section className={cn("relative", className)} {...props}>
      {children}
      {!noDivider && (
        <>
          <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-line" />
          <Marker className="-bottom-[3px] -left-[3px]" />
          <Marker className="-bottom-[3px] -right-[3px]" />
        </>
      )}
    </section>
  );
}

export function Marker({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("pointer-events-none absolute z-10 size-[6px] border border-line-strong bg-surface", className)}
    />
  );
}

/** A cell inside a section; use with grid + divide-x for Attio-style columns. */
export function Cell({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("p-6 md:p-8", className)} {...props} />;
}
