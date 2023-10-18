/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        golden: "#dcca87",
        black: "#090A0B",
        crimson: "#f5efdb",
      },
      fontFamily: {
        Theading: ["MedievalSharp", "cursive"],
        Tparagraph: ["Didact Gothic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
