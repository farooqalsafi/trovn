"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  createContext,
  useContext,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const SLOGAN = "Unlock the Power of AI";

// Context shared with Hero3D
interface IntroContextType {
  introPhase: string;
  registerHeroSlot: (el: HTMLDivElement | null) => void;
}

const IntroContext = createContext<IntroContextType>({
  introPhase: "done",
  registerHeroSlot: () => {},
});

export const useIntroState = () => useContext(IntroContext);

export function IntroAnimation({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<"intro" | "slide" | "settle" | "done">(
    "intro"
  );
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [targetPos, setTargetPos] = useState<{ x: number; y: number } | null>(
    null
  );
  const [isMobile, setIsMobile] = useState(false);
  const keyRef = useRef<HTMLDivElement>(null);
  const heroSlotRef = useRef<HTMLDivElement | null>(null);
  const siteContentRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const registerHeroSlot = useCallback((el: HTMLDivElement | null) => {
    heroSlotRef.current = el;
  }, []);

  // Skip intro for reduced motion
  useEffect(() => {
    if (prefersReducedMotion) {
      setPhase("done");
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [prefersReducedMotion]);

  // Typing effect
  useEffect(() => {
    if (phase !== "intro" || prefersReducedMotion) return;

    const startDelay = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setTypedText(SLOGAN.slice(0, i));
        if (i >= SLOGAN.length) {
          clearInterval(interval);
          // Pause on full text
          setTimeout(() => {
            setShowCursor(false);
            // Prepare for measurement: make children visible but transparent
            setTimeout(() => {
              if (siteContentRef.current) {
                siteContentRef.current.style.visibility = "visible";
                siteContentRef.current.style.opacity = "0";
              }
              // Force layout pass then measure
              void document.body.offsetHeight;
              requestAnimationFrame(() => {
                const heroSlot = heroSlotRef.current;
                const introKey = keyRef.current;
                if (heroSlot && introKey) {
                  const slotRect = heroSlot.getBoundingClientRect();
                  // Mobile: hero slot is hidden (width 0)
                  if (slotRect.width === 0) {
                    setIsMobile(true);
                  } else {
                    const introRect = introKey.getBoundingClientRect();
                    setTargetPos({
                      x:
                        slotRect.left +
                        slotRect.width / 2 -
                        (introRect.left + introRect.width / 2),
                      y:
                        slotRect.top +
                        slotRect.height / 2 -
                        (introRect.top + introRect.height / 2),
                    });
                  }
                }
                document.body.style.overflow = "";
                setPhase("slide");
              });
            }, 300);
          }, 800);
        }
      }, 65);
      return () => clearInterval(interval);
    }, 1800);

    return () => clearTimeout(startDelay);
  }, [phase, prefersReducedMotion]);

  // "settle" → "done" in one frame
  useEffect(() => {
    if (phase === "settle") {
      requestAnimationFrame(() => {
        setPhase("done");
      });
    }
  }, [phase]);

  if (prefersReducedMotion) {
    return (
      <IntroContext.Provider value={{ introPhase: "done", registerHeroSlot }}>
        {children}
      </IntroContext.Provider>
    );
  }

  return (
    <IntroContext.Provider value={{ introPhase: phase, registerHeroSlot }}>
      {/* Intro overlay — everything except the key */}
      {phase !== "done" && phase !== "settle" && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center pointer-events-none"
          animate={{
            backgroundColor:
              phase === "slide"
                ? "rgba(255,255,255,0)"
                : "rgba(255,255,255,1)",
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ pointerEvents: phase === "slide" ? "none" : "auto" }}
        >
          {/* Ambient glow */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(108,58,237,0.12) 0%, rgba(59,130,246,0.06) 40%, transparent 70%)",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              phase === "slide"
                ? { opacity: 0, scale: 1.5 }
                : { opacity: 1, scale: [1, 1.15, 1] }
            }
            transition={
              phase === "slide"
                ? { duration: 0.6 }
                : {
                    opacity: { duration: 1 },
                    scale: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }
            }
          />

          {/* Slogan — only in intro phase */}
          {phase === "intro" && (
            <motion.div
              className="absolute bottom-[12%] h-12 flex items-center pointer-events-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <span className="text-2xl md:text-3xl font-light tracking-wide">
                <span className="text-brand-dark">{typedText.slice(0, -1)}</span>
                <span className="text-brand-primary">{typedText.slice(-1)}</span>
              </span>
              {showCursor && typedText.length > 0 && (
                <motion.span
                  className="inline-block w-[2px] h-7 md:h-8 bg-brand-primary ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              )}
            </motion.div>
          )}

          {/* Subtle particles — only in intro phase */}
          {phase === "intro" &&
            [...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-brand-primary/30 pointer-events-none"
                style={{
                  top: `${25 + Math.sin(i * 1.2) * 20}%`,
                  left: `${20 + i * 12}%`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.4, 0], y: [0, -20, 0] }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1 + i * 0.3,
                }}
              />
            ))}
        </motion.div>
      )}

      {/* The ONE key — lives above everything during intro/slide, then unmounts on settle/done */}
      {phase !== "done" && (
        <motion.div
          ref={keyRef}
          className="fixed z-[10000] pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ opacity: 0, scale: 0.3, rotate: -90 }}
          animate={
            phase === "slide" && targetPos
              ? {
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  x: targetPos.x,
                  y: targetPos.y,
                }
              : phase === "slide" && isMobile
                ? { opacity: 0, scale: 0.8, rotate: 0, x: 0, y: 0 }
                : { opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 }
          }
          transition={
            phase === "slide"
              ? {
                  x: { duration: 1.8, ease: [0.25, 0.1, 0.25, 1] },
                  y: { duration: 1.8, ease: [0.25, 0.1, 0.25, 1] },
                  scale: { duration: 1.8, ease: [0.25, 0.1, 0.25, 1] },
                  opacity: isMobile
                    ? { duration: 0.8 }
                    : { duration: 0.01 },
                  rotate: { duration: 0.01 },
                }
              : { duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }
          }
          onAnimationComplete={() => {
            if (phase === "slide") {
              setPhase("settle");
            }
          }}
        >
          {/* Gentle bob during intro only */}
          <motion.div
            animate={phase === "intro" ? { y: [0, -8, 0] } : { y: 0 }}
            transition={
              phase === "intro"
                ? { duration: 3, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.3 }
            }
          >
            <Image
              src="/images/trovn-key.png"
              alt="Trovn Key"
              width={460}
              height={540}
              priority
              className="select-none"
              draggable={false}
              style={{
                filter:
                  "drop-shadow(0 0 60px rgba(108,58,237,0.35))",
              }}
            />
          </motion.div>
        </motion.div>
      )}

      {/* Site content — hidden during intro, visible during slide/settle/done */}
      <div
        ref={siteContentRef}
        style={{
          visibility: phase === "intro" ? "hidden" : "visible",
          opacity: phase === "intro" ? 0 : 1,
          transition: "opacity 0.8s ease",
        }}
      >
        {children}
      </div>
    </IntroContext.Provider>
  );
}
