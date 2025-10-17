"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Box, SxProps, Theme } from "@mui/material"

interface VideoSectionProps {
  videoUrl: string
  children: React.ReactNode
  className?: string
  sx?: SxProps<Theme>
  overlayOpacity?: number
  blurAmount?: number
}

export function VideoSection({
  videoUrl,
  children,
  className = "",
  sx,
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
    <Box 
      ref={sectionRef} 
      className={`relative overflow-hidden ${className}`}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        ...sx
      }}
    >
      {/* Video Background */}
      <motion.div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          zIndex: 0, 
          opacity, 
          scale 
        }}
      >
        <video
          ref={videoRef}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: `blur(${blurAmount}px)`
          }}
          loop
          muted
          playsInline
          autoPlay
        >
          <source src={videoUrl} type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.9) 100%)',
            opacity: overlayOpacity
          }}
        />

        {/* Noise Texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.03,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10 }}>{children}</div>
    </Box>
  )
}
