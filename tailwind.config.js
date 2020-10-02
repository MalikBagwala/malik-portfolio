const { colors } = require("tailwindcss/defaultTheme")
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          "100": "#f7f7f7",
        },
      },
    },
    fontFamily: {
      sans: ["Karla", "Arial", "sans-serif"],
      display: ["Rubik", "sans-serif"],
    },
  },
  variants: {},
  plugins: [],
}
