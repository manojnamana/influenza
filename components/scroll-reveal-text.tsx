"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollRevealTextProps {
  children: string
  className?: string
  stagger?: number
  duration?: number
}

export function ScrollRevealText({
  children,
  className = "",
  stagger = 0.02,
  duration = 0.6,
}: ScrollRevealTextProps) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const words = children.split(" ")
    textRef.current.innerHTML = words
      .map((word) => {
        const chars = word.split("")
        return `<span class="word" style="display: inline-block; overflow: hidden;">
          ${chars.map((char) => `<span class="char" style="display: inline-block; opacity: 0; transform: translateY(100%)">${char === " " ? "&nbsp;" : char}</span>`).join("")}
        </span>&nbsp;`
      })
      .join("")

    const chars = textRef.current.querySelectorAll(".char")

    gsap.to(chars, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      y: 0,
      duration: duration,
      stagger: stagger,
      ease: "power3.out",
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [children, stagger, duration])

  return <div ref={textRef} className={className} />
}

