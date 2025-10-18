"use client"

import { useEffect, useRef, ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollScaleSectionProps {
  children: ReactNode
  className?: string
  scaleFrom?: number
  scaleTo?: number
}

export function ScrollScaleSection({
  children,
  className = "",
  scaleFrom = 0.8,
  scaleTo = 1,
}: ScrollScaleSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    gsap.fromTo(
      sectionRef.current,
      {
        scale: scaleFrom,
        opacity: 0,
      },
      {
        scale: scaleTo,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [scaleFrom, scaleTo])

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  )
}

