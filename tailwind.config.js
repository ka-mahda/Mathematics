/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./calc.html","./js/**/*.js", ""],
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
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
    }
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
