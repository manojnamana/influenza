"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/magnetic-button"
import { Menu, X } from "lucide-react"
import { 
  AppBar, 
  Toolbar, 
  Box, 
  Typography, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  Container
} from "@mui/material"

export function CinematicNavbar() {
  const [activeSection, setActiveSection] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  const navOpacity = useTransform(scrollY, [0, 100], [0.3, 0.95])
  const navBlur = useTransform(scrollY, [0, 100], [0, 24])
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.85])

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 200

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Discover", href: "#discover" },
    { name: "Features", href: "#features" },
    { name: "Analytics", href: "#analytics" },
    { name: "Pricing", href: "#pricing" },
  ]

  return (
    <>
      <motion.div
        style={{
          backdropFilter: `blur(${navBlur.get()}px)`,
          opacity: navOpacity,
        }}
      >
        <AppBar 
          position="fixed" 
          sx={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            zIndex: 50,
            transition: 'all 0.3s ease'
          }}
        >
          {/* Video Background for Navbar */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              overflow: 'hidden',
              zIndex: -1
            }}
          >
            <video 
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.2
              }} 
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="https://stream.mux.com/WAl7GG5G5q1fu7YpfhLJGqp7X98jbmiu/high.mp4" type="video/mp4" />
            </video>
            {/* Dark overlay for better text readability */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 100%)',
                zIndex: 1
              }}
            />
          </Box>

          <Container maxWidth="xl">
            <Toolbar sx={{ minHeight: '112px !important' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                {/* Logo with Text Blur Effect */}
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '16px', position: 'relative', zIndex: 10 }}>
                  <motion.div
                    style={{ scale: logoScale }}
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <Box
                      sx={{
                        height: 56,
                        width: 56,
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, #a855f7 0%, #10b981 100%)',
                        boxShadow: '0 0 40px rgba(168, 85, 247, 0.6)',
                        position: 'relative'
                      }}
                    />
                    <motion.div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: 16,
                        background: 'linear-gradient(135deg, #a855f7 0%, #10b981 100%)',
                        filter: 'blur(8px)'
                      }}
                      animate={{
                        opacity: [0.4, 0.8, 0.4],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                  <motion.div style={{ position: 'relative' }}>
                    <motion.span
                      style={{
                        fontSize: '2.25rem',
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.4) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                      whileHover={{ scale: 1.05 }}
                      animate={{
                        filter: ["blur(0px)", "blur(0.3px)", "blur(0px)"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      Influenza
                    </motion.span>
                    <motion.div
                      style={{
                        position: 'absolute',
                        inset: -8,
                        background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%)',
                        filter: 'blur(12px)',
                        opacity: 0
                      }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                </Link>

                {/* Nav Items with Blur Effects */}
                <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 0.5 }}>
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * i }}
                    >
                      <Link 
                        href={item.href} 
                        style={{ 
                          position: 'relative', 
                          padding: '16px 32px', 
                          display: 'block',
                          textDecoration: 'none'
                        }}
                      >
                        <motion.span
                          style={{
                            position: 'relative',
                            zIndex: 10,
                            fontSize: '1.125rem',
                            fontWeight: 500,
                            letterSpacing: '0.025em',
                            color: activeSection === item.href.slice(1) ? '#ffffff' : 'rgba(255, 255, 255, 0.65)',
                            filter: activeSection === item.href.slice(1) ? 'blur(0px)' : 'blur(0.8px)'
                          }}
                          animate={{
                            color: activeSection === item.href.slice(1) ? '#ffffff' : 'rgba(255, 255, 255, 0.65)',
                            filter: activeSection === item.href.slice(1)
                              ? ["blur(0px)", "blur(0.5px)", "blur(0px)"]
                              : "blur(0.8px)",
                          }}
                          transition={{
                            duration: activeSection === item.href.slice(1) ? 3 : 0.3,
                            repeat: activeSection === item.href.slice(1) ? Number.POSITIVE_INFINITY : 0,
                          }}
                        >
                          {item.name}
                        </motion.span>

                        {/* Hover glow effect */}
                        <motion.div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            borderRadius: 16,
                            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0) 0%, rgba(168, 85, 247, 0.3) 50%, rgba(16, 185, 129, 0) 100%)',
                            filter: 'blur(12px)',
                            opacity: 0
                          }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.4 }}
                        />

                        {/* Active indicator with blur */}
                        {activeSection === item.href.slice(1) && (
                          <motion.div
                            layoutId="activeSection"
                            style={{
                              position: 'absolute',
                              inset: 0,
                              borderRadius: 16,
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                              border: '1px solid rgba(255, 255, 255, 0.2)',
                              backdropFilter: 'blur(20px)',
                              boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)'
                            }}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </Box>

                {/* CTA Buttons */}
                <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 3, position: 'relative', zIndex: 10 }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    animate={{
                      filter: ["blur(0px)", "blur(0.3px)", "blur(0px)"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <Button
                      variant="ghost"
                      size="lg"
                      sx={{
                        fontSize: '1.125rem',
                        fontWeight: 500,
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: 16,
                        px: 4,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      Sign In
                    </Button>
                  </motion.div>
                  <MagneticButton
                    size="lg"
                    sx={{
                      borderRadius: '50px',
                      px: 5,
                      py: 3,
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      background: 'linear-gradient(135deg, #a855f7 0%, #10b981 100%)',
                      backgroundSize: '200% 100%',
                      boxShadow: '0 0 40px rgba(168, 85, 247, 0.5)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundPosition: '100% 0',
                        boxShadow: '0 0 60px rgba(168, 85, 247, 0.8)',
                        transform: 'translateY(-3px) scale(1.02)'
                      }
                    }}
                  >
                    Get Started
                  </MagneticButton>
                </Box>

                {/* Mobile Menu Button */}
                <IconButton
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  sx={{ 
                    display: { xs: 'block', lg: 'none' }, 
                    position: 'relative', 
                    zIndex: 10, 
                    color: '#ffffff' 
                  }}
                >
                  {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </motion.div>

      {/* Mobile Menu */}
      <Drawer
        anchor="top"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(32px)',
            pt: 16
          }
        }}
      >
        <Container>
          <List sx={{ py: 2 }}>
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <ListItem>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ textDecoration: 'none' }}
                  >
                    <ListItemText
                      primary={item.name}
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontSize: '1.875rem',
                          fontWeight: 700,
                          color: 'rgba(255, 255, 255, 0.8)',
                          '&:hover': {
                            color: '#ffffff'
                          }
                        }
                      }}
                    />
                  </Link>
                </ListItem>
              </motion.div>
            ))}
            <Box sx={{ pt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button 
                variant="ghost" 
                size="lg" 
                sx={{ 
                  width: '100%', 
                  fontSize: '1.25rem',
                  py: 2
                }}
              >
                Sign In
              </Button>
              <Button 
                size="lg" 
                sx={{ 
                  width: '100%', 
                  fontSize: '1.25rem',
                  background: 'linear-gradient(135deg, #a855f7 0%, #10b981 100%)',
                  py: 2
                }}
              >
                Get Started
              </Button>
            </Box>
          </List>
        </Container>
      </Drawer>
    </>
  )
}