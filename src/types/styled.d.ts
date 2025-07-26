import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundSecondary: string;
      backgroundDark: string;
      primary: string;
      primaryLight: string;
      primaryDark: string;
      accent: string;
      accentLight: string;
      accentDark: string;
      secondaryAccent: string;
      secondaryAccentLight: string;
      secondaryAccentDark: string;
      white: string;
      gray50: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      gray900: string;
      success: string;
      warning: string;
      error: string;
      info: string;
      textPrimary: string;
      textSecondary: string;
      textTertiary: string;
      textInverse: string;
      border: string;
      borderLight: string;
      borderDark: string;
    };
    typography: {
      fontFamily: {
        header: string;
        body: string;
        mono: string;
      };
      fontSize: {
        xxs: string;
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
      };
      fontWeight: {
        light: number;
        normal: number;
        medium: number;
        semibold: number;
        bold: number;
        extrabold: number;
      };
      lineHeight: {
        none: number;
        tight: number;
        snug: number;
        normal: number;
        relaxed: number;
        loose: number;
      };
      letterSpacing: {
        tighter: string;
        tight: string;
        normal: string;
        wide: string;
        wider: string;
        widest: string;
      };
    };
    spacing: {
      [key: number]: string;
    };
    borderRadius: {
      none: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      full: string;
    };
    shadows: {
      none: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      inner: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
    zIndex: {
      hide: number;
      auto: string;
      base: number;
      docked: number;
      dropdown: number;
      sticky: number;
      banner: number;
      overlay: number;
      modal: number;
      popover: number;
      skipLink: number;
      toast: number;
      tooltip: number;
    };
    transitions: {
      fast: string;
      normal: string;
      slow: string;
      slower: string;
    };
  }
} 