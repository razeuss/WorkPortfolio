"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  /** Wait before the first letter, in ms. */
  delay?: number;
  /** Time per letter, in ms. */
  speed?: number;
  className?: string;
};

/** Types `text` out letter by letter with a blinking caret. Layout is reserved up front so nothing shifts. */
export function TypeWriter({ text, delay = 600, speed = 75, className }: Props) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);
  const shown = reduce ? text.length : count;
  const done = shown >= text.length;

  useEffect(() => {
    if (reduce || done) return;
    const timer = setTimeout(() => setCount((c) => c + 1), count === 0 ? delay : speed);
    return () => clearTimeout(timer);
  }, [reduce, done, count, delay, speed]);

  return (
    <span className={cn("relative block", className)}>
      <span className="sr-only">{text}</span>
      {/* Invisible copy holds the final size, so the typing never moves the layout. */}
      <span aria-hidden className="invisible">{text}</span>
      <span aria-hidden className="absolute inset-0">
        {text.slice(0, shown)}
        <span
          className={cn(
            "ml-[0.04em] inline-block h-[0.82em] w-[0.06em] translate-y-[0.08em] bg-accent",
            done && "animate-caret",
          )}
        />
      </span>
    </span>
  );
}
