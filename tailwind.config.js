const { colors, fontSize } = require("tailwindcss/defaultTheme")
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
      fontSize: {
        ...fontSize,
        "7xl": "8rem",
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
