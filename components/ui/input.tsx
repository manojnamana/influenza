import * as React from 'react'
import { TextField, TextFieldProps } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(10px)',
    borderRadius: 12,
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#a855f7',
      boxShadow: '0 0 0 2px rgba(168, 85, 247, 0.2)',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '& .MuiInputBase-input': {
    color: '#ffffff',
    '&::placeholder': {
      color: 'rgba(255, 255, 255, 0.4)',
    },
  },
}))

interface InputProps extends Omit<TextFieldProps, 'variant'> {
  variant?: 'default' | 'outline' | 'ghost'
}

function Input({ variant = 'default', ...props }: InputProps) {
  return (
    <StyledTextField
      variant="outlined"
      {...props}
    />
  )
}

export { Input }
