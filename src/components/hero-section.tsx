"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { TypeOnText } from "./animations/type-on-text";
import { FloatingParticles } from "./animations/floating-particles";
import { Hero3D } from "./hero-3d";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-grid-lines">
      {/* Gradient orb — top right */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(108,58,237,0.07) 0%, transparent 70%)" }}
      />
      {/* Gradient orb — bottom left */}
      <div
        className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)" }}
      />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Grid fade-out at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20 relative z-10">
        {/* Text */}
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-brand-dark">
            <TypeOnText
              text="AI solutions that actually work"
              highlightWords={["actually"]}
            />
          </h1>

          <motion.p
            className="text-lg text-brand-gray-600 max-w-lg"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            From strategy to deployment and beyond, we handle every stage of
            your AI journey so you can focus on running your business.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 gradient-brand text-white font-medium rounded-full px-8 py-3.5 hover:opacity-90 transition-opacity"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-primary text-brand-primary font-medium rounded-full px-8 py-3.5 hover:bg-brand-accent-bg transition-colors"
            >
              View Services
            </a>
          </motion.div>
        </div>

        {/* 3D Object */}
        <div className="hidden lg:flex justify-center items-center">
          <Hero3D />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <ChevronDown className="w-6 h-6 text-brand-gray-400 animate-bounce-gentle" />
      </motion.div>
    </section>
  );
}
