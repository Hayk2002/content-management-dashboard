/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'layout': '300px 1fr'
      },
      colors: {
        'active-blue': '#3f51b5',
      }
    },
  },
  plugins: [],
}

