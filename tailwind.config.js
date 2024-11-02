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
      },
      boxShadow: {
        myCustomShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      },
    },
  },
  plugins: [require("daisyui")],
}

