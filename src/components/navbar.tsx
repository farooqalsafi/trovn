"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-2xl font-bold text-brand-primary">
          trovn
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-gray-600 hover:text-brand-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 gradient-brand text-white text-sm font-medium rounded-full px-6 py-2.5 hover:opacity-90 transition-opacity"
        >
          Start a Project
          <ArrowRight className="w-4 h-4" />
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-brand-dark"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border px-6 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-base font-medium text-brand-gray-600 hover:text-brand-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center gap-2 gradient-brand text-white text-sm font-medium rounded-full px-6 py-2.5"
          >
            Start a Project
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
