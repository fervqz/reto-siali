/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#AF8BC5',
          400: '#8E63A8',
        },
      }
    },
  },
  plugins: ['postcss'],
}