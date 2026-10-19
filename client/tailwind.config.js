module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Palette AgriSurv (du plus foncé au plus clair)
        agri: {
          950: "#051F20",
          900: "#0B2B26",
          800: "#163832",
          700: "#235347",
          600: "#03624C",
          300: "#8EB69B",
          100: "#DAF1DE",
          50: "#E6EEE7",
        },
      },
    },
  },
  plugins: [require("daisyui")],
   daisyui: {
    themes: false // tu peux mettre n'importe quel thème existant ou ton thème personnalisé
  },
}
