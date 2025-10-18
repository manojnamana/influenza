"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface SplitTextAnimationProps {
  children: string
  className?: string
  animationType?: "fadeUp" | "fadeIn" | "scaleUp" | "slideRight"
  stagger?: number
  splitBy?: "chars" | "words"
}

export function SplitTextAnimation({
  children,
  className = "",
  animationType = "fadeUp",
  stagger = 0.03,
  splitBy = "chars",
}: SplitTextAnimationProps) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    // Manual text splitting (no premium plugin needed)
    const text = children
    let elements: HTMLSpanElement[] = []

    if (splitBy === "chars") {
      textRef.current.innerHTML = text
        .split("")
        .map((char) => `<span style="display: inline-block;">${char === " " ? "&nbsp;" : char}</span>`)
        .join("")
      elements = Array.from(textRef.current.querySelectorAll("span"))
    } else if (splitBy === "words") {
      textRef.current.innerHTML = text
        .split(" ")
        .map((word) => `<span style="display: inline-block; margin-right: 0.25em;">${word}</span>`)
        .join("")
      elements = Array.from(textRef.current.querySelectorAll("span"))
    }

    let animationProps = {}
    let fromProps = {}

    switch (animationType) {
      case "fadeUp":
        fromProps = { opacity: 0, y: 50 }
        animationProps = { opacity: 1, y: 0 }
        break
      case "fadeIn":
        fromProps = { opacity: 0 }
        animationProps = { opacity: 1 }
        break
      case "scaleUp":
        fromProps = { opacity: 0, scale: 0 }
        animationProps = { opacity: 1, scale: 1 }
        break
      case "slideRight":
        fromProps = { opacity: 0, x: -50 }
        animationProps = { opacity: 1, x: 0 }
        break
    }

    gsap.set(elements, fromProps)

    gsap.to(elements, {
      ...animationProps,
      duration: 0.8,
      stagger: stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [children, animationType, stagger, splitBy])

  return <div ref={textRef} className={className} />
}

