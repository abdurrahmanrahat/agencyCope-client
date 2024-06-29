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
        primary: "#ffe600",
        dark: "#16191e",
        light: "#f4f4f4",
      }
    },
  },
  plugins: [require("daisyui")],
}

