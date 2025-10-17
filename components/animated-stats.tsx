"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import { Box, Container, Typography } from "@mui/material"

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
    <Box 
      ref={sectionRef} 
      component="section"
      sx={{
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(168, 85, 247, 0.05) 0%, transparent 50%, rgba(16, 185, 129, 0.05) 100%)'
        }}
      />
      <Container maxWidth="xl" sx={{ py: 6, position: 'relative', zIndex: 10 }}>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, 
          gap: { xs: 3, lg: 4 } 
        }}>
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
            >
              <Box sx={{ 
                textAlign: 'center', 
                '&:hover': { 
                  transform: 'scale(1.05)',
                  '& .stat-value': {
                    background: 'linear-gradient(135deg, #a855f7 0%, #10b981 50%, #a855f7 100%)',
                    backgroundSize: '200% 100%',
                    animation: 'gradient-xy 2s ease infinite',
                  }
                }, 
                transition: 'transform 0.3s ease' 
              }}>
                <Typography
                  className="stat-value"
                  sx={{
                    fontSize: { xs: '3rem', md: '3.75rem', lg: '4.5rem' },
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #a855f7 0%, #10b981 50%, #a855f7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    mb: 1,
                    transition: 'all 0.3s ease'
                  }}
                >
                  0{stat.suffix}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontWeight: 500
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
