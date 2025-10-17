"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { AnimatedStats } from "@/components/animated-stats"
import { AnimatedFeatures } from "@/components/animated-features"
import { ParallaxSection } from "@/components/parallax-section"
import { MagneticButton } from "@/components/magnetic-button"
import { GlassCard } from "@/components/glass-card"
import { CursorGlow } from "@/components/cursor-glow"
import { CinematicNavbar } from "@/components/cinematic-navbar"
import { VideoSection } from "@/components/video-section"
import { BlurText } from "@/components/blur-text"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <CursorGlow />
      <CinematicNavbar />

      <div className="pt-28">
        <VideoSection
          videoUrl="https://stream.mux.com/AEYNxs00zwkuX9JEh4CG5ipSi9au35c02O/medium.mp4"
          className="min-h-screen flex items-center"
          overlayOpacity={0.8}
        >
          <section id="hero" className="container mx-auto px-4 lg:px-8 py-32">
            <div className="max-w-6xl mx-auto text-center space-y-12">
              <BlurText>
                <motion.h1
                  className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <span className="block text-white">Connect with</span>
                  <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-xy">
                    Influencers
                  </span>
                </motion.h1>
              </BlurText>

              <BlurText delay={0.3}>
                <motion.p
                  className="text-2xl md:text-3xl text-white/70 max-w-4xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  The complete platform for influencer marketing. Discover, analyze, and collaborate with top
                  influencers.
                </motion.p>
              </BlurText>

              <BlurText delay={0.6}>
                <motion.div
                  className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <MagneticButton
                    size="lg"
                    className="text-xl px-12 py-8 rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_60px_rgba(168,85,247,0.6)] hover:shadow-[0_0_80px_rgba(168,85,247,0.9)]"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </MagneticButton>
                  <MagneticButton
                    variant="outline"
                    size="lg"
                    className="text-xl px-12 py-8 rounded-full bg-white/5 backdrop-blur-xl border-white/20 hover:bg-white/10"
                  >
                    Watch Demo
                  </MagneticButton>
                </motion.div>
              </BlurText>
            </div>
          </section>
        </VideoSection>

        <VideoSection
          videoUrl="https://stream.mux.com/01Ruy6GLz01Z3MQAS7WiRe4nldO8uANCSu/high.mp4"
          className="py-32"
          overlayOpacity={0.85}
        >
          <section id="discover" className="container mx-auto px-4 lg:px-8">
            <BlurText>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <GlassCard className="max-w-5xl mx-auto p-4">
                  <div className="flex gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-white/50" />
                      <Input
                        placeholder="Search influencers by name, niche, or platform..."
                        className="pl-16 h-20 bg-black/50 border-white/10 focus-visible:ring-2 focus-visible:ring-primary text-xl text-white placeholder:text-white/40"
                      />
                    </div>
                    <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 h-20 px-12 rounded-2xl text-xl shadow-[0_0_40px_rgba(168,85,247,0.4)]">
                      Search
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            </BlurText>
          </section>
        </VideoSection>

        <VideoSection 
        // videoUrl="https://stream.mux.com/YXF46g02XKwxe7QQNNfNcAfzC7udbxLfN/high.mp4" 
        videoUrl="/videos/v02.mp4" 
        overlayOpacity={0.9}>
          <section id="stats">
            <AnimatedStats />
          </section>
        </VideoSection>

        <VideoSection
          // videoUrl="https://stream.mux.com/6E1ru5UoZfWYnFBffKxu1PpckbMd00aoQ/high.mp4"
          videoUrl="/videos/v01.mp4"
          overlayOpacity={0.85}
        >
          <section id="features">
            <AnimatedFeatures />
          </section>
        </VideoSection>

        <VideoSection
          // videoUrl="https://stream.mux.com/ITppDOn00woiNWvh00eWy5jr9eaKyuqO6x/high.mp4"
          videoUrl="/videos/v03.mp4"
          overlayOpacity={0.9}
        >
          <section id="analytics">
            <ParallaxSection />
          </section>
        </VideoSection>

        <VideoSection
          // videoUrl="https://stream.mux.com/DKRFWE7xYaff00cKqX81EK6GIqGPNVdfH/high.mp4"
          videoUrl="/videos/v04.mp4"
          className="py-40"
          overlayOpacity={0.85}
        >
          <section id="cta" className="container mx-auto px-4 lg:px-8">
            <BlurText>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <GlassCard className="p-20 lg:p-32 text-center relative overflow-hidden">
                  <div className="max-w-5xl mx-auto space-y-12 relative z-10">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                      Ready to transform your{" "}
                      <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                        influencer marketing?
                      </span>
                    </h2>
                    <p className="text-2xl md:text-3xl text-white/70 leading-relaxed">
                      Join thousands of brands already using Influenza to run successful campaigns
                    </p>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center pt-12">
                      <MagneticButton
                        size="lg"
                        className="text-xl px-12 py-8 rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_60px_rgba(168,85,247,0.6)]"
                      >
                        Start Free Trial
                        <ArrowRight className="ml-3 h-6 w-6" />
                      </MagneticButton>
                      <MagneticButton
                        variant="outline"
                        size="lg"
                        className="text-xl px-12 py-8 rounded-full bg-white/5 backdrop-blur-xl border-white/20"
                      >
                        Contact Sales
                      </MagneticButton>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </BlurText>
          </section>
        </VideoSection>

        <VideoSection
          // videoUrl="https://stream.mux.com/f02D5glc65LPWnibAAEYRE8QvatTZalmt/high.mp4"
          videoUrl="/videos/v05.mp4"
          overlayOpacity={0.95}
        >
          <footer className="border-t border-white/5">
            <div className="container mx-auto px-4 lg:px-8 py-20">
              <div className="grid md:grid-cols-4 gap-16">
                <BlurText>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-accent shadow-[0_0_30px_rgba(168,85,247,0.5)]" />
                      <span className="text-2xl font-bold">Influenza</span>
                    </div>
                    <p className="text-lg text-white/60">The complete platform for influencer marketing</p>
                  </motion.div>
                </BlurText>
                {[
                  {
                    title: "Product",
                    links: ["Discover", "Campaigns", "Analytics", "Pricing"],
                  },
                  {
                    title: "Company",
                    links: ["About", "Blog", "Careers", "Contact"],
                  },
                  {
                    title: "Legal",
                    links: ["Privacy", "Terms", "Security", "Cookies"],
                  },
                ].map((section, i) => (
                  <BlurText key={i} delay={0.1 * (i + 1)}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
                      className="space-y-6"
                    >
                      <h3 className="font-semibold text-xl">{section.title}</h3>
                      <ul className="space-y-4">
                        {section.links.map((link, j) => (
                          <li key={j}>
                            <Link href="#" className="text-lg text-white/60 hover:text-white transition-colors">
                              {link}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </BlurText>
                ))}
              </div>
              <div className="mt-20 pt-10 border-t border-white/5 text-center text-lg text-white/50">
                © 2025 Influenza. All rights reserved.
              </div>
            </div>
          </footer>
        </VideoSection>
      </div>
    </div>
  )
}
