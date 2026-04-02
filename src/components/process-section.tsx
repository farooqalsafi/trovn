"use client";

import { PROCESS_STEPS } from "@/lib/constants";
import { SectionHeading } from "./section-heading";
import { FadeUp } from "./animations/fade-up";
import { Counter } from "./animations/counter";

export function ProcessSection() {
  return (
    <section id="approach" className="py-24 bg-brand-gray-50 bg-dot-grid">
      <div className="container mx-auto px-6">
        <SectionHeading
          label="Our Approach"
          title="How we work"
          subtitle="A proven five-step process that takes you from AI opportunity to operating system. Clear, structured, and built for results."
        />

        <div className="max-w-2xl mx-auto">
          {PROCESS_STEPS.map((step, index) => (
            <FadeUp key={step.number} delay={index * 0.1}>
              <div className="relative flex gap-6 pb-12 last:pb-0">
                {/* Connecting line */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-px bg-border" />
                )}

                {/* Number */}
                <div className="w-12 h-12 rounded-full bg-brand-accent-bg flex items-center justify-center flex-shrink-0 relative z-10">
                  <Counter
                    target={step.number}
                    className="text-lg font-bold text-brand-primary"
                  />
                </div>

                {/* Content */}
                <div className="pt-1">
                  <h3 className="text-xl font-semibold text-brand-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-brand-gray-600">{step.description}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
