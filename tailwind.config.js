/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        'my-orange': '#eF5104',
      },
    },
    fontFamily: {
      'futura-book': ['Futura Cyrillic Book'],
      'futura-bold': ['Futura Cyrillic Bold'],
      'futura-cond-extrabold': ['Futura Condensed Extra Bold'],
    }
  },
  plugins: [],
}
