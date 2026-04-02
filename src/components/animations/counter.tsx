"use client";

import { useEffect, useRef, useState } from "react";
import {
  useInView,
  useMotionValue,
  useReducedMotion,
  animate,
} from "framer-motion";

interface CounterProps {
  target: number;
  prefix?: string;
  className?: string;
}

export function Counter({ target, prefix = "0", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState("00");
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplay(String(target).padStart(2, "0"));
      return;
    }

    if (isInView) {
      const controls = animate(motionValue, target, {
        duration: 1.2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplay(
            prefix + String(Math.round(latest)).padStart(2, "0").slice(-2)
          );
        },
      });
      return controls.stop;
    }
  }, [isInView, target, motionValue, prefix, prefersReducedMotion]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
