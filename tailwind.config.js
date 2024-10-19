/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Archivos de tu proyecto donde se usarán las clases de Tailwind
  ],
  theme: {
    extend: {
      minHeight: {
        '1/2vh': '50vh'
      },
      padding: {
        '30rem': '30rem',
      },
      colors: {
        'color-text': '#FFFCF9',
        'color-greenblue': '#B1EDE8',
        'color-pink': '#FF6978',
        'color-bluebolita': '#7F95D1',
        'color-darkest': '#000000',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}