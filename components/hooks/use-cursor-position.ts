"use client"

import { useState, useEffect, useCallback } from "react"

interface CursorPosition {
  x: number
  y: number
  isInSection: boolean
  currentSection: string | null
  sectionProgress: number
  isMoving: boolean
  velocity: { x: number; y: number }
}

export function useCursorPosition() {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
    isInSection: false,
    currentSection: null,
    sectionProgress: 0,
    isMoving: false,
    velocity: { x: 0, y: 0 },
  })

  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 })
  const [lastTime, setLastTime] = useState(Date.now())

  const calculateVelocity = useCallback((currentX: number, currentY: number, currentTime: number) => {
    const deltaX = currentX - lastPosition.x
    const deltaY = currentY - lastPosition.y
    const deltaTime = currentTime - lastTime
    
    if (deltaTime === 0) return { x: 0, y: 0 }
    
    return {
      x: deltaX / deltaTime,
      y: deltaY / deltaTime,
    }
  }, [lastPosition, lastTime])

  useEffect(() => {
    let animationFrame: number
    let isMovingTimeout: NodeJS.Timeout

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now()
      const x = e.clientX
      const y = e.clientY

      // Calculate velocity
      const velocity = calculateVelocity(x, y, currentTime)

      // Find which section the cursor is currently in
      const sections = document.querySelectorAll("section[id]")
      let currentSection: string | null = null
      let isInSection = false
      let sectionProgress = 0

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const sectionId = section.getAttribute("id")
        
        if (
          x >= rect.left &&
          x <= rect.right &&
          y >= rect.top &&
          y <= rect.bottom
        ) {
          currentSection = sectionId
          isInSection = true
          
          // Calculate progress within the section (0 to 1)
          const sectionWidth = rect.width
          const sectionHeight = rect.height
          const relativeX = (x - rect.left) / sectionWidth
          const relativeY = (y - rect.top) / sectionHeight
          sectionProgress = Math.max(relativeX, relativeY)
        }
      })

      // Update position and velocity
      setLastPosition({ x, y })
      setLastTime(currentTime)

      // Set moving state
      setCursorPosition(prev => ({
        ...prev,
        isMoving: true,
      }))

      // Clear previous timeout
      clearTimeout(isMovingTimeout)

      // Set timeout to detect when cursor stops moving
      isMovingTimeout = setTimeout(() => {
        setCursorPosition(prev => ({
          ...prev,
          isMoving: false,
        }))
      }, 100)

      setCursorPosition({
        x,
        y,
        isInSection,
        currentSection,
        sectionProgress,
        isMoving: true,
        velocity,
      })
    }

    const handleMouseLeave = () => {
      setCursorPosition(prev => ({
        ...prev,
        isInSection: false,
        currentSection: null,
        isMoving: false,
        velocity: { x: 0, y: 0 },
      }))
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      clearTimeout(isMovingTimeout)
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [calculateVelocity, lastPosition, lastTime])

  return cursorPosition
}
