"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({
  as: Tag = "div",
  delay = 0,
  children,
  className,
}: {
  as?: React.ElementType;
  delay?: number;
  children: React.ReactNode;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();
  const initial = prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 };
  const animate = prefersReduced ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 };
  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ delay, duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
    >
      <Tag>{children}</Tag>
    </motion.div>
  );
}


