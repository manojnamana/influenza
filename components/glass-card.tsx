"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card, CardProps } from "@mui/material"
import { styled } from "@mui/material/styles"

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, transparent 100%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    zIndex: 1,
  },
  '&:hover': {
    transform: 'translateY(-5px) scale(1.02)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
    '&::before': {
      opacity: 1,
    },
  },
}))

interface GlassCardProps extends CardProps {
  children: React.ReactNode
  hover?: boolean
}

export function GlassCard({ children, hover = true, ...props }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      transition={{ duration: 0.3 }}
    >
      <StyledCard {...props}>
        {children}
      </StyledCard>
    </motion.div>
  )
}
