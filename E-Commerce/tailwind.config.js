/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
    content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': 'rgba(0, 255, 102, 1)',
      },

      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'amiri': ['Amiri', 'serif'],
        'noto': ['Noto Sans Arabic', 'sans-serif'],
      }
    }
  },
  plugins: [],
}

