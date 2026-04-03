"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Hero3D() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-[340px] h-[420px] flex items-center justify-center">
      {/* Glow burst on entrance */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
      >
        <div
          className="w-72 h-72 rounded-full blur-3xl"
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
            height="380"
            viewBox="0 0 300 430"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="g3" x1="150" y1="0" x2="150" y2="430" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#8B5CF6"/>
                <stop offset="50%" stopColor="#6C3AED"/>
                <stop offset="100%" stopColor="#4C1D95"/>
              </linearGradient>
              <linearGradient id="g3glow" x1="150" y1="0" x2="150" y2="430" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#A78BFA"/>
                <stop offset="100%" stopColor="#3B82F6"/>
              </linearGradient>
              <filter id="outerGlow">
                <feGaussianBlur stdDeviation="8" result="blur"/>
                <feFlood floodColor="#6C3AED" floodOpacity="0.4"/>
                <feComposite in2="blur" operator="in"/>
                <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <filter id="particleGlow">
                <feGaussianBlur stdDeviation="3"/>
              </filter>
            </defs>

            {/* Outer glow aura rings */}
            <circle cx="150" cy="100" r="100" fill="none" stroke="#8B5CF6" strokeWidth="2" opacity="0.15"/>
            <circle cx="150" cy="100" r="115" fill="none" stroke="#A78BFA" strokeWidth="1" opacity="0.08"/>

            {/* Floating particles */}
            <motion.circle
              cx="65" cy="60" r="4" fill="#A78BFA"
              animate={prefersReducedMotion ? {} : { opacity: [0.6, 0.2, 0.6], cy: [60, 50, 60] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              cx="235" cy="70" r="3" fill="#3B82F6"
              animate={prefersReducedMotion ? {} : { opacity: [0.5, 0.15, 0.5], cy: [70, 58, 70] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.circle
              cx="80" cy="150" r="3" fill="#8B5CF6"
              animate={prefersReducedMotion ? {} : { opacity: [0.5, 0.15, 0.5], cy: [150, 140, 150] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.circle
              cx="225" cy="140" r="4" fill="#6C3AED"
              animate={prefersReducedMotion ? {} : { opacity: [0.4, 0.1, 0.4], cy: [140, 128, 140] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            />
            <motion.circle
              cx="55" cy="110" r="2" fill="#A78BFA"
              animate={prefersReducedMotion ? {} : { opacity: [0.4, 0.1, 0.4], cx: [55, 50, 55] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />
            <motion.circle
              cx="245" cy="100" r="2.5" fill="#3B82F6"
              animate={prefersReducedMotion ? {} : { opacity: [0.3, 0.1, 0.3], cx: [245, 250, 245] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            <motion.circle
              cx="100" cy="30" r="2" fill="#C4B5FD"
              animate={prefersReducedMotion ? {} : { opacity: [0.5, 0.15, 0.5], cy: [30, 22, 30] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            />
            <motion.circle
              cx="200" cy="170" r="2" fill="#818CF8"
              animate={prefersReducedMotion ? {} : { opacity: [0.4, 0.1, 0.4], cy: [170, 162, 170] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            />

            {/* Main key with glow filter */}
            <g filter="url(#outerGlow)">
              {/* Bow — ornate circle with flares */}
              <circle cx="150" cy="100" r="75" stroke="url(#g3)" strokeWidth="14" fill="none"/>

              {/* Wing flares on bow */}
              <path d="M75 100 L55 80 L65 75 L80 95Z" fill="url(#g3)" opacity="0.8"/>
              <path d="M75 100 L55 120 L65 125 L80 105Z" fill="url(#g3)" opacity="0.8"/>
              <path d="M225 100 L245 80 L235 75 L220 95Z" fill="url(#g3)" opacity="0.8"/>
              <path d="M225 100 L245 120 L235 125 L220 105Z" fill="url(#g3)" opacity="0.8"/>

              {/* Top crown */}
              <path d="M150 25 L140 10 L150 0 L160 10Z" fill="#8B5CF6"/>

              {/* Inner ring */}
              <circle cx="150" cy="100" r="48" stroke="url(#g3glow)" strokeWidth="4" fill="none" opacity="0.6"/>

              {/* Rune marks */}
              <text x="120" y="67" fontSize="12" fill="#A78BFA" opacity="0.7" fontFamily="serif">✦</text>
              <text x="170" y="67" fontSize="12" fill="#A78BFA" opacity="0.7" fontFamily="serif">✦</text>
              <text x="120" y="147" fontSize="12" fill="#A78BFA" opacity="0.7" fontFamily="serif">✦</text>
              <text x="170" y="147" fontSize="12" fill="#A78BFA" opacity="0.7" fontFamily="serif">✦</text>

              {/* Center gem — glowing */}
              <circle cx="150" cy="100" r="20" fill="url(#g3)"/>
              <circle cx="150" cy="100" r="14" fill="#7C3AED"/>
              <circle cx="150" cy="100" r="8" fill="#A78BFA"/>
              <circle cx="147" cy="95" r="4" fill="white" opacity="0.6"/>
              <circle cx="155" cy="103" r="2" fill="white" opacity="0.3"/>

              {/* Ring ornaments */}
              <circle cx="150" cy="25" r="6" fill="#8B5CF6"/>
              <circle cx="150" cy="175" r="6" fill="#5B21B6"/>

              {/* Shaft */}
              <rect x="140" y="170" width="20" height="195" rx="4" fill="url(#g3)"/>
              <rect x="140" y="170" width="10" height="195" rx="4" fill="url(#g3glow)" opacity="0.2"/>

              {/* Glowing rune lines on shaft */}
              <rect x="136" y="195" width="28" height="4" rx="2" fill="#A78BFA" opacity="0.7"/>
              <rect x="138" y="225" width="24" height="2" rx="1" fill="#A78BFA" opacity="0.5"/>
              <rect x="138" y="250" width="24" height="2" rx="1" fill="#A78BFA" opacity="0.4"/>
              <rect x="136" y="278" width="28" height="4" rx="2" fill="#A78BFA" opacity="0.5"/>
              <rect x="138" y="310" width="24" height="2" rx="1" fill="#A78BFA" opacity="0.3"/>
              <rect x="138" y="335" width="24" height="2" rx="1" fill="#A78BFA" opacity="0.3"/>

              {/* Bit */}
              <rect x="140" y="358" width="70" height="16" rx="3" fill="url(#g3)"/>

              {/* Teeth */}
              <rect x="150" y="374" width="16" height="30" rx="3" fill="url(#g3)"/>
              <rect x="150" y="374" width="8" height="30" rx="3" fill="#A78BFA" opacity="0.2"/>

              <rect x="172" y="374" width="16" height="20" rx="3" fill="#5B21B6"/>
              <rect x="172" y="374" width="8" height="20" rx="3" fill="#A78BFA" opacity="0.2"/>

              <rect x="194" y="374" width="16" height="12" rx="3" fill="#4C1D95"/>
              <rect x="194" y="374" width="8" height="12" rx="3" fill="#A78BFA" opacity="0.2"/>
            </g>
          </svg>

          {/* Animated glow ring around the bow */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[180px] h-[180px] rounded-full pointer-events-none"
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
    </div>
  );
}
