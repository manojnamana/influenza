"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollMorphingTextProps {
  texts: string[]
  className?: string
}

export function ScrollMorphingText({ texts, className = "" }: ScrollMorphingTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || texts.length < 2) return

    const textElements = containerRef.current.querySelectorAll(".morph-text")

    textElements.forEach((text, index) => {
      if (index === 0) {
        gsap.set(text, { opacity: 1 })
      } else {
        gsap.set(text, { opacity: 0 })
      }
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    })

    textElements.forEach((text, index) => {
      if (index < textElements.length - 1) {
        tl.to(text, {
          opacity: 0,
          duration: 1,
        }).to(
          textElements[index + 1],
          {
            opacity: 1,
            duration: 1,
          },
          "<"
        )
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [texts])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {texts.map((text, index) => (
        <div
          key={index}
          className={`morph-text ${index === 0 ? "" : "absolute inset-0"}`}
        >
          {text}
        </div>
      ))}
    </div>
  )
}

