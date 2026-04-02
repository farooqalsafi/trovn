"use client";

import { SERVICES } from "@/lib/constants";
import { SectionHeading } from "./section-heading";
import { ServiceCard } from "./service-card";
import {
  StaggerContainer,
  StaggerItem,
} from "./animations/stagger-container";

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading
          label="What We Do"
          title="End-to-end AI services"
          subtitle="From strategy to deployment and beyond, we handle every stage of your AI journey so you can focus on running your business."
        />

        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <StaggerItem key={service.title}>
              <ServiceCard {...service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
