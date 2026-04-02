"use client";

import { CRM_FEATURES } from "@/lib/constants";
import { SectionLabel } from "./section-label";
import { SlideIn } from "./animations/slide-in";
import { ArrowRight } from "lucide-react";
import { LayoutDashboard, Workflow, Box } from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutDashboard,
  Workflow,
  Box,
};

export function CrmSection() {
  return (
    <section className="py-24 bg-brand-gray-50 bg-dot-grid">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <SlideIn from="left">
            <SectionLabel text="Bespoke CRM Solutions" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
              A CRM built around{" "}
              <span className="text-brand-primary">your business</span>
            </h2>
            <p className="text-brand-gray-600 mb-4">
              Off-the-shelf CRMs force you to adapt your processes to their
              limitations. We build the opposite: a system designed around how
              your team actually works, with AI woven into every layer.
            </p>
            <p className="text-brand-gray-600 mb-6">
              From lead capture to post-sale support, every touchpoint is
              intelligent, automated, and tailored to your workflow.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-brand-primary font-medium hover:gap-3 transition-all"
            >
              Learn more
              <ArrowRight className="w-4 h-4" />
            </a>
          </SlideIn>

          {/* Right — Feature cards */}
          <SlideIn from="right" delay={0.2}>
            <div className="space-y-6">
              {CRM_FEATURES.map((feature) => {
                const IconComponent = ICON_MAP[feature.icon] ?? Box;
                return (
                  <div
                    key={feature.title}
                    className="bg-white rounded-xl p-6 border border-border"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-accent-bg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-dark mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-brand-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
