'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function SlideUp({
  children,
  offset = '0px',
  className = '',
}: {
  children: React.ReactNode;
  offset?: string;
  className?: string;
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: offset,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: 'easeOut',
        },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 70 }}
      animate={controls}
      className={className}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
}
