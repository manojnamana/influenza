"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import Lenis from "lenis"

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const rafIdRef = useRef<number | null>(null)

  useEffect(() => {
    console.log('🚀 Initializing Lenis smooth scroll (Mosaic.com style)...')
    
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.85, // Controlled scroll speed (Mosaic style)
      touchMultiplier: 1.8,
      infinite: false,
      autoResize: true,
      lerp: 0.1, // Smooth interpolation for fluid momentum
    })

    lenisRef.current = lenis

    // Expose Lenis globally for debugging
    if (typeof window !== 'undefined') {
      (window as any).lenis = lenis
      console.log('✅ Lenis instance available at window.lenis')
    }

    // Emit custom scroll events for other components
    lenis.on('scroll', () => {
      window.dispatchEvent(new CustomEvent('lenis-scroll', { detail: { scroll: lenis.scroll } }))
    })
    
    console.log('✅ Lenis scroll listener attached')

    // Handle anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      
      if (anchor && anchor.getAttribute('href')) {
        const href = anchor.getAttribute('href')!
        if (href === '#') return
        
        e.preventDefault()
        const targetElement = document.querySelector(href)
        
        if (targetElement) {
          console.log(`🎯 Smooth scrolling to: ${href}`)
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: -100,
            duration: 1.5,
          })
        } else {
          console.warn(`⚠️ Target element not found: ${href}`)
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    function raf(time: number) {
      lenis.raf(time)
      rafIdRef.current = requestAnimationFrame(raf)
    }

    rafIdRef.current = requestAnimationFrame(raf)

    // Load GSAP integration asynchronously
    const loadGSAP = async () => {
      if (typeof window === "undefined") return

      try {
        // Load GSAP
        if (!(window as any).gsap) {
          const gsapScript = document.createElement("script")
          gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
          gsapScript.async = true
          document.head.appendChild(gsapScript)

          await new Promise((resolve) => {
            gsapScript.onload = resolve
          })
        }

        // Load ScrollTrigger
        if (!(window as any).ScrollTrigger) {
          const scrollTriggerScript = document.createElement("script")
          scrollTriggerScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
          scrollTriggerScript.async = true
          document.head.appendChild(scrollTriggerScript)

          await new Promise((resolve) => {
            scrollTriggerScript.onload = resolve
          })
        }

        const gsap = (window as any).gsap
        const ScrollTrigger = (window as any).ScrollTrigger

        if (gsap && ScrollTrigger) {
          gsap.registerPlugin(ScrollTrigger)

          // Update ScrollTrigger on Lenis scroll
          lenis.on("scroll", ScrollTrigger.update)

          // Tell ScrollTrigger to use Lenis's scroll position
          ScrollTrigger.scrollerProxy(document.body, {
            scrollTop(value?: number) {
              if (arguments.length) {
                lenis.scrollTo(value as number, { immediate: true })
              }
              return lenis.scroll
            },
            getBoundingClientRect() {
              return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
            },
          })

          gsap.ticker.lagSmoothing(0)
          console.log('✅ GSAP ScrollTrigger integrated with Lenis')
        }
      } catch (error) {
        console.error("[Lenis] Error loading GSAP:", error)
      }
    }

    loadGSAP()

    return () => {
      console.log('🧹 Cleaning up Lenis...')
      document.removeEventListener('click', handleAnchorClick)
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
      }
      if (lenisRef.current) {
        lenisRef.current.destroy()
      }
    }
  }, [])

  return <>{children}</>
}
