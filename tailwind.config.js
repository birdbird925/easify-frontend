module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "Arial", "Helvetica"],
        lora: ["Lora", "Manrope", "Helvetica", "Arial"],
        dmSans: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#0038FF",
        primaryHover: "#0329b5",
        gray: "#999999",
        textBlack: "#383838",
        borderGray: "#DDDDDD",
        error: "#c60200",
      },
      spacing: {
        navbar: "60px",
        authBox: "466px",
      },
      boxShadow: {
        navbar: "0px 1.6px 3.6px rgba(0, 0, 0, 0.08);",
      },
      width: {
        "1/3": "33.33%",
        "2/3": "66.66%",
        "3/3": "100%",
      },
      fontSize: {
        xxs: ".625rem",
        xxxs: ".5rem",
      },
      minHeight: {
        fullWithNavbar: "calc(100vh - 60px)",
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
      },
    },
  },
  plugins: [],
};
