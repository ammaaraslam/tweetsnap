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
      boxShadow: {
        lightsh: "0 0 2px #000C14",
        darksh: "0 0 2px #EBF7FF",
      },
    },
    colors: {
      light: "#EBF7FF",
      dark: "#000C14",
      primary: "#018AE6",
      lighterPrimary: "#20A5FE",
      secondary: "#FFB703",
      lighterSecondary: "#FFC533",
      dptext: "#FFFFFF",
      lptext: "#000000",
      dstext: "#D6EFFF",
      lstext: "#003152",
    },
  },
  plugins: [],
};
