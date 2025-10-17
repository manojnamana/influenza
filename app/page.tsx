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
import { 
  Box, 
  Container, 
  Typography, 
  Stack, 
  Grid,
  Paper
} from "@mui/material"

export default function HomePage() {
  return (
    <Box sx={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <CursorGlow />
      <CinematicNavbar />

      <Box sx={{ pt: 14 }}>
        <VideoSection
          videoUrl="https://stream.mux.com/AEYNxs00zwkuX9JEh4CG5ipSi9au35c02O/medium.mp4"
          sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}
          overlayOpacity={0.8}
        >
          <Box component="section" id="hero">
            <Container maxWidth="xl" sx={{ py: 8 }}>
              <Box sx={{ maxWidth: '6xl', mx: 'auto', textAlign: 'center' }}>
                <BlurText>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <Typography
                      variant="h1"
                      sx={{
                        fontSize: { xs: '3.75rem', md: '5rem', lg: '6rem' },
                        fontWeight: 700,
                        lineHeight: 1.1,
                        mb: 3
                      }}
                    >
                      <Box component="span" sx={{ display: 'block', color: '#ffffff' }}>
                        Connect with
                      </Box>
                      <Box 
                        component="span" 
                        sx={{ 
                          display: 'block',
                          background: 'linear-gradient(135deg, #a855f7 0%, #10b981 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          animation: 'gradient-xy 3s ease infinite',
                          backgroundSize: '200% 200%'
                        }}
                      >
                        Influencers
                      </Box>
                    </Typography>
                  </motion.div>
                </BlurText>

                <BlurText delay={0.3}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: { xs: '1.5rem', md: '1.875rem' },
                        color: 'rgba(255, 255, 255, 0.7)',
                        maxWidth: '4xl',
                        mx: 'auto',
                        lineHeight: 1.6,
                        mb: 4
                      }}
                    >
                      The complete platform for influencer marketing. Discover, analyze, and collaborate with top
                      influencers.
                    </Typography>
                  </motion.div>
                </BlurText>

                <BlurText delay={0.6}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    <Stack 
                      direction={{ xs: 'column', sm: 'row' }} 
                      spacing={3} 
                      justifyContent="center" 
                      sx={{ pt: 4 }}
                    >
                      <MagneticButton
                        size="lg"
                        sx={{
                          fontSize: '1.25rem',
                          px: 6,
                          py: 4,
                          borderRadius: '50px',
                          background: 'linear-gradient(135deg, #a855f7 0%, #10b981 100%)',
                          boxShadow: '0 0 60px rgba(168, 85, 247, 0.6)',
                          '&:hover': {
                            boxShadow: '0 0 80px rgba(168, 85, 247, 0.9)'
                          }
                        }}
                      >
                        Start Free Trial
                        <ArrowRight style={{ marginLeft: 12, height: 24, width: 24 }} />
                      </MagneticButton>
                      <MagneticButton
                        variant="outline"
                        size="lg"
                        sx={{
                          fontSize: '1.25rem',
                          px: 6,
                          py: 4,
                          borderRadius: '50px',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(20px)',
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.1)'
                          }
                        }}
                      >
                        Watch Demo
                      </MagneticButton>
                    </Stack>
                  </motion.div>
                </BlurText>
              </Box>
            </Container>
          </Box>
        </VideoSection>

        <VideoSection
          videoUrl="https://stream.mux.com/01Ruy6GLz01Z3MQAS7WiRe4nldO8uANCSu/high.mp4"
          sx={{ py: 8 }}
          overlayOpacity={0.85}
        >
          <Box component="section" id="discover">
            <Container maxWidth="xl">
              <BlurText>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <GlassCard sx={{ 
                    maxWidth: '5xl', 
                    mx: 'auto', 
                    p: 3,
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
                    },
                    transition: 'all 0.3s ease'
                  }}>
                    <Stack direction="row" spacing={2}>
                      <Box sx={{ position: 'relative', flex: 1 }}>
                        <Search 
                          style={{ 
                            position: 'absolute', 
                            left: 24, 
                            top: '50%', 
                            transform: 'translateY(-50%)', 
                            height: 24, 
                            width: 24, 
                            color: 'rgba(255, 255, 255, 0.5)',
                            transition: 'color 0.3s ease'
                          }} 
                        />
                        <Input
                          placeholder="Search influencers by name, niche, or platform..."
                          sx={{
                            pl: 8,
                            height: 80,
                            width: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            borderColor: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: 3,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              backgroundColor: 'rgba(0, 0, 0, 0.7)',
                              '& .MuiOutlinedInput-root fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.3)'
                              }
                            },
                            '& .MuiOutlinedInput-root': {
                              fontSize: '1.25rem',
                              color: '#ffffff',
                              height: '100%',
                              '& fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.1)',
                                borderRadius: 3,
                                transition: 'all 0.3s ease'
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                                boxShadow: '0 0 20px rgba(168, 85, 247, 0.2)'
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#a855f7',
                                boxShadow: '0 0 0 2px rgba(168, 85, 247, 0.2), 0 0 30px rgba(168, 85, 247, 0.3)'
                              }
                            },
                            '& .MuiInputBase-input': {
                              color: '#ffffff',
                              '&::placeholder': {
                                color: 'rgba(255, 255, 255, 0.4)',
                                opacity: 1
                              }
                            }
                          }}
                        />
                      </Box>
                      <motion.div
                        whileHover={{ 
                          scale: 1.05,
                          y: -2
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <Button 
                          sx={{
                            height: 80,
                            px: 6,
                            borderRadius: 3,
                            fontSize: '1.25rem',
                            fontWeight: 600,
                            background: 'linear-gradient(135deg, #a855f7 0%, #10b981 100%)',
                            backgroundSize: '200% 100%',
                            boxShadow: '0 0 40px rgba(168, 85, 247, 0.4)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              backgroundPosition: '100% 0',
                              boxShadow: '0 0 60px rgba(168, 85, 247, 0.6)',
                              transform: 'translateY(-3px)'
                            }
                          }}
                        >
                          Search
                        </Button>
                      </motion.div>
                    </Stack>
                  </GlassCard>
                </motion.div>
              </BlurText>
            </Container>
          </Box>
        </VideoSection>

        <VideoSection 
          videoUrl="https://stream.mux.com/YXF46g02XKwxe7QQNNfNcAfzC7udbxLfN/high.mp4" 
          overlayOpacity={0.9}
        >
          <Box component="section" id="stats">
            <AnimatedStats />
          </Box>
        </VideoSection>

        <VideoSection
          videoUrl="https://stream.mux.com/6E1ru5UoZfWYnFBffKxu1PpckbMd00aoQ/high.mp4"
          overlayOpacity={0.85}
        >
          <Box component="section" id="features">
            <AnimatedFeatures />
          </Box>
        </VideoSection>

        <VideoSection
          videoUrl="https://stream.mux.com/ITppDOn00woiNWvh00eWy5jr9eaKyuqO6x/high.mp4"
          overlayOpacity={0.9}
        >
          <Box component="section" id="analytics">
            <ParallaxSection />
          </Box>
        </VideoSection>

        <VideoSection
          videoUrl="https://stream.mux.com/DKRFWE7xYaff00cKqX81EK6GIqGPNVdfH/high.mp4"
          sx={{ py: 10 }}
          overlayOpacity={0.85}
        >
          <Box component="section" id="cta">
            <Container maxWidth="xl">
              <BlurText>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <GlassCard sx={{ p: { xs: 5, lg: 8 }, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                    <Box sx={{ maxWidth: '5xl', mx: 'auto', position: 'relative', zIndex: 10 }}>
                      <Typography
                        variant="h2"
                        sx={{
                          fontSize: { xs: '3rem', md: '3.75rem', lg: '4.5rem' },
                          fontWeight: 700,
                          lineHeight: 1.1,
                          mb: 3
                        }}
                      >
                        Ready to transform your{" "}
                        <Box
                          component="span"
                          sx={{
                            background: 'linear-gradient(135deg, #a855f7 0%, #10b981 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                          }}
                        >
                          influencer marketing?
                        </Box>
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          fontSize: { xs: '1.5rem', md: '1.875rem' },
                          color: 'rgba(255, 255, 255, 0.7)',
                          lineHeight: 1.6,
                          mb: 4
                        }}
                      >
                        Join thousands of brands already using Influenza to run successful campaigns
                      </Typography>
                      <Stack 
                        direction={{ xs: 'column', sm: 'row' }} 
                        spacing={4} 
                        justifyContent="center" 
                        sx={{ pt: 6 }}
                      >
                        <MagneticButton
                          size="lg"
                          sx={{
                            fontSize: '1.25rem',
                            px: 6,
                            py: 4,
                            borderRadius: '50px',
                            background: 'linear-gradient(135deg, #a855f7 0%, #10b981 100%)',
                            boxShadow: '0 0 60px rgba(168, 85, 247, 0.6)'
                          }}
                        >
                          Start Free Trial
                          <ArrowRight style={{ marginLeft: 12, height: 24, width: 24 }} />
                        </MagneticButton>
                        <MagneticButton
                          variant="outline"
                          size="lg"
                          sx={{
                            fontSize: '1.25rem',
                            px: 6,
                            py: 4,
                            borderRadius: '50px',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(20px)',
                            borderColor: 'rgba(255, 255, 255, 0.2)'
                          }}
                        >
                          Contact Sales
                        </MagneticButton>
                      </Stack>
                    </Box>
                  </GlassCard>
                </motion.div>
              </BlurText>
            </Container>
          </Box>
        </VideoSection>

        <VideoSection
          videoUrl="https://stream.mux.com/f02D5glc65LPWnibAAEYRE8QvatTZalmt/high.mp4"
          overlayOpacity={0.95}
        >
          <Box 
            component="footer" 
            sx={{ 
              borderTop: '1px solid rgba(255, 255, 255, 0.05)',
              py: 5
            }}
          >
            <Container maxWidth="xl">
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' }, gap: 4 }}>
                <Box>
                  <BlurText>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <Stack spacing={3}>
                        <Stack direction="row" spacing={2} alignItems="center">
                          <Box
                            sx={{
                              height: 48,
                              width: 48,
                              borderRadius: 2,
                              background: 'linear-gradient(135deg, #a855f7 0%, #10b981 100%)',
                              boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)'
                            }}
                          />
                          <Typography variant="h5" sx={{ fontWeight: 700 }}>
                            Influenza
                          </Typography>
                        </Stack>
                        <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '1.125rem' }}>
                          The complete platform for influencer marketing
                        </Typography>
                      </Stack>
                    </motion.div>
                  </BlurText>
                </Box>
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
                  <Box key={i}>
                    <BlurText delay={0.1 * (i + 1)}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
                      >
                        <Stack spacing={3}>
                          <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.25rem' }}>
                            {section.title}
                          </Typography>
                          <Stack spacing={2}>
                            {section.links.map((link, j) => (
                              <Link 
                                key={j}
                                href="#" 
                                style={{ 
                                  color: 'rgba(255, 255, 255, 0.6)',
                                  fontSize: '1.125rem',
                                  textDecoration: 'none',
                                  transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
                              >
                                {link}
                              </Link>
                            ))}
                          </Stack>
                        </Stack>
                      </motion.div>
                    </BlurText>
                  </Box>
                ))}
              </Box>
              <Box 
                sx={{ 
                  mt: 5, 
                  pt: 5, 
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  textAlign: 'center'
                }}
              >
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '1.125rem' }}>
                  © 2025 Influenza. All rights reserved.
                </Typography>
              </Box>
            </Container>
          </Box>
        </VideoSection>
      </Box>
    </Box>
  )
}

