const defaultTheme = require("tailwindcss/defaultTheme");
const withAnimations = require("animated-tailwindcss");

module.exports = withAnimations({
  darkMode: "media",
  mode: "jit",
  content: [
    "./components/**/*.{js,jsx}",
    "./consts/**/*.{js,jsx}",
    "./hooks/**/*.{js,jsx}",
    "./images/**/*.{js,jsx}",
    "./layouts/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./styles/**/*.{js,jsx}",
    "./utils/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
        Gilroy: ["Gilroy"],
      },
      colors: {
        "bt-color": "rgba(255,255,255,0.2)",
        "bt-hover": "rgba(255,255,255,0.4)",
      },
      backgroundSize: {
        "100%": "100%",
        50: "50%",
        16: "4rem",
      },
      lineHeight: {
        "1.2rem": "1.2",
        12: "3rem",
      },
      fontSize: {
        "14puntos": "19px",
      },
      letterSpacing: {
        megaWidest: ".27em",
        ochopixels: "8px",
        otroWidest: "0.2em",
        miniEspacio: "0.040em",
        miniEspacio2: "0.080em",
        miniEspacio3: "0.025em",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0px 1px 3px 2px rgba(0, 0, 0, 0.1), -1px -4px 2px 1px rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0px 0px 8px 1px rgba(94,94,94,0.2)",
        "3xl": "0px 0px 8px 1px rgba(94,94,94,0.3)",
        "4xl": "0px 4px 13px 1px rgba(94,94,94, 0.1)",
        left: "-5px 4px 13px 1px rgba(94,94,94, 0.1)",
        right: "5px 4px 13px 1px rgba(94,94,94, 0.1)",
        inner: "0px 0px 8px 1px rgba(0,0,0,0.2)",
        sombrasCards: "0px 4px 10px rgba(0, 0, 0, 0.25)",
        sombrasCalculadora: "0px 4px 30px rgba(0, 0, 0, 0.15)",
        sombrasCalculadora2: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        none: "none",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "1.5px",
      },
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    backgroundPosition: {
      bottom: "bottom",
      "bottom-4": "center bottom 1rem",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
      "top-4": "center top 1rem",
    },
  },
  variants: {
    fill: ["hover", "focus"],
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio"),],
});
