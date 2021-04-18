const { fontFamily } = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "2.8/12": "23%",
      },
      margin: {
        sidebar: "23%",
      },
      colors: {
        gray: {
          ...colors.gray,
          100: "#f7f7f7",
        },
        yellow: {
          ...colors.yellow,
          link: "rgba(250, 208, 0, 0.2)",
        },
      },
      fontSize: {
        "7xl": "8rem",
      },
    },
    fontFamily: {
      sans: ["Karla", ...fontFamily.sans],
      display: ["Rubik", "Arial"],
    },
  },
  variants: {
    extend: {
      borderColor: ["dark"],
      borderOpacity: ["dark"],
      borderRadius: ["dark"],
      borderStyle: ["dark"],
      borderWidth: ["dark"],
      backgroundColor: ["odd", "dark"],
    },
  },
  plugins: [],
}
