/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        babyblue: '#A7C7E7',
        lightblue: '#D4F1F4',
        softpink: '#FFD1DC',
        navblue: '#5D9B9B',
        mint: '#C1F2B0'
      },
      fontFamily: {
        comic: ['"Comic Neue"', 'cursive'],
        cute: ['"Patrick Hand"', 'cursive']
      }
    }
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],
}
