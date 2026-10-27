"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { FlowNode, type FlowStep } from "./FlowNode";

type Props = {
  steps: FlowStep[];
  /** Columns on ≥640px. Nodes wrap into rows; wrapped rows get an Attio-style elbow connector. */
  cols?: number;
  /** ms per hop of the travelling pulse */
  hop?: number;
  compact?: boolean;
  /** Called with the number of completed steps (to sync a side list). */
  onProgress?: (done: number) => void;
  className?: string;
};

type Box = { x: number; y: number; w: number; h: number };

/**
 * Attio-like workflow canvas: white nodes on a dot grid, joined by connectors.
 * A pulse travels node to node and flips each badge from Running to Completed.
 */
export function FlowCanvas({ steps, cols = 3, hop = 1100, compact, onProgress, className }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const inView = useInView(wrapRef, { once: false, amount: 0.4 });
  const reduce = useReducedMotion();
  const [done, setDone] = useState(reduce ? steps.length : 1);

  // Measure node positions so connectors follow the real (responsive) layout.
  const measure = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    setSize({ w: wrap.offsetWidth, h: wrap.offsetHeight });
    setBoxes(
      nodeRefs.current.map((el) =>
        el ? { x: el.offsetLeft, y: el.offsetTop, w: el.offsetWidth, h: el.offsetHeight } : { x: 0, y: 0, w: 0, h: 0 },
      ),
    );
  }, []);

  useLayoutEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, [measure]);

  // Pulse loop: only while visible, never with reduced motion.
  useEffect(() => {
    if (reduce) {
      setDone(steps.length);
      return;
    }
    if (!inView) return;
    const wait = done >= steps.length ? 2200 : hop;
    const t = setTimeout(() => setDone((d) => (d >= steps.length ? 1 : d + 1)), wait);
    return () => clearTimeout(t);
  }, [done, inView, reduce, hop, steps.length]);

  useEffect(() => onProgress?.(done), [done, onProgress]);

  const paths = boxes.slice(0, -1).map((a, i) => connector(a, boxes[i + 1]));
  const travelling = !reduce && done >= 1 && done < steps.length ? done - 1 : -1;

  return (
    <div
      ref={wrapRef}
      className={cn(
        "relative grid grid-cols-1 gap-y-10 sm:[grid-template-columns:var(--cols)] sm:gap-x-12 sm:gap-y-14",
        className,
      )}
      style={{ "--cols": `repeat(${cols}, minmax(0, 1fr))` } as React.CSSProperties}
    >
      {/* Connectors */}
      <svg aria-hidden className="pointer-events-none absolute inset-0 overflow-visible" width={size.w} height={size.h}>
        {paths.map((d, i) => (
          <motion.path
            key={`${i}-${d}`}
            d={d}
            fill="none"
            strokeWidth={1.25}
            className={cn("transition-[stroke] duration-300", i < done - 1 ? "stroke-accent" : "stroke-line-strong")}
            initial={reduce ? false : { pathLength: 0 }}
            animate={inView || reduce ? { pathLength: 1 } : undefined}
            transition={{ duration: 0.6, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </svg>

      {/* Travelling pulse (CSS offset-path follows the connector) */}
      {travelling >= 0 && paths[travelling] && (
        <motion.span
          key={`pulse-${done}`}
          aria-hidden
          className="pointer-events-none absolute top-0 left-0 z-20 size-2 rounded-full bg-accent shadow-[0_0_0_4px_rgba(47,107,255,.15)]"
          style={{ offsetPath: `path("${paths[travelling]}")`, offsetRotate: "0deg" }}
          initial={{ offsetDistance: "0%", opacity: 0 }}
          animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
          transition={{ duration: (hop / 1000) * 0.85, ease: "easeInOut" }}
        />
      )}

      {steps.map((step, i) => (
        <FlowNode
          key={step.id}
          ref={(el) => {
            nodeRefs.current[i] = el;
          }}
          step={step}
          index={i}
          state={i < done ? "done" : "running"}
          isStart={i === 0}
          compact={compact}
        />
      ))}
    </div>
  );
}

/** Route a connector between two node boxes: straight, wrapped elbow, or vertical. */
function connector(a: Box, b: Box): string {
  const r = 12; // corner radius
  const ay = a.y + a.h / 2;
  const by = b.y + b.h / 2;

  // Stacked (mobile): bottom-centre → top-centre
  if (Math.abs(a.x - b.x) < 4) {
    const x = a.x + a.w / 2;
    return `M${x} ${a.y + a.h} V${b.y}`;
  }
  // Same row: right edge → left edge
  if (Math.abs(ay - by) < 4) {
    return `M${a.x + a.w} ${ay} H${b.x}`;
  }
  // Wrapped to next row: out right, down to the gap, back left, down, in to the left edge
  const outX = a.x + a.w + 16;
  const midY = (a.y + a.h + b.y) / 2;
  const inX = b.x - 16;
  return [
    `M${a.x + a.w} ${ay}`,
    `H${outX - r} Q${outX} ${ay} ${outX} ${ay + r}`,
    `V${midY - r} Q${outX} ${midY} ${outX - r} ${midY}`,
    `H${inX + r} Q${inX} ${midY} ${inX} ${midY + r}`,
    `V${by - r} Q${inX} ${by} ${inX + r} ${by}`,
    `H${b.x}`,
  ].join(" ");
}
