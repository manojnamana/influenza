"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface TextBlurRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function TextBlurReveal({ children, className = "", delay = 0 }: TextBlurRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-10%" })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      animate={{
        opacity: isInView ? 1 : 0,
        filter: isInView ? "blur(0px)" : "blur(10px)",
        y: isInView ? 0 : 20,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
