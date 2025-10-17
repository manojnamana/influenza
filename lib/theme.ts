import { createTheme } from '@mui/material/styles';

// Convert OKLCH colors to RGB for MUI
const oklchToRgb = (oklch: string) => {
  // This is a simplified conversion - in production you'd want a proper OKLCH to RGB converter
  const match = oklch.match(/oklch\(([0-9.]+)\s+([0-9.]+)\s+([0-9.]+)\)/);
  if (!match) return '#000000';
  
  const [, l, c, h] = match.map(Number);
  
  // Simplified OKLCH to RGB conversion
  const lNorm = l;
  const cNorm = c;
  const hNorm = (h * Math.PI) / 180;
  
  const a = cNorm * Math.cos(hNorm);
  const b = cNorm * Math.sin(hNorm);
  
  // Convert to RGB (simplified)
  const r = Math.round(255 * Math.max(0, Math.min(1, lNorm + 0.5 * a)));
  const g = Math.round(255 * Math.max(0, Math.min(1, lNorm - 0.25 * a - 0.5 * b)));
  const blue = Math.round(255 * Math.max(0, Math.min(1, lNorm - 0.25 * a + 0.5 * b)));
  
  return `rgb(${r}, ${g}, ${blue})`;
};

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a855f7', // Purple from gradient
      light: '#c084fc',
      dark: '#7c3aed',
      contrastText: '#000000',
    },
    secondary: {
      main: '#10b981', // Green accent
      light: '#34d399',
      dark: '#059669',
      contrastText: '#000000',
    },
    background: {
      default: '#0a0a0a', // Very dark background
      paper: '#1a1a1a', // Slightly lighter for cards
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    divider: 'rgba(255, 255, 255, 0.1)',
  },
  typography: {
    fontFamily: '"Geist", "Geist Fallback", "Inter", "system-ui", sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.6,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 12,
          padding: '12px 24px',
          fontSize: '1rem',
          boxShadow: 'none',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 4px 20px rgba(168, 85, 247, 0.3)',
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #a855f7 0%, #10b981 100%)',
          backgroundSize: '200% 100%',
          '&:hover': {
            background: 'linear-gradient(135deg, #9333ea 0%, #059669 100%)',
            backgroundPosition: '100% 0',
            backgroundSize: '200% 100%',
          },
        },
        outlined: {
          borderColor: 'rgba(255, 255, 255, 0.2)',
          color: '#ffffff',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          '&:hover': {
            borderColor: 'rgba(255, 255, 255, 0.4)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
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
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 16,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;
