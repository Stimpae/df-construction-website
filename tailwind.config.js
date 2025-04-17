/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#37363b',
          light: '#4f4e54',

        },
        secondary: {
          DEFAULT: '#d65c33',
          light: '#e67e22',
        },
        neutral: {
          DEFAULT: '#f2f2f2', 
          light: '#ffffff',
          dark: '#d1d1d1',
        }
      },
      fontFamily: {
        sans: ['Arial', ...defaultTheme.fontFamily.sans],
        heading: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};