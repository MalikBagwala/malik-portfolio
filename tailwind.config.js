const { colors, fontFamily } = require("tailwindcss/defaultTheme")
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
      },
      fontSize: {
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
    borderColor: ["responsive", "hover", "focus", "dark"],
    borderOpacity: ["responsive", "hover", "focus", "dark"],
    borderRadius: ["responsive", "dark"],
    borderStyle: ["responsive", "dark"],
    borderWidth: ["responsive", "dark"],
    backgroundColor: ["responsive", "odd", "hover", "focus", "dark"],
  },
}
