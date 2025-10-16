"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 50, suffix: "M+", label: "Influencer Profiles" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 500, suffix: "K+", label: "Campaigns Launched" },
  { value: 150, suffix: "+", label: "Countries Covered" },
]

export function AnimatedStats() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!sectionRef.current) return

    statsRef.current.forEach((stat, index) => {
      if (!stat) return

      const valueElement = stat.querySelector(".stat-value")
      if (!valueElement) return

      const targetValue = stats[index].value

      ScrollTrigger.create({
        trigger: stat,
        start: "top 80%",
        onEnter: () => {
          gsap.to(valueElement, {
            innerHTML: targetValue,
            duration: 2,
            ease: "power2.out",
            snap: { innerHTML: 1 },
            onUpdate: function () {
              const currentValue = Math.round(Number(this.targets()[0].innerHTML))
              valueElement.innerHTML = currentValue + stats[index].suffix
            },
          })
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative border-y border-border/50 backdrop-blur-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="container mx-auto px-4 lg:px-8 py-24 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              ref={(el) => {
                statsRef.current[i] = el
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center space-y-3 group"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent stat-value group-hover:scale-110 transition-transform">
                0{stat.suffix}
              </div>
              <div className="text-base md:text-lg text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
