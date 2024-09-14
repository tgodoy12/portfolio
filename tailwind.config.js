/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Archivos de tu proyecto donde se usarán las clases de Tailwind
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [],
}