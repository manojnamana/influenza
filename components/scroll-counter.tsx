"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollCounterProps {
  end: number
  start?: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
}

export function ScrollCounter({
  end,
  start = 0,
  duration = 2,
  className = "",
  prefix = "",
  suffix = "",
}: ScrollCounterProps) {
  const [count, setCount] = useState(start)
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!counterRef.current) return

    const counter = { value: start }

    gsap.to(counter, {
      value: end,
      duration: duration,
      ease: "power2.out",
      onUpdate: () => {
        setCount(Math.floor(counter.value))
      },
      scrollTrigger: {
        trigger: counterRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [start, end, duration])

  return (
    <span ref={counterRef} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

