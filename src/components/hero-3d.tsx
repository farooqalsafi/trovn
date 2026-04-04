"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useIntroState } from "./intro-animation";

export function Hero3D() {
  const prefersReducedMotion = useReducedMotion();
  const { introPhase, registerHeroSlot } = useIntroState();
  const slotRef = useRef<HTMLDivElement>(null);

  // Register this container as the target the intro key slides toward
  useEffect(() => {
    registerHeroSlot(slotRef.current);
    return () => registerHeroSlot(null);
  }, [registerHeroSlot]);

  const showKey = introPhase === "done";

  return (
    <div
      ref={slotRef}
      className="relative w-[480px] h-[560px] flex items-center justify-center"
    >
      {/* Glow burst — plays when key arrives */}
      {showKey && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <div
            className="w-72 h-72 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(108,58,237,0.4) 0%, rgba(59,130,246,0.2) 50%, transparent 70%)",
            }}
          />
        </motion.div>
      )}

      {/* Key — renders instantly when intro is done (no fade, the intro key was just here) */}
      {showKey && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          style={{ perspective: 800 }}
        >
          {/* Idle float + 3D rotate */}
          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    y: [0, -14, 0],
                    rotateZ: [0, 2, 0, -2, 0],
                    rotateY: [0, 12, 0, -12, 0],
                    rotateX: [0, 5, 0, -5, 0],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              transformStyle: "preserve-3d",
              filter: "drop-shadow(0 20px 40px rgba(108,58,237,0.3))",
            }}
          >
            <Image
              src="/images/trovn-key.png"
              alt="Trovn — AI Consulting Key"
              width={460}
              height={540}
              priority
              className="select-none"
              draggable={false}
            />
          </motion.div>
        </motion.div>
      )}

      {/* Animated glow ring */}
      {showKey && (
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full pointer-events-none -z-10"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
          }}
          animate={
            prefersReducedMotion
              ? {}
              : { scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Floating particles */}
      {showKey && !prefersReducedMotion && (
        <>
          <motion.div
            className="absolute w-2 h-2 rounded-full bg-[#A78BFA]/60 pointer-events-none"
            style={{ top: "10%", left: "10%" }}
            animate={{ opacity: [0.6, 0.2, 0.6], y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-1.5 h-1.5 rounded-full bg-[#3B82F6]/50 pointer-events-none"
            style={{ top: "15%", right: "8%" }}
            animate={{ opacity: [0.5, 0.15, 0.5], y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute w-1.5 h-1.5 rounded-full bg-[#8B5CF6]/50 pointer-events-none"
            style={{ top: "45%", left: "5%" }}
            animate={{ opacity: [0.5, 0.15, 0.5], y: [0, -10, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute w-2 h-2 rounded-full bg-[#6C3AED]/40 pointer-events-none"
            style={{ top: "40%", right: "5%" }}
            animate={{ opacity: [0.4, 0.1, 0.4], y: [0, -12, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
          />
          <motion.div
            className="absolute w-1 h-1 rounded-full bg-[#A78BFA]/40 pointer-events-none"
            style={{ top: "30%", left: "2%" }}
            animate={{ opacity: [0.4, 0.1, 0.4], x: [0, -5, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
          <motion.div
            className="absolute w-1.5 h-1.5 rounded-full bg-[#3B82F6]/30 pointer-events-none"
            style={{ top: "25%", right: "2%" }}
            animate={{ opacity: [0.3, 0.1, 0.3], x: [0, 5, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </>
      )}

      {/* Ground shadow */}
      {showKey && (
        <motion.div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 w-40 h-6 rounded-full blur-xl"
          style={{ background: "rgba(108,58,237,0.2)" }}
          animate={
            prefersReducedMotion
              ? {}
              : { scaleX: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  );
}
