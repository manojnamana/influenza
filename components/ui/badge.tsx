import * as React from 'react'
import { Chip, ChipProps } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledChip = styled(Chip)(({ theme }) => ({
  '&.MuiChip-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#ffffff',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  },
  '&.MuiChip-filled': {
    backgroundColor: 'linear-gradient(135deg, #a855f7 0%, #10b981 100%)',
    color: '#000000',
    '&:hover': {
      backgroundColor: 'linear-gradient(135deg, #9333ea 0%, #059669 100%)',
    },
  },
  '&.MuiChip-outlined': {
    backgroundColor: 'transparent',
    color: '#ffffff',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
}))

interface BadgeProps extends Omit<ChipProps, 'variant'> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
  asChild?: boolean
}

function Badge({
  variant = 'default',
  asChild = false,
  ...props
}: BadgeProps) {
  const muiVariant = variant === 'default' ? 'filled' : 
                    variant === 'outline' ? 'outlined' : 'filled'

  return (
    <StyledChip
      variant={muiVariant}
      {...props}
    />
  )
}

export { Badge }
