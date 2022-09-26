/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bungee: 'Bungee, cursive',
        teko: 'Teko, cursive',
        rubik: 'Rubik, cursive',
      },
      display: ['group-hover'],
    },
  },
  plugins: [],
}
