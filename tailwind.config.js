/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#9F86C0',
          400: '#8E63A8',
        },
        mutted: {
          300: '#767676',
        },
        'almostblack': {
          300: '#111315'
        }
      }
    },
  },
  plugins: ['postcss'],
}