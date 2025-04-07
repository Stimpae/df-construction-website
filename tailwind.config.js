/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#191a19',
          dark: '#000000',
          light: '#2a2a2a',
        },
        secondary: {
          DEFAULT: '#ff7420',
          dark: '#e66000',
          light: '#ff9447',
        },
        neutral: {
          DEFAULT: '#f2f2f2', 
          light: '#ffffff',
          dark: '#d1d1d1',
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        heading: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};