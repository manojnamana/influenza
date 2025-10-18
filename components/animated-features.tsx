"use client"

import { motion } from "framer-motion"
import { Search, BarChart3, Users, Zap, Shield, Globe } from "lucide-react"
import { GlassCard } from "@/components/glass-card"
import { StaggerCards } from "@/components/stagger-cards"
import { ScrollRevealText } from "@/components/scroll-reveal-text"
import { FadeInSection } from "@/components/fade-in-section"

const features = [
  {
    icon: Search,
    title: "Advanced Discovery",
    description:
      "Search through 50M+ influencer profiles with 30+ filters including engagement rate, audience demographics, and brand affinity",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Track campaign performance, influencer metrics, and ROI with comprehensive analytics dashboards and reports",
  },
  {
    icon: Users,
    title: "Audience Insights",
    description:
      "Deep dive into influencer audiences with demographic data, interests, authenticity scores, and engagement patterns",
  },
  {
    icon: Zap,
    title: "Campaign Management",
    description:
      "Create, manage, and track campaigns from start to finish with automated workflows and collaboration tools",
  },
  {
    icon: Shield,
    title: "Fraud Detection",
    description: "AI-powered authenticity checks to identify fake followers, bots, and suspicious engagement patterns",
  },
  {
    icon: Globe,
    title: "Multi-Platform Support",
    description:
      "Connect with influencers across Instagram, TikTok, YouTube, Twitter, and more from a single dashboard",
  },
]

export function AnimatedFeatures() {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-32 lg:py-40">
      <FadeInSection direction="up" distance={60}>
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
            <ScrollRevealText>Everything you need to run</ScrollRevealText>
            <br />
            <ScrollRevealText className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              successful campaigns
            </ScrollRevealText>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Powerful tools and insights to help you find, analyze, and collaborate with the perfect influencers
          </p>
        </div>
      </FadeInSection>

      <StaggerCards className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.12}>
        {features.map((feature, i) => (
          <GlassCard key={i} className="p-8 h-full group">
            <div className="space-y-6">
              <motion.div
                className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <feature.icon className="h-7 w-7 text-primary relative z-10 group-hover:scale-110 transition-transform" />
              </motion.div>
              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
            </div>
          </GlassCard>
        ))}
      </StaggerCards>
    </section>
  )
}
