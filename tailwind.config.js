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
        myCustomShadow: "rgba(0, 0, 0, 0.6) 0px 7px 29px 0px",
        
        // Glowing brand shadows
        glow: "0 0 15px rgba(179, 211, 53, 0.5), 0 0 30px rgba(179, 211, 53, 0.2)"
      },
    },
  },
  plugins: [],
}

