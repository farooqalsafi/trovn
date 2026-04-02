"use client";

import { motion, useReducedMotion } from "framer-motion";

interface SlideInProps {
  children: React.ReactNode;
  from: "left" | "right";
  delay?: number;
  className?: string;
}

export function SlideIn({
  children,
  from,
  delay = 0,
  className,
}: SlideInProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const xOffset = from === "left" ? -60 : 60;

  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
