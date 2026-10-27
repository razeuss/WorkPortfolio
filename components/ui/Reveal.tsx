"use client";

import { motion, useReducedMotion } from "motion/react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** Animate on mount instead of when scrolled into view (hero). */
  onMount?: boolean;
  /** Render a <span> (for use inside headings/paragraphs). */
  inline?: boolean;
};

/** Fade-up reveal, once, reduced-motion aware. */
export function Reveal({ children, delay = 0, className, onMount, inline }: Props) {
  const reduce = useReducedMotion();
  const target = { opacity: 1, y: 0 };
  const Tag = inline ? motion.span : motion.div;
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 8 }}
      {...(onMount ? { animate: target } : { whileInView: target, viewport: { once: true, amount: 0.2 } })}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
