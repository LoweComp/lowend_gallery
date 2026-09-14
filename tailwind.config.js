/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lowend: {
          darkest: '#050200',
          dark: '#1a0500',
          red: '#b81d00',
          orange: '#ff4d00',
          glow: '#ff8800'
        }
      }
    },
  },
  plugins: [],
}