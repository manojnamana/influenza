"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/magnetic-button"
import { Menu, X } from "lucide-react"

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

    // Listen to both native scroll and Lenis scroll events
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("lenis-scroll", handleScroll, { passive: true })
    
    // Initial check
    handleScroll()
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("lenis-scroll", handleScroll)
    }
  }, [])

  const navItems = [
    { name: "Discover", href: "#discover" },
    { name: "Features", href: "#features" },
    { name: "Analytics", href: "#analytics" },
    { name: "Pricing", href: "#pricing" },
  ]

  return (
    <>
      <motion.nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        {/* Video Background for Navbar */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <video className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" autoPlay loop muted playsInline>
            <source src="https://stream.mux.com/WAl7GG5G5q1fu7YpfhLJGqp7X98jbmiu/high.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Blur and Gradient Overlay */}
        <motion.div
          style={{
            backdropFilter: `blur(${navBlur.get()}px)`,
            opacity: navOpacity,
          }}
          className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-transparent border-b border-white/5 pointer-events-none"
        />

        <div className="container mx-auto px-4 lg:px-8 relative pointer-events-auto">
          <div className="flex h-28 items-center justify-between">
            {/* Logo with Text Blur Effect */}
            <Link href="/" className="flex items-center gap-4 group relative z-10 pointer-events-auto">
              <motion.div
                style={{ scale: logoScale }}
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="relative"
              >
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary animate-gradient-xy shadow-[0_0_40px_rgba(168,85,247,0.6)]" />
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary blur-2xl"
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
              <motion.div className="relative">
                <motion.span
                  className="text-4xl font-bold bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent"
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
                  Influenzi
                </motion.span>
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </Link>

            {/* Nav Items with Blur Effects */}
            <div className="hidden lg:flex items-center gap-1 pointer-events-auto">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                >
                  <Link href={item.href} className="relative px-8 py-4 group block">
                    <motion.span
                      className="relative z-10 text-lg font-medium tracking-wide"
                      animate={{
                        color: activeSection === item.href.slice(1) ? "oklch(0.99 0 0)" : "oklch(0.65 0 0)",
                        filter:
                          activeSection === item.href.slice(1)
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
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/30 to-accent/0 opacity-0 group-hover:opacity-100 blur-xl"
                      transition={{ duration: 0.4 }}
                    />

                    {/* Active indicator with blur */}
                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-6 relative z-10 pointer-events-auto">
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
                  className="text-lg font-medium hover:bg-white/10 backdrop-blur-sm rounded-2xl px-8"
                >
                  Sign In
                </Button>
              </motion.div>
              <MagneticButton
                size="lg"
                className="rounded-full px-10 py-6 text-lg bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] shadow-[0_0_40px_rgba(168,85,247,0.5)] hover:shadow-[0_0_60px_rgba(168,85,247,0.8)] transition-all duration-500"
              >
                Get Started
              </MagneticButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative z-10 p-2 text-white pointer-events-auto"
            >
              {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 lg:hidden bg-black/95 backdrop-blur-2xl pt-32 pointer-events-auto"
        >
          <div className="container mx-auto px-4 space-y-6">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-3xl font-bold text-white/80 hover:text-white py-4"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <div className="pt-8 space-y-4">
              <Button variant="ghost" size="lg" className="w-full text-xl">
                Sign In
              </Button>
              <Button size="lg" className="w-full text-xl bg-gradient-to-r from-primary to-accent">
                Get Started
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
