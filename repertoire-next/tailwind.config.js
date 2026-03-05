/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00b4fb',
      },
      fontFamily: {
        body: ['Muli', 'sans-serif'],
        heading: ['"Saira Extra Condensed"', 'sans-serif'],
      },
      width: {
        sidebar: '17rem',
      },
      spacing: {
        sidebar: '17rem',
      },
    },
  },
  plugins: [],
}
