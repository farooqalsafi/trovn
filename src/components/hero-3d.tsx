"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Hero3D() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-[340px] h-[400px] flex items-center justify-center">
      {/* Glow burst on entrance */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
      >
        <div
          className="w-64 h-64 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(108,58,237,0.4) 0%, rgba(59,130,246,0.2) 50%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Key container — entrance animation */}
      <motion.div
        initial={
          prefersReducedMotion
            ? {}
            : { opacity: 0, y: -120, rotateZ: -45, scale: 0.5 }
        }
        animate={{ opacity: 1, y: 0, rotateZ: 0, scale: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {/* Idle float + gentle rotate */}
        <motion.div
          animate={
            prefersReducedMotion
              ? {}
              : {
                  y: [0, -14, 0],
                  rotateZ: [0, 2, 0, -2, 0],
                  rotateY: [0, 8, 0, -8, 0],
                }
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ filter: "drop-shadow(0 20px 40px rgba(108,58,237,0.25))" }}
        >
          <svg
            width="260"
            height="340"
            viewBox="0 0 260 340"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Main gradient — purple to blue */}
              <linearGradient
                id="keyGradient"
                x1="130"
                y1="0"
                x2="130"
                y2="340"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#6C3AED" />
                <stop offset="100%" stopColor="#4C1D95" />
              </linearGradient>

              {/* Highlight gradient for shine */}
              <linearGradient
                id="keyShine"
                x1="80"
                y1="0"
                x2="180"
                y2="340"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.6" />
                <stop offset="40%" stopColor="#7C3AED" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#4C1D95" stopOpacity="0" />
              </linearGradient>

              {/* Dark edge gradient */}
              <linearGradient
                id="keyEdge"
                x1="100"
                y1="50"
                x2="160"
                y2="300"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#5B21B6" />
                <stop offset="100%" stopColor="#3B0764" />
              </linearGradient>

              {/* Glow filter */}
              <filter id="keyGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* ===== KEY BOW (ornate handle) ===== */}
            {/* Outer ring */}
            <circle
              cx="130"
              cy="85"
              r="70"
              stroke="url(#keyGradient)"
              strokeWidth="18"
              fill="none"
            />
            {/* Inner ring */}
            <circle
              cx="130"
              cy="85"
              r="42"
              stroke="url(#keyEdge)"
              strokeWidth="8"
              fill="none"
            />
            {/* Center ornament — diamond */}
            <motion.rect
              x="118"
              y="73"
              width="24"
              height="24"
              rx="3"
              fill="url(#keyGradient)"
              stroke="#A78BFA"
              strokeWidth="2"
              style={{ transformOrigin: "130px 85px" }}
              animate={
                prefersReducedMotion
                  ? {}
                  : { rotate: [0, 360] }
              }
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            {/* Inner diamond */}
            <motion.rect
              x="123"
              y="78"
              width="14"
              height="14"
              rx="2"
              fill="#A78BFA"
              style={{ transformOrigin: "130px 85px" }}
              animate={
                prefersReducedMotion
                  ? {}
                  : { rotate: [0, -360] }
              }
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Decorative dots on bow ring */}
            <circle cx="130" cy="15" r="5" fill="#8B5CF6" />
            <circle cx="130" cy="155" r="5" fill="#5B21B6" />
            <circle cx="60" cy="85" r="5" fill="#7C3AED" />
            <circle cx="200" cy="85" r="5" fill="#7C3AED" />

            {/* Corner ornaments */}
            <circle cx="81" cy="36" r="4" fill="#8B5CF6" opacity="0.7" />
            <circle cx="179" cy="36" r="4" fill="#8B5CF6" opacity="0.7" />
            <circle cx="81" cy="134" r="4" fill="#5B21B6" opacity="0.7" />
            <circle cx="179" cy="134" r="4" fill="#5B21B6" opacity="0.7" />

            {/* ===== SHAFT ===== */}
            <rect
              x="121"
              y="150"
              width="18"
              height="130"
              rx="4"
              fill="url(#keyGradient)"
            />
            {/* Shaft highlight */}
            <rect
              x="121"
              y="150"
              width="9"
              height="130"
              rx="4"
              fill="url(#keyShine)"
            />
            {/* Shaft ring details */}
            <rect x="116" y="168" width="28" height="6" rx="3" fill="#5B21B6" />
            <rect x="116" y="182" width="28" height="4" rx="2" fill="#5B21B6" opacity="0.6" />
            <rect x="116" y="220" width="28" height="4" rx="2" fill="#5B21B6" opacity="0.5" />
            <rect x="116" y="250" width="28" height="4" rx="2" fill="#5B21B6" opacity="0.4" />

            {/* ===== BIT (teeth) ===== */}
            {/* Main horizontal bar */}
            <rect
              x="121"
              y="272"
              width="60"
              height="16"
              rx="3"
              fill="url(#keyGradient)"
            />

            {/* Tooth 1 */}
            <rect
              x="155"
              y="288"
              width="14"
              height="22"
              rx="2"
              fill="url(#keyGradient)"
            />

            {/* Tooth 2 */}
            <rect
              x="135"
              y="288"
              width="14"
              height="32"
              rx="2"
              fill="url(#keyEdge)"
            />

            {/* Tooth 3 (shortest) */}
            <rect
              x="167"
              y="288"
              width="14"
              height="14"
              rx="2"
              fill="#5B21B6"
            />

            {/* Tooth highlights */}
            <rect x="135" y="288" width="7" height="32" rx="2" fill="url(#keyShine)" />
            <rect x="155" y="288" width="7" height="22" rx="2" fill="url(#keyShine)" />

            {/* ===== SHINE overlay for metallic feel ===== */}
            <rect
              x="121"
              y="150"
              width="6"
              height="130"
              rx="3"
              fill="white"
              opacity="0.08"
            />
          </svg>

          {/* Animated glow ring around the bow */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[160px] h-[160px] rounded-full pointer-events-none"
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
        </motion.div>
      </motion.div>

      {/* Ground shadow */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-40 h-6 rounded-full blur-xl"
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
    </div>
  );
}
