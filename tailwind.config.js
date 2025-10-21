/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        netflix: {
          red: '#e50914',
          'red-dark': '#b20710',
          black: '#000000',
          'gray-900': '#141414',
          'gray-800': '#1f1f1f',
          'gray-700': '#2a2a2a',
          'gray-600': '#404040',
          'gray-500': '#808080',
          'gray-400': '#b3b3b3',
          'gray-300': '#d9d9d9',
          white: '#ffffff',
        }
      },
      fontFamily: {
        'netflix': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'netflix-gradient': 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)',
      }
    },
  },
  plugins: [],
}
