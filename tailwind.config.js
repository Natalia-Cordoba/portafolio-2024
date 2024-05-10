/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'custom-font': ['Oswald', 'sans-serif'],
      },
      screens: {
        'custom-media': { 'raw': '(min-width: 400px)' },
      },
      animation: {
        'typing': 'typing 2s steps(13), blink .3s infinite step-end alternate',
      },
      keyframes: {
        typing: {
          'from': { width: 0}
        },
        blink: {
          '50%': '{ border-color: transparent }'
        },
      }, 
    },
  },
  plugins: [],
}