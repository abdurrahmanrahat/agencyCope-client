/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        primary: "#ffe600", // yellow
        dark: "#16191e", // black
        light: "#f4f4f4", // light gray
        myGray: "#afafaf"
      }
    },
  },
  plugins: [require("daisyui")],
}

