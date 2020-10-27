const { colors, fontSize, fontFamily } = require("tailwindcss/defaultTheme")
module.exports = {
  experimental: {
    darkModeVariant: true,
  },
  dark: "class",
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.ts", "./src/**/*.tsx", "./src/**/*.jsx", "./src/**/*.js"],
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
      ...fontFamily,
      sans: ["Karla", ...fontFamily.sans],
      display: ["Rubik", "Arial"],
    },
  },
  variants: {
    backgroundColor: ["responsive", "odd", "hover", "focus", "dark"],
  },
  plugins: [],
}
