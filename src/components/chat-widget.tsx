"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-border overflow-hidden"
          >
            <div className="gradient-brand p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-sm">
                    Got a question?
                  </p>
                  <p className="text-white/80 text-xs">
                    We typically reply within hours
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-white/80 hover:text-white"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-4 h-48 flex items-center justify-center">
              <p className="text-sm text-brand-gray-400 text-center">
                Send us a message at{" "}
                <a
                  href="mailto:hello@trovn.ai"
                  className="text-brand-primary font-medium"
                >
                  hello@trovn.ai
                </a>{" "}
                or use the contact form below.
              </p>
            </div>
            <div className="p-3 border-t border-border">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center gradient-brand text-white text-sm font-medium rounded-full py-2 hover:opacity-90 transition-opacity"
              >
                Go to Contact Form
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full gradient-brand text-white shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity"
        initial={prefersReducedMotion ? {} : { scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 3, type: "spring", stiffness: 200 }}
        aria-label="Open chat"
      >
        {open ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>
    </div>
  );
}
