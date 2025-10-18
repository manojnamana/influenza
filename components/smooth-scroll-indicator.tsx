"use client"

import { useEffect, useState } from "react"

export function SmoothScrollIndicator() {
  const [isActive, setIsActive] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const checkLenis = () => {
      const lenis = (window as any).lenis
      if (lenis) {
        setIsActive(true)
        
        // Listen to scroll updates
        const handleScroll = () => {
          setScrollY(Math.round(lenis.scroll))
        }
        
        window.addEventListener('lenis-scroll', handleScroll)
        return () => window.removeEventListener('lenis-scroll', handleScroll)
      } else {
        setIsActive(false)
      }
    }

    // Check after a short delay to ensure Lenis has initialized
    const timeout = setTimeout(checkLenis, 100)
    
    return () => clearTimeout(timeout)
  }, [])

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-[9999] pointer-events-none">
      <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-lg px-4 py-2 text-xs font-mono">
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${
              isActive ? 'bg-green-500 animate-pulse' : 'bg-red-500'
            }`}
          />
          <span className="text-white">
            Smooth Scroll: {isActive ? 'Active' : 'Inactive'}
          </span>
        </div>
        {isActive && (
          <div className="text-white/50 mt-1">
            Scroll: {scrollY}px
          </div>
        )}
      </div>
    </div>
  )
}

