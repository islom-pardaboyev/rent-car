/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: {
          5: '#1572D3',
          10: '#808080',
          15: '#959595',
          20: '#9C9C9C'
        }
      }
    },
  },
  plugins: [],
}