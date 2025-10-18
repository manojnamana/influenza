"use client"

import { motion } from "framer-motion"
import { useCursorPosition } from "./hooks/use-cursor-position"

export function CursorSectionIndicator() {
  const { currentSection, isInSection, x, y, sectionProgress } = useCursorPosition()

  if (!isInSection || !currentSection) return null

  return (
    <motion.div
      className="fixed top-4 right-4 z-50 pointer-events-none"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-3 shadow-2xl">
        <div className="flex items-center gap-3">
          <motion.div
            className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="text-white font-medium text-sm">
            {currentSection.charAt(0).toUpperCase() + currentSection.slice(1)}
          </div>
        </div>
        
        {/* Progress bar */}
        <motion.div
          className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent"
            style={{
              width: `${sectionProgress * 100}%`,
            }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

// Alternative floating cursor effect
export function CursorFloatingEffect() {
  const { currentSection, isInSection, x, y, velocity } = useCursorPosition()

  if (!isInSection || !currentSection) return null

  return (
    <motion.div
      className="fixed pointer-events-none z-40"
      style={{
        left: x - 20,
        top: y - 20,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 blur-sm" />
    </motion.div>
  )
}
