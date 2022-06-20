module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        101: "1.01",
      },
      width: {
        settings: "23%",
        downloadDropdown: "21.2%",
      },
      height: {
        "9/10": "90%",
      },

      minWidth: {
        4: "4rem",
        5: "5.3rem",
        6: "7.2rem",
      },
      maxWidth: {
        5: "5.3rem",
        6: "10rem",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      franklin: ["Libre Franklin", "sans-serif"],
      robotoCondensed: ["Roboto Condensed", "sans-serif"],
    },
    colors: {
      light: "#EBF7FF",
      dark: "#000C14",
      primary: "#018AE6",
      lighterPrimary: "#20A5FE",
      secondary: "#FFB703",
      lighterSecondary: "#FFC533",
      textLight: "#FFFFFF",
      textDark: "#000000",
      textS: "#D6EFFF",
      textSDark: "#003152",
      blue: "#1d9bf0",
      grey: "#6a6f73",
      red: "#FF0000",
      green: "#00FF00",
      lightGrey: "#D6EFFF",
    },
  },
  plugins: [],
};
