"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/magnetic-button"

export function FuturisticNavbar() {
  const [activeSection, setActiveSection] = useState("")
  const { scrollY } = useScroll()

  const navOpacity = useTransform(scrollY, [0, 100], [0.6, 0.95])
  const navBlur = useTransform(scrollY, [0, 100], [8, 20])

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
    <motion.nav
      style={{
        backdropFilter: navBlur.get() ? `blur(${navBlur.get()}px)` : "blur(8px)",
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
    >
      <motion.div
        style={{ opacity: navOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent"
      />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 180 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative"
            >
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary animate-gradient-xy" />
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary blur-xl opacity-50"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            <motion.span
              className="text-3xl font-bold bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Influenza
            </motion.span>
          </Link>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
              >
                <Link href={item.href} className="relative px-6 py-3 group">
                  <motion.span
                    className="relative z-10 text-base font-medium"
                    animate={{
                      color: activeSection === item.href.slice(1) ? "oklch(0.99 0 0)" : "oklch(0.6 0 0)",
                      filter: activeSection === item.href.slice(1) ? "blur(0px)" : "blur(0.5px)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.name}
                  </motion.span>

                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/20 to-accent/0 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />

                  {/* Active indicator */}
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 rounded-xl bg-white/5 border border-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 relative z-10">
            <Button variant="ghost" size="default" className="text-base font-medium hover:bg-white/5 backdrop-blur-sm">
              Sign In
            </Button>
            <MagneticButton
              size="default"
              className="rounded-full px-8 bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-shadow duration-300"
            >
              Get Started
            </MagneticButton>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
