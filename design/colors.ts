/**
 * Sham Market — Syrian Visual Identity — Color Tokens
 *
 * New identity inspired by Damascus:
 * - Deep Damascus Blue: the sky over the Umayyad Mosque at dawn
 * - Terracotta Brick: old Damascus walls, warm earth
 * - Saffron/Gold: spice markets, light through alleys
 * - Sand: desert warmth, neutrality
 * - Olive Green: olive groves of Homs and Qalamoun
 * - White/Pure: clean, modern, trustworthy
 */

export const palette = {
  // Primary brand — deep Damascus blue
  damascusBlue: {
    50: '#f0f4f8',
    100: '#d9e3ed',
    200: '#a4b5d0',
    300: '#6d87b3',
    400: '#4a6994',
    500: '#2c4a72',
    600: '#1f3654',
    700: '#15253b',
    800: '#0e1a2a',
    900: '#09111b',
  },
  // Terracotta — warm, earthy
  terracotta: {
    50: '#fdf2f0',
    100: '#fce4df',
    200: '#f9c3b8',
    300: '#f39a86',
    400: '#ee7053',
    500: '#e05a3a',
    600: '#c4462c',
    700: '#9e3623',
    800: '#6f2819',
    900: '#3f190f',
  },
  // Saffron / Gold — warmth, value
  saffron: {
    50: '#fef8f0',
    100: '#fef3e0',
    200: '#fce0b0',
    300: '#f9c66a',
    400: '#f5a82c',
    500: '#e09219',
    600: '#c37a12',
    700: '#9b5d0d',
    800: '#653b08',
    900: '#321e04',
  },
  // Sand — neutral, background
  sand: {
    50: '#fefcf6',
    100: '#fdf9eb',
    200: '#fdf3d2',
    300: '#fde8a4',
    400: '#fdd76b',
    500: '#fbc735',
    600: '#d4a627',
    700: '#916f1c',
    800: '#5d4713',
    900: '#32270c',
  },
  // Olive — fresh, trustworthy
  olive: {
    50: '#f4f8f4',
    100: '#e6f0e6',
    200: '#c7e1c7',
    300: '#94c494',
    400: '#5da85d',
    500: '#3f8a3f',
    600: '#316e31',
    700: '#255525',
    800: '#183918',
    900: '#0c210c',
  },
  // Neutral grays (arabic-friendly)
  gray: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
};

// Semantic tokens (light mode)
export const tokens = {
  // Surface
  background: palette.gray[50],
  surface: '#ffffff',
  surfaceHover: palette.gray[50],
  border: palette.gray[200],
  borderStrong: palette.gray[300],

  // Text
  textPrimary: palette.gray[900],
  textSecondary: palette.gray[600],
  textMuted: palette.gray[400],
  textOnDark: '#ffffff',

  // Brand
  primary: palette.damascusBlue[600],
  primaryHover: palette.damascusBlue[700],
  primaryActive: palette.damascusBlue[800],
  accent: palette.terracotta[500],
  accentHover: palette.terracotta[600],
  highlight: palette.saffron[500],
  success: palette.olive[500],
  successBg: palette.olive[50],

  // Feedback
  error: '#d32f2f',
  errorBg: '#fdecea',
  warning: palette.saffron[500],
  warningBg: '#fff7e6',

  // Radius
  radiusSm: '6px',
  radiusMd: '10px',
  radiusLg: '16px',
  radiusFull: '9999px',
};
