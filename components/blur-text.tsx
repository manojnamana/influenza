"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface BlurTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function BlurText({ children, className = "", delay = 0 }: BlurTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.25"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1])
  const blur = useTransform(scrollYProgress, [0, 1], [10, 0])

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        filter: blur.get() ? `blur(${blur.get()}px)` : "blur(0px)",
      }}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
