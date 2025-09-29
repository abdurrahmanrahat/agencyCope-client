/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        clashDisplay: ['ClashDisplay', 'sans-serif']
      },
      colors: {
        primary: "#B3D335", // yellow
        dark: "#080708", // black
        darkShed: "#151415",
        borderColor: "#2a2a2a",
      },
      boxShadow: {
        myCustomShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      },
    },
  },
  plugins: [],
}

