import { createGlobalStyle } from 'styled-components';

// Color Palette
export const colors = {
  // Background colors
  background: '#FFFFFF',
  backgroundSecondary: '#FAFAFA',
  
  // Primary colors
  primary: '#222222',
  primaryLight: '#444444',
  primaryDark: '#111111',
  
  // Accent colors
  accent: '#4CAF50',
  accentLight: '#66BB6A',
  accentDark: '#388E3C',
  
  // Secondary accent
  secondaryAccent: '#F5A623',
  secondaryAccentLight: '#FFB74D',
  secondaryAccentDark: '#F57C00',
  
  // Neutral colors
  white: '#FFFFFF',
  gray50: '#FAFAFA',
  gray100: '#F5F5F5',
  gray200: '#EEEEEE',
  gray300: '#E0E0E0',
  gray400: '#BDBDBD',
  gray500: '#9E9E9E',
  gray600: '#757575',
  gray700: '#616161',
  gray800: '#424242',
  gray900: '#212121',
  
  // Status colors
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  info: '#2196F3',
  
  // Text colors
  textPrimary: '#222222',
  textSecondary: '#757575',
  textTertiary: '#9E9E9E',
  textInverse: '#FFFFFF',
  
  // Border colors
  border: '#E0E0E0',
  borderLight: '#F5F5F5',
  borderDark: '#BDBDBD',
};

// Typography
export const typography = {
  // Font families
  fontFamily: {
    header: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    body: 'Source Sans Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: 'IBM Plex Mono, "JetBrains Mono", "SF Mono", Monaco, "Cascadia Code", monospace',
  },
  
  // Font sizes
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
  },
  
  // Font weights
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  
  // Line heights
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  
  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
};

// Spacing
export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
  40: '10rem',    // 160px
  48: '12rem',    // 192px
  56: '14rem',    // 224px
  64: '16rem',    // 256px
};

// Border radius
export const borderRadius = {
  none: '0',
  sm: '0.125rem',   // 2px
  base: '0.25rem',  // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',
};

// Shadows
export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
};

// Breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Z-index
export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
};

// Transitions
export const transitions = {
  fast: '150ms ease-in-out',
  normal: '250ms ease-in-out',
  slow: '350ms ease-in-out',
  slower: '500ms ease-in-out',
};

// Theme object
export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  breakpoints,
  zIndex,
  transitions,
};

// Global styles
export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Source+Sans+Pro:wght@300;400;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
  
  * {
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: ${typography.fontFamily.body};
    font-size: ${typography.fontSize.base};
    line-height: ${typography.lineHeight.normal};
    color: ${colors.textPrimary};
    background-color: ${colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${typography.fontFamily.header};
    font-weight: ${typography.fontWeight.semibold};
    line-height: ${typography.lineHeight.tight};
    margin: 0 0 ${spacing[4]} 0;
  }
  
  h1 {
    font-size: ${typography.fontSize['5xl']};
    font-weight: ${typography.fontWeight.bold};
  }
  
  h2 {
    font-size: ${typography.fontSize['4xl']};
  }
  
  h3 {
    font-size: ${typography.fontSize['3xl']};
  }
  
  h4 {
    font-size: ${typography.fontSize['2xl']};
  }
  
  h5 {
    font-size: ${typography.fontSize.xl};
  }
  
  h6 {
    font-size: ${typography.fontSize.lg};
  }
  
  p {
    margin: 0 0 ${spacing[4]} 0;
    line-height: ${typography.lineHeight.relaxed};
  }
  
  a {
    color: ${colors.accent};
    text-decoration: none;
    transition: color ${transitions.fast};
    
    &:hover {
      color: ${colors.accentDark};
    }
  }
  
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all ${transitions.fast};
  }
  
  code {
    font-family: ${typography.fontFamily.mono};
    font-size: ${typography.fontSize.sm};
    background-color: ${colors.gray100};
    padding: ${spacing[1]} ${spacing[2]};
    border-radius: ${borderRadius.base};
  }
  
  pre {
    font-family: ${typography.fontFamily.mono};
    background-color: ${colors.gray100};
    padding: ${spacing[4]};
    border-radius: ${borderRadius.lg};
    overflow-x: auto;
  }
`;

export type Theme = typeof theme;
export default theme; 