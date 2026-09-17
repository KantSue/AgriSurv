module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [require("daisyui")],
   daisyui: {
    themes: false // tu peux mettre n'importe quel thème existant ou ton thème personnalisé
  },
}
