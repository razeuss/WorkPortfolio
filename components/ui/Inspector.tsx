"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

type Selection = {
  left: number;
  top: number;
  width: number;
  height: number;
  name: string;
  /** Font size / weight, read live from the element. */
  spec: string;
};

/**
 * Figma-style inspector: hovering a `data-inspect` descendant selects it with a
 * frame, handles, guides and its real measurements. Selections fade in place
 * rather than travelling between elements. Mouse only.
 */
export function Inspector({ children, className }: Props) {
  const [selection, setSelection] = useState<Selection | null>(null);

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    const el = (e.target as Element).closest<HTMLElement>("[data-inspect]");
    if (!el) {
      setSelection(null);
      return;
    }
    const rect = el.getBoundingClientRect();
    const origin = e.currentTarget.getBoundingClientRect();
    const style = getComputedStyle(el);
    const next: Selection = {
      left: Math.round(rect.left - origin.left),
      top: Math.round(rect.top - origin.top),
      width: Math.round(rect.width),
      height: Math.round(rect.height),
      name: el.dataset.inspect ?? "",
      spec: `${Math.round(parseFloat(style.fontSize))}px / ${style.fontWeight}`,
    };
    setSelection((prev) =>
      prev && prev.name === next.name && prev.left === next.left && prev.top === next.top && prev.width === next.width && prev.height === next.height
        ? prev
        : next,
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${className ?? ""}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setSelection(null)}
    >
      {children}
      <AnimatePresence>
        {selection && (
          <motion.div
            key={selection.name}
            aria-hidden
            className="pointer-events-none absolute z-10 border border-accent"
            style={{ left: selection.left, top: selection.top, width: selection.width, height: selection.height }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <SelectionMarks name={selection.name} width={selection.width} height={selection.height} spec={selection.spec} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * The same selection, always on, around its children. Its ancestor should clip
 * overflow, since the guides run well past the frame.
 */
export function InspectFrame({ children, name, className }: { children: React.ReactNode; name: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(() => setSize({ width: el.offsetWidth, height: el.offsetHeight }));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative border border-accent ${className ?? ""}`}>
      {children}
      <div aria-hidden className="pointer-events-none">
        <SelectionMarks name={name} width={size.width} height={size.height} />
      </div>
    </div>
  );
}

function SelectionMarks({ name, width, height, spec }: { name: string; width: number; height: number; spec?: string }) {
  return (
    <>
      {/* Guides running out to the frame edges */}
      <span className="absolute -top-px left-1/2 w-[200vw] -translate-x-1/2 border-t border-dashed border-accent/30" />
      <span className="absolute -bottom-px left-1/2 w-[200vw] -translate-x-1/2 border-t border-dashed border-accent/30" />
      <span className="absolute top-1/2 -left-px h-[200vh] -translate-y-1/2 border-l border-dashed border-accent/30" />
      <span className="absolute top-1/2 -right-px h-[200vh] -translate-y-1/2 border-l border-dashed border-accent/30" />

      <Handle className="-top-1 -left-1" />
      <Handle className="-top-1 -right-1" />
      <Handle className="-bottom-1 -left-1" />
      <Handle className="-right-1 -bottom-1" />

      <span className="absolute top-full left-0 mt-1.5 flex items-center gap-2 rounded bg-accent px-1.5 py-0.5 font-mono text-[11px] whitespace-nowrap text-white">
        <span className="font-medium">{name}</span>
        {width > 0 && <span className="opacity-80">{width} × {height}</span>}
        {spec && <span className="opacity-80">{spec}</span>}
      </span>
    </>
  );
}

function Handle({ className }: { className: string }) {
  return <span className={`absolute size-[7px] border border-accent bg-surface ${className}`} />;
}
