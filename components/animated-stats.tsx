"use client"

import { useRef } from "react"
import { ScrollCounter } from "@/components/scroll-counter"
import { StaggerCards } from "@/components/stagger-cards"

const stats = [
  { value: 50, suffix: "M+", label: "Influencer Profiles" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 500, suffix: "K+", label: "Campaigns Launched" },
  { value: 150, suffix: "+", label: "Countries Covered" },
]

export function AnimatedStats() {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={sectionRef} className="relative border-y border-border/50 backdrop-blur-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="container mx-auto px-4 lg:px-8 py-24 relative z-10">
        <StaggerCards className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16" stagger={0.1}>
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center space-y-3 group"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                <ScrollCounter
                  end={stat.value}
                  duration={2.5}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-base md:text-lg text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </StaggerCards>
      </div>
    </section>
  )
}
