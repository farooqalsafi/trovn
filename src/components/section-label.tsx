"use client";

import { motion, useReducedMotion } from "framer-motion";

interface SectionLabelProps {
  text: string;
}

export function SectionLabel({ text }: SectionLabelProps) {
  const prefersReducedMotion = useReducedMotion();

  const content = (
    <span className="inline-block rounded-full bg-brand-accent-bg px-4 py-1.5 text-sm font-medium text-brand-primary">
      {text}
    </span>
  );

  if (prefersReducedMotion) {
    return <div className="mb-4">{content}</div>;
  }

  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {content}
    </motion.div>
  );
}
