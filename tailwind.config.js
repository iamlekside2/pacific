/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0d19d3',
          light: '#3545e8',
          dark: '#0a13a8',
        },
        accent: '#ff6b35',
        navy: '#0a0f8a',
        'light-bg': '#f5f6ff',
        blue: {
          50: '#eef0ff',
          100: '#dee2ff',
          200: '#c3c8ff',
          300: '#9ea5ff',
          400: '#6b6fff',
          500: '#3545e8',
          600: '#0d19d3',
          700: '#0a14b0',
          800: '#0b1290',
          900: '#0a1075',
          950: '#070a4a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
