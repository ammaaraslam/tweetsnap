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
      },
      minWidth: {
        5: "5.3rem",
        6: "7.2rem",
      },
      maxWidth: {
        5: "5.3rem",
        6: "10rem",
      },
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
    },
  },
  plugins: [],
};
