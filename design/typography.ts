/**
 * Sham Market — Typography System
 *
 * Arabic-first font stack:
 * - Primary: Noto Kufi Arabic (modern, geometric, excellent for UI)
 * - Secondary: Cairo (supports all Arabic diacritics well)
 * - Display: Tajawal (stylish, open-source)
 *
 * English fallback: Inter + system-ui
 */

export const fonts = {
  // Arabic display / headings
  display: [
    "'Tajawal', 'Noto Kufi Arabic', 'Cairo', 'Segoe UI', sans-serif",
  ],
  // Arabic body / UI
  body: [
    "'Noto Kufi Arabic', 'Cairo', 'Tajawal', 'Segoe UI', system-ui, sans-serif",
  ],
  // English fallback
  sans: [
    "Inter, system-ui, -apple-system, 'Segoe UI', sans-serif",
  ],
};

export const typeScale = {
  // Scale (base 1rem = 16px)
  xs: { fontSize: '0.75rem', lineHeight: '1rem' },        // 12px / 16px
  sm: { fontSize: '0.875rem', lineHeight: '1.25rem' },   // 14px / 20px
  base: { fontSize: '1rem', lineHeight: '1.5rem' },      // 16px / 24px
  lg: { fontSize: '1.125rem', lineHeight: '1.75rem' },   // 18px / 28px
  xl: { fontSize: '1.25rem', lineHeight: '1.75rem' },    // 20px / 28px
  '2xl': { fontSize: '1.5rem', lineHeight: '2rem' },     // 24px / 32px
  '3xl': { fontSize: '1.875rem', lineHeight: '2.25rem' },// 30px / 36px
  '4xl': { fontSize: '2.25rem', lineHeight: '2.5rem' },  // 36px / 40px
  // Headings
  h1: { fontSize: '2.5rem', lineHeight: '1.2' },
  h2: { fontSize: '2rem', lineHeight: '1.3' },
  h3: { fontSize: '1.5rem', lineHeight: '1.4' },
  h4: { fontSize: '1.25rem', lineHeight: '1.4' },
};

export const fontWeights = {
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
} as const;
