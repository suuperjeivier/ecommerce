
const primeui = require("tailwindcss-primeui");
module.exports = {
  darkMode: ["selector", '[class="dark-mode"]'],
  content: ["./src/**/*.{html,ts}"],
  plugins: [primeui],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1920px",
    },
  },
};