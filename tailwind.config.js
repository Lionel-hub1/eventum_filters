/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD76E",
        primaryDark: "#FFB96E",
        secondary: "#E86464",
        secondaryDark: "#D2555D",
        tertiary: "#DEE1E9",
      }
    },
  },
  plugins: [],
};
