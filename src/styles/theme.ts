import { createGlobalStyle } from 'styled-components';

// Color Palette
export const colors = {
  // Background colors
  background: '#0F0F0F',
  backgroundSecondary: '#1A1A1A',
  backgroundDark: '#2b2b2b',
  
  // Primary colors
  primary: '#FFFFFF',
  primaryLight: '#E0E0E0',
  primaryDark: '#CCCCCC',
  
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
  gray50: '#1A1A1A',
  gray100: '#2A2A2A',
  gray200: '#3A3A3A',
  gray300: '#4A4A4A',
  gray400: '#5A5A5A',
  gray500: '#6A6A6A',
  gray600: '#7A7A7A',
  gray700: '#8A8A8A',
  gray800: '#9A9A9A',
  gray900: '#AAAAAA',
  
  // Status colors
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  info: '#2196F3',
  
  // Text colors
  textPrimary: '#FFFFFF',
  textSecondary: '#B0B0B0',
  textTertiary: '#808080',
  textInverse: '#0F0F0F',
  
  // Border colors
  border: '#2A2A2A',
  borderLight: '#1A1A1A',
  borderDark: '#3A3A3A',
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
    xxs: '0.625rem',  // 10px
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
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px 0 rgba(0, 0, 0, 0.3)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)',
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