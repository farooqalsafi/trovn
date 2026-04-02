"use client";

import { VOICE_FEATURES } from "@/lib/constants";
import { SectionHeading } from "./section-heading";
import { ServiceCard } from "./service-card";
import {
  StaggerContainer,
  StaggerItem,
} from "./animations/stagger-container";

export function VoiceSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading
          label="AI Voice Solutions"
          title="Intelligent voice tools for your business"
          highlightWords={["voice", "tools"]}
          subtitle="AI-powered voice technology that handles calls, supports customers, and turns conversations into insights, around the clock."
        />

        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {VOICE_FEATURES.map((feature) => (
            <StaggerItem key={feature.title}>
              <ServiceCard {...feature} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
