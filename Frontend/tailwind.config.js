/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },colors:{
        customLightgreen: "#DFF1E6",
        customDarkgreen: "#007E2F",
      }
    },
  },
  plugins: [],
}
