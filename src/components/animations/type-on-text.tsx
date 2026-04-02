"use client";

import { motion, useReducedMotion } from "framer-motion";

interface TypeOnTextProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
}

export function TypeOnText({
  text,
  className,
  delay = 0.2,
  highlightWords = [],
}: TypeOnTextProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <span className={className}>
        {text.split(" ").map((word, i) => (
          <span key={i}>
            <span
              className={
                highlightWords.includes(word)
                  ? "text-brand-primary"
                  : undefined
              }
            >
              {word}
            </span>
            {i < text.split(" ").length - 1 ? " " : ""}
          </span>
        ))}
      </span>
    );
  }

  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className={`inline-block ${
              highlightWords.includes(word) ? "text-brand-primary" : ""
            }`}
            variants={{
              hidden: { y: "100%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
              },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </motion.span>
  );
}
