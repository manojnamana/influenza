"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface VideoBackgroundProps {
  videoSrc?: string
  fallbackGradient?: string
  overlay?: boolean
  children?: React.ReactNode
}

export function VideoBackground({
  videoSrc = "/placeholder.mp4",
  fallbackGradient = "radial-gradient(circle at 50% 50%, oklch(0.85 0.15 280 / 0.2) 0%, transparent 70%)",
  overlay = true,
  children,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Fallback gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, oklch(0.85 0.15 280 / 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 70%, oklch(0.75 0.2 150 / 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, oklch(0.85 0.15 280 / 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 30%, oklch(0.85 0.15 280 / 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Video element (optional) */}
      {videoSrc && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
      )}

      {/* Content */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  )
}
