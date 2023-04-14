/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#8973EF",
        secondary: "#272D2D",
        nonPhotoBlue: "#92DCE5",
        roseyBrown: "#B79492",
      }
    },
  },
  plugins: [],
}

