"use client"

import React, { createContext, useContext, useEffect, useState, useRef } from "react"

interface CursorVideoContextType {
  activeSection: string | null
  setActiveSection: (section: string | null) => void
  registerSection: (id: string, element: HTMLElement) => void
  unregisterSection: (id: string) => void
}

const CursorVideoContext = createContext<CursorVideoContextType | undefined>(undefined)

export function CursorVideoProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const sectionsRef = useRef<Map<string, HTMLElement>>(new Map())

  const registerSection = (id: string, element: HTMLElement) => {
    sectionsRef.current.set(id, element)
  }

  const unregisterSection = (id: string) => {
    sectionsRef.current.delete(id)
  }

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event
      
      // Find which section the cursor is currently in
      let currentSection: string | null = null
      
      for (const [sectionId, element] of sectionsRef.current) {
        const rect = element.getBoundingClientRect()
        if (
          clientX >= rect.left &&
          clientX <= rect.right &&
          clientY >= rect.top &&
          clientY <= rect.bottom
        ) {
          currentSection = sectionId
          break
        }
      }
      
      setActiveSection(currentSection)
    }

    // Add mouse move listener
    document.addEventListener('mousemove', handleMouseMove)
    
    // Also check on scroll in case cursor moves without mouse movement
    const handleScroll = () => {
      // Trigger a mouse move event to recheck sections
      document.dispatchEvent(new MouseEvent('mousemove', {
        clientX: 0,
        clientY: 0,
        bubbles: true
      }))
    }
    
    window.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <CursorVideoContext.Provider
      value={{
        activeSection,
        setActiveSection,
        registerSection,
        unregisterSection,
      }}
    >
      {children}
    </CursorVideoContext.Provider>
  )
}

export function useCursorVideo() {
  const context = useContext(CursorVideoContext)
  if (context === undefined) {
    throw new Error('useCursorVideo must be used within a CursorVideoProvider')
  }
  return context
}
