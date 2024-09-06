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
      },
      colors: {
        customLightgreen: "#DFF1E6",
        customDarkgreen: "#007E2F",
      },
      keyframes: {
        slideInFromleft: {
          "0%": { transform: "translateX(-50%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideInFromright: {
          "0%": { transform: "translateX(50%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
      animation: {
        slideInFromleft: 'slideInFromleft 0.5s ease-in-out',
        slideInFromright: 'slideInFromright 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}
