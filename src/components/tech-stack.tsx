"use client";

import { TECH_LOGOS } from "@/lib/constants";
import { SectionHeading } from "./section-heading";
import {
  Bot, Code2, Cloud, BarChart3, Target, MessageSquare,
  Zap, BookOpen, Users, Link, Container, Database, Box,
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Bot, Code2, Cloud, BarChart3, Target, MessageSquare,
  Zap, BookOpen, Users, Link, Container, Database, Box,
};

export function TechStack() {
  return (
    <section className="py-20 bg-brand-gray-50 bg-dot-grid">
      <div className="container mx-auto px-6">
        <SectionHeading
          label="Our Tech Stack"
          title="Technologies we work with"
          subtitle="These are just some of the tools and platforms we integrate with. Your stack? We'll make it work."
        />

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-12 hover:[animation-play-state:paused]">
            {[...TECH_LOGOS, ...TECH_LOGOS].map((logo, i) => {
              const IconComponent = ICON_MAP[logo.icon] ?? Box;
              return (
                <div
                  key={`${logo.name}-${i}`}
                  className="flex flex-col items-center gap-2 min-w-[100px] group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-brand-primary" />
                  </div>
                  <span className="text-xs text-brand-gray-400 group-hover:text-brand-gray-600 transition-colors">
                    {logo.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
