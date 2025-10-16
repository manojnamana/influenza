"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface SectionWrapperProps {
  children: ReactNode
  id?: string
  className?: string
}

export function SectionWrapper({ children, id, className = "" }: SectionWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-20% 0px -20% 0px" })

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{
        opacity: isInView ? 1 : 0.3,
        filter: isInView ? "blur(0px)" : "blur(8px)",
        scale: isInView ? 1 : 0.95,
      }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.section>
  )
}
