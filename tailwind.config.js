/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1F3A",
          light: "#142B4D",
        },
        gold: {
          DEFAULT: "#B8863C",
          light: "#D9B872",
          dark: "#8C6526",
        },
        paper: "#FAF8F3",
        charcoal: "#23262E",
        slate: "#5C6474",
        line: "#E4DFD3",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        ledger: "repeating-linear-gradient(to bottom, transparent, transparent 27px, rgba(11,31,58,0.06) 28px)",
      },
    },
  },
  plugins: [],
}

