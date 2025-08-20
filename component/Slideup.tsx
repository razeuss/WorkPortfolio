'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function SlideUp({
  children,
  offset = '10px',
  threshold = 0.2,   
  className = '',
}: {
  children: React.ReactNode;
  offset?: string;
  threshold?: number;
  className?: string;
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: offset,
    threshold, 
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          ease: 'easeOut',
        },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }} 
      animate={controls}
      className={className}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
}
