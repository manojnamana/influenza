"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useCursorVideo } from "./cursor-video-provider"

interface VideoSectionProps {
  videoUrl: string
  children: React.ReactNode
  className?: string
  overlayOpacity?: number
  blurAmount?: number
  sectionId?: string
}

export function VideoSection({
  videoUrl,
  children,
  className = "",
  overlayOpacity = 0.7,
  blurAmount = 0,
  sectionId,
}: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const { activeSection, registerSection, unregisterSection } = useCursorVideo()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Mosaic.com style: Refined, controlled transitions
  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [1.08, 1, 1, 1.03])
  
  // Controlled parallax for depth (Mosaic style)
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"])
  
  // Smooth blur transitions
  const dynamicBlur = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [1.5, 0, 0, 1.5])

  // Register section for cursor tracking
  useEffect(() => {
    if (sectionRef.current && sectionId) {
      registerSection(sectionId, sectionRef.current)
      return () => unregisterSection(sectionId)
    }
  }, [sectionId, registerSection, unregisterSection])

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

  // Play video only when in view - Mosaic.com style
  useEffect(() => {
    if (videoRef.current) {
      // Cinematic playback for agency feel (Mosaic style)
      videoRef.current.playbackRate = 0.7
      
      if (isInView) {
        videoRef.current.play().catch(() => {
          // Autoplay failed, user interaction required
        })
      } else {
        videoRef.current.pause()
      }
    }
  }, [isInView])
  
  // Preload video for smoother experience
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.preload = 'auto'
    }
  }, [])

  return (
    <div ref={sectionRef} className={`relative ${className}`}>
      {/* Video Background - Fantasy.co style with parallax */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden" 
        style={{ opacity }}
      >
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ 
            scale,
            y: videoY, // Parallax movement
          }}
        >
          <motion.video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            loop
            muted
            playsInline
            style={{ 
              filter: useTransform(
                dynamicBlur,
                (v) => `blur(${blurAmount + v}px)`
              )
            }}
          >
            <source src={videoUrl} type="video/mp4" />
          </motion.video>
        </motion.div>

        {/* Multi-layered Gradient Overlay - Fantasy.co style */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Primary gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black"
            style={{ opacity: overlayOpacity * 0.7 }}
          />
          {/* Vignette effect */}
          <div
            className="absolute inset-0 bg-radial-gradient"
            style={{ 
              background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, black 100%)',
              opacity: overlayOpacity * 0.5 
            }}
          />
          {/* Top fade for navbar blend */}
          <div
            className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent"
            style={{ opacity: overlayOpacity * 0.6 }}
          />
        </div>

        {/* Film grain texture - more subtle */}
        <motion.div
          className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.02, 0.015, 0.02])
          }}
        />
      </motion.div>

      {/* Content - ensure pointer events work */}
      <div className="relative z-10 pointer-events-auto">{children}</div>
    </div>
  )
}
