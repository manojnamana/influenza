"use client"

import { useEffect, useRef, ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface SmoothRevealSectionProps {
  children: ReactNode
  className?: string
  clipPath?: "circle" | "polygon" | "inset"
}

export function SmoothRevealSection({
  children,
  className = "",
  clipPath = "inset",
}: SmoothRevealSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const clipPaths = {
      circle: {
        from: "circle(0% at 50% 50%)",
        to: "circle(100% at 50% 50%)",
      },
      polygon: {
        from: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        to: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      inset: {
        from: "inset(50% 50% 50% 50%)",
        to: "inset(0% 0% 0% 0%)",
      },
    }

    gsap.fromTo(
      sectionRef.current,
      {
        clipPath: clipPaths[clipPath].from,
        opacity: 0,
      },
      {
        clipPath: clipPaths[clipPath].to,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [clipPath])

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  )
}

