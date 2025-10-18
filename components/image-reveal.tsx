"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface ImageRevealProps {
  src: string
  alt: string
  className?: string
  overlayColor?: string
}

export function ImageReveal({ src, alt, className = "", overlayColor = "#000" }: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!containerRef.current || !overlayRef.current || !imageRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    })

    tl.fromTo(
      imageRef.current,
      {
        scale: 1.3,
      },
      {
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
      }
    ).fromTo(
      overlayRef.current,
      {
        scaleY: 1,
      },
      {
        scaleY: 0,
        duration: 1,
        ease: "power3.inOut",
      },
      "-=1"
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <Image
        ref={imageRef as any}
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
      <div
        ref={overlayRef}
        className="absolute inset-0 origin-top"
        style={{ backgroundColor: overlayColor }}
      />
    </div>
  )
}

