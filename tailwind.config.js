module.exports = {
  content: [
    "*.{html,js}",
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0078d4",
        secondary: "#e88105",
      },
      fontSize: { title: "40px" },
      fontFamily: {
        custom: ["League Spartan"],
      },
      letterSpacing: {
        extraWide: "0.32em",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
