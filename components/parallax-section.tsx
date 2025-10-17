"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, ArrowRight } from "lucide-react"
import { GlassCard } from "@/components/glass-card"
import { Box, Container, Typography, Stack } from "@mui/material"

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
    <Box 
      ref={sectionRef} 
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, lg: 10 }
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.2
        }}
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' }, 
          gap: { xs: 4, lg: 6 }, 
          alignItems: 'center' 
        }}>
          <motion.div style={{ opacity }}>
            <Stack spacing={4}>
              <Badge 
                variant="secondary" 
                sx={{ 
                  fontSize: '0.875rem', 
                  px: 2, 
                  py: 0.75, 
                  borderRadius: '50px',
                  alignSelf: 'flex-start'
                }}
              >
                For Brands
              </Badge>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3rem', lg: '3.75rem' },
                  fontWeight: 700,
                  lineHeight: 1.1
                }}
              >
                Find the perfect influencers for your{" "}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #a855f7 0%, #10b981 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  brand
                </Box>
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: 1.6
                }}
              >
                Use our advanced filters to discover influencers that match your target audience, budget, and campaign
                goals.
              </Typography>
              <Stack spacing={2}>
                {[
                  "Filter by platform, followers, engagement rate, and location",
                  "View detailed analytics and audience insights",
                  "Track influencer partnerships and campaign performance",
                  "Secure payments and contract management",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <Box
                        sx={{
                          height: 28,
                          width: 28,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          mt: 0.5
                        }}
                      >
                        <Box
                          sx={{
                            height: 10,
                            width: 10,
                            borderRadius: '50%',
                            backgroundColor: '#a855f7'
                          }}
                        />
                      </Box>
                      <Typography sx={{ 
                        color: 'rgba(255, 255, 255, 0.7)', 
                        fontSize: '1.125rem' 
                      }}>
                        {item}
                      </Typography>
                    </Stack>
                  </motion.div>
                ))}
              </Stack>
              <Button
                size="lg"
                sx={{
                  fontSize: '1.125rem',
                  px: 4,
                  py: 3,
                  borderRadius: '50px',
                  background: 'linear-gradient(135deg, #a855f7 0%, #10b981 100%)',
                  alignSelf: 'flex-start',
                  mt: 2
                }}
              >
                Explore Discovery Tools
                <ArrowRight style={{ marginLeft: 8, height: 20, width: 20 }} />
              </Button>
            </Stack>
          </motion.div>

          <motion.div style={{ y, scale }}>
            <GlassCard sx={{ p: 6, position: 'relative', overflow: 'hidden' }}>
              <Box
                sx={{
                  aspectRatio: '1/1',
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
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
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.1
                  }}
                >
                  <TrendingUp style={{ height: '100%', width: '100%', color: '#a855f7' }} />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{
                    position: 'relative',
                    zIndex: 10,
                    padding: 32,
                    borderRadius: 16,
                    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <TrendingUp style={{ height: 128, width: 128, color: '#a855f7' }} />
                </motion.div>
              </Box>
            </GlassCard>
          </motion.div>
        </Box>
      </Container>
    </Box>
  )
}
