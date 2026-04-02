"use client";

import { SectionHeading } from "./section-heading";
import { FadeUp } from "./animations/fade-up";
import {
  StaggerContainer,
  StaggerItem,
} from "./animations/stagger-container";
import { Zap, Shield, Users, Target } from "lucide-react";

const VALUES = [
  {
    icon: Zap,
    title: "Speed Without Shortcuts",
    description:
      "We move fast because we've done this before. Proven frameworks, reusable patterns, and a team that knows how to ship — without cutting corners.",
  },
  {
    icon: Shield,
    title: "Transparency First",
    description:
      "No black-box deliverables. You see the code, the data, the decisions. We explain what we're building and why, every step of the way.",
  },
  {
    icon: Users,
    title: "Your Team, Empowered",
    description:
      "We don't create dependency. Every engagement includes knowledge transfer so your team can own, evolve, and scale the AI systems we build together.",
  },
  {
    icon: Target,
    title: "Outcomes Over Output",
    description:
      "We measure success by business impact, not lines of code. Every solution is tied to a metric that matters to your bottom line.",
  },
] as const;

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-brand-gray-50 bg-dot-grid">
      <div className="container mx-auto px-6">
        <SectionHeading
          label="About Trovn"
          title="Built by practitioners, not consultants"
          highlightWords={["practitioners,"]}
          subtitle="We're a team of engineers, data scientists, and strategists who've built AI systems inside companies — not just advised on them. That hands-on experience shapes everything we do."
        />

        <FadeUp delay={0.2}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-brand-gray-600 text-lg leading-relaxed">
              Trovn was founded on a simple belief: AI should create real value,
              not just impressive demos. We partner with businesses to design,
              build, and operate AI systems that solve actual problems — and we
              stay until they do.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {VALUES.map((value) => (
            <StaggerItem key={value.title}>
              <div className="bg-white rounded-xl p-6 border border-border h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-brand-accent-bg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-brand-gray-600">
                  {value.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
