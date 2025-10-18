"use client"

import { useEffect, useRef, ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface HorizontalScrollSectionProps {
  children: ReactNode
  className?: string
}

export function HorizontalScrollSection({ children, className = "" }: HorizontalScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !scrollerRef.current) return

    const scrollDistance = scrollerRef.current.scrollWidth - window.innerWidth

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${scrollDistance}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    })

    tl.to(scrollerRef.current, {
      x: -scrollDistance,
      ease: "none",
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={sectionRef} className={`overflow-hidden ${className}`}>
      <div ref={scrollerRef} className="flex w-fit">
        {children}
      </div>
    </div>
  )
}

