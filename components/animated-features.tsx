"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Search, BarChart3, Users, Zap, Shield, Globe } from "lucide-react"
import { GlassCard } from "@/components/glass-card"

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
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section className="container mx-auto px-4 lg:px-8 py-32 lg:py-40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6 mb-20"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
          Everything you need to run
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            successful campaigns
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Powerful tools and insights to help you find, analyze, and collaborate with the perfect influencers
        </p>
      </motion.div>

      <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            <GlassCard className="p-8 h-full group">
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
          </motion.div>
        ))}
      </div>
    </section>
  )
}
