"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { VideoBackground } from "@/components/video-background"
import { ArrowRight, Sparkles } from "lucide-react"

export function AnimatedHero() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!titleRef.current) return

    const words = titleRef.current.querySelectorAll(".word")
    gsap.fromTo(
      words,
      {
        opacity: 0,
        y: 100,
        rotateX: -90,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        stagger: 0.08,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.5,
      },
    )
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <VideoBackground>
        <div className="container mx-auto px-4 lg:px-8 py-32 lg:py-40">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Influencer Discovery</span>
            </motion.div>

            <h1
              ref={titleRef}
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[1.1]"
              style={{ perspective: "1000px" }}
            >
              <span className="word inline-block bg-gradient-to-br from-foreground via-foreground to-primary bg-clip-text text-transparent">
                Connect.
              </span>{" "}
              <span className="word inline-block bg-gradient-to-br from-foreground via-primary to-accent bg-clip-text text-transparent">
                Create.
              </span>{" "}
              <span className="word inline-block bg-gradient-to-br from-primary via-accent to-foreground bg-clip-text text-transparent">
                Amplify.
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            >
              The future of influencer marketing starts here. Discover, analyze, and collaborate with creators who
              amplify your brand.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-7 rounded-full group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-7 rounded-full bg-background/20 backdrop-blur-sm border-border/50 hover:bg-background/40"
              >
                Explore Platform
              </Button>
            </motion.div>
          </div>
        </div>
      </VideoBackground>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
