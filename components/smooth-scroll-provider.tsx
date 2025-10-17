// "use client"

// import type React from "react"
// import { useEffect, useRef } from "react"
// import Lenis from "lenis"

// export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
//   const lenisRef = useRef<Lenis | null>(null)

//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       orientation: "vertical",
//       gestureOrientation: "vertical",
//       smoothWheel: true,
//       wheelMultiplier: 1.2,
//       smoothTouch: false,
//       touchMultiplier: 2,
//       infinite: false,
//       autoResize: true,
//     })

//     lenisRef.current = lenis

//     function raf(time: number) {
//       lenis.raf(time)
//       requestAnimationFrame(raf)
//     }

//     requestAnimationFrame(raf)

//     const loadGSAP = async () => {
//       if (typeof window === "undefined") return

//       try {
//         // Load GSAP
//         if (!(window as any).gsap) {
//           const gsapScript = document.createElement("script")
//           gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
//           gsapScript.async = true
//           document.head.appendChild(gsapScript)

//           await new Promise((resolve) => {
//             gsapScript.onload = resolve
//           })
//         }

//         // Load ScrollTrigger
//         if (!(window as any).ScrollTrigger) {
//           const scrollTriggerScript = document.createElement("script")
//           scrollTriggerScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
//           scrollTriggerScript.async = true
//           document.head.appendChild(scrollTriggerScript)

//           await new Promise((resolve) => {
//             scrollTriggerScript.onload = resolve
//           })
//         }

//         const gsap = (window as any).gsap
//         const ScrollTrigger = (window as any).ScrollTrigger

//         if (gsap && ScrollTrigger) {
//           gsap.registerPlugin(ScrollTrigger)

//           // Update ScrollTrigger on Lenis scroll
//           lenis.on("scroll", ScrollTrigger.update)

//           // Sync GSAP ticker with Lenis
//           gsap.ticker.add((time: number) => {
//             lenis.raf(time * 1000)
//           })

//           gsap.ticker.lagSmoothing(0)
//         }
//       } catch (error) {
//         console.error("[v0] Error loading GSAP:", error)
//       }
//     }

//     loadGSAP()

//     return () => {
//       if (lenisRef.current) {
//         lenisRef.current.destroy()
//       }
//     }
//   }, [])

//   return <>{children}</>
// }
