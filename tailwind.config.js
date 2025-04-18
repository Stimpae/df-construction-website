/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a0a0a',
          light: '#434248',

        },
        secondary: {
          DEFAULT: '#d65c33',
          light: '#d7714e',
        },
        neutral: {
          DEFAULT: '#f2f2f2', 
          light: '#ffffff',
          dark: '#d1d1d1',
        }
      },
      fontFamily: {
        sans: ['Arial', ...defaultTheme.fontFamily.sans],
        heading: ['Mona Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};