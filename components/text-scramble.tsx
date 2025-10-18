"use client"

import { useEffect, useRef, useState } from "react"

interface TextScrambleProps {
  text: string
  className?: string
  trigger?: boolean
  speed?: number
}

export function TextScramble({ text, className = "", trigger = true, speed = 50 }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text)
  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?"

  useEffect(() => {
    if (!trigger) return

    let iteration = 0
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index]
            }
            if (char === " ") return " "
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join("")
      )

      iteration += 1 / 3

      if (iteration >= text.length) {
        clearInterval(interval)
        setDisplayText(text)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, trigger, speed])

  return <span className={className}>{displayText}</span>
}

