"use client";

import { motion, useReducedMotion } from "framer-motion";

const PARTICLES = [
  { size: 6, x: "10%", delay: 0, duration: 8 },
  { size: 4, x: "25%", delay: 1.5, duration: 10 },
  { size: 8, x: "45%", delay: 0.5, duration: 9 },
  { size: 5, x: "65%", delay: 2, duration: 11 },
  { size: 4, x: "80%", delay: 1, duration: 8.5 },
  { size: 6, x: "90%", delay: 3, duration: 10 },
];

export function FloatingParticles() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: p.x,
            bottom: "-10px",
            background: i % 2 === 0 ? "#6C3AED" : "#3B82F6",
            opacity: 0,
          }}
          animate={{
            y: [0, -600],
            opacity: [0, 0.15, 0.15, 0],
            x: [0, (i % 2 === 0 ? 1 : -1) * 20, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
