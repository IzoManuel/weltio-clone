/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      // default breakpoints but with 40px removed
      // screens: {
      //   xs: '375px'
      // },
    },
    extend: {
      fontFamily: {
        museo: ['Museo-Slab']
      }
    },
  },
  plugins: [],
}

