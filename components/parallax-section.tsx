"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, ArrowRight } from "lucide-react"
import { GlassCard } from "@/components/glass-card"
import { CursorAnimatedWrapper, CursorAnimatedText, CursorAnimatedCard, CursorAnimatedButton } from "@/components/cursor-animated-wrapper"

export function ParallaxSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-32 lg:py-40">
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, oklch(0.85 0.15 280 / 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, oklch(0.75 0.2 150 / 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, oklch(0.85 0.15 280 / 0.3) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div style={{ opacity }} className="space-y-8">
            <CursorAnimatedWrapper sectionId="analytics" animationType="fade" delay={0}>
              <Badge variant="secondary" className="text-sm px-4 py-1.5 rounded-full">
                For Brands
              </Badge>
            </CursorAnimatedWrapper>

            <CursorAnimatedText sectionId="analytics" delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Find the perfect influencers for your{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">brand</span>
              </h2>
            </CursorAnimatedText>

            <CursorAnimatedText sectionId="analytics" delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Use our advanced filters to discover influencers that match your target audience, budget, and campaign
                goals.
              </p>
            </CursorAnimatedText>

            <ul className="space-y-4">
              {[
                "Filter by platform, followers, engagement rate, and location",
                "View detailed analytics and audience insights",
                "Track influencer partnerships and campaign performance",
                "Secure payments and contract management",
              ].map((item, i) => (
                <CursorAnimatedWrapper key={i} sectionId="analytics" animationType="slide" delay={0.3 + (i * 0.1)}>
                  <li className="flex items-start gap-4">
                    <div className="h-7 w-7 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground text-lg">{item}</span>
                  </li>
                </CursorAnimatedWrapper>
              ))}
            </ul>

            <CursorAnimatedButton sectionId="analytics" delay={0.6}>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-full group mt-4"
              >
                Explore Discovery Tools
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CursorAnimatedButton>
          </motion.div>

          <CursorAnimatedCard sectionId="analytics" delay={0.4}>
            <motion.div style={{ y, scale }}>
              <GlassCard className="p-12 relative overflow-hidden">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-background/50 to-background/20 flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="absolute inset-0 opacity-10"
                  >
                    <TrendingUp className="h-full w-full text-primary" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative z-10 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm"
                  >
                    <TrendingUp className="h-32 w-32 text-primary" />
                  </motion.div>
                </div>
              </GlassCard>
            </motion.div>
          </CursorAnimatedCard>
        </div>
      </div>
    </section>
  )
}
