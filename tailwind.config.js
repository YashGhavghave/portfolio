/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm-320': '321px',  // Start from 320px
        'sm-425': '460px', // End at 460px
      },
    },
  },
  plugins: []
}
