/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      white: colors.white,
      "emerald": "#06d98d",
      "neon-blue": "#666fff",
      "medium-champagne": "#ffe9a9",
      "fiery-rose": "#fe5b63",
    },
    extend: {},
  },
  plugins: [],
}
