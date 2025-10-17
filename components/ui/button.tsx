import * as React from 'react'
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledButton = styled(MuiButton)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 600,
  borderRadius: 12,
  padding: '12px 24px',
  fontSize: '1rem',
  boxShadow: 'none',
  '&:hover': {
    boxShadow: '0 4px 20px rgba(168, 85, 247, 0.3)',
  },
  '&.MuiButton-contained': {
    background: 'linear-gradient(135deg, #a855f7 0%, #10b981 100%)',
    '&:hover': {
      background: 'linear-gradient(135deg, #9333ea 0%, #059669 100%)',
    },
  },
  '&.MuiButton-outlined': {
    borderColor: 'rgba(255, 255, 255, 0.2)',
    color: '#ffffff',
    '&:hover': {
      borderColor: 'rgba(255, 255, 255, 0.4)',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
    },
  },
  '&.MuiButton-text': {
    color: '#ffffff',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
}))

interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg'
  asChild?: boolean
}

function Button({
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: ButtonProps) {
  const muiVariant = variant === 'default' ? 'contained' : 
                    variant === 'outline' ? 'outlined' : 
                    variant === 'ghost' || variant === 'link' ? 'text' : 'contained'

  const muiSize = size === 'sm' ? 'small' : 
                  size === 'lg' ? 'large' : 'medium'

  return (
    <StyledButton
      variant={muiVariant}
      size={muiSize}
      {...props}
    />
  )
}

export { Button }
