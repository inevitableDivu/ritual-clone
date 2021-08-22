const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.js", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "750px",
      lg: "960px",
      xl: "1200px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        neue: "Comic Neue",
      },
    },
    colors: {
      ritual1: "#142b6f",
      ritual2: "rgb(255, 214, 0)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
