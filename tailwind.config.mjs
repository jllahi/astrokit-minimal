// const defaultTheme = require('tailwindcss/defaultTheme')
// const colors = require('tailwindcss/colors')
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'], // '[data-mode="dark"]'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'color-black': colors.gray[800],
        'color-white': colors.gray[300],
        'color-bg-light': colors.indigo[50],
        'color-bg-dark': colors.zinc[900],
        'color-primary': { ...colors.purple, DEFAULT: colors.purple[500] },
        'color-secondary': { ...colors.orange, DEFAULT: colors.orange[500] },
        'color-accent': { ...colors.sky, DEFAULT: colors.sky[500] },
        'color-success': { ...colors.green, DEFAULT: colors.green[500] },
        'color-error': { ...colors.red, DEFAULT: colors.red[500] },
        'color-warning': { ...colors.yellow, DEFAULT: colors.yellow[500] },
      },
      padding: ({ theme }) => ({
        'layout-border': '0rem',
        'layout-main': '2rem',
        ...theme('spacing'),
      }),
    },
  },
  plugins: [],
}
