"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Search, BarChart3, Users, Zap, Shield, Globe } from "lucide-react"
import { GlassCard } from "@/components/glass-card"
import { Box, Container, Typography, Stack } from "@mui/material"

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
    <Box component="section">
      <Container maxWidth="xl" sx={{ py: { xs: 8, lg: 10 } }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '3rem', lg: '3.75rem' },
                fontWeight: 700,
                lineHeight: 1.1,
                mb: 3
              }}
            >
              Everything you need to run
              <br />
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #10b981 50%, #a855f7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                successful campaigns
              </Box>
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: '3xl',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Powerful tools and insights to help you find, analyze, and collaborate with the perfect influencers
            </Typography>
          </Box>
        </motion.div>

        <Box 
          ref={containerRef} 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, 
            gap: 4 
          }}
        >
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
              <GlassCard sx={{ p: 4, height: '100%' }}>
                <Stack spacing={3}>
                  <motion.div
                    style={{
                      height: 56,
                      width: 56,
                      borderRadius: 16,
                      background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      cursor: 'pointer'
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      boxShadow: '0 8px 25px rgba(168, 85, 247, 0.3)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, transparent 100%)',
                        opacity: 0
                      }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      style={{ 
                        height: 28, 
                        width: 28, 
                        color: '#a855f7', 
                        position: 'relative', 
                        zIndex: 10 
                      }}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <feature.icon style={{ height: '100%', width: '100%' }} />
                    </motion.div>
                  </motion.div>
                  <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '1.5rem' }}>
                    {feature.title}
                  </Typography>
                  <Typography sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    lineHeight: 1.6, 
                    fontSize: '1.125rem' 
                  }}>
                    {feature.description}
                  </Typography>
                </Stack>
              </GlassCard>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
