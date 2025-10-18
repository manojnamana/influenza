"use client"

import { useEffect, useRef, ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface PinSectionProps {
  children: ReactNode
  className?: string
  pinSpacing?: boolean
}

export function PinSection({ children, className = "", pinSpacing = true }: PinSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=200%",
      pin: true,
      pinSpacing: pinSpacing,
      anticipatePin: 1,
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [pinSpacing])

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  )
}

