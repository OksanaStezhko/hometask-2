/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'regal-blue': 'rgb(240, 248, 255, 0.5)', //исп
        'light-blue': 'rgb(218, 225, 245)', //исп
        'dark-blue': 'rgb(47, 70, 87)', //?
        'light-gray': ' rgb(111, 118, 124, 0.3)',
        'dark-gray': 'rgb(111, 118, 124)',
      },

      boxShadow: {
        button: '5px 4px 11px 1px rgba(64, 90, 111, 0.39)',
        form: '5px 4px 17px 0px rgba(87, 126, 156, 0.31)',
        section: '5px 4px 17px 2px rgba(87, 126, 156, 0.51)',
      },
    },
  },
  plugins: [],
}
