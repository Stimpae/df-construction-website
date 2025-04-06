/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e63946', // Example brand color (adjust to match your brand)
          dark: '#c1121f',
          light: '#f48c89',
        },
        secondary: {
          DEFAULT: '#1d3557', // Dark blue for headers/accents
          light: '#457b9d',
        },
        neutral: {
          light: '#f1faee',
          dark: '#2b2d42',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};