"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface VideoSectionProps {
  videoUrl: string
  children: React.ReactNode
  className?: string
  overlayOpacity?: number
  blurAmount?: number
}

export function VideoSection({
  videoUrl,
  children,
  className = "",
  overlayOpacity = 0.7,
  blurAmount = 0,
}: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1.2, 1, 1, 1.2])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {
          // Autoplay failed, user interaction required
        })
      } else {
        videoRef.current.pause()
      }
    }
  }, [isInView])

  return (
    <div ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      {/* Video Background */}
      <motion.div className="absolute inset-0 z-0" style={{ opacity, scale }}>
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          loop
          muted
          playsInline
          style={{ filter: `blur(${blurAmount}px)` }}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"
          style={{ opacity: overlayOpacity }}
        />

        {/* Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
