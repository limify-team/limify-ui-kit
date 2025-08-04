import type { Config } from 'tailwindcss'
import tailwindCssAnimate from 'tailwindcss-animate'
import { type FontStyles, colorsToken, typographyTokens } from './src/tokens'

const { fontFamily, fontWeight, textStyles } = typographyTokens
const dynamicColors = Object.keys(colorsToken).reduce((acc, color) => {
  acc[color] = colorsToken[color]
  return acc
}, {})
const generateDynamicFontSizes = (styles: FontStyles) =>
  Object.keys(styles).reduce((acc, key) => {
    acc[key] = [
      styles[key].fontSize,
      {
        fontWeight: styles[key].fontWeight,
        lineHeight: styles[key].lineHeight,
      },
    ]

    return acc
  }, {})

const generateFlatFontSizes = (styles: FontStyles) =>
  Object.keys(styles).reduce((acc, key) => {
    acc[key] = [styles[key].fontSize, styles[key].lineHeight]
    return acc
  }, {})
const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
    './src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  darkMode: ['class'],
  plugins: [tailwindCssAnimate],
  theme: {
    extend: {
      colors: dynamicColors,
      fontFamily: {
        mono: fontFamily.mono,
        sans: fontFamily.sans,
      },
      fontSize: {
        ...generateDynamicFontSizes(textStyles.body),
        ...generateDynamicFontSizes(textStyles.headings),
        ...generateDynamicFontSizes(textStyles.inline),
        ...generateFlatFontSizes(textStyles.link),
      },
      fontWeight: {
        black: String(fontWeight.black),
        bold: String(fontWeight.bold),
        medium: String(fontWeight.medium),
        regular: String(fontWeight.regular),
        semibold: String(fontWeight.semibold),
      },

      backgroundImage: {
        gradient:
          'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #10b981 100%)',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
}
export default config
