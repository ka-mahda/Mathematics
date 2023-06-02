/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./simpleCalculator.html"],
  theme: {
    colors: {
      ...colors,
      LemonChiffon: "#FEF5AC",
      SkyBlue: "#97D2EC",
      SlateBlue: "#5F6F94",
      DarkBlue: "#25316D",
    },
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
      }),
      spacing: {
        '128': '32rem',
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
