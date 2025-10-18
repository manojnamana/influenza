"use client"

import { ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useCursorPosition } from "./hooks/use-cursor-position"

interface CursorAnimatedWrapperProps {
  children: ReactNode
  sectionId: string
  className?: string
  animationType?: "fade" | "slide" | "scale" | "blur" | "rotate"
  delay?: number
  duration?: number
  triggerDistance?: number
}

export function CursorAnimatedWrapper({
  children,
  sectionId,
  className = "",
  animationType = "fade",
  delay = 0,
  duration = 0.8,
  triggerDistance = 100,
}: CursorAnimatedWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: `-${triggerDistance}px 0px -${triggerDistance}px 0px` })
  const { currentSection, isInSection } = useCursorPosition()

  // Check if cursor is in this specific section
  const isCursorInSection = currentSection === sectionId && isInSection

  // Animation variants based on type
  const getAnimationVariants = () => {
    const baseVariants = {
      hidden: {},
      visible: {},
    }

    switch (animationType) {
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }
      case "slide":
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }
      case "blur":
        return {
          hidden: { opacity: 0, filter: "blur(10px)" },
          visible: { opacity: 1, filter: "blur(0px)" },
        }
      case "rotate":
        return {
          hidden: { opacity: 0, rotate: -10, scale: 0.9 },
          visible: { opacity: 1, rotate: 0, scale: 1 },
        }
      default:
        return baseVariants
    }
  }

  const variants = getAnimationVariants()

  // Determine if animation should be active
  const shouldAnimate = isInView && isCursorInSection

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

// Specialized wrapper for text elements with blur effects
export function CursorAnimatedText({
  children,
  sectionId,
  className = "",
  delay = 0,
  duration = 0.8,
}: Omit<CursorAnimatedWrapperProps, "animationType">) {
  return (
    <CursorAnimatedWrapper
      sectionId={sectionId}
      animationType="blur"
      className={className}
      delay={delay}
      duration={duration}
    >
      {children}
    </CursorAnimatedWrapper>
  )
}

// Specialized wrapper for cards with scale effects
export function CursorAnimatedCard({
  children,
  sectionId,
  className = "",
  delay = 0,
  duration = 0.6,
}: Omit<CursorAnimatedWrapperProps, "animationType">) {
  return (
    <CursorAnimatedWrapper
      sectionId={sectionId}
      animationType="scale"
      className={className}
      delay={delay}
      duration={duration}
    >
      {children}
    </CursorAnimatedWrapper>
  )
}

// Specialized wrapper for buttons with magnetic-like effects
export function CursorAnimatedButton({
  children,
  sectionId,
  className = "",
  delay = 0,
  duration = 0.4,
}: Omit<CursorAnimatedWrapperProps, "animationType">) {
  const { currentSection, isInSection, x, y, velocity, isMoving } = useCursorPosition()
  const isCursorInSection = currentSection === sectionId && isInSection

  // Calculate magnetic effect based on cursor velocity and position
  const magneticStrength = isCursorInSection ? Math.min(Math.abs(velocity.x) + Math.abs(velocity.y), 2) : 0
  const scale = isCursorInSection ? 1 + (magneticStrength * 0.05) : 1
  const rotate = isCursorInSection ? velocity.x * 0.5 : 0

  return (
    <motion.div
      className={className}
      animate={
        isCursorInSection
          ? {
              scale,
              rotate,
              filter: `brightness(${1 + magneticStrength * 0.1})`,
            }
          : {
              scale: 1,
              rotate: 0,
              filter: "brightness(1)",
            }
      }
      transition={{
        duration: isMoving ? 0.1 : duration,
        delay,
        ease: isMoving ? "linear" : "easeOut",
      }}
      style={{
        transformOrigin: "center",
      }}
    >
      {children}
    </motion.div>
  )
}

// Enhanced wrapper with velocity-based animations
export function CursorAnimatedElement({
  children,
  sectionId,
  className = "",
  animationType = "fade",
  delay = 0,
  duration = 0.8,
  velocityMultiplier = 1,
}: CursorAnimatedWrapperProps & { velocityMultiplier?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px 0px -100px 0px" })
  const { currentSection, isInSection, velocity, sectionProgress } = useCursorPosition()

  // Check if cursor is in this specific section
  const isCursorInSection = currentSection === sectionId && isInSection

  // Enhanced animation variants with velocity
  const getAnimationVariants = () => {
    const velocityEffect = {
      x: velocity.x * velocityMultiplier,
      y: velocity.y * velocityMultiplier,
    }

    switch (animationType) {
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            x: velocityEffect.x,
            y: velocityEffect.y,
          },
        }
      case "slide":
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0,
            x: velocityEffect.x,
          },
        }
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { 
            opacity: 1, 
            scale: 1 + (sectionProgress * 0.1),
            x: velocityEffect.x,
            y: velocityEffect.y,
          },
        }
      case "blur":
        return {
          hidden: { opacity: 0, filter: "blur(10px)" },
          visible: { 
            opacity: 1, 
            filter: "blur(0px)",
            x: velocityEffect.x,
            y: velocityEffect.y,
          },
        }
      case "rotate":
        return {
          hidden: { opacity: 0, rotate: -10, scale: 0.9 },
          visible: { 
            opacity: 1, 
            rotate: velocity.x * 0.5, 
            scale: 1 + (sectionProgress * 0.05),
            x: velocityEffect.x,
            y: velocityEffect.y,
          },
        }
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }
    }
  }

  const variants = getAnimationVariants()

  // Determine if animation should be active
  const shouldAnimate = isInView && isCursorInSection

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: isCursorInSection ? 0.2 : duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
